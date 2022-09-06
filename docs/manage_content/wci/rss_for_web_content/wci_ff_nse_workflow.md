# Workflow control elements

Workflow elements is used to specify workflow-related parameters when content items are created that use a workflow.

## workflow element

This element specifies the workflow name and stage in which a content item is created. The value in the name attribute must match that of an existing workflow.

If the workflow is in a different library from the content item, you can specify the library name as well. If no library is specified, the Web Content Integrator searches the library that was specified in the `<ibmwcm:library>` element. If no `<ibmwcm:library>` element is present, the Web Content Integrator searches the default library that is specified in the task configuration.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content items|
|Required for item types|None|
|Allowable Values|Workflow name and related workflow stage.|
|Required Attributes|The name of an existing workflow, or the library and name of an existing library and workflow that is separated by a forward slash. For example:-   3-Stage-Workflow
-   Library1/3-Stage-Workflow|
|Optional Attributes|None|
|Required sub-elements|-   **workflowStage**<br>
The value of this sub-element must be the name of a workflow stage that is included in the named workflow.|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:workflow name="StdWorkflow">
	<ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
</ibmwcm:workflow>


<ibmwcm:workflow name="DesignLib/StdWorkflow">
	<ibmwcm:workflowStage>Live</ibmwcm:workflowStage>
</ibmwcm:workflow>
```

## date elements

This element is used to specify an RFC 822 formatted date that is used as the date of one of the date fields in the content item.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content items|
|Required for item types|None|
|Allowable Values|-   **publishDate**<br>
Used to set the published date of an item. If this element is not present in the `<item>`, the value in the `<pubDate>` element is used to set the publish date of the content item. This requires a publish action to be included in a workflow stage in the specified workflow.<br>
-   **expirationDate**<br>
Used to set the expiry date of an item. This requires an expire action to be included in a workflow stage in the specified workflow.<br>
-   **genDateOne and genDateTwo**<br>
Used to populate the general date fields of an item.<br>

-   ****|
|Required Attributes|An RFC 822 formatted date.|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:publishDate>
	Fri, 31 Oct 2008 15:32:00 EST
</ibmwcm:publishDate>


<ibmwcm:expirationDate>
	Sun, 1 Nov 2009 12:00:00 EST
</ibmwcm:expirationDate>


<ibmwcm:genDateOne>
	Wed, 1 Nov 2006 09:30:00 EST
</ibmwcm:genDateOne>


<ibmwcm:genDateTwo>
	Thu, 2 Nov 2006 09:30:00 EST
</ibmwcm:genDateTwo>
```

## additionalViewer element

This element allows the additional viewers field to be populated via the feed. It should contain the common name of a single user or group that is to be added to the field. To specify multiple users and groups, use multiple additionalViewer elements.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content items|
|Required for item types|None|
|Allowable Values|-   \[all users\]
-   \[all authenticated portal users\]
-   The common name of any valid portal user or group.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:additionalViewer>[all users]</ibmwcm:additionalViewer>

<ibmwcm:additionalViewer>Sales</ibmwcm:additionalViewer>

<ibmwcm:additionalViewer>jsmith</ibmwcm:additionalViewer>
```


