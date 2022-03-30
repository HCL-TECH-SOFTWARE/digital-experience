# Modules that are provided with the modularized theme 

HCL Digital Experience provides a set of ready-to-use modules.

Use these dependency guidelines when you add and remove modules from your profile:

-   If you add a module that requires another module that is in not in the profile, the automatic dependency injection adds the required module at run time.
-   If you remove a module that is required by another module that is in the profile, the automatic dependency injection adds the module at run time, even if it is not listed in the profile.
-   If you remove a module that the theme requires, but is not required by any other modules in the profile, the module is removed and the theme might break.

## Theme modules provided with the Portal theme

The following lists describe the modules that are included with the Portal theme. Information about each module includes the module ID and the location in the theme of that module and some details about the module.

## 85 Theme

These modules are used by the HCL Portal 8.5 theme. For more information, see the module descriptions.

The plugin.xml file location varies and is documented in the module description.

|Module|Description|
|------|-----------|
|wp\_theme\_portal\_85|The Portal 85 theme CSS.

Location: dav:fs-type1:/themes/portal8.5/css

|
|wp\_theme\_edit|Adds the ability to go into page edit mode.

Location: dav:fs-type1:/themes/portal8.5/js

|
|wp\_theme\_menus|The menu framework that was introduced in 7002.

Location: dav:fs-type1:/themes/portal8.5/js

|
|wp\_portlet\_css|Earlier portlet CSS support.

Location: dav:fs-type1:/common-resources/ibm/css/portal

|
|wp\_legacy\_layouts|Earlier 7.0 static page layout CSS.

Location: dav:fs-type1:/common-resources/ibm/css/portal

|
|wp\_layout\_windowstates|Maximize or Minimize portlet support that is implemented as a server-side data source.

|
|wp\_portal|Supplies JavaScript global configuration objects for use by other features; URLs, locale information, and user information. Implemented as a server-side data source.

|
|wp\_liveobject\_framework|Live object framework provides the feature of adding a special handler to any class selector on a tag. For example, if you have a span tag and its class contains vCard, then this framework makes this markup live. Then, when you hover on the designated text, the following hover text is shown, **click here for person card**. When you click the hover text, it shows the person card. The person card feature is available out-of-box, along with other requirements. Developers can extend this framework and add their own handlers.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/plugin.xml

|
|wp\_oob\_sample\_styles|Styles for default web content samples.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/pzn.ext/wp.templating.wcm/shared/app/wp.wcm.templating.jar

|
|wp\_theme\_skin\_region|Provides accessibility supportLocation: dav:fs-type1:/themes/portal8.5/js

|
|wp\_theme\_high\_contrast|Provides accessibility support when you use high contrast.Location: dav:fs-type1:/themes/portal8.5/js

|
|wp\_custom\_page\_style|The view counterpart of the Edit toolbar shelf that sets the style for a specific page. This module reads the style for a page and makes sure that the corresponding CSS is loaded into the page.|
|getting\_started\_module|The getting started module is a predefined module that you can use as starting place to quickly inject your own resources into the current theme. For more information, see *Simple modules*.Location: dav:fs-type1:/themes/Portal8.5/modules/getting\_started\_module

|
|wp\_liveobject\_framework\_core|Live Text Framework core part that provides parsing capability. It parses page for a class selector and returns the retrieved nodes to class handler.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/ui/wp.tagging.liveobject/semTagEar/Live\_Object\_Framework.ear/liveobjects.war/WEB-INF/plugin.xml

|
|wp\_openajaxhub|The key feature of OpenAjax Hub 2.0 is its publish/subscribe engine that includes a Managed Hub mechanism that allows a host application to isolate untrusted components into secure sandboxes. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/openajaxhub.jar

|

## Simple menus

These modules are used by the toolbar and theme menus. For more information, see the module descriptions. The plugin.xml file location varies and is documented in the module description.

|Module|Description|
|------|-----------|
|wp\_simple\_contextmenu\_main|Gathers all the modules that are required to make up the simple menus. Location: dav:fs-type1:/themes/Portal8.5/contributions/simple\_contextmenu.json

|
|wp\_simple\_contextmenu\_css|Provides CSS styling for the simple menus Location: dav:fs-type1/themes/Portal8.5/contributions/simple\_contextmenu.json

|
|wp\_simple\_contextmenu\_js|Provides support to display a simple pop-up menu. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/simple\_contextmenu.jar

|
|wp\_simple\_contextmenu\_ext|Provides extensions that plug into the simple menu, such as badge support. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/simple\_contextmenu.jar

|
|wp\_simple\_contextmenu\_templates|Provides templates that are used to render the simple menu. Location: dav:fs-type1/themes/Portal8.5/contributions/simple\_contextmenu.json

|

## Menus

These modules are used by theme menus in your Portal, such as in place edit. These menus are also called Component Action menus or CAM. For more information, see the module descriptions. The plugin.xml file location varies and is documented in the module description.

|Module|Description|
|------|-----------|
|wp\_contextmenu\_main|Gathers all the modules that are required to make up the complete **Component Action** menu.Location: dav:fs-type1:/themes/Portal8.5/contributions/contextmenu.json

|
|wp\_contextmenu\_css|Provides CSS styling for the **Component Action** menu.Location: dav:fs-type1/themes/Portal8.5/contributions/contextmenu.json

|
|wp\_contextmenu\_js|Provides support to display an open action menu for page components, for example a portlet or content item.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar

|
|wp\_contextmenu\_templates|Provides templates that are used to render the **Component Action** menu in specific contexts, for example, a menu for a component or an inline edit menu.Location: dav:fs-type1/themes/Portal8.5/contributions/contextmenu.json

|
|wp\_contextmenu\_config\_lof|Provides the configuration for the Live Object Framework service to handle **Component Action** menu instances on a page.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar

|
|wp\_contextmenu\_live\_object|Provides Live Object Framework service to handle **Component Action** menu instances on a page.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar

|
|wp\_skin\_cam|Allows the Component Action Menu to be opened by clicking an icon in the portlet skin. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/skincomponentactionmenu.jar

|

## Dynamic Content Spots

These modules provide mappings for dynamic content spots in the theme.

|Module|Description|
|------|-----------|
|wp\_dynamicContentSpots\_85|Defines all dynamic content spots for the 8.5 theme. You can overlay any dynamic content spots through other modules.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/WEB-INF/plugin.xml

|
|wp\_dynamicContentSpots\_toolbar85|Defines all dynamic content spots for the 8.5 toolbar theme. You can overlay any dynamic content spot through other modules.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.themes/toolbar85/installedApps/ToolbarTheme85.ear/ToolbarTheme85.war/WEB-INF/plugin.xml

|

## Toolbar

These modules provide resources for the toolbar.

|Module|Description|
|------|-----------|
|wp\_a11y|Accessibility utility functions APIs. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/a11y.jar

|
|wp\_admin\_edit|Module providing theme artifacts that are related to the admin area.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/plugin.xml

|
|wp\_hiddencontent|Module defining CSS to show or hide the hidden content items in the hidden layout container.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/hiddencontent.jar

|
|wp\_movecontrols|This module provides a JavaScript API, which allows for moving layout controls from one layout container to another within a page layout.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/movecontrols.jar

|
|wp\_portlet\_applications|Support module for Applications portlets.Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_Applications.ear/wp.portlet.applic.war/WEB-INF/plugin.xml

|
|wp\_portlet\_changelayout|Support module for Change Layout portlet. This support module shows the orphaned portlets section.Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_Orphaned.ear/wp.portlet.change.war/WEB-INF/plugin.xml

|
|wp\_portlet\_newcontent|Support module for New Content portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml

|
|wp\_portlet\_newpage|Support module for New Page portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_New\_Page.ear/wp.portlet.newpag.war/WEB-INF/plugin.xml

|
|wp\_portlet\_overview|Support module for Overview portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml

|
|wp\_portlet\_projects|Support module for Project portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml

|
|wp\_portlet\_sitemap|Support module for Sitemap portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml

|
|wp\_portlet\_style|Support for mode styles portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_Styles.ear/wp.portlet.styles.war/WEB-INF/plugin.xml

|
|wp\_portlet\_vanityurl|Support for the Vanity URL portlet. Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_VanityUrl.ear/wp.portlet.vanity.war/WEB-INF/plugin.xml

|
|wp\_portlet\_wiring|Dependencies of the wiring portletLocation: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_Wiring.ear/wp.portlet.wiring.war/WEB-INF/plugin.xml

|
|wp\_portlet\_wiring\_resources|Resources that are provided by the portlet.Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_Wiring.ear/wp.portlet.wiring.war/WEB-INF/plugin.xml

|
|wp\_state\_page|Module that shows the page-specific public render parameters to the client and also provides JavaScript APIs that allow for reading and writing these parameters.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/state.jar!/plugin.xml

|
|wp\_state\_page\_modes|Module that annotates the HTML body element of the DOM with microformats that reflect the page modes that are currently active. The supported page modes are page edit mode, or microformat edit-mode, page information mode, or microformat info-mode," and page help mode or microformat "help-mode". Unlike portlet modes, multiple page modes can be active at the same time.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/state.jar!/plugin.xml

|
|wp\_theme\_utils|Module providing a set of JavaScript utility APIs, which can be used to work with the DOM of the different page parts, which are potentially running in different iframes.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/themeutils.jar

|
|wp\_toolbar85|Module providing a dynamic content spot that allows for embedding the main window of the site toolbar into a theme. The id for the dynamic content spot is `85toolbar`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar85\_dynamic|Module that displays the main control panel of the site toolbar without relying on a dynamic content spot.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_actionbar|Module providing a dynamic content spot that renders the main action bar of the site toolbar in the 8.5 theme. The action bar provides access to the site toolbar navigation, project menu, and more menu and also allows for activating page edit mode and page information mode. The id for the dynamic content spot is `85toolbar_actionbar`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/actionbar.jar

|
|wp\_toolbar\_changepagelayout|Module providing the Change Page Layout function for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_common|Module providing common resources such as CSS styles, images, and JavaScript for the site toolbar. The resources are supposed to be used in the toolbar theme or by portlets that run in the site toolbar.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/common.jar

|
|wp\_toolbar\_common\_wcm|Module providing common WCM-related resources such as CSS styles, images, and JavaScript for the site toolbar. The resources are supposed to be used in the toolbar theme or by portlets that run in the site toolbar.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/common.jar

|
|wp\_toolbar\_contextmenu\_js|A theme module that defines a simple JavaScript API for creating menus and managing their lifecycle.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/contextmenu.jar

|
|wp\_toolbar\_controlactions|Module providing the resources that are common to all layout control and portlet-specific menu contributions.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_createpage|Module providing the "Create Page" function for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_deletecontrol|Module providing the "Delete Control" function for portlet menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_deletepage|Module providing the Delete Page function for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_editpageproperties|Module providing the "Edit Page Properties" function for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_hiddencontent|Module providing the functions for showing and hiding the layout container that contains the portlets and content items that are currently hidden.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_hidecontrol|Module providing the functions for moving portlets or content items into the hidden layout container of the page.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_host|Meta module that groups all theme modules that are needed to make a page interoperable with the site toolbar. Add this module to the theme profile of your page if you want to edit the page by using the site toolbar. This module contains all contributions for both, view mode and edit mode. This module must be added to the non-deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_host\_dynamic|Meta module that groups all theme modules that are needed to make a page interoperable with the site toolbar. Add this module to the theme profile of your page if you want to edit the page by using the site toolbar. This module contains all contributions for both, view mode and edit mode. This module must be added to the non-deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_host\_dynamic\_view|Module that groups all theme modules that are needed to make a page interoperable with the site toolbar. Add this module to the theme profile of your page if you want to edit the page by using the site toolbar. This module contains all contributions that are needed for view mode. This module must be added to the non-deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_host\_edit|Module that groups all theme modules that are needed to make a page interoperable with the site toolbar. Add this module to the theme profile of your page if you want to edit the page by using the site toolbar. This module contains all contributions that are needed for edit mode. This module can be added to the deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_host\_view|Module that groups all theme modules that are needed to make a page interoperable with the site toolbar. Add this module to the theme profile of your page if you want to edit the page by using the site toolbar. This module contains all contributions that are needed for view mode. This module must be added to the non-deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_logo|Module providing a dynamic content spot to embed the toolbar logo into a theme. The identifier of the dynamic content spot is `85toolbar_logo`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/logo.jar

|
|wp\_toolbar\_menuactions|Module providing the resources that are common to all toolbar-specific menu contributions.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_moremenu|Module defining the more menu of the toolbar. This module provides a content spot to embed the more menu into a theme. The ID of the dynamic content spot is `85toolbar_moremenu`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/moremenu.jar

|
|wp\_toolbar\_movecontrol|Module providing the Move Control functions for portlet menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_movepage|Module providing the Move Page function for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_pageactions|Module providing the resources that are common to all page-specific menu contributions.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_projectmenu|Module for integrating the project menu into the toolbar. This module provides a content spot to embed the project menu into a theme. The ID of the dynamic content spot is `85toolbar_projectmenu`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/projectmenu.jar

|
|wp\_toolbar\_sitepreview|Module providing the "Preview as User" and "Preview as Unauthenticated" functions for menus.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_toolbar\_sitepreview\_contentspot|Module providing the dynamic content spot to embed the site preview function into the theme. The ID of the dynamic content spot is `85toolbar_preview`.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/preview.jar

|
|wp\_toolbar\_tab|Meta module that groups all theme modules that are needed to add a page to the site toolbar. Add this module to the theme profile of your page if your page is to run in the site toolbar.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_utils|Module providing toolbar utility functions for opening or closing the toolbar, engaging edit mode, or opening a toolbar tab.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_validator|Module to validate the state of the toolbar tab frame. This module is needed for handling context switches, such as session timeouts, correctly.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_viewframe\_validator|Module to validate the state of the view frame. This module is needed for handling context switches, such as session timeouts, correctly.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_toolbar\_wiring|Module providing the functions for managing communication endpoints and portlet wires.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/menuactions.jar

|
|wp\_photon\_iframe|XSLT transformation for iFrame transport.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/photon.jar

|
|wp\_photon\_promisor|A promiser implementation.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/photon.jar

|
|wp\_photon\_xslt|XML and XLST utility functionsLocation: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/photon.jar

|
|wp\_toolbar\_ghost|Module that groups all theme modules that are needed to make a page interoperable with the site toolbar without rendering it. This module must be added to the non-deferred section of the theme profile.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/toolbar.jar

|
|wp\_draft\_page\_ribbon|Adds Draft Page in text that appears along the sides of a page that has a draft in the current project.

 Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/draftribbon.jar

|

## Drag-and-drop

These modules provide the toolbar drag-and-drop function.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/dnd.jar

|Module|Description|
|------|-----------|
|wp\_dnd\_css|This module provides the CSS that is used to show drag sources and drop zones.|
|wp\_dnd\_main|This module parses the markup of a page layout to convert the layout containers into valid HTML 5 drop zones.|
|wp\_dnd\_util|This module provides JavaScript utility APIs for implementing drag-and-drop features.|

## HCL Web Content Manager

These modules provide Web Content Manager functions.

|Module|Description|
|------|-----------|
|wcm\_config|Web Content Manager Config is a resource that is intended to be used by Web Content Manager theme modules.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/wcm/prereq.wcm/wcm/shared/app/ilwwcm-services-impl.jar

|
|wcm\_inplaceEdit|In-place editing enables users with edit access to a content item to edit fields of that item from within the web page itself instead of using the authoring portlet. This feature is available when you display content with a web content viewer portlet.Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/wcm.ear/wcm-inplaceEdit.war/WEB-INF/plugin.xml

|

## Content Mapping

Description: Provides content mapping support.

[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/contentmapping/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contentmapping.jar

|Module|Description|
|------|-----------|
|wp\_content\_mapping\_picker|Provides the Content Mapping Picker dialog that allows one to select a piece of content from Web Content Manager.|
|wp\_content\_targeting\_cam|Provides resources that are required for the Content Targeting dialog that is started from the **Component Action** menu.Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/installedApps/cell/PA\_wp.pzn.ui.actions.ear/wp.pzn.ui.actions.war/WEB-INF/plugin.xml

|

## Federation

Description: Provides federated document picker support.

[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/federation/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/federation.jar

|Module|
|------|
|wp\_federated\_documents\_picker|

## Search

These modules provide JavaScript code for the search box widget and provide a JSP to generate the search box markup that can be started as a dynamic content spot.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/search.jar

|Module|Description|
|------|-----------|
|wp\_search|Search widget|
|wp\_searchbar|Lightweight inline search bar that redirects to the search page to show results.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/search.jar

|

## Analytics

These modules provide Analytics support.

[PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/asa/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/asa.jar

|Module|Description|
|------|-----------|
|wp\_analytics|Meta module that provides all analytics features. Use this module if you want to enable all analytics features including the aggregator, analytics tags and site promotions, and the overlay reports.|
|wp\_analytics\_aggregator|Inserts the reference to the analytics aggregator and its dependencies into the page.|
|wp\_analytics\_bootstrap|Internal module that contains the bootstrap code that is needed for analytics. Must not be directly referenced in theme profiles.|
|wp\_analytics\_overlay\_reports|Public module that provides the analytics overlay reports for portlets and pages.|
|wp\_analytics\_tags|Public module that provides the analytics tag and site promotion functions. This module also provides the dynamic content spots that produce the analytics micro-formats.|
|wp\_analytics\_tags\_dialog|Public module that provides the dialog for working with analytics tags and site promotions.|

## Personalization

These modules provide resources for Personalization.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/pzn/prereq.pzn/installedApps/Personalization\_Workspace.ear/pznauthorportlet.war/WEB-INF/plugin.xml

|Module|Description|
|------|-----------|
|wp\_pzn\_geolocation|Provides resources that are required for Geolocation Personalization.|

## Social lists

Description: The `wp_social_rendering` theme module provides the CSS styles that are used by social lists. It defines the capability with the name `social_rendering` and the version `8.5`.

`[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/sr/css/sr.css`

No prerequisites are required to use this theme module.

## Web Dock

These modules provide resources to the web dock application.

Location: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)installedApps/cell/PA\_WebDockPortServlet.ear/WebDockPortlet.war/WEB-INF/plugin.xml

|Module|Description|
|------|-----------|
|wp\_webdock|This module provides resources that are required by web dock application.|

## IBM® MobileFirst® Integration

Description: Provides the modules for MobileFirst application integration.

Location for all wp\_worklight\_\* modules: dav:fs-type1/themes/Portal8.5/contributions/worklight61.json

Location for all wl\_\* modules:`[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.worklight.ext/installableApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/WEB-INF`

|Module|Description|
|------|-----------|
|wp\_worklight|Mapping module to MobileFirst integration extension|
|wp\_worklight\_android|Mapping module to MobileFirst integration extension for Android|
|wp\_worklight\_css|Mapping module to MobileFirst CSS|
|wp\_worklight\_css\_android|Mapping module to MobileFirst CSS for Android|
|wp\_worklight\_css\_ios|Mapping module to MobileFirst CSS for iOS|
|wp\_worklight\_ios|Mapping module to MobileFirst integration extension for iOS|
|wp\_worklight\_jsonstore|Mapping module to MobileFirst client JSONStore|
|wp\_worklight\_plugins|Mapping module to MobileFirst integration extension|
|wp\_worklight\_plugins\_android|Mapping module to MobileFirst integration extension for Android|
|wp\_worklight\_plugins\_ios|Mapping module to MobileFirst integration extension for iOS|
|wl\_android\_6|Provides MobileFirst client and Cordova JavaScript resources for Android devices|
|wl\_android\_61|Provides MobileFirst client and Cordova JavaScript resources for Android devices|
|wl\_client\_css\_android\_6|Provides MobileFirst client CSS for Android devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_android\_61|Provides MobileFirst client CSS for Android devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_ios\_6|Provides MobileFirst client CSS for iOS devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_css\_ios\_61|Provides MobileFirst client CSS for iOS devices, specifically for the diagnostic window, and modal dialog|
|wl\_client\_jsonstore\_android\_6|Provides MobileFirst client JSONStore for Android devices|
|wl\_client\_jsonstore\_android\_61|Provides MobileFirst client JSONStore for Android devices|
|wl\_client\_jsonstore\_ios\_6|Provides MobileFirst client JSONStore for iOS devices|
|wl\_client\_jsonstore\_ios\_61|Provides MobileFirst client JSONStore for iOS devices|
|wl\_config|Data source that injects the initialization for client and Cordova API|
|wl\_cordova\_css\_android\_6|Provides Cordova client CSS, specifically for the tab bar component|
|wl\_ios\_6|Provides MobileFirst client and Cordova JavaScript resources for iOS devices|
|wl\_ios\_61|Provides MobileFirst client and Cordova JavaScript resources for iOS devices|
|wl\_plugins\_android\_61|Provides MobileFirst plug-in JavaScript resources for Android devices|
|wl\_plugins\_ios\_61|Provides MobileFirst plug-in JavaScript resources for iOS devices|

## Sametime

These modules provide the code for integrating with HCL Sametime `stlinks` support and new proxy support.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/sametime.jar

|Module|Description|
|------|-----------|
|wp\_sametime\_links|Earlier STlinks support.|
|wp\_sametime\_proxy|New Sametime proxy support.|

## Web Application Integrator

These modules provide the Web Application Integrator.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ic4\_wai.jar!/plugin.xml

|Module|Description|
|------|-----------|
|wp\_ic4\_wai\_resources|Provides resources to enable Connections integration with WAI.|

## Client Utils

These modules provide JavaScript utility code with no dependencies on the Dojo Toolkit in the i$ global namespace. These modules are useful for light-weight themes with no framework dependencies. The code includes type checks, configuration that merges, IO utilities, JSON parsing, DOM helpers, Promises, and eventing.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar

|Module|Description|
|------|-----------|
|wp\_client\_main|Contains basic utilities.|
|wp\_client\_ext|Contains advanced utilities like Promises, IO, DOM helpers, events, and the deferred module loading code.|
|wp\_client\_dnd|Contains drag-and-drop capabilities. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar

|
|wp\_client\_logging|Contains logging capabilities for error, warning, and information messages.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar

|
|wp\_client\_selector|Contains a JavaScript CSS selector engine. Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar

|
|wp\_client\_tracing|Contains tracing capabilities.Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar

|

## Portal Client

These modules provide utilities and base code for other modules, including Tagging and Rating.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/portalclient.jar

|Module|Description|
|------|-----------|
|wp\_portlet\_client\_model|Public client programming model. Includes REST service and state handling. Used as a base prerequisite to other functional modules.|
|wp\_portal\_client\_utils|Common utilities for other modules to use \(XML handling, authentication\), used as base prerequisite to other functional modules.|
|wp\_portal\_client\_rest\_utils|Client-side data stores used by other Portal features, such as Tagging and Rating, to access the Portal REST modules on the server.|
|wp\_portal\_ui\_utils|Common UI elements. Used as a base prerequisite for some theme dialogs, such as the Content Mapping Picker and Tagging and Rating|
|wp\_tagging\_rating|Tagging and Rating widgets|
|wp\_tagging\_rating\_opensearch|Open Search plug-in for Tagging and Rating|
|wp\_tagging\_rating\_light|Provides all lightweight inline tagging and rating widgets.|
|wp\_tagging\_rating\_menu|Provides tagging and rating menu items in the actions menu.|
|wp\_tagging\_rating\_tagcloud|Provides tag cloud in Tag center page.|
|wp\_template\_select\_dialog|A dialog that is started from the New Page dialog that allows a user to pick on a page template, which to base their newly created page.|

## Dialog API

These modules provide the theme dialog function.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/dialog.jar

|Module|Description|
|------|-----------|
|wp\_dialog\_css|Provides the CSS styling for dialogs that are displayed by the dialog API.|
|wp\_dialog\_draggable|Provides support to allow dialogs that are created with the dialog API to create dialogs to display page content.|
|wp\_dialog\_main|Provides an API to create dialogs to display page content|
|wp\_dialog\_util|Provides utilities to support the dialog API.|

## OneUI

These modules provide the CSS for OneUI.

Meta-Module

-   wp\_one\_ui
-   wp\_one\_ui\_dijit

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/oneui.jar

|Module|Description|
|------|-----------|
|wp\_one\_ui\_21|Provides OneUI v2.1 CSS.|
|wp\_one\_ui\_30|Provides OneUI v3.0 CSS.|
|wp\_one\_ui\_dijit\_30|Provides dijit support for OneUI.|
|wp\_one\_ui\_303|Provides OneUI v3.03 CSS.|
|wp\_one\_ui\_dijit\_303|Provides dijit support for OneUI v3.03.|

## Dojo

These modules are used for separate layers that are built from a Dojo build profile. The djconfig object is provided by a Portal data source. The POC URL for Dojo 1.6 is dojo:config@v1.6. For Dojo 1.7, it is dojo:config@v1.7. For Dojo 1.9, it is dojo:config@v1.9. Look in the /dojo/build.txt to see which files are in each layer. Each module contributes to the head section.

## Dojo Meta-Modules

These Dojo modules are not associated with a specific Dojo release. In HCL Portal, a meta-module paradigm was added for Dojo support. The user can define which version of Dojo to use, 1.9, 1.7 or 1.6. The meta-modules do not have the Dojo version specified.

The meta module definitions are stored in the following files:

-   **dojo19.json**

    In [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.9

-   **dojo17.json**

    In [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.7

-   **dojo16.json**

    In [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6


To activate a version, copy the corresponding file into the WebDAV dav:fs-type1:/themes/portal8.5/contribution folder. Delete the previous file and restart the server.

**Note:** You can have only one file in the folder at one time because the dojo16.json, dojo17.json, and dojo19.json files are not supported at the same time. Specific Dojo modules are listed in the Dojo 1.9, Dojo 1.7 and Dojo 1.6 sections. For a list of Dojo classes that are provided by each meta-module, see more information Dojo classes that are provided by the Dojo modules.

The following list shows the meta-modules.

-   dojo
-   dojo\_app
-   dojo\_data
-   dojo\_data\_ext
-   dojo\_dnd\_basic
-   dojo\_dnd\_ext
-   dojo\_dom
-   dojo\_fmt
-   dojo\_fx
-   dojo\_node\_list
-   dojo\_promise
-   dojo\_request
-   dojo\_selector\_lite
-   dijit
-   dijit\_app
-   dijit\_editor
-   dijit\_editor\_plugins
-   dijit\_form
-   dijit\_layout\_basic
-   dijit\_layout\_ext
-   dijit\_menu
-   dijit\_tree
-   dijit\_all
-   dojox\_all
-   dojox\_app
-   dojox\_aspect
-   dojox\_calendar
-   dojox\_charting
-   dojox\_charting\_all
-   dojox\_collections
-   dojox\_data\_all
-   dojox\_data\_basic
-   dojox\_dgauges
-   dojox\_fx
-   dojox\_gfx
-   dojox\_gfx3d
-   dojox\_grid\_all
-   dojox\_html\_basic
-   dojox\_images
-   dojox\_io
-   dojox\_layout\_ext
-   dojox\_layout\_basic
-   dojox\_mobile
-   dojox\_mobile\_app
-   dojox\_mobile\_compat
-   dojox\_mobile\_app\_compat
-   dojox\_string
-   dojox\_uuid
-   dojox\_widget\_standby
-   dojox\_xml

## Dojo 1.9 modules

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.9

|Module|
|------|
|dojo\_19|
|dojo\_app\_19|
|dojo\_data\_19|
|dojo\_data\_ext\_19|
|dojo\_dnd\_basic\_19|
|dojo\_dnd\_ext\_19|
|dojo\_dom\_19|
|dojo\_fmt\_19|
|dojo\_fx\_19|
|dojo\_node\_list\_19|
|dojo\_promise\_19|
|dojo\_request\_19|
|dojo\_selector\_lite|
|dijit\_19|
|dijit\_app\_19|
|dijit\_editor\_19|
|dijit\_editor\_plugins\_19|
|dijit\_form\_19|
|dijit\_layout\_basic\_19|
|dijit\_layout\_ext\_19|
|dijit\_menu\_19|
|dijit\_theme\_basic\_19|
|dijit\_theme\_claro\_19|
|dijit\_tree\_19|
|dijit\_all\_19|
|dojox\_app\_19|
|dojox\_aspect\_19|
|dojox\_calendar\_19|
|dojox\_collections\_19|
|dojox\_data\_basic\_19|
|dojox\_dgauges\_19|
|dojox\_fx\_19|
|dojox\_gfx\_19|
|dojox\_gfx3d\_19|
|dojox\_html\_basic\_19|
|dojox\_images\_19|
|dojox\_io\_19|
|dojox\_layout\_basic\_19|
|dojox\_layout\_ext\_19|
|dojox\_string\_19|
|dojox\_widget\_standby|
|dojox\_uuid\_19|
|dojox\_xml\_19|
|dojox\_mobile\_19|
|dojox\_mobile\_app\_19|
|dojox\_mobile\_compat\_19|
|dojox\_mobile\_app\_compat\_19|
|dojox\_charting\_19|
|dojox\_charting\_all\_19|
|dojox\_data\_all\_19|
|dojox\_grid\_all\_19|
|dojox\_all\_19|

## Dojo 1.7 modules

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.7

|Module|
|------|
|dojo\_17|
|dojo\_app\_17|
|dojo\_data\_17|
|dojo\_dnd\_basic\_17|
|dojo\_dnd\_ext\_17|
|dojo\_dom\_17|
|dojo\_fmt\_17|
|dojo\_fx\_17|
|dojo\_node\_list\_17|
|dijit\_17|
|dijit\_app\_17|
|dijit\_editor\_17|
|dijit\_editor\_plugins\_17|
|dijit\_form\_17|
|dijit\_layout\_basic\_17|
|dijit\_layout\_ext\_17|
|dijit\_menu\_17|
|dijit\_tree\_17|
|dijit\_all\_17|
|dojox\_aspect\_17|
|dojox\_collections\_17|
|dojox\_data\_basic\_17|
|dojox\_fx\_17|
|dojox\_gfx\_17|
|dojox\_gfx3d\_17|
|dojox\_html\_basic\_17|
|dojox\_io\_17|
|dojox\_layout\_basic\_17|
|dojox\_string\_17|
|dojox\_uuid\_17|
|dojox\_xml\_17|
|dojox\_mobile\_17|
|dojox\_mobile\_app\_17|
|dojox\_mobile\_compat\_17|
|dojox\_mobile\_app\_compat\_17|
|dojox\_charting\_17|
|dojox\_charting\_all\_17|
|dojox\_data\_all\_17|
|dojox\_grid\_all\_17|
|dojox\_all\_17|

## Dojo 1.6 modules

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6

|Module|
|------|
|dojo\_16|
|dojo\_app\_16|
|dojo\_data\_16|
|dojo\_dnd\_basic\_16|
|dojo\_dnd\_ext\_16|
|dojo\_dom\_16|
|dojo\_fmt\_16|
|dojo\_fx\_16|
|dojo\_node\_list\_16|
|dijit\_16|
|dijit\_app\_16|
|dijit\_editor\_16|
|dijit\_editor\_plugins\_16|
|dijit\_form\_16|
|dijit\_layout\_basic\_16|
|dijit\_layout\_ext\_16|
|dijit\_menu\_16|
|dijit\_theme\_tundra\_16|
|dijit\_tree\_16|
|dojox\_aspect\_16|
|dojox\_charting\_16|
|dojox\_collections\_16|
|dojox\_data\_basic\_16|
|dojox\_fx\_16|
|dojox\_gfx\_16|
|dojox\_gfx3d\_16|
|dojox\_html\_basic\_16|
|dojox\_io\_16|
|dojox\_layout\_basic\_16|
|dojox\_string\_16|
|dojox\_uuid\_16|
|dojox\_xml\_16|
|dojox\_mobile\_16|
|dojox\_mobile\_app\_16|
|dojox\_mobile\_compat\_16|
|dojox\_mobile\_app\_compat\_16|

## JQuery

These modules provide jQuery.

Location: [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.jquery/installedApps/wp.theme.jquery.ear/wp.theme.jquery.war/WEB-INF/plugin.xml

|Module|Description|
|------|-----------|
|jquery\_1\_10\_2|Provides jQuery v1.10.2 core resources.|

## Modularized Page Builder

These modules provide support for the modularized Page Builder themes from 7.0.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

|Module|Description|
|------|-----------|
|mm\_template\_layout|Widget that handles layout refreshing, this module is only used for Modularized Page Builder themes from 7.0|
|mm\_customize\_shelf|Base widget for the site toolbar, this module is only used for Modularized Page Builder themes from 7.0|
|mm\_page\_toolbar|Widget for the **Customize**, **Hidden Content**, **Save & Exit**, and **Cancel**. This module is only used for Modularized Page Builder themes from 7.0|
|mm\_content\_set\_list|Menu framework list widget from 7.0. This module is only used for Modularized Page Builder themes from 7.0|
|mm\_content\_set\_menu|Menu framework widget from 7.0. This module is only used for Modularized Page Builder themes from 7.0|
|mm\_controlled\_nav\_widget|Navigation widget from 7.0. This module is only used for Modularized Page Builder themes from 7.0|

## Theme

These modules provide earlier Portal 7.0 theme skins.

The plugin.xml file location varies and is documented in the module description.

|Module|Description|
|------|-----------|
|wp\_pagebuilder\_standard\_skin\_70|Earlier 7.0 standard skin

Location: dav:fs-type1/skins/Standard/

|
|wp\_pagebuilder\_noskin\_skin\_70|Earlier 7.0 no skin

Location: dav:fs-type1/skins/NoSkin/

|

## Mashups Enabler

Provides the modules for Enabler from the Mashups 3.0.0.1 release.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.enabler.war.v3001.war/WEB-INF

|Module|Description|
|------|-----------|
|mm\_open\_ajax\_hub|Open Ajax Hub|
|mm\_enabler|Full enabler|
|mm\_enabler\_core|Enabler core; provides only iWidget container support but no model APIs|
|mm\_enabler\_ext|Enabler support is not included in the mm\_enabler|

## Mashups Builder

Provides the modules for Builder from the Mashups 3.0.0.1 release.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

|Module|Description|
|------|-----------|
|mm\_builder|Builder base|
|mm\_builder\_ext|Builder support|
|mm\_builder\_dialogs|Builder dialog base widget|
|wp\_theme\_widget|Menu support for iWidgets|

## User Interface

These modules provide user interface code.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

Page handling

|Module|Description|
|------|-----------|
|mm\_move\_page|Move Page widget|
|mm\_new\_page\_dialog|New Page dialog widget|
|mm\_delete\_page|Menu contribution for deleting a page|

Wiring

|Module|Description|
|------|-----------|
|mm\_builder\_wiring|Wiring widget|

Portlet handling

|Module|Description|
|------|-----------|
|mm\_delete\_control|Menu contribution for deleting a portlet|

## Page Builder

These modules contain code for running Page Builder functions.

The plugin.xml file location is [PortalServer\_root](../reference/wpsdirstr.md#portal_server_root_prod)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/pagebuilder.jar

|Module|Description|
|------|-----------|
|wp\_pagebuilder\_base|Base code and utilities that are used by the other modules in this section.|
|wp\_pagebuilder\_ui|Initialization code and base widgets \(such as dialogs\) used by other Page Builder modules.|
|wp\_pagebuilder\_controls|Code to add the **Move portlet** menu actions \(Move Up/Left/Right/Down\).|
|wp\_pagebuilder\_debug|Client-side debugging and tracing code, this module is turned off by default.|
|wp\_pagebuilder\_data|Data stores used by Page Builder editing tools, and that follow the Dojo read/write API.|
|wp\_pagebuilder\_dnd|Support for portlet drag-and-drop in the page layout.|
|wp\_pagebuilder\_shelf|The site toolbar code, this module is used for modularized Page Builder themes from 7.0 only.|
|wp\_pagebuilder\_csa|Earlier CSA-only Page builder code, this module is used for modularized Page Builder themes from 7.0 only.|
|wp\_pagebuilder\_widget\_css|Earlier CSA widget CSS, this module is used for modularized Page Builder themes from 7.0 only.|
|wp\_pagebuilder\_shelf\_base|Contains the base code for the tabs in the theme toolbar, used a prerequisite for other modules that implement tabs in the toolbar.|
|wp\_wcm\_modal\_dialog|Contains a framework that displays a page in an iframe inside a modal dialog Used as a prerequisite to other modules that use this dialog framework.|
|wp\_managed\_pages\_support|Contains a JavaScript configuration object that is used by all of the managed pages theme modules.|
|wp\_managed\_pages\_support\_edit|Contains base JavaScript code that is shared by the project menu and preview managed pages modules.|
|wp\_toolbar|A managed pages theme module for the toolbar.|
|wp\_status\_bar|The theme status bar that relays information, warning, and error messages to the user.|
|wp\_project\_menu|A dojo-less managed pages theme module for the view mode display of project menu.|
|wp\_project\_menu\_edit|A managed pages theme module for the edit mode function of the project menu.|
|wp\_preview|CSS for the managed pages Preview controls seen in page view mode.|
|wp\_preview\_menu|A managed pages theme module for the Preview function that is seen in the **More** menu|
|wp\_template\_select\_dialog|A dialog that is started from the **New Page** dialog. A user can pick a page template and base a newly created page on that template.|

-   **[Module capabilities ](../dev-theme/themeopt_oob_capability.md)**  
Module capabilities enable the use of modules in the theme.
-   **[Dojo classes provided by the Dojo modules ](../dev-theme/themeopt_oob_dojoclass.md)**  
A list of Dojo classes that are provided by each version 1.9 Dojo meta-module.

**Parent topic:**[The module framework ](../dev-theme/themeopt_module.md)

**Related information**  


[Adding an Active Site Analytics aggregator to a portal page ](../admin-system/sa_asa_add_aggr_2_page.md)

[Themes, profiles, and skins ](../site/site_themes.md)

[Module dependencies in portlets ](../dev-theme/themeopt_mod_capfilters.md)

[Simple modules ](../dev-theme/themeopt_simple_modules.md)

[Customizing the CSS styles of social lists ](../social/soc_rendr_custom_css_styles.md)

[Understanding the Portal 8.5 modularized theme](../dev-theme/themeopt_defaultparts.md)

