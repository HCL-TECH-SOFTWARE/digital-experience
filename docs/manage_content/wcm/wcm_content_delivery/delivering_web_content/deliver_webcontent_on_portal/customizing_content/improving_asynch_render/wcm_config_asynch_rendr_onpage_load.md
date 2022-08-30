# Using onPageLoad scenarios with asynchronous web content rendering

Separating the page delivery from the web content delivery can increase the page loading time. However, all JavaScript functions that rely on the onPageLoad functions can access only the bootstrapping markup, but not the rendered web content markup. The web content markup is injected into the page as soon as it is ready.

In some scenarios, custom JavaScript code needs to run after the asynchronously loaded markup is ready. For such cases, HCL Digital Experience provides a global object called `wp_wcm_async`. This object becomes available with the `wp_wcm_async` theme modules. To register custom functions to different scenarios, you can use either of the two following two functions:

-   To register a function that is called after all asynchronous items on a page are rendered, use `addOnPageLoad`.
-   To register a function that is called after the asynchronous item that is identified by the key is loaded, use `addOnAsyncSpotLoad`.

To uniquely identify the asynchronous item, use the portlet namespace for the key. Custom theme profiles need to add a `moduleID` dependency to the new asynchronous web content rendering theme module. In a default HCL Portal V 8.5 CF06 installation, the asynchronous rendering theme module is included in the Basic Content and Basic Content with Dojo profiles.


