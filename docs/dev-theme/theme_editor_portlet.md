# Theme Editor Portlet

The Theme Editor portlet is a new addition to HCL Digital Experience Container Update CF193 and on-permises CF196 and later release capabilities. The portlet allows an administrator to edit static theme resources in WebDAV without the use of a WebDAV client or tool.

WebDAV is a server that allows remote content to be edited and read. HCL Digital Experience stores the static resources \(HTML, CSS, JavaScript, etc.\) for the HCL Digital Experience Portal 8.5 theme and the Simple theme in WebDAV. In addition, any themes created based on these themes will have their static content in WebDAV. For that reason, it is advantageous to have the ability to directly edit the static theme resources without having to be concerned about synchronizing them with a local development environment.

## Availability and previous editions of the Theme Editor portlet

Prior to the integration of the portlet into HCL Digital Experience CF193 and later releases, the Theme Editor portlet was available from IBM business applications catalogs, which required customers to download and install the portlet.

Beginning with HCL Digital Experience CF193 and later versions, the portlet will is available with the software release. If a customer is currently using an earlier version of the Theme Editor portlet from the IBM catalog, it will remain deployed as is and will not be impacted by the application added in later versions.

## Portlet overview

The Theme Editor portlet is accessed from the [Theme Manager](themeopt_themedev_manager.md) portlet in the HCL Digital Experience 8.5, 9 or 9.5 environments. 

In the 8.5 and 9 environments, the Theme Manager is located under the Applications menu under Theme Development.

![](../images/Access%20the%20Theme%20Manager%20in%20DX%208.5%20and%209%20releases.png "Access the Theme Manager in DX 8.5 and 9 releases")

In the HCL DX V9.5 environment the Theme Manager is located in Practitioner Studio under **Themes**.

![](../images/Access%20the%20Theme%20Manager%20in%20DX%20V9.5.png "Access the Theme Manager in DX V9.5")

The Theme Editor portlet can be found from the Theme Manager portlet by clicking the **Edit** \(pencil\) icon next to the associated theme, as shown in the screenshot example below:

![](../images/Access%20the%20Theme%20Manager%20in%20DX%20V9.5-2.png)

If the user clicks the pencil icon, they will be taken to the Theme Editor portlet and given the ability to edit the theme static resources. Using the same example above, if the user clicks the pencil icon, the user will be directed to the Theme Editor page where the portlet displays the name of the theme \(in this case the Portal 8.5 theme\), the date indicating the last time the theme resources were changed, along with the static theme resource folders. 

![](../images/edit%20the%20theme%20static%20resources.png)

If the user creates a custom theme, the portlet will display that theme. As shown in the example below, markup has been added to the theme.html file in the **CustomTheme**. The buttons on the top left are now active to either **Save**, **Revert** or **Replace**.

![](../images/Save%20Revert%20Replace%20theme.html%20file.png)

If the user saves the file, the added markup will display in the theme when the theme is placed on a page.

![](../images/display%20added%20markup%20from%20theme%20file.png)

## Limitations

-   The Theme Editor portlet does not support creating files and folders in the static content.
-   EAR-based themes are displayed in the Theme Manager portlet. However, the static content for EAR-based themes is not stored in WebDAV. If the user clicks the **Edit** \(pencil\) icon on an EAR-based theme, the portlet will render but no editable content will display.
-   If the user chooses to edit an uncompressed file \(CSS or JavaScript\), the HCL DX server must be in development mode \(i.e. Remote debugging must be turned on in the Theme Analyzer portlet\) in order for the changes to display. 
-   If the Theme Editor portlet already resides on the system and CF196 is applied and then rolled back, the portlet will need to be reinstalled.

