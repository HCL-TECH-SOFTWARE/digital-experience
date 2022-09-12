# Improving page loading performance with asynchronous web content rendering

You can increase page loading performance by separating portal page content delivery from web content rendering. To do so, you use the asynchronous web content rendering feature. If you enable asynchronous web content rendering, the portal serves the page immediately, but only with placeholder content. The Web Content Viewer then dynamically inserts the configured content into the portal page after the content has been completely rendered.

Asynchronous web content rendering separates the web content delivery into two steps:

1.  First, HCL Digital Experience serves the page with a predefined static markup instead of the web content. This so called bootstrap markup then asynchronously triggers the second stage by using a resource URL.
2.  In a second step, the Web Content Viewer portlet renders the requested web content, which then is inserted into the correct placeholder of the current portal page. For this step, the Web Content Viewer portlet uses the `XmlHttpRequest` function of the web browser and JSR 286 compliant serving of resources.

Asynchronous web content rendering is intended to be used for web content that needs a long time to be created. Examples are web content that is remotely served or content that is created by extensive back-end operations. Such content increases the total time for loading a portal page because the portal needs to aggregate all portlets on a page. Therefore, the user experience improves by selectively enabling asynchronous web content rendering for Web Content Viewer portlets that take a long time to render. Whether asynchronous web content rendering is useful depends on the page composition and the web content. The site administrator needs to evaluate it for each individual portlet.

**Notes:**

-   By default, asynchronous web content rendering is disabled for all instances of the Web Content Viewer portlet. You enable it by using the Edit Shared Settings or Configure mode.
-   If you enable asynchronous rendering, the Web Content Viewer portlet uses it only while the portal is in View mode.
-   The portal does not use asynchronous web content rendering for requests by search crawlers. This way, the portal makes sure that web content is correctly analyzed and used by search engines.

-   **[Enabling asynchronous web content rendering](../wcm/wcm_config_asynch_rendr_nbl.md)**  
You enable asynchronous web content rendering by using the Edit Shared Settings or Configure mode.
-   **[Customizing loading markup for asynchronous web content rendering](../wcm/wcm_config_asynch_rendr_cust_load_markup.md)**  
To adjust the loading markup to the user experience, you can customize it. For example, you can use a company-specific loading icon or text.
-   **[Using onPageLoad scenarios with asynchronous web content rendering](../wcm/wcm_config_asynch_rendr_onpage_load.md)**  
Separating the page delivery from the web content delivery can increase the page loading time. However, all JavaScript functions that rely on the onPageLoad functions can access only the bootstrapping markup, but not the rendered web content markup. The web content markup is injected into the page as soon as it is ready.
-   **[Asynchronous web content rendering and caching](../wcm/wcm_config_asynch_rendr_cache.md)**  
The Web Content Viewer portlet supports setting specific portlet fragment caching configuration values. This caching also works with asynchronous web content rendering. However, the respective content for the fragment cache is different.


