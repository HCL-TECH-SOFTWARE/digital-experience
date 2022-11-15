# CP Configuration Service for tagging and rating

The CP Configuration Service provides the properties for tagging and rating.

**Usage notes for this topic:**

1.  The CP Configuration Service has properties for tagging and rating only. HCL Portal also has a portal Configuration Service (without "CP") that provides general portal configuration properties. The WebSphere® Integrated Solutions Console lists that service as WP ConfigService.
2.  The settings for the properties listed here apply to tagging and rating portal wide. Some of these properties have corresponding parameters that you can apply to individual tag or rating widget instances by the code that calls the widget instance. A setting applied to an individual widget instance overwrites the portal wide setting specified in the CP Configuration Service property listed here. For more details, read the topics about tagging and rating and the parameter reference topics for the widgets for tagging and rating.
3.  In the following lists of properties, the values given in parentheses are the default values. Properties marked with **<none>** have no default values.
4.  After you modify properties of one of the portal configuration services in the WebSphere Integrated Solutions Console, restart the portal server for your updates to take effect.
5.  The parameters listed here are specific to the inline tag and rating widgets that were introduced with HCL Portal Version 8.5. The dialog and inline widgets of earlier portal versions were deprecated with HCL Portal Version 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

???+ info "Related information"  
    -   [HCL Portal 8 Product Documentation](https://support.hcltech.com/csm?id;=kb_article&sysparm_article=KB0074915&sys_kb_id=2742800e1bda809083cb86e9cd4bcb4a)
    -   [Parameter reference for the tag and rating widgets](../../../../../../build_sites/tagging_rating/cfg_reference/parm_ref_tag_rate_widget/index.md)
    -   [Searching for tagged content](../../../../../../build_sites/search/tag_rate_search.md)
    -   [Configuring task to retrieve tags](../../../../../../extend_dx/integration/connections/configuration/cfg_connections_features/integrating_cnx_tags/i_coll_t_enable_lctags_task.md)
    -   [Tagging and rating](../../../../../../build_sites/tagging_rating/index.md)
    -   [The tag and rating widgets](../../../../../../build_sites/tagging_rating/tagging_rating_ui/tagging_rating_widget/index.md)
    -   [How public and private tags and ratings work in the portal](../../../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_publc_privt.md)
    -   [Filtering content for tagging](../../../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_filtr_cont.md)
    -   [The tagging and rating user interface](../../../../../../build_sites/tagging_rating/tagging_rating_ui/index.md)
    -   [Normalizing tags](../../../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_norm_local.md)
    -   [Redirecting to an HCL Connections site](../../../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_redirect.md)
    -   [Specifying an icon for a federated resource](../../../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_spec_icon.md)
    -   [Hints and tips for tagging and rating](../../../../../../build_sites/tagging_rating/hints_tips_tag_rate/index.md)
    -   [Hints and tips for developers and portal administrators](../../../../../../build_sites/tagging_rating/hints_tips_tag_rate/tag_rate_ref_hintip_4admins.md)

