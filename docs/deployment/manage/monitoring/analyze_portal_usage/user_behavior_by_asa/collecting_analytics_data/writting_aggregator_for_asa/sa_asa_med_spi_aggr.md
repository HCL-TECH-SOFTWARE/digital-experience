# Guidelines for implementing an aggregator

When you implement an aggregator by using the Active Site Analytics Mediator SPI, the following guidelines can be helpful.

1.  Implement the function that parses the DOM to collect and format all Active Site Analytics-specific data.
2.  Subscribe for the DOM notifications. Register the function that you implemented in the previous step with the object `SiteAnalyticsMediator`.
3.  Implement the logic that sends the collected data to the external analytics service.

When performing these steps, apply the following considerations:

1.  Implement the function that parses the DOM to collect and format all Active Site Analytics-specific data.
    -   The implementation for collecting the data greatly depends on the themes, skins, and all the other components that might produce analytics-specific microformats. So, there is a dependency between the theme and its skins on the one hand and the aggregator.
    -   The aggregator implementation can affect the performance, as it increases the page rendering time in the browser. To mitigate this time increase, take care that the DOM processing required to collect the data is implemented efficiently. To achieve a good performance, you can use implementation details of your themes and skins. For example, you can use HTML identifiers in the theme markup to isolate the nodes that contain the Active Site Analytics-specific data into a DOM subtree that your aggregator can access efficiently. In any case, avoid traversing the entire DOM.

2.  Subscribe for the DOM notifications. Register the function that you implemented in the previous step with the object `SiteAnalyticsMediator`.
    -   It is only during this registration step that you directly invoke the Active Site Analytics Mediator SPI. Register your function with the `SiteAnalyticsMediator` before the browser sends the onload event.

3.  Implement the logic that sends the collected data to the external analytics service.
    -   To have your data analyzed, you send them to an external analytics service. This step is separated from step 1, as the aggregator cannot make assumptions as to how often it is notified about DOM changes. In a Web 2.0 portal environment with many Ajax components, multiple notifications per portal page or even per portlet interaction can occur. Therefore, this step requires a deep understanding of the analytics service. Even the contract with your analytics service provider can influence when and how frequently you want to send the collected data to the analytics service.
    -   If it does not matter how frequently data is transmitted to the analytics service, you can combine steps 1 and 3. For example, you can send the data directly to the analytics service after or even during the DOM parsing process. If the transmission frequency is relevant, store the data in a buffer, for example a JSON object or a cookie, during the DOM parsing process in step 1. To trigger sending the buffer contents to the analytics service, you can either use an external event or a specific data change. The trigger can be based on a time interval, for example a JavaScript timeout. You can also use the `beforeunload` event that the browser fires whenever the entire browser page is refreshed, or when a browser window or browser tab is closed.
    -   You have several options for how to send the collected data to the external analytics service. A widely spread method is to use a so-called tracking image. In this case, the aggregator adds an HTML image element to the DOM, which is hidden via CSS. The image source URL that points to the external analytics service is used to transport the collected data. After adding the image element to the DOM, the browser initiates an HTTP GET request to load the tracking image. As an alternative, you can also use an asynchronous `XmlHttpRequest` \(XHR\) to send the data to the external analytics service. This method is useful if you want to use HTTP POST requests to submit a large amount of data.

The following list gives a summary of the guidelines:

1.  Register your handler before the page finishes loading, that is, before the browser sends the onload event.
2.  Do not make assumptions about the frequency by which your aggregator gets notified about DOM changes. For a single page, multiple notifications can occur.
3.  Use separate steps for collecting and formatting the data, and for submitting the data to the external analytics server.
4.  The processing that is done by your aggregator affects the page rendering time in the browser.
5.  To ensure a better performance, use theme and skin implementation details. For example, use HTML identifiers for efficient DOM node lookups if available. Avoid traversing the entire DOM.
6.  Carefully decide when and how often you want to send the collected data to the analytics service. This decision might depend on your analytics service provider.
7.  Use an asynchronous way to send the collected data to the analytics service, for example a tracking image or an asynchronous XHR.
8.  You can use a JavaScript framework to implement your aggregator.

For code samples see *Aggregator patterns and samples.*


???+ info "Related information"
    - [Aggregator patterns and samples](sa_asa_aggr_xmp.md)

