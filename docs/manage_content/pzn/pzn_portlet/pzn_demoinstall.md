# Install the Personalization sample

This exercise installs the Portal Personalization sample and configures your database for the Personalization sample. No additional database requirements are needed.

Ensure you have the basic system requirements listed in the Prerequisites for the Personalization portlet exercise topic.

1.  Start the HCL Digital Experience server.

2.  From a command prompt, navigate to [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine.

3.  Enter the following commands to install the Personalization sample and create the users for this sample:

    -   UNIX™Linux™:
        -   `./ConfigEngine.sh create-pzndemo-users -DPortalAdminPwd=``password -DWasPassword=password`
        -   `./ConfigEngine.sh install-pzndemo -DPortalAdminPwd=password -DWasPassword=password`
    -   Windows™:
        -   `ConfigEngine.bat create-pzndemo-users -DPortalAdminPwd=password -DWasPassword=password`
        -   `ConfigEngine.bat install-pzndemo -DPortalAdminPwd=password -DWasPassword=password`
4.  Stop the HCL Portal server.

5.  Restart the HCL Portal server

6.  Confirm that the users were created by logging in as the following users. Use pzndemo as the password for each user.

    -   scott
    -   marge
    -   tawana
    -   andy
7.  Navigate to **Personalization** \> **Demo**, then click through the different pages and portlets for each user. Notice the different information that displays for each user.

8.  Log out of HCL Portal.

9.  Stop the HCL Portal server. This action is necessary to free the single connection to the Derby database, so you can continue the next steps in this exercise.


The sample demo and database configuration is complete. You can now begin coding a basic personalized portlet.


**Previous topic:**[Prerequisites for the Personalization portlet exercise](../pzn/pzn_demoprereq.md)

**Next topic:**[Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)


**Previous topic:**[Prerequisites for the Personalization portlet exercise](../pzn/pzn_demoprereq.md)

**Next topic:**[Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)

