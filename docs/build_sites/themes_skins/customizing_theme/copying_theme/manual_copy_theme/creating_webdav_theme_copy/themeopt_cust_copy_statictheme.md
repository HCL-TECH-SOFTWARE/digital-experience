# Copying the static resources for your theme

You need to make a unique copy of the Portal 8.5 theme static resources before you start customizing your custom theme.

1.  Connect your WebDAV client to http://host:port/wps/mycontenthandler/dav/themelist/.

2.  Copy the ibm.portal.85Theme folder to a local disk.

3.  Rename the folder to the name of your theme, such as customTheme.

4.  In the metadata folder, edit the localized\_en.properties file, or whichever file is your default locale, and change the value of the title key to the display name of your theme, such as Custom Theme. Save the file. Repeat this step for any of the other locale files for the languages that you plan to support.

5.  Edit the metadata.properties file and change the `Portal8.5` part of the com.ibm.portal.layout.template.href value to customTheme. Make sure that you have two properties that look like the following example:

    ```
    com.ibm.portal.layout.template.href=dav\:fs-type1/themes/customTheme/layout-templates/2ColumnEqual/
    resourceaggregation.profile=profiles/profile_deferred.json
    ```

6.  Save the file.

7.  Delete the skins folder from your customTheme, which removes the extra copies of the skins that are included with HCL Digital Experience.

    Your custom skin is created in a later step.

    ```
    customTheme/skins
    ```

8.  Save your files to your local disk.

    **Tip:** With some WebDAV clients, you might get the following error: `You need permission to perform this action`. In this case, you must explicitly create the root folder of the new theme with the WebDAV client first. The metadata folder and the metadata.properties file get created automatically with default content. You can now open the newly created folder and copy the contents of your local folder into the remote folder thus replacing the generated metadata.



**Related information**  


[Deploying themes with cacheable resources](../dev-theme/themeopt_mod_adminmod.md)

