# If Edit Mode tag

The IfEditMode tag is used to render content in a web content viewer portlet only when a page is in edit mode. This tag can be used to display text, fields, and elements in edit mode that are not required to be displayed when the page is in view mode.

The format of an `IfEditMode` tag:

```
[IfEditMode]

[/IfEditMode]
```

To create an `IfEditMode` tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **If Edit Mode** as the tag type.

3.  Click **OK** to add the tag to your navigator design.


Extra text, HTML, or tags are added between the `[IfEditMode]` and `[/IfEditMode]` tags. The text and tags added here is what is rendered when a page is in edit mode.

For example:

```
[IfEditMode]
This content is only rendered when in edit mode.
[Property type="content" context="current" field="title"]
[/IfEditMode]
```

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Inline editing](../../../../inline_editing/index.md)
    - [Enabling inline editing for content items](../../../../inline_editing/wcm_dev_inline_tags.md)
