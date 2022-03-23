# How to identify and resolve problems with your aggregator 

If your custom aggregator is not working correctly, perform the checks listed here.

1.  Verify that the HTML markup of the portal page contains the microformats that the aggregator expects.
2.  Verify that the tagging method that is used in the themes, skins, and portlets matches the expected behavior of the aggregator. For example, the Page Builder theme shipped with the portal tags all metadata with CSS classes whose names start with an `asa` prefix.
3.  If you use the SiteAnalyticsMediator API and your aggregator is not notified about DOM changes as expected, you can enable client side tracing by using the resource environment provider **WP CommonComponentConfigService**. Set the following two configuration properties:

    ```
    cc.isDebug=true
    cc.traceConfig=["com.ibm.wps.analytics.*"]
    ```

    After you have done this, save your changes and restart the portal server.

4.  To review what occurs in the server side aggregator inclusion code, specify the trace `com.ibm.wps.theme.extensions.*=debug` .

Remember that aggregators are regular JavaScript files. Consequently, you can also use all JavaScript debugging tools and browser developer tools for debugging an aggregator.

**Parent topic:**[Writing an aggregator for Active Site Analytics ](../admin-system/sa_asa_cust_script.md)

