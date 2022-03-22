# Rich text editor toolbar configuration options

Run these configuration tasks to change the configuration of the rich text editor toolbar.

**Video**: [Using the advanced rich text editor in HCL Digital Experience](https://www.youtube.com/watch?v=JmkcRPfC8TQ)

**Note:** In a clustered environment, these tasks are only run on the primary server.

## Using a custom Textbox.io editor toolbar

1.  The Textbox.io editor uses a custom configuration file that is named tbio\_config.jsp to set custom parameters for the toolbar. Copy your custom configuration file to `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`\\PortalServer\\wcm\\shared\\app\\config\\textboxio.

    **Note:** Sample configurations can be found in `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)`\\wcm\\prereq.wcm\\wcm\\config\\templates\\shared\\app\\config\\textboxio

2.  Open a command prompt.
3.  Run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ```
        ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    -   **UNIX™Linux™**

        ```
        ./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    -   **IBM® i**

        ```
        ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    **Note:** An administrator user name and password is not required if you already specified the portal administrator user name and password with the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

4.  Restart the server.

    **Note:** To revert to the default editor toolbar, run the task that is named remove-wcm-ephox-editor-custom-configuration on the primary node only.


**With HCL Digital Experience 9.5 CF18**, in order to remediate security vulnerabilities in several open source libraries, the Rich Text Editor Textbox.io requires a minimum supported Java level of 1.8. If you are unable to move to Java 8, it is recommended that you use the out-of-the-box, default CKEditor provided with HCL Digital Experience.

## Enabling Textbox I/O editor

1.  To enable the new Textbox I/O editor fix using HCL Digital Experience CF18 or later, run this configuration process in the Textbox I/O editor:

    ```
    ConfigEngine(sh/bat) action-deploy-tiny-editors
    ```

2.  If a custom configuration is used for this editor, run this configuration process:

    ```
    ConfigEngine(sh/bat) configure-wcm-ephox-editor-custom-configuration
    ```

3.  Restart the WebSphere\_Portal server once the configuration process is completed.

**Beginning with HCL DX 9.5 Container Update CF182**, the updated Textbox.io Rich Text editor is deployed out-of-box for the HCL DX 9.5 Containers. When deployed in supported Kubernetes environments, **a ConfigEngine task is required** to be run before the Textbox.io editor application will work correctly \(i.e. before for selecting the Advanced editor for use in Web Content Manager\). Run the ConfigEngine task:

```
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh action-create-was-variable-tiny-editors-cloud -DDxHost=<FQDN of the exposed DX host> 
-DWasUserid=wpsadmin -DWasPassword=wpsadmin
```

with `<FQDN of the exposed DX host>` being the value of the hostname used to access DX.

For example, if the URL for accessing DX in your cloud environment is https://dx-deployment-service-dx-home-sec.net/wps/portal, the DxHost value would be `dx-deployment-service-dx-home-sec.net` so the ConfigEngine command would look like:

```
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh action-create-was-variable-tiny-editors-cloud -DDxHost=dx-deployment-service-dx-home-sec.net 
-DWasUserid=wpsadmin -DWasPassword=wpsadmin
```

## Disabling Textbox I/O editor to use the OOB editor

1.  To disable Textbox I/O editor and to revert to an earlier version of the Rich Text editor, run the following process:

    ```
    ConfigEngine(sh/bat) action-remove-tiny-editors
    ```

    ```
    ConfigEngine(sh/bat) configure-wcm-editor
    ```

    ```
    ConfigEngine(sh/bat) remove-wcm-ephox-editor-custom-configuration (if a custom configuration is used)
    ```

2.  Restart the WebSphere\_Portal server.

## Using a custom EditLive! editor toolbar

**Note:** Ephox EditLive! is a deprecated feature as of CF11 or higher.

1.  The EditLive! editor uses a custom configuration file that is named config.xml.jsp to set custom parameters for the toolbar. Copy your custom configuration file to `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)`\\PortalServer\\wcm\\shared\\app\\config\\ephox.

    **Note:** Sample configurations can be found in `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)`\\wcm\\prereq.wcm\\wcm\\config\\templates\\shared\\app\\config\\ephox.

2.  Open a command prompt.
3.  Run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ```
        ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    -   **UNIX™Linux™**

        ```
        ./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    -   **IBM® i**

        ```
        ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
        ```

    **Note:** An administrator user name and password is not required if you already specified the portal administrator user name and password with the PortalAdminId and PortalAdminPwd settings in the wkplc.properties file.

4.  Restart the server.

**Note:** To revert to the default editor toolbar, run the task that is named remove-wcm-ephox-editor-custom-configuration on the primary node only.

**Beginning with HCL Digital Experience Container Update CF182,**, the updated Textbox.io Rich Text editor is deployed out-of-the-box for HCL DX 9.5 Containers. When deployed in supported Kubernetes environments, a ConfigEngine must be required to be run before the Textbox.io editor application will work correctly \(i.e. before for selecting the Advanced editor for use in Web Content Manager.

## Reverting to the EditLive! editor version 7 toolbar

**Note:** Ephox EditLive! is fully unsupported.

-   Documentation resource: [Newly unsupported features and themes for HCL Digital Experience 8.5 and 9.0](../reference/newly_unsupported_features.md)

