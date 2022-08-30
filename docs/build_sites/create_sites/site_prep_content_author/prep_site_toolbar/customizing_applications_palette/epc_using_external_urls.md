# Creating categories by using external URLs

You can also use external URLs to represent categories to organize your portlet entities. The advantage of representing labels, or external URLs, with categories is that administrators can easily add, delete, and modify categories by using the Manage Pages portlet as the administrative user interface. Since categories are labels, or external URLs, they can be assigned localized titles and descriptions, which can be set with the Manage Pages portlet as well.

To assign portlets to these categories, you must point the external URL to a feed that returns either a list of portlet definitions or a list of portlet entities. These portlet definitions or portlet entities then represent the portlets that are shown as being part of the Applications palette.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Locate the category root label.

    For example, search for the label with the unique name `com.ibm.portal.toolbar.applications.category.label.root`.

3.  Click **New URL** to add a new label.

4.  Add a title and description for the new category. Click **OK**.

5.  In the **Advanced Options** section, select **HTML** as supported markup. Specify a URL pointing to a feed that returns a list of portlet definitions or portlet entities.

6.  Click **OK**.

7.  Verify that the category and portlet entities appear on the Applications palette.



