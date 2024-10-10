# Exporting and importing web content libraries

HCL Web Content Manager provides two methods for exporting and importing web content libraries: an export or import that operates on one library, and an export or import that creates a separate copy of a library. With either method, you can export the contents of a web content library to disk and import this data into another web content server. If you're working with a copy of a library, you can also import that library into the same web content server multiple times, resulting in a new library after each import without affecting previous copies. Exporting and importing libraries can be used to make a backup copy of a web content library and can also be used to move data between servers. However, this function cannot be used to send updates, deletes, and moves. It is only suitable for populating new items.

Before you begin, create an empty shared directory to hold the exported web content library. If you move data between servers, both systems must have write access to this directory. In addition, review the following considerations before you export or import web content libraries:

-   **Importing libraries into different versions**

    You can import libraries from a different version of Web Content Manager so long as the version you are importing the library into is later than the version you exported the library from. For example:

    -   you can import a library that is exported from version 6.1.0.1 into version 7.0
    -   you cannot import a library that is exported from version 7.0 into version 6.1.0.1
    Upgrade to the most recent version of each release before you attempt to import libraries between versions. It is not possible to export libraries from releases before 6.0.

-   **Exporting and importing a web content library versus syndication.**

    This feature does not replace the syndication feature. Although this feature can be used to transfer data between servers, it is a manual process and is not meant to be used for regular updates between servers. Syndication is instead used to automatically keep two or more servers synchronized. Also, whereas syndication can be used to send updates, deletes and moves, the import feature is only suitable for populating new items.

-   **Limitations of exporting and importing a web content library.**

    -   Saved versions of items are not exported. Only the current version of each item is exported.
    -   Children are only exported and imported when the parent is successfully exported and imported.
    -   If an item exists on the target server with the same path, name and ID, then the item is overwritten.
    -   Library and item level access controls remain unchanged when a library is exported and imported. You need to run the member fixer tool on the imported library to fix references to missing users and groups.
    -   You cannot import an item if an item on the target server has the same ID but a different parent than the item that is being imported.
    -   Projects are not exported.

-   **Disabling JCR text search.**

    Disable JCR text search indexing on your HCL Portal server before you export or import large libraries to reduce the load on the database during export and import.

    1.  Log in to the WebSphere® Integrated Solutions Console.
    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.

        **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere® Integrated Solutions Console for the deployment manager when you edit configuration properties.

    3.  Change **jcr.textsearch.enabled** to false.

    !!! note
        You must restart your server any time you change these settings.

    After you export and import your library, you must then enable JCR text search again. It can take some time to rebuild the indexes when you re-enable JCR text search indexing.

-   **Exporting and importing large libraries**

    -   When web content libraries are imported, a temporary directory is used to store the library files during the upload process. If the size of the uploaded files exceeds the available disk space for the temporary directory, the import operation fails. When large libraries are exported, ensure that there is sufficient disk space to accommodate the import.
        1.  Log in to the WebSphere® Integrated Solutions Console.
        2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.
        3.  Make sure the location that is specified under **jcr.binaryValueFileDir** has sufficient disk space to accommodate the import.

    -   When you export or import large libraries, you might need to adjust the following settings:
        1.  Log in to the WebSphere® Integrated Solutions Console.
        2.  Click **Servers** \> **Server Types** \> **WebSphere application servers** \> **portal\_server** \> **Container Services** \> **Transaction Service**.
        3.  Change the **total transaction lifetime timeout** and the **maximum transaction timeout** settings to 360 seconds.
        
-   **Personalization components.**

    Personalization rules that are created within a Personalization component are exported and imported along with your web content library.

    If you are using Personalization rules that are created directly in the Personalization portlet, you need to export and import your rules to and from Personalization on the same servers as your web content by using the same process as moving HCL Portal content from a staging system to a production system. Personalization export and import must be run before you export and import web content.

-   **JSP components**

    If you are using JSP components that you must manually copy any related JSP files to and from the same servers that you are exporting and importing to.

## HCLSoftware U learning materials

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, Release Builder / Solution Installer and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [Resetting the web content event log](../wcm_config_reset_event_log.md)
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Staging to production list](../../../../deployment/manage//staging_to_production/overview_of_staging_to_prod/dep_stage_check.md)
    - [WebSphere® Integrated Solutions Console](../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
