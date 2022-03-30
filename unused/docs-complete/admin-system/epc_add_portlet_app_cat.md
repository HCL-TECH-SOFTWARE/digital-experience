# Creating new applications and categories for the site toolbar 

You can add new categories to the site toolbar to organize your applications. After you deploy portal, you can customize the Create \> Applications user interface in the site toolbar. Add categories that reflect your business needs and website organization.

Portlets that are deployed on the portal server are automatically added to the All category.

The site toolbar structure is based on labels and pages. Create a label to add a category. Then, create a page for each application that you need to add to the site toolbar. The page title must match the name of the application.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Locate the category root label.

    For example, search for a title that contains "Application" and then look for the unique name `com.ibm.portal.toolbar.applications.category.label.root` in the results.

3.  Click **New Label**.

4.  Enter the name of the category in the **Title** field. Click **OK**.

5.  Click the new label.

6.  Click **New Page** to add a child page.

7.  Enter the name of the application that you want to add to the site toolbar in the **Title** field and click **OK**.

8.  Click **Edit Page Layout** and add the portlet to the page. Click **Done**

9.  Verify that the category and portlet appear on the Applications palette.


If your content authors do not see the portlet that you added, the site toolbar might be cached. The feed that displays all portlets is cached after the content author views it. If you deploy a portlet and the site toolbar is already cached, the newly deployed portlet is not visible until the cache expires, which is 1 hour. To see the portlet sooner, look up the portlet in the **Manage Portlets** administration portlet and then go back to the site toolbar.

**Parent topic:**[Customizing the Applications palette ](../admin-system/epc_app_categories.md)

