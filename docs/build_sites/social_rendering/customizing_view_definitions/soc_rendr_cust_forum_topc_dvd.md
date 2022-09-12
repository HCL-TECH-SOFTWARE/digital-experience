# Customizing forum topic details view definitions by using inline editing

You can customize your forum topics details view definitions by defining the following settings in inline editing mode. Forum topic details are represented by content items of the forum topic details authoring template. This customization is normally done by a web designer or a page editor.

To define these settings, you need the access permissions for editing the web content item that represents the view definition. You do not need edit access permissions to the **Web Content Viewer** portlet that shows the view definition.

The following settings and options are available for customizing social list view definitions by using inline editing:

-   **Name**

    Use this setting to specify a name for this item. The name must consist of at least one alphanumeric character \(`a-z, A-Z,0-9`\). It can include spaces and the following special characters: `$ - _ . ! ( ) ,`

-   **Display Title**

    Use this setting to specify the display title for this item.

-   **Details Appearance**

    Use this setting to select the appearance component that generates the details view of this item. You can select only HCL Web Content Manager Personalization components that have the keyword `ibm.portal.socialrendering` assigned in their profile section. To enable the profile section for Web Content Manager components, you must set the `control.Cmpnt=com.aptrix.pluto.taxonomy.ProfileControl` property in the WCMConfigService.properties file and restart your portal. For more information about this type of Web Content Manager Personalization components, read *Customizing the visual design of social lists*. By default, there is only one appearance component for forum topic details view definitions. It is named Forum Topic Details.

-   **Index Page**

    Use this setting to control the target for the **Show Index Page** link that is shown by default by the forum topic details appearance component. Specify one of the following values:

    -   **parent**

        With this setting, the **Show Index Page** link points to the parent page of the current page.

    -   **unique\_name\_of\_a\_portal\_page**

        With this setting, the **Show Index Page** link points to the portal page with the unique name that you specify.

-   **Maximum Results \(hidden\)**

    This field is an optional input field. The default value is `200`. This setting is hidden by default. To make it show, click **Show hidden fields** at the beginning or end of the screen. Use this setting to specify the maximum number of replies that you want to be loaded for the given forum topic. Specify a positive integer. It is good practice to match this number with the number with the **Results per page** value that you configure in the appearance component that you use with this forum topic details view definition.

-   **Initial List Size \(hidden\)**

    This field is an optional input field. The default value is `10`. This setting is hidden by default. To make it show, click **Show hidden fields** at the beginning or end of the screen. Use this setting to specify the maximum number of replies that you want to show in the initial rendering of the forum topic details. The forum topic details appearance component supports a **View more replies** link that shows all replies that have been loaded.


