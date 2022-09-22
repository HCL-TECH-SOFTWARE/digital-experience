---
title: Lifecycle
---

# Lifecycle | Content bean content hierarchy

The create command creates a new content node. The derive command creates a new content node for a page that is derived from another page. The delete command removes a content node.

When you create a new content node, the parent for the new node must be selected. The first argument for creating is the type of the new node. Supported types are label, page, and externalurl. See the bean help for alternative and shorter names. It is not possible to create a node of type internalurl from a script.

The second argument is a name for the new node. It is set as the provisional English title, and the common name of the new node is computed from it. The last argument is one markup that is supported by these nodes. Extra markups can be enabled by manipulating the list of markups. For more information, see *List valued attributes*. The create command returns the ID of the newly created node. If the keyword select is appended to the command, the created node becomes the current selection.

Optionally, the script can specify a shared-flag, which indicates whether the new page is a shared page (shared) or a non-shared page (nonshared). The optional flag private-flag indicates whether the new page is private or public (possible values are private and public). This flag is only valid if the content node type is page.

When you derive a page, the parent for the new page in the content tree must be selected. Only pages that are flagged as shared and public can be used as base pages for derivation. The first argument is the name of the new page. The type of the node is implicit, since only pages can be derived.

The second argument is the keyword from and the third argument is the identifier of the page to derive from. The supported markups are the same as for the base page. The derive command returns the ID of the newly created node. If the keyword select is appended to the command, the created node becomes the current selection.

Do not rely on the name that is set as the English title, since this behavior might change in the future. Set the English title explicitly if you plan to support the enlocale. However, the common name is computed from the name argument.

Jython example:

```
Content.create(type, name, markup)
Content.create(type, name, markup, "select")
Content.create(type, name, markup, [shared_flag,]
[private\_flag,] "select")

Content.derive(name, "from", ID)
Content.derive(name, "from", ID, "select")

# example: create and select a label at the first level,
#          then create a derived page under the new label
Content.select("the", "root")
Content.create("label", "Leisure", "html", "select")
Content.derive("Movies", "from", node_ID)
```

Jacl example:

```
$Content create type name markup
$Content create type name markup select
$Content create type name markup [shared_flag] [private_flag] 
select

$Content derive name from ID
$Content derive name from ID select

# example: create and select a label at the first level,
#          then create a derived page under the new label
$Content select the root
$Content create label "Leisure" html select
$Content derive "Movies" from node_ID
```

To create a static page, run the following command:

Jython:

```
Content.create(staticpage, title, markup, zip\_file\_name, filename, displayoption, "select")
```

For example, Content.create(staticpage, MyStaticPageTitle, html, c:/tmp/StaticContentPage.zip, index.html, inline, "select")

Jacl:

```
$Content create staticpage title markup zip_file_name filename [displayoption] [select]
```

For example, $Content create staticpage MyStaticPageTitle html c:/tmp/StaticContentPage.zip index.html [inline] [select]

The preceding example creates a static page beneath the currently selected content node for the HTML markup with the page title MyStaticPageTitle. The content of the page is read from c:/tmp/StaticContentPage.zip. The entry point for the page display is read from index.html, which must be contained in the ZIP archive. To specify the display method, you can use the optional parameter displayoption. This parameter takes one of the following values inline, iframe, or ajax. The default value is inline. To make the newly created static page the currently selected content node, use the optional parameter select.

To get the static page content in the format of a ZIP archive, run the following command:

Jython:

```
Content.pageget(oid, markup, zip\_file\_name)
```

For example, Content.pageget(6_CGAH47L00G2N802TJFV58Q3000, html, c:/tmp/MyStaticContentPage.zip)

Jacl:

```
$Content pageget oid  markup  zip_file_name
```

For example, $Content pageget 6_CGAH47L00G2N802TJFV58Q3000 html c:/tmp/MyStaticContentPage.zip

The preceding example writes the content of the specified static page to c:/tmp/MyStaticContentPage.zip.

To set the static page content by specifying a ZIP file name, use the following command:

Jython:

```
Content.pageset(oid, markup, zip_file_name, filename)
```

For example, Content.pageset(6_CGAH47L00G2N802TJFV58Q3000, html, c:/tmp/NewStaticContentPage.zip, index.html)

Jacl:

```
$Content pageset oid markup zip_file_name filename
```

For example, $Content pageset 6_CGAH47L00G2N802TJFV58Q3000 html c:/tmp/NewStaticContentPage.zip index.html

The preceding example updates the specified static page content with the content of c:/tmp/NewStaticContentPage.zip. The entry point for the page display is read from index.html, which must be contained in the ZIP archive.

The command delete removes a content node that has no children. Nodes that have children cannot be deleted. To reduce the risk of accidental deletion, this command always requires the ID as an argument, even if the node to be deleted is selected.

When you delete a page, all pages that are derived from that page are also deleted. This action also affects other users that have pages that are derived from that base page. If the currently selected node is deleted, either directly or by deleting a base page, the bean clears.

Jython example:

```
Content.delete(ID)
```

Jacl example:

```
$Content delete ID
```


???+ info "Related information"  
    -   [List valued attributes | Content bean content hierarchy](../../../../portal_admin_tools/portal_scripting_interface/command_ref_psi/content_hierarchy/contnt_lst_val_att.md)

