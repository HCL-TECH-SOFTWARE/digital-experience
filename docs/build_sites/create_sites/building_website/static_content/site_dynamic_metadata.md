---
id: site_dynamic_metadata
title: Dynamic page metadata
---




HTML defines some elements that refer to information that is managed as page metadata on portal pages. You can use the dynamic page metadata rewriting feature to place this information into the static HTML code automatically.

The dynamic page metadata rewriting feature affects the HTML tags `<base>`, `<title>`, and `<meta>`. Enable the rewriting for each of these tags by modifying the following page metadata:

-   Set spa.ex.base.enabled to `true`. The default is `false`.
-   Set spa.ex.title.enabled to `true`. The default is `false`.
-   Set spa.ex.meta.enabled to `true`. The default is `false`.

If you enable the previous settings, the following rewrites occur:

-   **spa.ex.base.enabled**

    The `href` attribute of the `<base>` tag is replaced by the base URL to the current page.

-   **spa.ex.title.enabled**

    The text value of the `<title>` tag is replaced by the page title that is using the currently requested location.

-   **spa.ex.meta.enabled**

    If the `<meta>` tag contains an `http-equiv` attribute, the `content` attribute specifies the requested HTTP response header.

    If the `<meta>` tag contains a `name` attribute, the rewriting depends on the value of the attribute. Depending upon the value of the `name` attribute, the `content` attribute is replaced by one of the following options:

    -   **`description`**

        The description of the portal page in the currently requested location.

    -   **`csrf_param`**

        The name of the FORM parameter for CSRF protection.

    -   **`csrf_token`**

        The CSRF token for the current request.

    -   **`generator`**

        The name or version of the HCL portal server that is hosting the page.


