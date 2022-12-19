# Tika is Enabled as part of Cumulative Fix 95_CF205 Install

Beginning with Digital Experience Cumulative Fix version 95_CF205, Oracle Stellent use for [Search](../../index.md) has been replaced with Apache Tika which is automatically enabled.  This means a change to the out-of-box Digital Experience behavior with an upgrade to CF205. If you are upgrading from CF202 or later, Oracle Stellent files have been automatically backed up to your Digital Experience profile location and you can continue to utilize Oracle Stellent for Search. If you are upgrading from CF201 or earlier, you can [manually backup](../../../../../manage_content/wcm_authoring/dcs/dcs_backup.md) your existing Oracle Stellent files.

!!!note
    If you do not have a backup of the Oracle Stellent files in your DX environment, do not set the configureTika flag to false or run the manual tasks.

To continue using Oracle Stellent for DX Search, ensure that configureTika=false is configured in wkplc.properties before running (or pass  -DconfigureTika=false on the command line when running) applyCF.sh|bat commands.

If you are upgrading a Kubernetes deployment, see [Replacing Document Conversion Services with Apache Tika](../../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_apps.md#replacing-document-conversion-services-with-apache-tika).

## Enabling Manually
If you have run applyCF without setting the configureTika flag to false, or if you decide after enabling Stellent for DX Search that you prefer to use Tika, you can manually re-enable by taking the following steps.

1.  Run the following ConfigEngine task:

    ```
    ConfigEngine.sh|bat update-dcs-to-tika-search
    ```

2.  Restart the WebSphere_Portal server.

    ```
    ./stopServer.sh|bat WebSphere_Portal -user <WAS ADMIN USER> -password <WAS ADMIN USER PASSWORD>
    ```
    ```
    ./startServer.sh|bat WebSphere_Portal
    ```


## Disabling Manually

If you prefer to use Stellent after enabling Tika for use with DX Search, you can manually disable Tika for Search by taking the following steps.

1.  Run the following ConfigEngine task:
    ```
    ConfigEngine.sh|bat update-dcs-to-stellent-search
    ```

2.  Restart the WebSphere_Portal server.
    ```
    ./stopServer.sh|bat WebSphere_Portal -user <WAS ADMIN USER> -password <WAS ADMIN USER PASSWORD>
    ```
    ```
    ./startServer.sh|bat WebSphere_Portal
    ```