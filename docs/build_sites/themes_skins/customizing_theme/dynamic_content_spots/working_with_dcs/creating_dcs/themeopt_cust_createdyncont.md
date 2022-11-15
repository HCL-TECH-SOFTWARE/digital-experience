# Creating a dynamic content spot with resource environment providers

You can create a custom dynamic content spot to include in a theme template.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **** \> **Resource environment providers** \> **WP DynamicContentSpotMappings**.

3.  Select **Custom Properties**.

4.  Select **New**.

5.  Enter a name to be used as the ID of the mapping.

    For example newDynamicContent.

6.  Enter a value that is the URI to the dynamic content to be included by the mapping, similar to the following example:

    ```
    res:/CustomThemeContext/themes/html/MyTheme/dynamicContent.jsp
    ```

7.  Select **OK**.

8.  Save the changes.

9.  Restart the portal.

10. Open the theme template file on WebDAV.

11. Locate where in the template you want to include the dynamic content and add the following line of code:

    ```
    <link rel="dynamic-content" href="dyn-cs:id:<your mappping ID\>">
    ```

    Replace <your mapping ID\> with the name that you gave the mapping, for example newDynamicContent.

12. Clear the browser cache and refresh the page that has the theme template that you modified to get the new dynamic content spot to render.


## Using parameters

You can pass parameters to a JSP page that is rendering the dynamic content. If the page expects a parameter such as text, then you would locate where in the template you want to include the dynamic content and add the following line of code:

```
<link rel="dynamic-content" href="dyn-cs:id:<your mappping ID\>+'?text=dynatext'">
```


???+ info "Related information:"
    - [Working with dynamic content spots](../../working_with_dcs/index.md)

