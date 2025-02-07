# Library copy portlet extension

This extension is used as part of setting up a new locale by copying an existing library, and assigning it a new name and locale.

To use the extension:

1.  Click the **Administration menu** icon. Then, click **Portal Content** \> **ML Library Copy**.
2.  Select a library to copy.
3.  Select a new locale.
4.  Type a new name for the library.
5.  Click **Copy**.

!!! note
    The **Portal Site** library cannot be cloned by using the **ML Library Copy** portlet, therefore if your base locale is the **Portal Site** library you must either:
        -   Use the [Edit-time navigation creation extension](wcm_mls_ext_nav.md) to manually copy each of your content items in the **Portal Site** library to your localized libraries. This action automatically duplicates the page path as site areas in the destination library.
        -   Write some Web Content Manager API code to manually copy the **Portal Site** library by traversing the page hierarchy and creating site areas in the destination library with the same name as the page, then copying the content items by using the Web Content Manager API `Workspace.copy` method.

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

<!---
???+ info "Related information"
    - [Rolling out a second locale](../ctc/ctc_deploy_locale_second.md) -->

