# Identity Control Elements

Most identification fields in Web Content Manager items map directly to core RSS elements; title maps to the name field, description maps to the description field, and author maps to the authors field. Other identification fields can be populated by using the following identity control elements.

## displayTitle

The displayTitle element allows the feed producer to specify a separate value for the **Display Title** field in Web Content Manager. If this element is not present in the feed entry, Web Content Manager sets the value of the **Display Title** field to match the **Name** field when the item is saved.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|All|
|Required for item types|None|
|Allowable Values|A string to be used as the **Display Title** in Web Content Manager. Unlike the **Name** field, this field can contain double-byte and non-ASCII characters.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:displayTitle>
	Fourth Quarter Results Press Release
</ibmwcm:displayTitle>
```

## owner

The owner element provides a mechanism to set the value of the **Owners** field by using the feed. Multiple owner elements can be specified. Each owner element must contain the common name of a single HCL Portal user or group. If the Web Content Integrator is unable to resolve a specified name to an actual user or group then that user or group is not added to the **Owners** field but all other processing continues as normal.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|All|
|Required for item types|None|
|Allowable Values|\[all users\]

\[all authenticated portal users\]

The common name of any valid HCL Portal user or group

|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:owner>[all authenticated portal users]</ibmwcm:owner>
<ibmwcm:owner>jsmith</ibmwcm:owner>
```


