---
id: markdown-syntax
title: Syntax Handbook 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# List of formats used in documents

Here're the popular formatting features that you may want to use in our documents.

## Insert Image

- Name: Inserting image in the document

- Tag: 
`
![Image title](imagePath)
`

## Note

- Name: Note

- Tag: 
`
!!! note
	test
`

Example:
 ![Note with correct line spacing](../../../../../Documents/images/Note_with_correct_line_space.textClipping)

 ## Inserting xref links

- Name: Inserting xref links in the doc

- Tag: 
'
[Title](title link)
`


 ## Related information

 - Name: Related information

 - Tag:
`
???+ info "Related information:"
	- text
`
Make sure the line spacing is given at start of the text in related information. If not given correctly the Related information output will not show as required.


- Example:
![Related Information](../../../../../Documents/images/Related_Information.png)


## Text formatting

1. Name: Make the text bold
    Tag: **Text**

2. Name: Make the text Italic
	Tag: *text*

3. Name: Make the text Underline
	Tag: ^^text^^

4. Name: Unordered list
    Tag: "- " 
	Example:
	- One
	- Two

5. Name: Ordered list
	Tag: "1. " or "a. "
	Example: 
	1. One
	2. Two
	
## Code block

- Name: Code block
- Tag: 

  ```
  Text
  ```

 ##  Open in a new browser

 - Name: Open the link in a new browser/page
 - Tag:  {:target="_blank"} 

 ## Topic metadata

 - Name: Topic metadata
 - Tag:

 	---
	id: 
	title:
	tags:
	 	- Script Application
		- DAM
	hide: tags
	---

	Using the tags you can define the search keywords.

## Adding tab

- Name: Adding the tab in content
- Tag: 
` 
=== "Container" 
	text
`
Make sure the line/tab spacing is given correctly.

Example:
![tab](../../../../../Documents/images/Tab.png)

## Commenting out the text

- Name: Commenting the text
- Tag: 
<!---
 text
 --->


## Table

- Name: Adding table
- Tag:



|Name|Tag|Example|
|----|---|-------|
|Inserting image in the document|`![Image title](image Path)`|  |
|Note|`!!! note <br/>	test`|![Note with correct line spacing](../../../../../Documents/images/Note_with_correct_line_space.textClipping)|
|Inserting xref links in the document|`[Title](title path)`|  |
|Related information|`???+ info "Related information:"<br/>	- text`|Make sure the line spacing is given at start of the text in related information. If not given correctly the Related information output will not show as required. <br/>![Related Information](../../../../../Documents/images/Related_Information.png)|
|Bold text|`**Text**`| **Text** |
|Italic text|`*Text*`| *Text* |
|Underline text| `^^Text^^`| ^^Text^^ |
|Unordered list| `- ` |- Script <br/> - Application <br/> - DXclient|
|Ordered list| `1. ` or `a. `| 1. Script <br/> 2. Application <br/>or<br/> a. DXclient <br/> b. DAM|
|Code block| ``` Text ```|  |
|Open the link in a new browser/page|`{:target="_blank"}`| |
|Topic metadata| --- <br/> id: <br/>	title:<br/> 	tags:<br/>	    	- Script Application<br/>	    	- DAM<br/>	hide: tags<br/> ---| Using the tags you can define the search keywords.|
|Adding the tab in content|` === "Container" <br/>	text` <br/>Make sure the line/tab spacing is given correctly.|![tab](../../../../../Documents/images/Tab.png)|
|Commenting the text|`<!---text--->`|  |

