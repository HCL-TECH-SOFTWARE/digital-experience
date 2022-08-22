# Location Control Elements

These elements are used to provide the Web Content Integrator with some information about an item's relative location.

## library

You must specify a default web content library name when configuring a task to consume an input feed. The Web Content Integrator performs all operations within that library including creating new Web Content Manager items, searching for existing versions of items, and searching for any associated design artifacts such as authoring templates and workflows. You can also override this setting so that a single feed can be used to create content in multiple libraries.

There are three ways that Web Content Integrator will check if a value was specified in this element:

-   If the library specified in the library element matches an existing web content library, all operations during the processing of this feed entry is processed within the context of the library specified in the library element.
-   If no library element is present in the feed entry, or if the library element is present but no value was specified then the default library from the task configuration is used.
-   If a value is specified in the library element but no matching web content library is found, then an error message is logged and the feed entry will not be processed.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|All|
|Required for item types|None|
|Allowable Values|The name of an existing web content library.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:library>LibraryName</ibmwcm:library>
```

## path

The path element is used to indicate the hierarchical path to the web content item. For site areas and content items, this element contains the parent site area path. For categories, the value is the parent category path.

Site areas and categories can only have a single path element. If more than one path element is specified, only the first is used. Content items can have multiple parents, so multiple path elements can be used. The first path element is used as the main content item and the following path elements are treated as content links. An optional "library" parameter can be specified for path elements referring to linked content in a different library from the main content item.

New items are added to the end of the current list of items within Web Content Manager.

The path element cannot be used with components. Components can only be created under the "Components" preset folder.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|siteArea, Category, Content|
|Required for item types|Site Areas and Taxonomies.|
|Allowable Values|All values should start with a leading forward slash "/" character. For site area and taxonomy items the value should be just a single forward slash "/".|
|Required Attributes|None|
|Optional Attributes|"library" Contains the name of a library where the site path resides. This attribute is used where linked content resides on a different library from the main content. This attribute is ignored on the first path element that is listed in the feed entry.

|
|Required sub-elements|None|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:path>/</ibmwcm:path>

<ibmwcm:path>/IBM/Products</ibmwcm:path>

<ibmwcm:path library="en_US">/Intranet/Home/News</ibmwcm:path>
```

## createLinks

This is used to specify which parent items to link to when creating content items.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|Content|
|Required for item types|None|
|Allowable Values|The createLinks element is a container for readability and has no attributes or expected values.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|-   **parentGuid**

The parentGuid element should contain the unique ID of another item in the feed that describes the parent item.


|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:createLinks>
	<ibmwcm:parentGuid>8234ad23fb29</ibmwcm:parentGuid>
</ibmwcm:createLinks>
```

## The Orphan Container

If no valid parents or paths are specified in the feed, then the item is placed into an orphan container until it is able to be updated with a valid path. The Web Content Integrator will automatically create an orphans container in each Web content library as it is needed. For site areas and content items, the orphan container is a site area path name WCI/Orphans. For categories, the orphan container is a taxonomy and category path with the name WCI/Orphans. The name of the orphan containers can be controlled through a setting in the WCMConsumerPlugin.properties file.

## children

The children element is used to specify the children of the current item. The value of this element should be the GUID of another entry in the feed that describes a child of the current item.

The referenced child item must be of an appropriate type. For site areas, the children must be site areas or content items. For taxonomies and categories, the children must be categories. If the type is not valid, the parent item will still be added or updated, but the child reference will not be created.

Multiple childGuid sub-elements can be contained within the children element. If multiple children are specified, they are added in the order in which they are listed in the feed. This allows the feed producer to control the order in which site areas and content items are linked to their parent site area which can be useful for setting up navigation displays.

There are two attributes of the children element that control how the children specified in the feed get combined with any children that may already be contained by the parent item. The action attribute controls whether the child list in the feed replaces the existing list of children. If the value of that attribute is set to "add", then the children that are specified in the feed is combined with the existing list of children. Any other value, including an empty string or the absence of this attribute, causes the list of children that are specified in the feed to completely replace the preexisting list.

The position attribute is only relevant when the action attribute is set to "add". This attribute controls whether the children specified in the feed are added to the start or to the end of the preexisting child list. If this attribute is not specified, the children will be added to the end of the preexisting list. If the children element is not present in the feed, then the preexisting child list remains intact.

Site areas and categories can only have one immediate parent. Any preexisting parent relationships will be removed before adding them as a child of this item. As content items can have multiple parents, adding a content item as a child of this item does not remove it from any of its other parents

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|siteArea, Category.|
|Required for item types|None|
|Allowable Values|The children element is just a container for readability. It has no expected values.|
|Required Attributes|None|
|Optional Attributes|-   **action**

The action attribute can have a value of "add" or "replace". These values indicate whether to replace children that are existing or to add to them.

-   **position**

This attribute can have the value "start" or "end". These values indicate where the children are placed in sibling order as they are processed.


|
|Required sub-elements|-   **childGuid**

The childGuid element should contain the unique ID of another item in the feed that describes the child item.


|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:children action="add" position="start">
	<ibmwcm:childGuid>8234cb51df43</ibmwcm:childGuid>
</ibmwcm:children>
```

## defaultContent

The defaultContent element only applies to site areas. It allows the feed producer to specify which content item is used as the default content for a site area. If this element is missing, has a blank value, or cannot be resolved, then the default content of the site area is cleared.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|siteArea.|
|Required for item types|None|
|Allowable Values|Value should be the GUID of another item in the feed that describes a content item.|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:defaultContent>8234cb5</ibmwcm:defaultContent>
```

## templateMap

The templateMap element only applies to site areas. It allows the feed producer to specify the template maps to be used when rendering content that is contained within the designated site area. Use multiple instances of the templateMap element to create multiple template mappings on a site area.

When performing an update of an existing site area, the following steps are executed for each `<ibmwcm:templateMap />` element that is specified in the feed:

1.  Get the names of the authoring and presentation templates specified in the templateMap element.
2.  Attempt to locate an authoring template that matches the name that is specified in the feed.
3.  If a matching authoring template item cannot be located, log an error and start processing the next templateMap element.
4.  Attempt to locate a presentation template that matches the name that is specified in the feed.
5.  If a matching presentation template cannot be located, log an error and start processing the next templateMap element.
6.  Check if the site area already contains a mapping for the specified authoring template:
    1.  If so, check whether it maps to the same presentation template as specified in the feed;
        1.  If so, go to the next templateMap element.
        2.  If not, remove the mapping and replace it with one to the specified presentation template.
    2.  If not, create a new mapping of the specified authoring template to the specified presentation template.
7.  Process the next templateMap element

The WCM APIs don't provide a mechanism to get a complete list of template mappings that exist for a given site area. As a result, it is not possible to remove a template mapping via the feed. Once a mapping has been set on a site area, it can be updated via the feed but can only be removed manually through the WCM authoring portlet.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|siteArea.|
|Required for item types|None|
|Allowable Values|This element does not take any values. The data is specified in the attributes.|
|Required Attributes|-   **authoring**

The value of this attribute must be a string that exactly matches the name of an existing authoring template.

-   **presentation**

The value of this attribute must be a string that exactly matches the name of an existing presentation template.


|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Examples:

```
<ibmwcm:templateMap authoring="AT News" presentation="PT News" />
<ibmwcm:templateMap authoring="AT Announcement" presentation="PT Announcement" />
```


