# Adding the Site Builder and Script Application libraries

If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix and you use Site Builder or the Script Application, you need to add the appropriate library or libraries to each new virtual portal.

To import these libraries, run the portal configuration engine task import-libs-to-vp.

!!! note
    This task imports libraries for both the Script Application and Site Builder. If you have already run this task to import the Site Builder library, you do not need to run this task again for your Script Application libraries.

Use the following syntax:

-   **AIX®**

    `./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual_portal_context_url`

-   **Linux™**

    `./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual_portal_context_url`

-   **Windows™**

    `ConfigEngine.bat import-libs-to-vp -DVirtualPortalContext=virtual_portal_context_url`



