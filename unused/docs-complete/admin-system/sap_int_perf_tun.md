# Performance tuning for Integrator for SAP 

See the following hints and tips that might help improve performance of your Integrator for SAP.

## General considerations

-   Apply the performance tuning documented in the [Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) for your version of HCL Digital Experience.
-   Cache sizes have a direct impact on the memory requirements of HCL Portal, specifically the demands on the Java heap. To determine if your portal has enough memory resources available to handle an additional increase, monitor the usage of caches and the portal memory usage under a heavy workload, before you increase the cache sizes.
-   If you do not use the portlet menu for HCL Portal API portlets, disable it. To do this, proceed as follows:
    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Navigate to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.
    3.  Select **WP ConfigService**.
    4.  Add the following custom property:
        -   Property name: navigation.portletmenu.mode
        -   Value: 0

## Limiting availability of the SAP navigation page for users

Each time a user accesses the SAP navigation page for the first time during an HCL Portal session, HCL Portal sends a request to the SAP NetWeaver Portal. Therefore limit the access to the SAP navigation page to the correct audience, for example, to all or selected SAP users. To perform this task, use the HCL Portal Access Control. This measure limits request volume to the appropriate requests only. For more information about Portal Access Control refer to the topic *Controlling access*in the HCL Portal Version 7.0 product documentation.

## Caches for performance and memory consumption

For tuning purposes, Integrator for SAP provides two portal caches with entries for each integrated SAP portal page and for each logged in user. Set their size and lifetime according to your environment.

-   **com.ibm.wps.integration.sap.NodeCache**

    Content: This cache holds one entry for each integrated page per locale, independent of the user. For example, if your SAP NetWeaver Portal contains a maximum of 500 pages and all your users use one and the same locale, this cache can never exceed 500 entries.

    -   **com.ibm.wps.integration.sap.NodeCache.size = \(1000\)**

        Default size: 1000 entries

    -   **com.ibm.wps.integration.sap.NodeCache.lifetime = \(-1\)**

        Default lifetime: This cache never expires.

-   **com.ibm.wps.integration.sap.ModelCache**

    Content: This cache holds one entry for each logged in user who has access to the SAP navigation. This cache entry is removed on logout by the user.

    If you have only limited memory available, you can use this cache to limit the memory consumption of the SAP navigation integration. However, limiting memory consumption this way might in turn affect performance. Note that if you add pages to SAP NetWeaver Portal, the memory consumption grows accordingly, even if you do not increase this cache size. If you set this cache size too small, performance might decrease.

    -   **com.ibm.wps.integration.sap.ModelCache.size = \(1000\)**

        Default size: 1000 entries

    -   **com.ibm.wps.integration.sap.ModelCache.lifetime = \(-1\)**

        Default lifetime: This cache never expires.


For more information about how to configure HCL Portal caches, read *Cache Manager Service* and *Setting service configuration properties*.

## Ajax Proxy configuration

Set appropriate values in the file proxy-config.xml according to your environment for the maximum number of connections and the number of connections per host. Otherwise, a limitation of available connections can occur.

Set appropriate values for the parameters `socket-timeout` and `retries` . If SAP NetWeaver Portal is not available for some reason, these two parameters limit the length of time that the task spends on the inaccessible connection. For details about the two parameters read*Preparing your system environment and the prerequisites*. For each user who logs in to HCL Portal and who has access rights to the SAP NetWeaver Portal navigation page, HCL Portal tries a connection at least once, depending on the cache settings described in the previous section. If these attempts fail for many users, it can affect the performance of HCL Portal.

For more information about configuring your Ajax Proxy, read *Configuring Outbound HTTP Connections*.

**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

[Preparing your system environment and the prerequisites for Integrator for SAP ](../admin-system/sap_int_prep.md)

[Hints and tips for Integrator for SAP ](../admin-system/sap_int_hint_tip.md)

[Setting service configuration properties ](../admin-system/adsetcfg.md)

[Configuration Service ](../admin-system/srvcfgref_config.md)

[Cache Manager Service ](../admin-system/srvcfgref_cach_mgr.md)

[Configuring outbound HTTP connections ](../dev-portlet/outbhttp_cfg_oh_conns.md)

