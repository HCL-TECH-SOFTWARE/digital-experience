# Configuring portal light mode

The default list of these applications whose initialization is deferred until first use \(sometimes called "lazy applications"\), contains administrative and sample portlet applications. To benefit from a higher performance improvement, you can adapt the default list of lazy applications to your needs.

1.  Determine which of the applications that are deployed in your portal you want to configure as lazy applications. To do this procedure, perform the following steps:

    1.  Log on to the WebSphere® Integrated Solutions Console.

    2.  Select **Applications** \> **Application Types** \> **WebSphere Enterprise Applications**.

    3.  Write down the names of the applications that you want to add to the list of lazy applications. Add only applications to the list that are not used by your usual scenarios and that are not required for portal start.

2.  Stop the portal server.

3.  Make sure that portal light mode is disabled.

    To disable portal light mode, change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` and run the configuration task

    ```
    ./ConfigEngine.sh\|bat **dis**able-portal-light-startup-performance -DWasPassword=password
    ```

4.  Change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/StartupPerformance`.

5.  Modify the file `wp.base_ProfileEarAttributesTargetMapInclList.jacl``wp.base_TargetMapInclList.properties`.

    This file contains the list of applications that are not loaded when the portal server is started.

    -   To add an application to this list, type the required application names from the **WebSphere Enterprise Applications** list.
    -   To remove an application, comment out the appropriate application name or delete it from the list.
    **Note:** Make sure that your list of lazy applications does not contain any applications that are either required for portal startup or frequently used. Do not add portlet applications to the list that hold portal services or a plug-in for an Eclipse extension point. You can use the white list in the wp.base\_TargetMapExclList.properties file as a reference. Never disable any of the applications that are listed in that properties file. For more information, see *Configuring developer mode on Windows*.

6.  Save your changes.

7.  Enable portal light mode.

    To do this step, change to the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` and run the configuration task:

    ```
    ./ConfigEngine.sh\|bat **en**able-portal-light-startup-performance -DWasPassword=password
    ```

8.  Restart the portal server.

9.  After this adaptation, verify that your scenarios are still running.


**Limitations:**

1.  If you have portal light mode that is enabled and you stop an application manually, for example by using the WebSphere Integrated Solutions Console or the wsadmin command-line interface, and a user then accesses that application, that applications are restarted.
2.  If you have portal light mode enabled and you use the activation task `ConfigEngine.sh\|bat activate-portlets` to activate all portlets, all portlets are indeed started, even if they are set for lazy load.


