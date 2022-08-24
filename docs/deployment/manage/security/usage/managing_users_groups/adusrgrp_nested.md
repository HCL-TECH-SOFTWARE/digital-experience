# Nested groups

Two groups are nested if one of the groups contains the other group as a member. The access control system treats nested groups as though all members of the contained group are also members of the containing group. In other words, permissions for nested groups are treated as cumulative.

For example, one group, GlobalMarketing, might contain another group, USMarketing, resulting in all members of USMarketing being treated as members of GlobalMarketing. Therefore, members of USMarketing inherit the access rights that are granted to GlobalMarketing members. So, if GlobalMarketing has view access to the **File Server** portlet, and USMarketing has view access to the **Reminder** portlet, USMarketing has view access to both the **File Server** and **Reminder** portlets. For example, Joe, as a member of the GlobalMarketing group, can access only the **File Server** portlet, but Susan, as a member of the USMarketing group, can access both portlets.

**Note:** If you do not plan to use nested groups for access control inheritance, set accessControlDataManagement.enableNestedGroups to false in the **Access Control Data Management** service, nestedGroupLookup.disabled to true in the **WCM WCMConfigService** service, and rulesEngine.user.nestedGroupLookup to false in the PersonalizationService.properties file to improve performance. These settings limit the Portal Access Control membership lookup to one group level in the hierarchy. A user is granted access rights only by explicit role mappings or role mappings to the groups of which that user is a direct member. For information, go to *Setting service configuration properties*.


**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

