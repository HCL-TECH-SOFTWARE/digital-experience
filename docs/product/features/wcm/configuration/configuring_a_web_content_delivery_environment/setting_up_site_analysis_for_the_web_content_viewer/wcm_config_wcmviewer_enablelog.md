# Enabling the Web Content Viewer logger

To take advantage of the site analysis logging available for the Web Content Viewer, you need to configure the WP SiteAnalyzerLogService service and activate the SiteAnalyzerJSRPortletLogger service.

Before you activate the `SiteAnalyzerJSRPortletLogger` logger, you must ensure that site analysis is enabled for the portal in general, as described in [Logging and analyzing server side site data](../admin-system/adsaconf.md).

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP SiteAnalyzerLogService**.

4.  Activate the `SiteAnalyzerJSRPortletLogger` logger through the **WP SiteAnalyzerLogService** by defining the parameter `SiteAnalyzerJSRPortletLogger.isLogging` and by setting the parameter value to `true`.

5.  Save your changes, and restart the portal.


**Parent topic:**[Setting up site analysis for the Web Content Viewer](../wcm/wcm_config_wcmviewer_sitean.md)

