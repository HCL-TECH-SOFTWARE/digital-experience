# Implementing Content Security Policy

The following covers the basics of implementing Content Security Policy \(CSP\) support, as well as highlighting scope and features into your HCL Digital Experience sites.

## Scope

The implementation of CSP will be applied to the following out-of-the-box \(OOB\) artifacts:

-   DX default V8.5 theme \(noskin, default profile\)
-   WCM rendering portlet

Customers are free to apply the same patterns to their existing portlets or themes. However, it is recommended that script tag replacement not be implicitly done.

## Pre-Processor Filter

HCL Digital Experience has long provided the ability to filter the incoming and outgoing HTTP request/response markup. This feature is used in the implementation of CSP.

HCL DX 9.5 CF192 and higher releases now include a new OOB pre-processing filter that does the following:

-   Reads page metadata to ensure that CSP is enabled for the current request
-   Intercepts the HTTP response and injects the necessary style and script changes into the markup
-   Sets the Content-Security-Policy header in the response

![Content Security Policy Implementation flow](../images/csp-implementation-flow-2.png)

**Parent topic:**[Content Security Policy](../security/content_security_policy.md)

