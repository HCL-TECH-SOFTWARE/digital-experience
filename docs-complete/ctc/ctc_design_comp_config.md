# Creating and managing page component configurations 

There are often occasions when the same page component configuration can be used either throughout the site, or at least across an entire branch of the site. In these cases, you need to manage the usage of the page component configuration by ensuring it is created once, and then reused by using the page component configuration portlet.

A page component is a component of the page such as a Slideshow, List, Carousel, and Block. A content item configures how these page components appear in the portlet.

![Page Components diagram](../images/pagecomponents.jpg)

This is a key concept in Content Template and allows for much reuse of page components by mixing and matching them in different ways throughout the site.

It is important to understand that page component configurations created by using a page template or a pre-configured portlet are always copied into the current area. This is useful if you want to modify that particular configuration independently of any others, such as modifying a list title or selecting alternative styling.

**Note:** The Component Configuration portlet points to a dummy content item when you first place it on the page. The dummy content item is a prompt to edit the shared settings for the portlet. Do not modify the dummy content item. It is not a copy. It is a single dummy item in the CTC Content library.

-   **[Page component configuration items ](../ctc/ctc_arch_prestemp_compconfig.md)**  
Use page component configuration items to customize different aspects of individual page components.
-   **[Creating page component configurations automatically ](../ctc/ctc_design_comp_config_auto.md)**  
You create page component configurations automatically when you create a page from a Content Template Catalog page template or when you drop a pre-configured portlet onto the page.
-   **[Creating page component configurations manually ](../ctc/ctc_design_comp_config_manual.md)**  
You can create page component configurations by copying them from page templates or pre-configured portlets. You can also create a page component configuration from scratch.
-   **[Sharing page components in a branch ](../ctc/ctc_design_comp_config_branch.md)**  
The basic case for sharing a page component configuration is across an index and details page. All of the page templates are set up this way – with page components often being reused across the two pages. You can do the same thing by creating a page component configuration first on an index page, and then referencing it on a details page.
-   **[Using global page components ](../ctc/ctc_design_comp_config_global.md)**  
Sometimes there will be page component configurations that are general enough that you can use them across the entire website. For example, a sitemap footer is usually the same across all pages.

**Parent topic:**[A Content Template Catalog roadmap for site developers ](../ctc/ctc_gs_site_devs.md)

