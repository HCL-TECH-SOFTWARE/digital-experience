# The Active Site Analytics Mediator SPI 

The portal provides a client side JavaScript SPI named Active Site Analytics Mediator SPI. You can use it to implement aggregators. The Active Site Analytics Mediator SPI allows aggregators to register callback functions; the portal framework calls these functions to notify the aggregator about DOM changes that can be relevant for Active Site Analytics.

You can get access to the Active Site Analytics Mediator SPI by using the following global JavaScript variable:

-   **`com.ibm.portal.analytics.SiteAnalyticsMediator`**

    Note that the `SiteAnalyticsMediator` object is not available until the page has finished loading. The `SiteAnalyticsMediator` object defines the following JavaScript functions:

    -   **`register: function(/*Function*/ listener)`**

        Use this function to register a listener function. You can invoke this listener function by using the portal framework in case of DOM changes that might be relevant for the aggregator. Typically, an aggregator registers one function. The register function returns a string identifier that you can use for unregistering the listener later on.

        The provided listener function must conform to the following function signature: `function (/*DOMNode[]?*/ node, /*Function?*/ callback)` The optional argument `DOMNode[]` indicates the areas in the DOM that have changed. If no `DOMNode` array is provided, the aggregator can assume that major parts of the DOM have changed. In this case make the aggregator operate on the global document object. You can use the second argument by the framework to optionally pass in a callback function. That callback function must be called by the aggregator after finishing the DOM parsing process.

    -   **`deregister : function(/*String*/ listenerID)`**

        Use this function to unregister a listener function with the identifier that you have obtained during listener registration.

    -   **`notify : function(/*DOMNode[]?*/ node, /*Function?*/ callback)`**

        Use this function to notify all registered listeners about DOM changes. If you know the specific DOM area that has changed, you can pass in the corresponding DOM nodes. This function is typically called by the portal framework to notify the registered aggregators about DOM changes. It can also be used by AJAX applications that partially update the DOM. If no specific DOM nodes are provided, the aggregator may assume that the notification refers to the portal page. If DOM nodes are provided, the notification refers to portal page elements. In addition to the `DOMNode` array you can optionally provide a callback function.


**Parent topic:**[Writing an aggregator for Active Site Analytics ](../admin-system/sa_asa_cust_script.md)

