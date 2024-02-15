# Further authoring portlet configuration options

Further authoring portlet configuration options can be specified by using the portlet administration view.

To add further authoring portlet configuration parameters:

-   Log in to the portal as an administrator.
-   Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.
-   Search for the **Web Content Authoring portlet**.
-   Open the configuration view.

You can add any of the following optional configuration parameters:

|Parameter|Details|
|---------|-------|
|htmlfield.rows|Defines the number of rows to display in an HTML field that is used in an element design or presentation template. If not specified, the default setting of 15 rows is used.|
|htmlfield.columns|Defines the width of an HTML field that is used in an element design or presentation template. The width is defined as the number of characters to display per row. If not specified, the default setting of 85 characters is used.|
|htmlfield.embedded.rows|Defines the number of rows to display in an HTML field that is used in an element design or presentation template, but not an HTML component. If not specified, the number of rows that are defined by using htmlfield.rows is used.|
|htmlfield.embedded.columns|Defines the width of an HTML field that is used in an element design or presentation template, but not an HTML component. The width is defined as the number of characters to display per row. If not specified, the number of characters that are defined by using htmlfield.columns is used.|
|htmlfield.htmlcomponent.rows|Defines the number of rows to display in the HTML field that is used in an HTML component. If not specified, the number of rows that are defined by using htmlfield.rows is used.|
|htmlfield.htmlcomponent.columns|Defines the width of the HTML field that is used in an HTML component. The width is defined as the number of characters to display per row. If not specified, the number of characters that are defined by using htmlfield.columns is used.|
|htmlfield.presentation.rows|Defines the number of rows to display in the HTML field that is used in a presentation template. If not specified, the number of rows that are defined by using htmlfield.rows is used.|
|htmlfield.presentation.columns|Defines the width of the HTML field that is used in a presentation template. The width is defined as the number of characters to display per row. If not specified, the number of characters that are defined by using htmlfield.columns is used.|
|edit\_live\_custom\_licence|Use this parameter to enter a custom license key to use in place of the OEM license for Ephox EditLive! with this format:`Account ID,Domain,Expiration,License Key,Licensee,Product,Release`**Note:** Ephox EditLive! is a deprecated feature as of CF11 or higher.|

!!! note
    - All users need to log off and login before any configuration changes appear in the authoring portlet.


