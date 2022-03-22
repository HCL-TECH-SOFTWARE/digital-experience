# Using friendly URLs

You can associate friendly URLs with portal pages and labels. You and your users can use these friendly URLs to access specific portal pages or labels by using a human readable path, which is easy to remember.

For a friendly URL to work for a specific page, you must define a friendly URL name for every page or label in the path of the portal page hierarchy that leads to that page. You can do this in the page properties. Friendly URLs take the following general form:

```
http://host\_name:port\_number/[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/portal/page\_id/[!ut/p/encoded\_portal\_suffix]
```

The `page_id` portion of the friendly URL is made up of the friendly URL names of all pages in the path of the page hierarchy. This path begins at the content root and ends with the page for which you want to give your users a friendly URL.

Example: You have a portal page that is named **Products** in the user interface and has a friendly URL name `products`. Under this Products page you have another page, which is named **Appliances** and has a friendly URL name `appliances`. To access the **Appliances** page, users can type the following friendly URL into the browser address field:

```
http://www.example.com:10039/wps/portal/products/appliances
```

You can configure a friendly URL by using the portal toolbar or the Manage Pages administration portlet. To configure a friendly URL by using the Manage Pages portlet, use the following procedure.

**Note:** When you define friendly URLs within a virtual portal, consider the name restrictions. For more information, read *Human readable URL mappings for virtual portals*.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Locate the page for which you want to configure a friendly URL.

3.  Click the **Edit Page Properties** icon.

4.  In the field **Friendly URL name**, type the friendly name for the page.

5.  Click **OK** to save your changes.

6.  Repeat this procedure for every page or label in the path of the portal page hierarchy that leads to the target page.


To make up the full HCL Portal URL, the portal appends a suffix to that friendly URL. This suffix represents the current state of the page and its components. Some scenarios require short and fully human readable URLs that omit the state information. For information about how to configure short stateless URLs see *Using friendly URLs without state information*.

