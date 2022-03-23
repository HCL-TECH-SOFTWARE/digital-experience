# Enabling module tracing 

Enable tracing to debug your module information to improve performance through trace string or with cookies.

1.  Enable tracing through trace string.

    1.  To debug a module or theme, enable portal tracing with the following trace string.

        ```
        com.ibm.wps.resourceaggregator.CombinerDataSource.RemoteDebug=all
        ```

        This string loads the modules by using separate links and script tags, isolating each one independently. If the module definition defines a debug version, it also loads debug versions of each contribution. Typically, the debug version is an uncompressed version of the <script\> tag that contains the same data as the normal version.

        Both using separate links and by using uncompressed <script\> tags makes it easier to debug a running HCL Portal environment from the browser.

2.  Enable tracing with cookies.

    1.  Open WebSphere® Integrated Solutions Console.

    2.  Select **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Select the WP ConfigService resource environment provider.

    4.  Click **custom properties**.

    5.  Change the resourceaggregation.client.debug.mode.allowed entry to true.

    6.  Save the changes.

    7.  Restart the HCL Portal server.


When a user sets a cookie that is named com.ibm.portal.resourceaggregator.client.debug.mode to true, debug versions of module contributions are loaded if they are defined. Modules are loaded without using separate links and script tags. All resources are downloaded as a combined unit in that case.

**Parent topic:**[Logging and tracing client side rendering ](../dev-portlet/csa2t_trbl.md)

