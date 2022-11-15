# Importing in target

Import the base release and remaining portal artifacts on the target. This process includes emptying the portal before you import the source pages, portlets, and other artifacts.

1.  Log in to the **RH Linux Server** where the target HCL Portal is located.

2.  Open **RH Command Line Terminal**. Right-click the desktop and select **Open Terminal**.

3.  Enter the following command: ulimit -n 24000.

4.  Start HCL Portal on the target environment. For the stand-alone portal configuration, use the following command /opt/IBM/WebSphere/wp\_profile/bin/startServer.sh HCL Portal and HCL Web Content Manager.

5.  Go to the target portal ConfigEngine directory: cd /opt/IBM/WebSphere/wp\_profile/ConfigEngine.

6.  Empty portal on the target with the following command ./ConfigEngine.sh empty-portal.

    The process can take about 10 minutes to complete.

7.  Complete the cleanup process on the target by running the following sample:

    /opt/IBM/WebSphere/wp\_profile/PortalServer/bin/xmlaccess.sh -user wpsadmin -password wpsadmin -in /opt/IBM/WebSphere/PortalServer/doc/xml-samples/Task.xml -out/tmp/task\_result.xml -url http://cntserv\_exmp.com:10039/wps/config

8.  Confirm completion of Task.xml in `/opt/IBM/WebSphere/wp_profile/log/HCL Portal and HCL Web Content Manager/SystemOut.log`:

    ```
    [10/9/15 11:05:07:777 EDT] 000000d9 SchedulerTask I com.ibm.wps.datastore.ejb.cleanup.SchedulerTaskNotificationSinkBean handleEvent() EJPDE0005I: Task WPS_RUN_ONCE_TASK_com.ibm.portal.datastore.task.ResourceCleanup with ID 254 was started.
     [10/9/15 11:05:07:823 EDT] 000000d9 SchedulerTask I com.ibm.wps.datastore.ejb.cleanup.SchedulerTaskNotificationSinkBean handleEvent() EJPDE0007I: Task WPS_RUN_ONCE_TASK_com.ibm.portal.datastore.task.ResourceCleanup with ID 254 has finished. 
    [10/9/15 11:05:07:827 EDT] 000000d9 SchedulerTask I com.ibm.wps.datastore.ejb.cleanup.SchedulerTaskNotificationSinkBean handleEvent() EJPDE0006I: RUN ONCE Task WPS_RUN_ONCE_TASK_com.ibm.portal.datastore.task.ResourceCleanup with ID 254 has completed.
    ```

9.  Copy /opt/IBM/WebSphere/wp\_profile/PortalServer/deployed/archive from source to target.

    **Note:** It is important to run this step as documented and not run before you run the clean-up tasks.

10. Go to the target portal profile bin directory: cd /opt/IBM/WebSphere/wp\_profile/PortalServer/bin

11. Use XMLAccess to import base Export.XML into the base virtual Portal of the target system:

    ```
    ./xmlaccess.sh -user wpsadmin -passowrd wpsadmin -in /tmp/baseExport.xml -out 
    /tmp/baseExport_result.xml -url http://cntserv_exmp.com:10039/wps/config
    ```

12. Confirm successful run in results:

    ```
    ./xmlaccess.sh  -user wpsadmin -password wpsadmin -in /tmp/baseExport.xml -out
    /tmp/baseExport_result.xml  -url http://cntserv_exmp.com:10039/wps/config
    
    Licensed  Materials - Property of IBM,5724-E76, 5724-E77, 5724-I29 and  5655-Y16, (C) 
    Copyright HCL Technologies Limited 2001, 2014, 2019
    -  Use, duplication or disclosure restricted by GSA ADP Schedule  Contract with IBM Corp.
    
    EJPXB0006I:  Connecting to URL http://cntserv_exmp.com:10039/wps/config
    
    EJPXB0004I:  Writing output file /tmp/baseExport_result.xml
    
    EJPXB0002I:  Reading input file /tmp/baseExport.xml
    
    <!--  HCL Digital Experience/8.5 build 20150721-0001 exported on Fri Oct 09  13:38:22 EDT 2015
     from cntserv_exmp.com/127.0.0.1  virtual portal: none (default virtual portal) -->
    
    EJPXB0020I:  The request was processed successfully on the server.
    ```

13. Go to the portal profile ConfigEngine directory cd /opt/IBM/WebSphere/wp\_profile/ConfigEngine.

14. Update Web Content Manager with the Config Engine task: `./ConfigEngine.sh update-wcm`.

15. Copy any files from the source that are needed in the file system like JAR files, and config files such as log4j xml file to the target system.

16. Copy and deploy all custom ear and war files from source to target, including pre-deployed portlets and themes.

    **Note:** The general assumption is that your theme is an ear file. If you have your theme in WebDAV store, use the config task to export and import the custom theme.

    For example, BlueCo theme and skin were installed on the source portal. Therefore, BlueCo theme and skin are installed in the target portal through the WebSphere® Application Server Administration Console.

    1.  Log in the WebSphere Application Server Integrated Solutions Console.

    2.  Follow the path **Applications** \> **New Application** \> **New Enterprise Application**.

    3.  Enter the path for custom enterprise application.

        For example, Blueco Theme.

    4.  Choose the installation option.

        For example, Fast Path.

    5.  Select other installation options that are needed.

    6.  Map enterprise application to servers, including web servers.

    7.  Enter the context root, with the same value as the source if you are trying to mirror the source environment.

    8.  Preview Summary and click **Finish** to complete the installation.

    9.  As expected, the enterprise applications do not start, but can be started manually or with the next portal restart.

17. If you are using a web server, regenerate and propagate the web server plug-in config.

18. Restart the portal server by using the following commands:

    1.  Stop the server with the `/opt/IBM/WebSphere/wp_profile/bin/stopServer.sh HCL Portal and HCL Web Content Manager` command.

    2.  Then, start the server with the `/opt/IBM/WebSphere/wp_profile/bin/startServer.sh HCL Portal and HCL Web Content Manager` command.



