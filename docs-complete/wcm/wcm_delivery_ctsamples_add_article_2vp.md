# Adding the Articles template page to a virtual portal 

By default, virtual portals do not contain the Articles template page. To use the Articles template page in a virtual portal, follow the procedure given here.

1.  Syndicate the two libraries Web Content Templates 3.0 and Template Page Content 3.0 from the main portal installation to the virtual portal.

2.  To add the template page to the virtual portal, start the following portal configuration engine task:

    -   AIX® HP-UX Linux™ Solaris z/OS®:

        ```
        ./ConfigEngine.sh action-init-content-templating-pages
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```

    -   IBM® i:

        ```
        ConfigEngine.sh action-init-content-templating-pages
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```

    -   Windows™:

        ```
        ConfigEngine.bat action-init-content-templating-pages
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```

3.  To move the referenced content items into the PortalSite library, start the following portal configuration engine task:

    -   AIX HP-UX Linux Solaris z/OS:

        ```
        ./ConfigEngine.sh action-internalize-content-mappings-vp
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```

    -   IBM i:

        ```
        ConfigEngine.sh action-internalize-content-mappings-vp
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```

    -   Windows:

        ```
        ConfigEngine.bat action-internalize-content-mappings-vp
        -DVirtualPortalContext=virtual\_portal\_context\_url
        -DWasPassword=adminpwd -DPortalAdminPwd=adminpwd
        ```


After you complete these steps, the Articles template page is ready for you to use in the virtual portal.

**Parent topic:**[Creating content with sample web content template items ](../wcm/wcm_delivery_ctsamples_main.md)

