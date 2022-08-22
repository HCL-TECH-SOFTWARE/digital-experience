# Theme templates

You can use static HTML to write portal themes. Then, add static and server-side dynamic content by modifying the theme.html in WebDAV at fs-type1/themes/themename/theme.html.

**Note:** When you choose the Simple Theme for your site, you must apply the Basic \(no theme\) site template so that all of your site pages inherit the Simple Theme. If you do not apply the Basic \(no theme\) site template when you choose the Simple Theme, you must set the theme for each page individually.

**Note:** If you create a custom theme that uses the Simple Theme template and later enable search engine optimization \(SEO\), the custom theme does not render on your portal page. Use the following steps to restore your custom theme:

1.  Export the theme by using XMLAccess.
2.  Modify the `context-root` so that it matches the changes you made when you enabled SEO.
3.  Add the following parameter to the theme: `<parameter name="`com.ibm.portal.theme.hasBaseURL`" type="string" update="set"><![CDATA[true]]></parameter>`
4.  Save the theme file and import it by using XMLAccess.

-   **[Adding static content to theme.html](../dev-theme/themeopt_themedev_static.md)**  
You can add static content to the file theme.html in three ways: directly, from WebDAV, or by adding relative URLs.
-   **[Adding server-side dynamic content to theme.html](../dev-theme/themeopt_themedev_dynamic.md)**  
You can identify dynamic content spots in theme.html so that the server-side theme parser pulls in dynamic content to fill them. Dynamic content changes for every user, page, or other server state, so you cannot define it statically in the theme file. Instead, it is inserted into the response at run time.


