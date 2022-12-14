---
title: Troubleshooting
---

# Script Application Troubleshooting

The following solutions can help you solve troubleshooting issues.

- **Preview does not render changes.**

    When HCL Web Content Manager caching is turned on, the changes might not be reflected in preview pane of Script Application. Caching is likely to happen while you run Configuration Wizard to federate an LDAP.

    To resolve this issue, assign no cache preprocessor to the Script Application. Follow the instructions in [Portal administration tools](../../deployment/manage/portal_admin_tools/index.md).

- **The Script Application user interface features do not show or work for users as expected.**

    Make sure that you gave the users access to both the Script Application Editor and Import portlets *and* to the Script Application library as required. Examples:

  - **You gave a user Editor access to the Script Application library, but the editor does not open correctly.You might see the following error message: “Error 401: EJCBD0006E: The resolution of a URI failed. Refer to the SystemOut.log for more detailed information.”**

        Make sure that you also granted the user or group User access to the Script Application Editor portlet.

        If you saw the EJCBD0006E error message, you might also see one of the following messages when you check the SystemOut.log: “EJPRD0601E: The current user is not authorized to access the Script Application Import Dialog portlet” or “EJPRF0007E: The current user is not authorized to access the Script Application Editor portlet.”

  - **You gave a user User access to the Script Application Editor, but the Edit option does not show for the Script Application when the user puts the portal page in Edit mode.**

        Make sure to also grant the user or group Editor and Reviewer access to the Web Content Manager library and site area where that Script Application instance is stored. For example, for a Script Application that is stored in the default Script Application Library or Script Application site area, the developer needs Edit and Review access to that library and site area. For a Script Application stored with the page in the Portal Site library, the developer needs Edit and Review access to that page in the Portal Site library.

    For more information about assigning access rights to Script Application users, read [Script Application security overview](../script_application/script_application_security/index.md) and [User access to Script Applications](../script_application/script_application_security/sp_security_upgrade.md).

- **Unspecific message and Script Application library not available after creating a virtual portal**

    If you create a virtual portal after you installed CF09 and you try to use the Script Application immediately without also running the portal configuration engine task that is listed in the Script Application virtual portal installation instructions, you cannot use the Script Application in that virtual portal. You might see the following error message instead, when the Web Content Manager Viewer tries to access Script Application content from the missing Script Application library:

    `EJQHH0011E: The content at path location Script Portlet Library/Script Portlet Library Site Area/Untitled could not be found in the repository.`

    To resolve this issue, run the portal configuration engine task that imports the Web Content Manager libraries that CF09 installs to virtual portals that you create after you installed CF09. For more information, read [Build applications with the Script Application](build_app_with_script_application/index.md).
