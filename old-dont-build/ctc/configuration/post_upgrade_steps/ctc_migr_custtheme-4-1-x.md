# Preserving theme and layout changes after upgrading from 4.1.x \| CTC for HCL Digital Experience

If you are upgrading to Content Template 4.4 from version 4.1.x, to make an existing theme or layout work with the new Content Template layouts and themes, some changes are required.

## Upgrading Content Template 4.1.x layouts

The layouts in Content Template 4.4 have been updated so that the layout sections are named consistently with the other HCL Portal layouts. To upgrade the Content Template layouts in your site, run the configuration task update-ctc41-site:

1.  Go to your site and open the first-level page in edit mode.
2.  Edit the page properties and go to the advanced tab.
3.  Locate or create the unique name for the page. For example, the CTC Demo site uses the unique name, ctc.demo.
4.  Now run the upgrade-ctc41-site task from the ConfigEngine folder of your server:
    -   **Windows™**

        `ConfigEngine.bat upgrade-ctc41-site -DuniqueName=UNIQUE_NAME`

    -   **AIX® HP-UX Linux™ z/OS®**

        `./ConfigEngine.sh upgrade-ctc41-site -DuniqueName=UNIQUE_NAME`

5.  Restart the server.

-   **Optional settings:**

    By default the task uses the layout path that is used in version 4.1.x of CTC and update it to use the version 4.4 path. If you have created a custom theme that has a different layout, or you want to move to a custom theme, the following properties can be used to specify the location to use for the layouts.


-   **-DoldLayoutPath=OLD\_PATH**

    Use the format fs-type1/themes/YOUR\_THEME/layout-templates where YOUR\_THEME is replaced by the theme directory name. Defaults to fs-type1/themes/Portal8.0/CTC/layout-templates.

-   **-DnewLayoutPath=NEW\_PATH**

    Use the format fs-type1/themes/YOUR\_PORTAL\_85\_THEME/CTC/layout-templates where YOUR\_PORTAL\_85\_THEME is a theme based on the Portal 8.5 theme. Defaults to fs-type1/themes/Portal8.5/CTC/layout-templates.



