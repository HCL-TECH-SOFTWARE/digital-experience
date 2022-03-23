# Deploying custom plug-in applications

You must deploy your custom plug-in applications on your server before they can be used in your web content system.

To ensure that the new web content class is available each time your server is started, register the ear file in the WebSphere® Integrated Solutions Console:

1.  Select **Applications**.
2.  Select **New Application**.
3.  Select **New Enterprise Application**.
4.  Browse for the ear file.
5.  Select **next** until you reach **step 2. Map modules to servers**.
6.  Select the check box for the custom action module.
7.  In the Clusters and servers section, select **HCL Digital Experience** and select **Apply**.
8.  Keep selecting **Next** until the end when you select **Finish**.
9.  The screen titled Installing is shown. Select **Manage Applications**.
10. Locate and click the application that you installed. The default name is the display name that is defined in the application.xml file in your ear file.
11. Under Detail Properties select **Startup behavior**.
12. Under General Properties modify the Startup order to be the same weight as "wcm" and select **Apply**. By default, the weight is 20.
13. Select **Save directly to master configuration**.
14. To immediately start the application you installed, select the application and click **Start**.

To update an existing ear file:

1.  Select **Applications**.
2.  Select **Application Types**.
3.  Select **WebSphere enterprise applications**.
4.  Search for the Application name.
5.  Select the check box for the custom action application and click **Update**.
6.  Select **Replace the entire application** and browse for the ear file.
7.  Keep selecting **Next** until the end when you select **Finish**.
8.  The screen that is titled 'updating' is shown. Select **Save to Master Configuration** and then click **save**.

**Parent topic:**[How to create custom plug-ins ](../wcm/wcm_dev_plugins.md)

