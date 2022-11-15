# Deferred and non-deferred modules

The module framework allows a profile to specify whether to defer a particular module. By default, a module is loaded when the initial page loads, but modules that are specified as deferred modules are loaded after the page loads.

Non-deferred modules are enabled whenever a request for a page is made to the portal servlet that results in a full page refresh. Use a client-side JavaScript module to load resources that are associated with deferred modules on demand. For example, load deferred modules when entering edit mode for a page. Resources that are not required in view mode can be lazy loaded when the page mode is changed to edit. For more information, see *i$ JavaScript API specification*.

**Note:** If you enter edit mode while using the deferred profile available out of box, the following error displays when using a JavaScript console: `dojo.back.init() must be called before the DOM has loaded. If using xdomain loading or djConfig.debugAtAllCosts, include dojo.back in a build layer.` This error is thrown by Dojo because the dojo.back package is loaded in a deferred way. This code path is used only by older browsers, which are no longer supported. This JavaScript error has no affect on function.

If a non-deferred module requires a deferred module, the server-side combiner framework promotes the deferred module to be non-deferred. The promoted module is then loaded during the initial page rendering process. The module is not deferred, and all of its contributions to each extension point are displayed in view mode. Also, the contributions are not included when any remaining deferred modules are loaded later.

Because deferred modules are loaded distinctly after a page load, the types of resources that can be deferred are necessarily a subset of what can be loaded. CSS, JavaScript code, and markup can be deferred. Therefore, the following rules define when contributions to various places are loaded for deferred modules.

-   CSS contributions to the head are deferred and then inserted into the `<head>` element on demand by using the `<link>` element.
-   JavaScript configuration, both static and dynamic for both head and config spots, is deferred and loaded as JavaScript.
-   Static JavaScript code contributions to the head and config spots are deferred and loaded as JavaScript.
-   Markup contributions are lazy loaded by requesting the markup data for all deferred modules that contribute to the config or head markup section. This data is inserted into the page at the appropriate location that is based on where the spot is defined by the theme template.

**Note:** Because markup contributions can be lazy loaded when a module is deferred, certain limitations apply to the markup inserted dynamically using JavaScript. Script elements, for example, do not run when inserted into the markup as an HTML string. Modules that can be deferred must not generate script elements in their markup contribution to the config spot, unless they are used for another semantic purpose. For example, setting the type attribute to some value unknown to the client browser. The framework does not check for or handle any markup that results in side effects or unintended behavior. It is up to the module developer to handle any unintended behavior.

Do not use portal render request-dependent attributes because those attributes are not available in all cases. For example, when used in deferred mode, the render context is not available.


