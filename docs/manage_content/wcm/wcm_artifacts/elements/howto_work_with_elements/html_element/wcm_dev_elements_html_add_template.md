---
id: wcm_dev_elements_html_add_template
title: Adding an HTML element to a template
---

# Adding an HTML Element to a Template

You add an HTML element to an authoring template when you want the HTML element to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **HTML** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The HTML element is added to your form.

8.  Go to the **Default Content** tab.

9.  Go to the HTML element you added.

10. Enter HTML in the HTML field, or do nothing if you want your content creators to enter the HTML.

11. Click ![properties](../html_element/_img/propIcon.jpg) to open the display properties of the element. This view is where you define how the element is displayed on the item form.

    1.  To display the element as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        !!!note
            Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  Type the number of characters to use in **Field Width** to set the size of the displayed field. If you leave this blank, the default field size is used.

    4.  Type a number into the maximum or minimum characters or words fields to set limits on the number of characters or words a user can enter in a field.

    5.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    6.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    7.  Type field-specific help into **Field help** text. This is displayed with the element in the content form.

        If you have created a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

    8.  You can also select to use either the default HTML editor of the authoring portlet, or a third-party HTML editor for the HTML element:

        -   **Portlet default editor**

            If selected, the default HTML editor of the current authoring portlet is used. If the default editor is not available, the standard HTML editor is used.

        -   **Custom**

            Select **Custom** to use a 3rd-party HTML editor for the HTML element. Before you use a compatible third-party HTML editor, you should read the installation and configuration instructions of the third-party HTML editor. These should include instructions for enabling the third-party HTML editor to be used in a Web Content Manager solution.

            When you configure a third-party HTML editor, you need to copy a JSP file that is supplied by the third-party HTML editor. This file is used to start the third-party HTML editor.

            If the third-party HTML editor is not available, the default HTML editor of the authoring portlet is used. If the default editor is not available, the standard HTML editor is used.

            **Storing JSP files:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

            A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: `[my.custom.key];myfile` where `my.custom.key` is a constant within the Web Content Manager configuration service.

12. Save the authoring template.


