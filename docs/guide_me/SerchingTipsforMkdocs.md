# Tips for searching in Mxdocs

## Introduction:

The Mkdocs search is very frustrating to use sometimes. You either cannot find a relevant page or you get flooded with a bunch of pages. In this document we have listed out the tips/keywords which will help you to simplify the search result.  

## Tips for searching in Mkdocs

Use the following tips to help you find the better search result:                                                              

- **fo*** : find every keyword beginning with 'fo'
- **f*o** : find every keyword that starts with 'f' and ends with 'o'
- ***oo** : find every keyword ending with 'oo'
- **fo bar** : find any one of the keyword beginning 'fo' OR 'bar'
- **+foo** : the search must contain the keyword 'foo'
- **+foo +bar** : the search contains both the keywords'foo' and 'bar'
- **-bar** : the search cannot contain keyword 'bar'
- **title:markdown** : find the page title which contains keyword 'markdown'.

### Combination of tips

- **+foo -bar** : find every page with the keyword 'foo' but not 'bar'
- **+foo -*ar** : find every page with the keyword 'foo' that does not have a keyword ending with 'ar'
- **title:Markdown -extension** : find all pages with the title 'Markdown' that do not have a keyword 'extension'.