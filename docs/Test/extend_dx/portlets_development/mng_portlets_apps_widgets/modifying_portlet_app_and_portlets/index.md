# Modifying portlet apps and portlets

You must perform some preparatory tasks before you make your portlets and portlet applications available to your users by putting them on portal pages.

A portlet is initially displayed in the **View** mode. A user can apply customization to individual, selected, or all instances of the portlet by leaving the View mode and entering into the Personalize, Edit Shared Settings, or Configure mode as appropriate. To access these other modes, hover over the portlet title bar, click the **Display portlet menu** icon and select the appropriate mode. Refer to the following descriptions for more information about the Personalize, Edit Shared Settings, and Configure modes.

!!! note
    Once you leave the View mode by selecting another portlet mode, you must click **Back** from the portlet menu to return to the View mode. You must return to the View mode before changing to another mode.

-   **Personalize:** Updates change the look of the portlet only for the user who makes the updates. In order for a user to have access to personalize settings, they must be granted at least Privileged User role on the page and Privileged User role on the corresponding Portlet Definition. This is available for standard portlets and IBM portlets.
-   **Edit Shared Settings:** Updates change the default look of the portlet on a specific page. All users see the change when they access that page. In other words, all \(the particular\) portlet instances on a page are modified, but not all instances of that portlet on every page. If you want the changes to appear on every page that portlet appears, you must modify the settings on each page. In order for a user to have access to edit shared settings they must be granted at least Editor role on the page and Editor role on the corresponding Portlet definition. This is available for standard portlets and IBM portlets.
-   **Configure:** Updates change the default look of a portlet for all portlet instances. All users see the portlet changes on all pages that portlet is available. A user needs to have at least Manager role on portlet definition to have access to configure a portlet.

It depends on the portlet which selection options are available in the portlet menu.

-   **[Configuring portlet applications or portlet parameters](portletapps_cfg.md)**  
Many portlet applications and portlets have associated configuration parameters that must be changed after deployment. Manage Applications and Manage Portlets allow you to modify configuration parameters.
-   **[Switching from HCL Digital Experience 9.5 Practitioner Studio to the HCL Digital Experience 8.5 and 9.0 Login interface](portletapps_changelogin.md)**  
With the HCL Digital Experience 9.5, a new login user interface is presented. HCL Digital Experience Administrators can switch back to the HCL Digital Experience 8.5 and 9.0 user interface by configuring the portlet.


