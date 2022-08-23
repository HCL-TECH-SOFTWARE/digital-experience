# <portal-navigation/\> tags

The <portal-navigation/\> tags are used to implement navigation tasks such as generating URLs and traversing the portal navigation model.

The following section provides detailed descriptions of the `<portal-navigation/>` JSP tags:

-   **<portal-navigation:uiNavigationModel var="uiNavigationModel" mobileDeviceClassTest="device class equation" showHidden="true\|false" selectedNodeID="page ID" selectionPath="page IDs" selectionPathSeparator="selectionPath delimiter"\>**

    The uiNavigationModel tag helps the JSP developer concentrate on building the navigation rather than worrying about the portal-specific implementation details.

    By default, the uiNavigationModel lists the visible pages as part of its iterator. When the **Show hidden pages** option is selected in the toolbar, it lists the hidden pages also. There is a special mobile hidden flag for pages. The model also allows you to specify a mobile test device class expression, which is used to evaluate if the system is rendered as part of a mobile request.

    The uiNavigationModel tag makes the [uiNavigationModel](../dev-theme/themeopt_el_bean_ui_nav_mod.md) EL Bean available as a variable that can be specified as part of the `var` attribute.

    Example:

    ```
    <portal-navigation:uiNavigationModel var="uiNavigationModel" mobileDeviceClassTest="smartphone/tablet" >
        <%-- loop through all children of the page at the given curLevel --%>
        <c:forEach var="node" items="${uiNavigationModel.children[selectionPath[curLevel]]}">
    
            <%-- print out the page and highlight it if it is in the selection path 
                 (the current page or an ancestor of the current page) --%>
            <li class="wpthemeNavListItem wpthemeLeft<c:if test="${node.isInSelectionPath}"> wpthemeSelected</c:if>">
    
                <%-- output a link to the page --%>
                <a href="${fn:escapeXml(node.urlGeneration)}" class="wpthemeLeft ${node.isHidden ? 
                     'wpthemeHiddenPageText' : ''} ${node.isDraft? 'wpthemeDraftPageText' : ''}">
    
                    <%-- start page title markup --%>
                    <span lang="${node.title.xmlLocale}" dir="${node.title.direction}"><%--
                        
                        <!-- print out the page title -->
                        --%><c:out value="${node.title}"/><%--
                        
                        <!-- mark the page if it is currently selected for accessibility -->
                        --%><c:if test="${node.isSelected}"><span class="wpthemeAccess">
                        <portal-fmt:text key="currently_selected" bundle="nls.commonTheme"/></span></c:if><%--
    
                    --%></span><%-- end page title markup --%>
                </a>
            </li>
        </c:forEach>
    </portal-navigation:uiNavigationModel>
    ```

    Required parameters:

    -   **var**

        This mandatory attribute specifies the name of a scripting variable that is exposed in the body of the tag. This variable is a [uiNavigationModel](../dev-theme/themeopt_el_bean_ui_nav_mod.md) EL Bean.

    -   **mobileDeviceClassTest**

        This attribute is a [device class equation](../dev-theme/themeopt_devclass_equat.md), that describes whether the request is part of a mobile device or not.

    The following parameters are all optional. If they are not provided, the information is automatically fetched from the request. In some cases, the selection information is not available and must be passed in explicitly. Use the following attributes in that case.

    -   **showHidden**

        Defines whether to show the hidden pages or not.

    -   **selectedNodeID**

        String; specifies the selected page ID.

    -   **selectionPath**

        String; list of page IDs defining the selection path, or breadcrumb, in one string. The delimiter can be configured through selectionPathSeparator.

    -   **selectionPathSeparator**

        String; is the delimiter that is used to parse the selectionPath.

    Returns: Each individual navigation node that is returned by the uiNavigationModel is also a wrapper around the NavigaitonNode EL Bean and provides additional information, such as isHidden, isDraft, isInSelectionPath, and isSelected. For more information, see [uiNavigationModel](../dev-theme/themeopt_el_bean_ui_nav_mod.md).

-   **<portal-navigation:url command="ChangeLanguage"\>**

    This tag is used to change the active language in the navigational state in which the URL is generated.

    The following code example uses this tag to change the language to German.

    ```
    <a href='<portal-navigation:url 
             command="ChangeLanguage"><portal-navigation:urlParam name="locale" 
             value="de"/></portal-navigation:url>'>Diese Seite in deutsch
    </a>
    ```

-   **<portal-navigation:urlParam name="parameter\_name" value="parameter\_value"\>**

    This tag is used to add parameters to the parent URL. Parent tags include `<portal-navigation:url/>` and `<portal-navigation:urlGeneration/>`. Parameters added to the `<urlGeneration/>` tag occur as unscoped query parameters unless the attributes specified on `<urlGeneration/>` specify otherwise. Parameter handling depends on the target of the URL. If the URL points to a page, the parameters are visible to all HCL portlets on that page. Parameters are not visible to standard portlets if the URL does not point specifically to that portlet.

    Attributes are as follows:

    -   **name**

        This attribute is required. It indicates the name of the parameter.

    -   **value**

        This attribute is required. It indicates the value of the parameter.

    -   **type**

        This attribute is optional. It indicates one of the following types:

        -   **query**

            The name-value pair is added to the URL as a query parameter. It is the default value if type is not specified.

        -   **render**

            The parameter is available as a render parameter for the portlet.

        -   **action**

            The parameter is available as an action parameter for the portlet.

-   **<portal-navigation:urlGeneration attribute="value"\>**

    This tag creates a URL to pages or portlets. The tag is conditional. If the URL cannot be found, the body of the tag is not evaluated. Inside the body of the tag, the <% wpsURL %\> scripting variable can be used to write the URL directly to the output stream. For example:

    ```xmp
    <a class="wpsToolBarLink" href='<% wpsURL.write(out); %>'>My page</a>  
    ```

    Attributes are as follows:

    -   **home="public\|protected"**

        This attribute creates a URL that points to the public or protected \(logged in\) page of the portal.

    -   **accessControlCheck="permission\_constant"**

        This attribute indicates the permissions to be checked. The following constants can be used:

        -   CreatePage
        -   EditLayout
        -   DeletePage
        -   AssignRoles
        -   NoCheck
        -   EditApplicationProperties
        -   EditApplicationLayout
        -   AssignApplicationMember
        -   ManageApplicationRoles
        -   SaveAsTemplate
        If the user does not have the required permission, the body of the tag is not run. If the user has the necessary permissions, the current page ID is appended to the URL. If the parameter is set to `'NoCheck'`, the current page ID is appended without checking the access control permissions. This is necessary for the target page or portlet to create a back button.

    -   **actionName="name"**

        This attribute indicates the name of an action that would be called by the URL to an IBM portlet. The following example generates a URL that calls the `myAction` action of the portlet, which is contained by `my.LayoutNode` on `my.ContentNode`.

        ```
        <portal-navigation:urlGeneration actionName="myAction" contentNode="my.ContentNode" 
                                  layoutNode="my.LayoutNode">
               <a href="<%wpsURL.write(out);%>">Link to portlet with myAction</a>
            </portal-navigation:urlGeneration>   
        ```

        The following code is from the `actionPerformed()` aspect of the portlet that handles the `myAction` action.

        ```
             PortletURI actionURL = portletResponse.createURI();
             actionURL.addAction("myAction");     
        ```

    -   **allowRelativeURL="true\|false"**

        This attribute indicates whether a fully qualified or relative URL is generated. The default is set by the property `com.ibm.portal.state.accessors.url.URLContext.enableRelative` in the `StateManagerService`.

    -   **contentNode="id\|name"**

        This attribute indicates the ID or unique name of the page. The name or ID of the content node is also used to specify the page where the portlet can be found.

    -   **keepNavigationalState="true\|false\|auto"**

        If you set this attribute to `false`, the current navigational state that includes all portlet modes, states, and render parameters is not included in the URL, and the portal is reset to its default state. If this value is set to `true`, the navigational state is included. True is the default setting. If it is set to auto, the configuration determines if the navigational state is included. See the descriptions for `stateless.urls.enabled` and `generate.stateless.urls` in *Configuration Service*.

    -   **layoutNode="id\|name\|wp.currentSelectedPortlet"**

        This attribute indicates the ID or unique name of the control that holds the portlet. It must be used in combination with `contentNode` to identify the page where the portlet is located. The value `wp.currentSelectedPortlet` can be used inside a control when you generate a URL to the portlet within that control.

    -   **newWindow="true\|false"**

        This attribute creates a session partition. For portlet URLs, you can use it if you want to display the portlet either in a new window or in an iFrame. The default value is false. The portlet window state for the addressed portlet in the new window is set to maximized. The portlet mode is set to the value of the current parent window. In the `control.jsp` of skins that use iFrames, the `<portal:if/>` tag can be used to distinguish between rendering in the main window or in an iFrame or detached window.

    -   **portletMode="view\|help\|edit\|edit\_defaults\|configure"**

        For URLs to a portlet as specified by the parameter `layoutNode`, this attribute sets the portlet mode. This parameter is ignored if the parameter `layoutNode` is not set. Specifying `portletMode="edit_defaults"` opens the portlet in the Edit defaults mode directly.

    -   **portletParameterType="render\|action"**

        This attribute generates URLs to a standard portlet's render or action processing methods. If this attribute is omitted, the render method of the portlet is called. Any parameters added to the body of the tag that uses `<portal-navigation:urlParam/>` are passed to the corresponding method.

    -   **portletWindowState="maximized\|minimized\|solo\|normal"**

        For a portlet, this attribute indicates the state of the portlet window when it is displayed. If portlet state is not specified, the page is shown with the previous state of the portlet. This parameter is ignored if `layoutNode` is not set.

        **Note:** Use caution when you use this tag to address portlets in solo state. The portlet must be able to exist in solo state that uses the `createReturnURI()` method. If a portlet without this method is placed in solo state, then users are forced to log out or close their browser windows to return to the portal.

    -   **themeTemplate="template\_name"**

        This specifies the theme template that is taken for rendering the requested page. Can be referenced as either a JSP or a class and is used as theme for this URL.

    -   **normalize="true\|false"**

        This attribute indicates that the URL to be generated must be normalized. If more parameters are set, the normalization is run first and afterward the other state modifications are accomplished. Setting the "normalize" parameter to true normalizes the URL with the same XSL file used to normalize URLs for search engines. The normalized representation of the URL can also be used to bookmark a page. The following example shows how to use the tag with this attribute:

        ```
        <portal-navigation:urlGeneration normalize="true" >
              <a href="<% wpsURL.write(out); %>">
                This is the normalized URL of the current 
                selected page.
              </a>    
        </portal-navigation:urlGeneration>
        ```

        If more parameters are set for the `<portal-navigation:urlGeneration>` tag the XSL transformation is run first and all other state modifications is accomplished afterward.

    -   **forceAbsolute = "true\|false"**

        This attribute is optional. It specifies whether the URL that is generated by this tag is to be absolute or not. If you set this attribute to true, absolute URLs are enforced; in this case other settings that affect the generation of URLs might be overridden.

-   **<portal-navigation:url\>**

    Creates a portal URL depending on the specified attribute. Attributes are as follows:

    -   **home="public\|protected"**

        This attribute creates a URL pointing to the public or protected \(logged in\) page of the portal.

    -   **screen="screen\_name"**

        This attribute creates a URL pointing to the screen name to be displayed.

    -   **command="LoginUser\|LogoutUser\|ShowTools"**

        This attribute creates a URL that issues the command to the portal. `command="LoginUser"` is used for the login panel, and `command="LogoutUser"` is used for the logout button. The `"userid"` and `"password"` parameters must be carried with a login URL. `command="ShowTools"` toggles the value of the showTools indicator. See the `<portal-logic:if/>` tag `"showtools"` attribute in for an example.

    -   **commandParam="parameter\_name"**

        This attribute directs the portal engine to obtain the actual command to run from an HTTP request parameter instead of on the URL directly. The name of the parameter is the value of the commandParam attribute. This is useful in situations where different commands need to be conditionally run yet only one URL can be specified. Such is the case when using a `<form>` tag with a `<select>`. This enables use of the HTML form without requiring JavaScript. For example:

        ```xmp
           <form name="someFormName" method="GET" style="margin-bottom: 0"
                       action='<portal-navigation:url commandParam="requestParamName"/>'>
                   <select name="requestParamName" onchange="javascript: this.form.submit(); ">
                           <portal-navigation:someLoop>
                                   <option value="<%= theUrl %>" >Some title goes here
                           </portal-navigation:someLoop>
        
                   </select>
                   <noscript>
                           <input type="image" border=0 align=absmiddle src='go.gif'/>Go
                   </noscript>
           </form>        
        ```

        The previous code example works both with and without JavaScript enabled.

    -   **ssl="yes\|no\|true\|false"**

        This attribute creates a secure URL \(HTTPS\).

    -   **forceAbsolute = "true\|false"**

        This attribute is optional. It specifies whether the URL that is generated by this tag is to be absolute or not. If you set this attribute to true, absolute URLs are enforced; in this case other settings that affect the generation of URLs might be overridden.

    Example: The following example shows part of a user login form that uses the `<portal:url>` tag to process input fields, user ID, and password.

    ```xmp
        <FORM method="POST"
             action='<portal-navigation:url command="LoginUser"/>'
             enctype="application/x-www-form-urlencoded"
             name="LoginPage">
    ```

-   **<portal-navigation:navigationUrl type="link\|expand\|collapse\|launch" varname="node\_name" var="variable\_name"/\>**

    Creates URLs for navigation nodes. The tag is used inside the body of the <portal-navigation:navigationLoop\> tag and outputs links for the current navigation node according to the type attribute.

    Attributes are as follows:

    -   **type**

        Use one of the following values:

        -   **type="link"**

            This attribute creates a URL to change the selected node.

        -   **type="expand"**

            This attribute creates a URL that expands the node to reveal its child nodes. This is intended for expanding the navigation tree.

        -   **type="collapse"**

            This attribute creates a URL that collapses the node to conceal its child nodes. This is intended for collapsing the navigation tree.

        -   **type="launch"**

            This attribute creates a URL that either starts a page if all conditions for the page launch are fulfilled for the navigation node or if just like in the selection URL in `type="link"`.

        **Note:** The global state of the portal navigation trees is collapsed by default \(with some exceptions, such as the Portal Administration navigation\). You can configure the default state of the portal navigation trees to expand all nodes by setting the Portal Configuration Service property `navigation.expansion.defaultstate` to `true`.

    -   **varname**

        This attribute specifies an object of type `com.ibm.portal.navigation.NavigationNode` for which the URL is to be generated. The attribute is optional.

    -   **var**

        This attribute specifies the name of a scripting variable that is shown in the body of the tag. The attribute is optional. The variable shows an object that implements `com.ibm.portal.DisposableURL` that can be used to stream the URL to the output. If the content node that is referenced by the navigation node is an internal URL, the body is evaluated only if the target of the internal URL is accessible.

    -   **forceAbsolute = "true\|false"**

        This attribute is optional. It specifies whether the URL that is generated by this tag is to be absolute or not. If you set this attribute to true, absolute URLs are enforced; in this case other settings that affect the generation of URLs might be overridden.

    -   **keepNavigationalState="true\|false\|auto"**

        If this attribute is set to false, the current navigational state \(including all portlet modes, states, and render parameters\) is not included in the URL and the portal is reset to its default state. If set to true, which is the default, navigational state is included. If it is set to auto, the configuration determines if the navigational state is included. See the descriptions for `stateless.urls.enabled` and `generate.stateless.urls` in *Configuration Service*.

    To generate the title or description of a navigation node, use the `<portal-fmt:title/>` or the `<portal-fmt:description/>` tags. This tag is used only in theme JSPs.

-   **<portal-navigation:navigationShift by="number" maxPages="number"\>**

    This tag is used in the navigation to create a URL that scrolls to the next set of page links when the number of available pages exceeds maxPages. The by attribute indicates the number of page links to scroll. If this tag is not used, all page links for the current level are rendered.

    This tag is nested in the <portal-navigation:navigation\> tag and requires values for the startLevel and stopLevel attributes of the <portal-navigation:navigation\> tag for its correct functioning.

-   **<portal-navigation:navigationLoop\>**

    This tag traverses through the navigation model. This tag is nested inside of the <portal-navigation:navigation/\> tag when used. This tag indicates the part of the markup that is repeated once for each navigation node. There are no attributes for this tag. The body of this tag is run for each navigation node. This tag makes several scripting variables available for obtaining information for the navigation. These scripting variables are accessible only within the body of the tag.

-   **<portal-navigation:navigation\>**

    This tag initializes a set of objects and makes them available through scripting variables. These objects are required for the rendering process of the navigation. The scripting variables are accessible only within the body of the tag. The settings of the `startLevel` and `stopLevel` attributes determine whether the content of the navigation tag is evaluated. The navigation tag uses an "in-order" traversal of the navigation tree to select the nodes.

    Attributes are as follows:

    -   **startLevel**

        Optional. The level on which this navigation is to begin showing information. If no start level is given, this tag will start at the navigation node after the levels that where shown by other JSPs. Otherwise, the default is level 1.

    -   **stopLevel**

        Optional. The level on which this navigation is to stop showing information. Default is to render all levels.

    -   **computeNumLevelsToDisplay**

        Optional. Compute the number of levels that are shown by this navigation. When this attribute is set to true, a scripting variable is made available inside the body of the navigation tag named `wpsNumLevelsToDisplay` of Java type java.lang.Integer.

    -   **scopeUniqueName**

        Specifies where to start the rendering of the portal navigation. The expected value is a unique name or string representation of the navigation node's ObjectID. This also replaces the `<portal:favoritesLoop/>` tag for enabling Organize Favorites functionality. The following code example shows how to use the `<portal-navigation:navigation>` with the `scopeUniqueName` attribute to enable Organize Favorites:

        ```
        <portal-navigation:navigation scopeUniqueName="wps.Favorites">
           <portal-navigation:navigationLoop>
             <a href='<portal-navigation:navigationUrl type="link"/>'
                title='<portal-fmt:description varname="<%=wpsNavNode%>"/>'>
                   <portal-fmt:title varname="<%=wpsNavNode%>"/>
             </a>
           </portal-navigation:navigationLoop>
         </portal-navigation:navigation>
        ```

-   **<portal:favoritesLoop/\>**

    This tag is deprecated and must be replaced by using the `<portal-navigation:navigation/>` tag with its `scopeUniqueName` attribute.

    The following code example uses this tag to create the Organize Favorites functionality. To use this code, you must place it within the themes that you want to have this functionality.

    ```
    <%@ taglib uri="/WEB-INF/tld/portal.tld" prefix="portal" %>
    <portal-logic:if loggedIn="yes" notScreen="SelfcareUserForm,SelfcareUserConf">
    <table border="0" cellspacing="0" cellpadding="0" >
    	<tr>
    	<td align="<%=bidiAlignRight%>" valign="middle" dir="ltr" nowrap>
    	<%
    	boolean firstItem = true;
    	%>  					  
    	<table border="0" cellpadding="0" cellspacing="0" <%= bidiDirAttr %> >
    	<tr>
    	<td valign="middle">
    	<form tabIndex="8" name="wpsFavoritesSelectionForm" method="GET" 
    	 style="margin-bottom: 0"> 
    	 action='<portal-navigation:url commandParam="favoritesCommand"/>'>	<select name="favoritesCommand" onchange="document.location.href=  
    		this.options[this.selectedIndex].value">"javascript: if 
      (this.options[this.selectedIndex].value.charAt(0) == '@')
     { 			window.open(this.options[this.selectedIndex].value.substring(1),
      '_blank'); this.selectedIndex=0; return false;} 
     else {	this.form.submit(); return false; }">
    			<option value='#' selected><wps:text key='link.favorites.myfavorites'
    			bundle='nls.engine'/>
    
    			<portal-logic:if pageBookmarkable="true">
    			<option value='<portal-navigation:url command="AddBookmark"
    			alias="wps.My Favorites"/>'><portal-fmt:text key='link.favorites.add'
    			bundle='nls.engine'/>
    			</portal-logic:if>
    
    			<portal-navigation:urlGeneration contentNode="wps.Organize Favorites"
    			portletWindowState="Normal" pacCheck="NoCheck">
    			<option value='<% wpsURL.write(escapeXmlWriter); %>' >
    			<portal-fmt:text key='link.favorites.orgainize' bundle='nls.engine'/>
    			</portal-navigation:urlGeneration>
    
    			<option value='#'>------------
    					
    				<portal:favoritesLoop>
    				<% 
    				// wpsFavoritesURL is null for folders in the list of favorites
    				if (wpsFavoritesURL != null)
    				{
    				// Check the favorite type.  If it is an external URL, add a symbol to the URL
    				// so the JavaScript on the select can detect when to open a new window
    				// wpsFavoritesType may be null.  wpsFavoritesType=1 means external URL
    					if ("EXTERNALURL".equals(wpsFavoritesType))
    					wpsFavoritesURL = "@" + wpsFavoritesURL;
    				//Phone number links are only supported on WML devices... and
    					favorites are not markup-specific.
    				// wpsFavoritesType may be null.  wpsFavoritesType=2 means Phone Number
    					if (!"2".equals(wpsFavoritesType))
    					{
    					%>
    					<option value="<%= wpsFavoritesURL %>">
    					<% for (int favSpace=1; favSpace < wpsFavoritesLevel.intValue();
    					favSpace++) {%>&nbsp;&nbsp;&nbsp;&lt;% } %><%= wpsFavoritesTitle %>
    					<%
    					}
    					}
    					else
    					{
    					%>
    					<option value="#" ><% for (int favSpace=1; 
    					favSpace < wpsFavoritesLevel.intValue();
    					favSpace++) {%>&nbsp;&nbsp;&nbsp;&lt;% } %>--<%= wpsFavoritesTitle %>--
    					<%
    					}
    					%>
    					</portal:favoritesLoop>
    				</select>
    				<noscript>
    				<input type="image" border="0" align="absmiddle"
    				src='<portal-logic:urlFindInTheme file="go.gif"/>'/>
    				<span class="wpsPlaceBarLink" >&nbsp;&lt;portal-fmt:text key="go"
    				bundle="nls.button"/></span>
    				</noscript>
    				</form>
    				</td>
    			</tr>
    		</table>
    		</td>
    	</tr>
    </table>
    </portal-logic:if>
    ```



