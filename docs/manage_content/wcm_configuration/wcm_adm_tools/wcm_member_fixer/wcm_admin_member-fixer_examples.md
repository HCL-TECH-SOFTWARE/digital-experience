# Member fixer task frequently asked questions

Some frequently asked question about how to use the web content member fixer task.

-   **How can users or groups in web content items be replaced if they still exist in the user repository or LDAP?**

    The member fixer task cannot replace any valid users that exist in the user repository or LDAP.

-   **How can last modified dates be preserved when web content items are updated by the member fixer task?**

    Use the -DpreserveDates=true option. See [How to use the member fixer task](wcm_admin_member-fixer.md) for details.

-   **How do I avoid session time-outs before the member fixer task is finished?**

    The session timeout needs to be increased for long running member fixer tasks. The default is 14,440 seconds which is 4 hours. For example, to set the session timeout to 10 hours add -DsessionTimeout=36000 to the task request. See [How to use the member fixer task](wcm_admin_member-fixer.md) for details.

-   **How do I restrict the member fixer task to only operate on certain web content item types?**

    Use the -DrestrictOn=ItemType option. See [How to use the member fixer task](wcm_admin_member-fixer.md) for details.

-   **How can users or groups be deleted from web content items when they have been removed from the user repository or LDAP?**

    For example:

    1.  A user has left the organization and has been removed from the user repository. This user needs to be removed from web content items they previously had access to.
    2.  A functional group that is no longer required has been deleted from the user repository. This group needs to be removed from web content items they previously had access to.
    Use the -DinvalidDn=remove and -Dfix=true options.

    For example:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DinvalidDn=remove -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DinvalidDn=remove -Dfix=true`

-   **How can users or groups be replaced in web content items by a specific user or group when they have been removed from the user repository or LDAP?**

    For example, a user or group has been removed from the user repository. Another user or group is continuing the duties of the removed member and needs to have access to their documents.

    To fix this, use the -DaltDn=update and -Dfix=true options.

    For this option, it is necessary to add member mappings in the custom mapping file: wp_profile_root/PortalServer/wcm/shared/app/config/wcmservices/MemberFixerModule.properties`

    The member mappings for one user or group to be replaced with another user or group use this format: `Old DN -> New DN`

    For example, to replace any instance of `cn=group1,dc=lotus,o=ibm` with `cn=group2,dc=rational,o=ibm`, use:

    ```
    cn=group1,dc=lotus,o=ibm -> cn=group2,dc=rational,o=ibm
    ```

    Each member mapping corresponds to one user or group to be replaced. Once all the member mappings have been made, restart the portal server and execute the member fixer task:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DaltDn=update -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DaltDn=update -Dfix=true`

-   **How can users or groups be replaced in web content items where user common names are unchanged but their distinguished names have been changed in the user repository or LDAP?**

    For example, an organization unit or organization name changes in the user repository, but the common name of users and groups remain the same. There could potentially be hundreds or thousands of users affected by this organization unit change and listing each member explicitly in a custom mapping entry in the mapping file is not feasible. Only one member mapping is required when common names remain unchanged.

    To fix this, use the -DaltDn=update and -Dfix=true options.

    For this option, it is necessary to add member mappings in the custom mapping file: wp_profile_root]/PortalServer/wcm/shared/app/config/wcmservices/MemberFixerModule.properties`

    Create member mappings for changing multiple users or groups DN with the exception of the common name portion. Once all the member mappings have been made, restart the portal server and execute the member fixer task.

    For example, To replace all DNs like `cn=[ID],dc=websphere,o=ibm` with `cn=[ID],dc=tivoli,o=ibm`, use:

    ```
    cn=[ID],dc=websphere,o=ibm -> cn=[ID],dc=tivoli,o=ibm
    ```

    Each member mapping corresponds to one user or group to be replaced. Once all the member mappings have been made, restart the portal server and execute the member fixer task:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DaltDn=update -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DaltDn=update -Dfix=true`

-   **How can users or groups be replaced in web content items by the administrator user when they have been removed from the user repository or LDAP?**

    For example:

    1.  A user has left the organization and has been removed from the user repository. The administrator user needs to replace the removed user in all the web content items that references that user.
    2.  A group has been deleted from the user repository. The administrator user needs to replace the removed group in all the web content items that references that group.
    To fix this, use the -DinvalidDn=update and -Dfix=true options.

    For example:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DinvalidDn=update -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DinvalidDn=update -Dfix=true`

-   **Distinguished names for users and groups remain unchanged in the user repository, but users or groups cannot access web content items.**

    For example, web content items store a member's DN as well as a unique identifier of the LDAP entry of the user. When a member in the LDAP is deleted and then recreated with the same details, such as the same distinguished name, the identifier in the user repository is different to the one stored in the web content Item.

    To fix this, use the -DmismatchedId=update and -Dfix=true options.

    For example:

    -   **Windows™**

        `ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DmismatchedId=update -Dfix=true`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="MyLibrary" -DmismatchedId=update -Dfix=true`


