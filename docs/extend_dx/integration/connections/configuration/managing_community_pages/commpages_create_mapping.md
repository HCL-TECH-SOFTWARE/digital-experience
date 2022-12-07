# Managing community associations

You can create, view, modify, or delete community associations on a page with the Page Associations window, the XML configuration interface, and Portal Scripting Interface.

-   To create a community association, complete the following steps, according to the method you want to use.
-   Create a community association in the user interface with the Manage Associated Communities window.

    -   Open the Manage Associated Communities window from the site toolbar.
        1.  In the site toolbar, click the **Page** \> **General** \> **Associated community**. If an association exists, it is displayed.
        2.  Select **Associated community** to display the Manage Associated Communities window.

            !!! note 
                The **Community** section is displayed only if an HCL Connections server is configured for the portal.

    -   Open the Associations window from the page properties portlet.
        1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.
        2.  Go to the page, and click the **Edit Page Properties** icon for the page.
        3.  In the **Advanced options** section, click **I want to edit associations**.
        4.  Click the **Community** tab. If an association exists, it is displayed.

        !!!note
            The **Community** tab is displayed only if an HCL Connections server is configured.

    1.  Create the association.

        You can create an association with one of the following methods:

        -   Click **Select Community**. The portal queries the HCL Connections server and lists available communities. Select the community that you want to associate with the page.

            Depending on the number of available communities, only a subset of all communities might be listed. If the HCL Connections server is not running, no communities are listed.

            You can filter the list of communities by entering text in the **Find community** field. The list of communities is narrowed to only those communities that contain the search text in the community title.

        -   To associate the page with the same community that is associated with the parent page, click **Use default community from parent page**.
        
    2.  To automatically grant page access to members of the associated community, click **Limit access to this page to only community members**.

        Activating this feature results in the following changes:

        -   The User role is assigned to the virtual user group that represents the community and the page. This access is in addition to any access that you explicitly grant to the page.
        -   Role blocks are defined for the page for the User role and the Privileged User role. These role blocks prevent corresponding access privileges that are granted to the parent page from being propagated to this page.
        This setting is displayed only if you installed and enabled the HCL Connections adapter for VMM users and groups. For details, see [Automatically grant page access to community members](../cfg_community_pages/commpages_delegate_access.md).

        **Access control changes from this setting:**

        When you select the **Limit access to this page to only community members** setting, the following changes are made:

        -   The User role on the page is assigned to the virtual user group that represents the members of the associated community.
        -   Role blocks are added on the page for the User role and the Privileged User role.
        When you clear the **Limit access to this page to only community members** setting, the following changes are made:

        -   The User role on the page is removed for the virtual user group that represents the members of the associated community.
        -   The role blocks on the page for the User role and Privileged User role are removed.
        If you change the community that is associated with the page, the following changes are made:

        -   The User role on the page is removed for the virtual user group that represents the members of the previously associated community.
        -   The User role on the page is assigned to the virtual user group that represents the members of the newly associated community.
        -   If role blocks do not exist on the page for the User role and Privileged User role, the role blocks are created.
        Activating this feature is restricted to users that are granted all roles that are required if the corresponding access control modifications are performed manually with the access control administration portlets. For more information about the roles that are required when you select **Limit access to this page to only community members**, see [Access permissions](../../../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md).

    3.  If you want child pages of the page to be automatically associated with the same community as this page, select **Copy updated association to all number direct child pages**.

        This setting associates the community to all child pages where the user has sufficient access to update page associations. If the user does not have the required access for a page, it is not updated.

        Depending on the configuration of the server, the window displays the number of pages and nesting levels that are affected based on a threshold. If the number of affected pages exceeds the configured threshold value, this option is not displayed. For details on setting the page thresholds, see *Configuring support for community pages*.

        !!!note
            When community associations for a page are copied to child pages, only the community associations are copied. The value of the **Limit access to this page to only community members** setting is not copied to child pages because of access control inheritance. This inheritance automatically enables members of the mapped community to view the child pages.

-   Create a community association by using the XML configuration interface \(xmlaccess command\).

    When you are defining the association in the XML import file, use the <content-mapping-info\> element, and specify a content mapping scope of `ibm.connections` for an individual nested <content-mapping\> element.

    For additional information about the XML configuration interface and <content-mapping-info\> elements, see [XML configuration interface and content associations](https://help.hcltechsw.com/digital-experience/9.5/admin-system/mp_wcm_contentmap_xml.html).

    This XML sample shows how to map a page to a community. In this example, the page has the unique name `unique-name-of-the-page-to-be-updated`, and the community is specified with the community UUID `some-ibm-connections-community-uuid` in HCL Connections.

    ```
    <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
             xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
        <portal action="locate">
            <content-node action="update"  domain="rel" uniquename="unique-name-of-the-page-to-be-updated">
                <content-mapping-info>
                    <content-mapping content-id="some-ibm-connections-community-uuid" 
                                     default="true" scope="ibm.connections"/>
                </content-mapping-info>
            </content-node>
        </portal>
    </request>
    ```




???+ info "Related information"
    - [Social object resolution](../../../../../build_sites/social_rendering/working_with_social_objects/concept_list_social_objects/soc_rendr_soc_obj_resltn.md)
    - [Customizing social list definitions by using inline editing](../../../../../build_sites/social_rendering/customizing_view_definitions/soc_rendr_cust_socl_list.md)
    - [Creating community associations during page template instantiation](creating_community_assoc/index.md)
    - [XML configuration interface and content associations](https://help.hcltechsw.com/digital-experience/9.5/admin-system/mp_wcm_contentmap_xml.html)
    - [Automatically grant page access to community members](../cfg_community_pages/commpages_delegate_access.md)
    - [REST API and content associations](https://help.hcltechsw.com/digital-experience/9.5/admin-system/mp_wcm_contentmap_restapi.html)
    - [Access permissions](../../../../../deployment/manage/security/people/authorization/controlling_access/resources_roles/sec_acc_rights.md)
