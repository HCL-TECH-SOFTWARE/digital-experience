# Modules Provided with the Modularized Theme


HCL Digital Experience provides a set of ready-to-use modules for use with modularized themes. These modules are managed through your theme’s profile configuration.


## Dependency Handling Guidelines


When adding or removing modules from a theme profile, keep the following behavior in mind:


- ✅ **Automatic module injection**  
  If you add a module that depends on another module not in the profile, the required module is automatically injected at runtime.


- ⚠️ **Indirect dependency preservation**  
  If you remove a module that is required by another module still in the profile, the system will automatically restore the removed module at runtime.


- ❌ **Theme breakage risk**  
  If you remove a module that is directly required by the theme itself, and no other modules depend on it, the module is removed. This may cause the theme to break.


---


## Theme Modules Provided with the Portal Theme


The following modules are included with the HCL Portal theme. Each entry includes the module ID, description, and location. The `plugin.xml` file location varies and is included where applicable.


### 8.5 Theme Modules


| Module | Description |
|--------|-------------|
| `wp_theme_portal_85` | Provides the Portal 8.5 theme CSS.<br/>**Location:** `dav:fs-type1:/themes/portal8.5/css` |
| `wp_theme_edit` | Adds the ability to enter page edit mode.<br/>**Location:** `dav:fs-type1:/themes/portal8.5/js` |
| `wp_theme_menus` | Menu framework introduced in version 7002.<br/>**Location:** `dav:fs-type1:/themes/portal8.5/js` |
| `wp_portlet_css` | CSS support for older portlets.<br/>**Location:** `dav:fs-type1:/common-resources/ibm/css/portal` |
| `wp_legacy_layouts` | CSS for 7.0 static page layouts.<br/>**Location:** `dav:fs-type1:/common-resources/ibm/css/portal` |
| `wp_layout_windowstates` | Server-side implementation for maximize/minimize portlet support. |
| `wp_portal` | Provides JavaScript global configuration objects, such as URLs, locale, and user info. Implemented as a server-side data source. |
| `wp_liveobject_framework` | Enables live interactions on markup with class selectors (e.g., vCard span). Developers can extend it with custom handlers.<br/>**Location:** `[PortalServer_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/plugin.xml` |
| `wp_oob_sample_styles` | Styles for out-of-box web content samples.<br/>**Location:** `[PortalServer_root](../../../../guide_me/wpsdirstr.md)/pzn.ext/wp.templating.wcm/shared/app/wp.wcm.templating.jar` |
| `wp_theme_skin_region` | Provides accessibility support.<br/>**Location:** `dav:fs-type1:/themes/portal8.5/js` |
| `wp_theme_high_contrast` | Supports high contrast accessibility mode.<br/>**Location:** `dav:fs-type1:/themes/portal8.5/js` |
| `wp_custom_page_style` | Loads CSS for a page-specific style, used by the Edit toolbar view. |
| `getting_started_module` | Sample module to inject custom resources into the theme. See *Simple modules*.<br/>**Location:** `dav:fs-type1:/themes/Portal8.5/modules/getting_started_module` |
| `wp_liveobject_framework_core` | Core parser of the Live Text Framework, which processes class selectors.<br/>**Location:** `[PortalServer_root](../../../../guide_me/wpsdirstr.md)/ui/wp.tagging.liveobject/semTagEar/Live_Object_Framework.ear/liveobjects.war/WEB-INF/plugin.xml` |
| `wp_openajaxhub` | Implements OpenAjax Hub 2.0’s pub/sub engine with sandboxing support for untrusted components.<br/>**Location:** `[PortalServer_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/openajaxhub.jar` |


## Simple menus


These modules support toolbar and theme menu functionality. The `plugin.xml` file location varies and is noted in each module description.


| Module | Description |
|--------|-------------|
| `wp_simple_contextmenu_main` | Collects all modules required for simple menus. Location: `dav:fs-type1:/themes/Portal8.5/contributions/simple_contextmenu.json` |
| `wp_simple_contextmenu_css` | Adds CSS styling for simple menus. Location: `dav:fs-type1:/themes/Portal8.5/contributions/simple_contextmenu.json` |
| `wp_simple_contextmenu_js` | Enables pop-up menu display. Location: `PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/simple_contextmenu.jar` |
| `wp_simple_contextmenu_ext` | Adds features like badge support. Location: `PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/simple_contextmenu.jar` |
| `wp_simple_contextmenu_templates` | Provides templates used to render simple menus. Location: `dav:fs-type1:/themes/Portal8.5/contributions/simple_contextmenu.json` |


## Menus


These modules support theme menus in your portal, such as in-place edit menus. These are also known as Component Action menus (CAM). The `plugin.xml` file location varies and is noted in each module description.


| Module | Description |
|--------|-------------|
| `wp_contextmenu_main` | Collects all modules required for the Component Action menu. Location: `dav:fs-type1:/themes/Portal8.5/contributions/contextmenu.json` |
| `wp_contextmenu_css` | Adds CSS styling for the Component Action menu. Location: `dav:fs-type1:/themes/Portal8.5/contributions/contextmenu.json` |
| `wp_contextmenu_js` | Enables display of open action menus for components, such as portlets or content items. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar |
| `wp_contextmenu_templates` | Provides templates for rendering the Component Action menu in specific contexts, such as inline editing. Location: `dav:fs-type1:/themes/Portal8.5/contributions/contextmenu.json` |
| `wp_contextmenu_config_lof` | Supplies configuration for Live Object Framework to manage Component Action menu instances on a page. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar |
| `wp_contextmenu_live_object` | Provides Live Object Framework service for managing Component Action menu instances. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contextmenu.jar |
| `wp_skin_cam` | Enables the Component Action menu to be opened by clicking an icon in the portlet skin. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/skincomponentactionmenu.jar |

## Dynamic content spots


These modules define mappings for dynamic content spots in the theme. You can overlay these spots using other modules as needed.


| Module | Description |
|--------|-------------|
| `wp_dynamicContentSpots_85` | Defines all dynamic content spots for the 8.5 theme. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/WEB-INF/plugin.xml |
| `wp_dynamicContentSpots_toolbar85` | Defines all dynamic content spots for the 8.5 toolbar theme. Location: [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/toolbar/wp.toolbar.themes/toolbar85/installedApps/ToolbarTheme85.ear/ToolbarTheme85.war/WEB-INF/plugin.xml|

## Toolbar


These modules provide resources for the toolbar.


| Module | Description |
|--------|-------------|
| `wp_a11y` | Accessibility utility functions APIs. Location: [PortalServer_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/a11y.jar |
| `wp_admin_edit` | Provides theme artifacts related to the admin area. Location: [PortalServer_root](../../../../guide_me/wpsdirstr.md)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/plugin.xml |
| `wp_hiddencontent` | Defines CSS to show or hide hidden content items in the hidden layout container. Location: [PortalServer_root](../../../../guide_me/wpsdirstr.md)/toolbar/wp.toolbar.modules/webapp/installedApps/ToolbarModules.ear/ToolbarModules.war/WEB-INF/lib/hiddencontent.jar |
| `wp_movecontrols` | JavaScript API for moving layout controls within a page layout. Location: [PortalServer_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/movecontrols.jar |
| `wp_portlet_applications` | Support module for Applications portlets. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_Applications.ear/wp.portlet.applic.war/WEB-INF/plugin.xml |
| `wp_portlet_changelayout` | Support module for the Change Layout portlet. Shows orphaned portlets section. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_Orphaned.ear/wp.portlet.change.war/WEB-INF/plugin.xml |
| `wp_portlet_newcontent` | Support module for the New Content portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml |
| `wp_portlet_newpage` | Support module for the New Page portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_New_Page.ear/wp.portlet.newpag.war/WEB-INF/plugin.xml |
| `wp_portlet_overview` | Support module for the Overview portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml |
| `wp_portlet_projects` | Support module for the Project portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml |
| `wp_portlet_sitemap` | Support module for the Sitemap portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_com.ibm.wps.portle.ear/wp.portlet.conten.war/WEB-INF/plugin.xml |
| `wp_portlet_style` | Support for the Mode Styles portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_Styles.ear/wp.portlet.styles.war/WEB-INF/plugin.xml |
| `wp_portlet_vanityurl` | Support for the Vanity URL portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_VanityUrl.ear/wp.portlet.vanity.war/WEB-INF/plugin.xml |
| `wp_portlet_wiring` | Dependencies of the Wiring portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_Wiring.ear/wp.portlet.wiring.war/WEB-INF/plugin.xml |
| `wp_portlet_wiring_resources` | Resources provided by the Wiring portlet. Location: [wp_profile_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA_Wiring.ear/wp.portlet.wiring.war/WEB-INF/plugin.xml |


## Drag-and-drop

These modules provide the toolbar drag-and-drop function.

Location: [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/dnd.jar

|Module|Description|
|------|-----------|
|wp\_dnd\_css|This module provides the CSS that is used to show drag sources and drop zones.|
|wp\_dnd\_main|This module parses the markup of a page layout to convert the layout containers into valid HTML 5 drop zones.|
|wp\_dnd\_util|This module provides JavaScript utility APIs for implementing drag-and-drop features.|

## HCL Web Content Manager

These modules provide Web Content Manager functions.

|Module|Description|
|------|-----------|
|wcm\_config|Web Content Manager Config is a resource that is intended to be used by Web Content Manager theme modules.Location: [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/wcm/prereq.wcm/wcm/shared/app/ilwwcm-services-impl.jar|
|wcm\_inplaceEdit|In-place editing enables users with edit access to a content item to edit fields of that item from within the web page itself instead of using the authoring portlet. This feature is available when you display content with a web content viewer portlet.Location: [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/wcm.ear/wcm-inplaceEdit.war/WEB-INF/plugin.xml|

## Content Mapping

Description: Provides content mapping support.

[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/contentmapping/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/contentmapping.jar

|Module|Description|
|------|-----------|
|wp\_content\_mapping\_picker|Provides the Content Mapping Picker dialog that allows one to select a piece of content from Web Content Manager.|
|wp\_content\_targeting\_cam|Provides resources that are required for the Content Targeting dialog that is started from the **Component Action** menu. <br/> Location: [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)/installedApps/cell/PA\_wp.pzn.ui.actions.ear/wp.pzn.ui.actions.war/WEB-INF/plugin.xml|

## Federation

Description: Provides federated document picker support.

[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/federation/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/federation.jar

|Module|
|------|
|wp\_federated\_documents\_picker|

## Search

These modules provide JavaScript code for the search box widget and provide a JSP to generate the search box markup that can be started as a dynamic content spot.

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/search.jar

|Module|Description|
|------|-----------|
|wp\_search|Search widget|
|wp\_searchbar|Lightweight inline search bar that redirects to the search page to show results.Location: [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/search.jar|

## Analytics


These modules provide Analytics support.


**Location:** `PortalServer_root/theme/wp.theme.modules/asa/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/asa.jar`


| Module                        | Description                                                                                          |
|------------------------------|------------------------------------------------------------------------------------------------------|
| `wp_analytics`               | Meta module that provides all analytics features, including the aggregator, analytics tags, site promotions, and overlay reports. |
| `wp_analytics_aggregator`    | Inserts the reference to the analytics aggregator and its dependencies into the page.               |
| `wp_analytics_bootstrap`     | Internal module containing the bootstrap code required for analytics. Must not be directly referenced in theme profiles. |
| `wp_analytics_overlay_reports` | Public module that provides the analytics overlay reports for portlets and pages.                   |
| `wp_analytics_tags`          | Public module that provides analytics tag and site promotion functions. Includes dynamic content spots for analytics micro-formats. |
| `wp_analytics_tags_dialog`   | Public module that provides the dialog interface for managing analytics tags and site promotions.   |


---


## Personalization


These modules provide resources for Personalization.


**Location:** `PortalServer_root/pzn/prereq.pzn/installedApps/Personalization_Workspace.ear/pznauthorportlet.war/WEB-INF/plugin.xml`


| Module               | Description                                             |
|---------------------|---------------------------------------------------------|
| `wp_pzn_geolocation` | Provides resources required for Geolocation Personalization. |


---


## Social Lists


The `wp_social_rendering` theme module provides the CSS styles used by social lists. It defines the capability `social_rendering` version `8.5`.


**Location:** `PortalServer_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/sr/css/sr.css`


> No prerequisites are required to use this theme module.


---


## Web Dock


These modules provide resources for the Web Dock application.


**Location:** `wp_profile_root/installedApps/cell/PA_WebDockPortServlet.ear/WebDockPortlet.war/WEB-INF/plugin.xml`


| Module        | Description                                             |
|---------------|---------------------------------------------------------|
| `wp_webdock`  | Provides resources required by the Web Dock application. |


---


## IBM® MobileFirst® Integration


These modules support MobileFirst application integration.


**Locations:**


- `wp_worklight_*` modules: `dav:fs-type1/themes/Portal8.5/contributions/worklight61.json`
- `wl_*` modules: `PortalServer_root/theme/wp.theme.worklight.ext/installableApps/wp.theme.worklight.ext.ear/wp.theme.worklight.ext.war/WEB-INF`


| Module                          | Description                                                                      |
|--------------------------------|----------------------------------------------------------------------------------|
| `wp_worklight`                 | Mapping module to MobileFirst integration extension.                            |
| `wp_worklight_android`        | Mapping module for Android.                                                     |
| `wp_worklight_ios`            | Mapping module for iOS.                                                         |
| `wp_worklight_css`            | Mapping module to MobileFirst CSS.                                              |
| `wp_worklight_css_android`    | Mapping module to MobileFirst CSS for Android.                                  |
| `wp_worklight_css_ios`        | Mapping module to MobileFirst CSS for iOS.                                      |
| `wp_worklight_jsonstore`      | Mapping module for MobileFirst client JSONStore.                                |
| `wp_worklight_plugins`        | Mapping module for MobileFirst plugins.                                         |
| `wp_worklight_plugins_android`| Mapping module for Android plugins.                                             |
| `wp_worklight_plugins_ios`    | Mapping module for iOS plugins.                                                 |
| `wl_android_6 / 61`           | Provides client and Cordova JavaScript for Android.                             |
| `wl_ios_6 / 61`               | Provides client and Cordova JavaScript for iOS.                                 |
| `wl_client_css_android_6 / 61`| MobileFirst client CSS for Android, for diagnostic and modal dialogs.           |
| `wl_client_css_ios_6 / 61`    | MobileFirst client CSS for iOS, for diagnostic and modal dialogs.               |
| `wl_client_jsonstore_android_6 / 61` | JSONStore support for Android.                                           |
| `wl_client_jsonstore_ios_6 / 61`     | JSONStore support for iOS.                                               |
| `wl_config`                   | Injects initialization for client and Cordova API.                              |
| `wl_cordova_css_android_6`    | Cordova client CSS for the tab bar component.                                   |
| `wl_plugins_android_61`       | Cordova plugin JavaScript for Android.                                          |
| `wl_plugins_ios_61`           | Cordova plugin JavaScript for iOS.                                              |


## Sametime


These modules provide the code for integrating with HCL Sametime `stlinks` support and new proxy support.


**Location:** [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/sametime.jar


| Module              | Description                    |
|---------------------|--------------------------------|
| `wp_sametime_links` | Earlier STlinks support.       |
| `wp_sametime_proxy` | New Sametime proxy support.    |


---


## Web Application Integrator


These modules provide the Web Application Integrator.


!!! note
    WAI functionality is no longer a tested path. It is recommended to use HCL DX Script Portlets and HCL DX APIs to integrate content from other systems.


**Location:** [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ic4_wai.jar!/plugin.xml

| Module                 | Description                                                     |
|------------------------|-----------------------------------------------------------------|
| `wp_ic4_wai_resources` | Provides resources to enable Connections integration with WAI.  |


---


## Client Utils


These modules provide JavaScript utility code with no dependencies on the Dojo Toolkit in the `i$` global namespace. These are suitable for lightweight themes and include utilities for type checks, IO, JSON parsing, DOM helpers, Promises, and more.


**Location:** [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/ibmc.jar


| Module                 | Description                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------|
| `wp_client_main`       | Contains basic utilities.                                                                    |
| `wp_client_ext`        | Contains advanced utilities like Promises, IO, DOM helpers, events, and deferred loading.    |
| `wp_client_dnd`        | Drag-and-drop capabilities.                                                                  |
| `wp_client_logging`    | Logging for errors, warnings, and info messages.                                             |
| `wp_client_selector`   | JavaScript CSS selector engine.                                                              |
| `wp_client_tracing`    | Tracing capabilities.                                                                        |


---


## Portal Client


These modules provide utilities and base code for other modules, including Tagging and Rating.


**Location:** [`PortalServer_root`](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/portalclient.jar


| Module                         | Description                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------|
| `wp_portlet_client_model`      | Public client programming model. Includes REST service and state handling.                        |
| `wp_portal_client_utils`       | Common utilities (XML handling, authentication), used as base for other modules.                  |
| `wp_portal_client_rest_utils`  | Client-side data stores for accessing Portal REST modules, used in features like Tagging/Rating.  |
| `wp_portal_ui_utils`           | Common UI elements. Used in dialogs like Content Mapping Picker and Tagging and Rating.           |
| `wp_tagging_rating`            | Tagging and Rating widgets.                                                                       |
| `wp_tagging_rating_opensearch` | OpenSearch plugin for Tagging and Rating.                                                         |
| `wp_tagging_rating_light`      | Lightweight inline tagging and rating widgets.                                                    |
| `wp_tagging_rating_menu`       | Tagging and Rating menu items for the actions menu.                                               |
| `wp_tagging_rating_tagcloud`   | Tag cloud shown in the Tag Center page.                                                           |
| `wp_template_select_dialog`    | Dialog launched from "New Page" to allow template selection for new pages.                        |


## Dialog API


These modules provide the theme dialog function.


**Location:**  
[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/dialog.jar


| Module              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `wp_dialog_css`     | Provides the CSS styling for dialogs that are displayed by the dialog API. |
| `wp_dialog_draggable` | Enables dialogs created with the API to display page content.              |
| `wp_dialog_main`    | Provides an API to create dialogs for displaying page content.              |
| `wp_dialog_util`    | Provides utilities to support the dialog API.                               |


---


## OneUI


These modules provide the CSS for OneUI.


**Meta-modules:**


- `wp_one_ui`
- `wp_one_ui_dijit`


**Plugin location:**  
[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/oneui.jar


| Module                    | Description                              |
|---------------------------|------------------------------------------|
| `wp_one_ui_21`            | Provides OneUI v2.1 CSS.                 |
| `wp_one_ui_30`            | Provides OneUI v3.0 CSS.                 |
| `wp_one_ui_dijit_30`      | Provides dijit support for OneUI.        |
| `wp_one_ui_303`           | Provides OneUI v3.03 CSS.                |
| `wp_one_ui_dijit_303`     | Provides dijit support for OneUI v3.03.  |


---


## Dojo


These modules are built from Dojo build profiles. The `djconfig` object is provided by a Portal data source.


**Dojo configuration URLs:**


- Dojo 1.6: `dojo:config@v1.6`
- Dojo 1.7: `dojo:config@v1.7`
- Dojo 1.9: `dojo:config@v1.9`


See `/dojo/build.txt` to identify the files in each layer. Each module contributes to the `<head>` section.


---


## Dojo Meta-Modules


These Dojo modules are version-agnostic. Use meta-modules to define the active version of Dojo (1.6, 1.7, or 1.9).


**Meta-module definitions:**


- **dojo19.json**  
  Location:  
  [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.9


- **dojo17.json**  
  Location:  
  [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.7


- **dojo16.json**  
  Location:  
  [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6


To activate a version:


1. Copy the corresponding file into `dav:fs-type1:/themes/portal8.5/contribution`
2. Delete the previous file.
3. Restart the server.


!!! note
    Only one file can exist in the folder at a time.  
    The `dojo16.json`, `dojo17.json`, and `dojo19.json` files cannot be used simultaneously.  
    For a complete list of Dojo classes provided by each module, see: **Dojo classes that are provided by the Dojo modules**.


---


### Available Meta-Modules


- `dojo`
- `dojo_app`
- `dojo_data`
- `dojo_data_ext`
- `dojo_dnd_basic`
- `dojo_dnd_ext`
- `dojo_dom`
- `dojo_fmt`
- `dojo_fx`
- `dojo_node_list`
- `dojo_promise`
- `dojo_request`
- `dojo_selector_lite`
- `dijit`
- `dijit_app`
- `dijit_editor`
- `dijit_editor_plugins`
- `dijit_form`
- `dijit_layout_basic`
- `dijit_layout_ext`
- `dijit_menu`
- `dijit_tree`
- `dijit_all`
- `dojox_all`
- `dojox_app`
- `dojox_aspect`
- `dojox_calendar`
- `dojox_charting`
- `dojox_charting_all`
- `dojox_collections`
- `dojox_data_all`
- `dojox_data_basic`
- `dojox_dgauges`
- `dojox_fx`
- `dojox_gfx`
- `dojox_gfx3d`
- `dojox_grid_all`
- `dojox_html_basic`
- `dojox_images`
- `dojox_io`
- `dojox_layout_ext`
- `dojox_layout_basic`
- `dojox_mobile`
- `dojox_mobile_app`
- `dojox_mobile_compat`
- `dojox_mobile_app_compat`
- `dojox_string`
- `dojox_uuid`
- `dojox_widget_standby`
- `dojox_xml`

## Dojo 1.9 Modules


These modules support the Dojo 1.9 framework.


The `plugin.xml` file location is:  
[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.9


| Module |
|--------|
| dojo_19 |
| dojo_app_19 |
| dojo_data_19 |
| dojo_data_ext_19 |
| dojo_dnd_basic_19 |
| dojo_dnd_ext_19 |
| dojo_dom_19 |
| dojo_fmt_19 |
| dojo_fx_19 |
| dojo_node_list_19 |
| dojo_promise_19 |
| dojo_request_19 |
| dojo_selector_lite |
| dijit_19 |
| dijit_app_19 |
| dijit_editor_19 |
| dijit_editor_plugins_19 |
| dijit_form_19 |
| dijit_layout_basic_19 |
| dijit_layout_ext_19 |
| dijit_menu_19 |
| dijit_theme_basic_19 |
| dijit_theme_claro_19 |
| dijit_tree_19 |
| dijit_all_19 |
| dojox_app_19 |
| dojox_aspect_19 |
| dojox_calendar_19 |
| dojox_collections_19 |
| dojox_data_basic_19 |
| dojox_dgauges_19 |
| dojox_fx_19 |
| dojox_gfx_19 |
| dojox_gfx3d_19 |
| dojox_html_basic_19 |
| dojox_images_19 |
| dojox_io_19 |
| dojox_layout_basic_19 |
| dojox_layout_ext_19 |
| dojox_string_19 |
| dojox_widget_standby |
| dojox_uuid_19 |
| dojox_xml_19 |
| dojox_mobile_19 |
| dojox_mobile_app_19 |
| dojox_mobile_compat_19 |
| dojox_mobile_app_compat_19 |
| dojox_charting_19 |
| dojox_charting_all_19 |
| dojox_data_all_19 |
| dojox_grid_all_19 |
| dojox_all_19 |


---


## Dojo 1.7 Modules


These modules support the Dojo 1.7 framework.


The `plugin.xml` file location is:  
[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.7


| Module |
|--------|
| dojo_17 |
| dojo_app_17 |
| dojo_data_17 |
| dojo_dnd_basic_17 |
| dojo_dnd_ext_17 |
| dojo_dom_17 |
| dojo_fmt_17 |
| dojo_fx_17 |
| dojo_node_list_17 |
| dijit_17 |
| dijit_app_17 |
| dijit_editor_17 |
| dijit_editor_plugins_17 |
| dijit_form_17 |
| dijit_layout_basic_17 |
| dijit_layout_ext_17 |
| dijit_menu_17 |
| dijit_tree_17 |
| dijit_all_17 |
| dojox_aspect_17 |
| dojox_collections_17 |
| dojox_data_basic_17 |
| dojox_fx_17 |
| dojox_gfx_17 |
| dojox_gfx3d_17 |
| dojox_html_basic_17 |
| dojox_io_17 |
| dojox_layout_basic_17 |
| dojox_string_17 |
| dojox_uuid_17 |
| dojox_xml_17 |
| dojox_mobile_17 |
| dojox_mobile_app_17 |
| dojox_mobile_compat_17 |
| dojox_mobile_app_compat_17 |
| dojox_charting_17 |
| dojox_charting_all_17 |
| dojox_data_all_17 |
| dojox_grid_all_17 |
| dojox_all_17 |


---


## Dojo 1.6 Modules


These modules support the Dojo 1.6 framework.


The `plugin.xml` file location is:  
[PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6


| Module |
|--------|
| dojo_16 |
| dojo_app_16 |
| dojo_data_16 |
| dojo_dnd_basic_16 |
| dojo_dnd_ext_16 |
| dojo_dom_16 |
| dojo_fmt_16 |
| dojo_fx_16 |
| dojo_node_list_16 |
| dijit_16 |
| dijit_app_16 |
| dijit_editor_16 |
| dijit_editor_plugins_16 |
| dijit_form_16 |
| dijit_layout_basic_16 |
| dijit_layout_ext_16 |
| dijit_menu_16 |
| dijit_theme_tundra_16 |
| dijit_tree_16 |
| dojox_aspect_16 |
| dojox_charting_16 |
| dojox_collections_16 |
| dojox_data_basic_16 |
| dojox_fx_16 |
| dojox_gfx_16 |
| dojox_gfx3d_16 |
| dojox_html_basic_16 |
| dojox_io_16 |
| dojox_layout_basic_16 |
| dojox_string_16 |
| dojox_uuid_16 |
| dojox_xml_16 |
| dojox_mobile_16 |
| dojox_mobile_app_16 |
| dojox_mobile_compat_16 |
| dojox_mobile_app_compat_16 |


## JQuery

These modules provide jQuery.

Location: [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.jquery/installedApps/wp.theme.jquery.ear/wp.theme.jquery.war/WEB-INF/plugin.xml

|Module|Description|
|------|-----------|
|jquery\_1\_10\_2|Provides jQuery v1.10.2 core resources.|

## Modularized Page Builder

These modules provide support for the modularized Page Builder themes from 7.0.

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

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
|wp\_pagebuilder\_standard\_skin\_70|Earlier 7.0 standard skin. <br/> Location: dav:fs-type1/skins/Standard/|
|wp\_pagebuilder\_noskin\_skin\_70|Earlier 7.0 no skin. <br/> Location: dav:fs-type1/skins/NoSkin/|

## Mashups Enabler

Provides the modules for Enabler from the Mashups 3.0.0.1 release.

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.enabler.war.v3001.war/WEB-INF

|Module|Description|
|------|-----------|
|mm\_open\_ajax\_hub|Open Ajax Hub|
|mm\_enabler|Full enabler|
|mm\_enabler\_core|Enabler core; provides only iWidget container support but no model APIs|
|mm\_enabler\_ext|Enabler support is not included in the mm\_enabler|

## Mashups Builder

Provides the modules for Builder from the Mashups 3.0.0.1 release.

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

|Module|Description|
|------|-----------|
|mm\_builder|Builder base|
|mm\_builder\_ext|Builder support|
|mm\_builder\_dialogs|Builder dialog base widget|
|wp\_theme\_widget|Menu support for iWidgets|

## User Interface

These modules provide user interface code.

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/ui/wp.mashup.cc.deploy/installedApps/MashupCommonComponent.ear/mm.builder.v3001.war/WEB-INF

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

The plugin.xml file location is [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/WEB-INF/lib/pagebuilder.jar

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


-  **[Module capabilities](themeopt_oob_capability.md)**  
Module capabilities enable the use of modules in the theme.


- **[Dojo classes provided by the Dojo modules](themeopt_oob_dojoclass.md)**  
  Lists the Dojo classes provided by each version 1.9 Dojo meta-module.


## HCLSoftware U learning materials


To learn how to further develop WebDAV-based DX themes, see the  
[**Theme Development** lesson in the *HCL Digital Experience for Developers (Intermediate)* course](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3462){target="_blank"}.


You can try it out using the following lab materials:

- [**Theme Development Lab** (PDF)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Theme_Development.pdf){target="_blank"}


- [**Theme Development Lab Resources** (ZIP)](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Theme_Development_Lab_Resources.zip){target="_blank"}


???+ info "Related information"
    - [Adding an Active Site Analytics aggregator to a portal page](../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/collecting_analytics_data/sa_asa_add_aggr_2_page.md)
    - [Themes, profiles, and skins](../../../create_sites/website_building_blocks/themes_profiles_skins/index.md)
    - [Module dependencies in portlets](../../the_module_framework/themeopt_mod_capfilters.md)
    - [Simple modules](../../the_module_framework/writing_module/simple_modules/index.md)
    - [Customizing the CSS styles of social lists](../../../social_rendering/customizing_view_definitions/customizing_visualdesign/customizing_css_social_list/index.md)
    - [Understanding the Portal 8.5 modularized theme](../../../create_sites/website_building_blocks/themes_profiles_skins/themeopt_defaultparts.md)




