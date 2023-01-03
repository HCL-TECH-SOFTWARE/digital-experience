# Creating a Backup of DCS Files

Instructions to back up Document Conversion Services (DCS) files, prior to the replacement of the DCS component that is provided by HCL in August 20, 2022, are provided for customers who are interested to continue to use the Oracle supplied DCS.

[Document Conversion Services](./index.md) components in HCL Digital Experience software have been replaced in HCL DX Cumulative Fix release CF205. HCL Digital Experience has removed the third-party component, which was supplied by Oracle, that provided these capabilities and replaced them with HCL-supported functions. At this point, HCL Digital Experience v8.5, v9 and v9.5 Container Update and CF releases include the HCL supported component. Refer to the following HCL Digital Experience support Knowledge Article: [Replacement of Document Conversion Services component in HCL Digital Experience software for additional information](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0096908){:target="_blank"}.


!!!important
    -   Effective August 20, 2022 the Oracle supplied DCSs are not provided or supported by HCL. Customers continuing to use these components will need to acquire support and updates directly from Oracle.
    -   Effective August 20, 2022 the HCL supplied DCS will be set as the default in Digital Experience CF and Container Update releases. Customers, who are already using the Oracle DCS product, have been provided an option to change the default DCS setting, so that they can use the Oracle supplied DCS services and obtain support directly from Oracle. Customers can use the backup files that are created using the steps outlined below to ensure continuing operations.

## Back up DCS files

Beginning with Digital Experience [CF203](https://help.hcltechsw.com/digital-experience/9.5/overview/new_noncf203.html){:target="_blank"} and [Container Update CF203](../../../whatsnew/cf20/newcf203.md), a backup of DCS task is automatically provided. The backup can be verified in the `<WAS USER HOME\>/PortalServer/config/dcs.bak.zip` file. If using Digital Experience versions prior to CF and Container Update 203, perform a manual backup of the following DCS files:

-   WpsInstallLocation/lwo/prereq.odc/shared/app/Export.jar
-   WpsInstallLocation/lwo/prereq.odc/shared/app/export.cfg
-   WpsInstallLocation/lwo/prereq.odc/shared/app/oiexport/
-   WpsInstallLocation/lwo/prereq.odc/ RemoteSearchInstaller/remotedcs.zip

Steps to back up the DCS files:

1.  Compress the above files into a file called, dcs.bak.zip. If using a Linux/Unix platform, set the file permissions to 755.
2.  Copy the compressed file to the backup location at WasUserHome/PortalServer/config.

## Back up DCS files used in Remote Search

[Digital Experience CF203](https://help.hcltechsw.com/digital-experience/9.5/overview/new_noncf203.html){:target="_blank"} and [Container Update CF203](../../../whatsnew/cf20/newcf203.md) added a Config Engine task, which can be run to manually back up the DCS files that are used to support Remote Search.

Instructions to manually back up DCS files supporting remote search if using a **Digital Experience CF or Container Update release prior to CF203** are as follows:

!!!note
     If using a **Digital Experience 9.5 Container Update release prior to CF203 deployed to Kubernetes platforms**, see specific backup steps outlined in Step 2 in the note, and [step 4](#back-up-dcs-files) below.

-   **Config Engine task to automate the backup of DCS files for Remote Search**

    If using a Digital Experience CF or Container Update release 203 or later, complete the following steps to create a backup of these files to ensure continuing operations.

    1.  Complete an upgrade to Digital Experience CF or Container Update CF203 with RemoteSearch enabled.
    2.  Run the `action-backup-rdcs` ConfigEngine task. This will create a rdcs.bak.zip file containing the Oracle supplied DCS files used in remote DCS operations in the <RemoteSearchProfileLocation\>/config/backup directory.
    **Example:**

    ```
    <RemoteSearchProfileLocation>/ConfigEngine/ConfigEngine.bat/sh action-backup-rdcs
    ```

-   **Manual back up of DCS files for Remote Search**

    To manually back up these files, if using an HCL Digital Experience CF or Container Update release prior to CF203, use the following instructions.

    1.  From a directory with write permissions, extract the following files from your Digital Experience deployment:

        ```
        Extract /WEB-INF/lib/Export.jar, and /WEB-INF/lib/export.cfg from ${PortalRemoteSearchHome}/dcs/wp.dcs.remotedcs/installableApps/dcs.war
        
        ```

        **Example:**

        ```
        unzip -j ${PortalRemoteSearchHome}/dcs/wp.dcs.remotedcs/installableApps/dcs.war WEB-INF/lib/export.cfg
        unzip -j ${PortalRemoteSearchHome}/dcs/wp.dcs.remotedcs/installableApps/dcs.war WEB-INF/lib/Export.jar
        ```

    2.  Make a copy of the $\{OperatingSystem\} directory containing the DCS files supporting remote search.

        **Example:**

        ```
        cp -r {PortalRemoteSearchHome}/dcs/wp.dcs.remotedcs/linux/ .
        ```

        !!! note
            If you have deployed a Digital Experience 9.5 Container Update release to Kubernetes platforms prior to CF203, see [Backup of DCS files supporting remote search on Kubernetes platforms](#back-up-dcs-files), documented in [step 4](#back-up-dcs-files-used-in-remote-search), before continuing.

    3.  Compress the files directory created with contents and files that are created in Steps 1 and 2 above into a zip file as follows: $\{WasUserHome\}/config/backup/rdcs.bak.zip

        **Example:**

        ```
        zip -r ${WasUserHome}/config/backup/rdcs.bak.zip ./linux Export.jar export.cfg
        ```

    4.  Create a backup of DCS files supporting remote search on Kubernetes platforms.

        If your Digital Experience 9.5 Container Update CF203 or prior release is deployed to a Kubernetes platform, the DCS files supporting Remote Search will need to be copied from a Kubernetes container working directory with write access to a local machine.

        **Example:**

        ```
        kubectl cp <POD NAME>:/<CONTAINER WORKING DIRECTORY>/ . -n <NAMESPACE>
        
        zip -r rdcs.bak.zip ./linux Export.jar export.cfg
        
        kubectl cp ./rdcs.bak.zip <POD NAME>:/opt/HCL/AppServer/profiles/prs_profile/config/backup/ -n <NAMESPACE>
        ```

        Administrators should verify that files are backed up successfully to target directories as outlined in the above sections.

-   **Restore DCS files used in Remote Search**

    After August 20, 2022 when the Replacement of DCS in HCL Digital Experience is completed, customers may optionally continue to use the previous version of DCS with direct support from Oracle. To restore DCS for continued use instead of the HCL supplied DCS replacement, complete the following steps.

    !!! note
        If restoring DCS files to a Digital Experience 9.5 Container Update deployment on Kubernetes after August 20, 2022, see instructions in Step 3 below.

    1.  Upgrade to the latest Digital Experience CF or Container Update release as of August 20, 2022, with Remote Search enabled.
    2.  Use the following ConfigEngine task `action-merge-rdcs` to restore the DCS files used in Remote Search that were backed up using the process documented in the above sections. This will merge the backed up DCS files into the current RemoteSearch CF binary tree and ensure continued remote DCS functionality.

        **Example:**

        ```
        <RemoteSearchProfileLocation>/ConfigEngine/ConfigEngine.bat/sh action-merge-rdcs
        ```

    3.  If restoring DCS files supporting Remote Search copied manually to a local directory \(Container Update CF203 and prior releases\) to a Digital Experience 9.5 Container Update deployment on Kubernetes after August 20, 2022, obtain the files extracted to a local directory with write access, completed using instructions in Step 4 above, and copy back to the Digital Experience 9.5 Container Update deployment.

        **Example:**

        ```
        kubectl cp ./rdcs.bak.zip <POD NAME>:/opt/HCL/AppServer/profiles/prs_profile/config/backup/ -n <NAMESPACE>
        ```



