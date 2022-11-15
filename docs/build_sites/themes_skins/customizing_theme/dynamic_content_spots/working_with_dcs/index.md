# Working with dynamic content spots

You can add dynamic content to your custom theme by using either client-side or server-side logic.

You can add dynamic content to your custom theme's static content by using dynamic content spots. Dynamic content spots are hook points in your static markup such as the theme.html that delegates somewhere else to inject more markup at that spot the page. It can be delegated to any URI known to the system. For instance, it can point to a server-side component such as JSP or servlet.

To abstract the theme from direct links into server-side code, use the dyn-cs: schema with a unique identifier for a dynamic content spot. This allows for advanced features such as delegating to different JSPs on different pages. Use the following examples.

Including a named dynamic content spot mapping:

```
<a rel="dynamic-content" href="dyn-cs:id:newDynamicContentSpotName"></a>
```

Including a theme JSP directly:

```
<a rel="dynamic-content" 
   href="res:/CustomThemeContext/themes/html/MyTheme/dynamicContent.jsp"></a>
```

## Configuring and modifying named dynamic content spots

The dynamic content spot mappings can be defined as part of the module definition by using the `ref-id` attribute on a `dyn-cs` contribution type. Or, they can be defined for the theme and skin templates in a Resource Environment Provider \(REP\) named WP DynamicContentSpotMappings in the WebSphere® Integrated Solutions Console. For more information, see *Creating a dynamic content spot*.

The following tables are an overview of the dynamic content spots that are most frequently used. Use the Theme Analyzer's Contribution Explorer to see all the dynamic content spots provided.

|Name of the content spot|Defined in module|Value|Description|
|------------------------|-----------------|-----|-----------|
|n/a| |co:config|Starts the combiner data source, which injects the config markup that is identified in the module profile|
|n/a| |co:head|Starts the combiner data source, which injects the head markup that is identified in the module profile.|
|85theme\_asa| |mc:wp\_authoring\_actionbar@mvc:res:/wps/themeModules/modules/actionbar/jsp/actionbar.jsp,tablet@,smartphone@|Provides the site analytics extension|
|85theme\_commonActions|wp\_dynamicContentSpots\_85|res:/wps/defaultTheme85/themes/html/dynamicSpots/commonActions.jsp|Common actions that are on the banner, that is, Actions, Login, Logout|
|85theme\_crumbTrail|wp\_dynamicContentSpots\_85|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/crumbTrail.jsp,smartphone@|Navigation breadcrumb trail to display the page selection path|
|85theme\_footer|wp\_dynamicContentSpots\_85|res:/wps/defaultTheme85/themes/html/dynamicSpots/footer.jsp|Footer of the page|
|85theme\_head|wp\_dynamicContentSpots\_85|res:/wps/defaultTheme85/themes/html/dynamicSpots/head.jsp|HTML head element that provides the document title, styles, bookmark icon.|
|85theme\_layout|wp\_dynamicContentSpots\_85|lm:template|Layout of the page|
|85theme\_mobileNav|wp\_dynamicContentSpots\_85|mvc:smartphone/tablet@res:/wps/defaultTheme85/themes/html/dynamicSpots/mobileNavigation.jspmvc:smartphone/tablet@res:wps/defaultTheme85/themes/html/dynamicSpots/lazyMobileNavigation.jsp?context=wps/defaultTheme85|Navigation that is used on mobile devices such as smartphones and tablets. Each level of navigation is lazily loaded as the user clicks.|
|85theme\_mobileNav\_static|wp\_dynamicContentSpots\_85|mvc:smartphone/tablet@res:wps/defaultTheme85/themes/html/dynamicSpots/mobileNavigation.jsp|Navigation that is used on mobile devices such as smartphones and tablets. Each level of navigation is pre-loaded in the page markup.|
|85theme\_pageModeToggle|wp\_dynamicContentSpots\_85|zmc:wp\_toolbar@res:/wps/defaultTheme85/themes/html/dynamicSpots/pageModeToggle.jsp|Edit Mode and View mode buttons in the theme banner that is seen when the project menu is off.|
|85theme\_primaryNav|wp\_dynamicContentSpots\_85|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=primary,smartphone@,tablet@|Navigation that is in the banner, second level of navigation|
|85theme\_secondaryNav|wp\_dynamicContentSpots\_85|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=secondary,smartphone@,tablet@|Navigation that is in the subbanner, third level of navigation|
|85theme\_sideNav|wp\_dynamicContentSpots\_85|mvc:res:/wps/defaultTheme85/themes/html/dynamicSpots/sideNavigation.jsp?startLevel=2,smartphone@,tablet@|Nested side navigation started at the third level|
|85theme\_status|wp\_dynamicContentSpots\_85|mc:wp\_status\_bar@res:/wps/defaultTheme85/themes/html/dynamicSpots/status.jsp|Area that is located with the page layout that displays status, warning, and error messages to the user|
|85theme\_topNav|wp\_dynamicContentSpots\_85|mvc:smartphone/tablet@res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=top|Navigation in the theme header, first level of navigation|
|wp\_toolbar\_dynspot|wp\_toolbar| |The tabbed toolbar that is at the beginning of the page while in edit mode|
|wp\_project\_menu\_dynspot|wp\_project\_menu| |The project drop-down menu in the theme header|
|wp\_search\_mobile\_dynspot|wp\_searchbar| |Search input that is displayed on the subbanner|
|wp\_preview\_dynspot|wp\_preview| |**End Preview** button that is at the beginning of the page when you preview the page as a different user|
|wp\_analytics\_dynspot|wp\_analytics| |Provides the site analytics extension|
|wp\_analytics\_head\_dynspot|wp\_analytics| |Provides the site analytics head extension|

|Content spot value|Description|
|------------------|-----------|
|lm:control|Renders the layout control body.|
|lm:title|Renders the title of the portlet.|
|lm:description|Renders the description of the portlet.|
|portlet.link:portlet|Outputs the markup <span id="portlet\_id"\></span\> to allow page to position itself at a particular portlet markup with a fragment identifier.|
|wp\_analytics\_portlet\_dynspot Defined in Module: `wp_analytics`.|Provides the site analytics extension for portlets|

You can modify the dynamic content spot values two different ways.

-   Dynamic content spots that are defined through module `wp_dynamicContentSpots_85` are part of the default theme and is cloned when you create your own theme. Rename the module in your theme, update the reference in the profile, and then you can change the values of the dynamic content spots.
-   System dynamic content spots such as `wp_search_dynspot` can be changed by overriding dynamic content spots with the module framework. For example, you can create a module that redefines this dynamic content spot that requires the core module `wp_search`. Your dynamic content spot reference is used as a result.

<!--
-   **[Creating dynamic content spots](../dev-theme/themeopt_cust_creat_dyn_con_spot_parent.md)**  
There are two ways you can create dynamic content spots. You can use a module, or a resource environment provider.
-   **[Conditionally disable dynamic content spots](../dev-theme/themeopt_cust_dcsmarkupcontrol.md)**  
You can control whether a dynamic content spot is rendered into the page or not based on the fact whether a certain module exists on the page or not.
-   **[Modules and dynamic content spots](../dev-theme/themeopt_modules_dyn_cnt_spts.md)**  
You can use the modularized framework for dynamic content spots to override spots that were defined through resource environment providers.
-   **[Dynamic content spot debugging](../dev-theme/themeopt_dyn_cnt_spt_debugging.md)**  
Dynamic Content Spots add dynamic markup into static themes or skins. Sometimes, it is difficult to discern which parts of the page were contributed from which dynamic content spots.
-->

???+ info Related information:"
   - [Creating a dynamic content spot with resource environment providers](../working_with_dcs/creating_dcs/themeopt_cust_createdyncont.md)
   - [Mobile navigation](../../../responsive_web_design/rwd_add_navphone.md)

