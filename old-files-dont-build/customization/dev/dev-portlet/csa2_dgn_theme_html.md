# Theme templates \(theme.html\)

You can use static HTML to write portal themes. The static theme template is named theme.html.

A theme.html file is in the root directory of the theme on WebDAV \\fs-type1\\themes\\theme-name\\, and there are theme.html files in the nls directory under the theme \\fs-type1\\themes\\theme-name\\nls\\. The theme.html includes the full HTML structure of the page, including `<html>`, `<head>`, and `<body>` sections. It can include both static and dynamic content.

**Notes:**

-   The folder nls contains a file that is named theme.html without a locale that is associated with it. This file is not used. You can ignore it.
-   Remember to modify the theme template files by using the WebDAV entry point fs-type1. When you use this entry point, your changes to the theme template are immediately reflected upon a browser refresh.

## Root theme template

In a default HCL Portal installation, the portal does not render the template file theme.html in the root directory of the theme. Instead, this file links to the templates, and the portal renders the appropriate template. The links to the templates are in the `<head>` section of the root template. They have the following form:

```
<link rel="alternate" href="nls/theme_locale\_code.html" hreflang="locale\_code">
```

An example of a link to the English template file is as follows:

```
<link rel="alternate" href="nls/theme_en.html" hreflang="en">

```

If you do not want to use theme templates, you can remove these links from the theme.html template in the root directory. If you do this, the portal renders this root template.

This theme template also includes Apache Ant scripting in the following form:

```
 ${bundle\_name:bundle\_key:character\_encoding}
```

The `character encoding` replaces special characters with the escape sequence determined by the specified encoding. The available types of encoding are `xml` or `json`. You can chain multiple instances of encoding as follows:

```
${bundle:key:json:xml} or ${bundle:key:xml:json}
```

You can use the Apache Ant build framework to generate templates that are based on this root template. This can be useful if you want to update one template during development and then generate the templates by using the Ant build process. If you want to use only the root template, replace the Ant scripting with the preferred text that you want to be rendered. You can learn more about the Ant build tool at [Apache Ant](http://ant.apache.org/).

## Theme templates

In a default HCL Portal installation, the theme architecture renders content by using the theme templates. These templates are in the nls sub-directory under the theme directory on WebDAV. These files have the locale code that is appended to the end of the template name, for example `theme_en.html` for English. These templates translate static text inline within the template.

When you use the theme templates and want to view your changes, update the template that the portal renders in the browser. For example, if your preferred language is English, update the file `theme_en.html`.

## Adding static content to the theme.html

You can add static content to the `theme.html` in the following ways:

-   **Adding content directly:**

    You can add static content, such as HTML markup and images directly to the file theme.html.

-   **Adding content from WebDAV:**

    You can add content that is in WebDAV relative to the theme.html file with a relative URL reference.

-   **Adding content by relative URLs:**

    You can use relative URLs to reference static content in the /common-resources/ folder in the WebDAV file store. If the relative path does not successfully resolve to a file within the theme folder, the portal uses the folder /common-resources/ as a fallback location to locate the resource. This way the theme can reference common resources and still preserve the ability to override a file in that folder with a resource of the same name in the theme folder.


## Adding server-side dynamic content to the theme.html

Dynamic content changes per user, or per page, or per some other server state. Therefore, you cannot define it statically in the theme file. Instead, you insert it into the response at run time. To do this, you edit the theme.html and identify these dynamic content spots. Then at run time, a server-side theme parser identifies and resolves dynamic content spots, and streams their output into the final response to the browser.

The format of a dynamic content spot is as follows:

```
<a rel="dynamic-content" href="{path to dynamiccontent}"></a>
```

-   **`rel="dynamic-content"`**

    The theme template parser recognizes the element `rel="dynamic-content"`. It resolves the `href` attribute and inserts its output into the response.

-   **`href`**

    The `href` can point to any URI that is resolved by the resource addressability framework.


Examples:

1.  The following example is a special content spot that renders the referenced layout template and content of the current page:

    ```
    <a rel="dynamic-content" href="lm:template"></a>
    ```

2.  The following example includes a dynamic content spot from the mapping that is specified through the module `dyn-cs` contribution type, in the `WP_DynamicContentSpotMappings` Resource Environment Provider or theme metadata.

    ```
    <a rel="dynamic-content" href="dyn-cs:customSpot"></a>
    ```

3.  The following example includes the output of a theme JSP with a resolver POC URL:

    ```
    <a rel="dynamic-content" href="res:/customContext/themes/html/customTheme/customSpot.jsp"></a> 
    ```


## Changing the theme template location

You can change the location of the theme template. For this purpose, the theme contains a metadata parameter that stores the location of the theme template theme.html. The parameter name is `com.ibm.portal.theme.template.ref`. If required, you can point it to an external location. For example, you can specify a POC URI or the URL to an external server. You do not need to store the theme template on WebDAV. In a default portal installation, the metadata parameter for the theme is as follows:

```
<parameter name="com.ibm.portal.theme.template.ref" type="string" update="set">
<![CDATA[dav:fs-type1/themes/theme\_folder/]]>
</parameter>
```

-   **[Setting inherited theme templates](../rwd/rwd_set_inherited_theme_template.md)**  
You can set a theme template to be used on a page and it automatically sets the template for all child pages that are associated with that page. The inherited metadata can be used when you want every page under a specific page to have the same theme template.
-   **[Renaming Theme Templates](../rwd/rwd_renamethemetemp.md)**  
You can rename the default filename of the theme template from theme.html. In the ready-to-use theme renaming the theme.html file is used to provide a different theme view for the administrative pages.

**Parent topic:**[Customizing the theme](../dev-theme/themeopt_cust.md)

