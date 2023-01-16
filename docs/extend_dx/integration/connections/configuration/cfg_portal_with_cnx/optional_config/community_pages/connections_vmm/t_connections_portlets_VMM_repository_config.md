# Configuring the HCL Connections repository for VMM

Configure the HCL Connections repository for the Virtual Member manager \(VMM\) so that you can integrate communities with Portal security.

This task is done when the server is stopped. In a cluster, you can change the configuration files directly on the deployment manager and then synchronize the changes to all cluster nodes.

1.  Configure VMM.

    !!!notes
        -   All of the required and optional parameters for the installation script are described in the topic [Installation options](../../../../../../../../extend_dx/integration/connections/installation/r_connections_portlets_install_options.md).
        -   If you use Microsoft™ Active Directory, HCL Domino Server, or Novell Directory Services, make sure that you define the -DICpersonCorrelationAttributeSyntax attribute as described in the topic [Installation options](../../../../../../../../extend_dx/integration/connections/installation/r_connections_portlets_install_options.md).
        -   If you do not use IBM® Directory Server, then set the -DICldapTypeTDS flag to false.
        -   Follow the pattern from Step 3 for running the ConfigEngine command for your operating system:
            -   AIX® and Linux: `./ConfigEngine.sh <parameters>`
            -   Windows™: `ConfigEngine.bat <parameters>`
            
        -   If you are installing in a clustered environment, do this step on the primary node and then synchronize the nodes. Configure, following this pattern: <br>
        `ConfigEngine configure-SNPortletsVMM -DICpersonCorrelationAttribute=personCorrelationAttribute` <br>`-DICpersonCorrelationAttributeType=personCorrelationAttributeType`<br>`-DICcommunityRdnAttribute=communityRdnAttribute -DICmaxSearchResults=120 -DICldapTypeTDS=ldapTypeTDS` `-DICrunAsAdmin=false -DICpumaFilterClassname=com.ibm.connections.vmm.adapter.filter.VMMPrincipalFilter` <br>`-DICpumaFilterPosition=120 -DWasPassword=password -DPortalAdminPwd=password -DPortalAdminPwd=password` <br><br> For example: `ConfigEngine configure-SNPortletsVMM -DICpersonCorrelationAttribute=ibm-entryUuid` <br> `-DICpersonCorrelationAttributeType=uniqueId -DICcommunityRdnAttribute=cn -DICmaxSearchResults=120` <br> `-DICldapTypeTDS=true -DICrunAsAdmin=false -DICpumaFilterClassname=com.ibm.connections.vmm.adapter.filter.` <br> `VMMPrincipalFilter -DICpumaFilterPosition=120 -DWasPassword=password -DPortalAdminPwd=password`

2.  Configure the VMM Repository.

    !!!notes
        -   All of the required and optional parameters for the installation script are described in the topic [Installation options](../../../../../../../../extend_dx/integration/connections/installation/r_connections_portlets_install_options.md).
        -   Follow the pattern from Step 3 for running the ConfigEngine command for your operating system.
        -   You must stop the HCL Portal server before you run the following command; otherwise, the command script fails.
        -   If you are installing in a clustered environment, do this step on the primary node and then synchronize the nodes. <br><br>
        `ConfigEngine wp-create-cur -DWasPassword=[was-admin-pwd] -Dfederated.cur.id=connections` <br>
        `-Dfederated.cur.adapterClassName=com.ibm.ws.wim.adapter.connections.ConnectionsAdapter` <br>
        `-Dfederated.cur.isExtIdUnique=true -Dfederated.cur.supportExternalName=false` <br>
        `-Dfederated.cur.supportPaging=false -Dfederated.cur.supportSorting=false`  <br>
        `-Dfederated.cur.supportTransactions=false -Dfederated.cur.baseDN=o=connections`

    !!!attention
        If you are reinstalling the portlets after you remove them using the steps in *Removing the HCL Connections portlets*, you must make sure that the VMM repository does not exist.

    1.  Log in to the WebSphere® Administrative Server console.
    2.  In the section **Global securities  > Federated repositories > Manage repositories** look for a Connections repository. If one exists, delete it.
3.  Update the Repository Group Repository Relationship

    !!!notes
        -   All of the required and optional parameters for the installation script are described in the topic [Installation options](../../../../../../../../extend_dx/integration/connections/installation/r_connections_portlets_install_options.md).
        -   Follow the pattern from Step 3 for running the ConfigEngine command for your operating system.
        -   You must stop the HCL Portal server before you run the following command; otherwise, the command script fails.
        -   If you are installing in a clustered environment, do this step on the primary node and then synchronize the nodes. <br><br>`ConfigEngine wp-update-group-repository-relationship -DWasPassword=password` <br>`-Drepository.id=ldap-identifier -Drepository.forgroups=connections`

    Repeat for every LDAP repository that is configured in Federated Repositories for WebSphere Application Server.

4.  If you are installing in a clustered environment, resynchronize the nodes.



