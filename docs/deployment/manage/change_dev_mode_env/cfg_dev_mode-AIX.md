# AIX: Configuring a Developer Mode Environment

Use a developer mode environment to improve startup performance and to configure HCL Digital Experience for development. The developer mode environment is for a development environment only. Please do not use the developer mode environment as your production environment. You can also run the optimize-derby-database task to improve the Derby database performance.

Install HCL Digital Experience.

This task modifies the following components:

-   **JVM**

    The JVM is switched to development mode. This setting is a WebSphere® Application Server specific setting independent of HCL Digital Experience. See the [Application server setting topic](https://www.ibm.com/support/knowledgecenter/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/urun_rappsvr.html) for exact changes that are made with this setting. The initial heap size is set to 768 MB to reduce the amount of garbage collection during startup.

-   **Portlets**

    Portlets and web applications are activated on first access and not at the startup. However, some of the portlets and applications are required at startup. Create a white list, which contains the list of applications, that are required at startup.

    !!!note
        To add applications to the white list, modify the /PortalServer/config/StartupPerformance/wp.base_TargetMapExclList.propertieswp_profile_root\\PortalServer\\config\\StartupPerformance\\wp.base_TargetMapExclList.properties file. Add a line such as App_name, where App_name is the name of the application. Log on to the WebSphere® Integrated Solutions Console and go to **Applications > Application Types > WebSphere enterprise applications** to get a list of available applications.

## Enabling developer mode

1.  Open a command prompt.

2.  Stop the HCL Portal server. Go to [Starting and stopping servers, deployment managers, and node agents](../stopstart.md) for information.

3.  Change to the wp_profile_root/ConfigEnginewp_profile_root\\ConfigEngine directory.

4.  Run the `./ConfigEngine.sh optimize-derby-database` task to improve the performance of your Derby database.

    !!!important
        This task is appropriate only in a demonstration or development environment that is not configured to use Web Content Manager. You can also run the optimize-derby-database task after large data changes in the database.

5.  Start the HCL Portal server.

6.  Run the following command to enable developer mode: 

    `./ConfigEngine.sh enable-develop-mode-startup-performance -DWasPassword=password`

7.  Prepare the remote web server for your developer mode.
    
    After ConfigEngine tasks are completed, regenerate the Web-Server plugin in the Integrated solutions console and propagate the new updated plugin to your HTTP-Servers.

## Disabling developer mode

1. To disable developer mode, run the following command:
    
    `./ConfigEngine.sh disable-develop-mode-startup-performance -DWasPassword=password`

    !!!note
        You can disable developer mode in the following scenarios:
        
        -   When you are done developing your portal and portlets   
        -   If the development settings are not adequate for a special development situation
        -   When you cannot re-create a problem on the development server

2. Regenerate the Web-Server plugin in the Integrated solutions console and propagate the new updated plugin to your HTTP-Servers.
    
    
    



