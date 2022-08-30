# Adding the Site Builder and Script Application libraries

If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix and you use Site Builder or the Script Application, you need to add the appropriate library or libraries to each new virtual portal.

To import these libraries, run the portal configuration engine task import-libs-to-vp.

**Note:** This task imports libraries for both the Script Application and Site Builder. If you have already run this task to import the Site Builder library, you do not need to run this task again for your Script Application libraries.

Use the following syntax:

-   **AIX®**

    ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **HP-UX**

    ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **IBM® i**

    ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Linux™**

    ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Solaris**

    ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Windows™**

    ConfigEngine.bat import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url

-   **z/OS®**

    ./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=virtual\_portal\_context\_url



