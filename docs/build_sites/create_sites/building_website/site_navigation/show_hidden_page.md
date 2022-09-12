---
id: show_hidden_page
title: Hiding and displaying pages in the navigation
---

By default, pages that you create are displayed in the navigation of the portal site. If you do not want a page that you create to appear in the navigation, you can hide the page by setting the com.ibm.portal.Hidden page parameter to `true`. While this parameter does not affect your portal access control settings for the page, it is hidden from the navigation.

As a page editor, you might want to access hidden pages by using the navigation. For example, to use the site toolbar to edit a page, you need to go to the page first. You can either use a direct URL to the hidden page or make hidden pages display as described in the following.

-   To hide hidden pages from the navigation, select **Menu** \> **Hide Hidden Pages** from the site toolbar.

-   To make hidden pages display in the navigation, select **Menu** \> **Show Hidden Pages** from the site toolbar. Hidden pages are displayed in brackets in the navigation. For example, `[Hidden Page]`.


???+ info "Related information:"
    - [Marking pages as hidden under the content root](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/xml_config_ref/adxmlref_hide_page.md)

