# Enabling presentation of Locales in friendly URLs

Beginning with HCL DX Container Update CF193 and higher, enablement is provided to present friendly URL’s which retain locale specific definitions when multi-lingual page versions are requested. This enablement can also improve SEO results when users search for language specific DX page topics.

This new enablement improves capability for site managers to deliver language specific friendly URLs without URL specific encoding efforts.

Follow the guidance below to enable locales in the prefix of the HCL DX page URL contexts, for example, `/wps/portal/es/page1/page11` or `/wps/portal/fr/page1/page11`, when a language specific version is requested. The enablement will support friendly and non-friendly URLs, and those supported with the [Web Content Manager Multi-Lingual Solution](../wcm/wcm_mls.md).

This enablement is not supported or executed during presentation of portlet resources such as portlets, REST API calls, or sites presented via Web Application Bridge.

## How the enablement to present locale specific pages with friendly URLs works

When a DX user comes to site by either invoking a page with a locale in the URL, or makes a selection from a list of language page options, the enablement logic is invoked. If no language specific page is requested, the default language version is displayed. The new logic checks if the multi-lingual locale URLs support is enabled, and if the requested page has a locale that matches the list of locales configured to the DX site. Next, the request URL is modified to exclude the locale and request parameter is set. Once the request parameter is set, the *DX State Decoding Plugin* is invoked to retrieve a locale in the request parameter and sets the locale in the current state. All page rendering then has the right locale set, and the response is sent to the user’s browser client.

Whenever a new URL is created via state handling or by Web Content Manager content for presentation to users, these processes will be executed. When language specific URLs are requested, the *DX State Decoding Plugin* is invoked to manage the requested rendering of the language specific URL and page for the end user.

## Enabling the feature to present locale specific friendly URLs

Use the configuration task or manual steps to enable presentation of language specific friendly URLs.

**Config Task**

1.  Run the following configuration task on your primary HCL Digital Experience node, and restart the other JVMs.
2.  Replace the list defined in `friendly-locale-list` with the locales you would like to support.

    The following example lists the German, English, and Spanish locales \(`“dn,en,es”`\) to be supported:

    ```
    ConfigEngine.bat|sh enable-friendly-locale-urls -Dfriendly-locale-list="de,en,es" -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```


**Manual enablement**

1.  In the WebSphere Application Server Admin Console, go to **Resources** \> **Resource Environment Providers** \> **WP ConfigService**, and create the following new properties:

    ```
    friendly-locale-enabled=true
    ```

    ```
    friendly-locale-list=de,es
    ```

    Adjust the `friendly-locale-list` as desired.

2.  Restart the HCL Digital Experience server.

    **Note:** In a cluster, synchronize the nodes and then restart all the HCL DX JVMs.


## Disabling the feature to present locale specific friendly URLs

Use the configuration task or manual steps to disable the process to manage presentation of language specific friendly URLs.

**Config Task**

1.  Run the following configuration task on your primary HCL Digital Experience node, and restart the other JVMs:

    ```
    ConfigEngine.bat|sh disable-friendly-locale-urls -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin
    ```

2.  Restart the HCL Digital Experience server.

    **Note:** In a cluster, synch the nodes and then restart all Digital Experience JVMs.


**Manual disablement**

1.  In the WAS Admin Console under **Resources** \> **Resource Environment Providers** \> **WP ConfigService**, remove the following properties:

    ```
    friendly-locale-enabled friendly-locale-list
    ```

2.  Restart the Digital Experience server.

    **Note:** In a cluster synchronize the nodes and then restart all Digital Experience JVMs.


**Expected Operating Results**

By default, the multi-lingual locale is not encoded into the DX site page URL.

But if a request arrives \(for example: [http://localhost:10039/wps/portal/de/Home](http://localhost:10039/wps/portal/de/Home)\), the entire page, and all links should be rendered in German and the browser URL should retain `“/de”` in it and in friendly format \(if friendly URLs are enabled\).

When generating a URL with the `ChangeLanguageCommand`, or using the Navigational state SPI, the language does have the friendly locale in the URL. This works for friendly URLs and non-friendly URLs.

It also works in the context of the Web Content Management Multi-Lingual Solution feature. When rendering a page, the correct MLS web content library for the requested language is being used. In this case, note that locales defined to the list should be specified and addressed via an underscore, for instance `pt_BR` for Brazilian Portuguese.

## Limitations

-   When generating a Virtual Portal or DX page at the root level, a State Decoding check is not performed, to avoid conflicts with the defined URLs. The virtual Portal creation cannot not succeed; specifically, the page creation would proceed but the page cannot be accessed without the URL \(i.e. having a locale of `de` and creating a root page of `de`, the URL to access the page would be `/wps/portal/de/de`, assuming a default context root\).
-   In the [Web Content Management Authoring portlet](../panel_help/wcm_using.md), the Generate button and the according widgets are not translated if friendly locales or a locale in the state is used \(known issue\).

