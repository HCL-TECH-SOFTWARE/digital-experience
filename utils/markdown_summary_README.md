# Markdown Summary Generator

This utility script generates a summary report of all markdown files in the `docs-source` directory.

## Features

- Counts the total number of markdown files in each folder
- Counts the number of lines in each markdown file
- Provides a folder-by-folder breakdown of markdown files
- Generates summary statistics (total files, total lines, average lines per file)

## Usage

Run the script from the command line:

```bash
cd /path/to/internal-doc
./utils/markdown_summary.py
```

The script will generate a markdown report file named `markdown_summary_report.md` in the `utils` directory.

## Requirements

- Python 3.6 or higher
- No external dependencies required

## Example Output

```markdown
# Markdown Files Summary Report
Generated on: Fri Sep 5 2025

## architecture
- Files: 10
- Total Lines: 523
- Files breakdown:
  - changed-decisions.md: 45 lines
  - guidelines.md: 87 lines
  ...

# Overall Summary
- Total Markdown Files: 150
- Total Lines: 8245
- Average Lines per File: 54.97
```
