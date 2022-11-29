# Content-Security-Policy header

The Content-Security-Policy header allows an allowlist of trusted sources to be created that instructs the browser to only execute or render resources included in the list.

**Note:** The header is defined for each page and will be included on every response sent to the browser.

For example:

```
Content-Security-Policy: script-src 'self' https://apis.google.com
```

The `Content-Security-Policy` header instructs the browser to allow resources from this site or apis.google.com. It also throws an error, like the one below, if it tries to load script from any other source.

![Content-Security-Policy header](/digital-experience/images/csp-browser-error.png)

Below are some of the resource directives which can be included on the `Content-Security-Policy` header:

-   **'default-src'**

    Serves as a fallback for other directives.


-   **'script-src'**

    Controls script-related privileges.


-   **'img-src'**

    Defines the origins from which images can be loaded.

-   **'style-src'**

    Controls style-related privileges.

-   **'report-uri'**

    Specifies a URL where a browser will send reports when a content security policy is violated.

    **Note:** There are several directives, but this list represents the ones implemented in DX.


The source list accepts four keywords:

-   **‘none’**

    Matches nothing.

-   **‘self’**

    Matches the current origin, but not subdomains.

-   **‘unsafe-inline’**

    Allows inline Javascript and CSS.

-   **‘unsafe-eval’**

    Allows text-to-Javascript mechanisms like eval.

    For example:

    ```
    Content-Security-Policy: script-src 'self' https://apis.google.com
    ```



