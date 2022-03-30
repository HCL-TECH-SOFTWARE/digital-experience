# Cumulative fix instructions: Farm  9.5

Read the installation instructions to learn how to apply a cumulative fix to a portal farm installation or to roll back the cumulative fix.

## About HCL Portal 8.5 and 9.0 Combined Cumulative Fixes

This cumulative fix can only be applied to an existing functional version of HCL Portal 8.5 and 9.0 with a previous cumulative fix applied.

As of CF14, this cumulative fix can also be applied to either an 8.5 environment above, or on top of a 9.0 level as well.

## Overview

Applying the cumulative fix is a multi-step process. You must first update the product files using IBM Installation Manager, and then you must use the Portal ConfigEngine tool to apply the changes to each profile in your system. The update is not complete until you have performed both steps! Likewise, to roll back a fix, you must first use IBM Installation Manager to restore the older product files and then use ConfigEngine to apply the rollback to each profile.

The procedures below describe these steps in detail.

**Version 9.0 Note:** After CF13 or later is fully installed and Portal runtime is operational, HCL Portal 9.0 can be installed. Visit [HCL Digital Experience 9.0 Product Documentation](../welcome/wp9_welcome.md) for product base documentation on concepts, instructions, procedures, tips to configure, maintain, troubleshoot and use HCL Digital Experience.

**Version 9.5 Note:** After CF17 or later is fully installed and Portal runtime is operational, HCL Portal 9.5 can be installed. Visit [HCL Digital Experience 9.5 Product Documentation](../welcome/wp95_welcome.md) for instructions, procedures, tips to configure, maintain, troubleshoot and use the latest version of HCL Digital Experience.

## Before you begin

**Note:** Unless you are migrating from a previous release or plan to add this node to an existing cluster, you must create your Portal profile before applying the cumulative fix. If you did not do this during the initial installation, you can use the Configuration Wizard to do so now. Portal 8.5 CF12 or later introduces support for JDK8. However, if you plan to use JDK 8 with your profile, you must first create the profile using JDK 7 and then upgrade to JDK 8 after applying the cumulative fix.

**Note:** In Portal 8.5 CF12 or later, the blacklist settings have become more restrictive. For inquiries, go to [HCL Software Support](https://support.hcltechsw.com/csm) page.

## Space Requirements

Ensure that enough disk space is available in the following directories:

-   For all platforms: 2.0 GB in the download directory to download the cumulative fix, 1.5 GB in `Portal_Install_Root`, 1 GB temporary disk space in `(wp_profile_root)`, and 1.66 GB in the shared data space, which is the directory where Installation Manager temporarily stores downloaded files for use during the update.
-   For Solaris: It is recommended that you allocate swap space equal to at least twice your physical RAM to avoid memory errors during the configuration of this cumulative fix.

## Best Practices

Go to the [HCL Software Support](https://support.hcltechsw.com/csm) page for Portal Upgrade Best Practices.

## Syndicator/Subscriber Information

It is recommended that servers utilizing syndication have associated syndicators and subscribers disabled prior to installing the cumulative fixpack.

Otherwise syndication updates that run during install may clash with install modifications and can cause the CF update to fail.

Syndicators and subscribers can be disabled by editing them in the syndication administration portlet. Go to the [Syndicators](../panel_help/wcm_reference_syndicatorfields.html) and [Subscribers](../panel_help/wcm_reference_subscriberfields.html) topic pages in the HCL Digital Experience Version 8.5 product documentation for more information. Syndication should then be re-enabled after the update is complete.

Alternatively, the following ConfigEngine tasks have also been integrated into CF09 or later to globally disable and enable syndication \(These tasks can be used in place of the manual updates linked above:

-   ```
<wp_profile root>/ConfigEngine/ConfigEngine.sh|.bat disable-syndication-auto-scheduler
```

-   ```
<wp_profile root>/ConfigEngine/ConfigEngine.sh|.bat enable-syndication-auto-scheduler
```


## Search Crawler Information

It is recommended that any search crawlers are disabled before applying the CF. If a CF is applied at the same time the crawler is running, this may corrupt the search collection. The search crawler should be restarted after the CF update is complete.

## Backing up the Installation Manager data

Backup the contents of the IBM Installation Manager data directory on the server you are upgrading in the event you lose connection during the upgrade, as this could corrupt the data directory.

The default locations of these directories are:

-   Windows: C:\\ProgramData\\IBM\\InstallationManager
-   Linux root users: /var/ibm/InstallationManager
-   Linux non-root users: /home/\(user id\)/var/ibm/InstallationManager

## Known Issues

Review the [Known issues for combined cumulative fix](ccf_95_known_issues.md) topic page to be aware of any known issues for the HCL Portal Version 9.5 CF releases.

## Review supported hardware/software requirements

For Portal Version 8.5 CF08 or later, the minimum recommended WebSphere Application Server level is at least WAS 8.5.5.6 with the corresponding JDK level applied.

Review the [Supported hardware and software requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) article for this cumulative fix. If necessary, upgrade all hardware and software before applying this cumulative fix, including interim fixes required for WebSphere Application Server.

**Note:** Ensure that the optional WebSphere Application Server feature `EJBDeploy tool for pre-EJB 3.0 modules` is installed.

## Check fixes installed on your system

All temporary or interim fixes on your system must be removed before installing this cumulative fix.

Also check whether the fixes installed on your system are included in the list of fixes provided in this cumulative fix. If you have temporary or interim fixes on your system that are not included in this cumulative fix then contact [HCL Software Support](https://support.hcltechsw.com/csm) for an updated version of those fixes or for more information.

## Ensure `wkplc` properties files are correct

The HCL Portal upgrade will run several ConfigEngine scripts. These scripts depend on the `wkplc.properties` being up to date and accurate, particularly with the password properties. If you are using multiple profiles, verify that the information in each profile is correct.

1.  Edit the wp\_profile root\>/ConfigEngine/properties/wkplc.properties file and ensure the following values are set correctly:
    -   `WasRemoteHostName=<the hostname of your WAS instance>`
    -   `WasSoapPort=<the soap port of your WAS instance>`
    -   `WasUserid=<your WAS admin user>`
    -   `WasPassword=<your WAS admin pwd>`
    -   `PortalAdminId=<your Portal Admin ID>`
    -   `PortalAdminPwd=<your Portal Admin password>`
    -   `WpsHostName=<Your Portal hostname>`
    -   `WpsHostPort=<The port you use to access Portal>`
    -   `WpsContextRoot=<your Portal context root>`
    -   \(For HCL DX 9.5 CF19 and later releases\): `CwUserPwd=xxxxxx (your Config wizard password)`
    -   \(Optional, For HCL DX 9.5 CF202 and later releases\): `skipWoodburnUpdate=true`
2.  Edit the wp\_profile root\>/ConfigEngine/properties/wkplc\_dbdomain.properties file and ensure the following values are set correctly:
    -   `release.DbPassword=<your database user password>`
    -   `community.DbPassword=<your database user password>`
    -   `customization.DbPassword=<your database user password>`
    -   `jcr.DbPassword=<your database user password>`
    -   `likeminds.DbPassword=<your database user password>`
    -   `feedback.DbPassword=<your database user password>`
3.  Edit the wp\_profile root\>/ConfigEngine/properties/wkplc\_comp.properties file and ensure the following values are set correctly:
    -   `XmlAccessHost=<your Portal hostname>`
    -   `XmlAccessPort=<the port you use to access Portal>`
4.  Edit the wp\_profile root\>/ConfigEngine/properties/wkplc\_comp.properties file and ensure the following values are set correctly:
    -   `XmlAccessHost=<your Portal hostname>`
    -   `XmlAccessPort=<the port you use to access Portal>`

**Note:** In a Farm Portal environment, the `WasRemoteHostName` should be the local hostname and the `WasSoapPort` should be the soap port of the HCL Portal server.

**Note:** If your server is configured with database runtime users, for example, `feedback.DbRuntimeUser=<your feedback database runtime user>`, ensure to set their password values correctly as well, for example, in `feedback.DbRuntimePassword=<your feedback database runtime user password>`.

## Update process \(Linux and Windows\)

The update process removes plain text passwords from the wkplc\*.properties files. To keep these passwords in the properties files, include the following line in the wkplc.properties file:

```
PWordDelete=false
```

## Multiple profile considerations

Verify that all of your profiles are at the same level before starting the upgrade or rollback. All profiles that share the same Portal installation directory \(multiple profile option\) must be manually upgraded after the IBM Installation Manager update completes. See the *Additional configuration steps* for details.

## Non-root considerations

In Linux environments, you must install the cumulative fix as the same user which you used to install HCL Portal originally. This could be either root or a non-root user. If you need to use a non-root user, ensure the following conditions are met:

-   If you are installing as a non-root user on Linux, the `umask` setting for your login session must be set to 0022 or better. \(`umask` is a setting that controls what file permissions are set for newly created files and directories. A value of 0022 correspond to permission settings of `(rwxr-xr-x)`.\) If the `umask` is not set appropriately by default, you must set it when you start Installation Manager or when you open a command-line utility to run Installation Manager commands.
-   The non-root user has a `"ulimit - n"` setting of at least 18192. This must be a number and not `"unlimited"`.
-   The non-root user owns the AppServer, PortalServer, ConfigEngine, and Portal profile directories and has read/write access to all files in these directories. Permission settings of `755 (rwxr-xr-x)` are sufficient.
-   Do not use `"sudo"` or `"su"` to install the fix pack. Either use root explicitly or use a non-root user that meets the above conditions.

To open a command-line utility to run Installation Manager commands:

1.  Open a command line window.
2.  Run this command to check your current `umask` setting:

    ```
    umask
    ```

3.  If necessary, run this command to set the `umask`:

    ```
    umask 0022
    ```


## Anti-virus and file indexing software considerations \(Windows only\)

As part of the CF upgrade process, new files will be created in the WebSphere installation directory, as well as the user's temp directory. Anti-viruses and file indexing software \(like Google Desktop\) have been known to lock newly created files as they are being scanned, which can interfere with the upgrade process. We recommend to exclude the WebSphere installation directory and the user's temp directory from being scanned by this software during the upgrade. Or you can stop / disable these tools for the duration of the upgrade, and re-enable them after the upgrade completes.

## Special note for customers using WAS 8.5.5.14

Support for WebSphere Application Server v8.5.5.14 will be added in Portal Cumulative Fix 16. If you need to apply Portal Cumulative Fix 15 or earlier to a WAS v8.5.5.14 installation, you will need to perform an additional manual step during the upgrade.

After running Installation Manager to install the new Portal code but before running the `applyCF.sh` or `applyCF.bat` command to update the Portal profile, perform these steps:

1.  Open a command Window and switch to the ConfigEngine home directory. By default this is:
    -   Linux: /opt/IBM/WebSphere/ConfigEngine
    -   Windows: C:\\IBM\\WebSphere\\ConfigEngine
2.  Make a backup copy of the ConfigEngine script. This file is named ConfigEngine.bat for Windows and ConfigEngine.sh for all other platforms.
3.  Make sure your user has write permissions for the script file and open it in a text editor.
4.  Look for the text `EJBDEPLOY_JAVA_HOME` in the script. If you do not find it, no further action is necessary and you can continue with the installation. If you do find it, delete every line that contains the text `EJBDEPLOY_JAVA_HOME` anywhere in the line. \(There should be 3 such lines in the .sh script and 2 lines in the .bat script.\)
5.  Save the file.

You may now continue with the installation of the Portal CF.

## Download the cumulative fix

If you are installing the cumulative fix using a live repository, then you do not need to download the cumulative fix to your server. If you need to download the cumulative fix, then you can follow these steps.

1.  Download the latest zip file that corresponds to the installation on your system, as shown in this table. You can also find more information about the latest fixes on the [HCL Software page](https://www.hcltechsw.com/wps/portal/about/welcome).

    |Installed Offering|HCL Portal server|
    |Cumulative fix to download|    -   8.5-WP-WCM-Combined-CFPInnnnn-Server-CFnn.zip
    -   8.5-9.0-WP-WCM-Combined-CFPInnnnn-Server-CFnn.zip CF14 or later
|

2.  Create a directory and extract the zip file\(s\) into this directory. Inside the zip file is a readme file, sample response files \(Server only\), and the actual cumulative fix file itself. The cumulative fix files are named as follows, where in represents the CF number associated with this cumulative fix:
    -   WP8500CFnn\_Server.zip \(HCL Portal Server\)
3.  Create a sub-directory and extract the appropriate WP8500CFnn\_ zip file to this directory. The extraction results in a repository.config file that is used by IBM Installation Manager during the update.

## Steps for installing the cumulative fix

There are several different methods to install the cumulative fix, and they are:

-   Use a Graphical User Interface \(GUI\)
-   Use a live repository via the Graphical User Interface
-   Use a command line
-   Use silent mode installation
-   Use console mode installation

Choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the additional configuration steps.

## Use a Graphical User Interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(wp\_profile\)/bin directory and again from the \(cw\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Launch the IBM Installation Manager that was used to install HCL Portal V8.5.
4.  Using Installation Manager, click **File** \> **Preferences**.
5.  Go to the Repositories panel and click **Add Repository**.
6.  Navigate to the repository.config file mentioned earlier and select it.
7.  Select Update and follow the prompts to update HCL Portal.
8.  After installation completes, proceed with the **Additional configuration steps**.

## Use a live repository via the Graphical User Interface \(available on Windows and Linux operating systems for CFs prior to CF17\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(wp\_profile\)/bin directory and again from the \(cw\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Launch the IBM Installation Manager that was used to install HCL Portal V8.5.
4.  Using Installation Manager, click **File** \> **Preferences**.
5.  Go to the Repositories panel and click **Search service repositories during installation and updates**.
6.  Click **Apply**.
7.  Select Update and follow the prompts to update HCL Portal.
8.  After installation completes, proceed with the *Additional configuration steps*.

## Use a command line \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(wp\_profile\)/bin directory and again from the \(cw\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the following command to launch the installation program of IBM Installation Manager.

    **Note:** The commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    -   Linux:

        ```
        ./imcl install com.ibm.websphere.PORTAL.SERVER.v85 -repositories (fullpath/to/repository.config) -installationDirectory (portal_server_root) -acceptLicense
        ```

    -   Windows:

        ```
        imcl.exe install com.ibm.websphere.PORTAL.SERVER.v85 -repositories (fullpath/to/repository.config) -installationDirectory (portal_server_root) -acceptLicense
        ```

5.  After installation completes, proceed with the *Additional configuration steps*.

## Use silent mode installation \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the stopServer command. To see which application servers are active, use the `serverStatus` command from the \(wp\_profile\)/bin directory and again from the \(cw\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file. You can also record a response file to use to install the fix in silent mode. Go to [HCL Software Support](https://support.hcltechsw.com/csm) page for detailed instructions for recording an IBM Installation Manager response file. Note: The feature set listed in your response file must match the feature set you have installed. You cannot add or remove features during the cumulative fix update. The feature set listed in the sample response file is:

    ```
    features='ce.install,portal.binary,portal.profile'
    ```

    If you do not have any profiles on this node \(because you are in the process of migration from a previous version of HCL Portal, or creating multiple profiles, or you originally installed Portal 8.5 as a binary install\), then you should remove the `'portal.profile'` feature from this list:

    ```
    features='ce.install,portal.binary'
    ```

5.  Run the following command to install in silent mode:

    ```
    imcl -acceptLicense -input (Full_path_to_your_response_file) -log (Full_Path_to_a_log_file) -showProgress
    ```

6.  After installation completes, proceed with the *Additional configuration steps*.

## Use Console Mode Interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(wp\_profile\)/bin directory and again from the \(cw\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the command to start the IBM Installation Manager in console mode:
    -   Linux:

        ```
        ./imcl  -c
        ```

    -   Windows:

        ```
        imcl.exe -c
        ```

5.  Complete the following steps to add the repositories:
    1.  Enter P to go to the **Preferences** menu.
    2.  Enter 1 to go to the **Repositories** menu.
    3.  Enter D to add repositories.
    4.  Type the path for your HCL Portal 8.5. CF repository file.
    5.  Enter A to apply your repositories and return to the **Preferences** menu.
    6.  Enter R to return to the Main menu.
6.  Select Update and follow the prompts to update HCL Portal.
7.  After installation completes, proceed with the *Additional configuration steps*.

## Additional configuration steps

If you have any profiles the following configuration steps are mandatory. If you do not have any profiles at this point \(because you are in the process of migration from a previous version of HCL Portal\), no additional configuration steps are necessary and you can continue with the *Post installation steps*.

If you are in the process of a migration, you will need to follow these additional configuration steps after running upgrade-profile for your migrated environment.

**Note:** The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

**Linux and Windows**: Use the following commands to update all profiles. These steps must be repeated for each profile, if multiple profiles exist. All profiles that share the same Portal installation directory \(multiple profile option\) must be at the same level for future upgrades to be applied.

**Note:** If a remote search server is used within this environment, it should be started before running the following commands. Also, if a WAS update has occurred prior to running the CF update, it is recommended to run the following task:

```
(profile_root)/bin/osgiCfgInit.sh|bat 
```

**Note:** To skip regeneration of the profile template, add the following flag to the CF update command: ex.

```
applyCF.sh -Dskip.profile.template.update=true
```

If an updated template is needed at a later time, this command can be run to do so at any time: ex.

```
ConfigEngine.sh
cf-create-profile-templates
```

Ensure the HCL Portal server is stopped on the profile you intend to upgrade.

## On the Farm Master Server

Execute the following command from within the path of the profile to configure:

**Note:** If you are installing the CF on an empty portal, see *Special Considerations* below before running `applyCF`:

-   Linux:

    ```
    (profile_root)/PortalServer/bin/applyCF.sh -DPortalAdminPwd=(password) -DWasPassword=(password)
    ```

-   Windows:

    ```
    (profile_root)\PortalServer\bin\applyCF.bat -DPortalAdminPwd=(password -DWasPassword=(password)
    ```


**Important Notes:**

-   If you are applying CF200 to fix an SSRF security vulnerability, ensure that you run the following command:

    ```
    ./ConfigEngine.sh delete-outbound-http-connection-config -DOutboundProfileType=system -DConfigFileName=/opt/IBM/WebSphere/PortalServer/base/wp.proxy.config/config/templates/sys.delete.xml
    ```

    where /opt/IBM/WebSphere/PortalServer/ is the installation directory path.

-   If the `applyCF` command fails for any reason, check the error logs and correct error conditions before re-running.

## Additional configuration: Special Consideration for empty portals

If you are installing the CF on an empty portal then extra steps are required to avoid upgrade errors.

-   If you have created any custom content on top of the empty portal, you must first use XMLAccess to export the Portal content. From the wp\_profile\_root/PortalServer/bin directory run:

    ```
    xmlaccess.bat/sh -user Portal_admin_user -password Portal_admin_password -url http://<myhost>:<port>/wps/config -in <Portal home>/doc/xml-samples/Export.xml -out result.xml
    ```

-   Upgrade the portal profile to the new CF level. Because many of the expected artifacts will not exist in an empty portal, you must define the `"isEmptyPortal"` property when performing this step:

    -   Linux:

        ```
        <profile_root>/PortalServer/bin/applyCF.sh -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    -   Windows:

        ```
        <profile_root>\PortalServer\bin\applyCF.bat -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    **Important**: If the `applyCF` command fails for any reason, check the error logs and correct error conditions before continuing.

-   Following a successful run of the `applyCF` script, re-run the `empty-portal` task to remove Portal artifacts that were reintroduced with the CF, as these may cause runtime errors.
    -   Linux:

        ```
        <profile_root>/ConfigEngine/ ./ConfigEngine.sh empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    -   Windows:

        ```
        <profile_root>/ConfigEngine/ ConfigEngine.bat empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

-   If you exported custom content in step \#1 above, you can now use XMLAccess to re-import that content. From the wp\_profile\_root/PortalServer/bin directory run:

    ```
    xmlaccess.bat/sh -user <Portal_admin_user> -password <Portal_admin_password> -url http://<myhost>:<port>/wps/config -in result.xml -out importResults.xml
    ```


## Farm Support Server setup

On the Farm Support Server execute the following command from within the path of the profile to configure.

**Note:** If the Farm Support Server only has read-only access to the Portal Binaries use the `-DSharedBinaries=true` flag with the `applyCF` command.

**Note:** If you are installing the CF on an empty portal, see the *Special Considerations* below before running `applyCF`.

-   Linux:

    ```
    <profile_root>/PortalServer/bin/applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```

-   Windows:

    ```
    <profile_root>\PortalServer\bin\applyCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>
    ```


**Important**: If the `applyCF` command fails for any reason, check the error logs and correct error conditions before re-running.

## Additional configuration: Special Consideration for empty portals

If you are installing the CF on an empty portal then extra steps are required to avoid upgrade errors.

-   If you have created any custom content on top of the empty portal, you must first use XMLAccess to export the Portal content. From the wp\_profile\_root/PortalServer/bin directory run:

    ```
    xmlaccess.bat/sh -user Portal_admin_user -password Portal_admin_password -url http://<myhost>:<port>/wps/config -in <Portal home>/doc/xml-samples/Export.xml -out result.xml
    ```

-   Upgrade the portal profile to the new CF level. Because many of the expected artifacts will not exist in an empty portal, you must define the `isEmptyPortal` property when performing this step:

    -   Linux:

        ```
        <profile_root>/PortalServer/bin/applyCF.sh -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    -   Windows:

        ```
        <profile_root>\PortalServer\bin\applyCF.bat -DisEmptyPortal=true -DPortalAdminPwd=<password> -DWasPassword=<password>
        ```

    **Important**: If the `applyCF` command fails for any reason, check the error logs and correct error conditions before continuing.

-   Following a successful run of the `applyCF` script, re-run the empty-portal task to remove Portal artifacts that were reintroduced with the CF, as these may cause runtime errors.
    -   Linux:

        ```
        <profile_root>/ConfigEngine/ ./ConfigEngine.sh empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

    -   Windows:

        ```
        <profile_root>/ConfigEngine/ ConfigEngine.bat empty-portal -DWasPassword=<password> -DPortalAdminPwd=<password>
        ```

-   If you exported custom content in step \#1 above, you can now use XMLAccess to re-import that content. From the wp\_profile\_root/PortalServer/bin directory run:

    ```
    xmlaccess.bat/sh -user <Portal_admin_user> -password <Portal_admin_password> -url http://<myhost>:<port>/wps/config -in result.xml -out importResults.xml
    ```


## Post installation steps

1. If you are running an external web server such as IBM HTTP Server and you are using the WebSphere Application Server automatic generation and propagation of the plug-in, then restart the web server. If you are not using the automatic generation and propagation, then perform the following steps:

-   Regenerate the web server plug-in.
-   Copy the plugin-cfg.xml file to the plugin directory.
-   Restart the web server.

2. If there is a custom theme that contains a static content WAR and the `com.ibm.portal.resource.blacklist` and `com.ibm.portal.resource.whitelist` context parameters have not yet been added to the web.xml file, go to [HCL Software Support](https://support.hcltechsw.com/csm) page to fix security vulnerability. The changes associated with this can cause custom themes to produce a lot of warning messages in the logs resulting in a significant performance penalty. The custom theme must be redeployed before the changes will take effect.

3. If necessary, redeploy any customizations, including JSPs, to the WCM portlets \(if using Web Content Manager\), any other portlets, or any other Portal enterprise applications, if these were customized prior to installing the cumulative fix.

4. Go to [HCL Software Support](https://support.hcltechsw.com/csm) page to see if the Configuration Changes and Options introduced in the HCL Web Content Manager 8.5 Combined Cumulative Fixes apply to your environment.

5. If you modified the permissions on the PortalServer home directory tree to install the cumulative fix as non-root, restore the original permissions.

6. If using Web Content Manager and have installed any official extensions \(such as the WCM Multilingual Solution \(MLS\) or WCM Social Media Publisher \(SMP\)\), then run the following task to update them.

-   Linux:

    ```
    <profile_root>/ConfigEngine/ConfigEngine.sh action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
    ```

-   Windows:

    ```
    <profile_root>\ConfigEngine\ConfigEngine.bat action-update-wcm-extensions -DWasPassword=<password> -DPortalAdminPwd=<password>
    ```


The task can be run even if you are not sure if you had the extensions enabled. If you want to check if they were enabled the following tasks can be used:

-   For MLS, use:

    ```
    ConfigEngine.sh|bat action-is-wcm-mls-enabled
    ```

-   For SMP, use:

    ```
    ConfigEngine.sh|bat action-is-wcm-smp-enabled
    ```


7. If you have set up a remote search server or document conversion server for use with HCL Portal 8.5, then whenever you apply a cumulative fix to the portal server, you should also apply the corresponding cumulative fix to the remote server. Refer to the [HCL Portal 8.5 Combined cumulative fix instructions: remote search](../overview/ccf_95_remote_search.html) for the details of applying a cumulative fix to the remote server.

8. Clear the browser cache.

9. Go to [HCL Software Support](https://support.hcltechsw.com/csm) page for Recommended Updates for HCL Portal and HCL Web Content Manager Version 8.5 to review and apply any recommended Fixes.

10. Prior to CF07, it was recommended to set the DB2 database configuration parameter `"dft_queryopt"` to a value of 2 as this was tested to provide the best balance of query optimization time and query execution time for the SQL produced by the JCR. For CF07 or later, this recommendation has been changed to use a value of 5 in conjunction with the testing and changes made to the JCR and JCR schema. This setting is NOT updated automatically within your JCR Database Domain configuration as part of the CF07 \(or later\) upgrade. This can be done manually by customers by executing the following SQL against the JCR Domain Database:

```
db2 update db cfg for JCRDBNAME using DFT_QUERYOPT 5
```

OR It can also be done by running the following Config Engine Task:

```
configure-jcr-db2-dft-queryopt
```

## Steps for rolling back the cumulative fix

**Note:** The steps in these sections for rolling back the cumulative fix describe how to roll back from a successful update to a previous level. However, rolling back from a failed update does not guarantee return to a dependable state. When an update fails, it is advised that you fix the cause of the failure and try again for a successful update; to return to a previous level, you must depend on a system and database backup and restore.

**Note:** Versions of Portal prior to CF12 do not support JDK 8. Therefore, if JDK 8 has been enabled in CF12 or later, the `managesdk` command must be used to switch back to JDK 7 or 7.1 before performing a rollback to CF11 or earlier.

## Limitations in CF rollback

1.  Changing the server context root after upgrading is an unsupported rollback path. To roll back after changing the context root, you must first change the server context root to the values of the previous version.
2.  When rolling back a CF install, if you have configured an empty context root you cannot roll back to a CF level that does not support the empty context root capability. For instance, if you have applied CF08 and have configured an empty context root you cannot rollback to CF07. If you have applied CF09 and have configured an empty context root you can roll back to CF08 but you would not be able to roll back if your previous CF level was CF07 or prior.
3.  Configuring HCL Portal from a stand-alone environment to a clustered environment after upgrading is an unsupported rollback path.

## Before you begin rollback

1.  The HCL Portal rollback scripts depend on the `wkplc.properties` being up to date and accurate, particularly with the password properties. If you are using multiple profiles, verify that the information in each profile is correct.
2.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc.properties file and ensure the following values are set correctly:

    -   `WasRemoteHostName=<the hostname of your WAS instance>`
    -   `WasSoapPort=<the soap port of your WAS instance>`
    -   `WasUserid=<your WAS admin user>`
    -   `WasPassword=<your WAS admin pwd>`
    -   `PortalAdminId=<your Portal Admin ID>`
    -   `PortalAdminPwd=<your Portal Admin password>`
    -   `WpsHostName=<Your Portal hostname>`
    -   `WpsHostPort=<The port you use to access Portal>`
    -   `WpsContextRoot=<your Portal context root>`
    **Note:** In a Farm Portal environment, the `WasRemoteHostName` should be the local hostname and the `WasSoapPort` should be the soap port of the HCL Portal server.

3.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc\_dbdomain.properties file and ensure the following values are set correctly:
    -   `release.DbPassword=<your database user password>`
    -   `community.DbPassword=<your database user password>`
    -   `customization.DbPassword=<your database user password>`
    -   `jcr.DbPassword=<your database user password>`
    -   `likeminds.DbPassword=<your database user password>`
    -   `feedback.DbPassword=<your database user password>`
4.  Edit the <wp\_profile root\>/ConfigEngine/properties/wkplc\_comp.properties file and ensure the following values are set correctly:

    ```
    XmlAccessHost=<your Portal hostname> XmlAccessPort=<the port you use to access Portal> 
    ```


## Update process for CF rollback \(Linux and Windows\)

The update process removes plain text passwords from the `wkplc*.properties` files. To keep these passwords in the properties files, include the following line in the `wkplc.properties` file:

```
PWordDelete=false
```

There are several different methods to roll back the cumulative fix, and they are:

-   Use a Graphical User Interface \(GUI\) to roll back
-   Use a command line roll back
-   Use silent mode roll back
-   Use console mode roll back

Choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the *Post Rollback Steps*.

## Use a Graphical User Interface to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server, stop the web server.
2.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory.
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all 
        ```

3.  Launch the IBM Installation Manager that was used to install HCL Portal Version 8.5.
4.  Select "Roll Back" on the Installation Manager main window and follow the prompts to roll HCL Portal back to the desired level.
5.  After rollback completes, proceed with the *Post Rollback Steps*.

## Use a command line to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server, stop the web server.
2.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory.
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all 
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the following command to launch the installation program of IBM Installation Manager. The commands are shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.
    -   For Linux:

        ```
        ./imcl rollback com.ibm.websphere.PORTAL.SERVER.v85 
        	-installationDirectory <portal_server_root>
        ```

    -   Windows:

        ```
        imcl.exe rollback com.ibm.websphere.PORTAL.SERVER.v85
        	-installationDirectory <portal_server_root>
        ```

5.  After roll back completes, proceed with the *Post Rollback Steps*.

## Use silent mode to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server, stop the web server.
2.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory.
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file.
5.  Run the following command to roll back in silent mode:

    ```
    imcl -input <Full_path_to_your_response_file> -log <Full_Path_to_a_log_file> -showProgress
    ```

6.  After roll back completes, proceed with the *Post Rollback Steps*.

## Use Console Mode to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server, stop the web server.
2.  Stop any active application servers and node agents by using the `stopServer` and `stopNode` commands. To see which application servers are active, use the `serverStatus` command from the <wp\_profile\>/bin directory and again from the <cw\_profile\>/bin directory. If the Deployment Manager is installed on the same server as one of the cluster nodes, you must also stop the Deployment Manager using the `stopManager` command from the <dmgr\>/bin directory.
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the command to start the IBM Installation Manager in console mode.
    -   For Linux:

        ```
        ./imcl  -c
        ```

    -   For Windows:

        ```
        imcl.exe -c
        ```

5.  Select Roll back and follow the prompts to roll back HCL Portal.
6.  After installation completes, proceed with the *Post Rollback Steps*.

## Post Rollback Steps \(Linux and Windows\)

Use the following commands to roll back all profiles. These steps must be repeated for each profile, if multiple profiles exist. All cluster members and all profiles that share the same Portal installation directory \(multiple profile option\) must be updated to the same level to complete the CF installation.

**Note:** The following configuration steps should be run as the user who normally administers the Portal Server, which may or may not be the same user who runs the installation program.

**Note:** If a remote search server is used within this environment, it should be started before running the following commands.

1.  On the Farm Master Server execute the following command from within the path of the profile to configure. Note: If you are rolling back the CF on an empty portal then many of the expected artifacts will not exist and the `rollbackCF` command will fail. In this case you must define the `isEmptyPortal` property on the command line.

    For example:

    ```
    rollbackCF.sh -DisEmptyPortal=true
    ```

    -   Linux:

        ```
        (profile_root/PortalServer/bin/rollbackCF.sh -DPortalAdminPwd=(password) -DWasPassword=(password)
        ```

    -   Windows:

        ```
        (profile_root)\PortalServer\bin\rollbackCF.bat -DPortalAdminPwd=(password) -DWasPassword=(password)
        ```

    **Important**: If the `rollbackCF` command fails for any reason, check the error logs and correct error conditions, then stop HCL Digital Experience before re-running.

2.  On the Farm Support Server, execute the following command from within the path of the profile to configure.

    **Note:** If you are rolling back the CF on an empty portal then many of the expected artifacts will not exist and the `rollbackCF` command will fail. In this case you must define the `isEmptyPortal` property on the command line. Example:

    ```
    rollbackCF.sh -DisEmptyPortal=true 
    ```

    **Note:** If the Farm Support Server only has read-only access to the Portal Binaries use the `-DSharedBinaries=true` flag with the rollbackCF command.

    -   Linux:

        ```
        (profile_root)/PortalServer/bin/rollbackCF.sh -DPortalAdminPwd=(password) -DWasPassword=(password)
        ```

    -   Windows:

        ```
        (profile_root)\PortalServer\bin\rollbackCF.bat -DPortalAdminPwd=(password) -DWasPassword=(password)
        ```

    **Important:** If the `rollbackCF` command fails for any reason, check the error logs and correct error conditions, then stop HCL Digital Experience before re-running.

3.  If you are running an external web server, and you are using the WebSphere Application Server automatic generation and propagation of the plug-in, then restart the web server. If you are not using the automatic generation and propagation, then perform the following steps:
    1.  Regenerate the web server plugin.
    2.  Copy the plugin-cfg.xml file to the plugin directory.
    3.  Restart the web server.
4.  If you previously customized any configuration files in the wp\_profile\_root/PortalServer/config directory, check to see if rolling back the cumulative fix affected those files by restoring a version of the files that was saved when the cumulative fix was originally installed. If it did affect the files, you must perform the same customization on the restored version of each file.
5.  If necessary, redeploy any customizations, including JSPs, to the WCM portlets \(if using HCL Web Content Manager\), any other portlets, or any other Portal enterprise applications, if these were customized prior to rolling back the cumulative fix.
6.  If using HCL Web Content Manager and have installed any official extensions \(such as the WCM Multilingual Solution \(MLS\) or WCM Social Media Publisher \(SMP\)\), then run the following task to update them.

    -   Linux:

        ```
        (profile_root)/ConfigEngine/ConfigEngine.sh action-update-wcm-extensions -DWasPassword=(password) -DPortalAdminPwd=(password)
        ```

    -   Windows:

        ```
        (profile_root)\ConfigEngine\ConfigEngine.bat action-update-wcm-extensions -DWasPassword=(password) -DPortalAdminPwd=(password)
        ```

    The task can be run even if you are not sure if you had the extensions enabled. If you want to check if they were enabled the following tasks can be used:

    -   For MLS, use:

        ```
        ConfigEngine.sh|bat action-is-wcm-mls-enabled
        ```

    -   For SMP, use:

        ```
        ConfigEngine.sh|bat action-is-wcm-smp-enabled
        ```

7.  For rollback to CF03 or earlier level only: If the Brightcove integration was enabled, remove the old Brightcove plugins, then configure HCL Portal to add the new Brightcove plugins.
8.  For rollback to CF03 or earlier level only: If using Rich Media Edition, remove the Rich Media Edition plugin, restart the Portal Server, then configure HCL Portal to add the Rich Media Edition plugins.
9.  If you have set up a remote search server or document conversion server for use with HCL Portal 8.5, then whenever you roll back a cumulative fix to the portal server, you should also roll back the corresponding cumulative fix to the remote server.
10. Clear the browser cache.

**Parent topic:**[Combined Cumulative Fix \(CF\) Installation ](../overview/ccf_strategy95.md)

