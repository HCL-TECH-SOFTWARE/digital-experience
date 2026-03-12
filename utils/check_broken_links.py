#!/usr/bin/env python3
"""
Script to check for broken links in markdown files.
It scans all markdown files in the docs-source folder and its subfolders,
checking if links to other local markdown files and assets/images exist.

Modes:
- Report mode (default): Generates a YAML report of broken links
- Update mode: Attempts to fix broken links using suggested relative paths
"""

import os
import re
import sys
import yaml
import argparse
from pathlib import Path
from collections import defaultdict
from urllib.parse import unquote
from datetime import datetime

# Constants
DOCS_SOURCE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "docs-source")
REPORT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "broken_links_report.txt")

# Regular expressions for finding links in markdown
# Match [text](link) format and also direct links to assets like ![alt](image_path)
MARKDOWN_LINK_PATTERN = re.compile(r'\[.*?\]\((.*?)(?:\s+".*?")?\)')
IMAGE_LINK_PATTERN = re.compile(r'!\[.*?\]\((.*?)(?:\s+".*?")?\)')


def is_external_link(link):
    """Check if the link is external (http, https, mailto, etc.)"""
    return link.startswith(('http://', 'https://', 'mailto:', 'ftp://', '#'))


def normalize_path(base_dir, current_file, link_path):
    """Normalize the link path relative to the current file location"""
    if is_external_link(link_path):
        return None  # Skip external links
    
    # Decode URL-encoded characters
    link_path = unquote(link_path)
    
    # Handle fragment identifiers (anchors)
    if '#' in link_path:
        link_path = link_path.split('#')[0]
        if not link_path:  # If it's just an anchor to the current page
            return None
    
    # Remove query parameters if any
    if '?' in link_path:
        link_path = link_path.split('?')[0]
    
    # Get the directory of the current file
    current_dir = os.path.dirname(current_file)
    
    # Fix for double docs-source path issue
    if 'docs-source/docs-source' in current_dir:
        current_dir = current_dir.replace('docs-source/docs-source', 'docs-source')
        print(f"Fixed current_dir: {current_dir}")
    
    # Construct absolute path based on the link type
    if link_path.startswith('/'):
        # Absolute path from docs root
        target_path = os.path.normpath(os.path.join(base_dir, link_path.lstrip('/')))
    else:
        # Relative path
        target_path = os.path.normpath(os.path.join(current_dir, link_path))
    
    return target_path


def check_link_exists(path):
    """Check if the file or directory at the given path exists"""
    # For debugging
    print(f"Checking if exists: {path}")
    
    # If path ends with slash, check if directory exists
    if path.endswith('/'):
        exists = os.path.isdir(path)
        print(f"Directory exists: {exists}")
        return exists
    
    # Check if the file exists
    if os.path.exists(path):
        print(f"File exists: True")
        return True
    
    # If path doesn't have an extension, check if it exists with .md extension
    if not os.path.splitext(path)[1]:
        md_path = f"{path}.md"
        exists = os.path.exists(md_path)
        print(f"MD file exists: {exists}")
        return exists
    
    print(f"File exists: False")
    return False


def find_broken_links():
    """
    Scan markdown files for broken links and return a dictionary of files
    with their broken links
    """
    broken_links = defaultdict(list)
    
    # Walk through all files in docs-source directory
    for root, _, files in os.walk(DOCS_SOURCE_DIR):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                rel_file_path = os.path.relpath(file_path, os.path.dirname(DOCS_SOURCE_DIR))
                file_dir = os.path.dirname(file_path)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    try:
                        content = f.read()
                        
                        # Find all markdown links and image links
                        links = MARKDOWN_LINK_PATTERN.findall(content)
                        images = IMAGE_LINK_PATTERN.findall(content)
                        all_links = links + images
                        
                        for link in all_links:
                            if is_external_link(link):
                                continue
                            
                            normalized_path = normalize_path(DOCS_SOURCE_DIR, file_path, link)
                            if normalized_path and not check_link_exists(normalized_path):
                                # Calculate relative path correctly
                                rel_target_path = link
                                
                                # Handle absolute paths that start with /Team-Q/internal-doc/
                                if link.startswith('/Team-Q/internal-doc/'):
                                    # Calculate how many levels up we need to go from the current file
                                    # Count directory levels in the file path (relative to docs-source)
                                    rel_file_dir = os.path.dirname(rel_file_path)
                                    # We need to go up levels_up - 1 because we're already in docs-source
                                    # and only need to count how many subdirectories we're in
                                    levels_up = len(rel_file_dir.split(os.sep)) - 1 if rel_file_dir else 0
                                    
                                    # Build the proper relative path prefix with correct number of "../"
                                    prefix = "../" * levels_up
                                    
                                    # Extract the path after /Team-Q/internal-doc/
                                    clean_path = link[len('/Team-Q/internal-doc/'):]
                                    
                                    # Combine the prefix with the clean path
                                    rel_target_path = prefix + clean_path
                                
                                broken_links[rel_file_path].append((link, normalized_path, rel_target_path))
                    except UnicodeDecodeError:
                        print(f"Warning: Could not read file {file_path} due to encoding issues")
                        continue
    
    return broken_links


def generate_report(broken_links):
    """Generate a YAML-formatted report file with broken links organized by markdown file"""
    # Prepare the report data structure
    report_data = {
        'metadata': {
            'title': 'Broken Links Report',
            'generated_on': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            'total_broken_links': sum(len(links) for links in broken_links.values()),
            'files_with_broken_links': len(broken_links)
        },
        'broken_links': {}
    }
    
    # If no broken links found
    if not broken_links:
        report_data['broken_links'] = None
    else:
        # Organize broken links by source file
        for file_path, links in sorted(broken_links.items()):
            file_path_formatted = file_path.replace('\\', '/')
            report_data['broken_links'][file_path_formatted] = []
            
            for link, _, rel_target_path in links:
                # For consistency, use forward slashes in all paths
                link_formatted = link.replace('\\', '/')
                rel_target_formatted = rel_target_path.replace('\\', '/')
                
                # Add to the broken links list for this file
                report_data['broken_links'][file_path_formatted].append({
                    'link': link_formatted,
                    'suggested_relative_path': rel_target_formatted
                })
    
    # Write the YAML report
    with open(REPORT_FILE, 'w', encoding='utf-8') as report:
        # Add a comment header that will be preserved in the YAML
        report.write("# Broken Links Report - Generated by check_broken_links.py\n")
        report.write("# This file is in YAML format for both machine and human readability\n\n")
        
        # Dump the YAML with nice formatting
        yaml.dump(report_data, report, default_flow_style=False, sort_keys=False, allow_unicode=True, width=120)
    
    return report_data


def import_time():
    """Get the current date and time"""
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def check_if_target_exists(source_file_path, relative_target):
    """
    Check if a file exists at the suggested relative path from the source file
    
    Args:
        source_file_path: Path to the source markdown file
        relative_target: Suggested relative path to the target
        
    Returns:
        bool: True if target exists, False otherwise
    """
    source_dir = os.path.dirname(source_file_path)
    
    # Fix for double docs-source path issue
    if 'docs-source/docs-source' in source_dir:
        source_dir = source_dir.replace('docs-source/docs-source', 'docs-source')
        print(f"Fixed source_dir: {source_dir}")
    
    target_path = os.path.normpath(os.path.join(source_dir, relative_target))
    
    # For debugging
    print(f"Checking target: {target_path} (from {source_file_path} + {relative_target})")
    
    # If the path ends with a slash, check if it's a directory
    if target_path.endswith('/') or target_path.endswith('\\'):
        exists = os.path.isdir(target_path)
        print(f"Target directory exists: {exists}")
        return exists
    
    # Check if file exists directly
    if os.path.exists(target_path):
        print(f"Target file exists: True")
        return True
    
    # If no extension, try with .md
    if not os.path.splitext(target_path)[1]:
        md_path = f"{target_path}.md"
        exists = os.path.exists(md_path)
        print(f"Target MD file exists: {exists}")
        return exists
    
    print(f"Target file exists: False")
    return False


def update_links_in_file(file_path, links_to_update):
    """
    Update links in a markdown file with suggested relative paths
    
    Args:
        file_path: Path to the markdown file to update
        links_to_update: List of tuples (old_link, new_link) to replace
        
    Returns:
        int: Number of links successfully updated
    """
    if not links_to_update:
        return 0
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        updated_count = 0
        updated_content = content
        
        for old_link, new_link in links_to_update:
            # Need to escape brackets for regex
            old_pattern = re.escape(old_link)
            
            # Look for markdown links [text](link) and image links ![alt](link)
            md_pattern = r'(\[.*?\]\()' + old_pattern + r'(\))'
            updated_content = re.sub(md_pattern, r'\1' + new_link + r'\2', updated_content)
            
            # Count how many replacements were made
            if content != updated_content:
                updated_count += content.count(old_link) - updated_content.count(old_link)
                content = updated_content
        
        if updated_count > 0:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
        
        return updated_count
    
    except Exception as e:
        print(f"Error updating file {file_path}: {str(e)}")
        return 0


def update_broken_links(broken_links, dry_run=False):
    """
    Update broken links in markdown files with suggested relative paths
    
    Args:
        broken_links: Dictionary of broken links by file
        dry_run: If True, don't actually make changes, just report what would be changed
        
    Returns:
        tuple: (updated_files_count, updated_links_count, skipped_links_count)
    """
    updated_files_count = 0
    updated_links_count = 0
    skipped_links_count = 0
    
    for file_rel_path, links in broken_links.items():
        # Fix paths with duplicate 'docs-source'
        if 'docs-source/docs-source' in file_rel_path:
            file_rel_path = file_rel_path.replace('docs-source/docs-source', 'docs-source')
            print(f"Fixed file path: {file_rel_path}")
        
        file_abs_path = os.path.join(os.path.dirname(DOCS_SOURCE_DIR), file_rel_path)
        
        # Collect valid links to update
        valid_updates = []
        
        for link_info in links:
            original_link = link_info['link']
            suggested_path = link_info['suggested_relative_path']
            
            # Check if target exists at suggested path
            if check_if_target_exists(file_abs_path, suggested_path):
                valid_updates.append((original_link, suggested_path))
            else:
                print(f"Skipping update for {original_link} in {file_rel_path} - Target not found at {suggested_path}")
                skipped_links_count += 1
        
        # Update links in the file
        if valid_updates:
            if dry_run:
                print(f"Would update {len(valid_updates)} links in {file_rel_path}")
                updated_links_count += len(valid_updates)
            else:
                updated = update_links_in_file(file_abs_path, valid_updates)
                if updated > 0:
                    updated_files_count += 1
                    updated_links_count += updated
                    print(f"Updated {updated} links in {file_rel_path}")
    
    return updated_files_count, updated_links_count, skipped_links_count


def main():
    """Main function to run the script with command line arguments"""
    parser = argparse.ArgumentParser(description='Check for broken links in markdown files')
    parser.add_argument('--mode', choices=['report', 'update'], default='report',
                      help='Mode to run: "report" to generate a report of broken links (default), '
                           '"update" to fix broken links with suggested relative paths')
    parser.add_argument('--dry-run', action='store_true',
                      help='In update mode, show what would be changed without making actual changes')
    args = parser.parse_args()

    print(f"Scanning markdown files in {DOCS_SOURCE_DIR} for broken links...")
    broken_links = find_broken_links()
    
    total_broken_links = sum(len(links) for links in broken_links.values())
    print(f"Found {total_broken_links} broken links in {len(broken_links)} files.")
    
    # Always generate the report regardless of mode
    print(f"Generating YAML report at {REPORT_FILE}...")
    report_data = generate_report(broken_links)
    
    # If in update mode, try to fix the broken links
    if args.mode == 'update':
        print("\nAttempting to update broken links...")
        if not broken_links:
            print("No broken links to update.")
        else:
            # Convert report data format to the format expected by update_broken_links
            updated_files, updated_links, skipped_links = update_broken_links(
                report_data['broken_links'], 
                dry_run=args.dry_run
            )
            
            if args.dry_run:
                print(f"\nDry run completed: Would update {updated_links} links in {updated_files} files.")
                print(f"Would skip {skipped_links} links where the target could not be found.")
            else:
                print(f"\nUpdate completed: Fixed {updated_links} links in {updated_files} files.")
                print(f"Skipped {skipped_links} links where the target could not be found.")
    
    print("Done!")


if __name__ == "__main__":
    main()
