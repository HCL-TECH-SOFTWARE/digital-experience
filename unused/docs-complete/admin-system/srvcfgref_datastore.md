# Data Store Service 

HCL Portal uses a database to store configuration data for pages, clients, markup, and all other resources. The Data Store Service is responsible for managing the data source of the portal as configured while installing HCL Portal.

In the WebSphere® Integrated Solutions Console, the portal Data Store Service is listed as **WP DataStoreService**.

Under normal circumstances there should not be a need to modify any of the configuration properties in the Data Store service. The Data Store service properties are listed in the following:

-   **scheduler.cleanup.enabled = \(true\)**

    Determines whether deletion of portal pages is performed later by the scheduled cleanup service, or immediately after the user completes the deletion task. This affects the deletion of portal pages and all their dependent resources, such as components and portlet instances. The default is true, which means that deletion of portal pages is delayed and performed by the cleanup service.

    **Note:** Even if this property is set to true and delayed cleanup, deleted pages are no longer visible to users immediately after deletion.

    For details about this property and how to schedule the cleanup service, see the topic about Delayed cleanup of deleted portal pages.

-   **datasource.machineid**

    The value for this property is equivalent to the MAC address of the server. It consists of a string of 12 hexadecimal figures.

    **Note:** Do not change the value for this property.


The following properties are domain specific properties. They are paired. The last three pairs are analog to the first pair. The possible valid values listed under the first property `xxx.datasource.dbms` of the first pair can also be specified for the first property of the following pairs.

**Note:** Do not assign the same schema name twice for database domains that reside in the same database instance. For example, if the release database domain resides in a database named `DB1` and uses the schema `SCHEMA1`, no other domain in the same database instance can use that same schema name `SCHEMA1`. This restriction applies to domains that are in the same database instance only. Using the same schema name more than once in different database instances of the same database management system is no problem.

-   **rel.datasource.dbms = your\_DBMS**

    Use this property to specify the database management system \(DBMS\) for the release database domain. The default value is `DERBY``DB2`. Valid values are listed in the following table. They are also valid for the property `xxx.datasource.dbms properties` in the following three property pairs.

    |DBMS used|DBMS value for `xxx.datasource.dbms` properties|
    |---------|-----------------------------------------------|
    |Apache Derby|`DERBY`|
    |IBM® DB2 Universal Database™ for z/OS®|`DB2_ZOS`|
    |IBM® DB2 Universal Database™ Enterprise Server Edition|DB2|
    |IBM® DB2® Universal Database Express® Edition|DB2|
    |IBM® DB2 Universal Database™ for i|DB2\_ISERIES|
    |Oracle Enterprise Edition|`ORACLE`|
    |Microsoft™ SQL Server Enterprise Edition|`SQLSERVER`|
    |Microsoft™ SQL Server Enterprise Edition|`SQLSERVER2005`|

-   **rel.datasource.schema = \( RELEASE \)**

    Use this property to specify the schema that is used for database objects in the release database domain.

-   **cust.datasource.dbms = your\_DBMS**

    Use this property to specify the database management system for the customization database domain. The default value is `DERBY``DB2Express`. For valid values see the property `rel.datasource.dbms` listed earlier.

-   **cust.datasource.schema = \( CUSTOMIZATION \)**

    Use this property to specify the schema that is used for database objects in the customization database domain.

-   **comm.datasource.dbms = your\_DBMS**

    Use this property to specify the database management system for the community database domain. The default value is `DERBY``DB2Express`. For valid values see the property `rel.datasource.dbms` listed earlier.

-   **comm.datasource.schema = \( COMMUNITY \)**

    Use this property to specify the schema that is used for database objects in the community database domain.

-   **jcr.datasource.dbms = your\_DBMS**

    Use this property to specify the database management system for the JCR database domain. The default value is `DERBY``DB2Express`. For valid values see the property `rel.datasource.dbms` listed earlier.

-   **jcr.datasource.schema = \( JCR \)**

    Use this property to specify the schema that is used for database objects in the JCR database domain.


The following property specifies the **database domain tracking daemon** setting:

-   **domain.tracker.wait = \(1000\)**

    Use this property to specify the time for which the domain tracking daemon waits for a response by the database domain until it polls again. The value is specified in milliseconds. The default value is `1000` \(milliseconds\), which is equivalent to 1 second.

    **Note:** This daemon does not poll continuously, but only in case of errors. Therefore increasing this value will not reduce normal database traffic.


For further information about data sources and their configuration, see the WebSphere Application Server documentation.

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

