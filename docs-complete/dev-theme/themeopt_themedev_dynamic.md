# Adding server-side dynamic content to theme.html 

You can identify dynamic content spots in theme.html so that the server-side theme parser pulls in dynamic content to fill them. Dynamic content changes for every user, page, or other server state, so you cannot define it statically in the theme file. Instead, it is inserted into the response at run time.

A dynamic content spot is composed of two components: `rel="dynamic-content"` and `href`.

-   **`rel="dynamic-content"`**

    The theme template parser recognizes the element `rel-"dynamic-content"`. It resolves the `href` attribute and inserts its output into the response.

-   **`href`**

    The `href` can point to any URI that is resolved by the resource addressability framework.


The following example is a special content spot that renders the referenced layout template and content of the current page:

```
<a rel="dynamic-content" href="lm:template"></a>
```

The following example outputs the footer:

```
<a rel="dynamic-content" href="dyn-cs:id:st_footer"></a>
```

**Parent topic:**[Theme templates ](../dev-theme/themeopt_themedev_theme_templates.md)

