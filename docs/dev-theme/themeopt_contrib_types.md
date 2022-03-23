# Contribution types 

Modules can contribute different types of data to the extension points within the page.

By specifying the type of data, a module can optimize how that data is loaded on the page. For instance, all of the JavaScript contributions to the `co:config` spot from multiple modules can be loaded by a single request to the server. That request generates a single response that contains the data for each contribution.

## Contribution type: head

-   **CSS**

    Contributions of this type must be valid Cascading Style Sheet \(CSS\) syntax and are always placed inside the `<head>` element. They are only valid in the `co:head` extension point.

    Use generated CSS that uses relative URLs when you reference other resources like images or other CSS documents. By using relative URLs, resources can be resolved regardless of the context root in which they are placed.

-   **JavaScript code**

    Contributions that add static JavaScript code are added it to this type so that it is properly cached and potentially optimized by the framework.

    Contributions of this type cannot vary based on the client to further optimize the code. For example, do not use a data source that generates different data for different browsers to eliminate code paths that branch based on the browser type or version. Instead, the data source must generate the same data that works across all supported browsers. Users can then download and save the combined output as a static resource in a separate domain.

    **Important:** It is the responsibility of the contributor to ensure that the content of the contribution does not include malicious code.

-   **Static JavaScript configuration**

    Contributions to this type must be valid JavaScript code, publicly cacheable, and have no dependencies on the current user, navigation state, or runtime context.

    It is common for static JavaScript code to use JavaScript variables that are defined in the global scope to have access to context information that must be provided outside the static script code.

    Some of this configuration might be static across pages and can change only when the server is restarted, such as values that are retrieved from Resource Environment Provider custom properties. This data can be loaded as an external script so that it can be cached across users and pages.

    Because it is possible to change through configuration changes, this configuration typically has relatively short cache expiration times so that it is still publicly cacheable but can still expire to pick up potential configuration changes.

    The link to the URL that creates the aggregated content is part of a script tag.

    **Important:** It is the responsibility of the contributor to ensure that the content of the contribution does not include malicious code. For example, configuration values that are read by a data source must be escaped before serializing the data.

-   **Dynamic JavaScript configuration**

    Some configuration data that is used by JavaScript code is dynamic and susceptible to changing across pages or users. This configuration includes data, such as the current locale or URLs that are generated dynamically by the server.

    Contributions to this type must be valid JavaScript code and are written to the markup inside an inline script element so that they are never cached.

    **Important:** It is the responsibility of the contributor to ensure that the content of the contribution does not include malicious code. For example, configuration values that are read by a data source must be escaped before serializing the data.

-   **Markup**

    Contributions to this type must be valid HTML in context of the extension point where they contribute to. For instance, contributions to the `co:head` extension point can include markup that is only valid for the <head\> section of the page. Alternatively, contributions to the `co:config` extension point can include markup that is only valid inside the <body\> tag.

    This type is best used for contributions whose markup is not primarily visual but rather semantic, such as resource loading.

    Modules that have visual markup must be documented and provided through a POC URI dynamic content spot. You can place this contribution in a specific place within the theme template relative to the design of the theme. If these unique location-important markup contributions are intended to be configurable or modified by a user, the dynamic content spot mapping data source might be used to map the POC URI to an alternative URI. Also, you can associate a dynamic content spot with a module ID so that the rendering of the data can be influenced by the profile that is used for the page.

    It is best not to use portal render request-dependent attributes because those attributes sometimes are not available in all cases. For example, when used in deferred mode, the render context is not available.


## Contribution type: `config`

-   JavaScript code
-   Static JavaScript configuration
-   Dynamic JavaScript configuration
-   Markup

See the head section for details about each of these subcontributions.

## Contribution type: `dyn-cs`

Contributions of this type allow you to define dynamic content spots through modules instead of defining them through Resource Environment Providers. This also allows you to overwrite dynamic content spots for different pages by using different modules on the profiles. The only allowed subcontribution is markup. For more information, see *Dynamic content spots*.

## Contribution type: `menu`

The only allowed subcontribution is JSON. For more information, see *Menu framework*.

## Contribution type: `xslt`

The only allowed subcontribution is `xslt`. You can use `xslt` to gather `xslt` resources along the module hierarchy.

**Parent topic:**[The module framework ](../dev-theme/themeopt_module.md)

**Related information**  


[Simple menu framework ](../dev-theme/themeopt_cust_menu.md)

[Dynamic content spots ](../dev-theme/themeopt_cust_jsp.md)

