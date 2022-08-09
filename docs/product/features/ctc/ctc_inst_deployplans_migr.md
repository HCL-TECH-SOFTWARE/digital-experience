# Planning an upgrade to customized Content Template Catalog sites

If you plan to upgrade Content Template and you have customized components from the previous release, you must take steps to protect and migrate your customized designs.

## Migrating to HCL Portal version 8.5

Content Template version 4.4 can only be installed on HCL Portal version 8.5 with CF08 or higher. Before upgrading to Content Template version 4.4 you must migrate your servers to HCL Portal version 8.5 with CF08 or higher. It is essential that you follow all the migration and post migration steps as detailed in the HCL Portal version 8.5 migration documentation before upgrading to Content Template version 4.4.

## CTC Libraries

-   **CTC Design and CTC Content libraries**

    Customizations directly to these libraries are not recommended. The installation will either fail or overwrite your changes.

-   **CTC Process library**

    Modifications to the process library are unavoidable. Install with the CTC\_DESIGN and CTC\_BASE options. Items you have added to the Process library are untouched, but you must reapply any other changes. This usually involves re-selecting workflow stages.

-   **CTC Theme**

    Modifications to the CTC theme are also expected. Compare the stylesheet files on the server with the updated ones in the CTC installation package. The .css files must be extracted from the .paa file to view them.

    View the differences between the content.css and content-base.css files as well as the theme.css and theme-base.css files. Copy any relevant changes to the new stylesheets. Also review the content\_large\_screen.css, content\_mid\_screen.css, and content\_small\_screen.css files to ensure that customizations work across all devices.

-   **CTC Demo library**

    The demonstration site has been modified to take advantage of new features for this release. Make a note of changes you made to the site, then reinstall the demonstration site and reapply your changes.


## Edit Mode

This step is only required when upgrading from version 3.x.

The Content Template version 4.x features a redesigned editing experience that uses the new Inline editing features of Web Content Manager. Because these features are not supported by previous versions of the CTC Theme, it is recommended to move to the Portal 8.5 theme with the CTC Theme Extensions after migration. For more information see:

-   [How to preserve theme and layout changes after you upgrade from 3.x](ctc_migr_custtheme-3-x.md)
-   [Preserving theme and layout changes after upgrading from 4.1.x](ctc_migr_custtheme-4-1-x.md)

## Updating Customized Designs

This step is only required when upgrading from version 3.x.

Designs that have been copied from the CTC Design Library and customized may require some changes to work when used with the new CTC styling and theme contributions. Copies of the following designs will need to be updated when moving to the new CTC theme extensions:

-   **Component Designs**

    -   Carousel Design with Summary
    -   Carousel Design without Summary
-   **Footers**

    -   Slideshow Footer Script
    -   Carousel Footer Script
-   **Headers**

    -   Index Filter Form

**Parent topic:**[Upgrade preparation](../ctc/ctc-upgrade-prepare.md)

**Related information**  


[Content Template stylesheets](../ctc/ctc_arch_css_files.md)

