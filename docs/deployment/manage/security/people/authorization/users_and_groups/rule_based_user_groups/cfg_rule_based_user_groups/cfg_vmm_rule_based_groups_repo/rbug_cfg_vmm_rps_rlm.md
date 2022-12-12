# Configuring the VMM repository and realm

Run the wp-create-cur, wp-create-cur-custom-property, and wp-update-group-repository-relationship commands to configure the VMM repository and realm.

1.  Open a command prompt and change to the [wp\_profile\_root](../../../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  Run the following task to add the repository configuration to VMM. For information, read the related links section.

    -   AIX® HP-UX Linux™ Solarisz/OS®: ./ConfigEngine.sh wp-create-cur -DWasPassword=yourpassword -Dfederated.cur.id=SoftGroups -Dfederated.cur.adapterClassName=com.ibm.wps.vmm.adapter.softgroups.SoftgroupsAdapter -Dfederated.cur.baseDN=o=softgroups
    -   IBM® i: ConfigEngine.sh wp-create-cur -DWasPassword=yourpassword -Dfederated.cur.id=SoftGroups -Dfederated.cur.adapterClassName=com.ibm.wps.vmm.adapter.softgroups.SoftgroupsAdapter -Dfederated.cur.baseDN=o=softgroups
    -   Windows™: ConfigEngine.bat wp-create-cur -DWasPassword=yourpassword -Dfederated.cur.id=SoftGroups -Dfederated.cur.adapterClassName=com.ibm.wps.vmm.adapter.softgroups.SoftgroupsAdapter -Dfederated.cur.baseDN=o=softgroups

3.  Run the following command to update the repository configuration with custom properties:

    Specify the following attributes on the command line:

    -   **`dataSource`**

        The attribute must point to the correct JNDI name of the previously configured data source for the rule-based groups database.

    -   **`dbSchema`**

        The attribute must declare the database schema that holds the rule-based groups table.

    -   **`dbType`**

        If your database server type is SQLServer, you must declare the attribute `dbType` by specifying `SQLServer` as the value. For all other database server types, you can omit the value.

    -   **Base entry specification**

        You can set the base entry specification that defines the base distinguished name and suffix for rule-based groups to a different value.

    -   **`name`**

        The `name` and the `nameInRepository` must be the same.

    -   AIX HP-UX Linux Solarisz/OS:

        ```
        ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dataSource -Dcur.value=nameofdatasource
        ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbSchema -Dcur.value=yourschema
        ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbType -Dcur.value=yourDBType
        ```

    -   IBM i:

        ```
        ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dataSource -Dcur.value=nameofdatasource
        ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbSchema -Dcur.value=yourschema
        ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbType -Dcur.value=yourDBType
        ```

    -   Windows:

        ```
        ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dataSource -Dcur.value=nameofdatasource
        ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbSchema -Dcur.value=yourschema
        ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=yourpassword -Dcur.id=SoftGroups -Dcur.name=dbType -Dcur.value=yourDBType
        ```

4.  You must enable the cross repository group lookup for the repositories you want to use. To find Groups Entities in the SoftGroups Repository, run the following task:

    -   AIX HP-UX Linux Solarisz/OS: ./ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=SoftGroups
    -   IBM i: ConfigEngine.sh wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=SoftGroups
    -   Windows: ConfigEngine.bat wp-update-group-repository-relationship -DWasPassword=password -Drepository.id=ldapid -Drepository.forgroups=SoftGroups

5.  You can enable a dynacache on the Portal softgroups to help improve performance under high load.

    The dynacache offers improved performance at the tradeoff of stale data that is potentially retrieved from the cache. For example, if groups in the Portal softgroups database are updated then the cache might contain outdated data relative to updated data in the database. Consider the tradeoff of performance versus the need for live data before you implement the following steps.

    1.  Set the time interval in milliseconds for checking for rule updates. The default value is 0, which means with every rule-based user group call a check for rules updates is made. In the following sample, the value is set to 10000 milliseconds.

        -   AIX HP-UX Linux Solarisz/OS: ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=ruleCheckInterval -Dcur.value=10000
        -   IBM i: ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=ruleCheckInterval -Dcur.value=10000
        -   Windows: ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=ruleCheckInterval -Dcur.value=10000

    2.  Set the lifetime of the new cache for Softgroups in seconds. Default value is 3600, which is a lifetime of 3600 seconds or 1 hour. The following sample sets the cache lifetime to 3600 seconds.

        -   AIX HP-UX Linux Solarisz/OS: ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheLifeTime -Dcur.value=3600
        -   IBM i: ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheLifeTime -Dcur.value=3600
        -   Windows: ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheLifeTime -Dcur.value=3600

    3.  Set the size of the cache for Softgroups. The cache size should match the number of expected rule-based user groups that are used in the environment. The following sample sets the cache size to 50.

        -   AIX HP-UX Linux Solarisz/OS: ./ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheSize -Dcur.value=50
        -   IBM i: ConfigEngine.sh wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheSize -Dcur.value=50
        -   Windows: ConfigEngine.bat wp-create-cur-custom-property -DWasPassword=password -Dcur.id=Softgroups -Dcur.name=cacheSize -Dcur.value=50

    4.  In a clustered environment, sync the nodes.

    5.  In a clustered environment, restart the Deployment Manager and nodeagents. Then, restart the Portal Servers.



???+ info "Related information"
    - [Database source configuration](../rbug_dsrc_cfg.md)

