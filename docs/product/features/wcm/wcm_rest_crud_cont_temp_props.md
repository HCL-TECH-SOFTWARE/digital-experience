# How to set default properties for content templates by using REST

You can update and read the default properties of content items that are created by using a content template.

These properties include:

-   Default presentation template
-   Selected locations
-   Create content under new site area
-   Single site area option
-   Enable or disable workflow

## Update

You can update the default properties of a content template by sending a PUT request to the following URI:

```
/ContentTemplate/item-uuid/Prototype/properties
```

For example:

```

PUT /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/properties
Content-Type: application/vnd.ibm.wcm+xml

<?xml version="1.0" encoding="UTF-8"?>
<content-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="false"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    <createNewParent>true</createNewParent>
    <placement>FIRST_CHILD</placement>
    <location-options allowedLocation="ALL_AVAILABLE" contentLink="NONE"/>
    <link rel="default-presentation" href="/wps/mycontenthandler/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f" label="Default Presentation"/>
</content-properties>


HTTP/1.0 200 OK
Content-type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<content-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="false"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    <link rel="default-presentation" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f" type="application/vnd.ibm.wcm+xml" label="Default Presentation"/>
    <createNewParent>true</createNewParent>
    <placement>FIRST_CHILD</placement>
    <location-options allowedLocation="ALL_AVAILABLE" contentLink="NONE"/>
</content-properties>

```

## Read

The default properties of a content template can be read by sending a GET request to the following URI:

```
/ContentTemplate/item-uuid/Prototype/properties
```

For example:

```

GET /wps/mycontenthandler/wcmrest/ContentTemplate/d19db2ce-87dc-484f-937a-203139818fbd/Prototype/properties

HTTP/1.0 200 OK
Content-type: application/vnd.ibm.wcm+xml

<?xml version="1.0" encoding="UTF-8"?>
<content-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="true"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="false"/>
    </workflow-control>
    <createNewParent>false</createNewParent>
    <placement>LAST_CHILD</placement>
    <location-options allowedLocation="ALL_AVAILABLE" contentLink="NONE"/>
</content-properties>

```

## Format of properties values

-   **Workflow options:**

    ```
    <workflow-control>
             <option name="ENABLE_WORKFLOW" enabled="false"/>
             <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    ```

-   **Default presentation template:**

    ```
    <link rel="default-presentation" 
    href="/wps/mycontenthandler/wcmrest/PresentationTemplate/<item-uuid>"  
    label="Default Presentation"/>
    ```

-   **Create content under a new site area:**

    ```
    <createNewParent>true</createNewParent>
    ```

    Valid values: true, false.

-   **Default placement of new item:**

    ```
    <placement>FIRST_CHILD</placement>
    ```

    Valid values: FIRST\_CHILD, LAST\_CHILD.

-   **Selected locations:**

    -   **When all available locations are allowed:**

        ```
        <location-options allowedLocation="ALL_AVAILABLE" contentLink="NONE"/>
        ```

    -   **When only selected locations are allowed:**

        ```
        <location-options allowedLocation="SELECTED" contentLink="NONE">
                     <location href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/<item-uuid>"/>
                     <location href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/<item-uuid>"/>
        </location-options>
        ```

    Valid values for `allowedLocation`: ALL\_AVAILABLE, SELECTED.

    Valid values for `contentLink`: SINGLE, MULTIPLE, NONE.


**Parent topic:**[How to use REST with content templates](../wcm/wcm_rest_crud_cont_temp.md)

