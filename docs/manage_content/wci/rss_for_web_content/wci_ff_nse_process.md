# Process Control Elements

These elements are used to provide the Web Content Integrator with some information about how to handle the data that is contained within the item.

## action

This element indicates the action to be run on the item that is represented by the `<item>`.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|All|
|Required for item types|All|
|Allowable Values|"add", "update", or "delete".|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

```
<ibmwcm:action>update</ibmwcm:action>
```

## itemType

The itemType element indicates the type of item that is represented by the feed entry. These correspond to the Web Content Manager item types that can be created or updated via the feed. In some cases, the value of this element is combined with the value in the `<ibmwcm:path>` element to determine which Web Content Manager item type to create.

|Element parameters:|Details for this element:|
|-------------------|-------------------------|
|Applies to item types|All|
|Required for item types|All|
|Allowable Values|"siteArea" for site areas.

"content" for content items.

"component" for components.

"category" for taxonomies and categories.

|
|Required Attributes|None|
|Optional Attributes|None|
|Required sub-elements|None|
|Optional sub-elements|None|

Example:

-   **Site Area**

    ```
    <ibmwcm:itemType>siteArea</ibmwcm:itemType> + any other value for <ibmwcm:path> 
    or the lack of an <ibmwcm:path> element.
    ```

-   **Taxonomy**

    ```
    <ibmwcm:itemType>category</ibmwcm:itemType> + <ibmwcm:path>/</ibmwcm:path>
    ```

-   **Category**

    ```
    <ibmwcm:itemType>category</ibmwcm:itemType> + any other value for <ibmwcm:path> 
    or the lack of an <ibmwcm:path> element.
    ```

-   **Component**

    ```
    <ibmwcm:itemType>component</ibmwcm:itemType>
    ```

-   **Content**

    ```
    <ibmwcm:itemType>content</ibmwcm:itemType>
    ```



