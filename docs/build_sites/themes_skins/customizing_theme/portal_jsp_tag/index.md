# Tags used by the portal JSPs

Learn about the most commonly used tags in the portal JSPs. Use these tags to modify the appearance and layout of the portal page.

The following links provide topics with summary descriptions of each tag - grouped by tag type. Each separate topic also provides tag descriptions and code examples:

!!! note
	Do not use portal tags in portlet JSPs. The tags that are mentioned are only for use in theme and skin JSPs.

-   [<portal-core/\> tags](dgn_ptlcore.md) - Used to provide portal core functions such as entering the main render flow and URL-related aspects of the page.
-   [<portal-dynamicui/\> tags](dgn_ptldynam.md) - Used to enable dynamic user interface features such as closing dynamic portlets and pages.
-   [<portal-fmt/\> tags](dgn_ptlfmt.md) - Used to provide enhanced portal formatting capabilities.
-   [<portal-logic/\> tags](dgn_ptllogic.md) - Used to provide conditional logic.
-   [<portal-navigation/\> tags](dgn_ptlnavig.md) - Used to implement navigation tasks such as generating URLs and traversing the portal navigation model.

To use these tags, the following `taglib` declarations must be provided in the parent JSP of the theme:

```

<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-navigation" 
		prefix="portal-navigation" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-dynamicui" 
		prefix="portal-dynamicui" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-logic" 
		prefix="portal-logic" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-core" 
		prefix="portal-core" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-fmt" 
		prefix="portal-fmt" %>

```

The following `taglib` declarations must be provided to the parent JSP of the skin - in addition to the ones in the theme:

```

<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-skin" 
		prefix="portal-skin" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8.5/portal-showtools" 
		prefix="portal-showtools" %>

```

!!! note
	-   The tags in the `portal-internal.tld` tag library are not intended for customization, but for use only by internal portal code.
	-   The tags in the `engine.tld` and `portal-internal.tld` tag libraries are not intended for customization, but only to support compatibility with an earlier version and migration. The `engine.tld` tag library are not available in subsequent releases of HCL Portal.
	-   z/OS® only: The tags in the `engine.tld`, `engine_v2.tld`, and `portal.tld` tag libraries are not intended for customization, but only to support compatibility with an earlier version and migration.

-   **[<portal-core/\> tags](dgn_ptlcore.md)**  
The <portal-core/\> tags are used to provide portal core functionality such as entering the main render flow as well as URL-related aspects of the page.
-   **[<portal-dynamicui/\> tags](dgn_ptldynam.md)**  
The <portal-dynamicui/\> tags are used to enable dynamic user interface features such as closing dynamic portlets and pages.
-   **[<portal-fmt/\> tags](dgn_ptlfmt.md)**  
The <portal-fmt/\> tags are used to provide enhanced portal formatting capabilities.
-   **[<portal-logic/\> tags](dgn_ptllogic.md)**  
The <portal-logic/\> tags are used to provide tags for conditional logic.
-   **[<portal-navigation/\> tags](dgn_ptlnavig.md)**  
The <portal-navigation/\> tags are used to implement navigation tasks such as generating URLs and traversing the portal navigation model.

???+ info "Related information:"
	- [Instrumenting a theme for Active Site Analytics](../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/collecting_analytics_data/instrumenting_theme_for_asa/index.md)
	- [Injecting custom aggregators](../../../../deployment/manage/monitoring/analyze_portal_usage/user_behavior_by_asa/collecting_analytics_data/instrumenting_theme_for_asa/sa_asa_injct_custaggrg.md)
	- [Dynamically changing the language during the user session](../../../../extend_dx/development_tools/portal_admin_tools/language_support/adchglang_dynamic.md)

