# Defining friendly URLs without state information for pages in your site

The Configuration Wizard option for Modifying Site URLs for Search Engine Optimization makes it possible to remove navigational state information from your site URLs site wide. To enable friendly URLs without state information at the page level, you must complete extra steps after you use this option.

Remove the URL generation filter if you previously installed it. For information, read [Example 2: Generate a friendly URL for web content](../../../../../manage_content/wcm_development/wcm_custom_plugin/wcm_dev_api_urlgen/wcm_urlgen_xmp2/index.md).

1.  Configure your site URLs with the option for Modifying Site URLs for Search Engine Optimization in the Configuration Wizard.

    To remove navigational state information in your URLs, select **No** for the option **Do you want your portal URL to contain navigational state information**. After you successfully complete your configuration, navigational state information is removed site wide.

    To remove navigational state information at the level of an individual page and its child pages, set the page parameter `generate.stateless.urls` to `true` for that page. To keep navigational state information for a page, set the parameter to `false`. For information about how to use that parameter, read about the property `generate.stateless.urls` in *Configuration Service*.

2.  Define friendly URL names for pages.

    You can configure a friendly URL at the page level from the site toolbar or from Manage Pages administration portlet.

    -   To define friendly URLs for your pages from Administration, go to [Using friendly URLs](../../../portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/mp_friendly_url.md).
    -   To define friendly URLs for your pages from the site toolbar, use the following instructions:
        1.  Turn on edit mode from the action bar. Site Manager opens automatically. If Site Manager does not open automatically, click the Site Manager icon to open it.
        2.  In Site Manager, click the page for which you are defining a friendly URL name. Then, click the context menu icon.
        3.  From the context menu, click **Open Page Settings**.
        4.  From the General tab, click **Edit** by Edit Page Properties.
        5.  In the **Friendly URL name** entry field, enter the name of the page as you want it to appear in the friendly URL.
        6.  Click **Save**.
3.  Associate pages that render web content with the default site area of that web content. Complete the following steps to generate friendly URLs for that web content:

    1.  Turn on edit mode from the action bar. Site Manager opens automatically. If Site Manager does not open automatically, click the Site Manager icon to open it.

    2.  In Site Manager, click the page that contains the web content viewer that is used to render the web content you want to generate friendly URLs for. Then, click the context menu icon.

    3.  From the context menu, click **Open Page Settings**.

    4.  From Details tab, click **Edit by Default site area**.

    5.  On the Manage Associated Content page, click **Add web content** to select the site area of your web content or one of the parent site areas.

    6.  From the list of associated content, select the newly added site area association by clicking the radio button.

    7.  Click **OK**.

4.  You might want to present language-specific portal pages with stateless friendly URLs to your site visitors. In this case, structure your portal site to reflect which pages are targeted for specific countries or regions. You can create a node for a specific page, and then create language-specific child pages under that node.

    For example, in the node `home`, you create pages in English, French, and German \(as emphasized below\). Your site visitors can then access the page in their preferred language by using one of the following friendly URLs:

    -   http://www.cntserv\_exmp.com/wps/home/en/shop
    -   http://www.cntserv\_exmp.com/wps/home/fr/shop
    -   http://www.cntserv\_exmp.com/wps/home/de/shop

You can configure themes to display only short URLs without state information. You can configure pages that use that theme to display friendly URLs.


???+ info "Related information"
    - [URL Addressability](../../../../../build_sites/create_sites/url_addressing/index.md)
    - [About friendly URLs for web content](../../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_workfriendly.md)
    - [Friendly URL for web content example](../../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_friendlyexample.md)
    - [Example 2: Generate a friendly URL for web content](../../../../../manage_content/wcm_development/wcm_custom_plugin/wcm_dev_api_urlgen/wcm_urlgen_xmp2/index.md)
    - [Using friendly URLs](../../../../manage/portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/mp_friendly_url.md)

