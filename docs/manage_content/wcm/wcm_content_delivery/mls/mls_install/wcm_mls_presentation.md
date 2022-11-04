# Multilingual presentation Multilingual Solution

Localizing the presentation layer in your site involves deciding which parts of the presentation layer need to be localized, and then separating out those pieces into components that can be localized.

## Presentation templates

In many cases the same presentation templates are used in all locales, with fragments of the template being varied by using one of these two options:

-   Localized elements can be referenced from the current site area.
-   Localized components can be referenced by prefixing the name attribute in the component tag with `name="./item"`. By using dot notation in component tags, the library name is not resolved from the current library until the item is rendered. For example:

    ```
    <component name="./my_component" />
    ```


In other cases however, a locale requires such different presentation that an entirely different template is required. For example, to support locales with languages that read right to left, or for locales with different branding.

These strategies can all be used together, by setting up template mappings in each localized site, and by using site area elements or dot notation where appropriate.

## Site area elements

Using site area elements to vary the locale presentation is used for parts of the presentation that are site-specific content.

-   **Reasons to use site area elements:**

    -   A user must be a site manager to edit these elements.
    -   The site manager has the option to select different components.
    -   If the site area is workflowed, all of the modified elements can be previewed at once.
    -   Suitable for multiple sites per locale.

-   **Reasons to not use site area elements:**

    -   Not a good solution for fragments of the presentation template that are under the control of the designer rather than the site manager.
    -   Using more than 12 elements can cause scalability issues.

## Using dot notation to reference components from the current library

The `name="./item"` parameter is used in component tags for locale-specific design variations in a presentation template.

-   **Reasons to use dot notation in tags:**

    -   Changes can be limited to the users that manage presentation.
    -   Scales better than using site area elements.
    
-   **Reasons to not use dot notation in tags:**

    -   Changes cannot be easily previewed.
    -   References cannot be easily tracked.

## Localized navigator components

When creating a navigator, if the **Current site area** or **Current content** options are used, you can reuse navigators across multilingual sites.

Navigators that use selected start positions cannot easily be shared across locales. To use these types of navigators, the `name="./item"` parameter must be used to retrieve localized components.

Another way of localizing a navigator is to use a JSP fragment to set a different context before rendering the navigator. The navigator would be set to use the **Current site area** as the starting point, and by changing the context that you can manipulate this start area by using code. Because the code uses a path lookup, the same JSP fragment works in all of your localized sites.

```
<%@ page import="com.ibm.workplace.wcm.api.*" %>
<%@ taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm" %>
<wcm:initworkspace user="<%= request.getUserPrincipal() %>" />
<% 
RenderingContext context = (RenderingContext)request.getAttribute(Workspace.WCM_RENDERINGCONTEXT_KEY);
String currentLibrary = context.getLibrary().getName();
String navStart = currentLibrary+"/mySiteArea"; 
%>
<wcm:setExplicitContext path="<%=navStart%>"/>
<wcm:libraryComponent name="theNavigator" library="theLibrary" />
```

In this example:

-   `./mySiteArea` is the path.
-   `theNavigator` refers to the navigator component.
-   `theLibrary` refers to the library the navigator is stored in.

## Localized menu components

Menus that use the **Current content site area** option can be reused across multilingual sites.

Menus that use selected site areas cannot easily be shared across locales. To use these types of menus, the dot notation parameter must be used to retrieve localized versions.

Another way of localizing a menu is to use a JSP fragment to allow a list of site areas to be specified at render time. Because the path is the same for each locale, the same JSP fragment works in all of your localized sites.

```
<%@ page import="com.ibm.workplace.wcm.api.*, java.util.*"%>
<%@ taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm" %>
<wcm:initworkspace user="<%= request.getUserPrincipal() %>" />
<% 
RenderingContext context = (RenderingContext)request.getAttribute(Workspace.WCM_RENDERINGCONTEXT_KEY);
String currentPath = context.getPath();
String currentLibrary = context.getLibrary().getName();
Map myparams = new HashMap();
myparams.put("SiteAreas", currentLibrary+"/mySite/mySiteArea1,"+currentLibrary+"/mySite/mySiteArea2");
%>
<wcm:setExplicitContext path="<%=currentPath%>" requestParameters="<%=myparams%>"/>
<wcm:libraryComponent name="theMenu" library="theLibrary" />
```

In this example:

-   `theMenu` refers to the menu component.
-   `theLibrary` refers to the library the navigator is stored in.
-   `SiteAreas` contains the list of site areas to specify in the code.

## Localized text within common design components

If you have common design components that you want to reference localized text into, then it is recommended to write a Rendering plug-in that wraps a Java Resource Bundle, with the Resource Bundle Key name and the bundle name that is supplied to the plug-in as arguments.

## Localized site search

1.  Create a search collection for each locale specifying the appropriate language.
2.  Create a content source for each site.
3.  Create a search component for each locale library selecting the relevant search collection, or use the Search and Browse portlet.


