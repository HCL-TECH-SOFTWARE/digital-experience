# Limiting toolbar, Site Manager, and action bar visibility to administrators only

You can limit the visibility of the toolbar, Site Manager, and action bar to administrators only. You can also limit the visibility of the toolbar and Site Manager to administrators only without affecting the visibility of the action bar.

1.  Click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage pages**.

2.  Select **Unique name contains** and search for one of the following unique names:

    -   To limit the visibility of the toolbar, Site Manager, and action bar, search for ibm.portal.Toolbar.

    -   To limit the visibility of the toolbar and Site Manager without altering the visibility of the action bar, search for ibm.portal.Toolbar.ContentRoot.
    
    -   To limit the visibility of a specific toolbar tab, search for the unique name of the specific toolbar page.

3.  Click the **Set Page Permission** icon for the page that you searched for.

4.  From the Resource Permissions pane, click the **Edit Role** icon for the User role.

5.  Click the **Delete Member from Role** icon for All Authenticated Portal Users.

6.  Click **OK**.

7.  Click the name of the page to return to the menu.

8.  If they are not already cleared, clear the **Allow Propagation** and **Allow Inheritance** check boxes for the Privileged User role.

9.  Click **Apply**.

10. Click **OK**.

11. Click **Done**.
