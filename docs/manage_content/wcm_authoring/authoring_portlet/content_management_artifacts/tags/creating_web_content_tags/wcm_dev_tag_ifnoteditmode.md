# Creating an If Not Edit Mode tag

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


???+ info "Related information:"
    - [Enabling inline editing for content items](../../../../inline_editing/wcm_dev_inline_tags.md)

