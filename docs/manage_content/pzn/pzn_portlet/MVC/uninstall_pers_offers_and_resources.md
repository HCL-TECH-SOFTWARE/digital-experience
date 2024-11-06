# Uninstall Pers Offers Portlet and the PZNDemo

View the steps to uninstall the Pers Offers Portlet and the Personalization sample demo, database, and users.

1. Login to the portal as portal admin user (wpsadmin).

2. Navigate to **Administration** > **Applications** > **Web Module**

3. Search for **pers_offers-1.0-SNAPSHOT.war** and click to the ***delete web module*** button

4. Then Navigate to **Administration** > **Site Management** and search for the **Pers Offers** page. Delete the **Pers Offers** page.

5. From a command prompt, navigate to wp_profile_root/ConfigEngine.

6. From this command prompt, run the following commands:

    - UNIX™Linux™:  
        `./ConfigEngine.sh remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `./ConfigEngine.sh remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

    - Windows™:  
        `ConfigEngine.bat remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `ConfigEngine.bat remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

The sample demo, database, and users will be removed.

!!!note
    The database connection to the included Apache Derby database may stay open and prevent removal of the database directory. Restart HCL Digital Experience and run `ConfigEngine.bat/sh remove-pzndemo-database -DPortalAdminPwd=<password> -DWasPassword=<password>` if this is a problem. The directory PznDemo in the root of the Portal Personalization Workspace may need to be removed manually.
