# Adding resource environment provider properties

Resource environment provider \(REP\) custom properties are global in scope, but you can use a consistent naming convention for a theme or module that applies across multiple themes.

For properties that are used only by a single theme, prefix with yourTheme. For those properties that are used only by a single module, prefix with yourModule. Modules do not belong to any particular theme and can be used by any theme. It is a good practice to put your modules in one web app and each theme in its own separate web app.

Replace occurrences in italics with the actual names of your items.

1.  Access the WebSphere® Integrated Solutions Console.

2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **Node=<node\>, Server=HCL Portal and HCL Web Content Manager**.

4.  Click **New**.

5.  Enter YourPrefix ThemesConfig in the **Name** field.

6.  Click **OK**.

7.  Find your REP in the table and click **YourPrefix ThemesConfig**.

8.  Click **Custom properties**.

9.  Create a global and a theme property:

    1.  Click **New**.

    2.  Enter modules.contextRoot in the **Name** field. Because it is global in scope, it does not use any particular prefix.

    3.  Enter the context root of your web application that contains your modules in the **Value** field, such as /yourprefix/modules.

    4.  Click **OK**.

    5.  Click **New**.

    6.  Enter yourTheme.contextRoot in the Name field. Because it is scoped to your theme, it uses the yourTheme. prefix.

    7.  Enter the context root of your web application that contains your theme in the **Value** field, such as /yourprefix/yourtheme.

    8.  Click **OK**.

10. Create example properties that add REP properties for your theme or module:

    1.  Click **New**.

    2.  Enter yourTheme.yourRepProperty in the Name field. Because it is scoped to your theme, use the yourTheme. prefix.

    3.  Enter yourvalue in the **Value** field.

    4.  Click **OK**.

    5.  Click **New**.

    6.  Enter yourModule.yourRepProperty in the Name field. Because it is scoped to your module, use the yourModule. prefix.

    7.  Enter yourvalue in the **Value** field.

    8.  Click **OK**.

11. Save and persist the changes to the master configuration.

12. Restart the portal server.



