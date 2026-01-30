import os
import yaml
import requests
from pathlib import Path

MODEL_NAME = "gemini-2.5-flash"
BATCH_STATUS_FILE = Path(__file__).parent / "output" / "gemini_batch_status.yaml"

# Retrieve batch job results from Gemini

def get_batch_results(api_key, batch_job_id):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL_NAME}:getBatchContentResult"
    headers = {"Content-Type": "application/json"}
    params = {"key": api_key}
    data = {"batchJob": batch_job_id}
    response = requests.post(url, headers=headers, params=params, json=data)
    if response.status_code == 200:
        return response.json()
    else:
        print("Batch result retrieval failed:", response.status_code, response.text)
        return None

def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY environment variable not set.")
        return
    if not BATCH_STATUS_FILE.exists():
        print(f"Batch status file {BATCH_STATUS_FILE} not found.")
        return
    with open(BATCH_STATUS_FILE, "r", encoding="utf-8") as f:
        batch_status = yaml.safe_load(f)
    batch_job_id = batch_status.get("name") or batch_status.get("batchJob")
    if not batch_job_id:
        print("No batch job ID found in status file.")
        return
    print(f"Retrieving results for batch job: {batch_job_id}")
    results = get_batch_results(api_key, batch_job_id)
    if results:
        results_file = Path(__file__).parent / "output" / "gemini_batch_results.yaml"
        with open(results_file, "w", encoding="utf-8") as f:
            yaml.dump(results, f, allow_unicode=True, sort_keys=False)
        print(f"Batch results written to {results_file}")
    else:
        print("Failed to retrieve batch results.")

if __name__ == "__main__":
    main()
