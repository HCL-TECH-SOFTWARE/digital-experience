# Creating an If Edit Mode tag 

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

**Related information**  


[Inline editing ](../wcm/wcm_dev_inline.md)

[Enabling inline editing for content items ](../wcm/wcm_dev_inline_tags.md)

