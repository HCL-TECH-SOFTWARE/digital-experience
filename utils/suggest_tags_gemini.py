import os
import yaml
class NoAliasDumper(yaml.SafeDumper):
    def ignore_aliases(self, data):
        return True
import requests
from pathlib import Path
import time
import sys
import argparse

MODEL_NAME = "gemini-2.5-flash"

def get_gemini_tags(text, api_key):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL_NAME}:generateContent"
    headers = {"Content-Type": "application/json"}
    prompt = (
        "You are an expert technical documentation assistant. "
        "Given the following markdown content, suggest 5-10 concise, relevant keyword tags (single words or short phrases, comma-separated, no hashtags, no explanations). "
        "Only return the tags, nothing else.\n\nContent:\n" + text
    )
    data = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    params = {"key": api_key}
    response = requests.post(url, headers=headers, params=params, json=data)
    if response.status_code == 200:
        try:
            candidates = response.json()["candidates"]
            if candidates:
                tags_line = candidates[0]["content"]["parts"][0]["text"]
                tags = [t.strip() for t in tags_line.split(",") if t.strip()]
                return tags
        except Exception:
            pass
    return []

def main():
    parser = argparse.ArgumentParser(description="Suggest tags for markdown files using Gemini.")
    parser.add_argument("--limit", type=int, default=None, help="Number of files to analyze (default: all)")
    parser.add_argument("--start-index", type=int, default=1, help="File index (from 'count' field) to start processing at (1-based, default: 1)")
    parser.add_argument("--no-front-matter-only", action="store_true", help="Only process files that don't have front matter")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY environment variable not set.")
        return
    audit_path = Path(__file__).parent / "output" / "content_audit.yaml"
    with open(audit_path, "r", encoding="utf-8") as f:
        audit = yaml.safe_load(f)
    updated = []
    count = 0
    total = len(audit)
    start_idx = args.start_index - 1 if args.start_index > 1 else 0
    # Copy untouched entries before start index
    for i in range(start_idx):
        updated.append(audit[i])
    
    # If we're only processing files without front matter, count how many there are
    if args.no_front_matter_only:
        no_fm_count = sum(1 for entry in audit[start_idx:] if not entry.get('front_matter_present', True))
        print(f"Found {no_fm_count} files without front matter to process")
    
    for idx in range(start_idx, total):
        entry = audit[idx]
        
        # Skip entries with front matter if --no-front-matter-only is set
        if args.no_front_matter_only and entry.get('front_matter_present', True):
            updated.append(entry)
            continue
            
        if args.limit is not None and count >= args.limit:
            updated.append(entry)
            continue
        md_path = Path(entry["file"])
        if not md_path.exists():
            updated.append(entry)
            continue
        with open(md_path, "r", encoding="utf-8") as f:
            content = f.read()
        # Limit content to first 5000 characters for prompt size
        short_content = content[:5000]
        tags = get_gemini_tags(short_content, api_key)
        entry["suggested_tags"] = tags
        updated.append(entry)
        
        # Different output message format depending on whether we're only processing no-front-matter files
        if args.no_front_matter_only:
            print(f"[{count+1}/{no_fm_count if args.no_front_matter_only else total}] Tagged (no front matter): {md_path} -> {tags}")
        else:
            print(f"[{idx+1}/{total}] Tagged: {md_path} -> {tags}")
            
        count += 1
        # Write progress every 100 files
        if count % 100 == 0:
            current_state = updated + audit[idx+1:]
            with open(audit_path, "w", encoding="utf-8") as f:
                yaml.dump(current_state, f, allow_unicode=True, sort_keys=False, default_flow_style=False, Dumper=NoAliasDumper)
        time.sleep(0.150)  # avoid rate limits
    # Final write at the end
    with open(audit_path, "w", encoding="utf-8") as f:
        yaml.dump(updated + audit[idx+1:], f, allow_unicode=True, sort_keys=False, default_flow_style=False, Dumper=NoAliasDumper)
    
    # Summary message
    if args.no_front_matter_only:
        print(f"Tag suggestion complete for {count} files without front matter. Updated YAML written.")
    else:
        print(f"Tag suggestion complete for {count} files. Updated YAML written.")

if __name__ == "__main__":
    main()
