# The tag widget

Users can use the tag widget to view, apply, and update tags that were applied to a resource.

The tag widget displays tags for users to view directly in the page. When users use the tag widgets, they can perform the following tasks:

-   **Switch between tag scopes:**

    Users can switch the tag scopes by using the drop-down menu in the widget.

-   **Add new tags:**

    Users can add new tags by using the input field that shows when a user clicks the **Plus** icon. Users can click this icon if the tag scope is **My public tags** or **My private tags**. Users can add more than one tag by using commas or spaces as separators.

-   **Go to the Tag Center**

    If the tagClickActionMode parameter is set to `TAG_CENTER`, users can click a tag to go to the portal Tag Center page.

-   **View more tags**

    If the number of tags exceed the number of tags that is configured to be shown, the user can click **More tags**. The widget then shows the extra tags in a dialog.

-   **Delete tags:**

    The user can delete tags that the user added. To do so, the user clicks the delete icon that is shown next to the tags. The delete option is available only if the tag scope is **My public tags** or **My private tags**. A user can delete only the tags that the user added.

-   ****

Users cannot modify tags in the tag widget.

The tag widget has the following user interface controls:

-   **Label**

    Displays a title that represents the scope of the tags that are displayed. Depending on the setting of the tag scope parameter for the widget instance, the tag widget shows one of the following tag sets.

    The title indicates the scope of the tags that are shown:

    -   **Tags**

        With this scope, the widget shows the community tags. Community tags are tags that other users applied to the resource as public tags.

    -   **My public tags**

        With this scope, the widget shows personal public tags. Personal public tags are tags that the user applied to this resource.

    -   **My private tags**

        With this scope, the widget shows personal private tags. Personal private tags are all private tags that the user applied to this resource. This scope is available only when the `privateTaggingEnabled` parameter is set to `true`.

    The scope of the tags that the widget shows depends on the setting of the tag scope parameter. For more information about this parameter, read the *Tag widget parameter reference*. You can set this parameter to one of the following values:

    -   **COMMUNITY\_PERSONAL\_PUBLIC**

        This is the default setting. With this setting, the tag widget shows the community tags and the personal public tags of the user

    -   **PERSONAL\_PUBLIC**

        With this setting, the tag widget shows the personal public tags of the user.

    -   **PERSONAL\_PRIVATE**

        With this setting, the tag widget shows the personal private tags of the user.

-   **Tags**

    The available tags are displayed after the title. The tag list uses commas as separators. Users can click the tags. Clicking a tag redirects the user to the tag center with the tag cloud. The tag cloud view scope depends on the setting of the tagClickActionMode parameter and on the scope that the user selected, **All** or **My public tags**. For more information about this parameter, read the *Tag widget parameter reference*. You can set this parameter to one of the following values:

    -   **TAG\_CENTER**

        With this setting, the tag cloud shows the **All** view.

-   **More tags**

    Users can configure how many tags the widget shows at the same time. If there are more tags than the user configured for display, the user can click **More tags**. The widget then shows the extra tags in a dialog.

-   **Arrow for drop-down menu**

    Users can use this menu to switch between the tag scopes. The options in the drop-down menu depend on the tag scope that is displayed. For example, if the widget is in the **Tags** scope and shows the community tags, then clicking the drop-down menu shows an option that is called **My public tags**.

-   **Plus \(+\) icon**

    The widget shows this icon. When a user clicks this icon, the widget opens an input field where the user can type tags.


-   **[Adding the tag widget to your portal content](../admin-system/tag_rate_add_inltag_lite.md)**  
By default, the tag widget is available for Web Content Manager article template pages and blogs and wikis. You can also add tag widgets to your portal content as required.
-   **[Customizing the tag widget](../admin-system/tag_rate_cust_inltag_lite.md)**  
The user interface of the tag widget consists of Web Content Manager HTML components. You can customize the tag widgets by modifying one or more of these components. For example, you can change the order of the user interface elements, or you can remove a field that you do not want to show in the user interface. The components are listed here.


**Related information**  


[Properties for the tag widget](../admin-system/srvcfg_cpcfg4tr_dlgtag_altui.md)

