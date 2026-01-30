#!/usr/bin/env python3
"""
Update front matter in markdown files based on content_audit.yaml.

This script updates the front matter of markdown files in the docs-source directory:
- Removes 'id' field
- Updates 'tags' with 'suggested_tags' from content_audit.yaml
- Adds 'title' if it's missing, using 'suggested_title'
- Creates new front matter blocks for files that don't have one (when front_matter_present: false)

Usage:
  python update_front_matter.py [--dry-run] [--file FILE_PATH]
"""

import os
import re
import yaml
import argparse
from pathlib import Path

# Regular expression to find YAML front matter in markdown files
FRONT_MATTER_PATTERN = re.compile(r'^---\s*\n(.*?)\n---\s*\n', re.DOTALL)

def load_content_audit():
    """Load the content audit YAML file."""
    audit_path = Path(__file__).parent / "output" / "content_audit.yaml"
    with open(audit_path, "r", encoding="utf-8") as f:
        return yaml.safe_load(f)

def parse_markdown_file(file_path):
    """
    Parse a markdown file and extract its front matter and content.
    
    Args:
        file_path (str): Path to the markdown file
    
    Returns:
        tuple: (front_matter_dict, content, has_front_matter, original_yaml)
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    front_matter_match = FRONT_MATTER_PATTERN.match(content)
    
    if front_matter_match:
        front_matter_yaml = front_matter_match.group(1)
        try:
            front_matter = yaml.safe_load(front_matter_yaml) or {}
            remaining_content = content[front_matter_match.end():]
            return front_matter, remaining_content, True, front_matter_yaml
        except yaml.YAMLError as e:
            print(f"Error parsing front matter in {file_path}: {e}")
            return {}, content, False, None
    else:
        return {}, content, False, None

def update_front_matter(front_matter, audit_entry):
    """
    Update the front matter based on the audit entry.
    
    Args:
        front_matter (dict): The current front matter
        audit_entry (dict): The audit entry for this file
    
    Returns:
        dict: Updated front matter
    """
    # Create a copy to avoid modifying the original
    updated_front_matter = front_matter.copy()
    
    # Remove 'id' field if present
    if 'id' in updated_front_matter:
        del updated_front_matter['id']
    
    # Update tags with suggested_tags if available
    if audit_entry.get('suggested_tags'):
        updated_front_matter['tags'] = audit_entry['suggested_tags']
    
    # Add title if missing and suggested_title is available
    if 'title' not in updated_front_matter and audit_entry.get('suggested_title'):
        updated_front_matter['title'] = audit_entry['suggested_title']
    
    return updated_front_matter

def generate_front_matter_yaml(front_matter, original_yaml=None):
    """
    Generate YAML front matter string from a dictionary, preserving original formatting where possible.
    
    Args:
        front_matter (dict): Front matter dictionary
        original_yaml (str): Original YAML string to use as formatting reference
    
    Returns:
        str: YAML front matter string
    """
    # Check if 'hide' field exists and has proper indentation in original YAML
    hide_indentation = 4  # Default indentation
    
    if original_yaml and 'hide' in front_matter:
        for line in original_yaml.split('\n'):
            if line.strip().startswith('- ') and line.startswith(' '):
                # Found an indented list item, get its indentation
                hide_indentation = len(line) - len(line.lstrip())
                break
    
    # Custom handling for specific nested structures
    yaml_lines = []
    
    # Handle front matter keys in a specific order for clarity
    if 'title' in front_matter:
        yaml_lines.append(f"title: {front_matter['title']}")
    
    if 'tags' in front_matter:
        yaml_lines.append("tags:")
        for tag in front_matter['tags']:
            yaml_lines.append(f"    - {tag}")  # Use consistent 4-space indentation for tags
    
    # Handle hide field with proper indentation
    if 'hide' in front_matter:
        yaml_lines.append("hide:")
        for item in front_matter['hide']:
            yaml_lines.append(f"{' ' * hide_indentation}- {item}")
    
    # Add any remaining fields
    for key, value in front_matter.items():
        if key not in ['title', 'tags', 'hide']:
            if isinstance(value, str):
                yaml_lines.append(f"{key}: {value}")
            elif isinstance(value, list):
                yaml_lines.append(f"{key}:")
                for item in value:
                    yaml_lines.append(f"    - {item}")  # Use consistent 4-space indentation for all lists
            elif isinstance(value, dict):
                yaml_lines.append(f"{key}:")
                for subkey, subvalue in value.items():
                    yaml_lines.append(f"    {subkey}: {subvalue}")
    
    return "\n".join(yaml_lines)

def create_front_matter(audit_entry):
    """
    Create a new front matter dictionary for a file that doesn't have one.
    
    Args:
        audit_entry (dict): The audit entry for this file
    
    Returns:
        dict: New front matter dictionary
    """
    front_matter = {}
    
    # Add title if suggested_title is available
    if audit_entry.get('suggested_title'):
        front_matter['title'] = audit_entry['suggested_title']
    
    # Add tags if suggested_tags are available
    if audit_entry.get('suggested_tags'):
        front_matter['tags'] = audit_entry['suggested_tags']
    
    return front_matter

def update_markdown_file(file_path, audit_entry, dry_run=False):
    """
    Update a markdown file's front matter.
    
    Args:
        file_path (str): Path to the markdown file
        audit_entry (dict): The audit entry for this file
        dry_run (bool): If True, don't actually write changes
    
    Returns:
        tuple: (success, message, old_front_matter, new_front_matter)
    """
    front_matter, remaining_content, has_front_matter, original_yaml = parse_markdown_file(file_path)
    
    if not has_front_matter:
        # Check if this file is marked as not having front matter in the audit
        if audit_entry.get('front_matter_present') is False:
            # Create new front matter
            new_front_matter = create_front_matter(audit_entry)
            
            # If we couldn't create any meaningful front matter, skip
            if not new_front_matter:
                return False, "No front matter to create", None, None
            
            # Generate YAML
            yaml_str = generate_front_matter_yaml(new_front_matter)
            
            # Create new content with front matter
            new_content = f"---\n{yaml_str}\n---\n{remaining_content}"
            
            if not dry_run:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                return True, "Created new front matter", {}, new_front_matter
            else:
                return True, "Would create new front matter (dry run)", {}, new_front_matter
        else:
            return False, "No front matter found", None, None
    
    updated_front_matter = update_front_matter(front_matter, audit_entry)
    
    # If there are no changes, don't update
    if front_matter == updated_front_matter:
        return True, "No changes needed", front_matter, updated_front_matter
    
    # Generate YAML with proper indentation, preserving original formatting
    yaml_str = generate_front_matter_yaml(updated_front_matter, original_yaml)
    
    # Generate new content with updated front matter
    new_content = f"---\n{yaml_str}\n---\n{remaining_content}"
    
    if not dry_run:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True, "Updated front matter", front_matter, updated_front_matter
    else:
        return True, "Would update front matter (dry run)", front_matter, updated_front_matter

def main():
    parser = argparse.ArgumentParser(description="Update front matter in markdown files based on content_audit.yaml")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be updated without making changes")
    parser.add_argument("--file", help="Path to a specific file to update")
    args = parser.parse_args()
    
    content_audit = load_content_audit()
    file_map = {entry['file']: entry for entry in content_audit}
    
    # Process a single file if specified
    if args.file:
        file_path = args.file
        if file_path in file_map:
            audit_entry = file_map[file_path]
            success, message, old_front_matter, new_front_matter = update_markdown_file(file_path, audit_entry, args.dry_run)
            
            print(f"File: {file_path}")
            print(f"Status: {message}")
            
            if old_front_matter != new_front_matter:
                if not old_front_matter:  # New front matter created
                    yaml_str = generate_front_matter_yaml(new_front_matter)
                    print("\nNew front matter created:")
                    print(yaml_str)
                else:  # Existing front matter updated
                    front_matter, content, has_front_matter, original_yaml = parse_markdown_file(file_path)
                    yaml_str = generate_front_matter_yaml(new_front_matter, original_yaml)
                    
                    print("\nOld front matter:")
                    print(original_yaml)
                    print("\nNew front matter:")
                    print(yaml_str)
        else:
            print(f"Error: {file_path} not found in content audit")
    else:
        # Process all files
        updated = 0
        unchanged = 0
        created = 0
        errors = 0
        
        for file_path, audit_entry in file_map.items():
            if not os.path.exists(file_path):
                print(f"Warning: File not found: {file_path}")
                continue
                
            success, message, old_front_matter, new_front_matter = update_markdown_file(file_path, audit_entry, args.dry_run)
            
            if not success:
                print(f"Error: {file_path} - {message}")
                errors += 1
            elif old_front_matter == new_front_matter:
                unchanged += 1
            elif not old_front_matter:  # This is a newly created front matter
                created += 1
                if args.dry_run:
                    yaml_str = generate_front_matter_yaml(new_front_matter)
                    
                    print(f"\nWould create front matter for: {file_path}")
                    print("\nNew front matter:")
                    print(yaml_str)
                    
                    # Limit output in dry run mode
                    if created + updated >= 5:
                        print("\n... (more files would be modified) ...")
                        break
            else:
                updated += 1
                if args.dry_run:
                    front_matter, content, has_front_matter, original_yaml = parse_markdown_file(file_path)
                    yaml_str = generate_front_matter_yaml(new_front_matter, original_yaml)
                    
                    print(f"\nWould update: {file_path}")
                    print("\nOld front matter:")
                    print(original_yaml)
                    print("\nNew front matter:")
                    print(yaml_str)
                    
                    # Limit output in dry run mode
                    if created + updated >= 5:
                        print("\n... (more files would be modified) ...")
                        break
        
        if args.dry_run:
            print(f"\nDry run summary: {updated} files would be updated, {created} files would have front matter created, {unchanged} files unchanged, {errors} errors")
        else:
            print(f"\nSummary: {updated} files updated, {created} files had front matter created, {unchanged} files unchanged, {errors} errors")

if __name__ == "__main__":
    main()