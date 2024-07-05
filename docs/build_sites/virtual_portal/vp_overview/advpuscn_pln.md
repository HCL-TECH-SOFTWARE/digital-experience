# Scenarios with multiple portals for your business requirements

Before you decide on a portal installation with multiple virtual portals, you need to determine your specific business requirements and the purpose of your portal. This can help you decide whether virtual portals are a valid solution for your requirements, or whether it is better for you to use multiple real portals. Consider and answer the questions in the following sections.

-   **Using virtual portals versus multiple real portals**

    The benefit of virtual portals consists of sharing several resources between the virtual portals. Rather than having one of these resources for each portal, all virtual portals use the same single instance of such a resource. This reduces the administrative cost and optimizes the resource usage. Typically, virtual portals share the following resources:

    -   The JVM
    -   Portlets and other code fragments
    -   The database
    Additional to the benefit of sharing these resources, the virtual portals can be scaled to a large extent, and you can host many virtual portals on a single portal installation. For a complete list of the resources that virtual portals share, see *Separating and sharing resources between virtual portals*. Sharing resources, however, can create dependencies between virtual portals. For example, if one of the virtual portals requires maintenance, all virtual portals are affected by the outage and undergo the same maintenance updates. If you can accept such dependencies in your business environment, virtual portals are a simple and cheap solution for you. Otherwise, you have the alternative of using multiple real portal installations. For more information, see *Alternative concepts for virtual portals on HCL Portal*.

-   **Sharing or separating virtual portal administration**

    Do you plan to have each virtual portal administered by its own group of administrators, or will you have a central administration group for the entire portal installation and all virtual portals?

    You can select a specific group of sub-administrators who can manage the resources and users of a particular virtual portal. The master administrator of the portal installation can set up the privileges of the individual sub-administrators for each virtual portal.

    If you do not require a specific subadministrator group for each virtual portal, the portal administrators can share the administrative work for all virtual portals.

-   **Sharing or separating user populations**

    Does each virtual portal need its own separate user population, or can all virtual portals share the single user population?

    To ensure that only members of a dedicated user population can access a virtual portal, use the realm concept that is provided by the Virtual Member Manager \(VMM\). VMM is available as a built-in user registry in WebSphere® Application Server. This security concept is known as federated security.

    If all your virtual portals can use the same user population, you can configure federated security with a single realm. This realm can contain users and groups from one or more repositories.



???+ info "Related information"
    - [Separating and sharing resources between virtual portals](../vp_planning/advppln_scope.md)

