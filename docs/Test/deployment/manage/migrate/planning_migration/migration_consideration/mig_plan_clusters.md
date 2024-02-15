# Multiple cluster environments

If you are migrating an environment with multiple clusters, you can run the create-alias-multiple-cluster task to support multiple clusters that use different credentials.

## Supporting multiple clusters that use different database credentials

Using the same database user ID and password for each identically named domain/data source allows the existing JAAS Authentication Aliases to be functional. If a unique database user ID and password are required, extra manual configuration is needed to create new JAAS Authentication Aliases for each data source and map these accordingly.

Complete the following steps on the primary node of Cluster A:

1.  Open a command line.
2.  Change to the wp_profile_root/ConfigEngine directory.
3.  Run the following task to create the JAAS Authentication Aliases:

    -   AIX® and Linux™: `./ConfigEngine.sh create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr_password`
    -   Windows™: Con`figEngine.bat create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr_password`

    Where authDomainList is set to a list of domains that use unique database user ID and passwords and those domain properties are set correctly in the wkplc_comp.properties file, including user ID and password.



???+ info "Related information"  
    -   [Adding secondary nodes to a clustered environment](../../../../manage/migrate/next_steps/post_mig_activities/admin_task/mig_post_secondarynodes.md)

