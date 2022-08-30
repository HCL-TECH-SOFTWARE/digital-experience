# The rating widget

Users can use the rating widget to view, apply, and update ratings that were applied to a resource.

The rating widget displays ratings for users to view directly in the page. The rating widget shows ratings for the resource that has the widget included. When users use the rating widget, they can perform the task given in the following list.

**Note:** For these tasks, a user needs the rights to edit the HCL Web Content Manager component library `Web Resources V70`.

-   **Switch between rating scopes:**

    Users can view the rating value for other rating scopes. They can switch to another rating scope by clicking the rating menu.

-   **Display Rating Description:**

    To display the rating description in the rating widget, users must do both of the following tasks:

    -   Add the Web Content Manager HTML component named `HTML - Rating Widget Light - Description` to the `HTML - Rating Widget Light`.
    -   Set the attribute `ratingDescription` to `ALL` in the `Web Resources v70\Components\HTML - Rating Widget Light - Description - Stars`.
    The rating description is displayed only for community average ratings.

-   **Add a rating:**

    Users can add personal public or personal private ratings. To do so, they switch to the **Personal public** or **Personal private** rating scope and then assign a rating by clicking the appropriate asterisk.

-   **Change a rating:**

    User can change ratings that they assigned. To do so, they click the appropriate asterisk. Users can change a shown rating only if that rating is a personal public or personal private rating and the widget shows the **Personal public** or **Personal private** rating scope. The default rating view displays the community average rating. When a user clicks the asterisks, the scope changes to PERSONAL\_PUBLIC and the rating value is updated.

-   **Remove a Rating:**

    Users can remove a rating by using the **Delete** option in the **Action** menu. The Delete option is available only if a rating was assigned to the resource and the rating value is not zero \( `0` \).

-   **Customize the Web Content Manager components in the rating widget:**

    Users can reorder, remove, and edit the properties of Web Content Manager components in the rating widget. The rating widget definition is available in the Web Content Manager component `Web Resources v70\Components\HTML - Rating Widget Light`. For example, to move the rating description before the rating stars, the user can move the rating description subcomponent before the rating asterisks in the component definition. Here is the list of all subcomponents:

    -   HTML - Rating Widget Light - Label
    -   HTML - Rating Widget Light - Stars
    -   HTML - Rating Widget Light - Menu
    -   HTML - Rating Widget Light - Description
    -   HTML - Rating Widget Light - Divider1
    -   HTML - Rating Widget Light - Divider2

The rating widget has the following user interface controls:

-   **Label**

    The label displays a title that represents the scope of the rating that is displayed. The rating widget shows the rating, depending on the setting of the rating scope parameter for the widget instance. For more information about this parameter, read the *Rating widget parameter reference*.

    -   **\(The default scope has no label\)**

        The default scope shows the average of all ratings that all users applied to the resource as public ratings.

    -   **My public rating**

        This scope shows all public ratings that the user applied to this resource.

    -   **My private rating**

        This scope shows all private ratings that the user applied to this resource.

    The scope of the ratings that the widget shows depends on the setting of the rating scope parameter. For more information about this parameter, read the *Rating widget parameter reference*. You can set this parameter to one of the following values:

    -   **COMMUNITY\_PERSONAL\_PUBLIC**

        With this setting, the rating widget shows the community ratings, in other words the ratings that all users applied to this resource. This value is the default value.

    -   **PERSONAL\_PUBLIC**

        With this setting, the rating widget shows the personal public ratings of the user.

    -   **PERSONAL\_PRIVATE**

        With this setting, the rating widget shows the personal private ratings of the user.

-   **Asterisks**

    The rating widget shows the rating by the number of asterisks. The more asterisks are highlighted, the better the rating is for the resource.

-   **Drop-down menu**

    This menu can show the following options:

    -   **An option to switch between rating scopes**

        Users can select to a different rating scope. The options that the menu shows depend on the current rating scope. For example, if the current scope is Community personal public rating, the menu shows the option Personal public rating.

    -   **Rating distribution**

        Users can also view the distribution of ratings. To do so, the users select **Rating distribution** from the menu. This option is available only when the rating scope is Community personal public rating.

-   **Rating description**

    The rating description shows the numerical rating value and the total number of ratings that users applied to this resource.


-   By default the widget displays five asterisks \( **\*\*\*\*\*** \), where five stars are the highest rating and one star is the lowest rating that a resource can have.
-   The rating widget shows a tooltip with a numeric representation of the rating value, for example Rating: 3.4/5.

-   **[Adding the rating widget to your portal content](../admin-system/tag_rate_add_inlrate_lite.md)**  
By default, the rating widget is available for Web Content Manager article template pages and blogs and wikis. You can also add rating widgets to your portal content as required.
-   **[Customizing the rating widget](../admin-system/tag_rate_cust_inlrate_lite.md)**  
The user interface of the rating widget consists of Web Content Manager HTML components. You can customize the rating widgets by modifying one or more of these components. For example, you can change the order of the user interface elements, or you can remove a field that you do not want to show in the user interface. The components are listed here.


**Related information**  


[Properties for the rating widget](../admin-system/srvcfg_cpcfg4tr_dlgrate_altui.md)

[Tag widget parameter reference](../admin-system/tag_rate_parm_ref_inl_tag_lite.md)

[Properties for the tag widget](../admin-system/srvcfg_cpcfg4tr_dlgtag_altui.md)

