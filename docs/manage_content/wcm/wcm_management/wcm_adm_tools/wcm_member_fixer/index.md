# The web content member fixer task

Use the member fixer task to check whether any users or groups that are referenced in HCL Web Content Manager items have been renamed or deleted and fix these references.

Member fixer is used to:

-   Fix references to users in library and item level access settings that refer to users and groups from a user repository where the structure of the user repository has been altered. For example, an LDAP transfer might have been run, or the LDAP schema might have changed, or users and groups might have been moved in the LDAP.
-   Fix references to users in item level access settings that refer to users and groups who have been deleted from the user repository.

The member fixer task's function is to check all of the items in a specified library for references to users and groups that no longer exist in the current user repository. In report mode, it reports all the references to members. In fix mode, these references can be fixed, either by replacing them with references to members that exist, or by removing the references. The fix parameter determines whether the member fixer task runs in report or fix mode.

References to members in library items contain the distinguished name of the member or a unique ID for the member. This unique ID is an internal ID that is unique over time, and is different to the distinguished name. This means if a member is deleted and another member is created with the same distinguished name, the two members will have different unique IDs. The mismatchedId parameter can be used to update or remove references from web content items to users with these unique IDs.

When a member that has been given permissions on a library is deleted, the member permissions are entirely removed from the library, so that any inherited permissions for items in the library will also be removed. Therefore, the member fixer task cannot be used to update these permissions to a different member. However, when an LDAP transfer is carried out, the member permissions on the library are maintained. So, the member fixer task can be run after an LDAP transfer to update or remove these permissions

<!---
-   **[How to use the member fixer task](../wcm/wcm_admin_member-fixer.md)**  
Enable the member fixer task, create custom mappings, and then run the task.
-   **[Member fixer with syndication](../wcm/wcm_admin_member-fixer_synd.md)**  
You can configure your system to automatically run the member fixer tool when syndicating. The member fixer is run on the subscriber during syndication. It is run against items that have just been syndicated. Details of the member fixer operations are included in the syndication report.
-   **[Member fixer task frequently asked questions](../wcm/wcm_admin_member-fixer_examples.md)**  
Some frequently asked question about how to use the web content member fixer task. --->


