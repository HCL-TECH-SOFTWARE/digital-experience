# CP Configuration Service for tagging and rating 

The CP Configuration Service provides the properties for tagging and rating.

**Usage notes for this topic:**

1.  The CP Configuration Service has properties for tagging and rating only. HCL Portal also has a portal Configuration Service \(without "CP"\) that provides general portal configuration properties. The WebSphere® Integrated Solutions Console lists that service as WP ConfigService.
2.  The settings for the properties listed here apply to tagging and rating portal wide. Some of these properties have corresponding parameters that you can apply to individual tag or rating widget instances by the code that calls the widget instance. A setting applied to an individual widget instance overwrites the portal wide setting specified in the CP Configuration Service property listed here. For more details, read the topics about tagging and rating and the parameter reference topics for the widgets for tagging and rating.
3.  In the following lists of properties, the values given in parentheses are the default values. Properties marked with **<none\>** have no default values.
4.  After you modify properties of one of the portal configuration services in the WebSphere Integrated Solutions Console, restart the portal server for your updates to take effect.
5.  The parameters listed here are specific to the inline tag and rating widgets that were introduced with HCL Portal Version 8.5. The dialog and inline widgets of earlier portal versions were deprecated with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

-   **[General properties for tagging and rating ](../admin-system/srvcfg_cpcfg4tr_genrl.md)**  
View the general properties for tagging and rating.
-   **[Properties for the tag widget ](../admin-system/srvcfg_cpcfg4tr_dlgtag_altui.md)**  
View the properties for the tag widget.
-   **[Properties for the rating widget ](../admin-system/srvcfg_cpcfg4tr_dlgrate_altui.md)**  
View the properties for the rating widget.

**Parent topic:**[Portal service configuration ](../admin-system/srvcfgref.md)

**Related information**  


[HCL Portal 8 Product Documentation](https://support.hcltech.com/csm?id;=kb_article&sysparm_article=KB0074915&sys_kb_id=2742800e1bda809083cb86e9cd4bcb4a)

[Parameter reference for the tag and rating widgets](../admin-system/tag_rate_parm_ref.md)

[Searching for tagged content ](../admin-system/tag_rate_search.md)

[Configuring task to retrieve tags ](../collab/i_coll_t_enable_lctags_task.md)

[Tagging and rating ](../admin-system/tag_rate_mngadmin.md)

[The tag and rating widgets ](../admin-system/tag_rate_ui_alt.md)

[How public and private tags and ratings work in the portal ](../admin-system/tag_rate_adm_publc_privt.md)

[Filtering content for tagging ](../admin-system/tag_rate_adm_filtr_cont.md)

[The tagging and rating user interface ](../admin-system/tag_rate_ui.md)

[Normalizing tags ](../admin-system/tag_rate_adm_norm_local.md)

[Redirecting to an HCL Connections site ](../admin-system/tag_fed_admin_redirect.md)

[Specifying an icon for a federated resource ](../admin-system/tag_fed_admin_spec_icon.md)

[Hints and tips for tagging and rating ](../admin-system/tag_rate_ref_hintip.md)

[Hints and tips for developers and portal administrators](../admin-system/tag_rate_ref_hintip_4admins.md)

