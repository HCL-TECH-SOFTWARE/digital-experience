# Parameters to customize the release

You can use these parameters to customize the build-initial-release-paa task when you are creating the initial or differential release.

-   **previousPAA**

    Points to a previous PAA file, which is used to create an updated PAA file.

-   **sharedAppResourcesRootDir**

    The directory for shared application resources that are added to the PAA file.

-   **sharedExtResourcesRootDir**

    The directory for the shared/ext resources that are added to the PAA file.

-   **appsToExtract**

    A comma-separated list of applications to extract from the IBM® WebSphere® Application Server and add to the PAA file.

-   **exportWebDavTheme**

    When set to true, this parameter adds WebDAV theme resources to the PAA file.

-   **exportREP**

    When set to true, this parameter adds Resource Environment Provider custom properties to the PAA file. Its default is true.

-   **versionPAA**

    Set to the version number of the PAA file that you created. The default is 1.

-   **minorVersionPAA**

    Set to the minor version number of the PAA file that you created. The default is 0.

-   **destPAADir**

    Writes PAA files to the directory you specify. The default is the system temporary directory.

-   **exportUniquePortalPAA**

    Set to true to export the unique portal resource to the base of the virtual portal. The default is true.

-   **exportSharedPortalPAA**

    Set to true to export the shared resource from the base portal. The default is true.

-   **exportPortalSiteLib**

    Set to true to export the Portal site library that is used by the managed pages feature. The default is true if managed pages is turned on.

-   **exportManagedPages**

    Set to true to export managed pages with XMLAccess. The default is false if managed pages is turned on and true if managed pages is turned off.

-   **exportPAAUrlMappings**

    Set to true to include URL mappings in the PAA file. The default is true.

-   **exportWcmData**

    Set to true to include HCL Web Content Manager content in the PAA file. The default is false.

    **Important:** Use the exportWcmData parameter only for the initial release. Use syndication for your Web Content Manager differential content.

-   **javaoption**

    Add this parameter if you are staging a large set of data. For example, add this string to your command: -javaoption -Xmx2048M. Depending on your system and the amount of data, the -Xmx value might be higher. Use 2048 Mb as a starting value.



**Related information**  


[Staging a virtual portal overview](../deploy/dep_vp.md)

[Creating the differential release](../deploy/dep_diff.md)

