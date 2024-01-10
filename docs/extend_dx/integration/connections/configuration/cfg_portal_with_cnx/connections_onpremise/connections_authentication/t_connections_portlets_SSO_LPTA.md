# Enabling single sign-on for the portlets for a stand-alone LDAP server

Before you install the HCL Connections Portlets for HCL Digital Experience, enable single sign-on \(SSO\) between HCL Connections and HCL Portal.

This task describes the steps that are required to enable SSO between HCL Connections portlets and HCL Portal when they are on different WebSphere® Application Server cells. Applications that are deployed on servers within the same WebSphere Application Server cell are enabled by default for SSO.

Set the realm name in the LTPA token to that of the LDAP server before you export the LTPA token. For example, if you connect to an LDAP server at ldapserver.example.com over port 389, then you must set the realm name to ldapserver.example.com:389. If you must change the realm name, see the topic [Changing the realm name](connections_portlets_change_realm_name.md).

To allow SSO between HCL Connections and HCL Portal, complete the following steps:

1.  On the server where HCL Connections is installed, enable SSO:

    1.  Log in to the WebSphere Application Server Integrated Solutions Console as an administrator, expand **Security** \> **Global security**.

    2.  Expand **Web and SIP security** and then click **Single sign-on (SSO)**.

    3.  Enter the domain name.

        !!!note
            Ensure that the domain name you enter is valid: on the node where HCL Portal is installed, log in to the WebSphere Application Server Integrated Solutions Console as an administrator, click **Security** \> **Global security** \> **Web and SIP security** \> **Single sign-on (SSO)** and verify that the domain name is present.

2.  On HCL Connections deployment manager node, complete the following steps

    1.  Log in to the WebSphere Application Server Integrated Solutions Console as an administrator.

    2.  Click **Security** \> **Global security** \> **LTPA**, and then in the **Cross-cell single sign-on** section, provide values for the following fields

        -   Password – Type a secure password that you can remember. You must provide this password later, when you export the key file

            !!! note
                Confirm the password.

        -   Fully qualified key file name – Specify a valid path and a name for the file that stores the exported keys
        
    3.  Click **Export keys**.

3.  On the node where HCL Portal is installed, complete the following steps:

    1.  Log in to the WebSphere Application Server Integrated Solutions Console as an administrator and click **Security** \> **Global security** \> **LTPA**.

    2.  In the **General properties** section, provide values for the following fields:

        -   Password – Type the password that you used for the HCL Connections key file that you exported

            !!! note 
                Confirm the password.

        -   Fully qualified key file name – Specify the name of the HCL Connections key file that you exported

    3.  Click **Import keys**

4.  Restart all the nodes.



???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)

