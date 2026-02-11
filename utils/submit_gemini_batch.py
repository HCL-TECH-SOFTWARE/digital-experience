import os
import yaml
import requests
from pathlib import Path
import argparse

MODEL_NAME = "gemini-2.5-flash"
BATCH_STATUS_FILE = Path(__file__).parent / "output" / "gemini_batch_status.yaml"

# Submit a batch job to Gemini

def submit_gemini_batch(texts, api_key):
    # For batchGenerateContent, we need to include the model in the URL path
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL_NAME}:generateContent"
    headers = {"Content-Type": "application/json"}
    
    # Process one request at a time instead of using batch API
    results = []
    for i, prompt in enumerate(texts):
        print(f"Processing request {i+1}/{len(texts)}...")
        data = {
            "contents": [
                {
                    "parts": [{"text": prompt}],
                    "role": "user"
                }
            ]
        }
        params = {"key": api_key}
        response = requests.post(url, headers=headers, params=params, json=data)
        if response.status_code == 200:
            results.append(response.json())
        else:
            print(f"Request {i+1} failed: {response.status_code} {response.text[:200]}")
    
    # Return a combined result object
    return {"responses": results}
    params = {"key": api_key}
    print("\n--- Gemini Batch API Debug ---")
    print("Endpoint:", url)
    print("Payload:")
    import json as _json
    print(_json.dumps(data, indent=2)[:5000])  # Print up to 5000 chars of payload
    response = requests.post(url, headers=headers, params=params, json=data)
    print("Status code:", response.status_code)
    print("Response body:", response.text[:5000])  # Print up to 5000 chars of response
    if response.status_code == 200:
        return response.json()  # Should contain batch job info
    else:
        print("Batch submission failed:", response.status_code, response.text)
        return None

def main():
    parser = argparse.ArgumentParser(description="Submit a Gemini job for tag suggestion.")
    parser.add_argument("--limit", type=int, default=500, help="Number of files to analyze in this batch (default: 500)")
    parser.add_argument("--start-index", type=int, default=1, help="File index (from 'count' field) to start processing at (1-based, default: 1)")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY environment variable not set.")
        return
    audit_path = Path(__file__).parent / "output" / "content_audit.yaml"
    with open(audit_path, "r", encoding="utf-8") as f:
        audit = yaml.safe_load(f)
    start_idx = args.start_index - 1 if args.start_index > 1 else 0
    batch_texts = []
    file_info = []  # To track which file corresponds to which result
    
    for idx in range(start_idx, min(start_idx + args.limit, len(audit))):
        entry = audit[idx]
        md_path = Path(entry["file"])
        if not md_path.exists():
            continue
        try:
            with open(md_path, "r", encoding="utf-8") as f:
                content = f.read()
            short_content = content[:5000]
            prompt = (
                "You are an expert technical documentation assistant. "
                "Given the following markdown content, suggest 5-10 concise, relevant keyword tags (single words or short phrases, comma-separated, no hashtags, no explanations). "
                "Only return the tags, nothing else.\n\nContent:\n" + short_content
            )
            batch_texts.append(prompt)
            file_info.append({"file": str(md_path), "index": idx})
        except Exception as e:
            print(f"Error reading {md_path}: {e}")
    
    print(f"Processing {len(batch_texts)} files with Gemini API...")
    responses = submit_gemini_batch(batch_texts, api_key)
    
    if responses and "responses" in responses:
        # Associate each response with the corresponding file
        results = []
        for i, response in enumerate(responses["responses"]):
            if i < len(file_info):
                file_data = file_info[i]
                # Extract tags from the response
                tags = "No tags generated"
                if "candidates" in response and response["candidates"]:
                    content = response["candidates"][0].get("content", {})
                    parts = content.get("parts", [])
                    if parts and "text" in parts[0]:
                        tags = parts[0]["text"].strip()
                
                results.append({
                    "file": file_data["file"],
                    "index": file_data["index"],
                    "tags": tags
                })
        
        # Save the results
        with open(BATCH_STATUS_FILE, "w", encoding="utf-8") as f:
            yaml.dump(results, f, allow_unicode=True, sort_keys=False)
        print(f"Processing complete. Results written to {BATCH_STATUS_FILE}")
    else:
        print("Processing failed. No valid responses received.")

if __name__ == "__main__":
    main()
