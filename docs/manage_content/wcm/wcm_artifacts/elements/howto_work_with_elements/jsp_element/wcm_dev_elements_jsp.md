# JSP elements

You use a JSP element to store a path to a JSP. When rendered within a presentation template or element design, a request to a JSP is generated and processed.

## Creating a JSP element

To create a JSP element, you can either add a JSP element to an authoring template, site area, or content item, or create a JSP component.

**Syndication:**

Syndication does not move the JSP page referred to in a JSP element. Only the item that contains the JSP element is moved. You need to store the JSP page in the same folders of both the subscribing and syndicating servers.

!!!note
    The JSP referenced within a JSP component must not include a reference, directly or indirectly, to the same JSP component. This restriction includes references within web content tags or the API. If it does, a loop is created and errors occur.


