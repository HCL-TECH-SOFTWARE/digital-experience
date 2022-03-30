# Update of Woodburn pages optional 

If a user disabled or modified the OOB \(Out Of Box\) sample Woodburn Studio pages when applying a Cumulative Fix \(CF\), the pages may get reset or reactivated.

A new property can be set in `wkplc.properties` during the [applyCF](../overview/ccf_strategy95.md) process.

1.  Edit the \(wp\_profile root\)/ConfigEngine/properties/wkplc.properties file and ensure the following value are set correctly:

    ```
    skipWoodburnUpdate=true
    ```


For more information about applying the Woodburn pages optional parameter, refer to the following Help Center documentation topics:

-   [Cumulative fix instructions: Stand-alone](../overview/ccf_95_standalone.md#)
-   [Cumulative fix instructions: Cluster](../overview/ccf_95_cluster.md#)
-   [Cumulative fix instructions: Farm](../overview/ccf_95_farm.md#)

**Parent topic:**[The Woodburn Studio demo site ](../woodburn_studio/woodburn_studio.md)

