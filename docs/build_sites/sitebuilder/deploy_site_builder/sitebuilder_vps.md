# How to import the Site Builder library onto a new virtual portal \| HCL Web Content Manager

If you create a new virtual portal, you must copy the Site Builder library onto the new virtual portal.

Open a command line and browse to the ConfigEngine directory.

-   **Windows™**

    C:\\IBM/WebSphere\wp_profile\ConfigEngine

-   **AIX®**

    /usr/IBM/WebSphere/wp_profile/ConfigEngine

-   **Linux™**

    /opt/IBM/WebSphere/wp_profile/ConfigEngine


Run the ConfigEngine batch or script file with the import-libs-to-vp parameter to copy the library. For example:

-   **Windows™**

    `ConfigEngine.bat import-libs-to-vp -DVirtualPortalContext=your\_vp`

-   **AIX and Linux**

    `./ConfigEngine.sh import-libs-to-vp -DVirtualPortalContext=your\_vp`


!!! note
    This task imports libraries for both Site Builder and the Script Application. If you have already run this task to import your Script Application libraries, you won't have to run this task again for Site Builder.


