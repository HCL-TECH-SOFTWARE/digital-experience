# Parameter reference for the tag and rating widgets

You can configure each of the portal tagging and rating features to determine the look and functionality of these features. To do so, you configure the tag and rating widgets.

## How to configure the tag and rating widgets

You can configure all tag and rating widgets globally by setting parameters in the portal CP configuration service in the WebSphere® Integrated Solutions Console. You can also configure individual instances of the tag and rating widgets by using the JavaScript parameters in the following topics. These settings become effective for the affected individual widget instance and override the settings set in the CP configuration service. The parameter settings take override priority by the following hierarchy:

1.  Settings that are specified for an individual tagging or rating widget instance take highest priority.
2.  If a parameter is not set for the individual widget instance, the settings specified in the CP Configuration Service takes effect.
3.  If a parameter is not set by either of the two previous options, the default value defined in the widget class itself takes effect.

!!! example
    In the CP Configuration Service, the attribute for custom labels `com.ibm.wps.cp.tagging.inline.customLabel` has no default value. The tag widget ABC instance includes the attribute `customLabel=MyTags`. As a result, all tag widgets in the portal have the custom label set to an empty string, as no default value is set. The tag widget ABC is the exception, because it has the attribute `customLabel=MyTags` set.

Most of the parameters exist as corresponding sibling parameters that you can set both globally in the CP Configuration Service and for individual widget instances and in your code. The parameter in the CP Configuration Service consists of the prefix `com.ibm.wps.cp.` and the related parameter for configuring widget instances. Example:

-   Parameter in the CP Configuration Service: `com.ibm.wps.cp.tagging.inline.maxResults`
-   Parameter for an individual tag widget instance: `maxResults`.

Some of the parameters have no corresponding siblings and exist only for one of the two ways of configuring them. The parameters that exist only for configuring widget instances are mandatory, as they identify the resource for which the widget is called.

For details about the parameters in the CP configuration service and how to set them, read the topics about the portal *CP Configuration Service for tagging and rating* and *Setting service configuration properties*.

**Usage notes for the parameter lists in the following topics:**

-   The lists show the parameters with their default if they have one. In these cases the parameters are shown with an equal sign between the parameter and the value. This is how you specify the setting when you include the widget declaratively. If you include the widget programmatically, use a colon instead of the equal sign.
-   The parameters listed here are specific to the inline tag and rating widgets that were introduced with HCL Portal Version 8.5. The dialog and inline widgets of earlier portal versions were deprecated with portal V 8.5. For information about the earlier widgets and their parameters, read the appropriate topics in the HCL Portal Version 8.0 product documentation.

<!---
-   **[Tag widget parameter reference](../admin-system/tag_rate_parm_ref_inl_tag_lite.md)**  
You configure specific tag widget instances by setting the JavaScript parameters that are listed here.
-   **[Rating widget parameter reference](../admin-system/tag_rate_parm_ref_inl_rate_lite.md)**  
You configure rating widget instances by setting the JavaScript parameters listed here.
-->

???+ info "Related information:"
    - [CP Configuration Service for tagging and rating](../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [How tagging and rating works in the portal](../../howto_tagging_rating/index.md)
    - [The tag and rating widgets](../../tagging_rating_ui/tagging_rating_widget/index.md)
    - [The tagging and rating user interface](../../tagging_rating_ui/index.md)
    - [Hints and tips for tagging and rating](../../hints_tips_tag_rate/index.md)

