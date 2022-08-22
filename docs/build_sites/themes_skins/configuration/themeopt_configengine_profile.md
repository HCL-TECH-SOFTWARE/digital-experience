# ConfigEngine tasks for creating a new profile based on a template and an existing profile in the system

You can extend the theme module framework with a new ConfigEngine task.

You can create a profile from a profile template and an existing profile. The config task reads the existing profile, takes the deferred and non-deferred theme modules from it, and creates a profile in WebDAV based on the template and the theme modules in the existing profile.

You can use these configuration tasks only for theme profile files that are stored in the WebDAV file store.

For more information about the theme module framework and how you can administer it, see the section about *Managing theme capabilities*.

Use the following parameters with the create-profile-based-on-template configuration tasks.

-   **WasUserid**

    The WebSphere® Application Server user ID.

-   **WasPassword**

    The WebSphere® Application Server user ID.

-   **PortalAdminId**

    The HCL Portal administrator user ID.

-   **PortalAdminPwd**

    The HCL Portal administrator password.

-   **ThemeUniqueName**

    The unique name of the theme that contains the profile that you want to update.

-   **TemplateProfileFilePath**

    The file path to the local template profile that you want the new profile be based on.

-   **TargetProfileFileName**

    The name of the target profile file that you want to create.

-   **TemplateModuleListProfileFileName**

    The name of the existing profile to fetch the list of theme modules from.

-   **OverwriteProfile**

    Can be true or false. Defines whether the profile in WebDAV should be overwritten if it already exists.


Use the following command to create profile with the name profile\_new\_deferred.json in the theme with the unique name ibm.portal.85Theme, which is based on the template that exists on your local hard drive in /opt/WebSphere/profile\_new\_template.json. Once it is created in WebDAV, it has the list of modules from the profile\_deferred.json profile, which already exists. The example assumes that the WebSphere Application Server and HCL Portal credentials are defined in the wkplc.properties file.

```
./ConfigEngine.sh create-profile-based-on-template -DThemeUniqueName=ibm.portal.85Theme -DTemplateProfileFilePath=/opt/WebSphere/profile_new_template.json -DTargetProfileFileName=profile_new_deferred.json -DTemplateModuleListProfileFileName=profile_deferred.json -DOverwriteProfile=true
```


**Related information**  


[Managing theme capabilities](../dev-theme/themeopt_admin_themes.md)

