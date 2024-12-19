# Changing the character set for a language

The character set is stored in the database. This is the character set used for the response to the user. You can change the character set for a language.

To change the character set for a language, use the **Supported Markups** portlet. Proceed as follows:

1.  Click the **Administration menu** icon.
2.  Click **Portal settings** and then click **Supported markups**.
3.  Select the markup for which you want to change the character set.
4.  Click **Edit selected markup**.
5.  Click **Set locale-specific settings**.
6.  Select the language for which you want to make the change.
7.  Click **Edit setting for selected language**.
8.  Change the character set for the selected language in the selected markup.
9.  Click **OK** to save your changes, or click **Cancel** to return without saving.
10. Again, on the panel with the list of languages and on the panel for editing the markup, click **OK** to save your changes, or click **Cancel** to return without saving.

For details about how to perform these tasks refer to the Supported Markups portlet help.

!!!note
    For a portlet to be rendered correctly, the language of the portlet must be supported by the character set of the portal.

To help the user's browser to render content correctly, the used character set is written to the HTTP header of the response stream. The default encoding is UTF-8. If it set to another encoding, you can force the default encoding by setting the JVM parameter as follows: `default.client.encoding=UTF-8`.

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.

???+ info "Related information"  
    -   [Themes and skins](../../portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/customizing_pages/admcustom_skins.md)
