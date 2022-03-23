# Manage Theme Properties 

You can modify the properties of a theme and its available skins in the Manage Theme Properties dialog. In the dialog, you can modify the properties of both WAR-based and WebDAV-based themes, but not all modification options are available for WAR-based themes.

When you select a theme in the Theme Manager and open the Manage Theme Properties dialog, all of the properties for that theme and its available skins display. The dialog includes five panes: General, Skins, Localization, Metadata, and Advanced.

When you modify the properties of a theme, click **Done** to save your changes and return to the Theme Manager. If your changes cannot be validated, an error message displays and the dialog remains open. To return to the Theme Manager without saving your changes, click **Close** or **Cancel**.

## General

The General pane includes basic and commonly modified theme properties.

-   **Title**

    The name of the theme that displays for the currently displayed language. This field is required. This value can also be specified in the Localization pane.

-   **Description**

    Additional information about the theme that displays for the currently displayed language. This field is optional. This value can also be specified in the Localization pane.

-   **Default skin**

    The skin that is used for any portlet that does not have a specified skin. You can change the default skin from a list of available skins for the selected theme.

-   **Default layout**

    The layout that is used for any page that does not have a specified layout. You can change the default layout from a list of available layouts for the selected theme.

    **Note:** If you select Custom Layout, you must provide more input before you can use the layout. The additional input can be used to specify the URL for a layout that is not included in the Default layout list. The encoded version of this URL can be specified in the Metadata pane.

    **Tip:** When you click **Create** \> **Page** from the toolbar, the layout that is embedded in the selected page template supersedes the default page layout that is referenced by the theme. To change the layout, click **Page** \> **Layout** from the toolbar and choose another available layout for the theme.

-   **Default profile**

    The profile that is used for any page that does not have a specified profile. You can change the default profile from a list of available profiles for the selected theme. This value can be specified in the Metadata pane.


## Localization

The Localization pane displays the title and description of the selected theme in the specified language.

## Metadata

The Metadata pane displays a list of metadata parameters for the selected theme. You can delete an existing theme metadata parameter by clicking **Delete**. You can also create a new metadata parameter by entering a new key and a new value in the empty **Key** and **Value** fields at the end of the parameter list. Existing metadata parameters that begin with com.ibm.portal are hidden on this list. If you want to see the hidden metadata parameters, click **Show Hidden Metadata**.

## Advanced

The Advanced pane displays advanced theme properties options.

-   **Unique name**

    Add a unique name for the theme, or update the existing unique name. You must choose a name that is unique for the system.

-   **Hidden**

    Specifies whether the theme is displayed in certain contexts. For example, if you set the value to **Yes**, the theme is hidden from users, but visible to administrators.

-   **Active**

    Specifies whether the theme is active.

-   **Static content root**

    URI to the folder that contains the static content of the theme. This value is required, and the URI must be valid. The static content of the theme is not affected when you change this value. If you are creating a new theme, you must add its static content in the specified location. If you are modifying an existing theme, you must move its static content to the new specified location.


## Skins

The Skins pane includes a list of all of the available skins for the selected theme. Each row in the list displays the title, description, and options for an available skin.

-   **Edit**

    Displays the General pane options for skins.

-   **Delete**

    Removes the skin from the theme. When you delete a skin, it is no longer available for the theme, but it is not deleted from the system. The default skin for the theme cannot be deleted.

-   **Add**

    Creates a new skin for the theme. The new skin is not available until you save your changes when you click **Done**.


When you click **Edit this skin** or expand the Skins menu and click on an available skin, a new view opens in the dialog with four panes: General, Localization, Metadata, and Advanced.

-   **General**

    The General tab includes basic and commonly modified skin properties.

    -   **Title**

        The name of the skin that displays for the currently displayed language. This field is required. This value can also be specified in the Localization pane for the skin.

    -   **Description**

        Additional information about the skin that displays for the currently displayed language. This field is optional. This value can also be specified in the Localization pane for the skin.

-   **Localization**

    The Localization tab displays the title and description of the selected skin in a specified language.

-   **Metadata**

    The Metadata tab displays a list of metadata parameters for the selected skin. You can delete an existing metadata parameter by clicking **Delete**. You can also create a new metadata parameter by entering a new key and a new value in the empty **Key** and **Value** fields at the end of the parameter list. Existing metadata parameters that begin with com.ibm.portal are hidden from this list by default. If you want to see the hidden metadata parameters, click **Show Hidden Metadata**.

-   **Advanced**

    The Advanced tab displays advanced skin properties options.

    -   **Unique name**

        Add a unique name for the skin, or update the existing unique name. You must choose a name that is unique for the system.

    -   **Hidden**

        Specifies whether the skin is displayed in certain contexts. For example, if you set the value to **Yes**, the skin is hidden from users, but visible to administrators.

    -   **Active**

        Specifies whether the skin is active.

    -   **Static content root**

        URI to the folder that contains the static content of the skin. This value is required, and the URI must be valid. The static content of the skin is not affected when you change this value. If you are creating a new skin, the skin points to the following location: dav:fs-type1/themes/yournewtheme/skins/My New Skin/. You must change the location of the new skin to a unique location in WebDAV in the skins directory and move its static content to the new specified location; for example, dav:fs-type1/themes/yournewtheme/skins/My New Skin 1/. If you are modifying an existing skin, you must move its static content to the new specified location.

        **Note:** You must manually create the static content for the new skin. Learn more about how to [Create a theme-scoped skin](themeopt_cust_skintheme.md#).


**Parent topic:**[Getting started with Themes ](../dev-theme/themeopt_themedev_getting_started.md)

