# Defining user interface options

You use the User Interface Options section to define the user interface options of an authoring portlet.

1.  Select a visibility option for the navigation bar. This section is the part of the authoring portlet that displays navigational links to the item views, group by views, and personal views.

    -   **Show**

        If this option is selected, the navigation bar is visible when the home page, launch page, or item forms are displayed.

    -   **Hide**

        If this option is selected, the navigation bar is hidden when the home page, launch page, or item forms are displayed. This selection is for users who need to work on basic web content management tasks only.

    -   **Hide when home page or launch page is open**

        If this option is selected, the navigation bar is hidden when the home page or launch page is displayed, but is visible when the item forms are displayed. The initial interface is made simpler, while still having the navigation bar available in other views. This option is for users who need to work on more complex web content management tasks.

    !!! note
        The navigation bar is always displayed when you use the library explorer.

2.  Select a default view:

    -   **Basic home page**

        If selected, the basic home page is displayed when you first access the authoring portlet. The basic home page is designed for content authors who need to create content items and other simple item types only. They would not usually need access to the more advanced library explorer. The basic home page allows the creation of content with up to six different authoring templates. The authoring templates that are displayed are the favorites of the current user, and the most recently used by the current user.

        You can define a set of authoring templates to display on the home page when a user does not have any favorites or recently used items. Add the wcm.authoringui.homePageTemplates parameter to the authoring options in the `WCM WCMConfigService` service from the IBM® WebSphere® Application Server administration console. The paths of the templates must be specified, separated by colons. For example:

        ```
        Library 1/Template Name:Library 2/folder/Template Name 2:Library 3/Template Name 3
        ```

    -   **Home page**

        If selected, the standard home page is displayed when you first access the authoring portlet. One section of the home page is used to create items and open their favorite locations. Another section of the home page is used to view recent activity. This interface is designed for content authors who need to complete tasks such as creating content, editing their draft content and approving and declining content. They would not usually need access to the more advanced library explorer.

    -   **Launch page**

        If you created a custom launch page to use in place of the default user interface, select **Launch Page**. For example, `file.jsp`.

        A custom launch page is a JSP file and must be stored in the WAR file directory for the Authoring portlet. `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/cellname/PA_WCM_Authoring_UI.ear/ilwwcm-authoring.war/jsp/html`, where cellname is unique to your installation. Enter the name of the JSP file in the custom launch page field.

    -   **Library Explorer**

        To use the default user interface, select **Library Explorer**.

3.  Select **Hide the open item and view lists** to hide these functions from users in the authoring portlet.

4.  To improve performance, you can limit the number of tasks a user can open at the same time in the authoring portlet by entering a number in the **Maximum open tasks per Authoring Portlet instance** field.

5.  To improve performance, you can limit the number of items a user can select in an index at the same time in the authoring portlet by entering a number in the **Maximum selected items per action before warning** and **Maximum selected items per action before denying the action** fields.

6.  The number of rows that appear in an index is defined in the **Maximum rows per table** field. If blank, this setting defaults to 10. A maximum of 500 rows can set.

7.  To enable People Awareness, select **Enable people awareness**. People Awareness helps users to select user names that appear in views and forms within the Authoring Portlet, and send those users an email or Sametime message.

8.  Select the default display mode of the library explorer.

    -   **List view mode:**

        This mode displays lists of items only as you browse a library.

    -   **Tree view mode:**

        This mode displays both lists of items plus a navigational tree as you browse a library.



