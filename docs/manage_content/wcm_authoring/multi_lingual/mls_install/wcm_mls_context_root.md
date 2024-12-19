# Changing the multilingual solution context root

The default context root for the multilingual solution application is /wps. With Version 8.5 CF3, you can change this setting to match the HCL Portal context root to better suit the requirements of your organization.

1.  Ensure that the WebSphere®Portal context root is modified as described in [Changing the portal URI after an installation](../../../../deployment/manage/siteurl_cfg/changing_portal_uri_after_install/index.md).

2.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the **wkplc.properties** file.

3.  Run the following registration command from the wp_profile_root/ConfigEngine` directory:

    -   **Windows™**

        `ConfigEngine.bat mls-modify-servlet-path`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh mls-modify-servlet-path`

4.  Restart HCL Portal.

5.  Repeat these steps on every server and cluster node.

6.  If the **Edit-Time Navigation/Creation** extension is being used, for each authoring template that uses the extension:

    1.  Edit the **ML Translations** text element properties and update the custom JSP field with dynamic context path tokens:

        -   **For the Auto load version:**

            ```
            readMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeRead_AutoLoad.jsp,
            editMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeEdit_AutoLoad.jsp
            ```

        -   **For the Manual load version:**

            ```
            readMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeRead_ManualLoad.jsp,
            editMode=[wcm.mls.context.path];/jsp/html/MLAuthorTimeEdit_ManualLoad.jsp
            ```

    1.  Save the authoring template.

7.  If the **Domain Locale Redirection** extension is being used, update the HTTP Server with the new context root.

    For example, if you are using the IBM HTTP Server with the following configuration settings and the new context root is /abc:

    ```
    RewriteRule ^/$ /wps/wcmml/jsp/html/MLServletHomePageRedirection.jsp [PT]
    RewriteRule ^/en$ /wps/wcm/connect/english/Internet.jsp [PT]
    ```

    Should be updated to:

    ```
    RewriteRule ^/$ /abc/wcmml/jsp/html/MLServletHomePageRedirection.jsp [PT]
    RewriteRule ^/en$ /abc/wcm/connect/english/Internet.jsp [PT]
    ```

## HCLSoftware U learning materials

For an introduction and a demo on how to manage multilingual sites as a business user, go to [Multilingual for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D2792){target="_blank"}. You can try it out using the [Multilingual Lab for Business Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab.pdf){target="_blank"} and corresponding [Multilingual Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Business_User/HDX-BU-200_Multilingual_Lab_Resources.zip).

To learn more about multilingual deployment options, go to [Multilingual for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}. In this course, you will learn about language support and selection, page translation, search, and the built-in multilingual solution for web content. You will also learn how to manage the locale URL, plan site capacity, and optimize performance. You can try it out using the [Multilingual Lab for Administrators](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3364){target="_blank"}.
