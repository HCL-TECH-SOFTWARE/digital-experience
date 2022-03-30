# Property extension 

Use property extension to store extra user attributes into a database store without touching your backend user registry.

HCL Web Content Manager stores extra information for the following features:

-   Web content user profiling
-   Category selection trees

You can use the property extension if your LDAP is read-only but you want users to specify an extra attribute such as Timezone. You can store this extra attribute in the database store. You can also add extra attributes for an application if you cannot change your repository schema. Property extension can be used with a federated repository or a custom user registry.

If this information cannot be stored in the main repository, for example the main repository is read-only, a property extension configuration is required.

**Parent topic:**[User registry considerations ](../plan/plan_ureg.md)

