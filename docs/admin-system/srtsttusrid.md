# Setting the search user ID

If you work with EJB on a secure server, you need to set the search user ID on the remote search server.

Ensure that your **SearchAdminUser** alias matches your HCL Digital Experience administrator information. Complete the following steps to view or change the information that is stored in your **SearchAdminUser** alias:

1.  Log in to the WebSphere® Integrated Solutions Console.
2.  Click **Security** \> **Global security**.
3.  In the Authentication section, click **Java Authentication and Authorization Service** \> **J2C authentication data**.
4.  Edit the **SearchAdminUser** alias.
5.  Update the user ID and/or password to match your HCL Digital Experience administrator information.
6.  If you are working in a clustered environment, you must synchronize the nodes of your cluster. To synchronize the nodes of your cluster, complete the following steps:
    1.  Log on to the Deployment Manager.
    2.  Go to **System Administration** \> **Nodes**.
    3.  Select the nodes to synchronize from the list.
    4.  Click **Full Resynchronize**.
7.  Restart the portal servers.

In a remote search environment, the remote search server must be configured for the same LDAP as HCL Digital Experience.

1.  Open the WebSphere Integrated Solutions Console.

2.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

3.  Locate the application **PSEStandalone**.

4.  Enter this application and click **Security roles to user/group mapping**.

5.  Select the role **SearchUser** and click **Map users**.

6.  On the portal that accesses the EJB, search for the user ID that is set as the WebSphere Application Server Admin User. For example, you can find this ID by using the following procedure:

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Click **Global Security** \> **Federated LDAP registry**.

    3.  Determine the primary administrative user ID.

7.  To continue installing remote search service manually, proceed by the following steps:

    1.  Return to the WebSphere Integrated Solutions Console of the machine where the EJB is installed.

    2.  Type the name that you found as the user ID in a previous step as the search string and click **Search**. As a result, the user ID and its configuration parameters are displayed in the **Available** box.

    3.  Add this user ID to the **Selected** box by clicking the double-angled bracket **\> \>** button.

    4.  Click **OK** to save your updates.

    5.  Restart the WebSphere Application Server on which the PSEStandalone is installed.


