# Web Content Manager JSP tags 

You use HCL Web Content Manager JSP tags with the Web Content Manager API to pull Web Content Manager content and components into external JSP applications.

**Note:** A JSP referenced within a JSP component must not include a reference, directly or indirectly, to the same JSP component. It also includes references within Web Content Manager tags or the API. If it does, a loop is created and your server crashes.

**Note:** To use the Web Content Manager JSP tags, the following directive must be provided in the JSP:

```
`<%@taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm" %>`
```

**Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example, /wps/customapplication;/jsp/jspFilename.jsp.

A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example, my.custom.key;myfile where my.custom.key is a constant within the Web Content Manager configuration service.

**Writing JSP to be referenced within a JSP component:**

The setExplicitContext and setContext tags are not required when you render a JSP file with a JSP Component. They are only required when directly accessing a JSP file.

**Reloading JSP files:**

JSP files that are referenced by Web Content Manager are reloaded once every 10 seconds. If you update a JSP file, you might need to wait for it to be reloaded before your changes are displayed.

## InitWorkspace tag

This tag is used to set the initial workspace. This tag

-   Sets the Web Content Manager workspace as a local variable called wcmWorkspace.
-   Sets the Web Content Manager workspace on the pageContext as a parameter with key com.ibm.workplace.wcm.api.Workspace.WCM\_WORKSPACE\_KEY.
-   Sets the Web Content Manager RenderingContext on the request as a parameter with key Workspace.WCM\_RENDERINGCONTEXT\_KEY

```
`<wcm:initworkspace username=" " password=" " user=" " >
[Error Message]
</wcm:initworkspace>`
```

|Parameter|Details|
|---------|-------|
|username|The user name of a valid Web Content Manager user.|
|user|This parameter is used to specify a java.security.Principal object instead of the user name.|
|password|The password for the valid Web Content Manager user name or user.|

**Note:** User name, user, and password are optional. If not specified, the current user is used instead, including the anonymous user.

Example

```
`<%@ taglib uri="/WEB-INF/tld/wcm.tld" prefix="wcm"%>
<%@ page import="com.ibm.workplace.wcm.api.*" %>

<p><wcm:initworkspace>login fail</wcm:initworkspace>
<%
  // Get the workspace for use
  Workspace workspace = (Workspace) pageContext.getAttribute(Workspace.WCM_WORKSPACE_KEY);
  
  // Get the WCM rendering context for use
  RenderingContext renderingContext = (RenderingContext) request.getAttribute(Workspace.WCM_RENDERINGCONTEXT_KEY);
%>`
```

## Explicit context tag

This tag sets the path to your Web Content Manager server. This tag is not required in JSP that is displayed by using a JSP component.

```
`<wcm:setExplicitContext wcmWebAppPath=" " wcmServletPath=" " path=" "
 requestParameters=" " prefix=" " project=" " >
[Error Message]
</wcm:setExplicitContext>`
```

|Parameter|Details|
|---------|-------|
|wcmWebAppPath|The URL up to the web application. For example, `http://localhost:10039/wps/wcm`|
|wcmServletPath|The servlet path to the Web Content Manager servlet. For example, `/connect`|
|path|The path to the content and site areas. For example, `/Site Area A/ Site Area B/Content C`|
|requestParameters|You specify java Map request parameters to set in the context. These parameters can be used by menu components that are rendered through the JSP that use a query string.See [Writing links to web content](wcm_dev_writing-links.md) for details of request parameters that can be used when you reference web content items.

|
|project|The name of the project to set in the context. If the corresponding project cannot be found, it is ignored and an error is logged. An empty string is used to clear any project that is previously set in the context.|

**Note:** The project, wcmWebAppPath, and wcmServletPath parameters are optional. However, if wcmWebAppPath is specified, wcmServletPath must also be specified.

Developers can add insert context tags at any place in the page and it changes the context for the rest of the page execution, but the tags cannot be nested.

## Context retrieval tag

Sets the context given the location of a path string. This tag is not required in JSP that is displayed by using a JSP component.

```
`<wcm:setContext location=" "  wcmWebAppPath=" " wcmServletPath=" " param=" " project=" " defaultPath=" " >
[Error Message]
</wcm:setContext>`
```

|Parameter|Details|
|---------|-------|
|location|This parameter sets the context of the location of a path string. Either-   **`location="query"`**

The context is obtained from the query parameter.

-   **`location="request"`**

The context is obtained from the value of the request.

-   **`location="session"`**

The context is obtained from the value of the current session.

-   **`location="portalContext"`**

This parameter is used to define the path of a site area or content item that is used as the current context of a page. For example `/library1/sitearea3/content4`

-   **`location="portalMapping"`**

This parameter is used to define the path of a site area or content item that is used as the default site area of a page. For example `/library1/sitearea3`


|
|wcmWebAppPath|The URL up to the web application. For example, `http://localhost:10039/wps/wcm`|
|wcmServletPath|The servlet path to the Web Content Manager servlet. For example, `/connect`|
|param|This is the name of the parameter that the path string is in.|
|project|The name of the project to set in the context. If the corresponding project cannot be found, it is ignored and an error is logged. An empty string is used to clear any project that is previously set in the context.|
|defaultPath|If the location parameter does not resolve to a valid location, then the value of the defaultPath is used. For example, `/library2/sitearea1`|

**Note:** The project, wcmWebAppPath, wcmServletPath, and defaultPath parameters are optional. However, if wcmWebAppPath is specified, wcmServletPath must also be specified.

Developers can add context tags at any place in the page and it changes the context for the rest of the page execution, but the tags cannot be nested.

## Rendering tags

These tags are equivalent to element and component tags.

-   **Rendering an element from the current site area, or content item**

    ```
    `<wcm:contentComponent type=" " key=" " >
    [Error Message]
    </wcm:contentComponent>`
    ```

    |Parameter|Details|
    |---------|-------|
    |type|This parameter determines where the element is being referenced from. Either content or sitearea.|
    |key|This parameter is the name of the element that is being referenced.|

    ```
    `<wcm:libraryComponent name=" " library=" " >
    [Error Message]
    </wcm:libraryComponent >`
    ```

-   **Rendering a component from the Component Library**

    |Parameter|Details|
    |---------|-------|
    |name|This parameter is the name of the component that is being referenced.|
    |library|This parameter is the name of the library where the component is stored.|

    Example

    ```
    `<wcm:libraryComponent name="SC Menu Events" library="Showcase" /> 
    You do not have access to this item.
    </wcm:libraryComponent >`
    ```

-   **Rendering Content based on the current context of a page**

    ```
    `<wcm:content pageDesign=" " >
    [Error Message]
    </wcm:content >`
    ```

    |Parameter|Details|
    |---------|-------|
    |pageDesign|This name of the Presentation Template used to determine context. This parameter is optional.|


## Error handling

The following tag can be added to error messages to enable error handling:

```
`<%=error%>`
```

## Plug-in tag

Rendering plug-ins can be referenced within JSP code by using a plug-in tag:

```
`<wcm:plugin name=" " param1="value" param2="value2" >

// Your text.

</wcm:plugin>`
```

For more information, see [Creating a plug-in tag](../panel_help/wcm_dev_referencing_plugin.md).

**Parent topic:**[The HCL Web Content Manager API ](../wcm/wcm_dev_api.md)

