# How to create a custom configuration file for TinyMCE

## Applies to

> HCL Digital Experience v8.5 and later  

## Introduction

TinyMCE is a what-you-see-is-what-you-get (WYSIWYG) editor that you can use with HCL Digital Experience. This article explains how to create a custom configuration file for the TinyMCE editor embedded in the HCL Digital Experience environment.  

## Instructions

!!! important
    The Textbox.io component in HCL Digital Experience is deprecated as of January 31, 2023, and reaches end of support (EOS) on January 31, 2024.  
    Starting with CF208, you can use the TinyMCE editor as the embedded rich text editor.  
    For more information, see [Deprecated features](../../../whatsnew/deprecated_features.md){target="_blank"}.  

### Enabling TinyMCE

Before you use TinyMCE, add a custom property to the `WCM WCMConfigService` resource environment provider.

1. Log in to the **IBM WebSphere Integrated Solutions Console** as an administrator.
2. Go to **Resources** > **Resource Environment** > **Resource environment providers** > **WCM WCMConfigService**.
3. Under **Additional Properties**, select **Custom properties**.
4. Add the following property:

    ```text
    inplaceEdit.defaultRichTextEditor=TinyMCE
    ```

5. Save your changes.  
6. Restart the server to apply the change.  

### Configuring HCL Web Content Manager to use the enhanced editor

Follow these steps to enable the enhanced editor in the authoring portlet:

1. On the authoring portlet page, go to **Preferences** > **Edit Shared Settings**.
2. Open the **Editor Options** menu.
3. Click the **Select the rich text editor to use in rich text fields** dropdown and choose **Enhanced Editor**.
4. Click **OK**.

### Customizing the editor

These steps apply only to the enhanced editor used in the HCL WCM authoring portlet. In a clustered environment, perform these steps on the primary node only, then re-sync the cluster.

1. Create the custom configuration file
    - The TinyMCE editor uses a custom configuration file named `tiny_config.jsp`.
    - Sample configurations are available in `<PortalServer_root>\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce`.
    - Navigate to `<wp_profile_root>\PortalServer\wcm\shared\app\config\` and create a `tinymce` folder.
    - Copy your custom `tiny_config.jsp` file to `<wp_profile_root>\PortalServer\wcm\shared\app\config\tinymce`.

2. Customize the configuration
    - Open `tiny_config.jsp` in a text editor and customize TinyMCE.
    - Use the available [configuration options](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md)to enhance the rich text editing experience.

3. Run the configuration command
    - Open a command prompt.
    - From the `<wp_profile_root>/ConfigEngine` directory, run the following command to apply the changes made to `tiny_config.jsp`.

    **Windows™**

    ```bash
    ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=<password> -DPortalAdminId=<username> -DPortalAdminPwd=<password>
    ```

    **UNIX™ or Linux™**

    ```bash
    ./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=<password> -DPortalAdminId=<username> -DPortalAdminPwd=<password>
    ```

    !!!! note
        You do not need to provide an administrator username or password if they are already specified in the `wkplc.properties` file.

4. Restart the server.

### Testing the configuration

Access HCL Web Content Manager (WCM), create or edit an HTML or rich text element, and verify that your custom configuration works as expected.  

!!! note
    Several TinyMCE defects have been fixed in the latest CF versions.  
    For more information, see the [Fixes integrated in HCL Digital Experience 8.5.0.0, 9.0, and 9.5 Combined Cumulative Fixes](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0013939){target="_blank"} knowledge base article.

???+ info "Related information"
    - [Enhanced rich text editor configuration options](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md){target="_blank"}
    - [Editor options](../../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md){target="_blank"}
