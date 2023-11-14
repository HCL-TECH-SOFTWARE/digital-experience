# Realm support

A realm is a collection of users or groups from one or more branches of your repository tree. Those branches can be part of a single repository, for example an LDAP user registry. A realm can also be a combination of multiple user registries. A realm is then mapped to a virtual portal so the realm's user population can log in to the virtual portal. With this function, you can define areas in HCL Portal that only a limited set of users can access.

For example, if you are an international company with employees in Asia, Europe, the USA, and Canada, you might have an application or information that applies  to only a subset of these employees. You can create a subset of employees and create a virtual portal that contains the application or information for that realm. Users from one realm cannot access another realm unless they are also members of that realm. For example, the wpsadmin user cannot log in to a virtual portal unless the wpsadmin user is a member of the corresponding realm.

You can create a realm that combines users from various user registries. For example, your realm can span three LDAP user registries and a database user registry: LDAP1, LDAP2, LDAP3, and DB1.

**Remember:** Before you combine multiple user registries, review the registries for the following limitations and correct any issues:

-   Distinguished names must be unique in a realm in all registries. For example, if uid=wpsadmin,o=yourco exists in LDAP1, it must not exist in LDAP2, LDAP3, or DB1.
-   The short name, for example wpsadmin, should be unique in a realm in all registries.
-   The base distinguished names for all registries that are used in a realm must not overlap. For example, if LDAP1 is c=us,o=yourco, LDAP2 must not be o=yourco.
-   Do not leave the base entry blank for any  registries used within a realm.
-   If HCL Domino is one of your user registries in a multiple-registry configuration and shares a realm with another user registry, ensure that the groups are stored in a hierarchical format in the Domino Directory, not in the default, flat-naming structure. For example, the flat-naming convention is cn=groupName and the hierarchical format is cn=groupName,o=root.
-   The user must exist in a user registry and not in the property extension configuration. Otherwise, the user cannot be a member of the realm.


???+ info "Related information"
    - [Managing the user population for virtual portals](../../../../build_sites/virtual_portal/vp_planning/advppln_mgupop.md)

