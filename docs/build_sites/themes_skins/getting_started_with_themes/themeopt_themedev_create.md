# Creating a theme

You can quickly create a new theme that is based on a template when you click the Create Theme icon.

Use the following steps to create a new theme:

1.  In the Theme Manager, click **Create Theme**.
2.  Enter a theme title and an optional theme description.

    !!! note
        By default, the theme title is used as the system name. The system name is used for the WebDAV path, the theme unique name, and the skin unique name. If one of the following conditions is true, you must choose a different system name:

    -   **Invalid characters are used**

        If invalid characters are used in the title, a new field appears that displays the system name with all invalid characters replaced by underscores. You can overwrite that system name by entering a new system name with no invalid characters.

    -   **The system name already exists**

        If the system name already exists on the server, a new field appears in which you can enter a unique system name. The dialog checks whether the new unique system name that you enter is available.

3.  Select a theme template. The Simple Theme template and the Portal 8.5 Theme template are available for immediate use.
4.  After you enter a system name that is unique and includes only valid characters, click **Create** to begin the theme creation. When the theme is complete, the dialog displays either a success message or an error message.

You can also designate a theme that you created as a template. Only WebDAV-based themes are supported as templates. To designate your own theme as a template, add the following theme metadata to your theme:

```
com.ibm.portal.isTemplate = true
```

!!! note
    Newly created themes are WebDAV-based. By default, they are connected to the WAR file of the template that you select, and you can reuse the dynamic content spots that are included in the template. If you want to create your own dynamic content spot, create your own WAR file with a module that defines the dynamic content spot ID. Then, you can reference that module within your profile and use that dynamic content spot ID.


