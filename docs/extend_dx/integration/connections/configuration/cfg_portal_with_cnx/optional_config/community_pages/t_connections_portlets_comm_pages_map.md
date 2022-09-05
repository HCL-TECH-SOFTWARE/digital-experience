# Mapping a community page to a community

Map a community page to an HCL Connections community so the portlets can interact with community content.

Follow the steps to map the community pages to a community based on what HCL Digital Experience server you are using.

1.  To map community pages to a community on HCL Digital Experience 8.5 server, follow the steps in the article *Managing community associations* at [HCL Software Support](https://support.hcltechsw.com/csm).

2.  Assign access to the page.

    If the community restricts membership, you can secure the page so that only members of the community can see the page in the Portal navigation. You can access assign on community pages that are mapped to public or moderated communities, but doing so does not restrict access to the content in the community. There are other mechanisms, including APIs, mobile clients, connectors, and search and portlets on other pages, which might show the content outside the community page. Membership lists in HCL Connections communities must have the correct level of access to community content and Portal pages must reflect that level. Before you use communities for access control on pages, follow the steps in *Integrating community membership with Portal security*.

    1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**. Find the community page for which you want to set access.

    2.  Click **Set Page Permission** \(lock icon\).

    3.  Clear **Allow Inheritance for all rows** and click **Apply**.

    4.  Click **Edit Role** in the Privileged User and User columns and make sure that no users or groups are added that you do not want to access the page.

    5.  Click the **Edit Role** button in the Privileged User or User column, depending on what level of access you want to grant to community members. See the [Roles](../wcm/wcm_security_items.md) topic for a description of roles in HCL Portal.

    6.  Click **Add**.

    7.  Change **Search by** to displayName.

    8.  Enter the name of the community in the search box and click **Search**.

    9.  Check the box next to the group that represents the community and click **OK**.

        If successful, the group appears in the list of members in the role and a message indicates that the members were successfully added to the role.

3.  Before you add portlets to your community page, make sure that the corresponding widget exists in the community.

    For example, before you add a Blogs portlet to the community page, make sure that the HCL Connections community contains a blog. If not, add the Blogs widget to the HCL Connections community by using the browser interface.


**Note:** If the portal administrator configures a portlet with a new connections server URL for a community page, the changes take effect only after the community page is configured with a valid community ID for the new connections server. The community ID is configured by editing the portal page parameters settings to include the new community ID.


