# Changing the multilingual solution context root Multilingual Solution

The default context root for the multilingual solution application is /wps. With Version 8.5 CF3, you can change this setting to match the HCL Portal context root to better suit the requirements of your organization.

1.  Ensure that the WebSphere®Portal context root is modified as described in [Changing the portal URI after an installation](../config/cfg_intr.md).

2.  Ensure that the WasPassword and PortalAdminPwd passwords are set in the **wkplc.properties** file.

3.  Run the following registration command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat mls-modify-servlet-path

    -   **AIX® HP-UX Linux™ Solaris**

        ./ConfigEngine.sh mls-modify-servlet-path

    -   **IBM® i**

        ConfigEngine.sh mls-modify-servlet-path

    -   **z/OS®**

        ./ConfigEngine.sh mls-modify-servlet-path

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



