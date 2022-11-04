# Database transfer: Granting privileges to database users for DB2 for i

Configuration and runtime database users are granted a different set of privileges, depending on whether these users are schema owners or not. You can create a copy of the SQL scripts and edit this copy to manually grant permissions to configuration and runtime database users.

!!!note
    The wizard refers to the database user profile as the database configuration user.

## Required privileges of the configuration database user

When a configuration database user (database user profile) is a schema owner, the domain.DbUser property is assigned the same value as the domain.DbSchema property, and a role is created for a configuration user in each database domain. This role is created and assigned automatically when you create your database using the configuration wizard or when you run the create-database configuration task.

To learn more about the specific permissions granted to the configuration database user, navigate to the SQL script templates in the installation directory of HCL Digital Experience. These read-only templates should not be modified. To grant these privileges, you can create a copy of the SQL scripts and use this copy to grant permissions manually.

Refer to the following locations of the SQL script templates to learn more about the specific permissions granted to the schema-owning configuration database user:

|Database domain|Location of template|
|---------------|--------------------|
|Release|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/release/createConfigRoleForSameSchema.sql`|
|Community|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/community/createConfigRoleForSameSchema.sql`|
|Customization|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/customization/createConfigRoleForSameSchema.sql`|
|JCR|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/jcr/createConfigRoleForSameSchema.sql`|
|Feedback|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/feedback/createConfigRoleForSameSchema.sql`|
|Likeminds|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/likeminds/createConfigRoleForSameSchema.sql`|

Refer to the following locations of the SQL script templates for non-schema-owning configuration database user:

|Database domain|Location of template|
|---------------|--------------------|
|Release|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/release/createConfigRoleForDifferentSchema.sql`|
|Community|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/community/createConfigRoleForDifferentSchema.sql`|
|Customization|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/customization/createConfigRoleForDifferentSchema.sql`|
|JCR|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/jcr/createConfigRoleForDifferentSchema.sql`|
|Feedback|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/feedback/createConfigRoleForDifferentSchema.sql`|
|Likeminds|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/likeminds/createConfigRoleForDifferentSchema.sql`|

## Required privileges for the runtime database user

When the runtime database user is a schema owner, the domain.DbUser property is assigned the same value as the properties domain.DbRuntimeUser and domain.DbSchema. The runtime database user typically does not create tables used to query and manipulate data and does not by default have access to these tables. To grant minimum privileges to a runtime database user to work with these tables, access needs to be provided for the objects individually. A role is created for runtime database users in each database domain. These roles are created and assigned automatically when you run the following configuration tasks:

-   create-database
-   grant-runtime-db-user-privileges

Before you run these configuration tasks, the runtime database user can only access the database to validate configurations. To learn more about the specific permissions granted to the runtime database user, navigate to the SQL script templates in the installation directory of HCL Portal. These read-only templates should not be modified. To grant these privileges, you can create a copy of the SQL scripts and use this copy to grant permissions manually.

Refer to the following locations of the SQL script templates to learn more about the specific permissions granted to the schema-owning configuration database user:

|Database domain|Location of template|
|---------------|--------------------|
|Release|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/release/createRuntimeRoleForSameSchema.sql`|
|Community|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/community/createRuntimeRoleForSameSchema.sql`|
|Customization|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/customization/createRuntimeRoleForSameSchema.sql`|
|JCR|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/jcr/createRuntimeRoleForSameSchema.sql`<br>`[PortalServer_root/jcr/wp.content.repository.install/config/templates/setupdb/db2_iseries/jcr/grantPermissionsToRuntimeRoleStatic.sql`

|
|Feedback|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/feedback/createRuntimeRoleForSameSchema.sql`|
|Likeminds|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/likeminds/createRuntimeRoleForSameSchema.sql`|

Refer to the following locations of the SQL script templates to learn more about the specific permissions granted to the non-schema-owning runtime database user:

|Database domain|Location of template|
|---------------|--------------------|
|Release|`[PortalServer_rootbase/wp.db.impl/config/templates/setupdb/db2_iseries/release/createRuntimeRoleForDifferentSchema.sql`|
|Community|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/community/createRuntimeRoleForDifferentSchema.sql`|
|Customization|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/customization/createRuntimeRoleForDifferentSchema.sql`|
|JCR|`[PortalServer_root/base/wp.db.impl/config/templates/setupdb/db2_iseries/jcr/createRuntimeRoleForDifferentSchema.sql``[PortalServer\_root/jcr/wp.content.repository.install/config/templates/setupdb/db2_iseries/jcr/grantPermissionsToRuntimeRole.sql`

|
|Feedback|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/feedback/createRuntimeRoleForDifferentSchema.sql`|
|Likeminds|`[PortalServer_root/pzn/prereq.pzn/config/templates/setupdb/db2_iseries/likeminds/createRuntimeRoleForDifferentSchema.sql`|


???+ info "Related information"
    -   [Database users](../../../../get_started/plan_deployment/traditional_deployment/database_consideration/dbusers_common.md)

