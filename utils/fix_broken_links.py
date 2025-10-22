#!/usr/bin/env python3
"""
Script to automatically fix broken links in markdown files based on the output from mkdocs-linkcheck.
It handles several types of issues:

1. Missing anchors: Remove the anchor part from the link
2. Suggested file replacements: Replace with the suggested file path
3. Absolute links: Convert to relative links where suggested
4. Unrecognized relative links: Apply suggested fixes 
5. Other fixes as suggested in the broken_links_serve.txt output
"""

import os
import re
import sys
from pathlib import Path

# Base directory for the docs
DOCS_BASE_DIR = Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) / "docs-source"

def load_broken_links_report(file_path):
    """Load the broken links report file and parse the warnings/errors."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Pattern to match warning lines in the report
    warning_pattern = r"WARNING\s+-\s+Doc file\s+'([^']+)'\s+contains a link\s+'([^']+)',\s+but the (target|doc)\s+'([^']+)'(.+?)(?:\.|$)"
    
    # Pattern to match suggestion for replacement
    suggestion_pattern = r"Did you mean '([^']+)'\?"
    
    # Pattern to match anchor issues
    anchor_pattern = r"INFO\s+-\s+Doc file\s+'([^']+)'\s+contains a link\s+'([^']+)',\s+but there is no such anchor on this page"
    anchor_pattern_alt = r"INFO\s+-\s+Doc file\s+'([^']+)'\s+contains a link\s+'([^']+)',\s+but the doc\s+'([^']+)'\s+does not contain an anchor\s+'([^']+)'"
    
    # Pattern to match absolute links
    absolute_link_pattern = r"INFO\s+-\s+Doc file\s+'([^']+)'\s+contains an absolute link\s+'([^']+)',\s+it was left as is\.\s*(?:Did you mean\s+'([^']+)')?"
    
    # Pattern to match unrecognized relative links
    relative_link_pattern = r"INFO\s+-\s+Doc file\s+'([^']+)'\s+contains an unrecognized relative link\s+'([^']+)',\s+it was left as is\.\s*(?:Did you mean\s+'([^']+)')?"
    
    # Find all warnings with potential suggestions
    warnings = []
    for match in re.finditer(warning_pattern, content, re.MULTILINE):
        doc_file, link, issue_type, target, rest = match.groups()
        suggestion = None
        
        # Check if there's a suggestion
        suggestion_match = re.search(suggestion_pattern, rest)
        if suggestion_match:
            suggestion = suggestion_match.group(1)
        
        warnings.append({
            'doc_file': doc_file,
            'link': link,
            'target': target,
            'suggestion': suggestion
        })
    
    # Find all anchor issues
    anchor_issues = []
    for match in re.finditer(anchor_pattern, content, re.MULTILINE):
        doc_file, link = match.groups()
        anchor_issues.append({
            'doc_file': doc_file,
            'link': link,
            'type': 'missing_anchor'
        })
    
    # Find alternative anchor issues
    for match in re.finditer(anchor_pattern_alt, content, re.MULTILINE):
        doc_file, link, target_doc, anchor = match.groups()
        anchor_issues.append({
            'doc_file': doc_file,
            'link': link,
            'type': 'missing_anchor_in_doc',
            'target_doc': target_doc,
            'anchor': anchor
        })
    
    # Find absolute links with suggestions
    absolute_links = []
    for match in re.finditer(absolute_link_pattern, content, re.MULTILINE):
        doc_file, link, suggestion = match.groups()
        absolute_links.append({
            'doc_file': doc_file,
            'link': link,
            'suggestion': suggestion
        })
    
    # Find unrecognized relative links with suggestions
    relative_links = []
    for match in re.finditer(relative_link_pattern, content, re.MULTILINE):
        doc_file, link, suggestion = match.groups()
        relative_links.append({
            'doc_file': doc_file,
            'link': link,
            'suggestion': suggestion
        })
    
    return warnings, anchor_issues, absolute_links, relative_links

def fix_link_in_file(doc_file, old_link, new_link):
    """Fix a broken link in a markdown file."""
    file_path = DOCS_BASE_DIR / doc_file
    
    if not file_path.exists():
        print(f"Warning: File {file_path} does not exist, skipping.")
        return False
    
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Escape special characters in the old link for regex
        old_link_escaped = re.escape(old_link)
        
        # Pattern to find markdown links with the old link
        md_link_pattern = rf'\[([^\]]+)\]\({old_link_escaped}\)'
        
        # Try to find and replace markdown links
        new_content, md_replacements = re.subn(md_link_pattern, rf'[\1]({new_link})', content)
        
        # If no markdown links found, try direct link replacements
        if md_replacements == 0:
            new_content, direct_replacements = re.subn(old_link_escaped, new_link, content)
            if direct_replacements == 0:
                print(f"Warning: Could not find link '{old_link}' in {doc_file}")
                return False
        
        # Write the updated content back to the file
        with open(file_path, 'w') as f:
            f.write(new_content)
        
        print(f"Fixed link in {doc_file}: '{old_link}' -> '{new_link}'")
        return True
    
    except Exception as e:
        print(f"Error fixing link in {doc_file}: {str(e)}")
        return False

def remove_anchor_from_link(link):
    """Remove the anchor part from a link."""
    if '#' in link:
        return link.split('#')[0]
    return link

def main():
    # Check if report file exists
    report_file = Path(os.path.dirname(os.path.abspath(__file__))) / "broken_links_serve.txt"
    if not report_file.exists():
        print(f"Error: Broken links report not found at {report_file}")
        sys.exit(1)
    
    # Load and parse the report
    warnings, anchor_issues, absolute_links, relative_links = load_broken_links_report(report_file)
    
    # Stats for reporting
    total_fixes = 0
    failed_fixes = 0
    
    # Fix links with suggestions
    for warning in warnings:
        if warning['suggestion']:
            if fix_link_in_file(warning['doc_file'], warning['link'], warning['suggestion']):
                total_fixes += 1
            else:
                failed_fixes += 1
    
    # Fix links with missing anchors
    for issue in anchor_issues:
        if issue['type'] == 'missing_anchor':
            # For a link with an anchor that doesn't exist, remove the anchor
            if '#' in issue['link']:
                base_link = remove_anchor_from_link(issue['link'])
                if fix_link_in_file(issue['doc_file'], issue['link'], base_link):
                    total_fixes += 1
                else:
                    failed_fixes += 1
        elif issue['type'] == 'missing_anchor_in_doc':
            # For a link to an anchor in another doc that doesn't exist, remove the anchor
            if '#' in issue['link']:
                base_link = remove_anchor_from_link(issue['link'])
                if fix_link_in_file(issue['doc_file'], issue['link'], base_link):
                    total_fixes += 1
                else:
                    failed_fixes += 1
    
    # Fix absolute links with suggested relative paths
    for link_info in absolute_links:
        if link_info['suggestion']:
            if fix_link_in_file(link_info['doc_file'], link_info['link'], link_info['suggestion']):
                total_fixes += 1
            else:
                failed_fixes += 1
    
    # Fix unrecognized relative links with suggestions
    for link_info in relative_links:
        if link_info['suggestion']:
            if fix_link_in_file(link_info['doc_file'], link_info['link'], link_info['suggestion']):
                total_fixes += 1
            else:
                failed_fixes += 1
    
    # Print summary
    print(f"\nSummary:")
    print(f"- Total fixes applied: {total_fixes}")
    print(f"- Failed fixes: {failed_fixes}")
    print(f"- Warning links processed: {len(warnings)}")
    print(f"- Anchor issues processed: {len(anchor_issues)}")
    print(f"- Absolute links processed: {len(absolute_links)}")
    print(f"- Relative links processed: {len(relative_links)}")
    
    if total_fixes > 0:
        print("\nLinks have been fixed. Please review the changes before committing.")
    else:
        print("\nNo links were fixed. Review the broken_links_serve.txt file for issues that need manual fixing.")

if __name__ == "__main__":
    main()
