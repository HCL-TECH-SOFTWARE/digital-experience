# Using the rich text element

You use the rich text element to enter and format text.

The rich text editors that are used by Web Content Manager are supplied by other vendors. For information about using the rich text editor, see the user documentation that is supplied by the specific rich text editor vendor.

Basic Web Content Manager tags can be used in rich text elements. For example, the following tags can be used in Rich Text elements:

-   `[component name="test"]`
-   `[element type="content" context="current" key="body"]`

The following tag formats are invalid:

1.  The use of single quotation marks around attribute values.
    -   `[Component name='example']`
    -   `[Component name='example' start='<a href="' end=' ">link</a>']`
    -   `[Component name='example' start='<img src="' end=' "/>']`
2.  The use of double quotation marks inside attribute values.
    -   `[Component name="example" start="<a href="" end="">link</a>"]`
    -   `[Component name="example" start="<img src="" end=""/>"]`
3.  Embedding tags inside other HTML tags.
    -   `<a href='[Component name="example"]'>link</a>`
    -   `<img src='[Component name="example"]'/>`

???+ info "Related information"  
    -   [Inserting an image in an element](../../../elements/element_designs/wcm_dev_elements_insert_image.md)
    -   [Inserting a link in an element](../../../elements/element_designs/wcm_dev_elements_insert_link.md)
    -   [Inserting element tags](../../../elements/element_designs/wcm_dev_elements_insert_tags.md)
    -   [Creating web content tags](../../../../wcm_artifacts/tags/creating_web_content_tags/index.md)



