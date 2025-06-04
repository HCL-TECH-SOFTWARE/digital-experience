# Uninstalling the Pers_Offers portlet and PZNDemo

In this topic, you will learn how to to uninstall the Pers_Offers portlet and the Personalization sample demo (PZNDemo), database, and users.

1. Log in to HCL Digital Experience (DX) as the Portal administrator (wpsadmin).

2. Click the **Applications menu** then go to **Administration** > **Applications** > **Web Module**.

3. Look for **pers_offers-1.0-SNAPSHOT.war** and click the **Delete Web module** icon.

4. Go to **Administration > Site Management > Pages**.

5. Look for the **Pers Offers** page and click the **Delete** icon.

6. Open a command prompt and navigate to **wp_profile_root/ConfigEngine**.  

7. Run the following commands to remove the sample demo, database, and users:  

    - UNIX™Linux™:  
        - `./ConfigEngine.sh remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        - `./ConfigEngine.sh remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

    - Windows™:  
        - `ConfigEngine.bat remove-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        - `ConfigEngine.bat remove-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  

!!! Note
    The database connection to the included Apache Derby database may stay open and prevent the removal of the database directory. To resolve this, restart HCL DX and run the following command: `ConfigEngine.bat/sh remove-pzndemo-database -DPortalAdminPwd=<password> -DWasPassword=<password>`. The directory PZNDemo in the root of the Portal Personalization Workspace may need to be removed manually.
