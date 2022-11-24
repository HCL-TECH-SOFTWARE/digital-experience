# Entering HTML

Use the HTML element to store some HTML.

Any combination of web content tags can be used in HTML elements with the following exceptions:

1.  You cannot use single quotation marks around attribute values.
    -   [Component name='example']
    -   [Component name='example' start='<a href="' end=' ">link</a>']
    -   [Component name='example' start='<img src="' end=' "/>']
2.  You cannot use double quotation marks inside attribute values.
    -   [Component name="example" start="<a href="" end="">link</a>"]
    -   [Component name="example" start="<img src="" end=""/>"]

???+ info "Related information"  
    - [Inserting an image in an element](..//element_designs/wcm_dev_elements_insert_image.md)
    - [Inserting a link in an element](../element_designs/wcm_dev_elements_insert_link.md)
    - [Inserting element tags](../element_designs/wcm_dev_elements_insert_tags.md)
    - [Creating web content tags](../../../content_management_artifacts/wcm_artifacts/tags/creating_web_content_tags/index.md)


