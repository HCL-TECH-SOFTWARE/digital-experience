# Configuring single sign-on for portlets with SiteMinder and SPNEGO

Configure HCL Connections portlets to use single sign-on with Computer Associates eTrust SiteMinder and SPNEGO.

1.  Enable eTrust SiteMinder and SPNEGO for HCL Connections, following the steps in [Enabling single-sign on for SiteMinder with SPNEGO](https://help.hcltechsw.com/connections/v65/admin/secure/t_secure_with_siteminder_SPNEGO.html).

2.  Enable and configure single sign-on for HTTP requests with SPNEGO following the steps in this [Enabling and configuring single sign-on for HTTP requests using SPNEGO](../../../../../../../deployment/manage/security/people/authentication/external_sec_mgmt/enable_spnego/cfg_spntaiweb.md).

3.  Configure eTrust SiteMinder following the steps in the article [Configuring eTrust SiteMinder](../../../../../../../deployment/manage/security/people/authentication/external_sec_mgmt/etrust_siteminder/index.md).

4.  Merge all the keytab files to make the deployment manager aware of the SPNs for each node. This step is done on the Portal server only.

    The following example demonstrates the procedure for merging keytab files.

    Assuming that you already created the following keytab files:

    -   krb5.keytab on the deployment manager
    -   krb5NodeA.keytabon Node A
    -   krb5NodeB.keytab on Node B
    Run the ktab command with the following switch:

    -m source\_keytab\_name\> destination\_keytab\_name.

    Where source\_keytab\_name is the name of the keytab file on the source system and destination\_keytab\_name\> is the name of the keytab file on the destination system.

    Step 1: merge the keytab file on Node A into the keytab file on the Deployment manager:

    ```
    # ./ktab -m /etc/krb5NodeA.keytab /etc/krb5.keytab
    Merging keytab files:   source=krb5NodeA.keytab   destination=krb5.keytab
    Done! 
    ```

    Step 2: merge the keytab file on Node B into the keytab file on the deployment manager:

    ```
     # ./ktab -m /etc/krb5NodeB.keytab /etc/krb5.keytab
    Merging keytab files:   source=krb5NodeB.keytab   destination=krb5.keytab
    Done! 
    ```

    For an example of how to manage Kerberos keys, see the article [Using the ktab command to manage the Kerberos keytab file](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/rsec_SPNEGO_kerb.html).

5.  Enable SPNEGO trust association interceptor \(TAI\) for the Portal server.

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Click **Security** \> **Global security**.

    3.  Click **Trust association** under web and SIP security.

    4.  Ensure that the **Enable trust association** check box is checked and then click **Interceptors**.

    5.  Click **New** and then type com.ibm.ws.security.spnego.TrustAssociationInterceptorImpl in the **Interceptor class name** field.

    6.  Click **OK** and then click the **Save** link to save changes to the master configuration.

6.  Configure the Virtual Member Manager \(VMM\), following the steps in the topic [Configuring the HCL Connections repository for VMM](../../optional_config/community_pages/connections_vmm/t_connections_portlets_VMM_repository_config.md).

    If you did not already do so, follow the instructions in [Configuring common Directory Services for your security configuration](../../cfg_common_dir/t_connections_portlets_common_directory.md) to copy sonata.services.xml to <wp\_root\>\\config\\cells\\<cell name\>\\.

7.  Ensure that after Portal has eTrust SiteMinder and SPNEGO enabled that the computer can ping the LDAP and the IIS servers in the SPNEGO domain.

    For example, ping ldap.spengo.com and iisserver.spnego.com to make sure that you have a connection.



