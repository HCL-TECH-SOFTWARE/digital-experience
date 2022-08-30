# Security control elements

The security control element is used to set access controls on the item that is being created.

## access element

The access element provides a mechanism to set the access controls on Web Content Manager items via the feed. A feed entry can contain multiple access sub-elements. Each access element should contain the common name of a single, valid, portal user or group. The users and groups specified in the access element are added to the system defined security fields on the Web Content Manager items.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content|
|Required for item types|None|
|Allowable Values|-   \[all users\]
-   \[all authenticated portal users\]
-   The common name of any valid portal user or group.

|
|Required Attributes|None|
|Optional Attributes|-   **type**

This attribute allows the feed producer to specify the exact access level that should be granted to the user or group. The allowable values for the type attribute correspond to the access levels available in Web Content Manager: " "user", "contributor", "draftcreator", "editor", "manager" and "reviewer". If the type attribute is not specified, "user" access is applied.

-   **inheritance**

You can specify whether inheritance is enabled by adding either `inheritance="enabled"` or `inheritance="disabled"`. If not specified, the default or current inheritance setting for an item is used.

You can specify whether propagation is enabled by adding either `propagation="enabled"` or `propagation="disabled"`. If not specified, the default or current propagation setting for an item is used.


|
|Required sub-elements|None|
|Optional sub-elements| |

Examples:

```
<ibmwcm:access type="user">
	[all users]
</ibmwcm:access>

<ibmwcm:access type="editor" inheritance="enabled">
	Sales
</ibmwcm:access>

<ibmwcm:access type="draftcreator">
ContentCreators
</ibmwcm:access>

<ibmwcm:access type="reviewer" propagation="true">
Approvers
</ibmwcm:access>
```


