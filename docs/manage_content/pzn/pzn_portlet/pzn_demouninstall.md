# Uninstall Personalization sample and database

View the steps to uninstall Personalization sample demo, database, and users.

1.  From a command prompt, navigate to wp_profile_root/ConfigEngine.

2.  From this command prompt, run the following commands:

    -   UNIX™Linux™:
        -   `./ConfigEngine.sh remove-pzndemo -DPortalAdminPwd=password -DWasPassword=password`
        -   `./ConfigEngine.sh remove-pzndemo-users -DPortalAdminPwd=password -DWasPassword=password`
        
    -   Windows™:
        -   `ConfigEngine.bat remove-pzndemo -DPortalAdminPwd=password -DWasPassword=password`
        -   `ConfigEngine.bat remove-pzndemo-users -DPortalAdminPwd=password -DWasPassword=password`

The sample demo, database, and users will be removed.

!!!note
    The database connection to the included Apache Derby database may stay open and prevent removal of the database directory. Restart HCL Digital Experience and run `ConfigEngine.bat/sh remove-pzndemo-database -DPortalAdminPwd=password -DWasPassword=password` if this is a problem. The directory PznDemo in the root of the Portal Personalization Workspace may need to be removed manually.


