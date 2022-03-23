# <portal-skin/\> tags

The <portal-skin/\> tags are used to build a portlet title bar as well as make various functional icons available in the title bar.

The following table provides a brief description of each tag.

**Note:** Do not use portal tags in portlet JSPs. The following tags are only for use in theme and skin JSPS.

|Tag|Description|
|---|-----------|
|[<portal-skin:layoutNodeLoop/\>](#childloop)|Generates the markup for the area of the portal page that includes the portlets. This tag should be used only in skin JSPs.|
|[<portal-skin:layoutNodeProperty/\>](#layoutnodeproperty)|Displays the value of a property of a given layout node or exposes the value of the property in a scripting variable.|
|[<portal-skin:layoutNodeRender/\>](#componentrender)|Renders an element of the layout model. This tag should be used only within a <portal-skin:layoutnodeLoop/\>.|
|[<portal-skin:portletBack/\>](#portletback)|Used to render a link in the portlet title bar that allows the user to set the portlet to the previously known mode. This tag should be used only in skin JSPs|
|[<portal-skin:portletConfigure/\>](#portletconfigure)|Used to render the icon in the portlet title bar to allow the administrator to configure the portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:portletEdit/\>](#portletedit)|Used to render the icon in the portlet title bar to allow the user to edit the portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:portletEditDefaults/\>](#portleteditdefault)|Used to render the icon in the portlet title bar to allow the user to edit the portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:portletHelp/\>](#portlethelp)|Used to render the icon in the portlet title bar to display portlet help. This tag should be used only in skin JSPs.|
|[<portal-skin:portletMaximize/\>](#portletmaximize)|Used to render the icon in the portlet title bar to allow the user to maximize the portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:portletMinimize/\>](#portletminimize)|Used to render the icon in the portlet title bar to allow the user to minimize the portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:portletRender/\>](#portletrender)|Renders portlet content into the layout of the page that is currently being generated. This tag should be used only in skin JSPs.|
|[<portal-skin:portletRestore/\>](#portletrestore)|Used to render the icon in the title bar to allow the user to restore the portlet to its original state. This tag should be used only in skin JSPs.|
|[<portal-skin:portletTitle/\>](#portlettitle)|Writes the title for a portlet. This tag should be used only in skin JSPs.|
|[<portal-skin:urlParent/\>](#urlparent)|Creates a URL that supports one of the following surrounding tags.|

## Detailed descriptions of the <portal-skin/\> tags

The following section provides detailed descriptions of the <portal-skin/\> JSP tags:

-   **<portal-skin:layoutNodeLoop var="var\_name"\>**

    Generates the markup for the area of the portal page that includes the portlets. The layout nodes are used for laying out containers \(rows, columns\) or controls \(portlets\). The tag iterates children of a layout node. By specifying the **var** attribute, the currently used layout node can be made available for use in other tags that expect scripting variable names.

    ```
    
    <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
    <tr height="100%">
      <portal-skin:layoutNodeLoop var="node">
      <td valign="top" width=<portal-skin:layoutNodeProperty varname="node" propertyname="WIDTH"/>>
        <portal-skin:layoutNodeRender/>
      </td>
      </portal-skin:layoutNodeLoop>
    </tr>
    </table>
    ```

-   **<portal-skin:layoutNodeProperty/\>**

    Displays the value of a property of a given layout node or exposes the value of the property in a scripting variable. Mandatory attributes are:

    -   **varname** - the name of the variable holding the layout node
    -   **propertyName** - the name of the property to retrieve \(for example, "WIDTH" or "ORIENTATION"\)
    The optional attribute **var** can be used to expose the value of the property in a scripting variable of the given name instead of writing it to the output directly.

    *Example:*

    ```
    
    <portal-skin:layoutNodeLoop var="wpsLayoutNode">
      <portal-skin:layoutNodeProperty varname="<%=wpsLayoutNode%>" propertyname="WIDTH"/>
           <!-- write the width property !-->
      <portal-skin:layoutNodeProperty varname="<%=wpsLayoutNode%>" propertyname="WIDTH" var="width" />
           <!-- expose width variable !-->
        ... <img width="<%=width>" src="test.gif"> ...
      </portal-skin:layoutNodeProperty>
    </portal-skin:layoutNodeLoop>
    
    ```

-   **<portal-skin:layoutNodeRender\>**

    Renders an element of the layout model. This might be a container representing a row, column, or a control. This tag can only be used within a [<portal-skin:layoutNodeLoop\>](#childloop) tag.

-   **<portal-skin:portletBack/\>**

    Used to render a link in the portlet title bar that allows the user to set the portlet to the previously known mode. The content of this tag should include a link \(HREF value should be <%=wpsPortletBackURL%\>\) and an icon image or link text. For standard portlets the current render parameters are preserved. This tag should be used only in skin JSPs.

    ```
    
        **<portal-skin:portletBack\>**
           <td class="wpsPortletTitle">
              <a href='**<%=wpsPortletBackURL%\>**'>
                 <img border="0" align="absmiddle" width="12" height="12"
                      src="<portal-logic:urlFindInTheme file='<%= "title_back" + 
                          bidiImageRTL + ".gif" %>'/>"
                      alt='<portal-logic:text key="back" bundle="nls.titlebar"/>'
                      title='<portal-fmt:text key="back" bundle="nls.titlebar"/>'></a></td>
        **</portal-skin:portletBack\>**
        
    ```

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

-   **<portal-skin:portletConfigure/\>**

    Used to render the icon in the portlet title bar to allow the administrator to configure the portlet. The content of this tag should include a link \(HREF value should be <%=wpsPortletConfigureURL%\>\) and an icon image. The newWindow attribute is not supported for this mode. This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

    The **newWindow** attribute most be specified if the portlets Config mode is supposed to come up in a popup window.

-   **<portal-skin:portletEdit/\>**

    Used to render the icon in the portlet title bar to allow the user to edit the portlet. The content of this tag includes a link \(rendered as <%=wpsPortletEditURL%\> or [<portal-skin:urlParent\>](#urlparent)\) and an icon image. The **newWindow** attribute is not supported for this mode. This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

    The **newWindow** attribute most be specified if the portlets Config mode is supposed to come up in a popup window.

-   **<portal-skin:portletEditDefaults/\>**

    Used to render the icon in the portlet title bar to allow the user to edit the defaults settings of the portlet. The content of this tag includes a link \(rendered as <%=wpsPortletEditDefaultsURL%\> or [<portal-skin:urlParent\>](#urlparent)\) and an icon image. The **newWindow** attribute is not supported for this mode. This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

    The **newWindow** attribute most be specified if the portlets Config mode is supposed to come up in a popup window.

-   **<portal-skin:portletHelp/\>**

    Used to render the icon in the portlet title bar to display portlet help. The content of this tag includes a link \(rendered as <%=wpsPortletHelpURL%\> or [<portal-skin:urlParent\>](#urlparent)\) and an icon image. The **newWindow** attribute indicates that, for HTML, the portlet help should be rendered in a new browser window. The default is "no" or "false". This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

    The **newWindow** attribute most be specified if the portlets Config mode is supposed to come up in a popup window.

-   **<portal-skin:portletMaximize\>**

    Used to render the icon in the portlet title bar to allow the user to maximize the portlet. Before showing the maximize button, the tag checks if the portlet supports the maximize state or if the portlet is already in that state. The content of this tag includes a link \(rendered as <%=wpsPortletMaximizeURL%\> or [<portal-skin:urlParent\>](#urlparent)\) and an icon image. This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

-   **<portal-skin:portletMinimize\>**

    Used to render the icon in the portlet title bar to allow the user to minimize the portlet. Before showing the minimize button, the tag checks if the portlet supports the minimize state or if the portlet is already in that state. The content of this tag includes a link \(rendered as <%=wpsPortletMinimizeURL%\> or [<portal-skin:urlParent"\>](#urlparent)\) and an icon image. This tag should be used only in skin JSPs.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

-   **<portal-skin:portletRender\>**

    Renders portlet content into the layout of the page that is currently being generated. This tag can be used only within the [control](dgn_skins.md) in the skin JSPs.

    If a portlet is not active or deactivated, the body of the tag is executed and a corresponding message can be shown with the <portal-fmt:problem/\> tag, or other error handling can be implemented. The body of the tag could hold further JSP code.

    See the [<portal-fmt:problem\>](dgn_ptlfmt.md) tag or [<portal-logic:if portletstate\>](dgn_ptllogic.md) for an example of how this tag is used in [`Control.jsp`](dgn_skins.md) .

-   **<portal-skin:portletRestore\>**

    Used in the [control](dgn_skins.md) to render the icon in the portlet title bar to allow the user to restore the portlet to its original state. The content of this tag includes a link \(rendered as <%=wpsPortletRestoreURL%\> or [<portal-skin:urlParent\>](#urlparent)\) and an icon image.

    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. See [Creating custom links to portlets and pages](dgn_link.md) for more information.

-   **<portal-skin:portletTitle id="identifier"\>**

    Writes the title for a portlet. If the portlet is not available or disabled, a special title is written that indicates that the origin title is not available. The content of the tag is evaluated only if problems occur during the processing and can be used for error processing. When the `id` is specified, the tag initializes a scripting variable with the value that is normally written out and nothing is written to the output stream. The value of the `id` attribute is the name of the scripting variable. This tag should be used only in skin JSPs.

    For standard portlets, only static titles are displayed. Titles that are dynamically set using the RenderResponse.setTitle\(\) method are ignored.

    In this example, the title is rendered in a table cell. Alignment is determined by the <%= bidiAlignLeft %\> variable, which is set in the file `BidiInclude.jsp`.

    ```
    
        
        <td class="wpsPortletTitle" width="100%" nowrap align="<%= bidiAlignLeft %>" 
                  valign="middle">
         **   <portal-skin:portletTitle\>**
               <portal-fmt:problem bundle="nls.problem"/>
         **   </portal-skin:portletTitle\>** 
               <img alt="" border="0" width="1" height="12"
                src='<portal-logic:urlFindInTheme file="title_minheight.gif"/>'>
        </td>
        
    ```

-   **<portal-skin:urlParent allowRelativeURL="**true\|false**" /\>**

    This tag creates a URL that supports one of the following surrounding tags. For better performance, use the parent tag's scripting variable if one is available.

    -   [<portal-navigation:navigationShift/\>](dgn_ptlnavig.md)
    -   [<portal-skin:portletMaximize/\>](#portletmaximize)
    -   [<portal-skin:portletMinimize/\>](#portletminimize)
    -   [<portal-skin:portletRestore/\>](#portletrestore)
    -   [<portal-skin:portletBack/\>](#portletback)
    -   [<portal-skin:portletConfigure/\>](#portletconfigure)
    -   [<portal-skin:portletEdit/\>](#portletedit)
    -   [<portal-skin:portletEditDefaults/\>](#portletedit)
    -   [<portal-skin:portletHelp/\>](#portlethelp)
    The **allowRelativeURL** attribute indicates whether a fully-qualified or relative URL is generated. The default is set by the **com.ibm.portal.state.accessors.url.URLContext.enableRelative** property in the `StateManagerService`.


