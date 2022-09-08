---
id: h_mp_create_page_from_template
title: Creating pages from a template using the Manage Pages portlet
---




Create new pages quickly by using a page template. Pages created from page templates contain pre-configured portlets and settings.

You can also create pages from a page template using the site toolbar.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Click **Content Root**.

3.  Click **Home**, or navigate to another section of the portal where you want to create a new page.

4.  Click **New Page from**.

5.  Type the title of the new page in **Title**. This is the title for the default locale.

6.  Type a unique URL in **Friendly URL**.

    This creates a custom address for your page that is easy to remember and share.

    **Note:** When creating a URL Mapping or creating or modifying a page, make sure that URL Mappings and friendly URLs in your portal do not match, partially overlap, or otherwise interfere with each other. For example, do not use strings such as home, ibm, ibm.com, and do not use strings that have been used as URL Mappings or friendly URLs in your portal already. Otherwise infinite browser redirect loops might occur, sometimes without an error message. To determine such strings, create an export from your portal by using the XML configuration interface and scan the exported XML result output file for the string that you want to use for your URL Mapping or for your friendly URL.

7.  Select **I want to make this page my private page** to restrict access to the page by other users.

8.  In the **Page Template** section, select the page template you want to use for the new page from the list of available templates.

    **Note:** If you are creating a public page, you must have at least User role access to the template page you are using.

9.  Skip the **Web Content** section.

10. Click **OK** to create the new page.


