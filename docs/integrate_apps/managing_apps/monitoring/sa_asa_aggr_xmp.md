# Aggregator patterns and samples

The aggregator patterns and samples section provides common aggregator patterns and samples that you might want to adopt to implement your own aggregator.

## JavaScript module pattern template

You can use the following JavaScript module pattern as a general template:

```
/**
 * Check if the aggregator module is already defined.
 */
if (typeof(ibm_analytics_MyAggregator) === "undefined") {

/**
 * Function to construct the aggregator
 */
ibm_analytics_MyAggregator = function(/* Arguments needed internally */) {
  
  /**
   * The aggregator instance
   */
  var aggregator = {};

  // define your internal variables
  var a = ...;
  var b = ...;
  // ...
  
  /**
   * Public function which parses the given DOM nodes to detect
   * the microformats the aggregator is interested in.
   */
  aggregator.parse = function(/*DOMNode[]*/ nodes, /*Function?*/ callback) {
    // check if a specific part of the DOM should be parsed
    if (nodes && nodes.length > 0) {
      /*
       * Page element notification
       */
      // invoke your internal parsing code here
      // ...
    } else {
      /*
       * Page notification
       */
      // invoke your internal parsing code here
      // ...
    }
    // invoke the callback (if any)
    if (callback) {
      callback();
    }
  };

  /**
   * Public function to submit the collected data to the
   * analytics service.
   */
  aggregator.submit = function() {
    // send the collected data off to the external analytics service
    // use your preferred technique here (tracking image, XHR etc.)
    // ...
  };
  
  // define your internal functions
  var parseNode = function(/*DOMNode*/ node) {
    // ...
  };

  // ...

  // return the aggregator
  return aggregator;
  
};

};
```

By using this pattern, the aggregator module exports two functions:

1.  The `parse()` function is responsible for handling the DOM notifications that are sent by the SiteAnalyticsMediator. It complies with the function signature that is defined by the Active Site Analytics Mediator SPI as discussed in the topic about *The Active Site Analytics Mediator SPI*. Use this function to parse the DOM to find the analytics-specific microformats that interest you. Typically, the parse function stores the found microformats in an internal bucket, for example a JSON object, that is transmitted to the external analytics service later on. In the JavaScript module pattern template, you can also see how the aggregator can distinguish between page notifications and page element notifications \(a page element can either be a portlet or an Ajax component\).
2.  The `submit()` function is responsible for sending the collected data to the external analytics service. Use your preferred technique to initiate an HTTP request, which carries the data to the analytics service. For performance reasons, communicate the data asynchronously, for example by a tracking image or an asynchronous XmlHTTPRequest.

**Note:** The registration aspect and the logic that triggers the data transmission are not part of the aggregator module. These aspects need to be handled outside of the aggregator module.

## Registering with the Site Analytics Mediator

Register your `parse()` function with the Site Analytics Mediator immediately after the definition of the aggregator module:

```
// instantiate and initialize the aggregator
var ibm_analytics_aggregator = new ibm_analytics_MyAggregator(/* arguments as needed...*/);
// register the parse function of the aggregator with the mediator
com.ibm.portal.analytics.SiteAnalyticsMediator.register(function() {
  ibm_analytics_aggregator.parse.apply(ibm_analytics_aggregator, arguments);
});
```

## Submitting the analytics data

You can submit the data in various ways. You can submit the data internally by using the aggregator. For example, you can submit data upon receiving a notification or based on the internal state of the aggregator. Or you can trigger data submission from outside based on an external event. This decision can depend on the business model of your external analytics service provider. For more information, see *Guidelines for implementing an aggregator*.

To trigger the data submission that is based on an external event, you can either use the DOM `beforeunload` event of the browser or a time-based solution. The time-based solution sends the data periodically. You can also combine the two approaches.

To use the DOM `beforeunload` event of the browser, subscribe to the `beforeunload` event by using the `submit()` function of your aggregator as shown by the following sample:

```
// instantiate and initialize the aggregator
var ibm_analytics_aggregator = new ibm_analytics_MyAggregator(/* arguments...*/);
	
// register the parse function of the aggregator with the mediator
com.ibm.portal.analytics.SiteAnalyticsMediator.register(function() {
  ibm_analytics_aggregator.parse.apply(ibm_analytics_aggregator, arguments);
});
 
// callback function to submit the collected data to the external analytics service
var ibm_analytics_MyAggregator_submit = function() {
  ibm_analytics_aggregator.submit.apply(ibm_analytics_aggregator, arguments);
}
 
// register the callback functions
if (window.addEventListener) {
  // W3C
  window.addEventListener("beforeunload", ibm_analytics_MyAggregator_submit, false);
} else if (window.attachEvent) {
  // Microsoft
  window.attachEvent("onbeforeunload", ibm_analytics_MyAggregator_submit);
}
```

If you use client-side aggregation rendering for your portal pages, full page refreshes and therefore DOM unload events do not occur often. In this case and with this approach, the aggregator collects data for a long time without sending the collected data to the external analytics service. To avoid this behavior, you can combine the unload approach with a time-based approach. For example, you can submit the collected data periodically, in addition to sending it off upon receiving a `beforeunload` event. To implement the periodic data submission, use the `setInterval()` JavaScript API that all major browsers provide. In this case, you register the `submit()` function as the interval handler within your onload handler. The following code sample uses a time interval of 30 seconds. This action means that the data is submitted every 30 seconds at the latest if no `beforeunload` event is received.

```
// instantiate and initialize the aggregator
var ibm_analytics_aggregator = new ibm_analytics_MyAggregator(/* arguments...*/);

// register the parse function of the aggregator with the mediator
com.ibm.portal.analytics.SiteAnalyticsMediator.register(function() {
  ibm_analytics_aggregator.parse.apply(ibm_analytics_aggregator, arguments);
});

// callback function to initialize and register the aggregator
var ibm_analytics_MyAggregator_init = function() {
  // register the interval handler
  setInterval(ibm_analytics_MyAggregator_submit, 30000);
};

// callback function to submit the collected data to the external analytics service
var ibm_analytics_MyAggregator_submit = function() {
  ibm_analytics_aggregator.submit.apply(ibm_analytics_aggregator, arguments);
}

// register the callback functions
if (window.addEventListener) {
  // W3C
  window.addEventListener("load", ibm_analytics_MyAggregator_init, false);
  window.addEventListener("beforeunload", ibm_analytics_MyAggregator_submit, false);
} else if (window.attachEvent) {
  // Microsoft
  window.attachEvent("onload", ibm_analytics_MyAggregator_init);
  window.attachEvent("onbeforeunload", ibm_analytics_MyAggregator_submit);
}
```

If you have Ajax applications on your portal sites that change markup dynamically by using JavaScript, you need to notify the SiteAnalyitcsMediator framework manually. You can notify by calling the `notify()` function that is provided by the SiteAnalyticsMediator object.

```
// determine the root nodes of the DOM subtrees that have changed
var nodes = ...;  
com.ibm.portal.analytics.SiteAnalyticsMediator.notify(nodes, callback);
```

## Aggregator samples

HCL Portal provides several sample aggregators. They are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/js-samples` directory of your portal installation. Although the provided sample code does not require any special JavaScript library, you might want to use the JavaScript framework of your choice. With the JavaScript framework, you can reduce the size and complexity of your aggregator implementations. And the JavaScript framework might support you in achieving a good performance. To explain the concepts that are discussed in the previous topics, the sample aggregators are simplified with regards to the data that is evaluated. You can install each of the provided sample aggregators on HCL Portal as described in the topic about *Adding an Active Site Analytics aggregator to a portal page*. HCL Portal provides the following sample aggregators:

-   **CoremetricsAggregator.js**

    This sample aggregator collects the analytics data and sends it to the IBM® Coremetrics® Web Analytics service. It uses a Coremetrics® specific JavaScript API to submit the data. You need to configure this API as an aggregator dependency. The target URL is `http://libs.coremetrics.com/eluminate.js`. Before you can use the aggregator, you also need to edit the aggregator code to specify your Coremetrics® client ID, cookie domain, and data collection domain.

-   **SampleAggregator.js**

    This aggregator is a generic aggregator. It collects all the analytics data and sends it to the URL `http://example.org` by using a tracking image. The collected data is appended to the image URL as a query string. The names of the URL parameters correspond with the microformat names as defined in *Supported aggregator tags*.


**Parent topic:**[Writing an aggregator for Active Site Analytics](../admin-system/sa_asa_cust_script.md)

**Related information**  


[Guidelines for implementing an aggregator](../admin-system/sa_asa_med_spi_aggr.md)

[Adding an Active Site Analytics aggregator to a portal page](../admin-system/sa_asa_add_aggr_2_page.md)

[Supported aggregator tags](../admin-system/sa_asa_aggr_tags.md)

