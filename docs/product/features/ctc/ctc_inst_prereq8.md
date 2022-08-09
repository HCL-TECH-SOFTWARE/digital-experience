# Prerequisite software for installing Content Template 4.4

Before you install Content Template Catalog 4.4, ensure that you have installed or configured the following prerequisites, and read the system requirements documentation.

-   HCL Digital Experience 8.5 with CF08 installed. See [Installing](../install/installing_parent2.md)[Installing](../install/installing_parent2.md) for further information.

    **Note:** Content Template Catalog can be installed on either a base profile or content profile. When you install on a base profile the CTC installation enables both Web Content Manager and Personalization before it installs Content Template.

    **Note:** The Portal Solution Installer is part of HCL Digital Experience 8.5. You do not need to install it.

-   Content Template 4.4 is supported on all platforms that are supported by HCL Portal 8.5 except for IBM® i.
-   The HCL Portal toolbar must be installed for Content Template to install correctly. The toolbar is enabled by default on HCL Portal 8.5, but must be enabled if you have migrated from HCL Portal 8.0.x or 7.0.x: [Enabling the 8.5 site toolbar](../migrate/mig_t_enable_toolbar.md)[Enabling the 8.5 site toolbar](../migrate/mig_t_enable_toolbar.md).
-   The "Hidden Pages" label and "Page Templates" label are required for Content Template Catalog to install correctly. These labels are not installed if you create an empty virtual portal. If you have installed an empty virtual portal, these labels must be created manually.
-   Ensure you also read the [HCL Portal V8.5 and V8.0 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514).
-   The Apache Derby database that is available for immediate use after you install the portal is not supported for use with CTC. See [Database Considerations](../plan/db_considerations.md)[Database Considerations](../plan/db_considerations.md) for further information.

**Parent topic:**[Planning to use Content Template](../ctc/ctc_inst_deployplans.md)

**Related information**  


[Database considerations](../plan/db_considerations.md)

