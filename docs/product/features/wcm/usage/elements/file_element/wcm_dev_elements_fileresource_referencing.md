# How to reference a file resource

A file resource can be referenced within presentation templates and other element designs with either a component or element tag.

## Creating a link to a file resource

To create a link to a file resource in a presentation template or element design to enable users to download the file reference, use the following tag structures.

To create a link to a file resource component, you use a component tag:

```
<a href="[component name="FileResourceName"]">Link Text</a>
```

To create a link to a file resource element, you use an element tag. For example, to link to a file resource element in the current content item:

```
<a href="[element type="content" context="current" key="FileResourceName"]">Link Text</a>
```

## Rendering a file resource on a page

If your file resource is a file type that can be converted to HTML, you can instead convert the file to HTML and render the converted HTML directly in your web content with the  parameter in a component or element tag. For example:

```
[component name="FileResourceName" ]
```

```
[element type="content" context="current" key="FileResourceName" ]
```

Examples of supported file types include:

-   word-processing documents \(\*.doc, \*.odt\)
-   spreadsheets \(\*.xls\) \*
-   HTML files \(\*.htm, \*.html\)
-   Text files \(\*.txt\)

Other file types might also work but you need to test them first.

**Note:** If you configure an authoring template to be a resource template, then the content items you create are resource content items. When a link to a resource content item is rendered, the file that is stored in the selected file resource element is rendered on the web page. In this case, you would not use an element tag. Instead, the file resource is rendered either with a placeholder tag in a navigator or menu design, or by writing a link directly to the resource content itself.

**Parent topic:**[How to store files and images](../wcm/wcm_dev_elements_types_files.md)

