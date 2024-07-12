# The Woodburn Studio demo site

Woodburn Studio is a website that demonstrates the use of some popular HCL Digital Experience features.

Included in HCL Digital Experience 9.5, Woodburn Studio is a demo site for a fictional organization. Its intent is to show some of the capabilities that exist within HCL Digital Experience.

Woodburn Studio leverages in-line editing and site management tools, as well as role and device-based controls on some parts of the site.

It is not recommended to use Woodburn Studio for anything but a demo site. Woodburn Studio currently does not have E-commerce functionality.

The Woodburn Studio demo site has a home page and several other microsites with one or more pages. Many of the elements are reused across the demo site, and they are styled for the page on which they appear.

## Working with Woodburn Studio

Woodburn Studio is not deployed by default.

You can deploy, configure, and disable Woodburn Studio the same way you deploy Practitioner Studio. Go to [Working with Practitioner Studio](../practitioner_studio/working_with_ps/index.md) for more information.

!!! note
    Upon initial deployment, the HCL Digital Experience search indexes are not yet built. Therefore, search will not yield results for pages and content in the Woodburn Studio demonstration site until the search indexing services have run the first time. This will automatically occur with 24 hours of the initial deployment of DX.

However, one can immediately force the indexer to run manually from the **Search Collections** screen in **Administration** \> **Search** \> **Search Collections** from the Practitioner Studio interface:

1.  From your HCL Digital Experience 9.5 Practitioner Studio interface, click Administration from the navigation menu.
2.  Click **Search**, then **Search Collections**.
3.  Click **Default Search Collection** from the Search Collection list.
4.  To start the crawler for the WCM Content Source, click the **Play** icon next to that source.
5.  To start the crawler for the Portal Content Source, click the **Play** icon next to that source.

Go to [Configuring a crawler to search your local portal site](../search/searching_local_portal/srccrwlindxsite.md) for more information about configuring and running a search crawler on your local portal site.

!!!note
    If you have uninstalled HCL DX version 9.5, the Practitioner Studio or Woodburn Studio Theme applications are not removed.

    After Practitioner Studio and Woodburn Studio are installed, neither of their .ear files are removed from the WebSphere Administration Console. When you upgrade HCL DX to CF17 or later and you have removed HCL DX version 9.5, the upgrade will fail because the upgrade configuration tasks use these .ear files to take actions that are valid only for version 9.5. If HCL DX version 9.5 is uninstalled from the environment, you must manually uninstall the Practitioner Studio Theme and Woodburn Studio Theme applications from the WebSphere Administration Console to successfully upgrade your CF version. 

-   **[Filtering the results of a WCM Navigator Component](woodburn_studio_filtering_WCM.md)**  
This document shows how to filter navigator component results and uses the Woodburn Studio site as an example of when this type of filtering might be needed.
-   **[Preventing automatic update of Woodburn Studio pages](../woodburn_studio/update_pages_optional.md)** 



