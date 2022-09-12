# Association Control Element

The association element is used to create an association between two or more separate content items. It is used to support some content item relationships that are not native to Web Content Manager but that are found in some other web content management systems. One example would be a technical journal article that needs to include some data from one or more author biography content items.

An association element is tied to a text element. The value of the element in the feed is a comma-delimited list of GUIDs that represent the other external content items that are to be associated with the text element. When the Web Content Integrator processes the feed, it attempts to resolve the GUIDs with the corresponding Web Content Manager items. A custom JSP component is then used in the presentation template to locate the linked content items at render time and display them in the context of the container content item.

Since this type of linkage is not a natural feature of Web Content Manager it relies on a custom JSP component for its implementation and there are some restrictions that are related to using an association element:

-   As Web Content Manager DocumentIds are used to create the association to the other content items, the format of the DocumentId is not guaranteed to be constant from version to version so there is some risk that the linkages might break following a Web Content Manager upgrade or migration
-   The referential integrity of Web Content Manager does not apply to association element links.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content|
|Required for item types|None|
|Allowable Values|A list of GUIDs that map to other feed entries that are linked to associated content items.|
|Required Attributes|-   **name**<br>
The value of this attribute must match the name of an existing text element.|
|Optional Attributes|None|
|Required sub-elements|-   **type**<br>
The value of this sub-element must be "association". It is not case-sensitive.<br>
-   **value**<br>
The value of this sub-element must be a comma-delimited list of GUIDs that point to the feed entries that are linked to associated content items.|
|Optional sub-elements|None|

Example:

```
<ibmwcm:element name="authors">
	<ibmwcm:type>association</ibmwcm:type>
		<ibmwcm:value>234ed298cf,7023bc23f1e</ibmwcm:value>
</ibmwcm:element>
```


