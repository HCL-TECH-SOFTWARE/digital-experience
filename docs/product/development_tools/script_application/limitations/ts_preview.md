# Script Application limitations and troubleshooting

Learn about limitations to the Script Application. The following solutions can help you solve troubleshooting issues.

## Limitations

-   **Setting portlet preferences in edit mode is not supported**

    Portlet preferences are stored based on the current mode of the portlet when the preferences API is accessed. The Script Application is based on the Web Content Viewer portlet. The Web Content Viewer portlet does not support an EDIT mode of the portlet. It supports only CONFIG and EDIT\_DEFAULTS mode. Therefore, it is not feasible to store per-user \(EDIT mode\) preferences for the Web Content Viewer or Script Application portlets.

-   **Preview window**

    Applications that run in the Preview window are rendered in servlet mode and not as portlets. Therefore, the applications do not have access to theme module shared resources such as JavaScript libraries like jQuery or Dojo and the Script Portlet preferences is not available.

-   **ASCII character file names**

    Script Application archives must contain file names with only standard, single-byte ASCII characters in their file names. You cannot use UTF-8 or non-ASCII characters in a file name.

-   **Edit and Import features cannot be started for Script Application instances added to pages with the Lightweight profile.**

    If you add the Script Application to pages for which you selected the Lightweight profile, you cannot start the portal dialog to use the Edit and Import features. Script Application instances that you created and edited on pages with profiles other than the Lightweight profile or elsewhere can be added to Lightweight profile pages from the Script Applications for runtime use.

-   **Cursor focus limitations with some browser versions when the Script Application Editor starts**

    If you use the most recent versions of the supported browsers and you start the Script Application Editor, focus is normally in the HTML editor pane. The cursor flashes, and the HTML editor pane is ready to accept typed text. However, the following limitations apply:

    -   **Internet Explorer 10**

        With Internet Explorer 10, issues can occur with the way the editor sets focus into the HTML editor pane. This issue can prevent you from typing text immediately after you start the editor. To work around the problem, you have two options:

        -   Upgrade your browser to the most recent version. This option is the best practice option.
        -   If you want to keep your browser version, select the HTML tab and then the HTML editor pane. The cursor starts to flash. You can now type text in the pane.
    -   **Opera**

        Opera can have the following intermittent issue: When you start the Script Application Editor, the cursor appears in the HTML editor pane, but the browser focus is not fully set into that pane. As a result, the cursor does not flash, and the first character that you type sets the focus rather than be accepted as that character. Example:- If you type ABC, the A keystroke might trigger the focus to be set in the HTML editor pane, and the editor shows only BC as your typed input. This issue can occur more frequently, if you start typing text fast immediately after the editor starts. To work around the problem, select the HTML editor pane with the mouse before you start typing, or retype the first character.

-   **The Script Application Editor is not fully accessible, but impaired users have good alternative options.**

    Users who require accessible Script Application editing capabilities can use their preferred external accessible editors to develop and maintain the HTML, JS, and CSS artifacts locally. They can then publish the resulting applications to a site area in a Web Content Manager library for use as Script Application instances. To publish and update externally developed single page applications to a Web Content Manager library, they can use a command line utility that Script Application provides. They can use it from the command line or from build automation scripts. For more information about the Script Application command line interface, read *Script Application command line application overview*. Alternatively, for quick simple edits by using a browser, the Web Content Manager authoring portlet provides an accessible alternative experience to the Script Application browser-based editor. When a user puts a portal page in edit mode and tabs to a Script Application window, the portal shows a separate **Accessible Editor** option. When the user clicks **Accessible Editor**, the portal starts the Web Content Manager authoring portlet to edit that Script Application instance.


## Troubleshooting

-   **Preview does not render changes.**

    When HCL Web Content Manager caching is turned on, the changes might not be reflected in preview pane of Script Application. Caching is likely to happen while you run Configuration Wizard to federate an LDAP.

    To resolve this issue, assign no cache preprocessor to the Script Application. Follow the instructions in *Portal administration and performance*.


-   **The Script Application user interface features do not show or work for users as expected.**

    Make sure that you gave the users access to both the Script Application Editor and Import portlets *and* to the Script Application library as required. Examples:

    -   **You gave a user Editor access to the Script Application library, but the editor does not open correctly.You might see the following error message: “Error 401: EJCBD0006E: The resolution of a URI failed. Refer to the SystemOut.log for more detailed information.”**

        Make sure that you also granted the user or group User access to the Script Application Editor portlet.

        If you saw the EJCBD0006E error message, you might also see one of the following messages when you check the SystemOut.log: “EJPRD0601E: The current user is not authorized to access the Script Application Import Dialog portlet” or “EJPRF0007E: The current user is not authorized to access the Script Application Editor portlet.”

    -   **You gave a user User access to the Script Application Editor, but the Edit option does not show for the Script Application when the user puts the portal page in Edit mode.**

        Make sure to also grant the user or group Editor and Reviewer access to the Web Content Manager library and site area where that Script Application instance is stored. For example, for a Script Application that is stored in the default Script Application Library or Script Application site area, the developer needs Edit and Review access to that library and site area. For a Script Application stored with the page in the Portal Site library, the developer needs Edit and Review access to that page in the Portal Site library.

    For more information about assigning access rights to Script Application users, read *Script Application security overview* and *Assigning user access for the Script Application*.

-   **Unspecific message and Script Application library not available after creating a virtual portal**

    If you create a virtual portal after you installed CF09 and you try to use the Script Application immediately without also running the portal configuration engine task that is listed in the Script Application virtual portal installation instructions, you cannot use the Script Application in that virtual portal. You might see the following error message instead, when the Web Content Manager Viewer tries to access Script Application content from the missing Script Application library:

    `EJQHH0011E: The content at path location Script Portlet Library/Script Portlet Library Site Area/Untitled could not be found in the repository.`

    To resolve this issue, run the portal configuration engine task that imports the Web Content Manager libraries that CF09 installs to virtual portals that you create after you installed CF09. For more information, read *Installing the Script Application*.


**Parent topic:**[The Script Application](../script-portlet/script_portlet.md)

**Related information**  


[Script Application security overview](../script-portlet/security.md)

[Assigning user access for the Script Application](../script-portlet/sp_security_upgrade.md)

[Installing the Script Application](../script-portlet/installing_the_script_portlet.md)

[Script Application command line application overview](../script-portlet/cmd_line_push_ovr.md)

