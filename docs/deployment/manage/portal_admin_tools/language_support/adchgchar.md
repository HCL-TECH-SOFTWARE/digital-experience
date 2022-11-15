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


???+ info "Related information"  
    -   [Themes and skins](../../portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/customizing_pages/admcustom_skins.md)

