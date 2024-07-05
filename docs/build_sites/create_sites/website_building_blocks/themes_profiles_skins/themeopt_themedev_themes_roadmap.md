# Roadmap: Creating and customizing themes

Theme creation and customization are easy when you use the Theme Manager and download your static theme files by using a WebDAV client. This roadmap provides an overview of the theme creation and customization process. Links to detailed instructions for each step are provided in the roadmap.

## Get to know Themes

A theme is an interchangeable front end for a portal node or group of nodes. It controls elements such as the banner, navigation, and look and feel for a node. A theme consists of three types of resources:

-   **Static resources**

    Static theme resources include the theme.html file, layout templates, skins, JavaScript, CSS, and image files. The resources are stored by default within WebDAV, which is accessible with any WebDAV client.

-   **Dynamic resources**

    Dynamic theme resources are stored in a WAR file. Only the default dynamic content spots for the theme, which are JSP files, and the Default.jsp file that renders the theme are stored in the dynamic theme resources.

-   **Theme definition**

    The theme definition registers the theme with the HCL Portal database. The theme must be registered before Portal can recognize it, even if other parts, such as WebDAV or WAR files, are deployed.


Documentation resource: [Theme creation and resources](../../../themes_skins/getting_started_with_themes/themeopt_themedev_creation_and_resources.md)

## Create a new theme

Use the Theme Manager portlet to create new themes with one click. To access the Theme Manager, click **Applications menu** \> **Themes** in your portal. The Theme Manager opens. You can quickly create a new theme that is based on a template when you click the **Create Theme** icon. To create a new theme, you enter a new theme title and an optional theme description. A theme template is selected for you, or you can select another template.

Documentation resource: [Theme Manager](../../../themes_skins/getting_started_with_themes/themeopt_themedev_manager.md)

Documentation resource: [Create Theme](../../../themes_skins/getting_started_with_themes/themeopt_themedev_create.md)

## Customize your new theme

Using the Theme Manager portlet, you can modify the properties of a theme and its available skins in the Manage Theme Properties dialog. This dialog is accessed by clicking the gear icon next to the theme. In the dialog, you can modify the properties of both WAR-based and WebDAV-based themes, but not all modification options are available for WAR-based themes. When you select a theme in the Theme Manager and open the Manage Theme Properties dialog, all of the properties for that theme and its available skins display. The dialog includes five panes: General, Skins, Localization, Metadata, and Advanced. An easy first step toward customizing your theme is changing your theme logo to reflect your brand and business. You can modify an existing image or add a new image as your theme logo.

Documentation resource: [Manage Theme Properties](../../../themes_skins/getting_started_with_themes/themeopt_themedev_etp.md)

Documentation resource: [Changing the theme logo in the Simple Theme](../../../themes_skins/simple_theme/themeopt_themedev_changelogo_simpletheme.md)

## Edit your static theme files

After you [create a new theme](../../../themes_skins/getting_started_with_themes/themeopt_themedev_create.md), you can edit the static resources that are associated with the theme. Static theme resources include the theme.html file, layout templates, skins, JavaScript, CSS, and image files.

Use a [WebDAV client](https://pages.git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/in-progress/manage_content/wcm_delivery/webdav/administer_webdav/?h=using+webdav+hcl+portal) to synchronize all of your static theme resources with your local development environment so that you can modify them with your favorite editor.

Documentation resource: [Editing static theme resources and connecting with WebDAV](../../../themes_skins/customizing_theme/themeopt_themedev_editing_static_resources.md)


