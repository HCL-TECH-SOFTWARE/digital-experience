# Controlling the visibility of the site toolbar and toolbar tabs

You can control the visibility of the site toolbar and single toolbar tabs per virtual portal by using Portal Access Control.

The visibility of the action bar that contains the **Edit Mode** switch and the global menus can be controlled by assigning resource permissions to the toolbar master page. The toolbar master page has the unique name ibm.portal.Toolbar and is located within the Hidden Pages Root in the portal page hierarchy. By default the toolbar master page is accessible for anonymous portal users and authenticated portal users.

The visibility of the toolbar tabs can be controlled by assigning resource permissions to the toolbar content root or one of its sub pages. The toolbar content root has the unique name ibm.portal.toolbar.ContentRoot and is located within the Hidden Pages Root in the portal page hierarchy. By default the toolbar tabs are accessible to all authenticated portal users but not to anonymous portal users.

You can change the resource permissions for certain users or user groups. You can use the Resource Permissions portlet or the XML configuration interface to change the resource permissions.

You can completely disable the site toolbar along with the toolbar tabs for the entire system or for a certain virtual portal. To disable the site toolbar, follow the configuration settings that are documented in *Removing the site toolbar on a production server.*

<!--
-   **[Limiting toolbar, Site Manager, and action bar visibility to administrators only](../controlling_visibility_site_toolbar/limiting_toolbarvisibility.md)**  

You can limit the visibility of the toolbar, Site Manager, and action bar to administrators only. You can also limit the visibility of the toolbar and Site Manager to administrators only without affecting the visibility of the action bar.
-->

???+ info "Related information"
    - [Removing the site toolbar on a production server](../wcm_mngpages_disabletool.md)

