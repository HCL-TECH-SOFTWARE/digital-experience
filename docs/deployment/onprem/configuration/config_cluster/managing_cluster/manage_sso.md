# Managing Single sign-on settings in your cluster

If you configured the nodes in your cluster to use single sign-on \(SSO\), you can change the SSO settings for the cluster.

Complete the following steps to manage your Single Sign-on settings:

1.  In the deployment manager WebSphere® Integrated Solutions Console, go to **Security** \> **Global security**.

2.  Under **Authentication**, click **Web and SIP security**.

3.  Click **Single sign-on \(SSO\).**

4.  Update your SSO settings and then click **OK**.

5.  Click **Preferences**, check the check box **Synchronize changes with Nodes**, and then click **Apply**.

6.  Click **Save** to update the deployment manager configuration.

7.  Restart all servers in the cell, including the node agents and the deployment manager.


**Parent topic:**[Managing your cluster](../admin-system/manage_clus.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

[Single sign-on settings](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=webseal-single-sign-settings)

