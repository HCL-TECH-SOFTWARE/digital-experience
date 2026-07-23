#!/usr/bin/env python3
"""
Script to scan the docs-source/optp folder and generate an index of all test plans.
The output will be an updated version of the docs-source/optp/index.md file.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

# Define paths
BASE_DIR = Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OPTP_DIR = BASE_DIR / 'docs-source' / 'optp'
INDEX_FILE = OPTP_DIR / 'index.md'

# Define patterns to extract titles
TITLE_PATTERN = re.compile(r'^#\s+(.*?)(?:\s+-\s+.*)?$')
YAML_TITLE_PATTERN = re.compile(r'title:\s*(.*?)$')
OPTP_PATTERN = re.compile(r'^#\s+OPTP\s+-\s+(.*?)$')

def extract_title_from_file(file_path):
    """Extract the title from a markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # Check for YAML front matter title
        yaml_match = re.search(r'---\s+.*?title:\s*(.*?)(\n.*?)?---', content, re.DOTALL)
        if yaml_match and yaml_match.group(1).strip():
            return clean_title(yaml_match.group(1).strip())
        
        # Check for "OPTP - Title" pattern
        optp_match = OPTP_PATTERN.search(content)
        if optp_match and optp_match.group(1).strip():
            return clean_title(optp_match.group(1).strip())
        
        # Check for "# Title" pattern (regular markdown title)
        lines = content.split('\n')
        for line in lines:
            title_match = TITLE_PATTERN.match(line)
            if title_match and title_match.group(1).strip():
                title = title_match.group(1).strip()
                # Remove "OPTP - " prefix if present
                if title.startswith("OPTP - "):
                    title = title[7:].strip()
                return clean_title(title)
    
        # If no good title found, use a cleaned up version of the filename
        filename = os.path.splitext(os.path.basename(file_path))[0]
        # Convert kebab-case or snake_case to Title Case
        if 'optp-' in filename:
            filename = filename.replace('optp-', '')
        filename = filename.replace('-', ' ').replace('_', ' ')
        return clean_title(filename.title())

def clean_title(title):
    """Remove redundant phrases from titles."""
    redundant_phrases = [
        "One Page Test Plan for ",
        "Test Plan for ",
        "Test plan for ",
        "One Page Test Plan - ",
        "OPTP - ",
        "OPTP "
    ]
    
    for phrase in redundant_phrases:
        if title.startswith(phrase):
            title = title[len(phrase):]
    
    # Ensure the first letter is capitalized after removing prefixes
    if title and title[0].islower():
        title = title[0].upper() + title[1:]
            
    return title

def get_relative_path(file_path, base_dir):
    """Get the relative path from base_dir to file_path."""
    return os.path.relpath(file_path, base_dir)

def is_test_plan(file_path):
    """Check if a file is likely a test plan."""
    # Skip the template file, index file, and introduction file
    if (os.path.basename(file_path) == 'one-page-test-plans_template.md' or 
        os.path.basename(file_path) == 'index.md' or
        os.path.basename(file_path) == 'one-page-test-plans-intro.md'):
        return False
    
    # Check file extension
    if not file_path.endswith('.md'):
        return False
    
    # For debugging, let's assume all markdown files in the optp folder are test plans
    # We can be more restrictive later if needed
    return True

def generate_test_plan_index():
    """Generate the test plan index."""
    test_plans = defaultdict(list)
    
    # Walk through optp directory
    for root, _, files in os.walk(OPTP_DIR):
        # Skip hidden directories (like .pages)
        if any(part.startswith('.') for part in Path(root).relative_to(OPTP_DIR).parts):
            continue
            
        for file in files:
            file_path = os.path.join(root, file)
            
            if is_test_plan(file_path):
                title = extract_title_from_file(file_path)
                relative_path = get_relative_path(file_path, OPTP_DIR)
                category = os.path.dirname(relative_path)
                
                if not category:
                    category = "Root"
                
                test_plans[category].append((title, relative_path))
                print(f"Found test plan: {title} at {relative_path} in category {category}")
    
    # Generate index content
    content = [
        "---",
        "title: Test Plan Index",
        "---",
        "",
        "# Test Plan Index",
        "",
        "This page provides links to all test plans organized by category.",
        "",
    ]
    
    # Add test plans by category
    for category, plans in sorted(test_plans.items()):
        if category != "Root":
            content.append(f"## {category}")
        else:
            content.append("## General Test Plans")
        content.append("")
        
        # Sort plans by title
        for title, path in sorted(plans, key=lambda x: x[0].lower()):
            content.append(f"- [{title}]({path})")
        
        content.append("")
    
    # Update the index file
    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))
    
    print(f"Successfully updated {INDEX_FILE}")

if __name__ == "__main__":
    generate_test_plan_index()
