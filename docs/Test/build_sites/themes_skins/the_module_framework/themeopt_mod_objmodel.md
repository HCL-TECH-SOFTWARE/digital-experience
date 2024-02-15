# Basic artifacts and their relation

The theme modularization framework foresees the following major artifacts and relations to one another.

The relations of the major artifacts are depicted in the following figure:

![Major artifact relations model](../../../images/themeopt-mod-objmod2.jpg)

A theme is assigned to a portal page. Dynamic content spots are used to write all of the data for modules that have contributions for a certain type. The module framework provides the dynamic content spots co:config and co:head. The theme must provide one or more profiles, which declares the set of modules that are used for that profile. One of these profiles is used by each page to which the theme is applied. The profile that is used for the page is the default profile that the theme developer or administrator defines for the theme by setting the theme metadata resourceaggregation.profile.

The Page administrator can explicitly overwrite the default by setting the page metadata resourceaggregation.profile.

The modules available in the system can either be registered through the extension point com.ibm.portal.resourceaggregator.module in a plugin.xml file, or using a JSON file that is located within a theme in the folder <theme-root\>/contributions. This path is not customizable.

For example, the head spot, `<link rel="dynamic-content" href="co:head"></link>`, and aggregates all contributions of type head.

You choose where to place dynamic content spots if the following constraints are fulfilled:

-   The head spot must be located inside the `<head>` element in the page markup. The `<head>` element must be placed before the `<body>` element in the page markup.
-   The config spot must be located inside the `<body>` element in the page markup. Make the config spot the last element before the closing tag.

Contributions to the head extension point are best used for data that must be loaded at the beginning of the page. These contributions include producing markup that is only valid inside the `<head>` element or providing core functions that must be available to other inline code within the page body. For example, `<link>` elements can show only inside the head element, therefore all CSS must be added to the head contribution. Also, any inline JavaScript that uses a utility function to attach an event handler to the onload event, such as dojo.addOnLoad, depends on defining that function earlier in the page markup.

Place the config spot at the end of the page body element. This placement allows the bulk of the JavaScript resources and other enablement code to be written to the markup after the page layout and content area. The perceived responsiveness of the server increases by showing the page content while the browser is still downloading resources that are defined after the content area. However, there is no guarantee that the config spot is placed there, and it is valid for a theme designer to place the config spot inside the `<head>` element when it fulfills the first constraint.

Because the location of the config spot can vary, any code that displays inside the page content does not assume that the config spot was already generated. The JavaScript code in the content area that depends on other JavaScript modules that are loaded by the config spot are deferred until the onload event is triggered, which guarantees that the code inside a portlet, for example, always works regardless of the position of the config spot. An example is portlet JavaScript that creates client-side widgets on page load. Widget modules that themselves can be loaded by the config spot while the code that creates and uses them is run on load.

Modules can declare dependencies on prerequisite modules. Additionally, they can declare their capabilities, which enable portlets and other code on the page to query the availability of a certain capability.

Portlets can declare a dependency on capabilities in a way that automatically downloads all resources of a module. You do not need to add this module to the profile, but you must set this behavior in your theme.


