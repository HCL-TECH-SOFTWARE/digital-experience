# Linux: Configuring a developer mode environment

Use a developer mode environment to improve startup performance and to configure HCL Digital Experience for development. The developer mode environment is for a development environment only. Please do not use the developer mode environment as your production environment. You can also run the optimize-derby-database task to improve the Derby database performance.

Install HCL Digital Experience.

This task modifies the following components:

-   **JVM**

    The JVM is switched to development mode. This setting is a WebSphere® Application Server specific setting independent of HCL Digital Experience. See the [*Application server setting topic*](https://www.ibm.com/support/knowledgecenter/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/urun_rappsvr.html) for exact changes that are made with this setting. The initial heap size is set to 768 MB to reduce the amount of garbage collection during startup.

-   **Portlets**

    Portlets and web applications are activated on first access and not at the startup. However, some of the portlets and applications are required at startup. Create a white list, which contains the list of applications, that are required at startup.

    **Note:** To add applications to the white list, modify the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/StartupPerformance/wp.base\_TargetMapExclList.properties[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\PortalServer\\config\\StartupPerformance\\wp.base\_TargetMapExclList.properties file. Add a line such as App\_name, where App\_name is the name of the application. Log on to the WebSphere® Integrated Solutions Console and go to **Applications** \> **Application Types** \> **WebSphere enterprise applications** to get a list of available applications.


1.  Open a command prompt.

2.  Stop the HCL Portal server. Go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md) for information.

3.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.

4.  Run the ConfigEngine.bat optimize-derby-database./ConfigEngine.sh optimize-derby-databaseConfigEngine.sh optimize-derby-database task to improve the performance of your Derby database.

    **Important:** This task is appropriate only in a demonstration or development environment that is not configured to use Web Content Manager. You can also run the optimize-derby-database task after large data changes in the database.

5.  Start the HCL Portal server.

6.  Run the ConfigEngine.bat enable-develop-mode-startup-performance -DWasPassword=password./ConfigEngine.sh enable-develop-mode-startup-performance -DWasPassword=passwordConfigEngine.sh enable-develop-mode-startup-performance -DWasPassword=password tasks. Then, stop and restart the HCL Portal server to propagate your change.

7.  Prepare the remote web server for your developer mode.


Run the ConfigEngine.bat disable-develop-mode-startup-performance -DWasPassword=password./ConfigEngine.sh disable-develop-mode-startup-performance -DWasPassword=passwordConfigEngine.sh disable-develop-mode-startup-performance -DWasPassword=password task to revert to a production server. Then, stop and restart the HCL Digital Experience server to propagate your change.

**Note:** You can run the disable-develop-mode-startup-performance task for the following scenarios:

-   When you are done developing your portal and portlets.
-   If the development settings are not adequate for a special development situation.
-   When you cannot re-create a problem on the development server.


