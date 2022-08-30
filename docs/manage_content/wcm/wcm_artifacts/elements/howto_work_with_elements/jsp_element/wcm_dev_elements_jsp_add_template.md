---
id: wcm_dev_elements_jsp_add_template
title: Adding a JSP element to a template
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You add a JSP element to an authoring template when you want the JSP element to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **JSP** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The JSP element is added to your form.

8.  Go to the **Default Content** tab.

9.  Go to the JSP element you added. Either specify the path to the JSP file, or do nothing if you want your content creators to enter this information.

    1.  Enter the path to a JSP file, or leave blank if you want your content creators to specify the JSP. The path must begin with a forward slash.

        For example:

        ```
        /wps/customapplication;/jsp/jspFilename.jsp
        ```

        **Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

        A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

    2.  Enter an error message to display when an incorrect JSP path is entered. A Java exception stack trace is displayed if there is syntax error.

10. Click ![properties](../images/propIcon.jpg) to open the display properties of the element. This view is where you define how the element is displayed on the item form.

    1.  To display the element as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        **Note:** Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    4.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    5.  Type field-specific help into **Field help** text. This is displayed with the element in the content form.

        If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

11. Save the authoring template.


