# Resources



Resource types are broad categories that contain resource instances. Resource instances are specific resources, such as a single portlet or page. Each resource instance belongs to only one resource type. For example, the resource instance Market News Page would belong to the Page resource type. Virtual resources are a unique resource type. Virtual resources contain the parent resources for all other HCL Digital Experience resources.

Roles on a resource propagate to all of its child resources. For example, a user has the Editor role on the Market News Page. By default, that user also has the Editor role on all pages that are child pages of the Market News Page.

You can assign roles on virtual resources and on resource instances. Using virtual resources saves time administering access control because child resources inherit parent resource roles. Use resource instances to specify which individual resources users can access. Although this process can be time-consuming, it provides more flexibility when you assign roles.

The following information provides a brief description of resource types:

-   **Pages**

    The content that determines the portal navigation hierarchy.

-   **Project**

    The projects active in the portal.

-   **PSE Sources**

    Represents the root node of all Portal Search Collections. For information, refer to the *Portal Search* section.

-   **Policies**

    Use policies to specify and apply common and specialized settings that determine how portal resources function for different classes of users. For information about policies collections, refer to the *Managing portal resources with policies* section.

-   **Policy Root**

    The Policy Roots configured in the portal to hold policies.

-   **Portlet Applications**

    Parent containers for portlets.

-   **Portlets**

    The portlet objects. Multiple instances of the portlet object can exist on multiple pages in the portal. Users have the same access to all instances of a portlet.

-   **URL Mapping Contexts**

    User-defined definitions of URL spaces that map to portal content.

-   **Users**

    Users of the portal.

-   **User Groups**

    Groups of portal users.

-   **Vault Slot**

    Defined vault slots for the credential vault.

-   **Virtual Resources**

    Virtual resources have two functions:

    -   Protecting sensitive operations that affect the entire portal. For example, the XMLAccess virtual resource protects the ability to run XMLAccess scripts.
    -   Grouping resources of the same resource type. For example, the **Web Modules** virtual resource is the root node of all **Web Modules** within the portal. Role assignments on the **Web Modules** virtual resource grant access to all **Web Modules** in the portal.
-   **WSRP Producer**

    Configured in the Consumer portal, they are remote Producer instances that a Consumer portal uses to consume remote portlets.

-   **Web Modules**

    Portlet WAR files that are installed on the WebSphere® Application Server. Web modules can contain multiple portlet applications.


