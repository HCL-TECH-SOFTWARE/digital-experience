# <portal-logic/\> tags

The <portal-logic/\> tags are used to provide tags for conditional logic.

-   **<portal-logic:find\>**

    Used to access the portal-wide find URL that is specified in **Portal Settings**. The tag is conditional. If no URL is set, the body of the tag is not evaluated. A scripting variable that is called <% wpsPortalFindURL %\> is available inside the body of the tag for accessing the URL. This tag can be used in both theme and skin JSPs.

-   **<portal-logic:if attribute="value"\>**

    Through the attributes of this tag, several conditions can be checked. If the condition is true, the content of the tag's body is written to the page. Otherwise, the content is skipped. More than one condition can be evaluated. For example, the user must be logged in and the Home screen must be active for the content of the following tag to be rendered:

    **Note:** All earlier attributes that started with "not" are deprecated. Use the <portal-logic:unless/\> tag instead of these attributes.

    ```xmp
    
        <portal-logic:if loggedIn="yes" screen="Home">
    
           <!--  content area -->
    
        </portal-logic:if>
        
    ```

    Attributes of the <portal-logic:if/\> tag:

    -   **capableOf="capability"**

        Indicates whether the client supports the specified capability. capability can be one of the following values:

        -   HTML\_2\_0
        -   HTML\_3\_0
        -   HTML\_3\_2
        -   HTML\_4\_0
        -   HTML\_CSS
        -   HTML\_FRAME
        -   HTML\_JAVA
        -   HTML\_JAVASCRIPT
        -   HTML\_NESTED\_TABLE
        -   HTML\_TABLE
        -   WML\_1\_0
        -   WML\_1\_2
        -   WML\_TABLE
    -   **deviceClass="deviceClass"**

        Compares whether the indicated device classes match the current device class. The value is a string that represents the expected device classes, and can be a single device class name or an equation of multiple device class names that use `+` for AND, `/` for OR, `!` for NOT, and parentheses.

        Example values:

        -   `smartphone`
        -   `smartphone/tablet`
        -   `smartphone+!android`
        -   `(smartphone+ios)/(tablet+ios)`
        If you have a syntax error in your equation, such as mismatched parentheses, an exception with details of the syntax error are written to the SystemOut.log file, and the attribute condition is shown as false. So, if the content of the tag's body is being skipped unexpectedly, check the log.

    -   **locale="locale"**

        Indicates whether the locale of the client is that of the specified locale \(or subtype of the specified locale\). You can specify a comma-separated list, such as en, en\_US.

    -   **loggedIn="yes\|no"**

        Indicates whether the user is logged in. For example, the following code displays a login link if the user is not logged in:

        ```xmp
        
        
           <%-- login button --%>
           <portal-logic:if loggedIn="no" notScreen="Login">
              <td class="wpsToolBar" valign="middle" nowrap>
                 <a class="wpsToolBarLink" 
                    href='<portal-navigation:url home="public" screen="Login" ssl="false"/>'>
                       <portal-fmt:text key="link.login" bundle="nls.engine"/>
                 </a>
              </td>
           </portal-logic:if>
        
            
        ```

    -   **navigationAvailable="yes\|no"**

        Indicates whether a navigation is available.

    -   **newWindow="yes\|no"**

        Indicates whether the portlet is rendered in a separate browser window or iFrame from the portal \(HTML only\).

    -   **nodeInSelectionPath="yes\|no"**

        Checks whether a page is selected. This means that the page is in the selected path by the user of which the content is shown.

    -   **pageAvailableNext="yes\|no"**

        Checks if a subsequent set of pages is available to be accessed from the navigation.

    -   **pageAvailablePrevious="yes\|no"**

        Checks if a previous set of pages is available to be access from the navigation. For example, use this tag in combination with <portal-navigation:navigationShift\> to render a scroll icon. The scroll icon displays when the number of user-defined pages exceeds the number of displayed page tabs. This condition behaves contrary to the pageAvailableNext attribute.

    -   **pageCompletelyActive="yes\|no"**

        Indicates whether the page and its parents are active. The following example displays a message if the page is not active.

        ```xmp
        
        
            <portal-logic:if pageCompletelyActive="no">
               <p align="center" class="wpsFieldErrorText"><b><br>
                  &gt;&gt;&gt;
                        <portal-fmt:text key="info.pagenotcompletelyactive" bundle="nls.engine"/>
                  &lt;&lt;&lt;
               <br></b></p>
            </portal-logic:if>
            
        ```

    -   **pageBookmarkable="true\|false"**

        Renders its contents if the page can be bookmarked. A page can be set to bookmark with **Manage pages**. The following example provides an "Add to favorites" option in a select list. Users can bookmark the current page, if it can be bookmarked.

        ```xmp
        
        
            <portal-logic:if pageBookmarkable="true">
               <option value='<portal:url command="AddBookmark" alias="Favorites"/>' >
               <portal-fmt:text key='link.favorites.add' bundle='nls.engine'/>
            </portal-logic:if>
            
        ```

    -   **portletMaximized="yes\|no"**

        Renders its contents if the portlet is maximized. Use this call inside a JSP skin.

    -   **portletMode="edit\|view\|configure\|help"**

        Checks if the portlet is in one of the modes. This tag is most useful in a customized skin.

        **Finding theme resources:** See the *Location of theme resources* link in the Related section.

    -   **portletState="portlet\_state"**

        Checks if the portlet is in the indicated state. Portlet states are `normal`, `maximized`, and `minimized`. For example, in `Control.jsp`, the following code sets the `tableHeight` variable to 100%.

        ```xmp
        
        
            <portal-logic:if portletState="Normal,Maximized">
                <% tableHeight = "height=\"100%\""; %>
            </portal-logic:if>
            
        ```

    -   **portletSolo="yes\|no"**

        Checks whether the portal is displaying a portlet in solo state. In the following example from `Default.jsp`, the navigation are hidden when the current portlet is displayed in solo state.

        ```xmp
        
               <portal-logic:if portletSolo="no">
                  <%@ include file="./topNav.jspf" %>                              
                  <%@ include file="./sideNav.jspf" %>
               </portal-logic:if>
                                
        ```

    -   **problem="problem"**

        Renders its contents if one of the following problems occurred.

        -   content.not.available
        -   login.invalid
        -   password.invalid
        -   portlet.not.active
        -   portlet.not.authorized
        -   portlet.not.available
        -   portlet.title.not.available
        -   userID.invalid
    -   **resumeLevel="0\|1\|2"**

        Used in the `Login.jsp` screen to write the content of the tag if the value of this attribute is equal to the setting of the persistent.session.level key in the `ConfigService`.

    -   **resumeOption="0\|1"**

        Used in the `Login.jsp` screen to write the content of the tag if the value of this attribute is equal to the setting of the persistent.session.option key in the `ConfigService`.

    -   **screen="screen\_name"**

        Checks the value of the current screen name. Use a comma to separate multiple screen names. In the following example, the content of the tag is displayed only when the selected screen is Home, LoggedIn, or LoggedOut.

        ```xmp
            <portal-logic:if navigationAvailable="yes" screen="Home,LoggedIn,LoggedOut">    
        
            ....
        
            </portal-logic:if>    
        ```

    -   **selection**

        Specifies the unique name or object ID of the currently selected page. For example:

        ```xmp
            <portal-logic:if selection="ibm.portal.Home">
              You are on Home
            </portal-logic:if>    
        ```

    -   **showTools="yes\|no"**

        Indicates whether to display more controls for the portlet title bar and page tabs. In the following example, the `show_tools_off.gif` icon is displayed for the condition when showTools="no".

        ```xmp
            
              <portal-logic:if showTools="no">
               <% if (firstButton) { firstButton = false; } else { %> | <% } %>
                 <a href='<portal-navigation:url command="ShowTools"/>'> 
                    <img border="0" align="absmiddle" width="16" height="19" 
                        src='<portal-logic:urlFindInTheme file="show_tools_off.gif"/>' 
                        alt='<portal-fmt:text key="link.show.tools" bundle="nls.engine"/>' 
                        title='<portal-fmt:text key="link.show.tools" bundle="nls.engine"/>'
                    </a>
              </portal-logic:if>
              <portal-logic:if showTools="yes">
               <% if (firstButton) { firstButton = false; } else { %> | <% } %>
                 <a href='<portal-navigation:url command="ShowTools"/>'> 
                    <img border="0" align="absmiddle" width="16" height="19" 
                         src='<portal-logic:urlFindInTheme file="show_tools_on.gif"/>' 
                         alt='<portal-fmt:text key="link.hide.tools" bundle="nls.engine"/>' 
                         title='<portal-fmt:text key="link.hide.tools" bundle="nls.engine"/>'</a>
              </portal-logic:if>   
        ```

        For either condition, the <portal-navigation:url command="ShowTools"/\> command is used to change the value of showTools. It allows the icon on the portal page to be used as a toggle. This condition is also checked in `ShowTools.jsp` to determine whether to render the move and delete portlet icons in the portlet title bar.

    -   **userImpersonated="true\|false"**

        Used to access another user's system as though you are that user. Users such as support specialists can use the impersonation feature to find issues and errors. For example, if a portal administrator encounters a problem that they cannot resolve, a support specialist can use the impersonation feature and access that portal administrator's system to determine a solution to the problem.

        For more information about the user impersonation feature, see Administering user impersonation.

-   **<portal-logic:pageMetaData/\>**

    Used to access metadata of the currently rendered page. The tag has two attributes:

    -   **varname**

        This attribute is mandatory and specifies the name of the variable that displays the metadata inside the body of the tag. The variable provides an object that implements `com.ibm.portal.MetaData`.

    -   **type**

        This attribute is optional. Allowed values are `direct` and `aggregated`. The value `aggregated` is the default. If the type attribute is set to `direct`, only the metadata that is set specifically for the page are shown, otherwise the metadata of the page as provided by the content metadata model are used.

    The Content metadata model is described in more detail in the Model SPI overview topic. The following example outputs a table with all names and values of the aggregated metadata of the current page.

    ```
    <portal-logic:pageMetaData varname="pageMetaData">
      <table>
        <tr><th>Name</th><th>Value</th></tr>
        <c:forEach var="metaItem" items="${pageMetaData}">
          <tr><td>${metaItem.key}</td><td>${metaItem.value}</td></tr>
        </c:forEach>
      </table>
    </portal-logic:pageMetaData>
    ```

-   **<portal-logic:unless\>**

    This tag operates in contrast to the <portal-logic:if\> tag. Through the attributes of this tag, several conditions can be checked. If the condition is true, the content of the tag is not written to the page. Otherwise, the content is written. More than one condition can be evaluated. The following list of attributes can be evaluated. For more information, see the corresponding description for each attribute under the <portal-logic:if\> tag.

    -   [capableOf](#capableof)
    -   [locale](#if_locale)
    -   [loggedIn](#if_loggedin)
    -   [newWindow](#if_newwindow)
    -   [navigationAvailable](#if_navigation)
    -   [pageAvailableNext](#pageavailablenext)
    -   [pageAvailablePrevious](#pageavailableprevious)
    -   [nodeInSelectionPath](#if_nodeinsel)
    -   [portletMaximized](#if_portletmaximized)
    -   [portletMode](#portletmode)
    -   [portletSolo](#portletsolo)
    -   [portletState](#portletstate)
    -   [problem](#if_problem)
    -   [screen](#screen)
-   **<portal-logic:urlFind\>**

    Generates a URL pointing to a file. The resource is searched under different paths that are based on the markup and locale that is supported by the client and the specified attributes of the tag.

    Attributes

    -   `root="root"`
    -   `path="path"`
    -   `file="file"`

        This attribute is required

    -   `allowRelativeURL="true\|false"`
    The first place where the resource is found is used to construct the URL. The following search order that is used:

    1.  Root path
    2.  Markup name
    3.  Path
    4.  Markup version
    5.  Locale in diminishing sequence
    6.  File name
    Read *Aggregation* for more information about how the portal server locates resources. The allowRelativeURL attribute indicates whether a fully qualified or relative URL is generated.

-   **<portal-logic:urlFindInSkin file="file\_name" id="identifier"\>**

    Similar to <portal-logic:urlFind\>, this tag generates a URL that points to a file contained in the theme WAR file.

    **Finding theme resources:** See the *Location of theme resources* link in the Related section.

    The skin is taken from the user's or system's settings. The file attribute is required.

    When id is specified, the tag initializes a scripting variable with the value normally written out and nothing is written to the output stream. The value of the id attribute is the name of the scripting variable.

    Attribute:

    -   **forceAbsolute = "true\|false"**

        This attribute is optional. It specifies whether the URL that is generated by this tag is to be absolute or not. If you set this attribute to true, absolute URLs are enforced; in these case other settings that affect the generation of URLs might be overridden.

-   **<portal-logic:urlFindInTheme file="file\_name" id="identifier"\>**

    Similar to <portal-logic:urlFind\>, this tag generates a URL that points to a file contained in the theme WAR file.

    **Finding theme resources:** See the *Location of theme resources* link in the Related section.

    The theme is taken from the user or system settings. The file attribute is required.

    When id is specified, the tag initializes a scripting variable with the value normally written out and nothing is written to the output stream. The value of the id attribute is the name of the scripting variable.

    Attribute:

    -   **forceAbsolute = "true\|false"**

        This attribute is optional. It specifies whether the URL that is generated by this tag is to be absolute or not. If you set this attribute to true, absolute URLs are enforced; in these case other settings that affect the generation of URLs might be overridden.


**Parent topic:**[Tags used by the portal JSPs](../dev-portlet/dgn_ptltld.md)

**Related information**  


[Administering user impersonation ](../admin-system/impers_user.md)

[Understanding the Portal 8.5 modularized theme](../dev-theme/themeopt_defaultparts.md)

