# User registry considerations

A user registry or repository authenticates a user and retrieves information about users and groups to do security-related functions, including authorization.

User registries store user account information, such as user ID and password, that can be accessed during authentication. User repositories store user profiles and preference information. A user registry or repository is used to:

-   Authenticate a user by using basic authentication, identity assertion, or client certificates
-   Retrieve user and group information to do security-related administrative functions such as mapping users and groups to security roles

By default, HCL Digital Experience is installed with a federated repository with a built-in file repository. The federated repository allows you to add various user registries, realm support for Virtual Portals, and/or property extensions to create a single, working unit. The available user registries that you can add to the federated repository are LDAP user registries, database user registries, and custom user registries.

**Remember:** Using the built-in file repository is not recommended in a production environment. After you add another repository and choose the administrative users from that repository, you must remove the file repository.

Based on the federated repository, HCL Digital Experience allows you to create a user base that can be federated over multiple repositories: LDAP, DB, and/or custom user registry. It also allows you to define additional attributes in a separate store if your corporate LDAP directory is read-only.

If you are using a federated repository, you must plan on where you want to store new users and groups. By default, new users and groups are stored in the default file repository. If you use multiple LDAP user registries and database user registries, you must figure out which user registry you want to define as your default user registry where new users and groups are stored. After you add all user registries to your federated repository, you can run the wp-set-entitytypes task to set a specific user registry as the default location.

**Remember:** Before you combine multiple user registries, review the registries for the following limitations and correct any issues:

-   Distinguished names must be unique for a realm over all registries. For example, if uid=wpsadmin,o=yourco exists in LDAP1, it must not exist in LDAP2, LDAP3, or DB1.
-   The short name, for example wpsadmin, should be unique for a realm over all registries.
-   The base distinguished names for all registries that are used within a realm must not overlap; for example, if LDAP1 is c=us,o=yourco, LDAP2 must not be o=yourco.
-   Do not leave the base entry blank for any of the registries used within a realm.
-   If HCL® Domino® is one of your user registries in a multiple registry configuration and shares a realm with another user registry, ensure that the groups are stored in a hierarchical format in the Domino Directory as opposed to the default flat-naming structure. For example, the flat-naming convention is cn=groupName and the hierarchical format is cn=groupName,o=root.
-   The user must exist in a user registry and not within the property extension configuration; otherwise, the user cannot be a member of the realm.

-   **[User registry options](plan_ureg_ov.md)**  
HCL Digital Experience provides various security configuration tasks. In the past, there was one task and you might not recover from errors. Also, you might not expand your user registry to meet your growing business needs. Now there are multiple tasks and you can fine-tune your system to meet your business needs.
-   **[Virtual Member Manager integration](plan_vmm_int.md)**  
HCL Portal uses Virtual Member Manager \(VMM\), an interface that enables communication between HCL Digital Experience and any repository.
-   **[Realm support](plan_realm.md)**  
A realm is a collection of users or groups from one or more branches of your repository tree. Those branches can be part of a single repository, for example an LDAP user registry, or it can be a combination of multiple user registries. A realm is then mapped to a Virtual Portal to allow the realm's user population to log in to the Virtual Portal. This functionality allows you to define areas within HCL Portal that only a limited set of users can access.
-   **[Property extension](plan_ladb.md)**  
Use property extension to store extra user attributes into a database store without touching your backend user registry.


???+ info "Related information"
    - [Choose the type of group to use](../../../../deployment/manage/security/users_and_groups/type_of_group.md)

