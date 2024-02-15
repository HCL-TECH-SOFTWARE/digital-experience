# Auditing

HCL Digital Experience includes an auditing function that allows users to log certain events and their originators in to a separate log file. This file can then be used to track administrative activities.

The following details are logged for each event:

-   The time stamp
-   An optional transaction ID
-   An optional project ID
-   The user action
-   Individual event details

If the user who does the action (for example, Bob) is impersonated by another user (for example, Alice), the user is shown as [Bob[Alice]] in the log file.

You can use the auditing function on the following events:

-   Creating, modifying, and deleting users and groups
-   Assigning and revoking roles to and from users
-   Modifying role blocks
-   Modifying resource ownership
-   Creating, modifying, and deleting protected resources
-   Externalizing and internalizing resources
-   Installing and uninstalling web modules
-   Creating and deleting application roles
-   Assigning and revoking application roles to and from users
-   Adding and deleting roles to application roles
-   Initializing a database domain
-   Creating, modifying, and deleting portlet applications by using IBM Lotus Component Designer
-   Starting and ending impersonating a user or impersonating a user without the appropriate permission.

To activate and configure the auditing function, modify the auditing service settings in the Auditing Service by following the steps that are provided in the Setting service configuration properties file.


???+ info "Related information" 
    -   [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    -   [Administering user impersonation](../../../deployment/manage/security/people/authorization/users_and_groups/impersonation/index.md)

