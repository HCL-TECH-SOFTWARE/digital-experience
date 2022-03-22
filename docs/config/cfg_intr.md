# Changing the portal URI after an installation

You can change the default portal Uniform Resource Identifier \(URI\) any time after you install HCL Digital Experience. Some applications have a fixed context root that cannot be changed.

If you are on Combined Cumulative Fix 7 or earlier, go to [CF07 and earlier: Changing the portal URI after an installation](cfg_intr_CF07_earlier.md#).

HCL Digital Experience and Web Services for Remote Portlets are installed with a default URI. You can change this URI after installation to better suit the requirements of your organization.

**Notes:**

-   To change the HCL Digital Experience URI: When you specify the context root, do not specify a value that is the same as a directory that exists in a portlet WAR directory. For example, you set the HCL Digital Experience context root to /images. There is a portlet with the directory structure /myPortlet.ear/myPortlet.war/images. This issue might cause a conflict if the portlet encodes URI references to resources in its own /images directory. In this situation, the portlet would be unable to display images. HCL Digital Experience looks for the image resources according to its own context root path instead of the directory path that is specified by the portlet WAR file.
-   For changing the URI of a WSRP Producer portal: Changing the WSRP Producer context root does not require that you redeploy all portlets. Run the modify-servlet-path configuration task only.

    **Important:** With Version 8, the URI of the context root for the WSRP Producer is `/wps/wsrp`. Before Version 8, this context root was `/wsrp`. If you migrated from an earlier version, you still might have WSRP Consumers that attempt to access the WSRP Producer with the previous context root \(`/wsrp`\). You can correct this issue in one of the following ways:

    -   Modify the context root for the WSRP Producer to `/wsrp`. This change enables the Consumers to access the Producer without requiring further changes to the Consumers.
    -   Update the configuration of the WSRP Consumers to use the new context root \(`/wps/wsrp`\).
-   If you use HCL Web Content Manager Syndication, the Syndicators and Subscribers servers that refer to this Portal instance must be updated with the modified URI. Log on to the HCL Portal syndicating to this instance. Click the **Administration menu** icon. Then, click **Portal Content** \> **Syndicators**. Click the edit icon of the Syndicator you want to edit. Update the URL with the new context root information. Then, log on to the HCL Digital Experience subscribing to this instance. Click the **Administration menu** icon. Then, click **Portal Content** \> **Subscribers**. Click the edit icon of the subscriber you want to edit. Update the URL with the new context root information.

**Cluster note:** If you modify the URI in a clustered environment, complete the steps that are described here on the primary node only, except where specified differently. Also, verify that AutoSynch is set to a frequency of 1 minute.

1.  Complete the following steps to manually modify the HCL Digital Experience context root:

    1.  Stop the HCL Portal server.

    2.  Locate the wkplc.properties and wkplc\_comp.properties files in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory and create backup copies before you change any values.

    3.  Use a text editor to open the wkplc.properties file and enter the appropriate value for your environment in the WpsContextRoot property.

        **Note:** Leaving this value empty might cause system conflict. If you leave this value empty, validate this setting by using the Configuration Wizard or by following the steps that are described in [ConfigEngine validation targets](cfg_validation_targets.md#).

    4.  Save and close the file.

    5.  Use a text editor to open the wkplc\_comp.properties file and enter the appropriate value for your environment in the following properties:

        -   WsrpContextRoot
        -   WpsPersonalizedHome
        -   WpsDefaultHome
        **Attention:** Do not enter the same value for WpsPersonalizedHome and WpsDefaultHome.

        **Note:** Leaving these values empty might cause system conflict. If you leave these values empty, validate this setting by using the Configuration Wizard or by following the steps that are described in [ConfigEngine validation targets](cfg_validation_targets.md#).

    6.  Save and close the file.

    7.  Start the HCL Portal server in a stand-alone environment or the deployment manager and node agent in a clustered environment.

    8.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    9.  Complete the following steps to change the HCL Digital Experience URI:

        1.  To change the context root for the values that you entered in the WpsContextRoot, WsrpContextRoot, WpsPersonalizedHome, and or WpsDefaultHome properties, run the following task:

            -   AIX® HP-UX Linux™ Solaris:./ConfigEngine.sh modify-servlet-path -DPortalAdminPwd=password -DWasPassword=password
            -   Windows™: ConfigEngine.bat modify-servlet-path -DPortalAdminPwd=password -DWasPassword=password
            -   IBM® i: ConfigEngine.sh modify-servlet-path -DPortalAdminPwd=password -DWasPassword=password
            -   z/OS®:./ConfigEngine.sh modify-servlet-path -DPortalAdminPwd=password -DWasPassword=password
            **Note:** Check the output for any error messages before you proceed with the next task. If any of the configuration tasks fail, verify the values in the wkplc.properties and wkplc\_comp.properties files.

        2.  Restart the HCL Portal server.
    10. Run the following task to change the context root for the portlets:

        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh modify-servlet-path-portlets -DPortalAdminPwd=password -DWasPassword=password
        -   Windows: ConfigEngine.bat modify-servlet-path-portlets -DPortalAdminPwd=password -DWasPassword=password
        -   IBM i: ConfigEngine.sh modify-servlet-path-portlets -DPortalAdminPwd=password -DWasPassword=password
        -   z/OS: ./ConfigEngine.sh modify-servlet-path-portlets -DPortalAdminPwd=password -DWasPassword=password
        **Note:** Check the output for any error messages before you proceed with the next task. If any of the configuration tasks fail, verify the values in the wkplc.properties and wkplc\_comp.properties files.

2.  If necessary, start the HCL Portal server in a stand-alone environment or the deployment manager and node agent in a clustered environment.

3.  Complete the following steps if you are using an external web server, such as an HTTP Server:

    1.  Choose one of the following options that are based on your HCL Digital Experience environment:

        |HCL Digital Experience environment|Steps|
        |----------------------------------|-----|
        |Stand-alone configuration|Complete the following steps in a stand-alone configuration:        1.  Copy the following script from the plugin\_root/bin directory of the web server to the `wp\_profile\_root`[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory on your HCL Digital Experience server:

            -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
            -   Windows: configurewebservername.bat
            -   IBM i: configurewebservername.sh
            -   z/OS: ./configurewebservername.sh
where webservername is the web server definition name you defined previously when you configured the HTTP Server for HCL Digital Experience, for example: configurewebserver1.bat.

        2.  Run the following command, from the `wp\_profile\_root`[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory:
            -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
            -   Windows: configurewebservername.bat
            -   IBM i: configurewebservername.sh
            -   z/OS: ./configurewebservername.sh
|
        |Clustered configurationIdle standby configuration|Complete the following steps in a clustered configurationidle standby configuration:        1.  Copy the following script from the plugin\_root/bin directory of the web server to the dmgr\_profile/bin directory on your Deployment Manager server:

            -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
            -   Windows: configurewebservername.bat
            -   IBM i: configurewebservername.sh
            -   z/OS: ./configurewebservername.sh
where webservername is the web server definition name you defined previously when you configured the HTTP Server for HCL Portal, for example: configurewebserver1.bat.

        2.  Run the following command on the Deployment Manager server:
            -   AIX HP-UX Linux Solaris: ./configurewebservername.sh
            -   Windows: configurewebservername.bat
            -   IBM i: configurewebservername.sh
            -   z/OS: ./configurewebservername.sh
|

    2.  Regenerate the web server plug-in in WebSphere® Application Server. If you are using a remote web server, copy the generated plugin-cfg.xml file to the remote server.

        **Important:** Do not complete these steps if you are changing only the WSRP Producer URI.

    3.  Restart the web server.

    4.  Restart the HCL Portal server.

4.  Required if you use HCL Web Content Manager: Complete the following steps to manually change the JSP components in the Web Resources v70 Library:

    **Cluster note:** In a clustered environment, complete these steps on the primary node only.

    1.  Log on to HCL Digital Experience.

    2.  Go to **Applications** \> **Content** \> **Web Content Authoring**.

    3.  Under **Preferences**, select **Edit Shared Settings**.

    4.  Under **Library Selection**, add **Web Resources v70** to the **Selected Libraries** list.

    5.  Click **OK**.

    6.  Under **Item Views**, select **All Items** \> **All** \> **Components** \> **JSP**.

    7.  Select every **JSP component** from the Web Resources v70 library and then click **Edit**.

    8.  Update the **Path** field for every JSP component with the new context root path.

        The JSP path includes two parts, which are separated by a semi-colon. The first part is the context path to the HCL Web Content Manager extensions web application and then the second part is the path to the JSP. Update the path to the web application.

        For example, the other path might be: /wcmextension;/jsp/html/general/UpdateItem.jsp. If you changed the context root to mynewcontext, change the old path to /mynewcontext/wcmextension;/jsp/html/general/UpdateItem.jsp.

5.  Update your custom themes to reference the correct Dojo context root.

    The default Dojo context root in HCL Digital Experience is /wps/portal\_dojo. After you run the modify-servlet-path and modify-servlet-path-portlets tasks, the Dojo context root is changed to include the new value in the WpsContextRoot parameter as the prefix. For instance, if the new WpsContextRoot value is myco, then the new Dojo context root becomes /myco/portal\_dojo. If your theme includes hardcoded references to "/wps/portal\_dojo", update those references to the new context root. If you migrated a custom theme, you might find that it has references to /portal\_dojo without the /wps prefix. Look for these references in both the WAR file and in the WebDAV storage for your theme.

    **Cluster note:** In a clustered environment, complete these steps on the primary node only.

6.  Complete the following steps to edit the context root for every search collection:

    **Attention:** Edit the context root for each existing search collection.

    1.  Log on to HCL Digital Experience as the administrator.

    2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    3.  Click **Search Collections**.

    4.  Click the search collection that you want to update.

        For example: **Default Search Collection**.

    5.  Click the **Edit Content Source** icon for the first content source in the list.

    6.  Edit the URL listed in the **Collect documents link from the URL** with the new context root.

    7.  Click **Save**.

    8.  Edit the URL in each remaining content source and then save your changes.

    9.  Start the HCL Portal crawler content source for each collection:

        -   If the documents are not stored in the search collection but a schedule is defined for the crawler, the crawler automatically runs at the scheduled time. You can also start the crawler manually.
        -   If the documents are already collected, select **Regather documents** to update the documents with the new context root information.
    10. Click **Collections from All Services** in the breadcrumb trail and select the next search collection to modify.

7.  Clustered environment only:Idle standby only: Resynchronize the nodes and restart the cluster.

    |Cluster type|Steps|
    |------------|-----|
    |Static clusterIdle standby|Complete the following steps if you have a static clusteran idle standby environment:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **System Administration** \> **Nodes**, select the primary node from the list, and click **Full Resynchronize**.
    3.  Click **Servers** \> **Clusters**.
    4.  Select the cluster and click **Stop**.
    5.  After the cluster stops, restart it by selecting the cluster. Then, click **Start**.
|
    |Dynamic cluster|Complete the following steps if you have a dynamic cluster:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **System Administration** \> **Nodes**, select the primary node from the list, and click **Full Resynchronize**.
    3.  Click **Servers** \> **Dynamic Clusters**.
    4.  Click the dynamic cluster that you want to stop and restart.
    5.  Click **Dynamic cluster members**.
    6.  Select the member name that you want to stop and then click **Stop**.
    7.  Select the member name that you want to start and then click **Start**.
|


