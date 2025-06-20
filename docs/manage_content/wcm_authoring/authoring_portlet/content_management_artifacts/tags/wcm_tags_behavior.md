# Web content tag syntax

These examples describe how to write web content tags, their syntax, and valid abbreviations and shortcuts.

## Tag delimiter

Web content tags can be written by using square or angle brackets. For example:

-   `[Property field="title"]`
-   `<Property field="title">`

## Parameter delimiter

A choice of attribute delimiters can be used when you write web content tags. For example, the field parameter in a property tag can be written with double quotation marks, single quotation marks, or no quotation marks:

-   `[Property field="title"]`
-   `[Property field='title']`
-   `[Property field=title]`

!!! note
    The anchor and image HTML tags are the only HTML tags that are processed within web content tags. An attribute delimiter tag must always be used with these HTML tags, and are added automatically if omitted.

## Primary parameters

Tags can be shortened by using their primary parameter.

For example, the tag `[Property field="title"]` can be shortened to `[Property:title]`.

These primary parameters can be used to shorten a tag:

-   **`Field`**

    This parameter is the primary parameter of the Property and EditableProperty tags.

-   **`Key`**

    This parameter is the primary parameter of the Element, EditableElement, IfDefined, and IfNotDefined tags.

    **Restriction:** A shortened tag cannot be used with elements that have a space in their name. For example, if you add a text element to an item named "First Text Element" you cannot shorten its tag to `[Element:First Text Element]`. You must instead use the full tag syntax: `[Element key="First Text Element"]`

-   **`Tag`**

    This parameter is the primary parameter of the Placeholder tag.

-   **`Type`**

    This parameter is the primary parameter of the Path Component tag.


## Dynamic Parameter Tag

The dynamic parameter tag is used as a simple representation of a more complex web content tag. It is represented by using a `$` symbol.

For example, the property tag `[Property field="title"]` can be written as `[$title]`.

When a dynamic parameter tag is used, the context of the tag is determined in this order: Property, then element, then parameter resource. So, if you used this tag, `[$yellow]`, a property named "yellow" would be used first. If this property does not exist, an element named "yellow" would be used. If neither of these tags exist, a tag that contains a resource parameter named "yellow" would set the context.

The parameters of a dynamic parameter tag always default to `context="autofill"`, and `type="auto"`.

To disable this behavior add the parameter dynamic.parameter.tag.enabled with a value of "false" to the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console. You will need to restart your server after making this change. Any dynamics tags created before disabling this feature will remain valid until an item is updated and saved.

## Simplified plug-in tags

This tag is an example of a plug-in tag: `[Plugin:Page paramKey1='id']`

You can simplify the plug-in tag to this: `[Page paramKey1='id']`

The simplified plug-in tag cannot replace an existing web content tag. For example, if you created a plug-in named "Property", you must use the full tag: `[Plugin:Property]`. The tag `[Property]` is treated as a property tag, not a plug-in tag.

To disable this behavior add the parameter renderingplugin.shortform.enabled with a value of "false" to the **WCM WCMConfigService** service by using the WebSphere Integrated Solutions Console. This parameter is applied only when items are saved. This causes the simplified plug-in tags to be ignored. For instance, `[Page]` is rendered, rather than being interpreted as a tag. To use a tag, the long-form tag such as `[Plugin:Page]` must be used.

## Default undefined tag attributes

If not specified in a tag, the `context` and `type` tag parameters default to `context="autofill"` and `type="auto"`.

## HTML image tag

The border tag that is used in HTML image tags that are generated by Web Content Manager are not rendered in the tag if the border specified in an image element is not specified, or is zero.

## Tag attribute order

Tag attributes are rendered in the order they are entered. Extra attributes, if any, are rendered next.

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.
