# Response rendering for themes

To decrease the response time of your portal, a template parser resolves which modules are needed and collects all of the modules that are enabled by the current profile. Parts of the content are parsed and displayed as soon as possible.

When the template parser encounters a dynamic content spot that starts with the prefix `dyn-cs:`, it resolves it by locating and starting the Dynamic Content Spot Mapping DataSource. If the mapping definition from a logical name to a URI includes module information, the spot is rendered only if the module is defined for the current profile.

When the template parser encounters a dynamic content spot for a particular combiner, the combiner service decodes the URI and collects all of the modules that are enabled by the current profile. After all of the defined modules are collected, any modules are added that the defined modules require and that are not already included in the list.

The modules are then processed in order, and contributions to each type are aggregated into sets. All contributions of a particular type at the current extension point are collected into groups by their type.

**Important:** It is the responsibility of the contributor to ensure that the content of the contribution does not include malicious code. For example, config values that are read by a data source must be escaped before serializing it.

Responses are rendered in this order:

1.  CSS
    -   CSS is only valid in the head extension point.
    -   The framework generates a link element with an `href` attribute whose value is URL that resolves to the combined results of all contributions to CSS at the head extension point.
    -   When debug is enabled, separate link elements are generated for each contribution.
2.  Static JavaScript configuration
    -   The framework writes an external `<script>` tag with a `src` attribute whose value is a URL that resolves to the combined results of all contributions to static JavaScript configuration at the current extension point.
    -   When debug is enabled, separate script elements are generated for each contribution.
3.  Dynamic JavaScript configuration. The framework generates an inline script tag that loads the combined results of all contributions to dynamic JavaScript configuration at the current extension point.
4.  JavaScript code
    -   The framework generates an external script tag that loads the combined results of all contributions to JavaScript code at the current extension point.
    -   When debug is enabled, separate script elements are generated for each contribution.
5.  Markup
    -   The framework directly writes the output from each markup contribution at the current extension point to the output stream.
    -   This framework is intended to be used for markup that always shows in the page when this module is enabled. Use markup for content that is not visual but is semantic.
    -   Do not use portal render request-dependent attributes, because there is no guarantee that those attributes are available in all cases. For example, when used in deferred mode, the render context is not available.

## Updates for Fix Pack 03

If portlets are on the page and have dependencies that are defined through capabilities, the framework gathers all modules for the provided capabilities from all portlets and downloads those resources. Each is gathered with separate requests for better caching performance. You must set this in your theme.

If a module is already downloaded as part of the profile, the system does not download it again as part of the portlet requests. The order of the responses is identical as depicted previously, with the exception that there are potentially two requests per type.

-   **Profile CSS**

    Contains all resources from modules within the profile that contribute CSS. This request is skipped if there is no CSS contribution from any module.

-   **Portlet CSS**

    Contains all resources from modules that are gathered from portlet capabilities that contribute CSS. This request is skipped if there is no CSS contribution from any module.

-   **Profile `Static JavaScript configuration`**

    Contains all resources from modules within the profile that contribute `Static JavaScript configuration`. This request is skipped if there is no `Static JavaScript configuration` contribution from any module.

-   **Portlet `Static JavaScript configuration`**

    Contains all resources from modules that are gathered from portlet capabilities that contribute `Static JavaScript configuration`. This request is skipped if there is no `Static JavaScript configuration`s contribution from any module.

-   **Profile `Dynamic JavaScript configuration`**

    Contains all resources from modules within the profile that contribute `Dynamic JavaScript configuration`. This type is written inline into the page and doesn't generate an extra request.

-   **Portlet `Dynamic JavaScript configuration`**

    Contains all resources from modules that are gathered from portlet capabilities that contribute `Dynamic JavaScript configuration`. This type is written inline into the page and doesn't generate an extra request.

-   **Profile JavaScript**

    Contains all resources from modules within the profile that contribute JavaScript. This request is skipped if there is no JavaScript contribution from any module.

-   **Portlet JavaScript**

    Contains all resources from modules that are gathered from portlet capabilities that contribute JavaScript. This request is skipped if there is no JavaScript contribution from any module.

-   **Profile Markup**

    Contains all resources from modules within the profile that contribute Markup. This request is skipped if there is no Markup contribution from any module.

-   **Portlet Markup**

    Contains all resources from modules that are gathered from portlet capabilities that contribute Markup. This request is skipped if there is no Markup contribution from any module.



