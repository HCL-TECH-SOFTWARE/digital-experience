# Uninstalling the Personalization sample and database

In this exercise, you can uninstall the Personalization sample demo and remove the database and users.  

1. From a command prompt, navigate to `wp_profile_root/ConfigEngine`.

2. Run the following commands to uninstall PZNDemo resources and to remove the demo users.

    - UNIX™Linux™:  
        `./ConfigEngine.sh remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `./ConfigEngine.sh remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

    - Windows™:  
        `ConfigEngine.bat remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `ConfigEngine.bat remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

The Personalization sample, database, and users are removed.

!!!note
    The database connection to the included Apache Derby database may stay open and prevent removal of the database directory. If this happens, restart HCL Digital Experience and run `ConfigEngine.bat/sh remove-pzndemo-database -DPortalAdminPwd=<password> -DWasPassword=<password>`. The directory PZNDemo in the root of the Portal Personalization Workspace may need to be removed manually.
