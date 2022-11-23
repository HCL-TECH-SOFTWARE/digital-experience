# Combined CF Known Issues

Learn what are the known issues in the HCL Digital Experience Combined Cumulative Fixes.

This page will contain the known issues for the HCL Portal 9.5 Combined Cumulative Fix 17 or later releases.

## Known Issues for HCL Portal 8.5 / 9.0 / 9.5 Combined CF17

-   Problem: As of HCL Portal 8.5 and 9.0 CF16, some features are not visible to users assigned to the Anonymous user role and the All authenticated users role, such as the tree view in Site Manager.
-   Solution: Add the necessary roles for user **Anonymous** and user group **All Authenticated Users** explicitly. For example, to use site manager features within the toolbar, you must assign the **User** role to the **All Authenticated Users** group for the Site Manager portlet.

-   Problem: The HCL Portal 8.5 and 9.0 CF15 `applyCF` task may fail if using the specific combination of WAS 8.5.5.12 on a Windows OS. An error similar to the following may be seen in the failure*.log in the (profile_root)/ConfigEngine/log directory:

    ```
    wp.theme.modules.webapp_cfg.xml:296: java.lang.NoClassDefFoundError: com.ibm.ffdc.config.Formattable
    ```

-   Solution: This is due to an OSGi issue in WAS 8.5.5.12 that will be fixed in their next release. Simply rerunning the `applyCF` task should allow continuation and success of the CF15 update. The following command also remediates the issue:

    ```
    (profile_root)/bin/osgiCfgInit.sh|bat
    ```


-   Problem: A failure, similar to the following, may be seen when running a Rollback on a system configured with WAS 8.5.5.x with JDK8:

    ```
    /opt/IBM/WebSphere/PortalServer/toolbar/wp.toolbar.themes/toolbar85/config/includes/wp.theme.themes.toolbar85_cfg.xml:217: The 
    following error occurred while executing this line:
    /opt/IBM/WebSphere/ConfigEngine/config/includes/utils.xml:2093: EJPXB0019E: Server response indicates an error. For status and 
    details of the XMLAccess error look at file /opt/IBM/WebSphere/wp_profile/ConfigEngine/config/work/xmlaccess.temp.file.657596238.xml.
    ```

-   Solution: This is due to an EJBDeploy incompatibility with JDK8 on WAS 8.5.5.x. The following steps can be used to bypass the issue: After rollback failure, use the following command to switch the JDK used by the profile to 1.7.

    For example:

    ```
    /opt/IBM/WebSphere/wp_profile/bin/managesdk.sh -enableProfileAll -sdkName 1.7_64
    ```

    Then rerun the failing `rollbackCF` command, from the start by removing the rollbackCFprogress directory in example (profile_root)/ConfigEngine/log. After rollback success, the JDK can then be switched back to the original JDK8 via the same command and substituting `-sdkName 1.8_64`. This is planned to be fixed in the next Portal CF.


-   Problem: The following error may be seen when working with or installing Portal Web Modules, when configured with WAS 8.5.5.12 / 9.0.0.5 generates this error:

    ```
    com.ibm.portal.tasks.wtf.XmlAccessException: Xmlaccess request failed with an error. Result [failed], 
    Messages: 
    [[EJPXA0043E: EJPXA0043E: An error occurred while creating or updating the resource.], 
    [EJPPD0015E: EJPPD0015E: Portlet application manager failed when user xmlaccess scripting user executed command InstallWebApplication.], 
    [EJPPE0013E: EJPPE0013E: The installation of Web Module from WAR file /opt/IBM/WebSphere/wp_profile/PortalServer/deployed/ilwwcm-wcmlibutil.war did not complete successfully when invoking the WebSphere Application Server administration interface.], 
    [EJPPE0001E: EJPPE0001E: Instantiation of the WebSphere Application Server administration manager failed.], 
    [EJPPH0007E: EJPPH0007E: Instantiation of the administration module for Portal context failed.], 
    [EJPPH0010E: EJPPH0010E: Failed to retrieve and initialize administration runtime variables from Application Server.],
    ```

-   Solution: This is expected to be fixed in an upcoming WAS level. The temporary workaround to alleviate this problem is to set the following JVM Property:

    ```
    com.ibm.ws.management.connector.soap.disableSOAPAuthCheck = true
    ```


-   Problem: Errors may be seen in DCS (Document Conversion Service) based on Oracle OIT (Outside In Technology\) levels. The new OIT 8.5.3 level has additional prerequisites outside of Portal's scope.
-   Solution: Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm) page to find related information about the PI84847 introduced in Portal Version 8.5 and Version 9.0 CF15 section.

-   Problem: On a Linux system, it is possible that the `applyCF` command may fail, with this error message recorded in ConfigTrace.log:

    ```
    Couldn't flush user prefs: java.util.prefs.BackingStoreException: Couldn't get file lock.
    ```

-   Solution: The problem concerns Java system and/or user preferences and can potentially be addressed in one of the following ways:
    1.  Make sure that Java's preferences directory is accessible. Ensure that the /etc/.java/.systemPrefs directory exists and is read/writable by the user performing the upgrade as well as any alternate user ID used to do WAS administration.
    2.  Create a new unique Java preferences path for use by WAS.
        -   a. Create a new sub-directory of your choice (for example, under /home/wasadmin/prefs/).
        -   b. Assign permissions on this directory so that it is read/writable by the user performing the upgrade as well as any alternate user ID used to do WAS administration.
        -   c. Set the following argument on the affected WebSphere JVM: `-Djava.util.prefs.userRoot=/home/wasadmin/prefs`. To set this argument, go to the administrative console, click **Servers > Server Types > WebSphere application servers**, and select the server that you want to add the generic argument to. Then, in the **Server Infrastructure** section, click **Java** and **Process management > Process definition > Java virtual machine**.
        -   d. Add `-Djava.util.prefs.userRoot=/home/wasadmin/prefs` to any existing properties in the **Generic JVM Arguments** field and click **OK**. Then click **Save** to save your changes and restart the application server.

-   Problem: An error may occur during `applyCF` on the primary cluster node, similar to the following:

    ```
    [wplc-remove-ear] AppName EphoxTbioServices 
    [wplc-remove-ear] ADMA5017I: Uninstallation of EphoxTbioServices started. 
    [wplc-remove-ear] ADMA5104I: The server index entry for WebSphere:cell=psvtmigwin08Cell01,node=psvtmigwin11+WebSphere:cell=psvtmigwin08Cell01,node=psvtmigwin09+WebSphere:cell=psvtmigwin08Cell01,node=psvtmigwin10Node01 is updated successfully. 
    [wplc-remove-ear] ADMA5102I: The configuration data for EphoxTbioServices from the configuration repository is deleted successfully. 
    [wplc-remove-ear] ADMA5011I: The cleanup of the temp directory for application EphoxTbioServices is complete. 
    [wplc-remove-ear] ADMA5106I: Application EphoxTbioServices uninstalled successfully. 
    [wplc-remove-ear] WASX7015E: Exception running command: "source "C:/ibm/wp85/wp_profile/ConfigEngine/config/work/was/curJaclScript.jacl""; exception information: 
    [wplc-remove-ear] com.ibm.websphere.management.exception.ConfigServiceException 
    [wplc-remove-ear] com.ibm.ws.sm.workspace.WorkSpaceException 
    [wplc-remove-ear] com.ibm.websphere.management.exception.DocumentIOException: cells/psvtmigwin08Cell01/applications/EphoxTbioServices.ear/EphoxTbioServices.ear
    ```

-   Solution: Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm) page to find related information about disabling auto plugin generation. Once `applyCF` completes, re-enable the two plugin settings.

-   Problem: The post-was-configuration-update task may fail due to an error in the Portal server startup. SystemOut.log shows an exception related to the `wps_scheduler`, and the `wps_scheduler` does not start when the Portal server starts. Error logs may appear similar to the following:

    ```
    [6/21/17 23:05:06:112 EDT] 00000080 InternalGetSc E com.ibm.wps.command.scheduler.internal.InternalGetSchedulerTaskCommand AbstractCommand.throwCommandException EJPDD0009E: JNDI naming lookup failed for name = [ejb/wpsSchedulerManager].
    javax.naming.NameNotFoundException: Context: w7944aCell/nodes/w7944aNode/servers/HCL Portal and HCL Web Content Manager, 
    name: ejb/wpsSchedulerManager: First component in name wpsSchedulerManager not found. 
    [Root exception is org.omg.CosNaming.NamingContextPackage.NotFound: IDL:omg.org/CosNaming/NamingContext/NotFound:1.0]
    ```

-   Solution: Edit the WAS 9 properties file, ex. AppServer/properties/migration.properties.

    ```
    #-------------------------------------------------------------------------
    # Specify the number of apps which can be installed in parallel.  default=3
    #-------------------------------------------------------------------------
    #com.ibm.ws.migration.application.install.threadPoolSize=3
    ```

    Then uncomment the property and set to a value of 1. For example:

    ```
    com.ibm.ws.migration.application.install.threadPoolSize=1
    ```

    Then, save the change and continue with the profile migration. Stop the Portal server, and run the following command again:

    ```
    post-was-configuration-update
    ```


-   Problem: When creating a portal page, there is an option to Create Content. When clicking on that option, it presents available templates to create content from **Content Hub Authoring Template** is one of them. If selecting this template, it may show an error:

    ```
    "The new content item could not be created. The selected template is not supported. A workflow is required, but the workflow is not 
    set for the item"
    ```

-   Solution: This authoring template is not designed for this feature. It has to be exempted from creating content items off it from toolbar. To do that:
    1.  Go to the **Content Hub** library.
    2.  Open Authoring templates, edit the **Content Hub authoring template**.
    3.  Go to the tab **Properties**.
    4.  Open section **Profile**.
    5.  Add this keyword `hcl.portal.toolbar.hiddenTemplate` to the keywords text box.
    6.  Save and Close.

-   Problem: XMLAccess in the `applyCF` command may fail when updating a virtual portal
-   Solution: The CF install attempts to update the Portal owned pages in the base portal and all virtual portals. Prior to CF11 there were some cases where error conditions were suppressed for both the base portal and all virtual portals. This has changed and error conditions are no longer suppressed. If the CF install (`applyCF` command) reports an error while running the XMLAccess tool on a virtual portal, there may be a problem with the virtual portal. If virtual portal\(s\) have been modified and removed some of the Portal owned pages on purpose then these errors can be safely suppressed and allow the CF install to continue. This can be done by adding the `ignore-errors-all-vps` property to the `applyCF` command. Example:

    ```
    applyCF.(sh|bat) ..... -Dignore-errors-all-vps='true'
    ```

    If Portal-owned pages have not been purposely removed from the virtual portal, then the error should be investigated and attempted to be fixed.


-   Problem: After HCL Portal 8.5 CF12 or later is applied, warning messages may be seen in the `SystemOut.log` similar to the following, and custom themes or custom portlets may stop working:

    ```
    [10/5/15 8:00:00:000 EDT] 0000000a AbstractReque W com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory matchesWebAppDefault(aResource) Servlet context [/...] does not specify a blackwhite list when accessing resource [...], 
    falling back to the default [[whitelist(null), blacklist(.*)]]...
    ```

    There might be many of these warning messages which could cause a significant performance issue.

-   Solution: HCL Portal 8.5 CF12 (and later) contains a security fix (PI65954). Similar to APAR PI47714, this APAR warns and then blocks access to files in a web application that does not have a blacklist or whitelist. The difference between PI47714 and PI65954 is that the default value for the blacklist is now ".*" instead of "WEB-INF/.*" which is much more restrictive than before. Applications can define a custom blacklist or whitelist list by adding the keys `com.ibm.portal.resource.whitelist` and `com.ibm.portal.resource.blacklist` to their web.xml deployment descriptor. Custom themes must be redeployed for these changes to take effect. Alternatively, as a temporary solution, you can define a different default value for the blacklist. Details on the action required for the custom code mentioned in these messages and the setting of a default value for the blacklist can be found on the [HCL Software Support](https://support.hcltechsw.com/csm) page.

-   Problem: If you drag and drop digital assets into:

    1.  The Dropzone in the Sharing Tab of Rich Media Edition console, or
    2.  Shared files directory (MBAssets folder and its subfolders) that the Rich Media Edition uses,
    then default renditions may not be created automatically.

-   Solution: One of the two workaround approaches can be followed to place assets into Rich Media Edition and generate default renditions.
    1.  You can either use WCM interface to place assets in Rich Media Edition instead of Dropzone or shared files directory of the Rich Media Edition server.
    2.  Launch the link from Shared files section in the Sharing tab of Rich Media Edition console in a browser to open the user's workspace. Login and double click the assets for which you want to generate renditions and open Renditions tab. Click on **Regenerate Renditions** button.

-   Problem: If HCL Portal is configured with an empty value for the `wps` context root or an empty value for the `portal` mapping for public pages then the following message may be seen in the browser when a user accesses a page that has a whitespace character or any other special character in the friendly page name:

    ```
    Error 400: EJBCD0006E: The resolution of a URI failed. Refer to the SystemOut.log for more detailed information.
    ```

    A similar warning in the SystemOut.log may also be seen:

    ```
    ExceptionLogg W com.ibm.wps.logging.ExceptionLogger logThrowable An exception occurred: [Illegal character in path at index 43: com.ibm.portal.friendly.name:/Search/Search Center]. Enable traces for [com.ibm.wps.logging.ExceptionLogger=all] to see the exception stack trace.
    ```

-   Solution: This is a known issue and is fixed by applying the WAS interim fix for PI67942 for WAS 8.5.5.10. This issue will also be fixed or included in WAS 8.5.5.11. [HCL Software](https://www.hcltechsw.com/wps/portal/about/welcome) page in the maintenance package.

-   Problem: A decrease in performance may occur when Textbox.io or TinyMCE is used with large amounts of HTML \(~4000 lines/20,000 characters\) that can cause the Firefox browser to stop working when switching between code and design views.
-   Solution: When switching between code and design views, save and close the content and then reopen it before returning to the design view. For other browsers, waiting and allowing processes to continue running eventually returns to the design view and no further action is required.

-   Problem: If WAS 8.5.5.10 is installed with JDK8 for the Portal server profile and CF12 or later is installed, the following errors may be found in the ConfigTrace.logfile:

    ```
    [exec] SEVERE:
    [exec] java.lang.UnsupportedClassVersionError: JVMCFRE003 bad major version; class=sun/rmi/rmic/Main, offset=6
    ```

    and

    ```
    [exec] SEVERE: Error generating RMI code: Cannot run RMIC because it is not installed. Expected location of RMIC is the 
    following: /opt/IBM/WebSphere/AppServer/java_1.8_64/lib.
    [exec] Exception in thread "main" java/lang/NullPointerException
    ```

-   Solution: There is a problem communicating with RMIC while preparing an Enterprise Application for installation. This is fixed by installing WAS APAR PI67166 and retrying the `applyCF.sh` command. It can also be avoided by installing WAS APAR PI67166 before the Portal CF update.

-   
-   Problem: ISAM v7 does not support JDK8. Any customer choosing to move to JDK8 will no longer have compatibility for ISAM v7. ISAM v9 will support JDK8, but Portal does not yet support this level.
-   Solution: This is currently a Portal limitation. Future plans may include ISAM v9 support in a later CF.

-   Problem: No content indexed in default search collection and system was configured with a custom Portal context root
-   Solution: Prior to CF06 there was a manual step required after changing the context root. The context in the search content source had to be manually adjusted. If this was not performed, then the content source will be using the wrong context root and will not find any content to index. Beginning with CF06 the update of the search content source was included in the task `modify-servlet-path`. To solve this problem, the context in the search content source can be adjusted manually or just run the task `modify-servlet-path` again.

-   Problem: In the WCM Authoring environment, when the DAM popup is opened to select an image, it may show all the assets available in DAM, but the thumbnails will not be generated properly. This may be due to a particular library which is installed with Linux, but is at a different version to that which MediaBeacon utilizes.
-   Solution: The typical solution is to create a symbolic link, as shown below.
    1.  Open Terminal.
    2.  Run the following command:

        ```
        cd /lib64
        ```

    3.  If Linux is installed with `libbz2.so.1.0.4` for example, then do:

        ```
        ln -s libbz2.so.1.0.4 libbz2.so.1.0
        ```


-   Problem: In installations with a large number of resources, it is possible that the `applyCF` script could run out of memory and fail. Such a failure would record a `"java.lang.OutOfMemoryError: Java heap space"` message and a Java stack trace in the ConfigTrace.log file.
-   Solution: If this problem is encountered, the amount of memory available to the JVM can be increased, and the configuration can then be re-run.
    1.  For Linux:
        1.  Backup the (AppServer_home)/bin/wsadmin.sh file.
        2.  Open this file in a text editor.
        3.  Locate the `PERF_JVM_OPTIONS=` line specific to your operating system.
        4.  Modify this line to have an Xmx parameter of 2048, e.g. from

            ```
            PERF_JVM_OPTIONS="-Xms256m -Xmx256m -Xquickstart" ;;
            ```

            to

            ```
            PERF_JVM_OPTIONS="-Xms256m -Xmx2048m -Xquickstart" ;;
            ```

        5.  Save changes.
        6.  Re-run `applyCF.sh`. After some initialization, the script will skip configuration steps that have already completed and pick up where it left off before the crash.
    2.  For Windows:
        1.  Backup the AppServer_home)\bin\wsadmin.bat file.
        2.  Locate the `set PERFJAVAOPTION` statement.
        3.  Modify this line to have an Xmx parameter of 2048, e.g.

            ```
            set PERFJAVAOPTION=-Xms256m -Xmx256m -Xquickstart
            ```

            to

            ```
            set PERFJAVAOPTION=-Xms256m -Xmx2048m -Xquickstart
            ```

        4.  Save changes.
        5.  Re-run `applyCF.bat`. After some initialization, the script will skip configuration steps that have already completed and pick up where it left off before the crash.

-   Problem: Where Textbox.io or TinyMCE is the configured rich text editor in WCM, rapidly opening and re-saving an existing item containing a rich text element can cause the loss of existing content if the item is saved before the rich text content is fully loaded. This is only likely to be an issue in environments with high network latency.
-   Solution: Ensure when editing an existing content, site area, template or component containing a rich text element, the rich text content is fully loaded in the editor before re-saving the item.

-   Problem: During the migration process the node may not start after upgrading to WAS 8.5.5.9 and before executing upgrade-profile. The node does not start with error message:

    ```
    ADMU3200I: Server launched. Waiting for initialization status.
    ADMU3011E: Server launched but failed initialization. Server logs, startServer.log, and other log files
    ```

    The log contains the following error message:

    ```
    HMGR0031E: A conflicting IP address and port has been detected for the DCS_UNICAST_ADDRESS end point.
    The node does not start due to conflicting port configuration for the DCS_UNICAST_ADDRESS end point of server1 and nodeagent in the node 
    serverindex.xml.
    ```

-   Solution: It is recommended to execute `upgrade-profile` before upgrading to WAS 8.5.5.9. Alternatively the conflicting port configuration for the DCS_UNICAST_ADDRESS needs to be solved by setting unique port numbers for `server1` and `nodeagent`.

-   Problem: After Rollback from CF09 or above to CF08 or below, the portal toolbar may show extra items that have titles `$Banner$`, `$Teaser$` and `$Video$`.
-   Solution: These items can be ignored and should not be used. During an update to CF09 or above again, these items will disappear. To have these items no longer visible in the toolbar, go to **Applications > Content > Web Content Authoring**. Search for each of these pieces of content. Edit each of the pieces of content and go to properties. In the profile keyword field, remove the keyword `hcl.portal.toolbar.NewContent`. Save this change.

-   Problem: During the upgrade-profile task in migration, there may be an intermittent issue which can cause the uninstall of an application to fail because files from the application are locked and cannot be deleted. This is an example of an error message that may be seen:

    ```
    BUILD FAILED
    C:\ibm\wp85\ConfigEngine\config\includes\apply_PTF.xml:172: 
    C:\ibm\wp85\PortalServer\jcr\wp.content.repository.install\config\includes\jcr.mig_cfg.xml:382: Exception found when executing wsadmin: <hostname>
    c:/ibm/wp85/ConfigEngine/lib/wkplc.misc.jar;
    C:/ibm/wp85/AppServer/deploytool/itp/batchboot.jar;C:/ibm/wp85/AppServer/deploytool/itp/batch2.jar;
    C:/ibm/wp85/PortalServer/base/wp.base/shared/app/wp.base.jar;C:/ibm/wp85/PortalServer/shared/app/wp.base.jar
    ```

-   Solution: If this issue is encountered, wait 5 minutes and re-run the `upgrade-profile` task with the same options to resume the migration. The lock on the file should be released and the uninstall can continue as expected.

-   Problem: It may be noticed that a page created from a page template does not have the access controls that are expected or that the access controls for such a page have recently changed.
-   Solution: APAR PI39231 \(IN STANTIATING A PAGE TEMPLATE LEADS TO INCONSISTENT ACCESS CONTROL SETTINGS ON THE TARGET PAGE\) was introduced in CF08. With this APAR, access control settings applied to a page template are consistently copied onto the target page. This means that all access rights assigned explicitly on a page template are also applied to the created page. If, for example, the **All Authenticated Portal Users** group is assigned to `USER@PageTemplate`, then the created page will be visible to every authenticated user, independent of the access control configuration of the parent page. During the installation of the CF the out of the box page templates have also been changed, including those in existing virtual portals, to no longer have explicit role mappings and it is recommended that all customers do the same for custom code templates unless the use case really is to copy that role mapping onto the target page. This is a permanent change in behavior effective in CF08 or later. Go to [Creating page templates](https://help.hcltechsw.com/digital-experience/8.5/panel_help/h_mp_create_page_templates.html) topic for more information about this behavior.

-   Problem: Non-English characters are not supported when exporting a Site/Section template from Site Builder. When importing Site or Section templates into the Site Builder application, you may encounter an error that the template PAA file could not be imported. This could be due to using non-English characters in the Site/Section template PAA import object file name. You will see the following messages on the site builder interface:

    ```
    "Could not import the template. The solution installer import of the PAA file failed. Review the server logs for more information."
    ```

-   Solution: Use only English characters in the PAA file name.

-   Problem: If local hostname resolution is not configured properly, the `applyCF` command may fail with an error like this:

    ```
    C:\IBM\WebSphere\PortalServer\theme\wp.setup.themedev\config\includes\wp.setup.themedev_cfg.xml:52: Exception found when executing wsadmin: jacl
    C:/IBM/WebSphere/ConfigEngine/lib/wkplc.misc.jar;C:/IBM/WebSphere/AppServer/deploytool/itp/batchboot.jar;
    C:/IBM/WebSphere/AppServer/deploytool/itp/batch2.jar;C:/IBM/WebSphere/PortalServer/base/wp.base/shared/app/wp.base.jar;
    C:/IBM/WebSphere/PortalServer/shared/app/wp.base.jar
    'HCL Portal and HCL Web Content Manager(cells/winwab09Cell/nodes/winwab09Node/servers/HCL Portal and HCL Web Content Manager|server.xml#Server_1452022426983)'
    Ear File C:/IBM/WebSphere/PortalServer/theme/wp.setup.themedev/installedApps/ThemeDevAssets.ear
    WASX7015E: Exception running command: "source "C:/IBM/WebSphere/wp_profile/ConfigEngine/config/work/was/curJaclScript.jacl""; 
    exception information: com.ibm.websphere.management.filetransfer.client.TransferFailedException
    java.io.FileNotFoundException: java.io.FileNotFoundException: C:\IBM\WebSphere\PortalServer\theme\wp.setup.themedev\installedApps\ThemeDevAssets.ear (Access is denied)
    
    ```

-   Solution: This indicates a SOAP issue on the Web server where the hostname does not resolve as expected. ﻿The solution is to make sure that all host names of the machine are associated with the loopback in the hosts file. Edit the following file.

    For Linux, the hosts file is:

    ```
    /etc/hosts
    ```

    For Windows, the hosts file is:

    ```
    %SystemRoot%\System32\drivers\etc\hosts
    ```

    Add a line similar to the following, substituting your actual machine name where indicated like:

    ```
    127.0.0.1 yourhostname yourhostname.yourdomain localhost localhost.localdomain
    ```

    If a line for `localhost` already exists, you can add your hostname to this existing line.


-   Problem: After the CF is applied, warning messages may be seen in the SystemOut.log similar to:

    ```
    [10/5/15 8:00:00:000 EDT] 0000000a AbstractReque W 
    com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory matchesWebAppDefault(aResource) 
    Servlet context [/...] does not specify a blackwhite list when accessing resource [...], falling back to the default 
    [[(null), (WEB-INF/.*)]]. Applications can define a custom list by adding the keys [com.ibm.portal.resource.whitelist] and 
    [com.ibm.portal.resource.blacklist] to their web.xml deployment descriptor.
    ```

    There might be many of these warning messages which could cause a significant performance issue.

-   Solution: HCL Portal Version 8.5 CF08 (or later) contained a security fix (PI47714 / CVE-2014-8912), which requires specification of black and white lists for custom themes and portlets in certain usage scenarios involving the 'res' data source. You must redeploy your custom theme for these changes to take effect. Details on the action required for the custom code mentioned in these messages can be found in the [HCL Software Support](https://support.hcltechsw.com/csm) page.

-   Problem: When following steps to modify site URLs for the Search Engine Optimization (SEO) workflow some portlets and labels may not be available in clustered environments. For example, you cannot perform the *Change the JSP components in the Web Resources v70 Library* step.
-   Solution: If you do not have a web server, you must resynchronize the nodes and restart the cluster before you can change the JSP components in the Web Resources library.

-   Problem: There may be a performance issue seen (in EditLive) when using Java 1.8 Update 60 / Internet Explorer.
-   Solution: Oracle and Ephox have acknowledged this issue and are documenting the following link on their support site: [https://docs.ephox.com/IBMWCMTB/](https://docs.ephox.com/IBMWCMTB/.

    !!!note
        The Ephox (EditLive) Java based Rich Text Editor has been deprecated as of HCL Portal 8.5 CF11 and replaced by Textbox.IO. HCL Portal 9.5 requires a minimum of CF17 to offer Textbox.io. The Ephox (EditLive\) feature is only available in HCL Portal 9.5 if you explicitly enable it.


-   Problem: Error messages can be seen in the SystemOut.log after rollback regarding `ManagedRules` feature updates. These features would no longer be available after the rollback to a level earlier than CF08. The following error example may be seen in the log:

    ```
    java.lang.RuntimeException: java.lang.ClassNotFoundException: com.aptrix.pluto.pzn.Segment
    at com.aptrix.identity.IdentityReference.getTypeClass(IdentityReference.java:190)
    ```

-   Solution: These logging errors are expected if content was created against a Portal feature at an updated CF level and a rollback occurs to a level that does not support it. The logging exceptions could be removed by running the following two `ConfigEngine` tasks:

    ```
    ./ConfigEngine.sh drop-wcm-recents-and-favorites-tables
    ```

    ```
    ./ConfigEngine.sh create-wcm-recents-and-favorites-tables
    ```


-   Problem: Starting with HCL Portal Version 8.5 Cumulative Fix 5, a new check has been added to the XML configuration interface. When the XML configuration interface processes update requests, now all locale identifiers are checked if they represent a locale available on the system. If this is not the case, then the update request fails and the XML configuration interface returns with an error. For example, language-dependent strings are marked with a locale:

    ```
    {code:} (localedata locale="en") (title)Home(/title) 
    (/localedata){code}
    ```

    Here, for `en` which stands for the English locale, a title is defined. For other locales, other strings can be defined. Now, if the attribute `locale` contains an empty value or an identifier of a locale which does not exist on the system, then the file cannot be imported. As on levels prior to HCL Portal Version 8.5 Cumulative Fix 5, this check has not been performed, XML files exported from Portal systems can lead to errors when trying to import them on a HCL Portal Version 8.5 system with at least Cumulative Fix 5. Even HCL Portal systems migrated or upgraded to at least HCL Portal Version 8.5 Cumulative Fix 5 can contain configuration data with invalid locales. Exporting such data with the XML configuration interface is possible without problem. However, trying to import this data can lead to the error described above.

-   Solution: To fix this problem you can remove the XML element `localedata` with its child elements or you can change the `locale` attribute to an existing locale identifier.

-   Problem: The Live Repository will not show any available packages to be updated when selecting the IIM Preferences checkbox **Search service repositories during installation and updates**.
-   Solution: IBM Installation Manager (IIM) should be updated to the latest level, at least IIM 1.8, for the packages to be displayed.

-   Problem: The `applyCF.bat|sh` task may fail with an error like the following:

    ```
    action-clear-was-caches:
         [echo] /usr/IBM/WebSphere/AppServer/deploytool/scripts/install/ejbdeploy-clear-cache.sh
    --- Exception Thrown ---
    /usr/IBM/WebSphere/PortalServer/installer/wp.update/config/includes/cumulative_fix.xml:302: The directory you specified does not exist. 
    ```

-   Solution: Portal Server requires the optional WebSphere Application Server EJBDeploy tool, and the above error will occur if this tool is not installed. To resolve the error, use IBM Installation Manager to modify your copy of WebSphere Application Server and add the feature named **EJBDeploy tool for pre-EJB 3.0 modules**.

-   Problem: The IBM Installation Manager GUI may hang or crash on Red Hat Enterprise Linux v6.6 during the Portal update process.
-   Solution: There are potentially two issues at work. The first is [an eclipse bug](https://bugs.eclipse.org/bugs/show_bug.cgi?id=215234) caused by an infinite loop in code that tries to enumerate printers. This first issue can be resolved by updating your Installation Manager client to v1.8 or later. If updating your client is not a viable option at the moment, you can alternatively work around the problem by adding the following line to the /opt/IBM/InstallationManager/eclipse/IBMIM.ini file:

    ```
    -Dorg.eclipse.swt.internal.gtk.disablePrinting
    ```

    The second issue is caused by a different eclipse bug, related to a mismatch between the GTK version and the cairo library. The resolution is to update the cairo libraries.


-   Problem: Starting Portal Farm node may result in Error 500 when accessing Portal.
-   Solution: Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm?sys_kb_id=2d96ede61b5df34077761fc58d4bcbcb&id=kb_article_view&sysparm_rank=2&sysparm_tsqueryId=6a3bcab51b529414a67e9759bc4bcbc4) page to find related information about this issue.

-   Problem: If you do a database transfer to z/OS DB2 after installing HCL Portal 8.5 GA and before updating to the current CF, the schema name used for JCR indices will be the config user name instead of the designated schema name, resulting in potential duplicate entries if more than one portal uses the same z/OS DB2. The schema name is supposed to be sufficient for uniquely configuring multiple Portals to the same z/OS DB2 and it is very possible that the same config user could be used for both Portals.

-   Solution: Apply HCL Portal 8.5 CF01 or later prior to doing a database transfer to z/OS DB2.

-   Problem: After installing and rolling back the Cumulative Fix, you may observe error messages similar to the following in the Installation Manager if you subsequently uninstall HCL Portal 8.5:

    ```
    Basedir /usr/IBM/WebSphere/wp_profile does not exist
    Basedir /usr/IBM/WebSphere/wp_profile does not exist
    org.apache.tools.ant.Project.setBaseDir(Project.java:844)
    org.apache.tools.ant.Project.setBasedir(Project.java:829)
    ```

-   Solution: The product will be successfully uninstalled despite these messages, so you can safely choose to ignore them. The errors will be avoided if you uninstall HCL Portal 8.5 without first rolling back the Cumulative Fix.

-   Problem: IBM Installation Manager version 1.7.1 crashes with JVM Error when running HCL Portal rollback in GUI Mode.
-   Solution: Upgrade Installation Manager to version 1.7.3 or later and retry the rollback. Please see [the following documentation](https://www.ibm.com/support/pages/installation-manager-173) for more details.

-   Problem: After installing or rolling back the cumulative fix, you may observe error messages similar to the following in the Installation Manager log file:

    ```
    "Installation Manager cannot remove feature Portal Server Profile during the Update or Rollback."
    ```

-   Solution: These messages do not indicate a problem. To prevent a configuration error, you are prevented from changing your feature selections when performing an update. If you want to add or drop a portal, you must select the Modify function of Installation Manager instead.


