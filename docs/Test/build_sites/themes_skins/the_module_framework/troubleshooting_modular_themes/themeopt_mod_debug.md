# Turning off aggregation and compression in client-side debug mode

Turning on debug mode disables compression and makes modules easier to debug.

In normal operation, the JavaScript and CSS modules in a profile to render a page view are fetched by the ResourceAggregator by building an aggregated request for all the contributions of the same type. It usually includes all the JavaScript, and all the css style definitions. It downloads them together. The JavaScript and CSS is compressed to reduce the size, which makes them difficult to read and debug. By turning on debug mode, the decompressed versions of the resources are loaded if they are defined, and they are loaded individually instead of being aggregated.

!!! note
    If you are using Internet Explorer 7, 8, or 9, the resources continue to be aggregated into one request in debug mode.

To activate debug mode, you can use the Theme Analyzer, or manually enable the feature by turning on a trace string so that debugging is enabled for all users. You can also set a specific cookie so that debugging is only enabled for that user's cookie. In the Theme Analyzer, click **Utilities****Control Center**. In the Remote Debugging section, you can turn debugging on and off for all users or just for an individual client.

1.  To turn on debug mode for all users, all themes, and all pages, system wide, enable tracing with the following trace string.

    ```
    com.ibm.wps.resourceaggregator.CombinerDataSource.RemoteDebug=all
    ```

    You can set the string in the WebSphere® Integrated Solutions Console for the current running instance. Or, you can save it to the persistent server runtime definition. You can also set this trace string with the Enable tracing portlet.


When a user sets a cookie that is named com.ibm.portal.resourceaggregator.client.debug.mode to true, debug versions of module contributions are loaded if they are defined. Modules are loaded without using separate links and script tags. All resources are downloaded as a combined unit in that case.


