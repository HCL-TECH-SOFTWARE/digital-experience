---
id: wcm_dev_auth-temp_sa_prop
title: Defining site area properties
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Specify the characteristics of the item that is generated from the site area template, including the type of item to be created, where it can be saved and version control.

1.  If you want to define a default presentation template for site areas that use this site area template, click **Select Presentation Template** to select an appropriate presentation template for different types of rendering.

    -   **Default Presentation Template**: This presentation template is used to render a site area within a Web Content Viewer portlet.
    -   **Summary Presentation Template**: This presentation template is used when the summary render mode is used to render a site area.
    -   **JSON Record Presentation Template**: This presentation template is used when the JSON render mode is used to render a site area on mobile devices.
    -   **XML Document Presentation Template**: This presentation template is used when the XML render mode is used to render a site area on mobile devices.
    -   **HTML Document Presentation Template**: This presentation template is used when the HTML render mode is used to render a site area as a complete web page.
    If no valid template mapping in a site area exists for a site area that uses this site area template, the default presentation template is used to render the site area.

    For more information about rendering modes see the topic named *Rendering modes for web content* in the Knowledge Center.

2.  Specify where a site area created from this site area template is listed by selecting one of the following options from the **Default placement of new item** field. The option that you select determines where the new item is displayed in indexes and navigators.

    -   First Child
    -   Last Child
3.  Select whether to force a new item to be saved in the first workflow stage "Save as" is used, or not. If selected, users do not have a choice about where to save an item "Save As" is used. The new item is automatically saved in the first workflow stage.

4.  Select **Restrict allowed authoring templates** to restrict which authoring templates are allowed for children of site areas that are created with this site area template. This is useful when you want to restrict the types of site areas and content items that can be used beneath a certain type of site area. For example, you can allow only "news" items to be created within a "news" section of a website. These restrictions apply only to the new, move, copy, link, and save as operations.

    1.  Click **Add**.

    2.  Select the authoring template that you want to include.

    3.  Click **OK**.

5.  Select the type of version management to use when you create site areas with this site area template:

    -   **Configured default**

        The default version management setting is used.

    -   **Allow users to manually version on demand**

        Users can create versions of items when needed.

    -   **Automatically version every update**

        A new version is created each time that the item is saved.

    -   **Do not offer a manual version, and do not version automatically**

        Version management is disabled for items that are based on this site area template.


