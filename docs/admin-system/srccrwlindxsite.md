# Configuring a crawler to search your local portal site \| HCL Digital Experience

Configure and run a search crawler on your local portal site to gather information and create a search collection that enables your users to search your portal site.

Portal Search provides a default portal site search collection that enables your users to search your portal site. Before your users can search the portal site collection, configure the crawler.

1.  Set the crawler user ID. Set a dedicated crawler user ID for crawling the portal site content source:

    1.  Define the crawler user ID by using the Manage Users and Groups portlet.

        **Note:** It is of benefit to define a dedicated crawler user ID. The pre-configured default portal site search uses the default administrator user ID wpsadmin with the default password of that user ID for the crawler. If you changed the default administrator user ID during your portal installation, the crawler uses that default user ID. Set the crawler user ID if any of the following items are true:

        -   You changed the password for the wpsadmin or other administrative user ID
        -   You changed the default administrator user ID to an ID other than wpsadmin
        -   You want to use a separate user ID
    2.  Edit the portal site collection content source and enter the crawler user ID and its password:

        1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.
        2.  Click **Search Collections.**.
        3.  Select **Default Search Collection** from the Search Collection list.
        4.  In the Content Source Name list of the search collection, click the **Portal Content Source** search collection.
        5.  Click the **Edit** icon next to the Portal Content Source collection name.
        6.  Select the **Security** tab.
        7.  Click the **Edit** icon next to the security realm that you want to modify.
        8.  Type the crawler user ID and password into the appropriate fields.
        9.  Click **Update**.
        10. Click **Save** to save your changes. When you save the content source settings, **Manage Search** appends the locale information of the collection to the content source URL, unless you already added locale information.
    3.  For content sources of type **Web Site**, you can configure the crawler to follow external links from inside the portal. To do this task, modify the value in the field **Levels of links to follow** under the tab **General Parameters**. Set the level to a value higher than 1. In addition, you can configure filters for those external links from the Filters tab. The default filter suppresses all links that point back to portal pages. The default filter is displayed only after you save the configuration of the content source.

2.  Start the initial crawl. Start the initial crawl on the portal site content source:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.Then, click **Search Collections**.

    2.  In the search collection list, click **Default Search Collection**.

    3.  Click the **Start Crawler** icon next to the Portal content source name.

3.  Configure regular crawls. If you want regular crawls on the portal site content source, do either of the following tasks:

    -   Enable the default scheduler:
        1.  Click the **View Content Source Schedulers** icon next to the collection name.
        2.  In the Manage Schedulers page, click **Disabled**. This action changes the status of the scheduler to Enabled and displays a confirmation message.
    -   Set up your own scheduler:
        1.  Click the **Edit** icon for the content source.

            **Note:** You can have only one schedule at a time. Therefore, to create your own schedule, you first must delete the existing schedule.

        2.  Select the **Schedulers** tab.
        3.  Configure your own scheduler as needed. For more information, see *Manage Search portlet help*.
        4.  Click **Save** to save your changes.

For more information about how to work with content sources, see *Managing the content sources of a search collection* and *Manage Search portlet help*.

**Notes:**

1.  The local portal site is visible through a service that requires SSL. Therefore, if your portal is configured with a web server and you configure the content source root URL through the web server, you must configure the web server for SSL.
2.  By default, items in the result lists from portal site searches provide no summary information. If users use the Search and Browse portlet, they can refer to the information given under **Description:** for information about the search result list item. If you want to have the summary information that is added, configure the portlet with the summary parameter enabled as follows: PortalCollectionSummarizer=on.
3.  When you crawl a portal site, be aware that a Portal Search crawl can use extended memory and time, depending on your Portal Search environment and configuration. For details, see the topic about Hints and tips for Portal Search crawls.
4.  Do not change the default value of `1` for the option **Levels of links to follow**. Changing this value initiates web crawling logic and might result in unexpected results. For example, crawler might trigger unwanted in some of the administration portlets.
5.  The portal site search collection is created when an administrator goes to the Manage Search portlet. However, you must start the crawl for users to be able to search the portal site. Depending on your portal configuration and environment and possible customization, you might need to reset the portal site search collection that was created. For details about such scenarios and the necessary tasks to perform see the topic about Resetting the default search collection.
6.  If your users search the portal site search collection on a secured portal site, refer to the topic *Enabling search on a secured portal site with the default configuration*.
7.  The portal search crawler indexes static content pages and all pages that include portlets.

When users search a portal site, they can access portal pages of two types:

-   The Public or anonymous portal pages are pages that users can view without authentication by user ID and password. The crawler can crawl public pages on the portal site on which it is located, or on a remote portal.

    If you want anonymous users to be able to search the public pages of your portal site, see *Enabling anonymous users to search public pages of your portal*.

-   The secured portal pages are pages that users can view only if they authenticate themselves to the portal by logging in to the portal with a user ID and password. For details, see *configuring search on a secured portal site*.

    **Note:** You can crawl, index, and search secured portal pages only on your local portal installation. For security reasons, you cannot crawl secured pages of one portal site from another portal site.


If you customize search on your portal site, you might find useful information under the topics about configuring the default location for search collections and Resetting the default search collection.

If your portal site is multilingual and your users use different languages to search your portal, see the topic about Crawling a multilingual portal site.

**Parent topic:**[Searching your local portal \| HCL Digital Experience](../admin-system/srclocportal.md)

