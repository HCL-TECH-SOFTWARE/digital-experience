---
id: wcm_dev_referencing_components_alternate-design
title: Creating an alternate design tag
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You use an alternate design tag to display a different component based on whether the item that is returned by a menu or navigator is on the current path or not.

The format of an alternate design tag:

```
[alternatedesign highlight=" " normal=" " type=" " start=" " end=" " ]
```

To create an alternate design tag:

1.  Click **Insert a Tag** from a presentation template or element design field. The **Tag Helper** dialog opens.

2.  Select **Alternate Design** as the tag type.

3.  Select a component to use when you display items not on the current path in a navigator or menu design. This item would typically be a text or HTML component that contains the code that is used to display a navigator or menu result, such as a placeholder tag. This parameter is added to the tag as the `normal=" "` parameter.

    **Note:** If you select `type="parent"` or `type="any"` in step 5, the highlighted design is used by all the site areas in the current item path.

4.  Select a component to use when you display items on the current path in a navigator or menu design. This item would typically be a text or HTML component that contains the code that is used to display a navigator or menu result, such as a placeholder tag. This parameter is added to the tag as the `highlight=" "` parameter.

5.  Select whether to apply the alternate design tag to the current content item, the parent site area, or any item that is returned by a navigator. This parameter is added to the tag as the `type=" "` parameter.

    **Note:**

    -   When you add an alternate design to a menu design, select only `type="parent"` or `type="any"` because site areas cannot be displayed in menus.
    -   When you add an alternate design to a navigator design, use `type="current"` if the navigator is configured to display content items.
6.  Click **OK** to add the tag to your navigator design.


When you add the tag to your design, you can also add the following parameters to the tag:

|Tag parameters|Details|
|--------------|-------|
|`normal=" "`|To use the library that is specified in the URL of the current page, use `normal="./name"`.**Note:** If you specify `normal="./name"`, the library name does not appear in your presentation template or element design. The actual path is not resolved until the item is rendered.

|
|`highlight=" "`|To use the library that is specified in the URL of the current page, use `highlight="./name"`.**Note:** If you specify `highlight="./name"`, the library name does not appear in your presentation template or element design. The actual path is not resolved until the item is rendered.

|
|`start=" "``end=" "`

|The Start and End attributes are used to wrap the data that is returned by a tag within other tags, such as HTML.S These attributes are not mandatory.|

**Displaying different code for content items and site areas:**

To display different code when you reference content items or site areas in a menu or navigator, you need to use two alternate design tags. One for your content items and one for your site areas. For example:

```
[AlternateDesign highlight="./currentsiteareacomponent" normal="./othersiteareacomponent" type="sitearea"]
[AlternateDesign highlight="./currentcontentcomponent" normal="./othercontentcomponent" type="content"]
```

