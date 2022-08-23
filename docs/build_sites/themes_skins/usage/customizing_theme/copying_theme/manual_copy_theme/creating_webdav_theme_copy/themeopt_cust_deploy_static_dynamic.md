# Deploying static and dynamic resources

After you copy your static and dynamic theme resources and modify your dynamic resource references, you are ready to deploy your static and dynamic theme resources to the server.

When you upload new resources on WebDAV, the theme cache is cleared automatically.

1.  Connect your WebDAV client, such as WebDrive or AnyClient, to http://host:port/wps/mycontenthandler/dav/themelist/.

2.  Copy the entire customTheme folder that you created when you completed the steps in [Copy the static resources for your theme](themeopt_cust_copy_statictheme.md#) into the themelist folder.

3.  Ensure that the contents of the customTheme folder were copied correctly by comparing each subfolder in customTheme to the corresponding subfolder in ibm.portal.85Theme. Recopy any files or subfolders that are missing. In particular, ensure that the following files and changes were copied:

    -   The contents of the metadata.properties file
    -   The contents of the profiles folder, including all profiles files and updated module
    -   The theme\_lang.html files, including updated `dyn-cs:id` elements
    **Note:** Ensure that the URI is encoded. If the URI contains any spaces or invalid characters, the theme does not work.

4.  Connect your WebDAV client to http://host:port/wps/mycontenthandler/dav/skinlist/.

5.  Copy the entire customSkin folder that you created when you completed the steps in [Copy the static resources for your skin](themeopt_cust_copy_skin.md#) into the skinlist.

6.  Ensure that the contents of the customSkin folder were copied correctly by comparing each subfolder in customSkin to the corresponding subfolder in ibm.portal.85Hidden. Recopy any files or subfolders that are missing.

7.  Navigate to the CustomThemeEAR project that you created when you completed the steps in [Copying the dynamic resources for your theme](themeopt_cust_copy_dyntheme.md#). Right-click on the project and select **Export** \> **EAR file**.

8.  Click **Browse**. Then, select the folder to which you want to export your EAR file.

9.  Click **Save**. Then, click **Finish**.

10. Log on to the WebSphere® Integrated Solutions Console and navigate to **Applications** \> **Application Types** \> **WebSphere Enterprise Applications**.

11. Click **Install**.

12. Click **Choose File**. Then, find and select the EAR file that you exported and click **Next**.

13. Select **Fast Path**. Then, expand **Choose**, select **Generate Default Bindings**, and click **Next**.

14. Select your installation option values and click **Next**.

15. For **Map Modules to Servers**, select the custom theme module. Then, select `server=HCL Portal and HCL Web Content Manager`, click **Apply** \> **Next**.

16. Click **Finish**.

17. When the EAR file is installed, click **Save directly to the master configuration**.

18. Check your CustomTheme EAR file in the table of enterprise applications and click **Start**.



