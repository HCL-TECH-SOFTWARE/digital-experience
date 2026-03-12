import os
import yaml
import re
from pathlib import Path

def extract_front_matter(lines):
    if not lines or not lines[0].strip().startswith('---'):
        return None, 0
    front_matter = []
    for i, line in enumerate(lines[1:], 1):
        if line.strip().startswith('---'):
            return '\n'.join(front_matter), i + 1
        front_matter.append(line.rstrip('\n'))
    return None, 0

def analyze_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    lines = content.splitlines()
    front_matter_str, fm_end_line = extract_front_matter(lines)
    result = {
        'file': str(filepath),
        'front_matter_present': bool(front_matter_str),
        'id': None,
        'title': None,
        'tags': None,
        'line_count': len(lines),
        'char_count': len(content),
        'suggested_title': None
    }
    if front_matter_str:
        try:
            fm = yaml.safe_load(front_matter_str)
            if isinstance(fm, dict):
                result['id'] = fm.get('id')
                result['title'] = fm.get('title')
                tags = fm.get('tags')
                if tags is not None:
                    result['tags'] = tags if isinstance(tags, list) else [tags]
        except Exception as e:
            result['front_matter_error'] = str(e)
    
    # For files with or without front matter, suggest title if missing
    if not result['title']:
        # Search for first level 1 heading
        lines_to_search = lines[fm_end_line:] if fm_end_line > 0 else lines
        for line in lines_to_search:
            m = re.match(r'^# (.+)', line.strip())
            if m:
                title = m.group(1).strip()
                # Remove quote marks, backticks
                # Remove double quotes, single quotes, and backticks
                title = re.sub(r'["\'`]', '', title)
                # Replace colons and slashes with hyphens
                title = re.sub(r'[:/]', '-', title)
                result['suggested_title'] = title
                break
    return result

def main():
    docs_dir = Path(__file__).parent.parent / 'docs'
    output_dir = Path(__file__).parent / 'output'
    output_dir.mkdir(exist_ok=True)

    output_file = output_dir / 'content_audit.yaml'
    summary_file = output_dir / 'content_audit_summary.yaml'
    results = []
    file_idx = 1
    for root, _, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = Path(root) / file
                rec = analyze_markdown_file(filepath)
                rec['count'] = file_idx
                results.append(rec)
                file_idx += 1
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(results, f, allow_unicode=True, sort_keys=False)


    # Calculate summary statistics
    fm_count = sum(1 for r in results if r['front_matter_present'])
    no_fm_count = len(results) - fm_count
    id_count = sum(1 for r in results if r['id'])
    title_count = sum(1 for r in results if r['title'])
    tags_count = sum(1 for r in results if r['tags'])
    no_tags_count = len(results) - tags_count

    # Count files without a description in the front matter
    no_description_count = 0
    for r in results:
        desc = None
        if r.get('front_matter_present'):
            # Try to extract description from front matter
            with open(r['file'], 'r', encoding='utf-8') as f:
                lines = f.read().splitlines()
            front_matter_str, _ = extract_front_matter(lines)
            if front_matter_str:
                try:
                    fm = yaml.safe_load(front_matter_str)
                    if isinstance(fm, dict):
                        desc = fm.get('description')
                except Exception:
                    pass
        if desc is None:
            no_description_count += 1

    id_no_title = sum(1 for r in results if r['id'] and not r['title'])
    title_no_id = sum(1 for r in results if r['title'] and not r['id'])
    both_id_title = sum(1 for r in results if r['id'] and r['title'])
    neither_id_title = sum(1 for r in results if not r['id'] and not r['title'])

    suggested_title_count = sum(1 for r in results if not r['title'] and r['suggested_title'])
    no_fm_with_sugg_title = sum(1 for r in results if not r['front_matter_present'] and r['suggested_title'])

    char_counts = sorted(r['char_count'] for r in results)
    if char_counts:
        min_chars = char_counts[0]
        max_chars = char_counts[-1]
        n = len(char_counts)
        median_chars = char_counts[n//2] if n % 2 == 1 else (char_counts[n//2 - 1] + char_counts[n//2]) // 2
        q1_chars = char_counts[n//4] if n >= 4 else min_chars
        q3_chars = char_counts[(3*n)//4] if n >= 4 else max_chars
    else:
        min_chars = max_chars = median_chars = q1_chars = q3_chars = 0

    # Write summary to separate file
    summary = {
        'total_files': len(results),
        'files_with_front_matter': fm_count,
        'files_without_front_matter': no_fm_count,
        'files_with_id': id_count,
        'files_with_title': title_count,
        'files_with_tags': tags_count,
        'files_without_tags': no_tags_count,
        'files_without_description': no_description_count,
        'files_with_id_but_no_title': id_no_title,
        'files_with_title_but_no_id': title_no_id,
        'files_with_both_id_and_title': both_id_title,
        'files_with_neither_id_nor_title': neither_id_title,
        'files_with_suggested_title': suggested_title_count,
        'files_without_front_matter_but_with_suggested_title': no_fm_with_sugg_title,
        'character_count': {
            'min': min_chars,
            'q1': q1_chars,
            'median': median_chars,
            'q3': q3_chars,
            'max': max_chars
        }
    }
    with open(summary_file, 'w', encoding='utf-8') as f:
        yaml.dump(summary, f, allow_unicode=True, sort_keys=False)

    # Print summary
    print(f"Scanned {len(results)} markdown files. Report written to {output_file}")
    print(f"Summary written to {summary_file}")
    print(f"Files with front matter: {fm_count}")
    print(f"Files without front matter: {no_fm_count}")
    print(f"Files with id: {id_count}")
    print(f"Files with title: {title_count}")
    print(f"Files with tags: {tags_count}")
    print(f"Files without tags: {no_tags_count}")
    print(f"Files with id but no title: {id_no_title}")
    print(f"Files with title but no id: {title_no_id}")
    print(f"Files with both id and title: {both_id_title}")
    print(f"Files with neither id nor title: {neither_id_title}")
    print(f"Files with a suggested title: {suggested_title_count}")
    print(f"Files without front matter but with a suggested title: {no_fm_with_sugg_title}")
    print(f"Files without description: {no_description_count}")
    print(f"Character count: min={min_chars}, q1={q1_chars}, median={median_chars}, q3={q3_chars}, max={max_chars}")

if __name__ == '__main__':
    main()
