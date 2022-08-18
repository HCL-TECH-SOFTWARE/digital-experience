# Sample designs for a federated documents selection rule

When you render document metadata information retrieved with a federated documents selection rule, you can tailor the header, footer, and menu search result designs for simple or more elaborate presentations.

## Bulleted list design

To render a simple bulleted list of links to the documents, you can use a design like that described here.

**Header**

```
<ul>
```

**Design for each menu search result**

```
<li>
  <a target="_blank" href="[AttributeResource attributeName="contentLink"]">
    [AttributeResource attributeName="title"]
  </a>
</li>
```

**Footer**

```
</ul>
```

## Table list design

To render a complete list of information with a table, you can use a design like that described here.

**Header**

```
<table>
<tr>
<th>Title</th>
<th>Authors</th>
<th>Load</th>
<th>Load via Portal</th>
<th>Load via Portal with Authentication</th><th>Load</th>
<th>Edit</th>
<th>Content Type</th>
<th>Size</th>
<th>Updated</th>
<th>Published</th>
</tr>
```

**Design for each menu search result**

```
<tr>
<td><b>[AttributeResource attributeName="title"]</b></td>
<td>[AttributeResource attributeName="authors" separator=","]</td>
<td><a target="_blank" href=" [AttributeResource attributeName="rawContentLink"]">download</a></td>
<td><a target="_blank" href=" [AttributeResource attributeName="contentLink"]">download</a></td>
<td><a target="_blank" href=" [AttributeResource attributeName="contentLinkAuthenticated"]">download</a></td>
<td><a target="_blank" href="[AttributeResource attributeName="viewLink"]">open</a></td>
<td>[AttributeResource attributeName="contentType"]</td>
<td>[AttributeResource attributeName="size"]</td>
<td>[AttributeResource attributeName="updated"]</td>
<td>[AttributeResource attributeName="published"]</td>
</tr>
```

**Footer**

```
</table>
```

**Parent topic:**[How to use a federated documents rule in a personalization component \| HCL Web Content Manager](../wcm/wcm_dev_feddocs_using.md)

