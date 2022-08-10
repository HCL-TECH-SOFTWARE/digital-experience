# Updating page templates

With Version 8.5, there are several new features related to templates used to create portal pages. Some of these features cannot be automatically configured by the migration process. To fully support the page template features in Version 8.5, you must perform additional configuration manually.

1.  Define a default page template on the migrated portal.

    With Version 8.5, all pages created with the Portal 8.0 theme are based on a page template. You must define a default page template that is used when the user does not select another, specific template for the new page.

    1.  Open the administration interface, and navigate to Manage Pages.

    2.  Locate the template root page. The template root page contains any page templates defined for the portal. In the **Search by** field, select **Unique name contains**, and search for the page identified by the unique name `wps.content.template.root`.

    3.  Create a child page to serve as the default page template.

        Give the page a title such as `Default`, and ensure that you use the following unique name for the page: `wps.content.template.default`.

2.  Move the template root page out of the administration page area.

    When users access a page, the page structure containing the page is displayed. In Version 7.0, the template root page is part of the administration page hierarchy. When you migrate to Version 8.5, this same page structure is preserved. Because of this structure, the `Administration` page label is displayed for users who have been granted access to a page template. To avoid displaying the `Administration` page label, you can move the template root page out of the administration page hierarchy to another location.

    1.  Locate the template root page, identified by the unique name `wps.content.template.root`, and mark the page for moving.

    2.  Locate the target page where you want to move the template root page. To ensure that template pages do not display their full page structure when accessed, move the template root page to the **Hidden Pages** label. The **Hidden Pages** label is identified by the unique name `ibm.portal.HiddenPages`.

    3.  Copy the marked page to the target location.

        **Note:** If you move the template root page to the **Hidden Pages** label, consider creating a link in the administration area to the template root page. With the link, administrators can access page templates more directly.


