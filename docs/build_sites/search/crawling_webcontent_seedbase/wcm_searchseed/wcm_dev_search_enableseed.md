# Enabling support for search seedlist 1.0

If you want to use Portal Search to crawl your web content and use features like web content pages, you must enable seedlist 1.0 support for the Portal Search crawler.

1.  Log in to the portal as an administrator.

2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

3.  To create a new search collection,

    1.  Click **Search Collections**.

    2.  Create a new search collection for your web content. Be sure that the new search collection uses the portal search service that is edited in the previous steps.

4.  Add the following custom properties to the `WP ConfigService` resource environment by using the WebSphere® Integrated Solutions Console:

    1.  wcm.config.seedlist.version=1.0

    2.  wcm.config.seedlist.servletpath=/seedlist

    3.  wcm.config.seedlist.metakeys=<metakey1\>,<metakey2\>

        This is an optional step and is only required if you want to specify your own metadata.
