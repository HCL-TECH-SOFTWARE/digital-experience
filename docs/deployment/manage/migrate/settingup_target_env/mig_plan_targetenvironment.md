# Target environment considerations

Installation planning of the target environment must be part of your overall migration planning. There are some considerations to keep in mind when you install HCL Portal and you plan to do a migration from your existing installation.

## Installing a brand new HCL Digital Experience

When you install a new environment for migration, you must choose the binary-only option. This installation type does not create any profile that might conflict with the migration process. Refer to the Related information section for specific details on installing the target environment.

## Installing the latest fix pack and cumulative fix

Ensure that you install the latest available fix pack and cumulative fix. They might include fixes and improvements to the migration process. Refer to Recommended fixes and updates for HCL Portal and Web Content Management for details.

## Reserved user names and special characters

There are other considerations to keep in mind around the user IDs and passwords when compared to a regular installation. The xyzadmin is a reserved value and cannot be used as HCL Portal or WebSphere® Application Server administrator name. You must change the administrator name from your source environment if you are using this name.


???+ info "Related information"  
    -   [User IDs and passwords](../../../../get_started/plan_deployment/traditional_deployment/sec_chars.md)
    -   [Replacing the HCL Digital Experience administrator user ID](../../../../deployment/manage/security/updating_userid_pwd/portalid.md)
    -   [Replacing the WebSphere Application Server administrator user ID](../../../../deployment/manage/security/updating_userid_pwd/rep_was_id.md)
    -   [Planning to install HCL Digital Experience](../../../../get_started/plan_deployment/traditional_deployment/index.md)


