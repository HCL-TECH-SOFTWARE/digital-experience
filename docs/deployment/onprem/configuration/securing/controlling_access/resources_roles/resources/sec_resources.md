# Resources

Resources are organized in a hierarchy. Resources in the hierarchy propagate their access control configuration to all of their child resources. If a user has the Editor role on the Market News page, then that user also has the Editor role on child pages of the Market News page. Resource instances are specific resources, such as a single portlet or page. Each resource instance belongs to only one resource type. For example, the resource instance Market News Page would belong to the Content Nodes resource type.

Virtual resources are a unique resource type. Virtual resources have two functions:

-   They protect sensitive operations that affect the entire portal or specific services in the portal. For example, the virtual resource XMLAccess protects the ability to run XML configuration interface scripts.
-   They are parent resources for all resource instances. For example, the **Web Modules** virtual resource is the root node of all web modules instances. So by default role assignments on the **Web Modules** virtual resource are propagated to all individual **Web Modules** resources through inheritance.

Resource data is stored in one of four different database domains. To have a consistent database back-up and restore, the access control data protecting individual resources is stored in the same database domain as the resource data. In each of the four domains, the protected resources are stored in a hierarchy as a single tree of resources. They are also known as the protected resource hierarchy.

Resources might be in different domains depending on the type of resource. JCR nodes are exclusively contained in the JCR domain. User customization data represented by private resources are exclusively contained in the customization domain. The community domain contains resources related to collaborative applications, and the release domain contains all remaining resources. Resources can be administered in the following ways:

-   Protected Resources of the release domain can be managed through the access control administration portlets and through the XML Configuration interface
-   Policy resources are stored in the JCR domain and can also be managed through the access control administration portlets and through the XML Configuration interface
-   Resources in the community domain can be managed only through collaboration application-specific administrative portlets. Resources in this domain are not shown in the access control administration portlets
-   The customization domain holds private resources for users only. No role assignments are possible in this domain, so resources in this domain are also not shown in the access control administration portlets

**Note:** Role inheritance never crosses domain boundaries, thus limiting the inheritance scope. A role assignment for a user on the Content Nodes virtual resource in the release domain grants access only to Content Nodes resources \(pages\) in the release domain.

Next are illustrations of the available resources tree, first for the release domain, and second for the JCR domain.

![This graphic is an available resource tree for the release domain.](../images/resource_hierarchy.jpg)

The following illustration shows the hierarchy of resources in the JCR domain. These resources are related to Personalization, Web Content Manager, and Resources Policies.

**Note:** This image represents an access control-specific view of resources in the JCR domain. It is not intended to show how the resources are stored and organized in the JCR domain.

Resource Permission inheritance applies to this hierarchy and to the release domain. Permission granted on the JCR Content Root node are propagated to all children in the hierarchy. Use Policies, Web Content Manager Libraries, Inheritance, and Propagation role blocks to reduce this propagation of permissions to children in the hierarchy.

![This graphic shows that permissions granted on the JCR Content Root node are propagated to the children in the hierarchy](../images/resource_hierarchy_jcr.jpg)

A different user interface is provided to administer access control for each type of resource in the JCR domain. The following list shows the path to take within HCL Portal to reach the access control portlet for each resource stored in the JCR domain:

-   Access Control Administration User Interface \(UI\):
    -   Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.
    -   Click the **Administration menu** icon. Then, click **Access** \> **User and Group Permissions**.
-   Personalization user interface: **Personalization** \> **Business Rules** \> **Personalization Navigator portlet**
-   Web Content Libraries user interface: Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.
-   Web Content Manager user interface: **Applications** \> **Content** \> **Web Content Management** \> **Authoring portlet**

You can assign roles on virtual resources and on resource instances. Assigning roles on virtual resources reduces the time required to administer access control. All child resources inherit roles that are assigned to the parent resource by default. Assigning roles to specific resource instances offers more granular access control. You can assign roles to specific resource instances to override role blocks that block inheritance. For more information about role blocks, see the Roles topic.

The following information describes virtual resources. The resources listed might be different depending on other products that are installed with HCL Digital Experience.

-   **Administrative Slots**

    The root node of all administrative vault slots. It protects the administrative slot access and therefore the access to the credentials the slot holds.

-   **Content Nodes**

    The root node of all pages, labels, and external URLs. Pages contain the content that determines the portal navigation hierarchy. If a new top-level page is created, it is automatically a child resource of the Pages virtual resource. If a new page is created beneath an existing page, the new page is automatically child of the existing page. Pages inherit access control configuration from their parent page unless role blocks are used.

-   **Designer Deployment Service**

    Protects the ability to run the automatic deployment feature of IBM® Workplace™ Designer.

-   **Event Handlers**

    Protects management of Event Handlers. This virtual resource has no child resources.

-   **External Access Control**

    Protects modifying access control configuration for resources that are controlled externally by a security manager such as Security Access Manager. Also protects the ability to externalize or internalize a resource. This virtual resource has no child resources.

-   **Markups**

    Protects the ability to control markups for the portal. This virtual resource has no child resources.

-   **Portal**

    This resource is the root node of all resources in the release domain. Roles on this resource affect all other resources in the release domain by default through inheritance unless role blocks are used. Resources in other domains like Templates and Policies are not affected through role mappings on this resource.

-   **Portal Settings**

    Protects portal settings that can be modified through the Portal Settings Portlet or the XML configuration interface. This virtual resource has no child resources.

-   **Portlet Applications**

    The root node of all installed portlet applications. Portlet applications are the parent containers for portlets. If a new web module is installed, the applications that are contained within that module become child resources of the Portlet Applications virtual resource. Portlets that are contained within a portlet application are child nodes of that portlet application. Thus a two-layer hierarchy consisting of portlet applications and the corresponding portlets exists beneath the Portlet Applications virtual resource. Portlets inherit access control configuration from their parent portlet applications unless role blocks are used.

-   **PSE Sources**

    The root node of all search collections. If a new search collection is created, it is automatically a child of this virtual resource. Roles on this resource affect all defined search collections unless role blocks are used.

-   **URL Mapping Contexts**

    The root node of all URL mapping contexts. URL mapping contexts are user-defined definitions of URL spaces that map to portal content. If a new top-level URL mapping context is created, it is automatically a child resource of the URL Mapping Contexts virtual resource. If a new URL mapping context is created beneath an existing context, the new context is automatically a child of the existing context. URL mapping contexts inherit access control configuration from their parent context unless role blocks are used.

-   **User Groups**

    The root node of all user groups. Each user group in the portal inherits its access control configuration from the User Groups virtual resource. It is not possible to create role blocks on individual user groups.

-   **User Self Enrollment**

    Protects the Selfcare and User Enrollment facilities \(sign up and Edit My Profile\). This virtual resource has no child resources.

-   **Users**

    This virtual resource has no child resources. The Users virtual resource protects sensitive operations that deal with user management. For example, in order to add a user to a user group, you must have the Security Administrator@Users role. Users are implicitly protected resources. Users cannot be protected individually, but only through their group membership. As a result, it is not possible to have a role assignment on a specific user. Roles must be on user groups instead. So, you can edit the user profile of Mary if you have a role assignment on some user group to which Mary belongs.

-   **VP URL Mappings**

    Protects the ability to modify a URL Mapping linked to a virtual portal.

-   **Web Modules**

    The root node of all **Web Modules**. **Web Modules** are portlet WAR files that are installed on WebSphere® Application Server. **Web Modules** can contain multiple portlet applications. If a new **Web Modules** is installed, it is automatically a child of the **Web Modules** virtual resource. Roles on this resource affect all child resources \(all installed **Web Modules**\) unless role blocks are used.

-   **WSRP**

    This resource is the parent resource of the virtual resources WSRP Export and WSRP Producers. By default, roles on the WSRP resource affect the other two virtual WSRP resources and all WSRP resource instances through inheritance. If there are no role blocks in between, users who have role assignments on the WSRP resource have access rights on all WSRP resources.

-   **WSRP export**

    This virtual resource controls the ability of a user to provide and withdraw portlets as a WSRP Service.

-   **WSRP Producers**

    This resource is the root node of all registered Producer instances. Each Producer that is registered in the portal inherits its access control configuration from the WSRP Producers virtual resource unless role blocks are used.

-   **XML configuration interface**

    Protects the ability to run XML configuration interface scripts. This virtual resource has no child resources.

-   **ADMIN\_SLOTS**

    The root node of all shared administrative credential vault slots that contain a system credential. This node controls access to modify and delete such vault slots and to retrieve its credentials.

-   **POLICY MAPPING CONTEXTS**

    Identifies the Root node to all Policy items. This virtual resource is independent of the Mapping of a Policy.

-   **SERVER INFORMATION**

    Protects the ability to create/modify/delete Mappings between a remote server information used for Federation and this HCL Portal server instance.

-   **STEP UP AUTHENTICATION**

    Protects the ability to modify the binding of resources such as Portlets or Pages to an authentication level.

-   **TAGS**

    Users can apply keywords to describe, classify, or label web content resources.

-   **RATINGS**

    Users can assign numeric values to web content resources for evaluation.

-   **THEME MANAGEMENT**

    Users can update and modify the portal theme.


-   **[Role blocks for resources](../admin-system/sec_blockroles.md)**  
Role blocks prevent inheritance and propagation through the resource hierarchy. This topic describes role blocks and provides examples of how role blocks affect resources.

**Parent topic:**[Resources, roles, access rights, and initial access control settings](../admin-system/resources_roles.md)

