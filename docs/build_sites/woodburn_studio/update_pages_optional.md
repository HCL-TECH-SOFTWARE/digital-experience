# Preventing automatic update of Woodburn Studio pages

If a user has disabled or modified the OOB \(Out Of Box\) sample Woodburn Studio pages, then they may not wish those pages to get reset or reactivated when applying a Cumulative Fix \(CF\).

To prevent this, a new property can be set in `wkplc.properties` during the [applyCF](../../deployment/install/traditional/cf_install/index.md) process, as follows.

1.  Edit the \(wp\_profile root\)/ConfigEngine/properties/wkplc.properties file and ensure the following value are set correctly:

    ```
    skipWoodburnUpdate=true
    ```


For more information about applying the Woodburn Studio pages optional parameter, refer to the following Help Center documentation topics:

-   [Cumulative fix instructions: Stand-alone](../../deployment/install/traditional/cf_install/ccf_95_standalone.md)
-   [Cumulative fix instructions: Cluster](../../deployment/install/traditional/cf_install/ccf_95_cluster.md)
-   [Cumulative fix instructions: Farm](../../deployment/install/traditional/cf_install/ccf_95_farm.md)


