# Creating a single-sign on domain between HCL Portal and the remote search service

View the steps to create a single-sign on \(SSO\) domain between HCL Digital Experience and the remote search service. Set up remote search service by using EJB, since SOAP support for remote search services was deprecated with HCL Portal version 8.0.

1.  Export the LTPA keys from the HCL Portal server by completing the following steps.

    **Cluster note:** In a clustered environment, complete these steps on the Deployment Manager.

    1.  Open the WebSphere® Integrated Solutions Console.

    2.  Select **Security** \> **Global Security** \> **Authentication** \> **LTPA**.

    3.  Enter a password for the key.

    4.  In the field for the fully qualified key name, enter a key file name and click **Export keys**. The keys are written to the file profile\_root/Key File Name, where portal\_root is either the Deployment Manager profile or the HCL Portal profile.

2.  Import the key file to the remote search server. If your environment contains extra application servers, complete the following steps on all other servers that you want to be a part of this SSO domain:

    1.  Copy the key file that you exported in step 1 from the HCL Portal server to the remote search server.

    2.  Log in to the WebSphere Integrated Solutions Console.

    3.  Select **Security** \> **Global Security** \> **Authentication** \> **LTPA**.

    4.  In the field for the fully qualified key name, enter the directory and key file name that you specified in step 2a and click **Import keys**. The keys are propagated to all servers of the SSO domain.

    5.  Restart all WebSphere Application Server profiles on this server.

3.  Ensure that automatic LTPA key generation is disabled on all servers of the SSO domain by completing the following steps:

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Select **Security** \> **Global Security**. In the Authentication mechanisms and expiration pane, click **LTPA**.

    3.  Within **Key generation**, select **Key set groups**

    4.  Click **NodeLTPAKeySetGroup**.

        **Cluster note:** In a clustered environment, click **CellLTPAKeySetGroup**.

    5.  In the Key generation pane, disable the **Automatically generate keys** check box.

    6.  Click **OK**.

    7.  Click **Save** to save your changes to the master configuration.

    8.  Log out of the WebSphere Integrated Solutions Console.

4.  Verify that the system clocks are within 5 minutes of each other between the HCL Portal server or servers and the remote search service server.

    **Note:** Failure to have the clocks in sync will lead to an import failure in the next step.

5.  Add the signer certification of the remote search service server into the portal server by completing the following steps:

    1.  Access the WebSphere Integrated Solutions Console of the portal server.

        **Cluster note:** In a clustered environment, complete these steps on the Deployment Manager.

    2.  Click **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **NodeDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

        **Cluster note:** In a clustered environment, the path is **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **CellDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

    3.  Enter the remote search service server host, its SSL port, and an alias.

    4.  Click **Retrieve Signer Information**.

    5.  Click **OK**.

6.  Add the signer certification of the portal server into the remote search service server by completing the following steps:

    1.  Access the WebSphere Integrated Solutions Console of the remote search service server.

    2.  Click **Security** \> **SSL certificate and key management** \> **Key stores and certificates** \> **NodeDefaultTrustStore** \> **Signer certificates** \> **Retrieve from port**.

    3.  Enter the portal server host, its SSL port, and an alias.

    4.  Click **Retrieve Signer Information**.

    5.  Click **OK**.

7.  In the portal server enable CSIv2 identity assertion. To complete this step, proceed as follows:

    **Cluster note:** In a clustered environment, complete these steps on the Deployment Manager WebSphere Integrated Solutions Console.

    1.  Enable CSIv2 Identity Assertion on the outbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the portal server.
        2.  Go to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 outbound communications**.
        3.  Check **Use identity assertion**.
        4.  When you are done, restart the portal server.
    2.  Enable CSIv2 Identity Assertion on the inbound connection:

        1.  Access the WebSphere Integrated Solutions Console of the remote server.
        2.  Go to **Security** \> **Global Security** \> **RMI/IIOP security** \> **CSIv2 inbound communications**.
        3.  Check **Use identity assertion**.
        4.  Under **Trusted identities**, enter either an asterisk \(\*\) or the identity of the portal server.
        5.  When you are done, restart the remote server.
        For more detailed information, refer to the WebSphere Application Server information center.


For more details about exporting the LTPA token, refer to the WebSphere Application Server Help Center by going to**Administering** \> **Security** \> **Managing security** \> **Configuring authentication mechanisms** \> **Configuring Lightweight Third Party Authentication** \> **Lightweight Third Party Authentication settings**. You can also locate this topic by opening the search feature of the WebSphere Application Server Help Center and searching for ltpa key export.

If you work with EJB on a secure server, you must set the search user ID. For details about how to do this step, refer to [Setting the search user ID](srtsttusrid.md).

**Parent topic:**[Remote search service](../admin-system/srcusgrmtsrchsrv.md)

