# Contextual linking

Contextual linking is used in systems where content from one site is shared across multiple sites. When content is linked into a site, embedded links \(link elements and links in HTML\) reference the site the original content item is in. Contextual linking is used so that when content is linked from another site, the link is rendered relative to the current site if possible.

## Contextual path links

Contextual path links attempt to resolve a link by using a relative path technique. Contextual path linking assumes that each site framework that the linked content is stored in has the same site structure.

Contextual path links can be applied to elements referenced by using the element tag. For example:

```
[Element type="content" context="current" key="body" link="path" ]
```


It can be used only if context=current or context=autofill.

When contextual path linking is used, a compatible link is searched for using the same relative path. If no link is found, the original link is used.


