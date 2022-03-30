# How to set default site area values for site area templates by using REST 

You can update and read default site area values for site areas that are created by using a site area template.

These values include:

-   Elements
-   Setting workflow
-   Child template mappings
-   Rendering behavior
-   Presentation override
-   Child default content

## Update

You can update the default site area values a of site area template by sending a PUT request to the following URI:

```
/SiteAreaTemplate/item-uuid/Prototype
```

For example:

```

PUT /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype
Content-Type: application/atom+xml

<?xml version="1.0" encoding="UTF-8"?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0"> 
    <link rel="workflow" href="/wps/mycontenthandler/!ut/wcmrest/Workflow/27b4254a-3762-42e3-8099-997f394874d4" label="Workflow"/>
    <category scheme="wcmrest:renderingBehaviour" term="RENDER_DEFAULT_CONTENT_AS_CHILD" label="Render the default content as a child of this site area"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:siteArea xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
            <templateMap>
                <templateMapping authoringTemplate="/wps/mycontenthandler/!ut/wcmrest/item/db6364ac-e29d-467a-9396-12ab82df6a31" presentationTemplate="/wps/mycontenthandler/!ut/wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce"/>
                <templateMapping authoringTemplate="/wps/mycontenthandler/!ut/wcmrest/item/e15bb37f-6eba-42f4-8470-e54431b69fb3" presentationTemplate="/wps/mycontenthandler/!ut/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f"/>
            </templateMap>
        </wcm:siteArea>
    </content>
</entry>


HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:a2fd2e1d-d8da-44de-9ce3-17c8ab614208</id>
    <title/>
    <summary/>
    <wcm:name></wcm:name>
    <wcm:type>SiteArea</wcm:type>
    <updated>2015-03-19T12:09:02.600Z</updated>
    <wcm:created>2015-03-19T11:39:52.507Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <link rel="self" href="/wps/mycontenthandler/!ut/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Edit"/>
    <link rel="workflow-stage" href="/wps/mycontenthandler/!ut/wcmrest/WorkflowStage/b241a6b7-49ea-4a33-ad26-4ca1cc927620" label="Workflow Stage"/>
    <link rel="workflow" href="/wps/mycontenthandler/!ut/wcmrest/Workflow/27b4254a-3762-42e3-8099-997f394874d4" label="Workflow"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/wcmrest/SiteArea/a2fd2e1d-d8da-44de-9ce3-17c8ab614208" type="application/vnd.ibm.wcm+xml" label="Edit Media"/>
    <category scheme="wcmrest:workflowState" term="DRAFT" label="Draft"/>
    <category scheme="wcmrest:renderingBehaviour" term="RENDER_DEFAULT_CONTENT_AS_CHILD" label="Render the default content as a child of this site area"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:siteArea xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
            <templateMap>
                <templateMapping authoringTemplate="/wps/mycontenthandler/!ut/wcmrest/ContentTemplate/db6364ac-e29d-467a-9396-12ab82df6a31" presentationTemplate="/wps/mycontenthandler/!ut/wcmrest/PresentationTemplate/832f2d12-829c-41eb-a808-63393a3f77ce"/>
                <templateMapping authoringTemplate="/wps/mycontenthandler/!ut/wcmrest/ContentTemplate/e15bb37f-6eba-42f4-8470-e54431b69fb3" presentationTemplate="/wps/mycontenthandler/!ut/wcmrest/PresentationTemplate/37d77b82-c3fb-4ee8-ba88-3ce0a2c1443f"/>
            </templateMap>
        </wcm:siteArea>
    </content>
</entry>

```

## Read

The default site area values of a site area template can be read by sending a GET request to the following URI:

```
/SiteAreaTemplate/item-uuid/Prototype
```

For example:

```

GET /wps/mycontenthandler/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype

HTTP/1.0 200 OK
Content-type: application/atom+xml; type=entry

<?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
    <id>wcmrest:a2fd2e1d-d8da-44de-9ce3-17c8ab614208</id>
    <title/>
    <summary/>
    <wcm:type>SiteArea</wcm:type>
    <updated>2015-03-19T11:46:42.999Z</updated>
    <wcm:created>2015-03-19T11:39:52.507Z</wcm:created>
    <wcm:lastModifier>
        <wcm:distinguishedName>uid=wpsadmin,cn=users,dc=test</wcm:distinguishedName>
        <uri>/wps/mycontenthandler/!ut/p/um/users/profiles/Z9eAeO9PA3SGCJPO0JM4633DEJM46GHC4MM07LHO4JM4C2BCCJOO64JCAMHH613</uri>
        <name>wpsadmin</name>
    </wcm:lastModifier>
    <link rel="self" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Read"/>
    <link rel="edit" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteAreaTemplate/7f1055db-29ac-43ea-88b8-c6b23019b6b9/Prototype" label="Edit"/>
    <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/wcmrest/SiteArea/a2fd2e1d-d8da-44de-9ce3-17c8ab614208" type="application/vnd.ibm.wcm+xml" label="Edit Media"/>
    <category scheme="wcmrest:renderingBehaviour" term="RENDER_DEFAULT_CONTENT_AS_CHILD" label="Render the default content as a child of this site area"/>
    <content type="application/vnd.ibm.wcm+xml">
        <wcm:siteArea xmlns="http://www.ibm.com/xmlns/wcm/8.0">
            <elements xmlns:atom="http://www.w3.org/2005/Atom"/>
        </wcm:siteArea>
    </content>
</entry>

```

## Dependencies of Presentation Override and Default Content on Rendering Behavior

The availability of the **Presentation Override** and **Default Content** fields depend on the value of rendering behavior field.

|Rendering Behavior|Presentation Override|Default Content|
|------------------|---------------------|---------------|
|`RENDER_DEFAULT_CONTENT_AS_CHILD`|No.|Yes.|
|`REDIRECT_TO_DEFAULT_CONTENT`|No.|Yes.|
|`RENDER_SITE_AREA_DIRECTLY`|Yes.|No.|
|`RENDER_FIRST_CHILD_CONTENT`|No.|No.|
|`RENDER_FIRST_CHILD`|No.|No.|

**Parent topic:**[How to use REST with site area templates ](../wcm/wcm_rest_crud_site_temp.md)

