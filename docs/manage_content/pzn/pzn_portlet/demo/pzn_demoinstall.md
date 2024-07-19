# Install the Personalization sample

This exercise installs the Portal Personalization sample and configures your database for the Personalization sample. No additional database requirements are needed.

1. Start the HCL Digital Experience server.

2. From a command prompt, navigate to `<wp_profile_root>/ConfigEngine`.

3. Enter the following commands to install the Personalization sample and create the users for this sample:

    - UNIX™Linux™:  
        `./ConfigEngine.sh create-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `./ConfigEngine.sh install-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  

    - Windows™:  
        `ConfigEngine.bat create-pzndemo-users -DPortalAdminPwd=<password> -DWasPassword=<password>`  
        `ConfigEngine.bat install-pzndemo -DPortalAdminPwd=<password> -DWasPassword=<password>`  

4. Stop the HCL Portal server.

5. Restart the HCL Portal server

6. Open the Web-Browser and login to the Portal as **wpsadmin** user

7. In the Portal menu navigate to **Administration > Security > User and Groups > All Portal User Groups > pzndemousers**

8. Confirm that the following users were created:

    - andy  
    - scott
    - tawana
    - marge  

    **PZN demo users in the Portal**
    ![PZN Demo Users](./images/pzndemo_users.png)

9. Add all pzndemousers to the wpsadmins group

    1. On the page that lists the **pzndemousers** click to the breadcrumb navigation item **All Portal User Groups**
    2. then click to the user group **wpsadmins**
    3. Click to the **Add Member** button and add all four **pzndemousers** to the **wpsadmins** group.
    4. Click the **OK** button and ensure that the users are added to the group.

    !!!note
        By default standard users don't have permissions to access the Personalization page. To simplify the demo make sure that all resources can be reviewed by each user. That can be tested at best, by adding all the users of the **pzndemousers** to the **wpsadmins** group.  

    **PZN demo users added to the wpsadmins group**
    ![Adding the PZN Demo users to the wpsadmins group](./images/pzndemo_users_wpsadmins_group.png)  

10. **Logout** from the Portal  
