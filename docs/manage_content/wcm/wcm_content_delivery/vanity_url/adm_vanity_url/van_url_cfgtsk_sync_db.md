# Synchronizing the vanity URL database

Vanity URLs are stored as part of the page in the JCR database in the portal page site area of Web Content Manager. For performance reasons, the data is also stored in the HCL Portal database. When the data is modified, the portal synchronizes the data between both sides. However, under certain circumstances it can happen that the data is not synchronized. For such cases, the portal provides a configuration task that synchronizes the data.

For example, if the JCR database on the Web Content Manager side is restored, but the portal database is not restored, the data is not synchronized any more. The configuration task for synchronizing the data is sync-vanityurl-data. It reads the data that is stored in Web Content Manager and updates the HCL Portal database.

-   **Syntax**

    You call the task as follows:

    -   **AIX®**

        `./ConfigEngine.sh sync-vanityurl-data -DPortalAdminPwd=password -DWasPassword=password`

    -   **Linux™**

        `./ConfigEngine.sh sync-vanityurl-data -DPortalAdminPwd=password -DWasPassword=password`

    -   **Windows™**

        `ConfigEngine.bat sync-vanityurl-data -DPortalAdminPwd=password -DWasPassword=password`

-   **Extra parameters:**

    You can specify the following parameters with this task. Each individual parameter requires the prefix -D on the command.

    -   **RunParallel = (false)|true**

        Use this parameter to specify whether you want the task to run with multiple threads or not. If you want the task to run in a single thread, specify the value false. This value is the default value. If you want the task to run with multiple threads, specify the value true. Each thread requires a database connection.

-   **Parameters for virtual portals:**

    If you have virtual portals, the portal applies this configuration task to all virtual portals by default. To limit the task to a specific virtual portal, you identify the virtual portal by adding one of the following parameters to the command. Each individual parameter requires the prefix -D on the command.

    -   **VirtualPortalHost**

        Use this parameter to specify the host name of the virtual portal. For example, the host name can be vp.example.com.

        !!! note
            You can specify the VirtualPortalHost parameter alone only if the host name is unique. If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext parameter.

    -   **VirtualPortalContext**

        Use this parameter to specify the virtual portal context that identifies the virtual portal. For example, the context can be vp1.

-   **Example:**

    ```
    ./ConfigEngine.sh sync-vanityurl-data 
                      -DPortalAdminPwd=password -DWasPassword=password
                      -DVirtualPortalHost=vp.example.com    
    ```



???+ info "Related information:"
    - [Troubleshooting pages](../../../../../build_sites/create_sites/website_building_blocks/pages/wcm_mngpages_trouble.md)
    - [Creating the initial release](../../../../../deployment/manage/staging_to_production/creating_deploying_initial_release/dep_cir.md)
    - [Migration: Enabling managed pages](../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/mig_t_enable_mngpages.md)

