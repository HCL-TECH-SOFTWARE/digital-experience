# If Not Edit Mode tag

The IfNotEditMode tag is used to render content in a web content viewer portlet only when a page is in view mode. This tag can be used to display text, fields, and elements in view mode that are not required to be displayed when the page is in edit mode.

The format of an `IfNotEditMode` tag:

```
[IfNotEditMode]

[/IfNotEditMode]
```

To create an `IfNotEditMode` tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **If Not Edit Mode** as the tag type.

3.  Click **OK** to add the tag to your navigator design.


Additional text, HTML, or tags must be added between the `[IfNotEditMode]` and `[/IfNotEditMode]` tags. The text and tags added here is what is rendered when a page is in view mode.

For example:

```
[IfNotEditMode]
This content is only rendered when in view mode.
[Property type="content" context="current" field="title"]
[/IfNotEditMode]
```

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Enabling inline editing for content items](../../../../inline_editing/wcm_dev_inline_tags.md)
