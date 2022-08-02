# Modules and dynamic content spots

You can use the modularized framework for dynamic content spots to override spots that were defined through resource environment providers.

Dynamic content spots and markup contributions are both techniques for adding HTML to a theme, with one important difference. Markup contributions are always placed at the end of the body of the page. But, dynamic content spots render wherever they are placed in the theme HTML template.

When a module requires markup, use a markup contribution if it is not important where the module is in the page, such as with iWidget definitions. If the markup must appear in a particular spot in the theme, then a conditional dynamic spot is used.

## Dynamic Content Spots on a page

Portal identifies dynamic content spots after it analyzes the profile of a page and all the modules in the profile that includes its `prereqs`. If any module within the hierarchy contains a dynamic content spot, the spot participates in the page rendering process. If the page's profile does not contain a dynamic content spot's ID that is used within the theme.html, nothing is rendered. If Portal identifies a dynamic content spot with a matching ID, it renders the dynamic content spot at the referenced URI.

To use the same dynamic content spot on two different pages, but with different markup, reference different profiles that contain a different module for the dynamic content spot.

In this example, there are two pages, Home and Applications. Home has an inline top navigation, and Applications has a fly-out navigation. The theme.html is identical and uses the following dynamic content spot

```
<a rel="dynamic-content" href="dyn-cs:id:85theme_topNav"></a>
```

Create two modules and two profiles to create the two pages with different markup.

Modules:

-   **topNavModule**

    Defines a sub contribution with ref-id `85theme_topNav` that points to a JSP provided by this module. This JSP renders the inline top navigation.

-   **flyoutNavModule**

    Defines a sub contribution with ref-id `85theme_topNav` that points to a JSP provided by this module. This JSP renders a fly-out navigation.


Profiles:

-   **HomeProfile, set on Home**

    It contains the `topNavModule`. It causes the inline top navigation to be rendered.

-   **ApplicationsProfile, set on Applications**

    It contains the `flyoutNavModule`. It causes the inline top navigation to be rendered.


## Override dynamic content spots

You can override any dynamic content spot that was defined through resource environment providers. Dynamic content spots in modules overrule the dynamic content spots in resource environment providers. However, you can override dynamic content spots that were defined through modules. To render the dynamic content spots in the correct order, you must create a module that defines a `prereq` on the module that defines the previous dynamic content spot. For more information, see *Writing modules with a plugin.xml file*.

To override the default dynamic content spot for search `wp_search_dynspot`, you must create a module that defines a `prereq` on `wp_searchbar`. This module renders this particular dynamic content spot ID.

**Parent topic:**[Working with dynamic content spots](../dev-portlet/csa2r_dyn_cntnt_spot.md)

**Related information**  


[Creating custom dynamic content spots](../dev-theme/themeopt_themedev_create_dynamic_content_spots.md)

[Writing modules](../dev-theme/themeopt_mod_plugin_xml.md)

