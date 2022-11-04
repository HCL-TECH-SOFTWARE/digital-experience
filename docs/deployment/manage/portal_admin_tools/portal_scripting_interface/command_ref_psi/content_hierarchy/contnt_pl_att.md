---
title: Plain attributes
---

# Plain attributes | Content bean content hierarchy

In addition to the default attributes, content nodes have the following attributes.

|Attribute|Description|
|---------|-----------|
|`position`|The numeric position among the siblings, zero-based.|
|`themeid`|The identifier of the theme for the content node.|
|`themename`|The name of the theme for the content node.|
|`allportlets`|A flag that indicates whether all portlets are allowed for the page or not. If this flag is set true, the list of allowed portlets is ignored. Refer to *List valued attributes*.|

The themeid attribute is writable. The themename attribute is not writable, but the value depends on the themeid attribute. The position attribute is not writable either, but the value depends on the organization of the content tree.

To get attributes of a static page content node, run the following command

Jython:

```
Content.get(oid, attribute, markup)
```

Jacl:

```
$Content get oid attribute markup
```

Valid attributes are as follows:

-   **filename**

    Gets the file name of the static page layout file that is contained in the ZIP archive.

-   **displayoption**

    Specifies markup languages such as HTML.


Jython example: Content.get(6_CGAH47L00G2N802TJFV58Q3000, filename, html)  
 Jacl example: $Content get 6_CGAH47L00G2N802TJFV58Q3000 filename html

The preceding example returns the file name of the entry point for the page display.

To set attributes for a static page, run the following command:

Jython example:

```
Content.set(oid, attribute, value, markup)
```

Jacl example:

```
$Content set oid attribute value markup
```

Valid attributes are filename and displayoption.

-   **filename**

    Gets the file name of the static page layout file that is contained in the ZIP archive. For example, to set the entry point to display anotherindex.html for the specified markup run the following command:

    Jython: Content.set(6_CGAH47L00G2N802TJFV58Q3000, filename, anotherindex.html, html)  
     Jacl: $Content set 6_CGAH47L00G2N802TJFV58Q3000 filename anotherindex.html html

-   **displayoption**

    Specifies markup languages such as HTML. Valid options for displayoption are inline, iframe, and ajax. For example, to set the display option to iframe for the specified markup run the following command:

    Jython: Content.set(6_CGAH47L00G2N802TJFV58Q3000, displayoption, iframe, html)  
     Jacl: $Content set 6_CGAH47L00G2N802TJFV58Q3000 displayoption iframe html



???+ info "Related information" 
    -   [List valued attributes | Content bean content hierarchy](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/content_hierarchy/contnt_lst_val_att.md)

