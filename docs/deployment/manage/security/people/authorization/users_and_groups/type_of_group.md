# Choose the type of group to use

HCL Digital Experience offers many types of groups and locations to store the groups. Choosing the type of group and the location the groups are stored is an important step in planning for using groups with HCL Portal.

The following list provides a summary of available options for using groups in HCL Portal.

-   **File Repository**

    Type of group: Static only

    Advantage: Configured with your initial installation

    Disadvantage: Not supported in production systems

-   **LDAP**

    Type of group: Static, Nested \(optional\), Dynamic \(optional\)

    Advantage: LDAP is an established industry protocol, which can integrate with multiple applications. In most use cases, HCL Portal connects to and uses existing groups in an LDAP server.

    Disadvantage: LDAPs are only required to support static groups. Individual LDAP vendors might optionally choose to support both nested and dynamic groups or to support either nested group or dynamic group. Check with your LDAP administrator to determine which type of groups your LDAP supports. If you have more requirements for using groups, consider to use an LDAP location and another location for the groups that are listed next.

-   **Virtual Member Manager Federated database**

    Type of group: Static only

    Advantage: Useful in situations where LDAP is read-only and needs more groups specific to Portal. Allows for cross-repository groups, that is, users from LDAP\#1 and users from LDAP\#2 may exist in the same database group.

    Disadvantage: Groups are not accessible outside of the HCL Portal server.

-   **Rule Based User Groups**

    Type of group: Dynamic only

    Advantage: Provides dynamic group functions to HCL Portal in cases where an LDAP server does not support dynamic groups.

    Disadvantage: Only supported by HCL Portal. Other WebSphere Application Server based products cannot use these groups. Groups are accessible outside of the HCL Portal server.



**Related information**  


[User registry considerations](/digital-experience/get_started/plan_deployment/traditional_deployment/user_registry_consideration/)

[Rule-based user groups](/digital-experience/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups)

[Configuring dynamic member attributes in a federated repository configuration](https://www.ibm.com/docs/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/twim_dynamic_member_attrs.html)

