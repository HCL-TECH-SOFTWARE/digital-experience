---
id: wcm_dev_elements_jsp_adding
title: Adding a JSP element to an item
---




You add a JSP element to a site area or content item when you want a section of JSP to be used for a specific site area or content item.

!!!note
    You can add an element to a content item only if the manage elements feature is enabled in the authoring template that is used by the content item.

1.  Open or create a site area or content item.

2.  Click **Manage Elements**.

3.  Select **JSP** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The JSP element is added to your form.

8.  Go to the JSP element you created:

    1.  Enter the path to the JSP file. The path must begin with a forward slash.

        For example:

        ```
        /wps/customapplication;/jsp/jspFilename.jsp
        ```

        !!!note "**Storing JSP files:**" 
            JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

            A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

    2.  Enter an error message to display when an incorrect JSP path is entered. A Java exception stack trace is displayed if there is syntax error.

9.  Save the item form.


