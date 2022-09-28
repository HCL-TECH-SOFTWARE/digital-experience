# Unlocking a library

A library can become locked when a long running task, such as restoring all content items in a library, fails to unlock the library.

In the rare event where a library becomes locked, you can use the unlock library tool to unlock the library. You must first enable the unlock library tool by adding the following parameters to the `WCM WCMConfigService` service by using the IBM® WebSphere® Application Server administration console:

-   connect.businesslogic.module.unlocklibrary.class=com.aptrix.pluto.security.UnlockLibraryModule
-   connect.businesslogic.module.unlocklibrary.remoteaccess=true
-   connect.businesslogic.module.unlocklibrary.autoload=false

!!! note
    This tool unlocks a web content library only, not the items that are stored in the web content library.

1.  Log in to the portal as an administrator.

2.  To unlock a library, enter the following URL in the browser:

    ```
    http://hostname.yourco.com:port\_number/wps/wcm/connect
    ?MOD=UnlockLibrary&library=libraryname
    
    ```

<!--
**Parent topic:**[Managing web content libraries](../panel_help/wcm_admin_libraries.md) -->
