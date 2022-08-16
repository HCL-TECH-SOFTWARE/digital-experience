---
id: wcm_dev_referencing_components_style-sheet
title: Creating a style element tag
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The style element tag is used to reference a style sheet component that is selected as the default style sheet in an authoring template, or a style sheet component that is referenced within a site area or content item that uses a component reference.

**Note:** To directly reference a specific style sheet component, use a component tag.

The format of a style element tag:

```
[StyleElement source=" " name=" " start=" " end=" " ]
```

To create a style element tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Style sheet** as the tag type.

3.  Select a source type. This parameter is added to the tag as the `source=" "` parameter:

    -   **Template**

        This option uses the style sheet that is specified in the authoring template of the current item. You do not specify a name when you use a template as the source. To use this option, you must select a default style sheet in the related authoring template.

    -   **Path**

        This option uses the first style sheet element that matches the name, which is specified in the name parameter, from either the current site area or content item in that order. To add a style sheet to a site area or content item, you need to use a component reference element and select a style sheet component as the component reference.

    1.  If a source type of "path" is selected, you must also select a content item or site area and then select the component reference element that is used to reference the style sheet.

4.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

