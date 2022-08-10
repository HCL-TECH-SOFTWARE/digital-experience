# Getting help for a command

The Portal Scripting Interface provides more commands and variants of commands than shown in the previous topics. To learn more about these commands and their syntax and function, and beans and parameters, refer to the integrated help of the Portal Scripting Interface.

Use the command help\(\) and specify the command for which you want to get help. Start by entering the following command:

```
wsadmin>print Content.help("find")

```

This returns the following help output about how to use the help command:

```
> find <what> [<by> <value>] [select]
Finds a particular content node. The search scope is the subtree starting
at the current selection, or the whole tree if nothing is selected. Unlike
the 'search' command, this operation expects a single matching node as the
result of the search. An error is generated if there are multiple matches,
or if there is no match at all. If the keyword "select" is specified as the
last argument, the found node will be selected.
All other arguments are the same as for the 'search' command. See help on
'search-types' for the first argument. See help on 'search-criteria' for
the optional second and third arguments.
Example:> find page uniquename "My page"
Returns the id of a portal page node with the given unique name. If the page
with the given unique name does not exist, or if the node with the specified
unique name is not a page node, the command throws an exception.

```

To find out more detail about the search types, enter the following command:

```
wsadmin>print Content.help("search-types")

```

This returns the following help information about the search criteria:

```
> search <what>
> find <what>
The following is a list of supported keywords for content node types.
These keywords can be used as the first argument in 'search' and 'find'
operations.
- any, all
Any type of content node.
- label, labels
Only labels.
- page, pages, composition, compositions, comp
Only compositions, also called pages.
- url, urls, anyurl, allurls
Any type of URL node.
- iurl, iurls, internalurl, internalurls
Only internal URL nodes.
- xurl, xurls, externalurl, externalurls, eurl, eurls
Only external URL nodes.

```

To find out about the search criteria, use the following command:

```
wsadmin>print Content.help("search-criteria")

```

To find out which command the `Content` bean supports, enter the following command:

```
wsadmin>print Content.help()

```

This returns the following help output:

```
This bean provides access to the content hierarchy of the portal. The
content hierarchy consists of labels, pages, and links. Pages are also
called "compositions". Links can be internal or external URLs. Content
nodes can be accessed, created, and deleted with this bean. URLs of a
link can be modified with this bean.
The layout of a page is a component hierarchy of containers and controls.
That hierarchy must be accessed through the Layout bean rather than this
Content bean. When a page (composition) is selected in the Content bean,
the Layout bean can be used to access the component hierarchy of that page.
See the help for the Portal bean to learn about other available beans.
Invoke help with one of these methods as argument for further help:
help, resync, select, deselect, current, csn, root, parent, children, path,
index, details, get, set, nlsget, nlsset, nlsimport, urlget, urlset,
list, add, drop, empty, search, find, move, create, derive, delete,
pageget, pageset, parmget, parmset, transfer, deletecustomization
Other available help topics:
attribute-names, nls-files, list-names,
search-types, search-criteria, create-types

```

**Parent topic:**[Getting started with the Portal Scripting Interface](../admin-system/adpsi_start.md)

