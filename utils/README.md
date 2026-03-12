# Utils Directory README

This folder contains a collection of utility scripts for content management, auditing, and automation tasks related to the documentation project. Below is a description of each script:

## Scripts

### check_broken_links.py

Scans markdown files for broken links and reports any that are found. Useful for maintaining link integrity across the documentation.

**Options:**

- `--mode [report|update]`: Run in report mode (default) to generate a report, or update mode to attempt to fix broken links.
- `--dry-run`: In update mode, show what would be changed without making actual changes.

### content_audit.py

Performs an audit of the documentation content, generating reports on various metrics such as completeness, structure, and metadata. Outputs results to YAML files in the `output/` subfolder.

### fix_broken_links.py

Attempts to automatically fix broken links in markdown files, based on detected issues or predefined rules.

### generate_test_plan_index.py

Generates an index of test plans, likely by scanning relevant documentation or test files and compiling a summary or table of contents.

### get_gemini_batch_results.py

Retrieves and processes batch results from the Gemini system, which may be used for automated content analysis or tagging.

### markdown_summary.py

Summarizes markdown files, extracting key information or generating overviews for easier navigation and review.

### submit_gemini_batch.py

Submits batches of content or data to the Gemini system for processing, such as automated tagging or analysis.

**Options:**

- `--limit N`: Number of files to analyze in this batch (default: 500).
- `--start-index N`: File index (from 'count' field) to start processing at (1-based, default: 1).

### suggest_tags_gemini.py

Suggests tags for documentation content using the Gemini system, helping to improve searchability and organization.

**Options:**

- `--limit N`: Number of files to analyze (default: all).
- `--start-index N`: File index (from 'count' field) to start processing at (1-based, default: 1).
- `--no-front-matter-only`: Only process files that don't have front matter.

### update_front_matter.py

Updates the front matter (YAML metadata) in markdown files, ensuring consistency and completeness of metadata fields.

**Options:**

- `--dry-run`: Show what would be updated without making changes.
- `--file FILE_PATH`: Path to a specific file to update (otherwise processes all files).

## Output

- **output/**
  - Contains generated reports and data files, such as `content_audit.yaml` and `content_audit_summary.yaml`, produced by the audit scripts.

---

For usage instructions, run each script with the `--help` flag (e.g., `python script_name.py --help`).