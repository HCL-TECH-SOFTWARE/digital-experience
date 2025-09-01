# How to create a custom configuration file for use with the TinyMCE editor

## Applies to

> HCL Digital Experience v8.5 and later  

## Introduction

TinyMCE is a **What you see is what you get** (WYSIWYG) editor, that can be used with HCL Digital Experience. This article describes how to create a custom configuration file for the TinyMCE editor, embedded in the HCL Digital Experience environment.  

## Instructions

!!!Important
    The Textbox.io component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. From CF208 onwards, the TinyMCE editor can be used as the embedded Rich text editor. See [Deprecated features](../../../whatsnew/deprecated_features.md){target="_blank"} for more information.  

## Enable TinyMCE

Before using TinyMCE, you must add a custom property to the `WCM WCMConfigService` resource environment provider.

1. Log in to the **IBM WebSphere Integrated Solutions Console** as an administrator.
2. Navigate to **Resources** > **Resources Environment** > **Resource environment providers** > **WCM WCMConfigService**.
3. Under "Additional Properties," select **Custom properties**.
4. Add the new property:

    ```text
    inplaceEdit.defaultRichTextEditor=TinyMCE
    ```

5. Save your changes.  
6. Restart the server to apply the change.  

## Configure HCL Web Content Manager to use the Enhanced Editor

Follow these steps to enable the Enhanced Editor in the authoring portlet:

1. In the authoring portlet page, go to **Preferences** > **Edit Shared Settings**.
2. Open the **Editor Options** menu.
3. Click the "Select the rich text editor to use in rich text fields" dropdown menu and choose **Enhanced Editor**.
4. Click **OK**.

## Customize the Editor

These customization steps apply only to the Enhanced Editor used in the HCL WCM authoring portlet. If you are in a clustered environment, perform these steps on the primary node only, then re-sync the cluster.

1. **Create the custom configuration file:**
    * The TinyMCE editor uses a custom configuration file named `tiny_config.jsp`.
    * Sample configurations can be found in `<PortalServer_root>\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce`.
    * Navigate to `<wp_profile_root>\PortalServer\wcm\shared\app\config\` and create the `tinymce` folder.
    * Copy your custom `tiny_config.jsp` file to `<wp_profile_root>\PortalServer\wcm\shared\app\config\tinymce`.

2. **Customize the configuration:**
    * Open `tiny_config.jsp` in a text editor and customize TinyMCE.
    * A variety of [configuration options](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md){target="_blank"} are available to enhance the rich text editing experience.

3. **Run the configuration command:**
    * Open a command prompt.
    * Run the following command from the `<wp_profile_root>/ConfigEngine` directory to apply the changes made to `tiny_config.jsp`.

    **Windows™:**

    ```bash
    ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=<password> -DPortalAdminId=<username> -DPortalAdminPwd=<password>
    ```

    **UNIX™ and Linux™:**

    ```bash
    ./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=<password> -DPortalAdminId=<username> -DPortalAdminPwd=<password>
    ```

    !!!note
        An administrator username and password are not required if they are already specified in the `wkplc.properties` file.

4. **Restart the server.**

## Test the Configuration

Access HCL Web Content Manager (WCM), create or edit an HTML or Rich Text element, and verify that your new custom configuration is working as expected.  

!!!Note
    Several TinyMCE defects have been fixed in the latest CF versions. Refer to the [Fixes integrated in HCL Digital Experience 8.5.0.0, 9.0 and 9.5 Combined Cumulative Fixes](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0013939){target="_blank"} knowledge base article for more information.

???+ info "Related information"
    - [Enhanced rich text editor configuration options](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ephox_custom.md){target="_blank"}
    - [Editor options](../../../manage_content/wcm_authoring/authoring_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md){target="_blank"}
