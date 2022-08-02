# Creating the differential release

To update your Portal Application Archive \(PAA\) file, you must create a differential release from your source server.

1.  Develop a release on the staging server. As part of this step, you might have non-managed pages, portlets, themes, skins, and other items.

    **Tip:** Use Syndication to move HCL Web Content Manager content to your production servers.

2.  Open a command line and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following command to create a Portal Application Archive \(PAA\) file for your differential release, including PAA files for all of your virtual portals. Go to *Parameters to customize the release* for parameters to customize your build-initial-release-paa task.

    -   AIX® HP-UX Linux™ Solaris:

        ```
        ./ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DpreviousPAA=initial\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM® i:

        ```
        ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DpreviousPAA=initial\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows™:

        ```
        ConfigEngine.bat build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DpreviousPAA=initial\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS®:

        ```
        ./ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DpreviousPAA=initial\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    **Important:** The directory that you enter for the destPAADir parameter must be an existing directory.

    You can add the following parameters to customize the build-initial-release-paa task.

    -   **javaoption**

        Add this parameter if you are staging a large set of data. For example, add this string to your command, `-javaoption -Xmx2048M`. Depending on your system and the amount of data, the -Xmx value might be higher. Use 2048M as a starting value.

    -   **sharedAppResourcesRootDir**

        The directory for .jar files, classes, and compressed files that are then stored in the shared/app directory.

    -   **sharedExtResourcesRootDir**

        The directory for .jar files, classes, and compressed files that are then stored in the shared/ext directory.

    -   **appsToExtract**

        A comma-separated list of applications to extract from the source environment. For example, you might extract the "wps\_theme,iehs,dojo\_resources" files. They would then be packaged in the PAA file.

    -   **exportWebDavTheme**

        Enter a value of true to download and include the themes.zip file from WebDAV.


Deploy your differential release on the production servers.

**Parent topic:**[Creating and deploying a differential release](../deploy/dep_differential.md)

**Next topic:**[Deploying the differential release](../deploy/dep_deploy_diff.md)

**Related information**  


[Parameters to customize the release](../deploy/dep_cust_paa.md)

[Syndication and staging](../deploy/dep_up_syn.md)

