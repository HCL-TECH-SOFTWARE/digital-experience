---
title: Search
---

# Search | Content bean content hierarchy

The generic search syntax is documented in Search. The Content bean supports the default search criteria, and the following keywords for node types in searches. Alternative, shorter keywords are documented in the bean help.

-   label
-   composition or page
-   internalurl
-   externalurl
-   url (either internal or external)
-   all or any

Jython example:

```
Content.help("search-types")

# example: search all content nodes
Content.search("all")

# example: find and select page by unique name
Content.find("page", "uniquename", "ibm.portal.Portlets", "select")

# example: find all pages under label "Administration"
Content.find("label", "uniquename", "ibm.portal.Administration", "select")
Content.search("composition")
```

Jacl example:

```
$Content help search-types

# example: search all content nodes
$Content search all

# example: find and select page by unique name
$Content find page uniquename "ibm.portal.Portlets" select

# example: find all pages under label "Administration"
$Content find label uniquename ibm.portal.Administration select
$Content search composition
```


