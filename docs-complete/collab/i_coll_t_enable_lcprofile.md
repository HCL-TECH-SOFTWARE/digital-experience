# Integrating HCL Connections profile 

You can enable the HCL Connections profile in HCL Portal so that users can view HCL Connections business card information and link to features such as communities, blogs, and activities.

**Note:** You must enable **Show Email** on the HCL Connections server to ensure that portal users can view profile information.

1.  Search the HCL Connections LDAP directory for the user whose profile you want to enable in HCL Portal and then add that user to the portal LDAP directory.

2.  Ensure that `ibm-primaryEmail` is mapped to the appropriate attribute in the LDAP and that the email address in the HCL Connections LDAP matches the email address in the portal LDAP.

    For example, `mail` or `email`

3.  Register the HCL Connections server.

    For stand-alone portal, complete the steps on the node. For a clustered environment, complete the steps on the WebSphere® Application Server Network Deployment.

    1.  Open the WebSphere Integrated Solutions Console.

    2.  Click **Resources** \> **URL** \> **URL Providers**.

    3.  Select the **Default URL Provider** at the beginning of the hierarchy.

    4.  Under **Additional Properties**, select **URLs**.

    5.  Click **New** and then specify these settings under General Properties:

        -   **Name**

            CONNECTIONS\_PEOPLE\_CARD

        -   **JNDI name**

            JNDI\_CONNECTIONS\_PEOPLE\_CARD

        -   **Specification**

            Card for HCL Connections version 2.5, or earlier:https://yourConnectionsServer.domain.com/profiles/html/businessCard

            For example: https://cntserv\_exmp.com/connections/profiles/html/businessCard

            Card for later versions of HCL Connections \(post version 2.5\): https://yourConnectionsServer.domain.com:portno

            For example: https://cntserv\_exmp.com/connections

            The URL you type fetches the JavaScript file file/profiles/portalJS/portalBizCard.js.. You do not have to type in the entire URL to the JavaScript file, only type in the Connections HTTPS address. If you are using an HTTP server in front of the Connections environment, the port number can be omitted.

        -   **Category**

            CATEGORY\_CONNECTIONS\_PEOPLE\_CARD

    6.  Click **Save** to save the changes to the master configuration.

4.  Restart the HCL Portal server.


After you enable the HCL Connections profile for a particular user, when you move the cursor over that person's active \(underlined\) name in HCL Portal, and then click **Click for Person Card**, you see the HCL Connections profile for that person. The profile is displayed in the business card section of the Person card, with links to more HCL Connections features. Click **Profile** to see the user's full HCL Connections profile. To return to the HCL Portal page, click **Back** in the browser.

**Note:** If you integrate HCL Connections and then select a user who does not have a HCL Connections profile, portal displays the message profile does not exist. Click **Back** to return to HCL Portal.

**Parent topic:**[Configuring HCL Connections features ](../collab/i_coll_t_enable_lcparent.md)

**Related information**  


[Starting and stopping servers, deployment managers, and node agents ](../admin-system/stopstart.md)

