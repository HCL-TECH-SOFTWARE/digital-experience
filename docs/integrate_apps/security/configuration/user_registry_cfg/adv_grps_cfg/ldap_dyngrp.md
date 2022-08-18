# Configuring HCL Portal to use dynamic groups

By default, HCL Digital Experience is enabled for static groups. However, the Virtual Member Manager \(VMM\) allows users to be members of either static or dynamic groups. Static groups have a persistent binding between a group and its members. Dynamic groups have a search query that is defined to retrieve the members of a group.

**Disclaimer:** The following procedure is to activate dynamic group support natively in VMM. It is preferable, if possible, to use the group membership attribute support to bring in dynamic group information from your LDAP server. Using the group membership attribute support for dynamic group membership is only possible if:

-   Your LDAP server supports a group membership attribute
-   The group membership attribute includes dynamic group membership information

Otherwise, complete the following steps to manually configure HCL Portal to use dynamic groups.

**Clustered environments:** Complete the following steps on the Deployment Manager and then synchronize the nodes.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Go to **Security** \> **Global security**.

3.  In **Available realm definitions**, select **Federated repositories** and click **Configure**.

4.  In **Related Items**, click **Manage repositories**.

5.  Select the appropriate repository from the list.

6.  In **Additional Properties**, click **Group attribute definition** and then click **Dynamic member attributes**.

7.  Click **New** and specify values for the **Name** and **Object class** fields as appropriate.

    For example:

    -   **Name:** memberurl
    -   **Object class:** groupofurls
8.  Click **OK** and save the changes to the master configuration.

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, read [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).


**Parent topic:**[Advanced group configurations](../security/adv_sec_ov.md)

