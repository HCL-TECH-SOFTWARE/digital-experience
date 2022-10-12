# Managing the user population for virtual portals

You have two basic options for the management of user populations for your virtual portals: Virtual Member Manager \(VMM\) or Lightweight Directory Access Protocol \(LDAP\).

This depends on whether you want separate user populations for your virtual portals or a simple solution with one user population for all virtual portals:

-   Using the **Virtual Member Manager** that is integrated with WebSphere® Application Server; it is also known as the Federated Repository. You can use the Federated Repository to set up both types of configuration:

    -   Configuring separate user populations for each of your virtual portals. This option offers a high flexibility for the user management of your virtual portals. With this configuration, you can define an individual user population for each virtual portal.
    -   Using a common user population with the Virtual Member Manager for all your virtual portals. In this case, all users of that user population can access all virtual portals, unless their access permissions are explicitly restricted by portal access control settings. To achieve this restriction, you must define the access permissions manually by using the Portal Access Control portlets.
    A user registry can be based on a Lightweight Directory Access Protocol \(LDAP\) or on a database. For more information about configuring your virtual portals with Virtual Member Manager and the different configuration options see the following sections.

-   Using the **Lightweight Directory Access Protocol \(LDAP\)**. If a single common user repository is sufficient for all virtual portals within your installation, you can continue to use an LDAP in your virtual portal setup. This is the simpler one of the two options.

    With this configuration the entire portal installation and all virtual portals share a common user population, which is defined in a single user repository. In this case all users of that user population can access all virtual portals, unless their access permissions are explicitly restricted by portal access control settings. In order to achieve access restrictions for specific virtual portals, you can use the Portal Access Control portlets. You define user groups and assign to them the access permissions to the resources of each virtual portal.


For HCL Portal installations, the Federated Repository option offers you more flexibility for the user management of virtual portals. By using the Virtual Member Manager, you can limit the usage of a particular virtual portal to a specific user population. This is achieved by introducing the concept of **realms**.

The following sections give overview information of how to use the Virtual Member Manager and realms in the context of virtual portals. For a wider overview of portal security see the topics about *Securing* and *Configuring* the portal and about access permissions, users and groups. For more details about how to configure the Virtual Member Manager and realms see the topics about adding realm support for your environment.

A virtual portal can only be accessed by members of its associated user population. By using Portal Access Control that you can assign and restrict access permissions within the user population of a virtual portal to the resources of that virtual portal. However, Portal Access Control cannot overwrite the predefined assignment of a particular user population to their virtual portal. You cannot use Portal Access Control to assign access permissions that cross the separation between virtual portals. For example, you cannot use the Portal Access Control of a virtual portal VP\_A to give a user User\_A\_1 of that portal access to resources of another virtual portal VP\_B. The following conditions apply:

-   A realm contains the entire user population of one virtual portal.
-   Each virtual portal can have its own realm of users that are associated. However, it is also possible that multiple virtual portals can share their user population by using the same realm in parallel.
-   To be able to log in to a particular virtual portal, a user must be a member of the realm that is associated with that virtual portal.

For more details about preparing the Virtual Member Manager and realms for your virtual portals, read the next section.

## Preparing the user populations for your virtual portals

If you plan to use realms for your virtual portals, you need to configure Virtual Member Manager and the realms before creating your virtual portals. Each realm must specify the repository nodes \(base entries\) that belong to the user population represented by this realm.

In addition to the realms that you create to define the user populations of the individual virtual portals, you must create a super realm. This super realm spans all other realms and contains all the users of those other realms; it is also known as the default realm.

By default HCL Portal is configured with Federated Repositories as User Registry provider. By default only the super realm, or default realm, is configured. After you have configured your portal instance against your user backend repositories, you can use tasks that are provided by the portal to configure the realms that the Virtual Member Manager provides. For the task that describes how to add a realm and modify the base entries or nodes inside that realm, read the topics about adding realm support for your portal environment.

**Using a non-default realm:** If you assign a non-default realm to the default virtual portal, ensure that all administrative accounts are available within the non-default realm. If you have Web Content Manager, do not use a non-default realm, as Web Content Manager is not scoped to virtual portals.

The following sections give an overview of example configurations of the Virtual Member Manager for virtual portals. For more information about configuring realms for your virtual portals, read *Virtual Member Manager integration*.

## Configuring a common user population for all virtual portals

In a simple setup, you can use the Virtual Member Manager together with a common user repository. This user repository is represented by a single realm, and used by all virtual portals. In this case, all virtual portals use a common realm and a common user repository. This configuration provides no separation between the users of the different virtual portals.

HCL Portal still supports the WebSphere Application Server Lightweight Directory Access Protocol \(LDAP\) custom user registry that previous versions of HCL Portal used. You can configure it as alternative. Again, this configuration uses a common user repository for all virtual portals without separation between the users of the different virtual portals.

## Configuring separate user populations for the individual virtual portals

If you want to have the users of your virtual portals that are separated, you must apply the more advanced setup by using Federated Repositories. Then, configure separate realms for your virtual portals. When users access a virtual portal, the portal installation selects the appropriate realm that is based on the current virtual portal context. Within a virtual portal, only users of that corresponding realm are "visible". The administrator of a particular virtual portal can give access permissions only to users and groups in the population of that virtual portal. Therefore, when you create a virtual portal, the realm that represents the population of the new virtual portal must be a subset of the realm that is used by your portal installation.

!!! note
    This separation of user populations between virtual portals works only with Federated Repositories. The portal supports separate realms and user repositories for virtual portals only when you use the Federated Repositories.

When you use the Federated Repositories, you can separate user groups and administrative users by configuring your virtual portals according to your business requirements. You do this based on the following relationships between user repositories, realms, and virtual portals:

-   You can aggregate users and groups from one user registry in one realm, and expose them as one coherent user population to the portal installation. You can separate the user population of each virtual portal by assigning different LDAP suffixes to the different realms. The LDAP suffixes are called base entries. This way the concept of realms allows you various flexible configuration options.
-   A realm can aggregate one or more base entries in a user registry.
-   A realm can combine multiple base entries of one user repository. A suffix of a user repository can belong to one or more realms. The LDAP suffixes of the individual users must match the suffixes of the groups to which they belong.
-   A virtual portal is associated with one realm. Each virtual portal uses exactly one realm, but a realm can be used by multiple virtual portals.
-   A virtual portal can also be associated with no realm. If no realm is assigned for a virtual portal, the user population that was defined for the super realm can log on to the virtual portal.
-   When you use Federated Repositories, the initial portal installation has no realm that is associated by default. The user population of the initial portal installation spans the entire user registry that you configured in the Virtual Member Manager.
-   The individual user IDs must be unique across all realms.
-   To log in to a virtual portal, the virtual portal administrator and all users must be a member of the realm for that virtual portal. To allow a user access to more than one virtual portal, that user \(and the Virtual Member Manager node to which the user belongs in the hierarchy of the user directory\) must be a member of all the realms that are associated with these virtual portals. For example, this information applies to a super administrator who is responsible for all virtual portals within an entire Portal installation.
-   To administer a virtual portal, the base portal administrator must be a member of the realm that is associated with the virtual portal. The base portal administrator is required to be part of all realms.

    If the administrator is not a part of the virtual portal realm, then the administrator does not have access to that virtual portal. This also applies to the base portal administrator group. If the portal administrator is not part of all realms, then you might encounter issues or the inability to complete certain tasks. For example, a portal installation with virtual portals cannot be migrated, if the portal administrator cannot access the virtual portals for the migration.

-   User populations of realms can overlap. In other words, users can be members of multiple realms. If realms overlap, then these users can work in all the virtual portals that are associated with these realms.

!!! important 
    The administrator unique ID for the Java™ Content Repository \(JCR\) must be a distinguished name \(DN\) for a super administrator. You specify the administrator unique ID as the value defined in the **jcr.admin.uniqueName** property. To view this property, log in to WebSphere Integrated Solutions Console. Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties** \> **jcr.admin.uniqueName**.

For example, you can set up the following configurations:

-   You can configure one LDAP suffix with all administrative users, for example dc=administrators,dc=ibm,dc=com and a separate LDAP suffix with the users, for example dc=users,dc=ibm,dc=com.
-   You can configure separate LDAP suffixes that contain different user populations, for example dc=bank1,dc=com for Bank\_1 and dc=bank2,dc=com for Bank\_2.

!!! note
    -   **Considerations for deleting resources in virtual portals:**

        The Portal Access Control administration in the Resource Permissions portlet shows users from different realms who have role mappings on shared resources by their object IDs. Therefore, apply special care and consideration when you delete such portal resources: Do not delete resources on which users from other realms have role mappings, if they are required in other virtual portals. This information applies to members of roles on portal resources that cannot be scoped and are therefore shared between the virtual portals. Role members who belong to the realm of your local virtual portal are displayed as usual, but role members who belong to different realms are displayed in a different manner:

        -   Role members for shared resources who belong to the realm of the virtual portal where you are currently working are listed by their actual names.
        -   Role members for shared resources that do not belong to the realm of the current portal are listed by their portal object IDs. For example, a role member from a different realm might be represented as 8\_0\_B.
        Find the list of role members. Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**. From the list of Resource Types, select a Resource Type by clicking it. On the Resource Permissions page, click the **Assign Access** icon. The members are listed in the **Roles** column.

    -   **How to grant virtual portal administrators access to web content libraries:**

        Virtual portal administrators do not automatically have access to work with web content libraries when you use the administration portlet. To enable a virtual portal administrator to work with web content libraries, you need to assign them access to either the JCR content root node or individual web content libraries:

        -   You can assign virtual portal administrators access to the JCR content root node with `Set access on root` in the Web Content Library view of the Administration portlet. For more information, go to the portlet online help.
            -   Assign virtual portal administrators administrator access to the JCR content root node to enable them to create new libraries and view, edit, and delete all existing libraries.
            -   Assign virtual portal administrators contributor access to the JCR content root node to enable them to create new libraries and view, edit, and delete libraries that they created.
        -   You can also assign virtual portal administrators access to libraries they did not create by editing the access settings of individual libraries.


???+ info "Related information:"
    - [Usage scenarios for virtual portals](../vp_overview/advpuscn_usage.md)
    - [Securing](../../../deployment/manage/security/index.md)
    - [Configuring](../../search/manage_search/search_collection/creating_content_source/configuring.md)
    - [Realm support](../../../get_started/plan_deployment/traditional_deployment/user_registry_consideration/plan_realm.md)
    - [Controlling access](../../../deployment/manage/security/controlling_access/index.md)
    - [Virtual Member Manager integration](../../../get_started/plan_deployment/traditional_deployment/user_registry_consideration/plan_vmm_int.md)
    - [Adding realm support](../../../deployment/manage/security/user_registry/cfg_realm.md)
    - [Managing the users of virtual portals](../adm_vp_task/vp_adm_task/managing_users_vp/index.md)
    - [Portal Access Control with virtual portals](../vp_planning/vp_roles/advppln_roles_pac4vp.md)

