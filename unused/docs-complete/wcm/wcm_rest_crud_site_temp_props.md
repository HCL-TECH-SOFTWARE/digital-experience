# How to set default properties for site area templates by using REST 

You can update and read the default properties of site areas that are created by using a site area template.

These properties include:

-   Default presentation template
-   Enable or disable workflow

## Update

You can update the default properties of a site area template by sending a PUT request to the following URI:

```
/SiteAreaTemplate/item-uuid/Prototype/properties
```

For example:

```

PUT /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/properties
Content-Type: application/vnd.ibm.wcm+xml

<?xml version="1.0" encoding="UTF-8"?>
<sitearea-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="true"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    <link rel="default-presentation" href="/wps/mycontenthandler/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f"  label="Default Presentation"/>
</sitearea-properties>


HTTP/1.0 200 OK
Content-type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<sitearea-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="true"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="true"/>
    </workflow-control>
    <link rel="default-presentation" href="/wps/mycontenthandler/!ut/p/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f" type="application/vnd.ibm.wcm+xml"  label="Default Presentation"/>
</sitearea-properties>

```

## Read

The default properties of a site area template can be read by sending a GET request to the following URI:

```
/SiteAreaTemplate/item-uuid/Prototype/properties
```

For example:

```

GET /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype/properties

HTTP/1.0 200 OK
Content-type: application/vnd.ibm.wcm+xml

<?xml version="1.0" encoding="UTF-8"?>
<sitearea-properties xmlns="http://www.ibm.com/xmlns/wcm/8.0">
    <workflow-control>
        <option name="ENABLE_WORKFLOW" enabled="false"/>
        <option name="HIDE_WORKFLOW_SECTION" enabled="false"/>
    </workflow-control>
</sitearea-properties>

```

**Parent topic:**[How to use REST with site area templates ](../wcm/wcm_rest_crud_site_temp.md)

