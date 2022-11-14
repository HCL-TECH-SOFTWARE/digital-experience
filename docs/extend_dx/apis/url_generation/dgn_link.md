# Creating custom links to portlets and pages

URLs encode navigational state information about HCL Portal \(for example, the user's currently selected page\) and about the portlets on a page \(for example, the window state of the portlet\) in a serialized form. Encoding navigational state information in the URL is used by the portal server to support use of the browser's back button.

You can create URLs to the following target resources.

-   Pages or labels
-   Portlets, with the option of adding render or action parameters
-   Specific resources, such as an image file
-   Protected resources - the URL is generated on the condition that the user has sufficient permissions

**Notes:**

-   When you create URLs, all referenced resources must exist in the current environment. In particular, object IDs must be valid and refer to a resource and unique names must be resolvable to object IDs.
-   You cannot create URLs in one virtual portal that address portal resource in another virtual portal. The reason is that both object IDs and unique names relate to resources of the local virtual portal.

Quick Links can also be used to access major areas of the site. Quick Links are also accessible from any location within the site, and you can customize them. Quick Links can be customized to provide one-click access to major areas of the site. Refer to the Adding a Quick Link section of this topic for more information.

## Creating a URL to a portlet

The <portal-navigation:urlGeneration/\> tag can be used together with <portal-navigation:urlParam/\> to pass parameters to a portlet. In the following example, the <portal-navigation:urlParam/\> tag is used to send render parameters to a standard portlet. The parameters specified by <portal-navigation:urlParam/\> tags can be read by the targeted portlet by calling the getParameter\(\) method on the portlet request.

```xmp

<portal-navigation:urlGeneration contentNode="ibm.portal.HCL Portal.Welcome" 
                         layoutNode="welcome.bookmarks"
                         portletWindowState="Maximized" accessControlCheck="NoCheck">
    
   <portal-navigation:urlParam name="<%= month %>" value="August" type="render" />
   <portal-navigation:urlParam name="<%= day %>"   value="Monday"  type="render" />
   <portal-navigation:urlParam name="<%= amount %>" value="<%= ACCOUNT_BALANCE %>"  type="render" />
    
   <a href="<% wpsURL.write(out); %>" class="wpsLinkBarLink">
      <portal-fmt:text key="link.bookmarkstitle" bundle="nls.myproperties"/>
   </a>
    
</portal-navigation:urlGeneration>
    
```

To target the action phase on a standard portlet, you need to also include the portletParameterType attribute on the <portal-navigation:urlGeneration/\> tag, as in the following example.

```

<portal-navigation:urlGeneration contentNode="sample.page" 
                      layoutNode="sample.portlet" portletParameterType="action">
   <portal-navigation:urlParam name="key" value="value"/>
   <a href="<% wpsURL.write(out); %>">
      // simple action with param
   </a>
</portal-navigation:urlGeneration>

```

**Note:** To target the action phase of an IBM portlet, you must use the actionName attribute, which is described in <portal-navigation/\> tags.

The following example is used in the drop-down list in the toolbar to generate a URL to the Organize Favorites portlet. The noCheck value indicates that the user's access control is not checked prior to generating the tag content.

```xmp


      <portal-navigation:urlGeneration contentNode="wps.Organize Favorites" 
                         portletWindowState="Normal" pacCheck="NoCheck">
         <option value='<% wpsURL.write(out); %>' >
         <portal-fmt:text key='link.favorites.orgainize' bundle='nls.engine'/>
      </portal-navigation:urlGeneration>
      
      
```

## Creating a URL to a page

The following steps show how to add a custom page link in one of the theme JSPs. The link opens a page using its custom unique name. The steps use a page with the custom unique name of `yourCo.MyAccountsPage`.

1.  Use **Manage Pages** to create a new page, for example, My Account.
2.  Go to **Administration**, then **Portal Settings**, then **Custom Unique Names**.
3.  Find the page titled "My Account". You can use the search function or page through until you find it.
4.  Assign a unique name for this portlet, for example, `yourCo.MyAccountsPage`.
5.  Add a link in one of your theme JSPs as follows:

    ```xmp
    
    
        <portal-logic:if loggedIn="yes" portletSolo="no">
           <portal-navigation:urlGeneration contentNode="yourCo.MyAccountsPage">
              <td class="wpsToolBar" valign="middle" align="<%=bidiAlignRight%>" nowrap>
                 <a href="<% wpsURL.write(out); %>" class="wpsToolBarLink">
                     My Account
                 </a>
              </td>
           </portal-navigation:urlGeneration>
        </portal-logic:if>
    
    
    ```

    -   The contentNode attribute specifies the unique name for the node.
    -   <portal-logic:if/\> tag is used to verify that the user is logged in and the navigation is intended to be displayed.
    -   <% wpsURL.write\(out\); %\> is used to add the generated URL to the HREF attribute of the link.

## Generating relative URLs

Including navigational state information in the URL results in longer URLs. A large number of URLs on a page, from the themes, skins, and portlets, can make the markup for the page unwieldy and difficult to manage. Generating relative URLs can help manage the size of URLs and overall markup on a page. This section describes how relative URLs are generated and considerations for applying them.

-   **Background on URL formats**

    URLs can take three forms:

    -   **Absolute URL**

        A complete URL containing the protocol, hostname, port, and path. For example: http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere® Application Server. The port number might be different for your environment. .

    -   **Server-relative URL**

        A URL that does not contain the protocol, hostname, and port, but does contain the full path part of the URL, starting with a slash. For example: `/wps/portal` .

    -   **Relative URL**

        A URL that must be combined with a base URL in order to create a full URL. For example, `/wps/portal/index.html` might be a relative URL, but it would have to be combined with a base URL to be meaningful.

    Details on the difference between relative and absolute URL formats can be found in RFC1738.

-   **Handling of URL formats in HCL Portal**

    Instead of encoding the complete navigational state into every URL on a page, HCL Portal provides ways for you to encode only the difference \(delta\) of the state that is represented by the URL with respect to the state of the request that generated the markup. The state of the current request is represented \(in the HTML case\) by the HTML <base/\> tag in the head area of the HTML response. An equivalent tag exists in XHTML and CHTML. Overall, relative URLs are preferable because they are smaller and require less server resources to generate, giving better performance.

-   **Controlling the generation of relative URLs**

    There are two ways to control the generation of relative URLs as opposed to server-relative URLs. It can be controlled through a global setting which affects all URLs generated by HCL Portal, or through an optional attribute on the <portal-navigation:urlGeneration/\> tag, which overrides the global setting. This section describes those settings and the general requirements which determine when HCL Portal can generate relative URLs.

    The following general prerequisites must be met in order for HCL Portal to generate a relative URL:

    -   The client of the <portal-navigation:urlGeneration/\> tag must be able to deal with all possible URL syntaxes \(absolute, server relative, relative\).
    -   The URL must not denote a protocol switch or a switch between the public or protected area \(with respect to the current request\).
    -   The JSP that writes the head area of the result page must contain the <portal-core:stateBase/\> tag.
    The following settings allow the fine grained control of relative URL generation.

    -   **Global setting**

        The global configuration setting "com.ibm.portal.state.accessors.url.URLContext.enableRelative" defines the default value for the relative URL generation policy. If set to "true", the URL generation API tries to generate relative URLs whenever applicable and not specified otherwise via a tag attribute. Per default this setting is set to "false". This setting can be found in the StateManagerService.properties file in the configuration directory.

    -   **allowRelativeURL attribute**

        Each URL generation tag has an optional attribute "allowRelativeURL". By default, the value of this attribute is the value of the global configuration setting. An explicit specification however overrides this setting on a per-URL basis. Setting the attribute to "true" does not guarantee the generation of relative URLs; rather it just allows the generation of relative URLs .

    -   **<portal-core:stateBase/\> tag**

        Stores a base URL which can be used instead of full, newly-coded URLs on each occurrence of a URL in the markup. This enables shorter URLs and can improve the page serving performance. This tag should occur only in the header section of the markup - it is not allowed to occur outside of the header section. Theme JSPs are responsible for the header section, using `Head.jsp` by default.

    -   **Portlet URLs**

        URLs generated using the portlet API \(both the IBM portlet API and the standard portlet API\) use the global setting as a URL generation policy. These APIs do not allow the specification of a configuration parameter on a per URL basis.

-   **Managing incompatibilities with relative URL generation**

    In some cases the generation of URLs that are relative to a base URL as specified in the HTML header can lead to incompatibilities with existing code that cannot handle this URL type.

    -   **Server side bookmarks:**

        Code might assume that URLs can be bookmarked on the server, that is, that the URLs can be kept in a database and reinvoked at a later point in time. This cannot be done with relative URLs. Relative URLs are only meaningful in the context of the page in which they were generated and cannot be reused at a later point in time.

        Code should not bookmark URLs on the server side to represent bookmarks but rather the payload of these URLs only. For example, if server side bookmarks to pages need to be set, only the object IDs or the unique names of the target pages should be stored persistently. At invocation time, a fresh URL can be generated from this data that is then valid in the context of the rendering page.

    -   **location.href property in JavaScript**

        Some code relies on JavaScript to perform interactions on the client side. Although it is not valid to construct URLs by performing string concatenation, JavaScript code often uses the location.href property for navigation. A very common pattern is to make the href attribute of a link point to a JavaScript method, pass a generated URL to this method, and set the href field of the global location variable to that URL within the JavaScript method. Such JavaScript code will fail to work with URLs that are relative to a base tag because the location object - by definition - ignores this base tag. As a result, code that uses this navigation pattern will not work with relative URLs.

        Code should not pass the value returned by a <portal-navigation:urlGeneration/\> tag as a parameter to a JavaScript method, but rather the href attribute of the respective link. For example, assume that a JavaScript method doSth\(url\) should be called if a link is clicked and that the url has been generated by <portal-navigation:urlGeneration/\>. The following syntax works with all types of URLs:

        ```xmp
        
           <a href="url" onClick="doSth(this.href)">some text</a>.
        
        ```


## Adding a Quick Link

Quick Links are used to access major areas of the site. Quick Links are accessible from any location within the site and you can customize them. Quick Links can be customized to provide one-click access to major areas of the site. To add a Quick Link to your page, use the following instructions:

1.  Select **Administration**.
2.  Expand the **Portal User Interface** section.
3.  Select **Manage Pages**.
4.  Search for "Quick Links" using **Title starts with**.
5.  Select the Quick Links page.
6.  Select the **New URL** tab.
7.  Complete the URL and any additional information for the Quick Link you want to add.
8.  Select **OK**.


