# Cumulative fix instructions: Remote search 

Read the installation instructions to learn how to apply a cumulative fix to a portal remote search installation or to roll back the cumulative fix.

## About Version 8.5 Cumulative Fixes

This cumulative fix can only be applied to an existing functional version of HCL Portal Version 8.5 remote search or document conversion services \(DCS\) server, with or without a previous cumulative fix applied.

## Overview

If you have set up a remote search server or document conversion server for use with Portal Version 8.5, then whenever you apply a cumulative fix to the portal server, you should also apply the corresponding cumulative fix to the remote server. \(Likewise, when you roll back a fix from the portal server, you should roll back the corresponding fix from the remote server.\) There are two ways of doing this, depending on how you installed the server originally.

-   If you originally installed the remote service using manual steps, then you must use manual steps to upgrade it. Update the application on the remote search server by copying updated files from the primary portal server and redeploying them. Refer to the [Updating remote search by using manual steps](../admin-system/update_rssman.md) topic for details on how to set up the application.

## What's new

For a list of the Fixes which have gone into each CF, visit [Combined Cumulative Fix Strategy](new_cf_95.md) for more information.

## Before you begin

## Space Requirements

Ensure that enough disk space is available in the following directories:

-   All platforms: 250 MB in the download directory to download the cumulative fix, 1 MB in the installation directory, and 75 MB in the shared data space, which is the directory where Installation Manager temporarily stores downloaded files for use during the update.

    **Note:** If you configured a user or group other than `wpsadmin` for the security role mapping for the PSEStandalone application, ensure that you add the property `portalAdminUser=<username>` replacing `<username>` with your username e.g. `wpsbind` in the `<searchProfile>/ConfigEngine/properties/wkplc.properties` file before the update.

    If you missed this configuration step, you can still manually re-add the user or groups after the update.


## Best Practices

Go to the [HCL Software Support](https://support.hcltechsw.com/csm) page to read the Portal Upgrade Best Practices.

## Backing up the Installation Manager data

Backup the contents of the IBM Installation Manager data directory on the server you are upgrading in the event you lose connection during the upgrade, as this could corrupt the data directory.

The default locations of these directories are:

-   Windows: C:\\ProgramData\\IBM\\InstallationManager
-   Linux root users: /var/ibm/InstallationManager
-   Linux non-root users: /home/\(user id\)/var/ibm/InstallationManager

## Known Issues

Review the *Known issues for combined cumulative fix* topic page to be aware of any known issues for the HCL Portal Version 8.5 CF releases.

## Review supported hardware/software requirements

For Portal Version 8.5 CF08 or later, the minimum recommended WebSphere Application Server level is at least WAS 8.5.5.6 with the corresponding JDK level applied.

Review the \(supported hardware and software requirements external link\) for this cumulative fix. If necessary, upgrade all hardware and software before applying this cumulative fix, including interim fixes required for WebSphere Application Server.

## Check fixes installed on your system

All temporary or interim fixes on your system must be removed before installing this cumulative fix. Also check whether the fixes installed on your system are included in the list of fixes provided in this cumulative fix. If you have temporary or interim fixes on your system that are not included in this cumulative fix then contact HCL Software Support for an updated version of those fixes or for more information.

## Download the cumulative fix

If you are installing the cumulative fix using a live repository, then you do not need to download the cumulative fix to your server. If you need to download the cumulative fix, then you can follow these steps.

1.  Download the latest zip file that corresponds to the installation on your system. Go to the [HCL Software Support](https://support.hcltechsw.com/csm) page and download the HCL Portal Remote Search CF file 8.5-WP-RemoteSearch-CFPInnnnn-CFnn.zip.
2.  Create a directory and extract the downloaded zip file into this directory. Inside the zip file are a readme file, sample response files, and the actual cumulative fix file itself. The cumulative fix file is named as follows, where **nn** represents the CF number associated with this cumulative fix: WP8500CFnn\_Remote.zip.
3.  Create a sub-directory and extract theWP8500CFnn\_Remote.zip file to this directory. The extraction results in a repository.config file that is used by IBM Installation Manager during the update.

## Steps for installing the cumulative fix

There are several different methods to install the cumulative fix, and they are:

-   Use a Graphical User Interface \(GUI\)
-   Use a live repository via the Graphical User Interface
-   Use a command line
-   Use silent mode installation
-   Use silent mode installation

Choose one method that is available for your system and follow the detailed steps for that option.

## Use a Graphical User Interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Launch the IBM Installation Manager that was used to install HCL Portal Remote Search Version 8.5.
4.  Using Installation Manager, click **File** \> **Preferences**.
5.  Go to the **Repositories** panel and click **Add Repository**.
6.  Navigate to the repository.config file mentioned earlier and select it.
7.  Select **Update** and follow the prompts to update HCL Portal Remote Search.
8.  If you are running an external web server, restart it now.

## Use a live repository via the Graphical User Interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Launch the IBM Installation Manager that was used to install HCL Portal Remote Search Version 8.5.
4.  Using Installation Manager, click **File** \> **Preferences**.
5.  Go to the **Repositories** panel and click **Search service repositories during installation and updates**. Click **Apply**.
6.  Select **Update** and follow the prompts to update HCL Portal Remote Search.
7.  If you are running an external web server, restart it now.

## Use a command line \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux:

        ```
        /opt/IBM/InstallationManager/eclipse/tools
        ```

    -   Windows:

        ```
        C:\Program Files\IBM\Installation Manager\eclipse\tools
        ```

4.  Run the following command to launch the installation program of IBM Installation Manager. NOTE: The command is shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl install com.ibm.websphere.PORTAL.REMOTESEARCH.v85 
    	-repositories <fullpath/to/repository.config> 
    	-installationDirectory <portal_remotesearch_root> 
    	-acceptLicense
    ```

    For Windows:

    ```
    imcl.exe install com.ibm.websphere.PORTAL.REMOTESEARCH.v85 
    -repositories <fullpath/to/repository.config> 
    -installationDirectory <portal_remotesearch_root> -acceptLicense 
    
    ```

5.  If you are running an external web server, restart it now.

## Use silent mode installation \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux: `/opt/IBM/InstallationManager/eclipse/tools`
    -   Windows: `C:\Program Files\IBM\Installation Manager\eclipse\tools`
4.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file. You can also record a response file to use to install the fix in silent mode. Go to the [HCL Software Support](https://support.hcltechsw.com/csm) page for detailed instructions for recording an IBM Installation Manager response file. Note: The feature set listed in your response file must match the feature set you have installed. You cannot add or remove features during the cumulative fix update. The feature set listed in the sample response file is:

    ```
    features='main.ce,main.rs.install,main.dcs.install,main.rs.deploy,main.dcs.deploy'
    ```

    If the server you are applying the fix to is configured only as a remote search server, then you should remove `main.dcs.deploy` from this list.

    -   Example \(Remote Search server only\):

        ```
        features='main.ce,main.rs.install,main.dcs.install,main.rs.deploy'
        ```

    -   Example \(Document Conversion server only\):

        ```
        features='main.ce,main.rs.install,main.dcs.install,main.dcs.deploy'
        ```

5.  Run the following command to install in silent mode:

    ```
    imcl -acceptLicense -input
    <Full_path_to_your_response_file> -log <Full_Path_to_a_log_file> -showProgress
    ```

6.  If you are running an external web server, restart it now.

## Use Console Mode Interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager. By default, this is:
    -   Linux:

        ```
        /opt/IBM/InstallationManager/eclipse/tools
        ```

    -   Windows:

        ```
        C:\Program
        Files\IBM\Installation Manager\eclipse\tools
        ```

4.  Run the command to start the IBM Installation Manager in console mode.

    For Linux:

    ```
    ./imcl -c
    ```

    For Windows:

    ```
    imcl.exe -c
    ```

5.  Complete the following steps to add the repositories:
    -   Enter P to go to the **Preferences** menu.
    -   Enter 1 to go to the **Repositories** menu.
    -   Enter D to add repositories.
    -   Type the path for your HCL Portal Remote Search Version 8.5 CF repository file.
    -   Enter A to apply your repositories and return to the **Preferences** menu.
    -   Enter R to return to the Main menu.
6.  Select **Update** and follow the prompts to update HCL Portal.
7.  If you are running an external web server, restart it now.

**Reminder:** Go to Known Issues in this topic section to be aware of any known issues for HCL Portal CF releases.

## Steps for rolling back the cumulative fix

**Note:** The steps in these sections for rolling back the cumulative fix describe how to roll back from a successful update to a previous level. However, rolling back from a failed update does not guarantee return to a dependable state. When an update fails, it is advised that you fix the cause of the failure and try again for a successful update; to return to a previous level, you must depend on a system and database backup and restore.

There are several different methods to roll back the cumulative fix, and they are:

-   Use a Graphical User Interface \(GUI\) to roll back
-   Use a command line rollback
-   Use silent mode rollback
-   Use console mode rollback

Choose one method that is available for your system. Follow the detailed steps for that option, and then proceed with the *Post Rollback Steps*.

## Use a Graphical User Interface to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory:
    -   Linux:

        ```
        ./serverStatus.sh -all
        ```

    -   Windows:

        ```
        serverStatus.bat -all
        ```

3.  Open a command window and switch to the eclipse/tools sub-directory of Installation Manager.
    -   For Linux: /opt/IBM/InstallationManager/eclipse/tools
    -   For Windows: C:\\Program Files\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the following command to launch the installation program of IBM Installation Manager.

    **Note:** The command is shown here on multiple lines for clarity, but the entire command must be entered on one line. Include quotation marks around file paths that include spaces.

    For Linux:

    ```
    ./imcl rollback com.ibm.websphere.PORTAL.REMOTESEARCH.v85 -installationDirectory
    <portal_remotesearch_root>
    ```

    For Windows:

    ```
    imcl.exe rollback com.ibm.websphere.PORTAL.REMOTESEARCH.v85
    -installationDirectory <portal_remotesearch_root>
    ```

5.  If you are running an external web server, restart it now.

## Use silent mode to roll back \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory.
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
    -   Windows: C:\\ProgramFiles\\IBM\\Installation Manager\\eclipse\\tools
4.  Update the sample response file that is packaged with your cumulative fix level according to the comments in the file.
5.  Run the following command to roll back in silent mode:

    ```
     imcl -input
    (Full_path_to_your_response_file) -log (Full_Path_to_a_log_file) -showProgress
    ```

6.  If you are running an external web server, restart it now.

## Use Console Mode interface \(available on Windows and Linux operating systems\)

1.  If you are running an external web server such as IBM HTTP server, stop the web server.
2.  Stop any active application servers by using the `stopServer` command. To see which application servers are active, use the `serverStatus` command from the \(prs\_profile\)/bin directory.
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
    -   Windows: C:\\ProgramFiles\\IBM\\Installation Manager\\eclipse\\tools
4.  Run the command to start the IBM Installation Manager in console mode:
    -   Linux:

        ```
        ./imcl -c
        ```

    -   Windows:

        ```
        imcl.exe -c
        ```

5.  Select **Roll back** and follow the prompts to roll back HCL Portal Remote Search.
6.  If you are running an external web server, restart it now.

**Parent topic:**[Combined Cumulative Fix \(CF\) Installation ](../overview/ccf_strategy95.md)

