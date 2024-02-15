# Configuring the HCL Connections integration

Run the configure-wp-connections-integration task to configure the integration between HCL Connections and HCL Digital Experience.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following command:

    -   AIX®: `./ConfigEngine.sh configure-wp-connections-integration -DICpersonCorrelationAttribute=ibm-entryUuid -DICldapTypeTDS=true -DICversion=5.0 -DICbaseURLunsecured=unsecure_server_name -DICbaseURL=secure_server_name -DICserverType=on-premise -DICblogsHomepageHandle=homepage -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh configure-wp-connections-integration -DICpersonCorrelationAttribute=ibm-entryUuid -DICldapTypeTDS=true -DICversion=5.0 -DICbaseURLunsecured=unsecure_server_name -DICbaseURL=secure_server_name -DICserverType=on-premise -DICblogsHomepageHandle=homepage -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat configure-wp-connections-integration -DICpersonCorrelationAttribute=ibm-entryUuid -DICldapTypeTDS=true -DICversion=5.0 -DICbaseURLunsecured=unsecure_server_name -DICbaseURL=secure_server_name -DICserverType=on-premise -DICblogsHomepageHandle=homepage -DWasPassword=password -DPortalAdminPwd=password`

Log in to the WebSphere® Integrated Solutions Console. Verify that the task parameter values were added to the resource enterprise providers. Go to **Resources > Resource Environment > /****/ > Resource environment providers > WP ConnectionsIntegrationService > Custom properties**. Then, go to **Resources > Resource Environment > /****/ > Resource environment providers > WP PumaStoreService > Custom properties**.


