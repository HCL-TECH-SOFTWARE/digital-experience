---
title: Refer to an Authoring Tool
---
# Refer to an Authoring Tool

An authoring tool component can be referenced within presentation templates, menu component designs, navigator component designs, and personalization component designs. When added to menus, navigators, or personalization component designs, the edit and delete functions are applied to each displayed item.

## Referencing an authoring tool component in a presentation template

An authoring tool element is referenced in a web content component tag:

```
[Component name="authoringtoolname" ]

```

## Referencing an authoring tool element in a menu or navigator design

When you reference an authoring tool component in a menu, navigator, or personalization component design, you use a component tag with a parameter of `compute="always"`. For example:

```
[Component name="authoringtoolname" compute="always" ]
```


