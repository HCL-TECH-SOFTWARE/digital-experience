---
id: wcm_dev_auth-temp_fields
title: Defining display settings of fields and elements
---




You can define the display properties of field and elements that are displayed on a content form. Different field and element types have different display properties.

1.  To hide an entire section in a content form from all users, select **Hide Section**. You must specify a default value in any required fields within the section to use this option.

2.  Click ![properties](../images/propIcon.jpg) to open the display properties of a field or element.

    The following field properties can be set. Different field and element types have different display properties.

    1.  To display a field or element as a required field select **Identify this as a required field**. Users must complete this field or element.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        **Note:** Administrators can choose to display hidden fields and elements in a content item by clicking **Show hidden fields**.

    3.  Type the number of characters to use in **Field Width** to set the size of the displayed field. If you leave this field blank, the default field size is used.

    4.  Type a number into the maximum or minimum characters or words fields to set limits on the number of characters or words a user can enter in a field.

    5.  To change the label of a field or element, enter a name **Field label**.

        If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays different field labels for each language it is configured for. The text that is entered in the field label is only used if an appropriate text label is not available from the selected text provider, or if the text provider is not available.

    6.  Type field-specific help into **Field help** text. This displays with the field or element in the content form.

        If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

    7.  The content of some fields can automatically be generated, such as the **Name** and **Display title** fields by selecting **Generate**. If selected, the field is no longer editable.

        -   When selected in the **Name** field, a numeric name is automatically generated.
        -   When selected in other fields you also select the field or element to use to generate the content of the field, and other options such as field size.
    8.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    9.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

    10. You can restrict the range of dates and times that users can select in date and time fields by selecting a start and end date or time. You either select a specific date, or select the number of days, hours, or minutes after the creation date to begin the range, or the number of days, hours, or minutes after the start date to end the range.

    11. You restrict the items available to be selected on fields such as "Select Categories" or "Select Workflows" by selecting the items that you want a user to select from. You can also restrict a user to select a single item.

    12. You can choose not to use workflows for items you create with an authoring template by selecting **Dis able workflows for items using this authoring template** in the workflow properties view. Selecting this option also disables the workflow section on item forms. Users are instead able to directly create drafts instead of progressing an item through a workflow.

    13. You can restrict the maximum and minimum sizes of files added to a file resource element. You can also restrict the mime type of files that can be added to file resource elements. You add multiple mime types, separated by a space.

    14. A "custom JSP" field is available on some element types. You use this field to reference a JSP file to use instead of the default element view in the user interface. You can write JSP to control the look and feel of an element, and to restrict the values that can be entered into an element.

        When you reference the JSP file, you can also specify whether the JSP is to be used in read or edit mode. For example:

        -   `readMode=/jsp/html/CustomJSP_ReadMode.jsp, editMode=/jsp/html/CustomJSP_EditMode.jsp`
        **Storing JSP Files:**

        When you referene a JSP file in the **custom JSP** field of the element properties view, you can use the following formats.

        -   **When located within the ilwwcm.war directory of your server use this format:**

            [AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/node-name/wcm.ear/ilwwcm.war

            **Note:** JSP files are stored within a web application that runs on the portal. To reference a JSP file in another web application, use the following path: contextPath;jspPath. For example: /wps/customapplication;/jsp/jspFilename.jsp.

            A dynamic context path value can be defined by adding a token to the context path that corresponds to a key and value pair to the Web Content Manager configuration service environment provider. When this key is used as the token in the jsp value field, it is replaced dynamically at render time. For example: \[my.custom.key\];myfile where my.custom.key is a constant within the Web Content Manager configuration service.

        -   **When located within any other web application:**

            -   **contextPath;jspPath**

                Specifies an edit mode version of the field where the JSP is in another application. For example: /wps/customapplication;/jsp/editor.jsp

            -   **jspPath**

                Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

            -   **editmode=contextPath;jspPath**

                Specifies an edit mode version of the field where the JSP is in another application.

            -   **editmode=jspPath**

                Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

            -   **readmode=contextPath;jspPath**

                Specifies a read mode version of the field where the JSP is in another application.

            -   **readmode=jspPath**

                Specifies a read mode version of the field where the JSP is in same application as Web Content Manager.

            -   **readmode=contextPath;jspPath,editmode=contextPath;jspPath**

                Specifies an edit mode and read mode version of the field where the JSPs are in another application.

            -   **readmode=jspPath,editmode=jspPath**

                Specifies an edit mode and read mode version of the field where the JSPs are in same application as Web Content Manager.

    15. You can edit the default behavior of rich text elements.

        -   **Use stylesheet, hide fonts/size/color**

            Select this option if you want the text style to be determined by a style sheet. Content creators cannot edit text properties such as fonts style, text size, and text color.

        -   **Limit image picker to library images**

            Select this option to prevent content creators from inserting images from the file system. They can only select images that are stored as image components.

        -   **Dis able source mode**

            Select this option to prevent content creators from viewing the rich text editor in source mode.

        -   **Filter active content on save**

            Select this option to prevent users from saving active content, such as scripts, in the rich text element.

    16. You can also select to use either the default rich text editor of the authoring portlet, or a third-party rich text editor as the rich text editor for a rich text element:

        -   **Portlet default editor**

            If selected, the default rich text editor of the current authoring portlet is used. If the default editor is not available, the standard rich text editor is used.

        -   **Custom**

            Selecting **Custom** allows users to use a 3rd-party rich text editor as your default editor. Before adding a compatible third-party rich text editor, read the installation and configuration instructions of the third-party rich text editor. These should include instructions for enabling the third-party rich text editor to be used in a Web Content Manager solution.

            When you configure a third-party rich text editor, you need to copy a JSP file that is supplied by the third-party rich text editor. This file is used to start the third-party rich text editor. You enter the name of this JSP file in the Rich Text Options section of the authoring portlet configuration.

            If the third-party rich text editor is not available, the default rich text editor of the authoring portlet is used. If the default editor is not available, the standard rich text editor is used.

            When you reference a JSP file in the **custom JSP** field of the element properties view, you can use the following formats.

            -   **When located within the ilwwcm.war directory of your server use this format:**

                [AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/node-name/wcm.ear/ilwwcm.war

                **Note:** The JSP page is also stored in the client war directory of the local rendering portlet or of the servlet or portlet that calls the JSP, when the Web Content Manager API is used. For example, to render a JSP page on a local rendering portlet, you would also need to store a copy of the JSP file under [AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/node-name/PA\_WCMLocalRendering.ear/ilwwcm-localrende.war.

            -   **When located within any other web application:**

                -   **contextPath;jspPath**

                    Specifies an edit mode version of the field where the JSP is in another application. For example: /wps/customapplication;/jsp/editor.jsp

                -   **jspPath**

                    Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

                -   **editmode=contextPath;jspPath**

                    Specifies an edit mode version of the field where the JSP is in another application.

                -   **editmode=jspPath**

                    Specifies an edit mode version of the field where the JSP is in same application as Web Content Manager.

                -   **readmode=contextPath;jspPath**

                    Specifies a read mode version of the field where the JSP is in another application.

                -   **readmode=jspPath**

                    Specifies a read mode version of the field where the JSP is in same application as Web Content Manager.

                -   **readmode=contextPath;jspPath,editmode=contextPath;jspPath**

                    Specifies an edit mode and read mode version of the field where the JSPs are in another application.

                -   **readmode=jspPath,editmode=jspPath**

                    Specifies an edit mode and read mode version of the field where the JSPs are in same application as Web Content Manager.

3.  Click **Done** to close the properties view.


**Using the reset and apply button:**

When display properties are edited , click **Reset** to return the display properties to the values entered the last time the authoring template was saved.

Click **Apply** to apply values that are entered in the properties fields. For example, apply the width of the field to the value entered in "field width" field.

