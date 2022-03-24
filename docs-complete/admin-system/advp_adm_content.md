# Administering the portal content and resources for virtual portals

When you create a virtual portal by using the Virtual Portal Manager portlet, the portlet also creates default portal content and resources for the virtual portal. This default content is determined by the default XML script file for initializing virtual portals. In general, you can administer portal resources for a virtual portal just like you do for a normal portal installation.

You must be aware that some resource types are scoped to a particular virtual portal and cannot be accessed from outside of that virtual portal. Such scoped portal resource types are assigned to only that one portal. Sharing of these resource types between virtual portals is not possible. This restriction is imposed by the portal system and provides a secure isolation between virtual portals. You cannot change this behavior.

Other resource types are not scoped. They are shared among all virtual portals of the same installation. If you want to restrict such resource types to particular virtual portals, you can define their visibility by using Portal Access Control. These access restrictions should usually be defined by the master administrator of the portal installation. For more information about scoping of portal resources for virtual portals, see *Planning for virtual portals* and *Separating and sharing resources between virtual portals*.

-   To change the content globally and before creating a virtual portal, modify the default XML script that specifies the initial content for virtual portals. For details about how to do this see *Preconfiguring the default content for virtual portals*.

-   To change the content specifically and after creating a virtual portal, use either of the following portal tools:

    1.  Use the Manage Pages portlet of the virtual portal. You can have the subadministrator of the virtual portal do this.

    2.  Use the XML configuration interface to import content into the virtual portal. You can use this portal tool only from the initial portal installation.

    **Note:** When you create a virtual portal, the portlets that are associated with HCL Web Content Manager are not included in the virtual portal, even if you deployed these portlets as part of your original portal installation. To use any of these portlets in a virtual portal, you must manually create a page and add the portlets:

    -   Authoring portlet: Select **Web Content Authoring** when you are adding the portlet.
    -   Web Content Viewer portlet: Select **Web Content Viewer** when you are adding the portlet.

**Parent topic:**[Administering virtual portals ](../admin-system/advp_adm.md)

**Related information**  


[Filling a virtual portal with content ](../admin-system/advp_tsk_fill_content.md)

