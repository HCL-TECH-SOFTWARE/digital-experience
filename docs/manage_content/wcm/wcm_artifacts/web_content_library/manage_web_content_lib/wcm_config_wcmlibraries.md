# Creating web content libraries

Administrator users can create web content libraries in the HCL Digital Experience administration portlet.

You must be an administrator to create web content libraries.

1.  Click the **Administration menu** icon in the toolbar.

2.  Click **Portal Content** and then **Web Content Libraries**.

3.  Click **Create new library**.

4.  Enter a name and description.

5.  Click **Localizations** to select a text provider plug-in and key. A text provider is used to provide localized text that can be used within the Web Content Manager user interface. The key is used to look up a string from the selected text provider. The text provider displays a different library name for each locale it is configured for. The text that is entered in the library name field is only used if an appropriate text label is not available from the selected text provider, or if the text provider is not available.

6.  Select a language for the library. This option can be set only on creation. You cannot change the language of a library after the library is created.

    !!! note
        If a language does not exist in the list of languages available when you create a library, you can add that language to the list of supported HCL Portal languages. For more information, see *Language Support* in the HCL Product Documentation.

7.  If you want to prevent the library from being deleted, select **Prohibit library from being deleted**.

8.  Enable the library if you want to library to immediately be available.

9.  Select **Include default items in the new library** to add a set of default web content items to the library when it is created.

10. Click **OK** to create the library.

11. Add the new library to the list of configured libraries for each authoring portlet that requires access to the new library, including authoring portlets on servers that you subscribe your library to. For more information, see [Selecting web content libraries](../../../wcm_content_delivery/wcm_user_assistance/editing_webcontent_portlet/auth_portlet_settings/wcm_config_authoringportlet_libraries.md).


**Renaming Libraries:**

Ensure that your library is named correctly when first created as renaming a library after you start to create web content can lead to errors. For example, menus and navigators might not correctly display results after a library is renamed until all caches are cleared.

<!--
**Parent topic:**[Managing web content libraries](../panel_help/wcm_admin_libraries.md) -->

