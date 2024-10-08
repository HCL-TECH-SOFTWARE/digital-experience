# Rich text editor toolbar configuration options

The TinyMCE Editor requires a minimum supported Java level of 1.8. If you are unable to move to Java 8, it is recommended that you use the out-of-the-box, default CKEditor provided with HCL Digital Experience (DX).

## Using the TinyMCE editor in the WCM authoring portlet

You can use the TinyMCE editor in the Web Content Manager (WCM) authoring portlet and [inline editing](wcm_config_prop_authoring.md#default-in-place-editing-mode). 

Before you can use TinyMCE in WCM, you need to add the following custom property to the WCM WCMConfigService resource environment provider: `inplaceEdit.defaultRichTextEditor=TinyMCE`

Follow these steps to start using TinyMCE in the authoring porlet:

1. In the authoring portlet page, go to **Preferences > Edit Shared Settings**.

2. Open the **Editor Options** menu.

3. Click the **Select the rich text editor to use in rich text fields** dropdown menu and choose **Enhanced Editor**. 

4. Click **OK**.

After configuring your authoring portlet to use TinyMCE, you can create a new piece of content with rich text using the TinyMCE Editor.

## Using a custom configuration with the TinyMCE editor in the WCM authoring portlet

These customization steps only apply to the Enhanced editor used in the HCL WCM authoring portlet. If you are working in a clustered deployment, run these steps on the primary node only. Then, re-sync the cluster after the steps are completed.

1. The TinyMCE editor uses a custom configuration file that is named tiny_config.jsp to set custom parameters for the toolbar. Copy your custom configuration file to wp_profile_root\PortalServer\wcm\shared\app\config\tinymce.

    - You can find sample configurations in PortalServer_root\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce.

2. Open a command prompt.
3. Run the following command from the wp_profile_root/ConfigEngine directory:

    - **Windows™**

        ```bash
        `ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password`
        ```

    - **UNIX™ and Linux™**

        ```bash
        `./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password`
        ```

    An administrator username and password are not required if you already specified the portal administrator username and password with the **PortalAdminId** and **PortalAdminPwd** settings in the wkplc.properties file.

4. Restart the server.

    To revert to the default editor toolbar, run the `remove-wcm-ephox-editor-custom-configuration` task and restart the server.

    ```bash
     ConfigEngine(sh/bat) remove-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
    ```

## Using a custom TinyMCE editor toolbar with in-place editing

These customization steps only apply to Web content in-place editing with the TinyMCE editor.

1. Log in to the WebSphere® Integrated Solutions Console as an administrator.

2. Click **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM WCMConfigService**.

3. Click **Custom properties** to update the configuration properties.

4. Edit or create the property `inplaceEdit.toolbarConfigForRichText`, and set its value to match the desired toolbar icons.

    Sample values:

    - Single toolbar in space-separated list of buttons

        ```bash
        formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat
        ```

    - Multiple toolbars in an array

        ```bash
        [ 'undo redo | bold italic underline | fontselect fontsizeselect', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | a11ycheck' ]
        ```

5. Save your changes.

6. Restart the Portal server to apply your changes.

    To revert to the default editor toolbar, remove the property `inplaceEdit.toolbarConfigForRichText` and restart the server.

???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
