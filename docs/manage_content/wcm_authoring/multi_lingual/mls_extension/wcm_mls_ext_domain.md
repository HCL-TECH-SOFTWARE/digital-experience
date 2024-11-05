# Domain locale redirection extension

This extension provides a redirection from the main domain to another locale based on the locale settings of the current user.

To use this extension:

1.  Edit the MLServletHomePageRedirection.jsp in the wcm-multilocale.ear:

    -   Comment out the lines in the getAvailableLocalesList method.
    -   Change s\_defaultLocale to match the default locale.

2.  Update your HTTP Server. For example, if you are using IBM HTTP Server edit the following configuration settings:

    -   Add the following text to the end of the IBM HTTP Server configuration file:

        -   **Before version 8.5 CF03**

            ```
            LoadModule rewrite_module modules/mod_rewrite.so
            RewriteEngine on
            RewriteRule ^/$ /wps/wcmml/jsp/html/MLServletHomePageRedirection.jsp [PT]
            ```

        -   **Version 8.5 CF03 or higher**

            ```
            LoadModule rewrite_module modules/mod_rewrite.so
            RewriteEngine on
            RewriteRule ^/$ /MLS_CONTEXT_ROOT/wcmml/jsp/html/MLServletHomePageRedirection.jsp [PT]
            ```

            Where MLS\_CONTEXT\_ROOT is the context root for the multilingual solution application.

    -   For each locale in the **s\_availableLocales** list, also add the following text to the end of the IBM HTTP Server configuration file:

        -   **Before version 8.5 CF03**

            ```
            RewriteRule ^/LOCALE$ /wps/wcm/connect/LIBRARY/SITE [PT]
            ```

            -   LOCALE: The string representation of the corresponding Java Locale object. For example,"fi" for Finnish and "pt\_BR" for Brazilian Portuguese.
            -   LIBRARY: The web content library that is associated with the locale
            -   SITE: The top-level site area for the specified library
            For example: `RewriteRule ^/en$ /wps/wcm/connect/english/Internet [PT]`

            **Important:** Never map any of the locale redirections to the main domain.

        -   **Version 8.5 CF03 or higher**

            ```
            RewriteRule ^/LOCALE$ /PORTAL_CONTEXT_ROOT/wcm/connect/LIBRARY/SITE [PT]
            ```

            -   LOCALE: The string representation of the corresponding Java Locale object. For example: "fi" for Finnish and "pt\_BR" for Brazilian Portuguese.
            -   PORTAL\_CONTEXT\_ROOT: The context root for HCL Portal.
            -   LIBRARY: The web content library that is associated with the locale
            -   SITE: The top-level site area for the specified library
            For example: `RewriteRule ^/en$ /wps/wcm/connect/english/Internet [PT]`

            !!! important
                Never map any of the locale redirections to the main domain.


## How it works

Every time that you request the top-level domain the locale of the current user, or the ordered list of preferred languages set in the browser, is checked against the list of available locales as in the JSP. The JSP then redirects back to the top-level domain plus the available locale, and the web server then redirects to the correct content item based on that locale.

While this extension is designed for servlet-rendering, it can be used with portlet-rendering to render different locales from different servers.

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.
