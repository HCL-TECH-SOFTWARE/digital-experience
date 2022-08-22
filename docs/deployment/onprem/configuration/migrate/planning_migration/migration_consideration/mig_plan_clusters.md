# Multiple cluster environments

If you are migrating an environment with multiple clusters, you can run the create-alias-multiple-cluster task to support multiple clusters that use different credentials.

## Supporting multiple clusters that use different database credentials

Using the same database user ID and password for each identically named domain/data source allows the existing JAAS Authentication Aliases to be functional. If a unique database user ID and password are required, extra manual configuration is needed to create new JAAS Authentication Aliases for each data source and map these accordingly.

Complete the following steps on the primary node of Cluster A:

1.  Open a command line.
2.  Change to the wp\_profile\_root/ConfigEngine directory.
3.  Run the following task to create the JAAS Authentication Aliases:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr\_password
    -   IBM® i: ConfigEngine.sh create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr\_password
    -   Windows™: ConfigEngine.bat create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr\_password
    Where authDomainList is set to a list of domains that use unique database user ID and passwords and those domain properties are set correctly in the wkplc\_comp.properties file, including user ID and password.



**Related information**  


[Adding secondary nodes to a clustered environment](../migrate/mig_post_secondarynodes.md)

