# Adding support for RTL locales

You can add support for languages that read from right to left.

1.  If your theme.html file contains no translatable strings, create a new file that is named theme\_rtl.html in the nls directory. Then, modify the head section of your theme.html file to include the following link tags for the RTL locales that point to the theme template:

    ```
    <link rel="alternate" href="nls/theme_rtl.html" hreflang="ar">
    ```

    ```
    <link rel="alternate" href="nls/theme_rtl.html" hreflang="iw">
    ```

    If your theme.html file does contain translatable strings, you need a theme template for each locale in the nls directory that includes the following link tags:

    ```
    <link rel="alternate" href="nls/theme_rtl.html" hreflang="ar">
    ```

    ```
    <link rel="alternate" href="nls/theme_rtl.html" hreflang="iw">
    ```

2.  Add the following attribute to the HTML tag in the alternative theme template: `dir="rtl"`.

3.  Generate RTL versions of styles in the CSS files that indicate direction, such as float, padding, and margins. The RTL versions of these classes override the direction. These classes are located in a separate CSS file or files. For example, the following class, which indicates float, needs to be overridden:

    ```
    .stLeft{
    float: left;
    }
    ```

    In the RTL CSS file, you can override the direction by changing the float direction:

    ```
    .stLeft{
    float: right;
    }
    ```

    Repeat this step for any class that indicates direction. You can complete this step in a single RTL CSS file, or you can create individual files with names that match the files that you are overriding.

    **Note:** Most of the context menu CSS files already have RTL versions.

4.  Copy /css/master.css to /css/masterRTL.css and add imports for your new file or files at the end of the file.

5.  Add the following string to /contributions/theme.json:

    ```
    {
    "value":"/css/masterRTL.css",
    "type":"rtl"
    }
    ```


**Parent topic:**[Globalization](../dev-theme/themeopt_themedev_globalization.md)

