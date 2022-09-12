# Content of a virtual portal

The content of a newly created virtual portal can vary, depending on the method by which you create the virtual portal. You can change the pre-configured content for virtual portals.

When you create the virtual portal by using the Virtual Portal Manager portlet, the portlet starts an XML configuration interface script that creates the initial content of the new virtual portal. The content of a virtual portal is similar to that of a full portal installation, but some administration portlets that manage global portal settings are not included in the default content of virtual portals. For example, the administration portlet Virtual Portal Manager is installed as part of the initial portal installation only. It is not part of the default content of virtual portals that you create. You can use it only in the initial portal installation.

When the content is created, the Virtual Portal Manager portlet grants the following set of default roles and access permissions to the sub-administrators of the virtual portal:

-   Administrator to the content root \(Administrator@content root\) of the virtual portal
-   Editor to portlet instances \(Editor@portlet entities\) that are created for the new virtual portal.

You can modify the roles and access permissions for the sub-administrators of a virtual portal manually according to your business needs:

-   To change the roles and access permissions for sub-administrators on the portlets globally and before you create a virtual portal, configure the Virtual Portal Manager portlet accordingly. For details about how to do this see *Preconfiguring the sub-administrators for virtual portals*.
-   To change the roles and access permissions specifically and after creating a virtual portal, use the Portal Access Control portlets. If you do this change in the initial portal installation, you can change the access permissions on the virtual portal as a whole. If you do this change in the virtual portal itself, you can change the access permissions on the individual resources of the virtual portal.

If you want to change the content of virtual portals, it can be done by one of the following ways:

-   To change the content globally and before creating a virtual portal, advanced master administrators can reconfigure the XML script that specifies the initial content for virtual portals. For details about how to do this see *Preconfiguring the default content for virtual portals.*

    !!! note
        When you modify or replace this XML script, plan ahead and apply special care. You can add or remove some content to enhance or reduce the functionality of a virtual portal to a certain extent. The following portal resources are mandatory content of a virtual portal and must be included in a customized XML initialization script for virtual portals:

        -   Content Root \(`wps.content.root`\)
        -   Login \(`wps.Login`\)
        -   Administration \(`ibm.portal.Administration`\).
        Depending on the functionality that you want to make available, more content is required. For example, to allow templating. Include Application Root \(`wps.application.root`\) and Templates \(`ibm.portal.Templates`\).

-   To change the content specifically and after creating a virtual portal, use either of the following portal tools:
    -   Use the Manage Pages portlet of the virtual portal. The subadministrator of the virtual portal can do this change.
    -   Use the XML configuration interface to import content into the virtual portal. This procedure can be done only from the initial portal installation.

If you use the configuration task create-virtual-portal to create a virtual portal, the new virtual portal that you create is empty. You must create the content for the virtual portal. For example, you can do this by using the XML configuration interface. For more information, see *The XML configuration interface*.


<!--
**Related information**  


[The master administrator](../admin-system/advppln_roles_mastr_adm.md)

[Preconfiguring the sub-administrators for virtual portals](../admin-system/advp_precfg_subadm.md)

[Preconfiguring the default content for virtual portals](../admin-system/advp_precfg_content.md)

[The XML configuration interface](../admin-system/admxmlai.md) -->

