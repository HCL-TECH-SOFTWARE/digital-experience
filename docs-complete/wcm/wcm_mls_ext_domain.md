# Domain locale redirection extension  Multilingual Solution

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

            **Important:** Never map any of the locale redirections to the main domain.


## How it works

Every time that you request the top-level domain the locale of the current user, or the ordered list of preferred languages set in the browser, is checked against the list of available locales as in the JSP. The JSP then redirects back to the top-level domain plus the available locale, and the web server then redirects to the correct content item based on that locale.

While this extension is designed for servlet-rendering, it can be used with portlet-rendering to render different locales from different servers.

**Parent topic:**[Extensions for multilingual sites  Multilingual Solution](../wcm/wcm_mls_extensions.md)

