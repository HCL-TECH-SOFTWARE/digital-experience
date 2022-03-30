# Modules that add features to a theme 

Theme modules contribute resources, such as JavaScript, CSS and HTML, to a theme or page. The following modules come with the modularized theme and specifically contribute a feature rather than working in the background. The modules can be added to a theme by listing them in the theme's default profile, or to a single page or set of pages.

## Portal 8.5 theme

|Module name|Feature|
|-----------|-------|
|wp\_status\_bar|Adds a status bar for displaying informational, warning, and error messages to the users.|
|wp\_layout\_windowstates|Allows portlets to be minimized, maximized, and restored from their menus in the skin.|
|wp\_legacy\_layouts|Adds responsive layout support for earlier standard portal pages.|
|wp\_liveobject\_framework|The Live Text Framework allows portlet applications to display text live names and click to action links.|

## Site toolbar

|Module name|Feature|
|-----------|-------|
|wp\_toolbar\_host|Integrates a theme with the toolbar in both view and edit modes, use either wp\_toolbar\_host or both wp\_toolbar\_host\_view and wp\_toolbar\_host\_edit to add the toolbar to a theme.|
|wp\_toolbar\_host\_view|Integrates the toolbar into a theme for viewing purposes only.|
|wp\_toolbar\_host\_edit|Integrates the toolbar into a theme for editing purposes.|
|wp\_toolbar\_ghost|Add this module to pages that do not support edit mode to allow interoperability with the toolbar, so if a user navigates from an editable page to one with this module, the toolbar remains open, and the user is able to continue editing.|
|wp\_draft\_page\_ribbon|Adds Draft Page in text that appears along the sides of a page that has a draft in the current project.|

## Menus

|Module name|Feature|
|-----------|-------|
|wp\_simple\_contextmenu\_main|Adds support for simple menus, and added to the default profile to enable **Portlet**, **Actions**, **More**, and **Toolbar** navigation menus.|
|wp\_contextmenu\_main|Adds support for the **Component Action** menu, which is used for inline editing of content items.|
|wp\_skin\_cam|Allows the Component Action Menu to be opened by clicking an icon in the portlet skin.|

## Tagging and rating

|Module name|Feature|
|-----------|-------|
|wp\_tagging\_rating\_light|Provides all lightweight inline tagging and rating widgets.|
|wp\_tagging\_rating\_menu|Adds the tagging and rating menu items in the Actions and portlet menus.|
|wp\_tagging\_rating\_tagcloud|Provides the widgets in Tag Cloud portlet.|

## Analytics

|Module name|Feature|
|-----------|-------|
|wp\_analytics\_aggregator|Adds the analytics aggregator|
|wp\_analytics\_tags|Adds the **Sites Promotions...** and **Analytics Tags...** options to the Actions and portlet menus, and inserts the microformats for analytics tags and site promotions into the page.|
|wp\_analytics\_overlay\_reports|Provides analytics overlay reports for portlets and pages.|
|wp\_analytics|Provides all analytics features: aggregator, the analytics tags and site promotion function, and the overlay reports.|

## Search

|Module name|Feature|
|-----------|-------|
|wp\_searchbar|Adds the inline search bar that redirects to the search page to show results.|

## Web content management

|Module name|Feature|
|-----------|-------|
|wcm\_inplaceEdit|Turns on inline editing for content items that are displayed with the Web Content Viewer portlet.|
|wp\_oob\_sample\_styles|Styles for default web content samples.|
|wp\_federated\_documents\_picker|Allows the insertion of remote content into Web Content Manager elements that contain a rich text field, by using the Insert Link to **Remote Document** button in the authoring portlet.|

## Social Rendering

|Module name|Feature|
|-----------|-------|
|wp\_social\_rendering\_85|Provides the social rendering feature.|

## HCL Connections

|Module name|Feature|
|-----------|-------|
|wp\_ic4\_wai\_resources|Resources to enable HCL Connections 4 integration with Web Application Integrator.|

## HCL Sametime

|Module name|Feature|
|-----------|-------|
|wp\_sametime\_proxy|Enables integration with Sametime using Sametime Proxy Server.|

## iWidget support

|Module name|Feature|
|-----------|-------|
|wp\_theme\_widget|Allows for the rendering of iWidgets on pages.|

## Web Dock Application

|Module name|Feature|
|-----------|-------|
|wp\_webdock|Provides the web dock application.|

## Accessibility

|Module name|Feature|
|-----------|-------|
|wp\_theme\_skin\_region|Provides accessibility support to the portlet skins.|
|wp\_theme\_high\_contrast|Adds support for high contrast mode.|

## Programming

|Module name|Feature|
|-----------|-------|
|wp\_portal|Provides JavaScript configuration objects that contain information about the Portal state to be used by the themes and portlets.|
|wp\_client\_main|Client-side JavaScript APIs for browser detection, event attachment, object manipulation, and type detection.|
|wp\_client\_ext|Client-side JavaScript APIs for modules and promises.|
|wp\_client\_selector|Client-side JavaScript CSS selection engine API.|
|wp\_worklight|Adds MobileFirst® function.|
|wp\_one\_ui|Provides CSS for common elements in Portal. For more information, see the documentation in [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)\\theme\\wp.theme.modules\\webapp\\installedApps\\ThemeModules.ear\\ThemeModules.war\\modules\\oneui\\v2.1\\lotusOneUIv2.1\_Documentation.zip.|
|wp\_one\_ui\_dijit|An extension of One UI that provides styling for dijits, it acts as a Dojo theme. For more information, see *Themes and theming*.|
|wp\_portlet\_css|Styles for HCL Administrative portlets.|
|getting\_started\_module|Adds the default simple module.|

**Parent topic:**[The module framework ](../dev-theme/themeopt_module.md)

**Related information**  


[Dojo Toolkit - Themes and Theming](https://dojotoolkit.org/reference-guide/1.9/dijit/themes.html#id6)

[Displaying the draft page ribbon ](../dev-theme/themeopt_disp_draft_ribbon.md)

