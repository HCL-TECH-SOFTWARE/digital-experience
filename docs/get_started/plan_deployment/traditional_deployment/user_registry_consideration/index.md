# User registry considerations

A user registry or repository authenticates a user and retrieves information about users and groups to implement security-related functions, including authorization.

User registries store user account information, such as user IDs and passwords, that can be accessed during authentication. User repositories store user profiles and preference information. A user registry or repository is used to complete these actions:

-   Authenticate a user by using basic authentication, identity assertion, or client certificates
-   Retrieve user and group information to implement security-related administrative functions such as mapping users and groups to security roles

By default, HCL Digital Experience is installed with a federated repository with a built-in file repository. With the federated repository, you can add various user registries, realm support for virtual portals, and property extensions to create a single, working unit. The available user registries that you can add to the federated repository are LDAP user registries, database user registries, and custom user registries.

**Remember:** Do not use the built-in file repository in a production environment. After you add another repository and choose the administrative users from that repository, you must remove the file repository.

Based on the federated repository, in HCL Digital Experience, you can create a user base that can be federated among multiple repositories: LDAP, DB, and custom user registry. You can also define additional attributes in a separate store if your corporate LDAP directory is read-only.

If you are using a federated repository, you must plan where you want to store new users and groups. By default, new users and groups are stored in the default file repository. If you use multiple LDAP user registries and database user registries, you must specify which user registry is your default user registry and where new users and groups are stored. After you add all user registries to your federated repository, you can run the `wp-set-entitytypes` task to set a specific user registry as the default location.

**Remember:** Before you combine multiple user registries, review the registries for the following limitations and correct any issues:

-   Distinguished names must be unique for a realm among all registries. For example, if uid=wpsadmin,o=yourco exists in LDAP1, it must not exist in LDAP2, LDAP3, or DB1.
-   The short name, for example wpsadmin, should be unique for a realm among all registries.
-   The base distinguished names for all registries that are used in a realm must not overlap. For example, if LDAP1 is c=us,o=yourco, LDAP2 must not be o=yourco.
-   Do not leave the base entry blank for any of the registries that are used in a realm.
-   If HCL Domino is one of your user registries in a multiple registry configurations and shares a realm with another user registry, ensure that the groups are stored in a hierarchical format in the Domino Directory, not the default flat-naming structure. For example, the flat-naming convention is cn=groupName and the hierarchical format is cn=groupName,o=root.
-   A user must exist in a user registry and not in the property extension configuration. Otherwise, the user cannot be a member of the realm.
<!-- The following bullet points start a new list. Please tell readers what the list is and how the entries "hang" together -->
-   **[User registry options](plan_ureg_ov.md)**  
HCL Digital Experience provides various security configuration tasks. In previous versions, one task was available and error recovery was uncertain. Also in previous version, you were unable to expand your user registry to meet growing business needs. HCL DX 9.5 and later offer multiple tasks and you can fine-tune your system to meet your business needs.
-   **[Virtual Member Manager integration](plan_vmm_int.md)**  
HCL Portal uses Virtual Member Manager \(VMM\), an interface that enables communication between HCL Digital Experience and any repository.
-   **[Realm support](plan_realm.md)**  
A realm is a collection of users or groups from one or more branches of your repository tree. Those branches can be part of a single repository, for example an LDAP user registry, or it can be a combination of multiple user registries. A realm is then mapped to a virtual portal to allow the realm's user population to log in to the virtual portal. With this function, you can define areas in HCL Portal that only a limited set of users can access.
-   **[Property extension](plan_ladb.md)**  
Use the property extension to store extra user attributes in a database store without touching your backend user registry.


???+ info "Related information"
    - [Choose the type of group to use](../../../../deployment/manage/security/people/authorization/users_and_groups/type_of_group.md)

