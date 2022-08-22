# Removing users and groups

Depending on circumstances, you might want to remove users or groups from your HCL Digital Experience that are no longer used or required. You can use the XML configuration interface \(XML Access\) to list such users and groups. You can also remove only some selected users and groups, and keep others for further use.

HCL Digital Experience stores users and groups that exist in the user registry as entries in the database. When you use the XML configuration interface or the **Manage User and Groups** portlet to delete users and groups, they are deleted from both the user registry and from the database. Deleting a user or group directly from the configured user registry does not remove the database entry. Also, HCL Digital Experience does not remove entries from its database when users or groups are muted in the user registry, for example, users with too many wrong password attempts. You can manually remove the users and groups from the database.

Examples for removing users or groups can be the following cases:

-   Portal users or groups were removed from the user registry, but not from the portal database.
-   User IDs were deactivated, for example after too many wrong password attempts.

**Note:** After you delete these entries by using the modified XML script, all customization is lost for the deleted users and groups.

To remove users and groups from your portal, proceed as follows:

1.  Make a backup copy of your portal database.

2.  To identify and list these users and groups, run an XML export and use the cleanup-users attribute.

    Specify the cleanup-users attribute with the request tag of type export, and set its value to true. You also need to set the export-users attribute to true.

    The resulting output file lists the affected users and groups with their action set to delete.

    The XML sample file CleanupUsers.xml shows an example of how you can export such users and groups. For information about the sample XML configuration files and their location, read *Sample XML configuration files*.

    **Note:** If the number of invalid users is very high, the XML export step can fail with an out-of-memory exception. For such cases, APAR PI23109 introduces a new XML element `threshold`. In case of such out-of-memory exceptions, add `threshold="10000"` to the `<request ... >` element in the CleanupUsers.xml script. This option limits the number of exported users to 10,000. When you use this approach, repeat the export step and all following steps until the exported file contains no entries any more. You need to have APAR PI23109 or fix pack CF03 installed to use this XML element.

3.  Check the output file from the previous step and **remove** all users and groups that you want to **keep** in the portal database.

    For example, you might want to keep the muted users and re-enable their passwords. All users and groups that remain in the file are removed from the database in the following import step.

4.  Import the modified XML file into your portal.

    The portal removes all users and groups that you retained in the XML file during the previous step from the portal database.


After you delete these entries by using the modified XML script, all customization is lost for the deleted users and groups.


**Related information**  


[Sample XML configuration files](../admin-system/admxmsmp.md)

