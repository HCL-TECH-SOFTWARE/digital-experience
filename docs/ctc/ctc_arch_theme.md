# Content Template theme extensions 

Content Template Catalog sites that run on HCL Digital Experience 8.5 are based on the HCL Portal 8.5 theme with Content Template theme extensions added.

Content Template contributes modules to the Portal 8.5 theme that allow CTC portlets to be used on any portal page.

Content Template adds a profile that is called "CTC Content" to ensure that the Content Template modules are included in the page. All pages in a Content Template site should use this profile.

To implement the design that is used in Content Template, modules are defined that can be included in a theme profile. A combination of modules can be referenced to enable or disable certain Content Template features. The modules that can be referenced in a profile are:

-   **ctc\_content**

    This module delivers the required styling and scripts for displaying Content Template pages and portlets.

-   **ctc\_content\_responsive**

    This module adds responsive support to the content, by using CSS Media Queries, allowing the content to work at different sizes.

-   **ctc\_content\_devices**

    This module selectively loads styles and scripts based on the current device. Use this module if you need to support multi-channel devices without affecting the desktop site.

-   **ctc\_theme**

    This module optimizes the portal theme for easier content editing and includes the Content Template navigation, header, and search content module changes.

-   **ctc\_theme\_responsive**

    This module expands on the ctc\_theme module to allow scaling of the desktop site and responsive device support.

-   **ctc\_theme\_devices**

    Use this module if you need to support multi-channel devices without affecting the desktop site.


-   **[Content Template theme layouts ](../ctc/ctc_arch_layouts.md)**  
In addition to the column and grid layouts available with the Portal theme, a few four-row layouts were created to work with the Content Template Catalog theme extensions. They are based on six-column and four-column grids.
-   **[Navigation changes in the Portal 8.5 theme ](../ctc/ctc_arch_theme_nav8.md)**  
Content Template Catalog 4.4 running on HCL Digital Experience 8.5 uses a fixed two-level navigation system.

**Parent topic:**[Content Template Catalog themes and styles ](../ctc/ctc_arch_css.md)

