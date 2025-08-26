# Edit-time navigation creation extension

This extension provides a way to change between localizations of the same item and to create new items in localized libraries.

The extension has two versions that differ only when the extension itself renders its results. The Auto Load version renders immediately, whereas the Manual Load version requires the user to click **Refresh** before any results are returned.

To use the edit-time navigation creation extension:

1.  Add a text element that is named **ML Translations** to an authoring template.

    !!! note
        This element is displayed in the content item form only if the Multilingual Solution is enabled. Otherwise, this element is hidden in the content item form, but still visible in the **Manage Elements** dialog.

2.  Edit the element properties and add the following code to the custom JSP field:
    -   **For the Auto load version before version 8.5 CF3**

        ```
        readMode=/wps/wcmml;/jsp/html/MLAuthorTimeRead_AutoLoad.jsp,
        editMode=/wps/wcmml;/jsp/html/MLAuthorTimeEdit_AutoLoad.jsp
        ```

    -   **For the Auto load version for version 8.5 CF3 or higher**

        ```
        readMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeRead_AutoLoad.jsp,
        editMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeEdit_AutoLoad.jsp
        ```

    -   **For the Manual load version before version 8.5 CF3**

        ```
        readMode=/wps/wcmml;/jsp/html/MLAuthorTimeRead_ManualLoad.jsp,
        editMode=/wps/wcmml;/jsp/html/MLAuthorTimeEdit_ManualLoad.jsp
        ```

    -   **For the Manual load version for version 8.5 CF3 or higher**

        ```
        readMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeRead_ManualLoad.jsp,
        editMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeEdit_ManualLoad.jsp
        ```

3.  Save the authoring template and reapply the template to all content that uses it ensuring the **Add new elements** option is selected.

## How it works

Every time that you open a content item that uses this extension in the authoring portlet, all libraries that are configured in the current multilingual configuration file are searched for all matching content. To be matching, it must be in the same site area path and have the same name.

If a matching content item is found, then information about the content, item including a link to open that item in read mode, is displayed. If the existing content item is a link, then information about the originating content item is displayed instead.

If no matching content items are found, and you have edit access to the content item, you can either create a copy or link of the content item in each localized library:

-   **Copy**

    Clicking **Copy** creates a draft with the same name as the current item under the equivalent site area in the localized library.

-   **Link**

    Clicking **Link** creates a content link to the current content under the equivalent site area in the localized library.


!!! note
    When performing copy or link operations against an item within the Portal Site library, any pages on the path to the item being copied will be copied as site areas in the destination library.

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.
