# Uninstalling the Personalization sample and database

In this topic, you will learn how to uninstall the Personalization sample demo, database, and users.

1. Open a command prompt and navigate to **wp_profile_root/ConfigEngine**.

2. Run the following commands:

    - UNIX™Linux™:  
        `./ConfigEngine.sh remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `./ConfigEngine.sh remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

    - Windows™:  
        `ConfigEngine.bat remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `ConfigEngine.bat remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

!!!note
    The database connection to the included Apache Derby database may stay open and prevent the removal of the database directory. If you encounter this issue, restart HCL Digital Experience and run this command: `ConfigEngine.bat/sh remove-pzndemo-database -DPortalAdminPwd=<password> -DWasPassword=<password>`. The directory PznDemo in the root of the Portal Personalization Workspace may also need to be removed manually.

You have successfully removed the sample demo, database, and users.  
