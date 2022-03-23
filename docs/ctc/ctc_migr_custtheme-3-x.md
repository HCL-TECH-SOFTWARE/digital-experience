# How to preserve theme and layout changes after you upgrade from 3.x 

If you are upgrading to Content Template 4.4 from version 3.x, to make an existing theme or layout work with the new Content Template layouts and themes, some changes are required.

## Theme updates when you upgrade from Content Template 3.x to Content Template 4.4

The steps must be followed if you are:

-   Upgrading your site that was created by using Content Template Catalog version 3.x
-   Upgrading an existing CTC Demo installed by using Content Template Catalog version 3.x.
-   Upgrading Content Template Catalog pages where custom CSS has been used.

Content Template 4.4 uses the following new styles:

-   contentPage is now wpthemeFrame
-   contentBanner is now wpthemeBanner
-   contentNavigation is now wpthemeBannerPrimaryNavigation
-   contentFooter is now wpthemeFooter
-   contentLayoutArea is now wpthemeLayoutContainers
-   contentMainCol is now wpthemePrimaryContainer
-   contentSidebarCol is now wpthemeSecondaryContainer and wpthemeTertiaryContainer

    For example:

    ```
    .contentSidebarCol .contentBlock {
    margin-bottom:25px;
    }
    ```

    becomes

    ```
    .wpthemeSecondaryContainer .contentBlock,
    .wpthemeTertiaryContainer .contentBlock {
    margin-bottom:25px;
    }
    ```


To migrate pages that are created with Content Template 3.x to work with style changes delivered in Content Template 4.4, you must update the page layout by applying the equivalent layout from Content Template 4.4, stored in WebDAV under themes/Portal8.5/CTC/layout-templates. This update should be done manually, as it affects the design of the site.

1.  Edit the page properties of the Content Template page.
2.  Go to the **Advanced** tab and specify the layout to use. For example: dav:fs-type1/themes/Portal8.5/CTC/layout-templates/4row/
3.  Click **Update Layout from Template** and then save the update.

**Note:** These initial steps must be performed on each page in your site.

## Configuration task upgrade-ctc3-site

A task has been included to simplify the layout update task for larger sites. The task takes an existing site and update all the layout references to point to a new page layout. To prepare an existing site to use the Portal 8.5 theme with CTC 4.4 theme extensions:

1.  Go to your site and open the first-level page in edit mode.
2.  Edit the page properties and go to the advanced tab.
3.  Locate or create the unique name for the page. For example, the CTC Demo site uses the unique name, ctc.demo.
4.  Now run the upgrade-ctc3-site task from the ConfigEngine folder of your server:
    -   **Windows™**

        `ConfigEngine.bat upgrade-ctc3-site -DuniqueName=UNIQUE_NAME`

    -   **AIX® HP-UX Linux™ z/OS®**

        `./ConfigEngine.sh upgrade-ctc3-site -DuniqueName=UNIQUE_NAME`

5.  Restart the server.
6.  Modify the site theme to use Portal 8.5 with the Content profile through the page properties dialog.

    **Note:** If upgrading from Content Template Catalog version 3.x, you need to modify each of your pages separately. This is because inheritance was not enabled for pages in version 3.x.

7.  Go to the top-level page in your site, and then go to the theme Setting under the **Advanced** tab in the Page properties.
    -   Change the theme to **Portal 8.5**. Ensure that inheritance is enabled so that this change is propagated to the other pages in your site.
    -   Change profile to **Content**. Ensure that inheritance is enabled so that this change is propagated to the other pages in your site.
8.  Also on the top-level page in your site, go to the Styles Tab and select the style that is named **CTC Bordered**.
9.  You need to edit all slideshow images to change the width to 1200 pixels.

-   **Optional settings:**

    By default the task uses the layout path that is used in version 3.x of CTC and update it to use the version 4.4 path. If you have created a custom theme that has a different layout, or you want to move to a custom theme, the following properties can be used to specify the location to use for the layouts.


-   **-DoldLayoutPath=OLD\_PATH**

    Use the format fs-type1/themes/YOUR\_THEME/layout-templates where YOUR\_THEME is replaced by the theme directory name. Defaults to fs-type1/themes/ctc8/layout-templates.

-   **-DnewLayoutPath=NEW\_PATH**

    Use the format fs-type1/themes/YOUR\_PORTAL\_85\_THEME/CTC/layout-templates where YOUR\_PORTAL\_85\_THEME is a theme based on the Portal 8.5 theme. Defaults to fs-type1/themes/Portal8.5/CTC/layout-templates.


## After you upgrade the Content Template 3.x layouts

The Content Template layouts have been updated in Content Template 4.4 to be consistent with the HCL Portal layouts. Now when changing the page layout, the portlets will, in most cases, move to the correct corresponding position in the new layout. During upgrade, the updated Content Template layouts are applied to all pages that use the Content Template layouts. You can drag and drop portlets that become "hidden" into the correct position in the layout. To do this:

-   Open a page in edit mode.
-   Open the Toolbar.
-   Open the Page Layout tab.
-   If there are portlets that have been hidden due to the layout change, choose "Add All To Page".
-   Move the portlets into the correct position in the layout.

**Parent topic:**[Post upgrade steps ](../ctc/ctc-upgrade-post.md)

