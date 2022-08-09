# How to apply the multilingual solution to Content Template sites

The HCL Web Content Manager Multilingual Solution consists of patterns, tools, and plug-ins for creating and managing multi-language and multi-locale sites.

The Content Template Catalog Design Translations plug-in frees you from having to localize any of the strings in the CTC Design library that are used throughout the Content Template Catalog templates. This plug-in can also be reused to bring in translations to your custom designs.

Follow these general steps to build a Content Template site that is localized by using the Multilingual Solution. Familiarize yourself with both Content Template and the Multilingual Solution before you begin.

-   Start by creating a simple site. Learn how the templates work and what you can and cannot do through simple template instantiation. Having this background knowledge can help you design your site and plan the site build.
-   To understand the Multilingual Solution, read the documentation carefully to understand how the localization patterns work. Learn which pieces of code are supplied with the Multilingual Solution for you to use and customize.

When you have two locales that are built, test them to ensure that the rendering of the site and the localization workflow process are the way that you expect and make modifications as needed.

**Note:** You can optionally install a set of localized demonstration sites. See [The localized CTC demonstration sites](ctc_overview_comp_demo-mls.md) for further information.

-   **[HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls.html)**  

-   **[Installing and configuring the HCL Web Content Manager Multilingual Solution](../ctc/ctc_deploy_locale_install.md)**  
HCL Web Content Manager Multilingual Solution needs to be on the server for the translation field to appear on Content Template templates, and for you to start implementing multilingual support for your sites.
-   **[Adding authoring templates for a localized site](../ctc/ctc_deploy_locale_auth.md)**  
For any authoring templates that you create yourself, add the Multilingual Solution element as described in the Multilingual Solution documentation.
-   **[Building the base locale site](../ctc/ctc_deploy_locale_base.md)**  
The Multilingual Solution is built around the concept of a base locale where content is created first, before being copied and translated or otherwise prepared for other locales.
-   **[Preparing the Content Template portlets for multiple languages](../ctc/ctc_deploy_locale_theme.md)**  
The theme for a multilingual site typically contains locale switching navigation. You must also set up the HCL Web Content Manager viewing portlets to react to a change in locale.
-   **[Rolling out a second locale](../ctc/ctc_deploy_locale_second.md)**  
It is best to start with a single extra locale, and then add others \(if required\) afterwards.
-   **[How to add content to a CTC multilingual site by using page templates](../ctc/ctc_deploy_add_content.md)**  
Adding content by using a page template to a base library on a Content Template multilingual site works differently to a standard site. Extra steps are required to ensure that the content is available in all of the sites of your multilingual system, and that new content passes through a multilingual workflow.
-   **[Testing multilingual support](../ctc/ctc_deploy_locale_test.md)**  
With two locales set up, you can test the end-to-end multilingual solution.
-   **[Localized site search](../ctc/ctc_deploy_locale_search.md)**  
To search localized sites using the Search Results page template, you must create different search collections for each language. If you installed the CTC Demo site with the option CTC\_MLS set to true, then the search components are already set up for the localized versions of the Arabic, Spanish, German, and Chinese CTC Demo sites. However, the search collections for these languages still have to be created.

**Parent topic:**[Content Template Catalog 4.4](../ctc/ctc_intro.md)

**Related information**  


[CTC Design Translations plug-in](../ctc/ctc_arch_plugins_trans.md)

[HCL Web Content Manager Multilingual Solution](../wcm/wcm_mls.md)

