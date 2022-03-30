# Customizing the portlet title 

With the appropriate configuration settings, you can customize the portlet window title to be the same as the default portlet title, the title of the first selected feed, or a custom title that you specify in the portlet configuration panel.

The Syndicated Feed portlet provides dynamic window title support that implements the request attribute, `com.ibm.portal.portlet.Constants.DYNAMIC_TITLE`. HCL Portal defines the title bar for portlets in control.jsp. To add dynamic title support for the HCL Syndicated Feed portlet, you must deploy the dynamic window title support and update control.jsp.

Because the [PortalServer\_root](../reference/wpsdirstr.md#wp_root) directory is read only, you cannot modify the window title support libraries, control.jsp, or other theme files in this directory. You should include these files as part of a custom theme or deploy the files as a separate Web Archive \(WAR\). See the following topics for more information: *Location of theme resources* and *Creating a new theme*.

1.  Deploy the dynamic window title support with your custom Web Archive \(WAR\).

    1.  Navigate to the following directory: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bp/wp.bp.feedspace/installableApps

        **Note:** If you downloaded the HCL Syndicated Feed portlet, the required files are available in the root directory of the archive.

    2.  Locate and copy the following files to a work directory:

        -   dynamicWindowTitle.jar
        -   dynamicWindowTitle.tld
    3.  Copy `dynamicWindowTitle.jar` to the following directory in your custom WAR: WEB-INF/lib

    4.  Copy the file `dynamicWindowTitle.tld` to the following directory in your custom WAR: WEB-INF/tld

2.  Customize the skin\(s\) that you plan to use with the Syndicated Feed portlet. Perform the following steps for each skin you plan to use:

    1.  Locate `control.jsp` in the skin directory of the WAR file.

    2.  Locate the last `taglib` definition in the file. For example,

        ```
        <%@ taglib uri="/WEB-INF/tld/dnd.tld" prefix="dnd" %>
        ```

    3.  Insert the following string after that tag:

        ```
        <%@ taglib uri="/WEB-INF/tld/dynamicWindowTitle.tld" prefix="dwt" %>
        ```

    4.  Locate the following string:

        ```
        <portal-skin:portletTitle>
        ```

        If the file does not contain this string, insert it after the last `taglib` definition.

    5.  Insert the following string before this tag:

        ```
        <dwt:renderTitle windowId="<%=myPortletID%>">
        ```

    6.  Locate `</portal-skin:portletTitle>`.

    7.  Insert the following string after this tag:

        ```
        </dwt:renderTitle>
        ```

    8.  Add the following tag to the end:

        ```
        <dwt:setTitle windowId="<%=myPortletID%>"/>
        ```

    9.  Save and close `Control.jsp`.

        The changes you make to `Control.jsp` should be similar to the following:

        ```
        <%@ taglib uri="/WEB-INF/tld/dnd.tld" prefix="dnd" %> 
        <%@ taglib uri="/WEB-INF/tld/dynamicWindowTitle.tld" prefix="dwt" %>
        ::::::::::::
        ::::::::::::
        <dwt:renderTitle windowId="<%=myPortletID%>">
        <portal-skin:portletTitle>
        <portal-fmt:problem bundle="nls.problem"/>
        </portal-skin:portletTitle>
        </dwt:renderTitle>
        <img alt="" style="border:0; text-align: <%= bidiAlignRight %>;" 
        width="1" height="22" 
        src='<portal-logic:urlFindInSkin file="title_minheight.gif"/>'>
        </div></dnd:dragHandle></td>
        <td class="wpsPortletIcons">
        <%-- Do not include 'Skip to next portlet' link in --%> 
        <%-- standalone window or solo mode --%> 
        
        <%if(isJSAvail){%> 
        :::::::::::::::::::::::
        :::::::::::::::::::::::
        
        <dwt:setTitle windowId="<%=myPortletID%>" />
        
        ```


You can now use the dynamic portlet window title customization option with all Syndicated Feed portlet instances inside the skins you customized.

**Note:** The Syndicated Feed portlet disables the portlet window title customization options in the Personalize/Edit Shared Settings/Configure modes when the portlet detects that it is displayed in a skin that does not support the dynamic window title features. The Syndicated Feed portlet also disables these options if an administrator locks the window title features.

For more information, see *Tip: Changing a portlet title at run time in WebSphere® Portal V6*.

**Parent topic:**[Syndicated Feed Portlet for HCL Digital Experience](../admin-system/ic_syndfeed_features.md)

