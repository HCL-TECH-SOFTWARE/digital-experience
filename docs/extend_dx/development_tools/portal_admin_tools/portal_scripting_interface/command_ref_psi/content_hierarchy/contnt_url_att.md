---
title: URL attributes
---
# URL attributes | Content bean content hierarchy

For a URL content node, the `urlget` command obtains the URLs. It requires the markup name as an argument. If an ID is given, the requested URL of that content URL node is returned. If the ID is omitted, the requested URL of the currently selected URL node is returned.

Jython example:

```
Content.urlget(markup)
Content.urlget(ID, markup)
# example: get WML URL of a specific content URL node
Content.urlget(node_ID, "wml")
```

Jacl example:

```
$Content urlget markup
$Content urlget ID markup

# example: get WML URL of a specific content URL node
$Content urlget node_ID wml
```


