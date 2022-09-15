# The export cache settings task

Use the export cache settings task to display a summary of the current cache settings of your system.

When you run the export cache settings task, a summary of your cache settings is generated and set to the SystemOut.log. This summary includes the type of cache that is being used and how it is being applied. For example, basic caching per session or data caching per site.

## Running the export cache settings task

1.  Open a command prompt.
2.  Run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat run-wcm-admin-task-export-cache-settings -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=MyLibrary -DinheritPerms=apply -DlibSecurity=true

    -   **UNIX™Linux™**

        ./ConfigEngine.sh run-wcm-admin-task-export-cache-settings -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=MyLibrary -DinheritPerms=apply -DlibSecurity=true

    -   **IBM® i**

        ConfigEngine.sh run-wcm-admin-task-export-cache-settings -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=MyLibrary -DinheritPerms=apply -DlibSecurity=true

    -   **z/OS®**

        ./ConfigEngine.sh run-wcm-admin-task-export-cache-settings -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password -Dlibrary=MyLibrary -DinheritPerms=apply -DlibSecurity=true

    !!! note
        An administrator user name and password is not required if the portal administrator user name and password are specified in the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.


## Displaying cache settings in a browser

You can also display your cache settings in a browser by using the following URL:

```
http://hostname:port/wps/wcm/connect?MOD=ExportCacheSettings&processLibraries=false
```


