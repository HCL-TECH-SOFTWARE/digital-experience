# Configuring the vanity URL preview link

The user interface for managing vanity URLs has a preview link. By default, this link shows the full vanity URL. If you installed an HTTP server and configured it to allow short vanity URLs, you can configure the preview link to show the short vanity URL instead.

By default, the preview link points directly to the vanity URL servlet. Example:

```
http://hostname/wps/vanityurl/shoe-sale
```

If you installed an HTTP server and configured it to allow short vanity URLs, you can configure the preview link to point to the HTTP server instead. It then shows the short vanity URL, for example as follows:

```
http://hostname/shoe-sale
```

You switch between these two options by using the appropriate portal configuration tasks:

-   If you want the preview link to point to the HTTP server, run the portal configuration task `**enable-vanityurl-httpserver-preview`.
-   If you want the link to go to the vanity servlet and show the full vanity URL, run the portal configuration task `**disable-vanityurl-httpserver-preview`. This setting is the default.

The syntax for these configuration tasks is as follows:

-   **AIX®**

    `./ConfigEngine.sh enable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`

    `./ConfigEngine.sh disable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`


-   **Linux™**

    `./ConfigEngine.sh enable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`
    
    `./ConfigEngine.sh disable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`

-   **Windows™**

    `ConfigEngine.bat enable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`

    `ConfigEngine.bat disable-vanityurl-httpserver-preview -DPortalAdminPwd=password -DWasPassword=password`


???+ info "Related information:"
     - [Providing short vanity URLs](../adm_vanity_url/van_url_short.md)

