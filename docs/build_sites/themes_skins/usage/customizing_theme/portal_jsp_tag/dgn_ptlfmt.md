# <portal-fmt/\> tags

The <portal-fmt/\> tags are used to provide enhanced portal formatting capabilities.

The following table provides a brief description of each tag.

**Note:** Do not use portal tags in portlet JSPs. The following tags are only for use in theme and skin JSPS.

|Tag|Description|
|---|-----------|
|[<portal-fmt:answer/\>](#answer)|Returns the answer text for a key in the specified language. This tag can be used only within a <portal-skin:portletRender/\> or <portal-core:pageRender/\> tag.|
|[<portal-fmt:bidi/\>](#if_bidi)|This tag is used to support the display of bidirectional languages.|
|[<portal-fmt:description/\>](#navigationdesc)|Provides the description of an object that implements the `Localized` interface. This tag can be used in both theme and skin JSPs.|
|[<portal-fmt:identification/\>](#ident)|Transforms a String representation of the ObjectID into an ObjectID. Also transforms an ObjectID into a String representation of the ObjectID.|
|[<portal-fmt:problem/\>](#wps_problem)|Returns the problem text for a key in the specified language. This tag can be used only within a `<portal-skin:portletRender/>` or `<portal-core:pageRender/>` tag.|
|[<portal-fmt:text/\>](#wps_text)|Returns the text for a key in the specified language. For information about how to set the bundle refer to the portletExt:setBundle tag under [JSP tags for standard portlets](jsrjsp.md).|
|[<portal-fmt:textParam/\>](#textparam)|If the text that is retrieved contains placeholders in the form of "\{0\}", "\{1\}", "\{2\}", it can be set with this tag. This tag can be used only in the body of the `<portal-fmt:text/>` tag.|
|[<portal-fmt:title/\>](#navigationtitle)|Provides the title of an object that implements the interface. This tag can be used in both theme and skin JSPs.|
|[<portal-fmt:user/\>](#user)|If the user is logged in, this tag returns one of the specified values of attribute.|

## Detailed descriptions of the <portal-fmt/\> tags

The following section provides detailed descriptions of the <portal-fmt/\> JSP tags:

-   **<portal-fmt:answer bundle="bundle"\>**

    Returns the answer text for a key in the specified language. The following keys can be looked up in the resource bundle.

    -   content.not.available.answer
    -   login.invalid.answer
    -   password.invalid.answer
    -   userid.invalid.answer
    -   portlet.not.active.answer
    -   portlet.not.authorized.answer
    -   portlet.not.available.answer
    -   portlet.title.not.available.answer
    Each key corresponds to a problem key \(without the `.answer` suffix\). See the [<portal-fmt:problem\>](#wps_problem) tag for a complete description of each problem and an example.

-   **<portal-fmt:bidi dir="rtl\|ltr" attribute="portlet" locale="locale"\>**

    This tag is used to support bidirectional languages. Bidirectional languages contain text that reads in both directions. For example, URLs, code samples, or directory and file names can be read in the opposite direction of the rest of the text.

    Attributes:

    -   `dir`

        Indicates the normal direction of text in the language. This attribute is required.

        -   For `dir="rtl"`, the tag content is written only if the client's locale belongs to a bidirectional language. This is the default setting if `dir` is not specified.
        -   For `dir="ltr"`, the tag content is written only if the client's locale does not belong to a bidirectional language.
    -   `attribute="portlet"`

        Indicates that the text is for the title of a portlet. This attribute is optional.

    -   locale

        The tag content is written only if the language belongs to the bidirectional languages that are defined by the portal. If attribute is specified, locale is ignored.

    HCL Portal JSPs use this tag in a `BidiInclude.jsp` that creates the following scripting variables, which, in many cases, are easier to use than the `<portal-fmt:bidi/>` tag.

    -   **<%=bidiAlignRight%\>**

        Resolves as the value `left` for bidirectional languages, `right` for all other languages. This is primarily intended for text alignment, such as in a table cell.

    -   **<%=bidiAlignLeft%\>**

        Resolves as the value `right` for bidirectional languages, `left` for all other languages. This is primarily intended for text alignment, such as in a table cell.

    -   **<%=bidiImageRight%\>**

        Resolves as the value `Left` for bidirectional languages, `Right` for all other languages. This is primarily intended to append the value to the file name for an image. For example, the theme directory provides two image files that can be used for the portlet window, `Album_Border_TopLeft.gif` and `Album_Border_TopRight.gif`.

    -   **<%=bidiImageLeft%\>**

        Resolves as the value `Right` for bidirectional languages, `Left` for all other languages. This is primarily intended to append the value to the filename for an image. For example. The theme directory provide two image files that can be used for the portlet window, `Album_Border_TopLeft.gif` and `Album_Border_TopRight.gif`.

    -   **<%=bidiImageRTL%\>**

        Resolves to the value \_rtl for bidirectional languages, null for all other languages. This is primarily intended for graphic images. For example, the skin previews provide two image files to preview the skin, `preview.gif` and `preview_rtl.gif`.

    The following example shows how a directional image is invoked. The <%=bidiImageRTL%\> scripting variable is used to invoke the appropriate icon, for example, `tab_next_rtl.gif`, when the locale belongs to a bidirectional language.

    ```xmp
    
    
           <img alt="<portal-fmt:text key="link.next" bundle="nls.engine"/>" 
                src="<portal-logic:urlFindInTheme file='<%="tab\_next"+bidiImageRTL+".gif"%\>'/>" 
                border="0" align="absmiddle">
    
    
    ```

-   **<portal-fmt:description locale="locale" varname="scripting\_variable" /\>**

    Provides the description of the object that is specified by `varname` or of the navigation node that is set in the `<portal-navigation:navigationLoop/>` tag. This tag can be used in both theme and skin JSPs.

    Attributes

    -   **locale**

        Optional. Overrides the current language setting.

    -   **varname**

        Optional. Specifies the name of the scripting variable holding the object. The <portal:navigation/\> tag sets this object to <%=wpsNavNode%\>.

    ```xmp
    
    <portal-navigation:navigationLoop>
      <!-- write the description of the node in the current locale -->
        <portal-fmt:description varname="<%=wpsNavNode%>"/>
      <!-- write the description of the node in chinese -->
        <portal-fmt:description varname="<%=wpsNavNode%>" locale="zh"/>
    </portal-navigation:navigationLoop>
    
    
    ```

-   **<portal-fmt:identification action="setting" object="object\_name" var="variable\_name"/\>**

    Transforms a String representation of the ObjectID into an ObjectID. Also transforms an ObjectID into a String representation of the ObjectID.

    Attributes:

    -   **action**

        Specifies the operation to be done on the object. Allowed values are `"serialize"` and `"deserialize"`

    -   **object**

        Specifies the object that must be handled. Allowed values are an object of the type `com.ibm.portal.Identifiable` or `java.lang.String`.

    -   **var**

        Specifies the name of the scripting variable where the generated value is stored.

    The following example shows how this tag is used to set an identifiable object and translate it to a String representation:

    ```xmp
    <portal-fmt:identification object="<%=contentNode%>" action="serialize" var="oid_string">
    	<p><portal-fmt:title varname="<%=contentNode%>"/> has the ObjectID <%=oid_string%></p>
    </portal-fmt:identification>
    ```

    The following example shows how this tag is used to set a unique name, which can also be an object ID string representation, and translate it to an object ID:

    ```xmp
    <portal-fmt:identification object="ibm.portal.Home" action="deserialize" var="oid">
    	<% if (oid instanceof com.ibm.portal.ObjectID) { %>
    		<p>This is how it works</p>
    	<% } %>
    </portal-fmt:identification>
    ```

-   **<portal-fmt:problem bundle="bundle"\>**

    Returns the problem text for a given key in the specified language. The following keys can be looked up in the resource bundle.

    -   content.not.available - Occurs if there is no page content that can be displayed. Used in the [<portal-core:pageRender/\>](dgn_ptlcore.md#pagerender) tag.
    -   login.invalid - Occurs when the user ID, password, or both are not valid. This is used in the Login screen.
    -   password.invalid - Occurs when the password field is empty during login. This is used in the Login screen.
    -   portlet.not.active - Occurs when a portlet is not active. Used in the [<portal-skin:portletRender/\>](dgn_ptlskin.md#portletrender) tag.
    -   portlet.not.authorized - Occurs when a user does not have appropriate permissions on a portlet. Used in the [<portal-skin:portletRender/\>](dgn_ptlskin.md#portletrender) tag.
    -   portlet.not.available - Occurs when an error occurs that prevents a portlet from rendering. Used in the [<portal-skin:portletRender/\>](dgn_ptlskin.md#portletrender) tag.
    -   portlet.title.not.available - Occurs when a portlet title is not available. Used in the [<portal-skin:portletTitle/\>](dgn_ptlskin.md#portlettitle) tag.
    -   userid.invalid - Occurs when the user ID field is empty during login. This is used in the Login screen.
    There is a corresponding answer key for each problem \(see the [<portal-fmt:answer/\>](#answer) tag\).

    The resource bundle must be in a directory that is on the class path of the HCL Portal enterprise application. It is recommended that you create a new directory to separate your custom code from the base code. Add the new directory to the Portal application class path. For details, refer to the WebSphere® Application Server documentation. The following sample retrieves the problem text from `/nls/problem_locale.properties`. The text is displayed only when an error is encountered rendering the page.

    For example:

    ```xmp
    
        
        <portal-core:pageRender>
           <p align="center">
             <strong>**<portal-fmt:problem bundle="nls.problem"/\>**</strong>
             <br>
             <portal-fmt:answer bundle="nls.problem"/>
           </p>
        </portal-core:pageRender>
    
        
    ```

-   **<portal-fmt:text key="key" bundle="bundle"\>**

    Returns the text for a key in the specified language. The key indicates a parameter in a resource bundle or properties file, indicated by bundle. Both attributes are required. See the description of [<portal-fmt:textParam\>](#textparam) for an example and further description of the attributes of <portal-fmt:text/\>.

    Where possible, the `<i18n:bundle/>` and `<i18n:message/>` tags of the I18N tag library can be used instead of <portal-fmt:text/\>..

-   **<portal-fmt:textParam\>**

    If the text that is retrieved contains placeholders in the form of "\{0\}", "\{1\}", "\{2\}", these can be set with this tag. This tag can be used only in the body of the <portal-fmt:text/\> tag. The text to be substituted for the placeholders must be entered as content for this tag. It can even be an expression.

    Examples

    The welcome parameter in a resource bundle is set as follows:

    ```xmp
    
         welcome = Welcome {0}!
        
    ```

    In the following example, the value of the <portal-fmt:textParam\> tag is written in place of the \{0\}.

    ```xmp
    
        <portal-fmt:text key="welcome" bundle="nls.engine">
            <portal-fmt:textParam>World</portal-fmt:textParam>
        </portal-fmt:text>
        
    ```

-   **<portal-fmt:title locale="locale" varname="localized\_object"/\>**

    Provides the title of the object that is specified in `varname`. The tag also implies the object if it is called inside of the <portal-navigation:navigationLoop/\> tag.

    Attributes

    -   **locale**

        Optional. Overrides the current language setting.

    -   **varname**

        Optional. Specifies the name of the scripting variable holding the object. The <portal-navigation:navigation/\> tag sets this object to <%=wpsNavNode%\>.

-   **<portal-fmt:user attribute="value"/\>**

    If the user is logged in, this tag returns one of the specified user attributes. value can be any user attribute that is defined to Member Manager.



