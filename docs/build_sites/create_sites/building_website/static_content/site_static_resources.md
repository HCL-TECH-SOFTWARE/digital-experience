---
id: site_static_resources
title: Static resources
---
import useBaseUrl from '@docusaurus/useBaseUrl';



In addition to the HTML file that describes the page, static pages can contain resources such as images, scripts, and styles. Learn about the static resources that are available when you are using static pages.

-   **Linked resources**

    If the static page contains the `<html>` tag, a full page is represented. The `<head>` element of the page might contain `<link>` tags that point to static resources such as CSS style sheets and `<script>` tags that point to script resources. To efficiently point to resources embedded in the static page, enable the rewriting feature for these tags by modifying the following page metadata:

    -   Set spa.ex.link.enabled to `true`. The default is `false`.
    -   Set spa.ex.script.enabled to `true`. The default is `false`.
    If the previous metadata is set to `true`, the `href` and `src` attributes are rewritten in the following ways:

    -   If the attribute contains an absolute URL, the URL is rewritten to point to the Ajax proxy server.
    -   If the attribute contains a relative URL, the URL is rewritten to point to an access point that serves the resource out of the static page container for the page.
    In the following example, assume that the page contains the following resources:

    -   index.html
    -   images/logo.gif
    -   css/styles.css
    -   script/script.js
    The following source code would enable the use of these resources:

    ```
    <html>
    <head>
    	<link rel="shortcut icon" href="images/logo.gif">
    	<link rel="stylesheet" href="css/style.css">
    	<script src="script/script.js"></script>
    </head>
    
    ...
    </html>
    ```

    The rewriting of the link occurs at rendering time. Therefore, the resulting URLs that point to the static resources provide an efficient way to serve them.

-   **Images**

    To efficiently reference images from the static HTML source, enable the rewriting feature for image tags by modifying the following page metadata:

    -   Set spa.ex.image.enabled to `true`. The default is `false`.
    If the previous metadata is set to `true`, the `src` attribute for `<img>` tags is rewritten in the following ways:

    -   If the attribute contains an absolute URL, the URL is rewritten to point to the Ajax proxy server.
    -   If the attribute contains a relative URL, the URL is rewritten to point to an access point that serves the resource out of the static page container for the page.
-   **Resource sharing**

    Often, multiple static pages belong together in the form of an application. If so, multiple resources can be shared across the application. The mechanism that is used to rewrite resources searches across the parent page hierarchy, beginning with the current page. If a resource, for example, an image, cannot be found on one level, the fallback mechanism searches the next level. This mechanism enables the sharing of resources in a parent page that can be reused by child pages.

    **Note:** Child pages do not have to have a special syntax to enable this sharing mechanism. The child pages contain a relative URL as if the resource were contained in the page itself.



