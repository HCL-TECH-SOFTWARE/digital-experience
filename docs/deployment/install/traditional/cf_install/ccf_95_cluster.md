# Cumulative fix instructions: Cluster 9.5

Read the installation instructions to learn how to apply a cumulative fix to a clustered portal installation or to roll back the cumulative fix.

## Cluster upgrade planning

There are two options for performing upgrade in a clustered environment. One option is to upgrade the cluster while the entire cluster has been taken offline from receiving user traffic. The upgrade is performed on every node in the cluster using the single-cluster procedure documented below before the cluster is brought back online to receive user traffic. This is the recommended approach for an environment with multiple Portal clusters since 24x7 availability can be maintained. It is also the simplest approach to use in a single cluster environment if maintenance windows allow for the Portal cluster to be taken offline.

For single cluster environments, which cannot tolerate the outage required to take a cluster offline and perform the upgrade, you can utilize the single-cluster 24x7 availability process. Review the following requirements and limitations for performing product upgrades while maintaining 24x7 availability in a single cluster.

!!!note
    Ensure that you understand this information before upgrading your cluster.

Assumptions for maintaining 24x7 operation during the upgrade process:

-   If you want to preserve current user sessions during the upgrade process, make sure that WebSphere Application Server distributed session support is enabled to recover user session information when a cluster node is stopped for maintenance. Alternatively, use monitoring to determine when all (or most) user sessions on a cluster node have completed before stopping the cluster node for upgrade to minimize the disruption to existing user sessions.
-   Load balancing must be enabled in the clustered environment.
-   The cluster has at least two horizontal cluster members.

Limitations on 24x7 maintenance:

1. The 24x7 Single cluster upgrade is only supported on a Rendering environment, with no deployments or authoring being performed during the upgrade process. Typical authoring or deployment tasks that must NOT be performed during the upgrade window (meaning until the whole cluster is upgraded):

-   Deploy portlets
-   Execute XMLAccess
-   Author, modify, delete content
-   Run `ConfigEngine`
-   Deploy PAAs
-   Import or Export libraries
-   Use the WAS AdminConsole or wsadmin tooling to deploy or modify configuration or code
-   Use the Portal Admin portlets to make changes like delete a page
-   Use any WCM system task like the `workflowchecker` or member fixer
-   Change WebDAV resources like the theme
-   Modify personalization rules
-   Create or Delete Virtual Portals
-   Perform JCR Search crawling with the Portal JCR search crawler (typically we recommend to disable textsearch for JCR for rendering systems)
-   New features introduced with the Cumulative fix should not be enabled or leveraged until all cluster members have been upgraded to the CF

2. If you have not implemented horizontal scaling and have implemented only vertical scaling in your environment such that all cluster members reside on the same node, the cumulative fix installation process will result in a temporary outage for your end users due to a required restart. In this case, you will be unable to upgrade while maintaining 24x7 availability.

3. If you have a single local Web server in your environment, maintaining 24x7 availability during the cluster upgrade may not be possible since you might be required to stop the Web server while applying corrective service to the local WebSphere Application Server installation.

4. When installing the cumulative fix in a clustered environment, the portlets are only deployed when installing the cumulative fix on the primary node. The cumulative fix installation on additional \(also known as secondary\) nodes simply synchronizes the node with the deployment manager to receive updated portlets. During the portlet deployment on the primary node, the database will be updated with the portlet configuration. This updated database, which is shared between all nodes, would be available to additional nodes before the additional nodes receive the updated portlet binary files. It is possible that the new portlet configuration will not be compatible with the previous portlet binary files, and in a 24x7 production environment problems may arise with anyone attempting to use a portlet that is not compatible with the new portlet configuration. Therefore it is recommended that you test your portlets before upgrading the production system in a 24x7 environment to determine if any portlets will become temporarily unavailable on additional nodes during the time between the completion of the cumulative fix installation on the primary node and the installation of the cumulative fix on the additional node.

5. In order to maintain 24x7 operations in a clustered environment, it is required that you stop HCL Portal on one node at a time and upgrade it. It is also required that during the upgrade of the primary node, you manually stop node agents on all other cluster nodes that continue to service user requests. Failure to do so may result in portlets being shown as unavailable on nodes having the node agent running.

When rolling back of the cumulative fix in a clustered environment, the portlets are only redeployed when roll back of the cumulative fix is on the primary node. The cumulative fix roll back on additional nodes simply synchronizes the node with the deployment manager to receive updated portlets. During the portlet redeployment on the primary node, the database will be updated with the portlet configuration, which would be available to additional nodes before the additional nodes receive the updated binary files, since all nodes share the same database. It is recommended that you test your portlets before rolling back on the production system in a 24x7 environment because the possibility of such incompatibility might arise if the previous portlet configuration is not compatible with the new portlet binary files.

## Before you begin

!!!note
    Unless you are migrating from a previous release or plan to add this node to an existing cluster, you must create your Portal profile before applying the cumulative fix. If you did not do this during the initial installation, you can use the Configuration Wizard to do so now. Portal Version 8.5 CF12 or later introduces support for JDK8. However, if you plan to use JDK 8 with your profile, you must first create the profile using JDK 7 and then upgrade to JDK 8 after applying the cumulative fix.

!!!note
    In Portal Version 8.5 CF12 or later, the blacklist settings have become more restrictive. For inquiries, go to [HCL Software Support](https://support.hcltechsw.com/csm) page.

Space Requirements: Ensure that enough disk space is available in the following directories:

-   For all platforms: 2.0 GB in the download directory to download the cumulative fix, 1.5 GB in `Portal_Install_Root`, 1 GB temporary disk space in `(wp_profile_root)`, and 1.66 GB in the shared data space, which is the directory where Installation Manager temporarily stores downloaded files for use during the update.

## Best Practices

Go to the [HCL Software Support](https://support.hcltechsw.com/csm) page for *Portal Upgrade Best Practices*.

## Syndicator/Subscriber Information

It is recommended that servers utilizing syndication have associated syndicators and subscribers disabled prior to installing the cumulative fixpack.

Otherwise syndication updates that run during install may clash with install modifications and can cause the CF update to fail.

Syndicators and subscribers can be disabled by editing them in the syndication administration portlet. Go to the [Syndication](../../../../manage_content/wcm/wcm_content_delivery/syndication/index.md) and [Subscriber settings](../../../../manage_content/wcm/wcm_content_delivery/syndication/manage_synd_subs/wcm_reference_subscriberfields.md) topic pages in the HCL Digital Experience Version 8.5 product documentation for more information. Syndication should then be re-enabled after the update is complete.

Alternatively, the following ConfigEngine tasks have also been integrated into CF09 or later to globally disable and enable syndication (These tasks can be used in place of the manual updates linked above):

-   `<wp_profile root>/ConfigEngine/ConfigEngine.sh|.bat disable-syndication-auto-scheduler`
-   `<wp_profile root>/ConfigEngine/ConfigEngine.sh|.bat enable-syndication-auto-scheduler` 

## Search Crawler Information

It is recommended that any search crawlers are disabled before applying the CF. If a CF is applied at the same time the crawler is running, this may corrupt the search collection. The search crawler should be restarted after the CF update is complete.

## Backing up the Installation Manager data

Backup the contents of the IBM Installation Manager data directory on the server you are upgrading in the event you lose connection during the upgrade, as this could corrupt the data directory.

The default locations of these directories are:

-   Windows: C:\\ProgramData\IBM\InstallationManager
-   Linux root users: /var/ibm/InstallationManager
-   Linux non-root users: /home/(user id)/var/ibm/InstallationManager

## Known Issues

Review the [Known issues for combined cumulative fix](ccf_95_known_issues.md) topic page to be aware of any known issues for the HCL Portal Version 9.5 CF releases.

## Review supported hardware/software requirements

For Portal Version 8.5 CF08 or later, the minimum recommended WebSphere Application Server level is at least WAS 8.5.5.6 with the corresponding JDK level applied.

Review the [Supported hardware and software requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) article for this cumulative fix. If necessary, upgrade all hardware and software before applying this cumulative fix, including interim fixes required for WebSphere Application Server.

!!!note
    Ensure that the optional WebSphere Application Server feature `EJBDeploy tool for pre-EJB 3.0 modules` is installed.

## Check fixes installed on your system

All temporary or interim fixes on your system must be removed before installing this cumulative fix.

Also check whether the fixes installed on your system are included in the list of fixes provided in this cumulative fix. If you have temporary or interim fixes on your system that are not included in this cumulative fix then contact [HCL Software Support](https://support.hcltechsw.com/csm) for an updated version of those fixes or for more information.

## Special instructions pertaining to HCL Digital Experience Patterns

These instructions are highlighted in this section but should be taken in the context of the rest of this readme. For each step, assure that you have read thru this readme and are taking all other documentation into account.

If the Portal server default profile (wp_profile) directory is owned by a different OS user than the default binary directory (PortalServer), extra manual steps are needed before running Installation Manager to update to the cumulative fix.

1.  Run the chown command to change ownership of the (wp_profile) directory to the same owner as PortalServer:

    ```
    chown -R OSUser:admingroup /opt/IBM/WebSphere/wp_profile.
    ```

2.  Run the Installation Manager update for the Portal Version 8.5 CF as the user that owns PortalServer.
3.  Run the chown command to change ownership of the (wp_profile\) tree back to the original owner:

    ```
    chown -R Original-OSUser:admingroup /opt/IBM/WebSphere/(wp_profile)
    ```

4.  Run `applyCF.sh` as portaladmin the same owner as (wp_profile).

    !!!note
        `/opt/HCL/WebSphere` will vary depending on what the installation directory actually is.

    !!!note
        `OSUser` will vary depending on which user owns the PortalServer directory.


## Ensure `wkplc` properties files are correct

The HCL Portal upgrade will run several `ConfigEngine` scripts. These scripts depend on the `wkplc.properties` being up to date and accurate, particularly with the password properties. If you are using multiple profiles, verify that the information in each profile is correct.

1.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc.properties file and ensure the following values are set correctly:
    -   `WasRemoteHostName=<the hostname of your WAS instance>`
    -   `WasSoapPort=<the soap port of your WAS instance>`
    -   `WasUserid=<your WAS admin user>`
    -   `WasPassword=<your WAS admin pwd>`
    -   `PortalAdminId=<your Portal Admin ID>`
    -   `PortalAdminPwd=<your Portal Admin password>`
    -   `WpsHostName=<Your Portal hostname>`
    -   `WpsHostPort=<The port you use to access Portal>`
    -   `WpsContextRoot=<your Portal context root>`
    -   (For HCL DX 9.5 CF19 and later releases): `CwUserPwd=xxxxxx (your Config wizard password)`
    -   (Optional, For HCL DX 9.5 CF202 and later releases): `skipWoodburnUpdate=true`
2.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc_dbdomain.properties file and ensure the following values are set correctly:
    -   `release.DbPassword=<your database user password>`
    -   `community.DbPassword=<your database user password>`
    -   `customization.DbPassword=<your database user password>`
    -   `jcr.DbPassword=<your database user password>`
    -   `likeminds.DbPassword=<your database user password>`
    -   `feedback.DbPassword=<your database user password>`
3.  Edit the `<wp_profile root>/ConfigEngine/properties/wkplc_comp.properties` file and ensure the following values are set correctly:
    -   `XmlAccessHost=<your Portal hostname>`
    -   `XmlAccessPort=<the port you use to access Portal>`

!!!note
    If your server is configured with database runtime users, for example, `feedback.DbRuntimeUser=<your feedback database runtime user>`, ensure to set their password values correctly as well, for example, in `feedback.DbRuntimePassword=<your feedback database runtime user password>`.

## Update process (Linux and Windows)

The update process removes plain text passwords from the `wkplc*.properties` files. To keep these passwords in the properties files, include the following line in the `wkplc.properties` file:

```
PWordDelete=false
```

## Multiple profile considerations

Verify that all of your profiles are at the same level before starting the upgrade or rollback. All profiles that share the same Portal installation directory (multiple profile option) must be manually upgraded after the IBM Installation Manager update completes. See the *Additional configuration steps* for details.

**Non-root considerations:** In Linux environments, you must install the cumulative fix as the same user which you used to install HCL Portal originally. This could be either root or a non-root user. If you need to use a non-root user, ensure the following conditions are met:

-   If you are installing as a non-root user on Linux, the `umask` setting for your login session must be set to 0022 or better (`umask` is a setting that controls what file permissions are set for newly created files and directories. A value of 0022 correspond to permission settings of `rwxr-xr-x`). If the umask is not set appropriately by default, you must set it when you start Installation Manager or when you open a command-line utility to run Installation Manager commands.
-   The non-root user has a "ulimit - n" setting of at least 18192. This must be a number and not "unlimited".
-   The non-root user owns the AppServer, PortalServer, ConfigEngine, and Portal profile directories and has read/write access to all files in these directories. Permission settings of 755 (rwxr-xr-x) are sufficient.
-   Do not use "sudo" or "su" to install the fix pack. Either use root explicitly or use a non-root user that meets the above conditions.

To open a command-line utility to run Installation Manager commands:

1.  Open a command line window.
2.  Run this command to check your current umask setting:

    ```
    umask
    ```

3.  If necessary, run this command to set the umask:

    ```
    umask 0022
    ```


## Anti-virus and file indexing software considerations (Windows only)

As part of the CF upgrade process, new files will be created in the WebSphere installation directory, as well as the user's temp directory. Anti-viruses and file indexing software (like Google Desktop) have been known to lock newly created files as they are being scanned, which can interfere with the upgrade process. If you find such software is interfering with the Portal CF upgrade process contact the software vendor for further assistance. Note: If it is possible, we recommend to exclude the WebSphere installation directory and the user's temp directory from being scanned by this software during the upgrade. Or you can stop /disable these tools for the duration of the upgrade, and re-enable them after the upgrade completes. However HCL does not recommend such modifications and instead recommends to contact the software vendor for further assistance.

## Special note for customers using WAS 8.5.5.14

Support for WebSphere Application Server v8.5.5.14 will be added in Portal Cumulative Fix 16. If you need to apply Portal Cumulative Fix 15 or earlier to a WAS v8.5.5.14 installation, you will need to perform an additional manual step during the upgrade.

After running Installation Manager to install the new Portal code but before running the `applyCF.sh` or `applyCF.bat` command to update the Portal profile, perform these steps:

1.  Open a command Window and switch to the ConfigEngine home directory. By default this is:
    -   Linux: /opt/IBM/WebSphere/ConfigEngine
    -   Windows: C:\\IBM\WebSphere\ConfigEngine

2.  Make a backup copy of the ConfigEngine script. This file is named `ConfigEngine.bat` for Windows and `ConfigEngine.sh` for all other platforms.
3.  Make sure your user has write permissions for the script file and open it in a text editor.
4.  Look for the text `EJBDEPLOY_JAVA_HOME` in the script. If you do not find it, no further action is necessary and you can continue with the installation. If you do find it, delete every line that contains the text `EJBDEPLOY_JAVA_HOME` anywhere in the line. (There should be 3 such lines in the .sh script and 2 lines in the .bat script.)
5.  Save the file.

You may now continue with the installation of the Portal CF.

## Download the cumulative fix
1.  Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm) and download the latest zip file that corresponds to the installation on your system.
2.  Create a directory and extract the zip file(s) into this directory. Inside the zip file is a readme file, sample response files (Server and Express only), and the actual cumulative fix file itself.
3.  Create a sub-directory and extract the appropriate `WP8500CFnn_ zip` file to this directory. The extraction results in a `repository.config` file that is used by IBM Installation Manager during the update.

## Disabling automatic synchronization and stopping the node agents
Ensure that automatic synchronization is disabled and that all node agents are stopped for all Portal clusters in the cell. When the automatic synchronization is enabled, the node agent on each node automatically contacts the deployment manager at startup and at every synchronization interval to attempt to synchronize the node's configuration repository with the master repository managed by the deployment manager.

1.  In the administrative console for the deployment manager, select **System administration** then **Node agents** in the navigation tree.
2.  Click **nodeagent** for the required node.
3.  Click **File Synchronization Service**.
4.  Uncheck the **Automatic Synchronization** check box and uncheck the **Enable service at server startup** check box on the **File Synchronization Service** page to disable the automatic synchronization feature and synchronization service at server startup and then click **OK**.
5.  Repeat these steps for all other nodes to be upgraded.
6.  Click **Save** to save the configuration changes to the master repository.
7.  Select **System administration** then **Nodes** in the navigation tree.
8.  Select all nodes that are not synchronized, and click on **Synchronize**.
9.  Select **System administration** then **Node agents** in the navigation tree.
10. For the primary node and all additional nodes in all Portal clusters in the cell, select the node agents and click **Stop**. If you do not stop the node agents the cumulative fix configuration might fail.

## Upgrading the primary node

There are several different methods to install the cumulative fix, and they are:

-   Use a Graphical User Interface (GUI)
-   Use a command line
-   Use silent mode installation
-   Use console mode installation

Start with the step *Stopping IP traffic* then choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the *Additional configuration steps*.

!!!note
    Do not attempt to combine the steps for primary and secondary nodes. The update must be performed first on the primary node and then on the additional nodes, according to the following instructions. When instructed to stop or start the HCL Portal server, stop or start all Portal server instances including vertical cluster members on the node.

## Stopping IP traffic (Required only if following the 24x7 single cluster upgrade)

-   If you are using IP sprayers for load balancing to the cluster members, reconfigure the IP sprayers to stop routing new requests to the Portal cluster member\(s\) on this node.
-   If you are using the Web server plug-in for load balancing, perform the following steps below to stop traffic to the node.

To stop traffic to the nods:

1.  In the Deployment Manager administrative console, click **Servers > Clusters* > WebSphere application server clusters > (cluster_name) > Cluster members** to obtain a view of the collection of cluster members.
2.  Locate the cluster member you are upgrading and change the value in the Configured weight column to zero.

    !!!note
        Record the previous value to restore the setting when the upgrade is complete.

3.  Click **Update** to apply the change.

Note that the web server plug-in will check periodically for configuration updates based on the value of **Refresh Configuration Interval** property for the Web server plug-in (default value is 60 seconds). You can check this value on the Deployment Manager administrative console by selecting **Servers > Server Types > Web Servers > (web_server_name) > Plug-in Properties**. If automatic propagation of the plug-in configuration file is enabled on the web server(s) disable it from the Deployment Manager administrative console by going to **Servers > Server Types > Web Servers > (web_server_name) > Plug-in Properties** and unchecking **Automatically propagate plug-in configuration file**. Once automatic plug-in generation and propagation is disabled, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the Web server.

## Use a Graphical User Interface (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `<wp_profile>/bin` directory and again from the `<cw_profile>/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `<dmgr>/bin` directory:

    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Launch the IBM Installation Manager that was used to install HCL Portal Version 8.5.
3.  Using Installation Manager, click **File > Preferences**.
4.  Go to the **Repositories** panel and click **Add Repository**.
5.  Navigate to the `repository.config` file mentioned earlier and select it.
6.  Select **Update** and follow the prompts to update HCL Portal.
7.  After installation completes, proceed with the *Additional configuration steps*.

## Use a command line (available on Windows and Linux operating systems)

1.  If you are running an external web server, stop the web server.
2.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `<wp_profile>/bin` directory and again from the `<cw_profile>/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory:

    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

3.  Open a command window and switch to the `eclipse/tools` sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\Program Files\IBM\Installation Manager\eclipse\tools
4.  If you are installing the cumulative fix on HCL Portal Express, skip to Step 5. Otherwise, run the following command to launch the installation program of Installation Manager.

    For Linux:

    ```
    ./imcl install com.ibm.websphere.PORTAL.SERVER.v85
    	-repositories <fullpath/to/repository.config> -installationDirectory <portal_server_root>  
    	-acceptLicense 
    ```

    For Windows:

    ```
    imcl.exe install com.ibm.websphere.PORTAL.SERVER.v85
    	-repositories <fullpath/to/repository.config> 
    	-installationDirectory <portal_server_root> 
    	-acceptLicense
    ```

5.  For HCL Portal Express only: Run the following command to launch the installation program of Installation Manager.

    In Linux:

    ```
    ./imcl install com.ibm.websphere.PORTAL.EXPRESS.v85
    	-repositories (fullpath/to/repository.config) 
    	-installationDirectory (portal_server_root) 
    	-acceptLicense
    ```

    In Windows:

    ```
    imcl.exe install com.ibm.websphere.PORTAL.EXPRESS.v85 
    	-repositories <fullpath/to/repository.config> 
    	-installationDirectory <portal_server_root> 
    	-acceptLicense
    ```

    !!!note
        The commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

6.  After installation completes, proceed with the *Additional configuration steps*.

## Use silent mode installation (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `<wp_profile)/bin` directory and again from the `<cw_profile>/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `<dmgr>/bin` directory.

    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the `eclipse/tools` sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\\Installation Manager\eclipse\\tools
3.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file. You can also record a response file to use to install the fix in silent mode. Do note that the feature set listed in your response file must match the feature set you have installed. You cannot add or remove features during the cumulative fix update. The feature set listed in the sample response file is `features='ce.install,portal.binary,portal.profile'`. If you do not have any profiles on this node (because you are in the process of migration from a previous version of HCL Portal, or installing an additional node for a cluster, or creating multiple profiles, or you originally installed HCL Portal Version 8.5 as a binary install), then you should remove the `portal.profile` feature from the `features='ce.install,portal.binary'` list.
4.  Run the following command to install in silent mode:

    ```
    imcl -acceptLicense -input <Full_path_to_your_response_file> -log (Full_Path_to_a_log_file) -showProgress
    ```

5.  After installation completes, proceed with the *Additional configuration steps*.

## Use Console Mode installation (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `(wp_profile)/bin` directory and again from the `(cw_profile)/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory.

    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Run the command to start the IBM Installation Manager in console mode.

    -   For Linux: `./imcl  -c`
    -   For Windows: `imcl.exe -c` 

4.  Add the repositories.
5.  Select **Update** and follow the prompts to update HCL Portal.
6.  After installation completes, proceed with the *Additional configuration steps*.

To add the repositories:

-   Enter P to go to the **Preferences** menu.
-   Enter 1 to go to the **Repositories** menu.
-   Enter D to add repositories.
-   Type the path for your HCL Portal 8.5 CF repository file.
-   Enter A to apply your repositories and return to the **Preferences** menu.
-   Enter R to return to the Main menu.

## Additional configuration steps

If you have any profiles the following configuration steps are mandatory.

If you do not have any profiles at this point (because you are in the process of migration from a previous version of HCL Portal), no additional configuration steps are necessary and you can continue with the *Restoring IP traffic steps* described below.

!!!note
    The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

## Additional configuration: Update process (Linux and Windows)

Use the following commands to update all profiles. These steps must be repeated for each profile, if multiple profiles exist. All cluster members and all profiles that share the same Portal installation directory \(multiple profile option) must be updated to the same level to complete the CF installation.

!!note "Additional notes"
    -   If a remote search server is used within this environment, it should be started before running the following commands.
    -   Also, if a WAS update has occurred prior to running the CF update, it is recommended to run the following task: `<profile_root>/bin/osgiCfgInit.sh|bat`

!!!note "Optional note"
    To skip regeneration of the profile template, add the following flag to the CF update command: `applyCF.sh -Dskip.profile.template.update=true`<br><br>If an updated template is needed at a later time, this command can be run to do so at any time: `ConfigEngine.sh cf-create-profile-templates`

1.  Ensure the `nodeagent` and HCL Portal servers are stopped on the profile you intend to upgrade. The Deployment Manager must be started.
2.  On the Farm Master Server execute the following command from within the path of the profile to configure: If you are installing the CF on an empty portal, see the *Special Considerations* below before running `applyCF`.

    -   Linux: `<profile_root>/PortalServer/bin/applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>`
    -   Windows: `<profile_root>\PortalServer\bin\applyCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>`

    !!!important
        If the `applyCF` command fails for any reason, check the error logs and correct error conditions before re-running.

3.  On the Farm Support Server execute the following command from within the path of the profile to configure.

**Important Notes:**

-   If you are applying CF200 to fix an SSRF security vulnerability, ensure that you run the following command:

    ```
    ./ConfigEngine.sh delete-outbound-http-connection-config -DOutboundProfileType=system -DConfigFileName=/opt/IBM/WebSphere/PortalServer/base/wp.proxy.config/config/templates/sys.delete.xml
    ```

    where /opt/IBM/WebSphere/PortalServer/ is the installation directory path.

-   If the Farm Support Server only has read-only access to the Portal Binaries use the `-DSharedBinaries=true` flag with the `applyCF` command:

    -   Linux: `<profile_root>/PortalServer/bin/applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>`
    -   Windows: `<profile_root>\PortalServer\bin\applyCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>`

    !!!important
        If the `applyCF` command fails for any reason, check the error logs and correct error conditions before re-running.


## Special Consideration for empty portals

If you are installing the CF on an empty portal then extra steps are required to avoid upgrade errors.

1.  If you have created any custom content on top of the empty portal, you must first use XMLAccess to export the Portal content. From the `wp_profile_root/PortalServer/bin` directory run:

    ```
    xmlaccess.bat/sh -user Portal_admin_user -password Portal_admin_password -url http://<myhost>:<port>/wps/config -in <Portal home>/doc/xml-samples/Export.xml -out result.xml
    ```

    Then, upgrade the portal profile to the new CF level. Because many of the expected artifacts will not exist in an empty portal, you must define the `isEmptyPortal` property when performing this step:

    -   Linux: `<profile_root>/PortalServer/bin/applyCF.sh -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>`
    -   Windows: `<profile_root>\PortalServer\bin\applyCF.bat -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>`

    !!!important
        If the applyCF command fails for any reason, check the error logs and correct error conditions before continuing. Following a successful run of the applyCF script, re-run the empty-portal task to remove Portal artifacts that were reintroduced with the CF, as these may cause runtime errors.
        -   Linux: `<profile_root>/ConfigEngine/ ./ConfigEngine.sh empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>`
        -   Windows: `<profile_root>/ConfigEngine/ ConfigEngine.bat empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>`

2.  If you exported custom content in step #1 above, you can now use XMLAccess to reimport that content. From the `wp_profile_root/PortalServer/bin` directory run:

    ```
    xmlaccess.bat/sh -user <Portal_admin_user> -password <Portal_admin_password> -url http://<myhost>:<port>/wps/config -in result.xml -out importResults.xml
    ```


## Restoring IP traffic (Required only if following the 24x7 single cluster upgrade)

-   If you are using IP sprayers for load balancing, reconfigure the IP sprayers to restore traffic to the upgraded node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to restore traffic to the upgraded node.

To restore traffic to the upgraded node:

1.  In the Deployment Manager administrative console, click **Servers > Clusters > WebSphere application server clusters > cluster_name > Cluster members** to obtain a view of the collection of cluster members.
2.  Locate the cluster member you upgraded and change the value in the Configured weight column back to the original value.
3.  Click **Update** to apply the change.

If you previously disabled automatic propagation of the Web server(s), re-enable it now using the Deployment Manager administration console by going to **Servers > Server Types > Web Servers > web_server_name > Plug-in Properties** and checking **Automatically propagate plug-in configuration file**. If you are not using automatic generation and propagation for the Web server plug-in, manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.

## Upgrading additional nodes

There are several different methods to install the cumulative fix, and they are:

-   Use a Graphical User Interface (GUI)
-   Use a command line
-   Use silent mode installation
-   Use console mode installation

Start with the step *Stopping IP traffic for additional nodes* then choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the Additional configuration steps.

!!!note
    Do not attempt to upgrade additional nodes until after completing the upgrade of the primary node. The update for the primary must be performed and completed before the upgrade of any additional nodes. Additional node upgrades can be performed sequentially or in parallel. Update the additional nodes according to the following instructions. When instructed to stop or start the HCL Portal server, stop or start all Portal server instances including vertical cluster members on the node.

## Stopping IP traffic for additional nodes (Required only if following the 24x7 single cluster upgrade)

-   If you are using IP sprayers for load balancing to the cluster members, reconfigure the IP sprayers to stop routing new requests to the Portal cluster member(s) on this node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to stop traffic to the node.

To stop traffic to the node:

1.  In the Deployment Manager administrative console, click **Servers > Clusters > WebSphere application server clusters > cluster_name > Cluster members** to obtain a view of the collection of cluster members.
2.  Locate the cluster member you are upgrading and change the value in the Configured weight column to zero. NOTE: Record the previous value to restore the setting when the upgrade is complete.
3.  Click **Update** to apply the change.

Note that the web server plug-in will check periodically for configuration updates based on the value of **Refresh Configuration Interval** property for the Web server plug-in (default value is 60 seconds). You can check this value on the Deployment Manager administrative console by selecting **Servers > Server Types > Web Servers > web_server_name > Plug-in Properties**. Once automatic plug-in generation and propagation is disabled, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.

## Use a Graphical User Interface on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `(wp_profile)/bin directory` and again from the `cw_profile>/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Launch the IBM Installation Manager that was used to install HCL Portal 8.5.
3.  Using Installation Manager, click **File > Preferences**.
4.  Go to the **Repositories** panel and click **Add Repository**.
5.  Navigate to the `repository.config` file mentioned earlier and select it.
6.  Select **Update** and follow the prompts to update HCL Portal.
7.  After installation completes, proceed with the *Additional configuration steps on additional nodes*.


## Use a command line on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `(wp_profile)/bin directory` and again from the `cw_profile>/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the **eclipse/tools** sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  If you are installing the cumulative fix on HCL Portal Express, skip to step 5. Otherwise, run the following command to launch the installation program of Installation Manager. Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl install com.ibm.websphere.PORTAL.SERVER.v85
    -repositories <fullpath/to/repository.config> 
    -installationDirectory <portal_server_root> 
    -acceptLicense
    ```

    For Windows:

    ```
    imcl.exe install com.ibm.websphere.PORTAL.SERVER.v85 
    -repositories <fullpath/to/repository.config> 
    -installationDirectory <portal_server_root> 
    -acceptLicense
    ```

4.  HCL Portal Express only: Run the following command to launch the installation program of Installation Manager\). Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl install com.ibm.websphere.PORTAL.EXPRESS.v85 
    -repositories <fullpath/to/repository.config> 
    -installationDirectory <portal_server_root> 
    -acceptLicense
    ```

    For Windows:

    ```
    imcl.exe install com.ibm.websphere.PORTAL.EXPRESS.v85
    -repositories <fullpath/to/repository.config> 
    -installationDirectory <portal_server_root> 
    -acceptLicense
    ```

5.  After installation completes, proceed with the *Additional configuration steps on additional nodes*.

## Use silent mode installation on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `(wp_profile)/bin` directory and again from the `(cw_profile)/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file. You can also record a response file to use to install the fix in silent mode. Do note that the feature set listed in your response file must match the feature set you have installed. You cannot add or remove features during the cumulative fix update. The feature set listed in the sample response file is: `features='ce.install,portal.binary,portal.profile`. If you do not have any profiles on this node (because you are in the process of migration from a previous version of HCL Portal, or installing an additional node for a cluster, or creating multiple profiles, or you originally installed HCL Portal Version 8.5 as a binary install), then you should remove the 'portal.profile' feature from the **features='ce.install,portal.binary'** list.

4.  Run the following command to install in silent mode:

    ```
    imcl -acceptLicense -input <Full_path_to_your_response_file> -log <Full_Path_to_a_log_file> -showProgress
    ```

5.  After installation completes, proceed with the *Additional configuration steps on additional nodes*.

## Use Console Mode installation on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the `(wp_profile)/bin` directory and again from the `(cw_profile)/bin` directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the `(dmgr)/bin` directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the `eclipse/tools` sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Run the command to start the IBM Installation Manager in console mode.

    -   For Linux: `/imcl  -c`
    -   For Windows: `imcl.exe -c`

4.  Complete the following steps to add the repositories.
5.  Select **Update** and follow the prompts to update HCL Portal.
6.  After installation completes, proceed with the *Additional configuration steps*.

To add the repositories:

1.  Enter P to go to the **Preferences** menu.
2.  Enter 1 to go to the **Repositories** menu.
3.  Enter D to add repositories.
4.  Type the path for your HCL Portal Version 8.5 CF repository file.
5.  Enter A to apply your repositories and return to the **Preferences** menu.
6.  Enter R to return to the Main menu.

## Additional configuration steps on additional nodes

If you have any profiles the following configuration steps are mandatory.

If you do not have any profiles at this point (because you are in the process of migration from a previous version of HCL Portal), no additional configuration steps are necessary and you can continue with the *Restoring IP traffic steps* described below.

!!!note
    The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

Linux or Windows: Use the following commands to update all profiles. These steps must be repeated for each profile, if multiple profiles exist. All cluster members and all profiles that share the same Portal installation directory \(multiple profile option) must be updated to the same level to complete the CF installation.

!!!note "Additional notes"
    -   If a remote search server is used within this environment, it should be started before running the following commands.
    -   Also, if a WAS update has occurred prior to running the CF update, it is recommended to run the following task: `<profile_root>/bin/osgiCfgInit.sh|bat`

!!!note "Optional note"
    To skip regeneration of the profile template, add the following flag to the CF update command. For example: `applyCF.sh -Dskip.profile.template.update=true`. If an updated template is needed at a later time, this command can be run to do so at any time, for example: `ConfigEngine.sh cf-create-profile-templates`.

1.  Ensure the nodeagent and HCL Portal servers are stopped on the profile you intend to upgrade. The Deployment Manager must be started.
2.  Execute the following command from within the path of the profile to configure. Do note that if you are installing the CF on an empty portal, see the *Special Considerations* below before running `applyCF`:

    -   Linux: `<profile_root>/PortalServer/bin/applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>`
    -   Windows: `<profile_root>\PortalServer\bin\applyCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>`

    !!!important
        If the `applyCF` command fails for any reason, check the error logs and correct error conditions before re-running.

3.  Verify that your system is operational by entering the server's URL in a browser and logging in to browse the content.

## Additional configuration: Special Consideration for empty portals

If you are installing the CF on an empty portal then extra steps are required to avoid upgrade errors.

1.  If you have created any custom content on top of the empty portal, you must first use `xmlaccess` to export the Portal content. From the `wp_profile_root/PortalServer/bin` directory, run:

    ```
    xmlaccess.bat/sh -user Portal_admin_user -password Portal_admin_password -url http://<myhost>:<port>/wps/config -in <Portal home>/doc/xml-samples/Export.xml -out result.xml
    ```

2.  Upgrade the portal profile to the new CF level. Because many of the expected artifacts will not exist in an empty portal, you must define the `isEmptyPortal` property when performing this step:

    -   Linux:

        ```
        <profile_root>/PortalServer/bin/applyCF.sh -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    -   Windows:

        ```
        <profile_root>\PortalServer\bin\applyCF.bat -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    !!!important
        If the `applyCF` command fails for any reason, check the error logs and correct error conditions before continuing.

3.  Following a successful run of the `applyCF` script, re-run the empty-portal task to remove Portal artifacts that were reintroduced with the CF, as these may cause runtime errors:
    -   Linux:

        ```
        <profile_root>/ConfigEngine/ ./ConfigEngine.sh empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    -   Windows:

        ```
        <profile_root>/ConfigEngine/ ConfigEngine.bat empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

4.  If you exported custom content in step #1 above, you can now use XMLAccess to reimport that content. From the wp_profile_root/PortalServer/bin directory run:

    ```
    xmlaccess.bat/sh -user <Portal_admin_user>> -password <Portal_admin_password> -url http://<myhost>:<port>/wps/config -in result.xml -out importResults.xml
    ```


## Restoring IP traffic (Required only if following the 24x7 single cluster upgrade)

-   If you are using IP sprayers for load balancing, reconfigure the IP sprayers to restore traffic to the upgraded node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to restore traffic to the upgraded node:
    1.  In the Deployment Manager administrative console, click **Servers > Clusters > WebSphere application server clusters > (cluster_name) > Cluster members** to obtain a view of the collection of cluster members.
    2.  Locate the cluster member you upgraded and change the value in the Configured weight column back to the original value.
    3.  Click **Update** to apply the change.
-   If you are not using automatic generation and propagation for the Web server plug-in, manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.

## Finalizing the upgrade

1.  Re-enable automatic synchronization on all nodes in the cluster if you disabled it earlier.
    -   In the administrative console for the deployment manager, select System administration \> Node agents in the navigation tree.
    -   Click **nodeagent** for the required node.
    -   Click **File Synchronization Service**.
    -   Check the **Automatic Synchronization** check box to enable the automatic synchronization feature and check the **Enable service at server startup** check box to enable the synchronization service at server startup on the File Synchronization Service page and then click **OK**.
    -   Repeat these steps for all remaining nodes.
    -   Click **Save** to save the configuration changes to the master repository.
    -   Select **System administration > Nodes** in the navigation tree.
    -   Select all nodes that are not synchronized, and click on **Synchronize**.
    -   Select **System administration > Node agents** in the navigation tree.
    -   Select all node agents where automatic synchronization has been re-enabled and click **Restart**.
2.  If there is a custom theme that contains a static content WAR and the `com.hcl.portal.resource.blacklist` and `com.hcl.portal.resource.whitelist` context parameters have not yet been added to the web.xml file, Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm) to find detailed information associated with *Security Bulletin: Fix Available for Security Vulnerability in HCL Digital Experience (CVE-2014-8912)*. The changes associated with this security bulletin can cause custom themes to produce a lot of warning messages in the logs resulting in a significant performance penalty. The custom theme must be redeployed before the changes will take effect.
3.  If necessary, redeploy any customizations, including JSPs, to the WCM portlets (if using Web Content Manager), any other portlets, or any other Portal enterprise applications, if these were customized prior to installing the cumulative fix.
4.  If you have set up a remote search server or document conversion server for use with HCL Portal Version 8.5, then whenever you apply a cumulative fix to the portal server, you should also apply the corresponding cumulative fix to the remote server. Refer to the *HCL Portal Version 8.5 combined cumulative fix instructions: remote search* for the details of applying a cumulative fix to the remote server.
5.  Go and log in to [HCL Software Support](https://support.hcltechsw.com/csm) to find documentation to see if Configuration Changes and Options introduced in HCL Digital Experience Version 8.5 Combined Cumulative Fixes applies to your environment.
6.  If using HCL Web Content Manager and have installed any official extensions (such as the WCM Multilingual Solution (MLS) or WCM Social Media Publisher (SMP) then run the following task to update them. This task needs to be run for primary and additional nodes:

    -   Linux:

        ```
        <profile_root>/ConfigEngine/ConfigEngine.sh action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    -   Windows:

        ```
        <profile_root>\ConfigEngine\ConfigEngine.bat action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    The task can be run even if you are not sure if you had the extensions enabled. If you want to check if they were enabled the following tasks can be used:

    -   For MLS, use: `ConfigEngine.sh|bat action-is-wcm-mls-enabled`
    -   For SMP, use: `ConfigEngine.sh|bat action-is-wcm-smp-enabled`

7.  If you brought down the entire cluster to perform the upgrade (not maintaining 24 x 7 on a single cluster), and the automatic plug-in generation and propagation are disabled on your web server Plug-in properties, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.
8.  Clear the browser cache.
9.  Please go to *Recommended Updates for HCL Digital Experience* to review and apply any recommended fixes.
10. Prior to CF07, it was recommended to set the DB2 database configuration parameter "dft_queryopt" to a value of 2 as this was tested to provide the best balance of query optimization time and query execution time for the SQL produced by the JCR. For CF07 or later, this recommendation has been changed to use a value of 5 in conjunction with the testing and changes made to the JCR and JCR schema. This setting is NOT updated automatically within your JCR Database Domain configuration as part of the CF07 (or later) upgrade. This can be done manually by customers by executing the following SQL against the JCR Domain Database:

    ```
    db2 update db cfg for JCRDBNAME using DFT_QUERYOPT 5
    ```

    Or it can also be done by running the following Config Engine Task:

    ```
    configure-jcr-db2-dft-queryopt
    ```


## Before you begin roll back

!!!note
    The steps in these sections for rolling back the cumulative fix describe how to roll back from a successful update to a previous level. However, rolling back from a failed update does not guarantee return to a dependable state. When an update fails, it is advised that you fix the cause of the failure and try again for a successful update; to return to a previous level, you must depend on a system and database backup and restore.

!!!note
    Versions of Portal prior to CF12 do not support JDK 8. Therefore, if JDK 8 has been enabled in CF12 or later, the `managesdk` command must be used to switch back to JDK 7 or 7.1 before performing a rollback to CF11 or earlier.

## Limitations in CF rollback

-   Changing the server context root after upgrading is an unsupported rollback path. To roll back after changing the context root, you must first change the server context root to the values of the previous version.
-   When rolling back a CF install, if you have configured an empty context root you cannot roll back to a CF level that does not support the empty context root capability. For instance, if you have applied CF08 and have configured an empty context root you cannot rollback to CF07. If you have applied CF09 and have configured an empty context root you can roll back to CF08 but you would not be able to roll back if your previous CF level was CF07 or prior.
-   Configuring HCL Portal from a stand-alone environment to a clustered environment after upgrading is an unsupported rollback path.

## Ensure wkplc properties files are correct for rollback

The HCL Portal rollback will run several ConfigEngine scripts. These scripts depend on the `wkplc.properties` being up to date and accurate on each node in the cluster, particularly with the password properties. If you are using multiple profiles, verify that the information in each profile is correct. These steps need to be performed on all nodes.

1.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc.properties file and ensure the following values are set correctly:
    -   `WasRemoteHostName=<the hostname of your Dmgr>`
    -   `WasSoapPort=<the soap port of your Dmgr>`
    -   `WasUserid=<your WAS admin user>`
    -   `WasPassword=<your WAS admin pwd>`
    -   `PortalAdminId=<your Portal Admin ID>`
    -   `PortalAdminPwd=<your Portal Admin password>`
    -   `WpsHostName=<Your Portal hostname>`
    -   `WpsHostPort=<The port you use to access Portal>`
    -   `WpsContextRoot=<your Portal context root>`
2.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc\_dbdomain.properties file and ensure the following values are set correctly:
    -   `release.DbPassword=<your database user password`
    -   `community.DbPassword=<your database user password>`
    -   `customization.DbPassword=<your database user password>`
    -   `jcr.DbPassword=<your database user password`
    -   `likeminds.DbPassword=<your database user password>`
    -   `feedback.DbPassword=<your database user password>`
3.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc\_comp.properties file and ensure the following values are set correctly:
    -   `XmlAccessHost=<your Portal hostname>`
    -   `XmlAccessPort=<the port you use to access Portal>`

## Update process for CF rollback (Linux and Windows)

The update process removes plain text passwords from the `wkplc*.properties` files. To keep these passwords in the properties files, include the following line in the wkplc.properties file: `PWordDelete=false`.

**Disabling automatic synchronization and stopping the node agents for rollback:** Ensure that automatic synchronization is disabled and that all node agents are stopped for all Portal clusters in the cell. When the automatic synchronization is enabled, the node agent on each node automatically contacts the deployment manager at startup and at every synchronization interval to attempt to synchronize the node's configuration repository with the master repository managed by the deployment manager.

1.  In the administrative console for the deployment manager, select **System administration > Node agents** in the navigation tree.
2.  Click **nodeagent** for the required node.
3.  Click **File Synchronization Service**.
4.  Uncheck the **Automatic Synchronization** check box and uncheck the **Enable service at server startup** check box on the **File Synchronization Service** page to disable the automatic synchronization feature and synchronization service at server startup, and then click **OK**.
5.  Repeat these steps for all other nodes to be downgraded.
6.  Click **Save** to save the configuration changes to the master repository.
7.  Select **System administration > Nodes** in the navigation tree.
8.  Select all nodes that are not synchronized, and click on **Synchronize**.
9.  Select **System administration > Node agents** in the navigation tree.
10. For the primary node and all additional nodes in all Portal clusters in the cell, select the node agents and click **Stop**. If you do not stop the node agents the cumulative fix configuration might fail.

## Steps to roll back the Primary node

There are several different methods to roll back the cumulative fix, and they are:

-   Use a Graphical User Interface (GUI) to roll back
-   Use a command line roll back
-   Use silent mode roll back
-   Use console mode roll back

Start with the step *Stopping IP traffic for roll back* then choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the *Post Rollback Steps*.

!!!note
    Do not attempt to combine the steps for primary and secondary nodes. The roll back must be performed first on the primary node and then on the additional nodes, according to the following instructions.

## Stopping IP traffic for roll back (Required only if following the 24x7 single cluster roll back)

-   If you are using IP sprayers for load balancing to the cluster members, reconfigure the IP sprayers to stop routing new requests to the Portal cluster member(s) on this node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to stop traffic to the node:

    1.  In the Deployment Manager administrative console, click **Servers > Clusters > WebSphere application server clusters > cluster_name > Cluster members** to obtain a view of the collection of cluster members.
    2.  Locate the cluster member you are downgrading and change the value in the Configured weight column to zero. Do record the previous value to restore the setting when the downgrade is complete.
    3.  Click **Update** to apply the change.
    Note that the web server plug-in will check periodically for configuration updates based on the value of **Refresh Configuration Interval** property for the Web server plug-in (default value is 60 seconds). You can check this value on the Deployment Manager administrative console by selecting **Servers > Server Types > Web Servers > web_server_name > Plug-in Properties**. If automatic propagation of the plug-in configuration file is enabled on the web server(s) disable it from the Deployment Manager administrative console by going to **Servers > Server Types > Web Servers > web_server_name > Plug-in Properties** and unchecking **Automatically propagate plug-in configuration file**. Once automatic plug-in generation and propagation is disabled, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.


## Use a Graphical User Interface to roll back (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all` 
    -   Windows: `serverStatus.bat -all `

2.  Launch the IBM Installation Manager that was used to install HCL Portal Version 8.5.
3.  Select **Roll Back** on the Installation Manager main window and follow the prompts to roll HCL Portal back to the desired level.
4.  After rollback completes, proceed with the *Post Rollback Steps*.

## Use a command line to roll back (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all` 
    -   Windows: `serverStatus.bat -all `

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  If you are rolling back the cumulative fix on HCL Portal Express, skip to Step 5. Otherwise, run the following command to launch the installation program of Installation Manager. Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces. 

    For Linux:

    ```
    ./imcl rollback com.ibm.websphere.PORTAL.SERVER.v85 
    	-installationDirectory <portal_server_root>
    ```

    For Windows:

    ```
    imcl.exe rollback com.ibm.websphere.PORTAL.SERVER.v85
    	-installationDirectory <portal_server_root>
    ```

4.  HCL Portal Express only: Run the following command to launch the installation program of Installation Manager. Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl rollback com.hcl.websphere.PORTAL.EXPRESS.v85 
    	-installationDirectory <portal_server_root>
    ```

    For Windows:

    ```
    imcl.exe rollback com.ibm.websphere.PORTAL.EXPRESS.v85
    	-installationDirectory <portal_server_root>
    ```

5.  After roll back completes, proceed with the *Post Rollback Steps*.

## Use silent mode to roll back (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all` 
    -   Windows: `serverStatus.bat -all `

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file.
4.  Run the following command to roll back in silent mode:

    ```
    imcl -input <Full_path_to_your_response_file> -log <Full_Path_to_a_log_file> -showProgress
    ```

5.  After roll back completes, proceed with the *Post Rollback Steps*.

## Use Console Mode to roll back (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all` 
    -   Windows: `serverStatus.bat -all `

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Run the command to start the IBM Installation Manager in console mode.

    -   For Linux: `./imcl  -c`
    -   For Windows: `imcl.exe -c` 

4.  Select **Roll back** and follow the prompts to roll back HCL Portal.
5.  After installation completes, proceed with the *Post Rollback Steps*.

## Post Rollback Steps (Linux or Windows)

Use the following commands to roll back all profiles. These steps must be repeated for each profile, if multiple profiles exist. All cluster members and all profiles that share the same Portal installation directory (multiple profile option) must be updated to the same level to complete the CF installation.

!!!note
    The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

!!!note
    If a remote search server is used within this environment, it should be started before running the following commands.

1.  Ensure the `nodeagent` and `HCL Portal and HCL Web Content Manager` servers are stopped on the profile you intend to rollback. The Deployment Manager must be started.
2.  Run the following command from within the path of the profile to configure. Do note that if you are rolling back the CF on an empty portal then many of the expected artifacts will not exist and the `rollbackCF` command will fail. In this case you must define the `isEmptyPortal` property on the command line.

    For example:

    ```
    rollbackCF.sh -DisEmptyPortal=true
    ```

    -   Linux:

        ```
        <profile_root>/PortalServer/bin/rollbackCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    -   Windows:

        ```
        <profile_root>\PortalServer\bin\rollbackCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    !!!important
        If the `rollbackCF` command fails for any reason, check the error logs and correct error conditions, then stop `WebSphere_Portal` before re-running.

3.  If you previously customized any configuration files in the `wp_profile_root/PortalServer/config` directory, check to see if rolling back the cumulative fix affected those files by restoring a version of the files that was saved when the cumulative fix was originally installed. If it did affect the files, you must perform the same customization on the restored version of each file.
4.  Verify that your system is operational by entering the server's URL in a browser and logging in to browse the content.

## Restoring IP traffic after rollback (Required only if following the 24x7 single cluster roll back)

-   If you are using IP sprayers for load balancing, reconfigure the IP sprayers to restore traffic to the downgraded node.
-   If you are using the web server plug-in for load balancing, perform the following steps to restore traffic to the downgraded node:
    1.  In the Deployment Manager administrative console, click **Servers > Clusters > WebSphere application server clusters > (cluster_name) > Cluster members** to obtain a view of the collection of cluster members.
    2.  Locate the cluster member you downgraded and change the value in the Configured weight column back to the original value.
    3.  Click **Update** to apply the change. If you previously disabled automatic propagation of the web server(s), re-enable it now using the Deployment Manager administration console by going to **Servers > Server Types > Web Servers > (web_server_name) > Plug-in Properties** and checking **Automatically propagate plug-in configuration file**. If you are not using automatic generation and propagation for the Web server plug-in, manually generate and/or propagate the `plugin-cfg.xml` file to the web servers.

## Steps to roll back additional nodes

There are several different methods to roll back the cumulative fix on additional nodes, and they are:

-   Use a Graphical User Interface (GUI) to roll back on additional nodes
-   Use a command line roll back on additional nodes
-   Use silent mode roll back on additional nodes
-   Use console mode roll back on additional nodes

Start with the step *Stopping IP traffic for roll back for additional nodes* then choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the *Post Rollback Steps on additional nodes*.

!!!note
    Do not attempt to roll back additional nodes until after completing the roll back of the primary node. The roll back for the primary must be performed and completed before the roll back of any additional nodes. Additional node roll backs can be performed sequentially or in parallel. Roll back the additional nodes in accordance with the following instructions.

## Stopping IP traffic for roll back for additional nodes (Required only if following the 24x7 single cluster roll back)

-   If you are using IP sprayers for load balancing to the cluster members, reconfigure the IP sprayers to stop routing new requests to the Portal cluster member(s) on this node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to stop traffic to the node:

    1.  In the Deployment Manager administrative console, click **Server > Clusters > WebSphere application server clusters > (cluster_name) > Cluster members** to obtain a view of the collection of cluster members.
    2.  Locate the cluster member you are downgrading and change the value in the Configured weight column to zero. Record the previous value to restore the setting when the downgrade is complete.
    3.  Click **Update** to apply the change.
    Note that the web server plug-in will check periodically for configuration updates based on the value of **Refresh Configuration Interval** property for the Web server plug-in (default value is 60 seconds). You can check this value on the Deployment Manager administrative console by selecting **Servers > Server Types > Web Servers > (web_server_name) > Plug-in Properties**. Once automatic plug-in generation and propagation is disabled, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.


## Use a Graphical User Interface to roll back on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Launch the IBM Installation Manager that was used to install HCL Portal 8.5.
3.  Select **Roll Back** on the Installation Manager main window and follow the prompts to roll HCL Portal back to the desired level.
4.  After roll back completes, proceed with the *Post Rollback Steps on additional nodes*.

## Use a command line to roll back on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  If you are rolling back the cumulative fix on HCL Portal Express, skip to Step 5. Otherwise, run the following command to launch the installation program of Installation Manager. Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces. 

    For Linux:

    ```
    ./imcl rollback com.ibm.websphere.PORTAL.SERVER.v85 
    	-installationDirectory <portal_server_root>
    ```

    For Windows:

    ```
    imcl.exe rollback com.hcl.websphere.PORTAL.SERVER.v85 
    	-installationDirectory <portal_server_root>
    ```

4.  HCL Portal Express only: Run the following command to launch the installation program of Installation Manager. Do note that the commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl rollback com.hcl.websphere.PORTAL.EXPRESS.v85
    -installationDirectory <portal_server_root>
    ```

    For Windows:

    ```
    imcl.exe rollback com.ibm.websphere.PORTAL.EXPRESS.v85 
    -installationDirectory <portal_server_root>
    ```

5.  After roll back completes, proceed with the *Post Rollback Steps on additional nodes*.

## Use silent mode to roll back on additional nodes (available on Windows and Linux operating systems\)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file.
4.  Run the following command to roll back in silent mode:

    ```
    imcl -input <Full_path_to_your_response_file> -log <Full_Path_to_a_log_file> -showProgress
    ```

5.  After roll back completes, proceed with the *Post Rollback Steps on additional nodes*.

## Use Console Mode to roll back on additional nodes (available on Windows and Linux operating systems)

1.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory:
    -   Linux: `./serverStatus.sh -all`
    -   Windows: `serverStatus.bat -all`

2.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\IBM\Installation Manager\eclipse\tools
3.  Run the command to start the IBM Installation Manager in console mode.

    -   For Linux: `./imcl  -c`
    -   For Windows: `imcl.exe -c`

4.  Select **Roll back** and follow the prompts to roll back HCL Portal.
5.  After installation completes, proceed with the *Post Rollback Steps*.

## Post Rollback Steps on additional nodes (For Linux and Windows)

Use the following commands to roll back all profiles. These steps must be repeated for each profile, if multiple profiles exist. All cluster members and all profiles that share the same Portal installation directory (multiple profile option) must be updated to the same level to complete the CF installation.

!!!note
    The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

!!!note
    If a remote search server is used within this environment, it should be started before running the following commands.

1.  Ensure the `nodeagent` and `WebSphere_Portal` servers are stopped on the profile you intend to rollback. The Deployment Manager must be started.
2.  Run the following command from within the path of the profile to configure. Do note that if you are rolling back the CF on an empty portal then many of the expected artifacts will not exist and the `rollbackCF` command will fail. In this case you must define the `isEmptyPortal` property on the command line.

    For example:

    ```
    rollbackCF.sh -DisEmptyPortal=true
    ```

    -   Linux:

        ```
        <profile_root>/PortalServer/bin/rollbackCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    -   Windows:

        ```
        <profile_root>\PortalServer\bin\rollbackCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    !!!important
        If the `rollbackCF` command fails for any reason, check the error logs and correct error conditions, then stop `HCL Portal and HCL Web Content Manager` before re-running.

3.  If you previously customized any configuration files in the wp\_profile\_root/PortalServer/config directory, check to see if rolling back the cumulative fix affected those files by restoring a version of the files that was saved when the cumulative fix was originally installed. If it did affect the files, you must perform the same customization on the restored version of each file.
4.  Verify that your system is operational by entering the server's URL in a browser and logging in to browse the content.

## Restoring IP traffic after roll back for additional nodes (Required only if following the 24x7 single cluster rollback)

-   If you are using IP sprayers for load balancing, reconfigure the IP sprayers to restore traffic to the downgraded node.
-   If you are using the Web server plug-in for load balancing, perform the following steps to restore traffic to the downgraded node:

    1.  In the Deployment Manager administrative console, click **Servers > *Clusters > WebSphere application server clusters > (cluster_name) > Cluster members** to obtain a view of the collection of cluster members.
    2.  Locate the cluster member you downgraded and change the value in the Configured weight column back to the original value.
    3.  Click **Update** to apply the change. If you are not using automatic generation and propagation for the Web server plug-in, manually generate and/or propagate the `plugin-cfg.xml` file to the Web servers.

## Finalizing the rollback

1.  Re-enable automatic synchronization on all nodes in the cluster if you disabled it earlier.
    -   In the administrative console for the deployment manager, select **System administration > Node agents** in the navigation tree.
    -   Click **nodeagent** for the required node.
    -   Click **File Synchronization Service**.
    -   Check the **Automatic Synchronization** check box to enable the automatic synchronization feature and check the **Enable service at server startup** check box to enable the synchronization service at server startup on the File Synchronization Service page and then click **OK**.
    -   Repeat these steps for all remaining nodes.
    -   Click Save to save the configuration changes to the master repository.
    -   Select **System administration > Nodes** in the navigation tree.
    -   Select all nodes that are not synchronized, and click on **Synchronize**.
    -   Select **System administration > Node agents** in the navigation tree.
    -   Select all node agents where automatic synchronization has been re-enabled and click **Restart**.
2.  If necessary, redeploy any customizations, including JSPs, to the WCM portlets (if using HCL Web Content Manager), any other portlets, or any other Portal enterprise applications, if these were customized prior to rolling back the cumulative fix.
3.  If you have set up a remote search server or document conversion server for use with HCL Portal Version 8.5, then whenever you roll back a cumulative fix to the portal server, you should also roll back the corresponding cumulative fix to the remote server. Refer to the *HCL Portal Version 8.5 combined cumulative fix instructions: remote search* for the details of rolling back a cumulative fix to the remote server.
4.  If using HCL Web Content Manager and have installed any official extensions (such as the WCM Multilingual Solution (MLS) or WCM Social Media Publisher (SMP)), then run the following task to update them. This task needs to be run for primary and additional nodes.

    -   Linux:

        ```
        <profile_root>/ConfigEngine/ConfigEngine.sh action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    -   Windows:

        ```
        <profile_root>\ConfigEngine\ConfigEngine.bat action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    The task can be run even if you are not sure if you had the extensions enabled. If you want to check if they were enabled the following tasks can be used.

    -   For MLS, use: `ConfigEngine.sh|bat action-is-wcm-mls-enabled`
    -   For SMP, use: `ConfigEngine.sh|bat action-is-wcm-smp-enabled`

5.  For rollback to CF03 or earlier level only: If the Brightcove integration was enabled perform the following steps:
    -   Uninstall the old Brightcove plugins.
    -   Install the new Brightcove plugins by following the install steps in the *Configuring* topic section to use Brightcove.
6.  For rollback to CF03 or earlier level only: If using Rich Media Edition, perform the following steps:
    -   Uninstall the Rich Media Edition plugins.
    -   Restart Portal Server.
    -   Reinstall the Rich Media Edition plugins.
7.  If you brought down the entire cluster to perform the rollback \(not maintaining 24 x 7 on a single cluster\), and the automatic plug-in generation and propagation are disabled on your web server Plug-in properties, you will need to manually generate and/or propagate the `plugin-cfg.xml` file to the web servers.
8.  Clear the browser cache.


