# Authoring Template Element

The authoringTemplate element is used to specify the authoring template that is applied to a content item or site area. The value of this element must be the name of an existing authoring template.

## authoringTemplate

If the authoring template is in a different library from the item, you can specify the library name as well. If no library is specified, the Web Content Integrator searches the library that was specified in the `<ibmwcm:library>` element. If no `<ibmwcm:library>` element is present, the Web Content Integrator searches the default library that is specified in the task configuration.

!!!note
    When an item is created, it is not possible to change its authoring template. When an update is processed, if the authoring template specified in the feed entry does not match the name of the authoring template that was originally used to create the item the Web Content Integrator generates an error message.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content, site area|
|Required for item types|None|
|Allowable Values|The name of an existing authoring template, or the name of an existing library and authoring template that is separated by a forward slash. For example:-   News-AT
-   TmpltLib/News-AT|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:authoringTemplate>News</ibmwcm:authoringTemplate>
<ibmwcm:authoringTemplate>TmpltLib/News</ibmwcm:authoringTemplate>
```


