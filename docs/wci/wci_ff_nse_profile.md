# Profile Control Elements 

Taxonomies and category fields are populated by using the RSS category element. To populate the Keywords field, a keywords element is required.

## keywords

The keywords element must contain a comma-delimited list of metadata tags that describe the content. The list is stored in the **Keywords** field of content items.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content|
|Required for item types|None|
|Allowable Values|A comma-delimited list of keywords in plain text format.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:keywords>software,testing</ibmwcm:keywords>
```

**Parent topic:**[RSS Namespace Extension for web content ](../wci/wci_ff_nse.md)

