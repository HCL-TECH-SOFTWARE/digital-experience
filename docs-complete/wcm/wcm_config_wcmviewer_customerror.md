# Customizing error messages for Web Content Viewers 

If an error occurs during rendering, the Web Content Viewer shows an error screen. You can customize the default error screen, and you can create your own custom JSP file that is used to display error messages.

The default error screen provides a standard error message, which is shown on every type of error, and a more detailed error message. The detailed error message provides information about the cause of the error and is displayed when you click the **View details** link.

1.  Create a customized error JSP file.

    1.  Copy the original error.jsp file from wp\_profile\_root/installedApps/node\_name/PA\_WCMLRingPortJSR286.ear/ilwwcm‑localrende.war/jsp/html directory to create your custom error JSP file.

        Almost everything in the original JSP file can be changed according to your requirements. If you want to show the cause of the error, you must retain this part of the original file in your error JSP file:

        ```
        <%-- use errorbean from request --%> 
        <jsp:useBean id="errorbean" scope="request" 
            type="com.ibm.portal.portletui.messages.StatusMessageBean" /> 
        <% String msg = errorbean.getMessage(); %> 
        ```

        The variable msg contains the message text of the error. In the original error.jsp file, this message is only shown in a separate window if a user selects the **View details** link.

2.  Configure the Web Content Viewer to use the customized error JSP file.

    1.  Log in to the portal as an administrator.

    2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

    3.  Locate the Web Content Viewer portlet.

    4.  Click **Configure Portlet**.

    5.  Edit the value of the ERROR\_JSP parameter, and set the path to your customized error JSP file as the parameter value.

        **Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

        A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.


**Parent topic:**[Customizing web content delivery ](../wcm/wcm_delivery_custom.md)

