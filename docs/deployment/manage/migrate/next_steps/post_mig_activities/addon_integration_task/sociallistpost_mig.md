# Social Lists

After you migrate from a previous Portal Version to HCL Digital Experience 8.5, you must run a configuration task. The configuration task is run to deploy the new web content library and templates before you can use the Social Lists features. If you already used the social rendering feature from 8.0.0.1, your existing web content libraries and all portlet clones that were created during the enablement on Portal 8.0.0.1 is not changed.

If you migrated from Portal 7.0 to HCL Digital Experience 8.5, then you must run the action-install-wcm-localrender-portlet task before you start the following procedure:

-   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh action-install-wcm-localrender-portlet -DPortalAdminPwd=password -DWasPassword=password
-   IBM® i: ConfigEngine.sh action-install-wcm-localrender-portlet -DPortalAdminPwd=password -DWasPassword=password
-   Windows™: ConfigEngine.bat action-install-wcm-localrender-portlet -DPortalAdminPwd=password -DWasPassword=password
-   z/OS®: ./ConfigEngine.sh action-install-wcm-localrender-portlet -DPortalAdminPwd=password -DWasPassword=password

1.  Go to the wp\_profile\_root/ConfigEngine directory. Run the deploy-social-rendering task:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password
    -   IBM i: ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password
    -   Windows: ConfigEngine.bat deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password
    By default, the task is run on the base portal. To run this task on a different virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix -D on the command line:

    -   **VirtualPortalHostName**

        Specify the host name of the virtual portal. For example, vp.example.com

    -   **VirtualPortalContext**

        Specify the virtual portal context that identifies the virtual portal. For example, vp1.

    **Example Commands:**

    ./ConfigEngine.sh deploy-social-rendering -DPortalAdminPwd=password -DWasPassword=password -DVirtualPortalContext=vp1

    **Note:** If you plan to continue to use the old toolbar, you can use the following configuration task to deploy new social portlets to that toolbar.

    ./ConfigEngine.sh action-deploy-social-shelf-category-and-portlets -DPortalAdminPwd=password -DWasPassword=password

2.  Verify that the web content library Social Lists 1.1 was created. Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.



**Related information**  


[How to enable social rendering in a virtual portal](../social/add_sociallists_to_virtualportal.md)

