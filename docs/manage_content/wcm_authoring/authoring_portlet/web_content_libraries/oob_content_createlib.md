# Create Content Library

You use the Administration portlets to create libraries. You can have multiple content libraries. To determine how many libraries you need, consider the type of site you are developing and who needs access to certain content. A minimum of two libraries is common. You can set up one library to store items required for the web content system and another library for content.

To create a library, you must be an administrator.

When you create a library, you must set the language for the library. You cannot change the language of the library after it is created.

If you need to support multiple languages in the authoring portlet, you can use a text provider plug-in. The text provided plug-in is not included and must be developed. To use a text provider you need the plug-in name and key.

## Default Content

You can include default items in the library to help you get started faster. If you choose to include default items, the following is included:

-   Two workflows called Express and Three Stage Workflow
-   An authoring template called Article
-   A presentation template called Simple Article Layout
-   A site area called Articles
-   Content items called Sample Article and Sample Article 2
-   Components


## Create Content Library Steps

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

11. Add the new library to the list of configured libraries for each authoring portlet that requires access to the new library, including authoring portlets on servers that you subscribe your library to. For more information, see [Selecting web content libraries](../../../wcm_delivery/wcm_user_assistance/editing_webcontent_portlet/auth_portlet_settings/wcm_config_authoringportlet_libraries.md).


### Renaming Libraries

Ensure that your library is named correctly when first created as renaming a library after you start to create web content can lead to errors. For example, menus and navigators might not correctly display results after a library is renamed until all caches are cleared.