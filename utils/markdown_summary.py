#!/usr/bin/env python3
"""
Markdown Summary Generator

This script scans the docs-source directory and generates a summary report of all markdown files.
The report includes:
- Total number of markdown files per folder
- Number of lines in each markdown file
- Summary statistics by folder
"""

import os
import sys
from collections import defaultdict
from pathlib import Path


def count_lines_in_file(file_path):
    """Count the number of lines in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return len(f.readlines())
    except Exception as e:
        print(f"Warning: Could not read {file_path}: {e}", file=sys.stderr)
        return 0


def get_markdown_summary(docs_root):
    """Generate a summary of markdown files in the docs directory."""
    # Dictionary to store folder statistics
    folder_stats = defaultdict(lambda: {'file_count': 0, 'total_lines': 0, 'files': []})
    
    # Walk through the docs directory
    for root, _, files in os.walk(docs_root):
        # Filter for markdown files
        md_files = [f for f in files if f.endswith('.md')]
        
        if not md_files:
            continue
        
        # Get relative path for the folder
        rel_path = os.path.relpath(root, docs_root)
        if rel_path == '.':
            rel_path = 'root'
        
        # Process each markdown file
        for md_file in md_files:
            file_path = os.path.join(root, md_file)
            line_count = count_lines_in_file(file_path)
            
            # Update folder statistics
            folder_stats[rel_path]['file_count'] += 1
            folder_stats[rel_path]['total_lines'] += line_count
            folder_stats[rel_path]['files'].append({
                'name': md_file,
                'lines': line_count
            })
    
    return folder_stats


def format_report(folder_stats):
    """Format the markdown summary report."""
    report = []
    total_files = 0
    total_lines = 0
    
    # Report header
    report.append("# Markdown Files Summary Report")
    report.append(f"Generated on: {os.popen('date').read().strip()}")
    report.append("")
    
    # Iterate through folders (sorted)
    for folder in sorted(folder_stats.keys()):
        stats = folder_stats[folder]
        folder_files = stats['file_count']
        folder_lines = stats['total_lines']
        
        total_files += folder_files
        total_lines += folder_lines
        
        report.append(f"## {folder}")
        report.append(f"- Files: {folder_files}")
        report.append(f"- Total Lines: {folder_lines}")
        report.append("- Files breakdown:")
        
        # Sort files by name
        for file_info in sorted(stats['files'], key=lambda x: x['name']):
            report.append(f"  - {file_info['name']}: {file_info['lines']} lines")
        
        report.append("")
    
    # Overall summary
    report.append("# Overall Summary")
    report.append(f"- Total Markdown Files: {total_files}")
    report.append(f"- Total Lines: {total_lines}")
    report.append(f"- Average Lines per File: {total_lines / total_files:.2f}" if total_files > 0 else "- Average Lines per File: 0")
    report.append("")
    
    return "\n".join(report)


def main():
    # Define the docs source directory path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    docs_root = os.path.join(project_root, 'docs-source')
    
    if not os.path.isdir(docs_root):
        print(f"Error: Could not find docs-source directory at {docs_root}", file=sys.stderr)
        sys.exit(1)
    
    # Generate the report
    folder_stats = get_markdown_summary(docs_root)
    report = format_report(folder_stats)
    
    # Output the report
    output_path = os.path.join(script_dir, 'markdown_summary_report.md')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(report)
    
    print(f"Report generated successfully at: {output_path}")


if __name__ == "__main__":
    main()
