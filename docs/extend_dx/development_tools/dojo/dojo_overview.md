# Dojo Toolkit

HCL Digital Experience contains an instance of the Dojo Toolkit, a JavaScript library that is based on the Dojo Toolkit. When you develop components that use Dojo, you must be aware of how the portal uses Dojo, and the tips and restrictions when you use Dojo.

HCL Digital Experience 9.5 comes with six versions of Dojo:

-   Dojo V1.9.x. This version is packaged in its own web application named Dojo_Resources. You can manage it in the WebSphere® Integrated Solutions Console. By default it is deployed at the context root wps/portal_dojo. The path for the Dojo V1.9.x files is PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/V1.9.
-   Dojo V1.7.x. This version is packaged in its own web application named Dojo_Resources. You can manage it in the WebSphere Integrated Solutions Console. By default it is deployed at the context root wps/portal_dojo. The path for the Dojo V1.7.x files is PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.7.
-   Dojo V1.6.x. This version is packaged in its own web application named Dojo_Resources. You can manage it in the WebSphere Integrated Solutions Console. By default it is deployed at the context root wps/portal_dojo. The path for the Dojo V1.6.x files is PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6.
-   Dojo V1.4.x. This version is packaged in its own web application named Dojo_Resources. You can manage it in the WebSphere Integrated Solutions Console. By default it is deployed at the context root /portal_dojo. The path for the Dojo V1.4.x files is PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.4.3.
-   Dojo V1.3.x. This version is packaged in its own web application named Dojo_Resources. You can manage it in the WebSphere Integrated Solutions Console. By default it is deployed at the context root /portal_dojo. The path for the Dojo V1.3.x files is PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war.
-   Dojo V1.1.1. This version is packaged in the directory PortalServer_root/installer/wp.ear/installableApps/wps.ear/wps.war/themes/dojo/portal_dojo and PortalServer_root/installer/wp.ear/installableApps/wps_theme.ear/wps_theme.war/themes/dojo/portal_dojo.

All Dojo packages can be used by HCL and non-HCL components.

!!!note "Notes"
	1.  The Portal 8.5 theme uses Dojo V1.9.x by default in HCL Digital Experience 8.5. This version is the only supported version of Dojo with the Portal 8.5 theme.

	2.  The Portal 8.0 theme uses Dojo V1.7.x by default in HCL Digital Experience 8.0. This version is the only supported version of Dojo with the Portal 8.0 theme.
	
	3.  The Portal 7.0.0.2 theme uses Dojo V1.6.x by default in HCL Digital Experience 7.0.0.2. This version is the only supported version of Dojo with the Portal 7.0.0.2 theme.
	
	4.  The Page Builder theme uses Dojo V1.4.x by default in HCL Digital Experience 7.0. The Page Builder theme is deprecated in Portal 8.5, and will no longer be supported in the next release.
	
	5.  The [Dojo toolkit](http://dojotoolkit.org) that is provided with the portal will be updated as needed over time. This toolkit might include entire new Dojo versions, and specific defect fixes. Compatibility of future Dojo versions is defined by the Dojo project.

## Where HCL Digital Experience uses Dojo

The Portal 8.5 theme uses Dojo V1.9.x to support various portlets and edit-mode user interface components. The portlets and components that use Dojo vary over time. The current set of portlets that uses Dojo includes Managed Pages edit-mode user interface components, Search Center, External Search Results, Tagging and Rating, Tag Cloud, Active Site Analytics, Unified Task List, WidgetWrapper Portlet, WCM Rendering Portlet, Web Content Libraries, Web Content Subscribers, Web Content Syndicators, Feed Schedules, Web2Bookmarks Portlet, and CMIS Picker Dialog.

!!!note
	The portal components that use Dojo are only supported for use with the bundled Dojo.

Dojo is packaged as a module as part of the modular architecture for the Portal 8.5 theme. For performance optimization, the minimal profile does not load Dojo at all. The default deferred profile does not load Dojo initially for view mode, but, rather, only when a page is put into edit mode. When you do not load the Dojo module or any module that is a prerequisite for the Dojo module in the non-deferred part of your profile, then you need not pay any performance price of loading Dojo in view mode and at runtime. If you elect, you are now free to use a different JavaScript library in the view mode for your custom theme and runtime. Create and load your own modules for the library.

## Using Dojo in your custom portal themes

For information about how to use Dojo in custom portal themes that you create see the topic about Creating a new theme.

Upgrading your custom portal themes to a later Dojo version supported by the portal: To upgrade your existing custom themes to a later supported version of Dojo, see the following sections:

-   Portal 7.0.0.2 theme, Dojo V1.6.x -> Portal 8.0 theme, Dojo V1.7.x: see Updating a Portal 7.0.0.2 theme to use Dojo 1.7.
-   Page Builder theme, Dojo V1.4.x -> Portal 7.0.0.2 theme, Dojo V1.6.x: see Updating a Page Builder theme to use Dojo 1.6.
-   Dojo V1.3.x -> Dojo v1.4.x: see Dojo and HCL Portal.wp7
-   Dojo V1.1.x -> Dojo v1.3.x: see Dojo and HCL Portal.wp7

## Dojo usage best practices

When you are working with Dojo and portal components, be aware of the following best practices:

-   Only one instance of Dojo can be loaded in a page, and the current Dojo policy is that the first Dojo included in the page takes precedence. Therefore:

    -   Dojo can be loaded only once per namespace. You can load more than one version of Dojo in the page by using the Dojo native support for scopes. For details, see the Dojo documentation. For performance reasons, it is best to load only one version of Dojo in the page. However, applications or the theme can load more Dojo bundles if they are scoped to different namespaces than the Dojo defaults. You need to make sure that applications and portlets that reference Dojo at a particular namespace scope work correctly with the version of Dojo that is mapped to that scope.
    -   Different themes in the same portal can use different versions of Dojo. You need to make sure that the portlets that run in these themes can work with both Dojo versions.
    Support for multiple versions of Dojo at run time creates a more robust application, which is more stable across migrations and upgrades. But the support can be slightly more complex depending on the added code complexity.

-   All portlets that use Dojo widgets must manually call the Dojo parser when they are loading. Setting djConfig.parseOnLoad has no effect. Otherwise, no widgets are parsed in the portlet.

    All portlets must pass a markup element to the parser. The markup element can exist only inside the DOM of the portlet. Otherwise, Dojo parses the entire document body every time the parser is called without a markup element. Other portlets might get parsed two or three times, which causes the Dojo parser to fail every time it hits a widget that is already parsed.

    Here is an example of correct usage:

    ```
    <script> dojo.addOnLoad( function () { dojo.parser.parse( "<%=namespace%>portletWidgetContainer" ); } ); </script>
    		<div id="<%=namespace%>portletWidgetContainer">
    			<div dojoType="some.Widget"></div>
    		</div>
    ```

-   The `lotusui30dojo` class is set on the body element in the modularized themes, and its corresponding CSS files are linked in as well. To use a different theme within a particular portlet, do not change the CSS classes of the body element from within the portlet. Because this action has consequences on all other portlets and theme components that use Dijits on the page. Instead, use a separate node within the portlet to contain all the widgets that are used by that portlet. Then, assign the different theme class name on the container node inside the portlet.
-   It is important to note that the placement of the theme class \(for example, `lotusui30dojo`, `soria`\) is vital for the theme to display correctly in Dijit components. If a Dijit component creates any elements as direct children of the body element, instead of or in addition to the same place in the DOM where the Dijit component was attached, then it is important to explicitly assign the class name. The class name is assigned for the secondary theme to the DOM node that is a direct child of the body, in addition to the containing DOM node of the portlet's widgets. For example:

    ```
    <body class="tundra">
    	...
    	<!-- Portlet A -->
    	<div class="wpsPortletBody">
    		<!-- Contents of this portlet -->
    		<div class="soria">
    			<!-- Any Dijits here will use the soria theme instead of tundra -->
    			<button class="dijit dijitReset dijitLeft dijitInline dijitDropDownButton">
    			...
    			</button>
    		</div>
    	</div>
    	...
    	<!-- Portlet B -->
    	<div class="wpsPortletBody">
    		<!-- Any Dijits created here will use the tundra theme -->
    		...
    	</div>
    
    	<!-- This table node was created for the dijit.Menu component as part of the 
         dijit.form.DropDownButton from Portlet A -->
    	<table class="dijit dijitMenu dijitReset dijitMenuTable soria">
    		<!-- This menu will use the soria theme instead of tundra, but needs to have it explicitly
           assigned since none of its ancestors have the soria class applied -->
    		...
    	</table>
    </body>
    ```

    In this example, when Portlet A creates dijit.form.DropDownButton, the code to create that widget also creates a menu component and a new DOM node under the body. But the code does not assign a CSS class to that DOM node. If nothing else is done after the portlet creates the DropDownButton, then the DropDownButton uses the `soria` class. But the menu that pops up when the button is clicked uses the `tundra` class. In cases like this, it is important to explicitly set the `soria` class on the DOM node that contains the menu.

-   If possible, load JavaScript code at the end of the theme markup after the rest of the page is rendered, including the page contents themselves. The initial page can then render quickly without blocking requests to serve large JavaScript files, including custom layer files. However, provide core Dojo functions in the head section of the page so that user interface components such as portlets and widgets can have access to these core functions.
-   In relation to loading resources at the end of the theme rather than all inside the head section, the best practice for `dojo.require` statements in portlet applications, widgets, or other user interface components is to include them immediately before the objects or code within the modules that they load are used. This means that if the code is not used until after the page is loaded, for example through an onload handler that is registered by using `dojo.addOnLoad`, then the `dojo.require` statement is best served within the onload handler itself. The theme can then load more resources at the end of the page in layer files after all page components are included. As a result, if the theme already provided those modules in layer files at the end of the markup, the `dojo.require` statements can return immediately, when the onload handlers are fired. This also avoids unnecessary requests for modules that the theme loads but that is not loaded at the point in time when the user interface component is included in the markup on the page.

## Dojo usage restrictions

Observe the following restrictions when you use Dojo with the portal:

-   Only one instance of Dojo can be loaded in a page.
-   Do not rely on making your own updates to the bundled Dojo package. HCL Digital Experience support is likely to update individual files over time, and might even replace the entire package.


???+ info "Related information"  
	-	[Updating custom theme Dojo references](../../../deployment/manage/migrate/next_steps/post_mig_activities/development_task/mig_post_dojo.md)