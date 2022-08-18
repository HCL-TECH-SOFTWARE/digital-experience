# Customizing pages

The page customizer contains portlets for editing the layout, content, and appearance of pages. It also provides the Wires portlet, which allows users to set up connections between cooperative portlets on a page, and the Locks portlet, which allows users to lock and unlock containers and container content. You can configure the settings for these portlets to show a certain set of functions, restricting basic users from performing more advanced tasks.

Skins represent the border around a portlet, including its title bar. Users with appropriate access can select skins for individual portlets using the Appearance portlet of the page customizer. To set a skin for portlets, access the Page Customizer and select the Appearance portlet. See the portlet help for further information.

A page is deactivated when you start making changes to it. While editing the page, all changes are effective immediately and cannot be undone or canceled. Other users will not be able to access the page and icons that launch the edit mode of portlets on the page are deactivated until you commit the changes by clicking **Done**.

Editing a shared page can have different results, depending on the role assigned to the user editing the page.

-   Users with the Editor role for a page can make changes that affect all users of the page.
-   Users with the Privileged User role for a page can only make changes to a private copy, or layer, of the page. The changes do not affect the other users of the page. The page must have an initial layout with at least one container before users with the Privileged User role can make any changes to the page.
-   Users with the User role for a page cannot edit the page at all.

Log in to the portal and use one of the following methods to access the portlet:

-   Navigate to the page you want to change and select **Edit Page Layout** from the drop-down menu. The drop-down menu for a page is located on the tab for that page. The Edit Layout portlet opens the current page for editing. Other portlets in the Page Customizer are available if you have appropriate access.
-   After creating a new page, you are directed to the Edit Layout portlet to edit the layout and content of the new page. Other portlets in the Page Customizer are available if you have appropriate access. To create a new page, select **New Page** from the drop-down menu. The drop-down menu for a page is located on the tab for that page.
-   Navigate to the Manage Pages portlet and click the **Edit Page Layout** icon in the appropriate row.

-   **[Locking content on a page](../admin-system/admcustom_lock.md)**  
Use the Locks portlet to set permissions for moving containers or content, or for deleting portlets. This allows you to lock content to certain locations on a page. Any element on the page, such as a row container, a column container, or a portlet, can be locked or unlocked for many variations that give a user control of what can be modified. On a page where content and layout should be preserved, both can be locked, preventing other users from altering the arrangement of containers or portlets on the page.
-   **[Connections between portlets](../admin-system/admcustom_wires.md)**  
The Portlet Wiring Tool allows you to configure connections, or wires, between cooperative portlets. Cooperative portlets can exchange information, or properties, with each other through the property broker. Properties are exchanged either by prompting the user with a Click-To-Action menu or automatically using pre-configured wires. As a result, portlets on the page can react in an integrated and unified manner to the user's actions.
-   **[Themes and skins](../admin-system/admcustom_skins.md)**  
A theme determines the global appearance of a page. The purpose of this is to ensure visual consistency. Themes affect the navigational structure, the banner, the colors and fonts, the available portlet skins, and other visual elements of a page. A skin determines the frame that is displayed around a portlet.

**Parent topic:**[Manage pages portlets](../admin-system/mp_manage_pages.md)

**Related information**  


[Managing iWidgets in your portal](../admin-system/add_widget.md)

