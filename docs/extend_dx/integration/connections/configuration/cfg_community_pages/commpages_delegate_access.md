# Automatically grant page access to community members

If you want community members to automatically be able to access the page, without explicitly configuring access, you must enable that feature. Community membership must be integrated with portal security before you can enable this feature.

After this feature is enabled, you see a **Restrict view access to this page to community members** check box on the Page Associations window. If you selected the check box, community members have access to the page. This access is in addition to any access that you explicitly grant to the page. Community member access to the parent page is not automatically granted to the community page.

1.  From the portal server, log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConnectionsIntegrationService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Update the value for the community.group.mapper property to the string default.

6.  When integrating community membership and portal security, you can define the default access level that is granted to users.

    1.  Edit the community.member.access.level property.

    2.  Specify the role that is used to determine access.

        The default value is Privileged User.

        Depending on this role type, the set of role types that are blocked for inheritance on the page is defined as the set of all role types that are fully implied by the role type. For example, with the Privileged User role, the implied role types are Privileged User and User.

        For a list of available roles and information about the role types, see *Roles.*

7.  Save your changes.

8.  Restart the WebSphere\_Portal server.


The **Restrict view access to this page to community members** check box is available on the Page Association window.


**Related information**  


[Roles](../security/sec_roles.md)

[Human readable URL mappings for virtual portals](../admin-system/advppln_shpux_urlmap.md)

[Managing community associations](../admin-system/commpages_create_mapping.md)

