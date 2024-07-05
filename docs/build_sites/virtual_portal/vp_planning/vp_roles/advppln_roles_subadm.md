# Sub-administrators of a virtual portal and their access roles and permissions

When you create a virtual portal by using the Virtual Portal Manager portlet, you select a user group of sub-administrators who are responsible for the administration of the new virtual portal.

During the creation of the virtual portal the Virtual Portal Manager portlet assigns the following default that is set of necessary access permissions on the virtual portal to the subadministrator group that you specified:

-   Administrator role access permission on the root label of the virtual portal. You cannot change this access permission.
-   Administrator role access permission on the virtual portal URL context. You cannot change this access permission.
-   Editor role access permission on the administration portlets that are part of the virtual portal. You can change this access permission.

sub-administrators have Editor role access permissions on the administration portlets of their virtual portal, so they can use these administration portlets to run administrative tasks on the virtual portal. For example, they can add portlets to pages. The default access permissions that are given to sub-administrators of virtual portals are limited to managing the pages and documents in the virtual portal. Depending on your specific use case scenario, you might want to give the sub-administrators extra permissions to manage more resources, or possibly users. Some of the permissions are not scoped to the virtual portal, but are global to the whole portal installation. This is critical for resources available in all virtual portals. For example, if you use a single realm for all virtual portals, the users are available in all virtual portals. A subadministrator who has the permissions to manage a user can manage that user in all virtual portals.

If you want to change the default access permissions for the sub-administrators, use one of the following actions:

-   To change the default editor access permission for the sub-administrators on the administrative portlets or the list of portlets globally and before you create virtual portals, configure the Virtual Portal Manager portlet accordingly. For more information, this see *Preconfiguring the sub-administrators for virtual portals*.
-   To assign extra access permissions to the sub-administrators specifically and after creating a virtual portal, use the master administrator user ID of your initial portal installation and modify those access permissions for them manually in Portal Access Control. To do this, you can use the User and Group Permissions portlet, the Resource Permissions portlet, the XML configuration interface, or the Portal Scripting Interface. The consequences differ, depending on where you make the updates:
    -   If you complete this task in the initial portal installation, you can change the access permissions for the sub-administrators on the virtual portal as a whole.
    -   If you complete this task in the virtual portal itself, you can change the access permissions for the sub-administrators on the individual resources of the virtual portal.

The following list shows the tasks for which you can assign extra access permissions to sub-administrators of virtual portals. It also specifies whether an access permission is scoped to the virtual portal or if it is global to the entire portal installation, including all virtual portals. You can assign the permissions for these tasks to sub-administrators only by using use the master administrator user ID of your initial portal installation.

-   **Granting access permissions to users and groups of virtual portals**

    This task requires one of the following access permissions:

    -   Delegator on the group that defines the users of the virtual portal. This way is the preferred option, as the access permission is limited to the virtual portal.
    -   Delegator@Groups or Delegator@Users. Both of these access permissions apply globally to the entire portal installation, including all virtual portals.
-   **Cloning portlet applications, for example, the web clipping portlet**

    This task requires Editor@Portlet Application. This access permission applies globally to the entire portal installation, including all virtual portals.

-   **Access permissions for policies.**

    To manage policies, sub-administrators need different access permissions, depending on the task that you want the subadministrative user to be able to complete. For example, to delete policies, a subadministrator needs Manager@Policy and User@Business Rules. This access permission is the highest permission. These access permissions apply globally to the entire portal installation, including all virtual portals.

-   **Using the XML configuration interface**

    This task requires Security Administrator@Portal and Editor@XML access. These access permissions apply globally to the entire portal installation, including all virtual portals.

-   **Managing portal search collections**

    This task requires Editor@Virtual Resource PSE\_SOURCES. This access permission applies globally to the entire portal installation, including all virtual portals.

-   **Managing URL mappings**

    This task requires Editor@parent context for parent mappings and Manager@context for URL mappings. These access permissions apply globally to the entire portal installation, including all virtual portals.

-   **Managing tags and ratings**

    This task requires Manager@Tags and Manager@Ratings. These access permissions apply globally to the entire portal installation, including all virtual portals.

-   **Managing personalization rules**

    This task requires the following access permissions:

    -   Privileged User on the following portlet applications:
        -   Personalization Editors
        -   Personalization Navigator
        -   Personalization Picker

    -   Manager@the Personalization Rule
    These access permissions apply globally to the entire portal installation, including all virtual portals.

-   **Granting virtual portal administrators access to web content libraries**

    Virtual portal administrators do not automatically have access to work with web content libraries when they are using the administration portlet. To enable a virtual portal administrator to work with web content libraries, you must assign them access to either the JCR content root node or individual web content libraries:

    -   You can assign virtual portal administrators access to the JCR content root node from the `Set access on root` feature in the Web Content Library view of the Administration portlet. For more information, see *Setting root access for all web content libraries* in the Portal Content help.
        -   Assign virtual portal administrator access to the JCR content root node to enable them to create new libraries and view, edit, and delete all existing libraries.
        -   Assign virtual portal administrators contributor access to the JCR content root node to enable them to create new libraries and view, edit, and delete libraries that they created.
    -   You can also assign virtual portal administrators access to libraries they did not create by editing the access settings of individual libraries.
    Templating sample content is provided by default with HCL Portal. This sample content is available from the Create Content tab of the site toolbar. If you want to use the sample content with a specific virtual portal, you must syndicate the following web content libraries to the virtual portal:

    -   `Template Page Content 3.0`
    -   `Web Content Templates 3.0`

    If you fail to syndicate these libraries, the portal shows an error when you add the sample content to a page.




???+ info "Related information"
    - [Preconfiguring the sub-administrators for virtual portals](../../vp_mgr_portlet/preconfig_vp/advp_precfg_subadm.md)
    - [Controlling access](../../../../deployment/manage/security/people/authorization/controlling_access/index.md)
    - [Setting user and group permissions](../../../../deployment/manage/security/people/authorization/controlling_access/sec_ugpp.md)
    - [Setting resource permissions](../../../../deployment/manage/security/people/authorization/controlling_access/sec_rpp.md)
    - [The XML configuration interface](../../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md)
    - [Portal Scripting Interface](../../../../deployment/manage/portal_admin_tools/portal_scripting_interface/index.md)

