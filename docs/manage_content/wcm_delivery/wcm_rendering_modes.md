# Rendering modes for web content

Different presentation templates are created to render web content in different modes to display content in different contexts, such as a web content viewer portlet, or mobile devices.

## Render modes

These modes are supported when web content is rendered. You can create separate presentation templates for each type and select them when you create a site area template or content template:

-   **Default Presentation Template**: This presentation template is used to render an item within a Web Content Viewer portlet.
-   **Summary Presentation Template**: This presentation template is used when the summary render mode is used to render an item.
-   **JSON Record Presentation Template**: This presentation template is used when the JSON render mode is used to render an item on mobile devices.
-   **XML Document Presentation Template**: This presentation template is used when the XML render mode is used to render an item on mobile devices.
-   **HTML Document Presentation Template**: This presentation template is used when the HTML render mode is used to render an item as a complete web page.

You then select a different presentation template for each rendering mode by clicking **Select Presentation Template** in the **Item Properties** section when you create a site area template or content template.

## Defining rendering modes in a URL

You can specify a rendering mode in a URL by adding this parameter to the URL: `renderMode=mode`

These render modes are predefined: summary, json, xml, html, default. You can use the Web Content Manager API to define further render modes.

For example, to specify the URL to use the JSON rendering mode, you might use a URL like the following example:

```
http://myserver:port/wps/wcm/myconnect/mylibrary/mysitearea/mycontent?renderMode=json
```

To specify more than one render mode, use a comma-separated list. To specify the URL to use the JSON rendering mode, or if no JSON presentation template is specified, the XML rendering mode, you might use a URL like the following example:

```
http://myserver:port/wps/wcm/myconnect/mylibrary/mysitearea/mycontent?renderMode=json,xml
```

To specify the URL to use the JSON rendering mode or, if no JSON presentation template is specified, the default presentation template, you might use a URL like the following example:

```
http://myserver:port/wps/wcm/myconnect/mylibrary/mysitearea/mycontent?renderMode=json,default
```

## Rendering modes for web content code sample

Use method `setPresentationTemplateForMode` to add a render mode to an authoring template and map it to a presentation template:

```
authoringTemplate.getItemProperties().setPresentationTemplateForMode("YAML", defaultPresentationTemplateId);
```

The example adds the render mode YAML to the authoring template specified by variable `authoringTemplate` and maps it to the presentation template specified by variable `defaultPresentationTemplateId`. Use the same method call to update the presentation template mapping for an existing render mode YAML that was previously added to the authoring template. After a new render mode is added to the template with the API, the new mode is visible in the user interface when you edit the item. Users can update the field and choose another presentation template from the user interface.

To add a render mode that is named YAML to the authoring template without mapping it to a presentation template issue the following method call:

```
authoringTemplate.getItemProperties().setPresentationTemplateForMode("YAML", null);
```

Use the same method call to remove the currently mapped presentation template from an existing YAML render mode.

To remove the YAML custom render mode from the authoring template item, issue the following method call:

```
authoringTemplate.getItemProperties().removeRenderMode("YAML");
```

## Create and remove a render mode

To add a render mode to an authoring template and map it to a presentation template, issue the following method call:

```
authoringTemplate.getItemProperties().setPresentationTemplateForMode("YAML", defaultPresentationTemplateId);
```

The example adds the render mode YAML to the authoring template specified by variable `authoringTemplate` and maps it to the presentation template specified by variable `defaultPresentationTemplateId`.

Use the same method call to update the presentation template mapping for an existing render mode YAML that has been previously added to the authoring template.

Once the new render mode is added to the template using the API, the new mode is visible in the UI when editing the item. Users can update the field and choose another presentation template from the UI.

To add a render mode named YAML to the authoring template without mapping it to a presentation template, issue the following method call:

```
authoringTemplate.getItemProperties().setPresentationTemplateForMode("YAML", null);
```

Use the same method call to remove the currently mapped presentation template from an existing YAML render mode. To remove the YAML custom render mode from the authoring template item, issue the following method call:

```
authoringTemplate.getItemProperties().removeRenderMode("YAML");
```


???+ info "Related information"
    - [Interface AbstractTemplateItemProperties](https://support.hcltechsw.com/csm)

