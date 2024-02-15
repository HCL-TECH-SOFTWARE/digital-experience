# Configuring the sub administrators for virtual portals

You can administer the sub administrators of a virtual portal as required by using the Portal Access Control of your initial portal installation.

When you create a virtual portal by using the Virtual Portal Manager portlet, you select a user group of sub administrators. The sub administrators who you want to be responsible for the administration of the new virtual portal. During creation of the virtual portal, the Virtual Portal Manager portlet creates a set of necessary access permissions on the virtual portal for the sub administrator group that you specified. This action includes EDITOR role access permissions on the administration portlets that are part of a virtual portal. As a result, the sub administrators of a virtual portal can do administrative tasks on the virtual portal with these administration portlets.

If you want to change the default access permissions for the sub-administrators, use one of the following actions:

-   To change the default editor access permission for the sub-administrators on the administrative portlets or the list of portlets globally and before you create virtual portals, configure the Virtual Portal Manager portlet accordingly. For more information, this see *Preconfiguring the sub-administrators for virtual portals*.
-   To assign extra access permissions to the sub-administrators specifically and after creating a virtual portal, use the master administrator user ID of your initial portal installation and modify those access permissions for them manually in Portal Access Control. To do this, you can use the User and Group Permissions portlet, the Resource Permissions portlet, the XML configuration interface, or the Portal Scripting Interface. The consequences differ, depending on where you make the updates:
    -   If you complete this task in the initial portal installation, you can change the access permissions for the sub-administrators on the virtual portal as a whole.
    -   If you complete this task in the virtual portal itself, you can change the access permissions for the sub-administrators on the individual resources of the virtual portal.

## Assigning additional access permissions to the sub administrators

Depending on the usage of your virtual portals, you might have to give the sub administrators extra access permissions on specific resources.

!!! note
Do not grant the sub administrators of virtual portals the access permissions to do any installation-related tasks, such as installation of portlets or themes. An unstable or malicious portlet that is installed in one virtual portal can destabilize the entire portal installation, as all virtual portals share Java virtual machine. Typically, only the master administrator of the portal installation can do installation-related tasks.

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


The configuration task `create-virtual-portal` does not assign roles to the sub administrators of the virtual portal. In this case, you assign the required roles manually by using the portal access administration portlets or by using the portal XML configuration interface. For more information about the XML configuration interface and how to use it see, *The XML configuration interface*.


???+ info "Related information"
    - [Filling a virtual portal with content](../vp_adm_task/advp_tsk_fill_content.md)
    - [Using the XML configuration interface to work with virtual portals](../../vp_reference/vp_command_ref/advp_xml.md)

