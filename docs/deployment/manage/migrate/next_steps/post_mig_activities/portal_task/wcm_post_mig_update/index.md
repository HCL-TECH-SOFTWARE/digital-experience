# Web Content Manager

Extra migration steps are required for updating Web Content Manager after data migration is complete.

-   **[Updates for Web Content Manager](../migrate/mig_post_wcm_removeupdate.md)**  
These are additional migration steps required for Web Content Manager after data migration is complete.
-   **[Updating Web Content Manager pages theme](../migrate/mig_post_vp_wcm_theme.md)**  
Before using Web Content Manager in virtual portals that are created after migration by using default portal content from an older release, you must update the theme to ﻿Portal 8.5 theme. Otherwise, Web Content Manager related portlets do not work properly. If you upgraded or migrated to HCL Digital Experience Version 8.5 CF04 or later, then you do not need to complete the following steps.
-   **[Convert the Portlet API Web Content Viewer to the JSR 286 Web Content Viewer](../migrate/mig_post_wcm_convert_viewer.md)**  
If you use the Portlet API Web Content Viewer portlet in your source environment, you must complete the following task after migration to convert to the JSR 286 Web Content Viewer.
-   **[Convert the Portlet API Remote Web Content Viewer to the JSR 286 Web Content Viewer](../migrate/mig_post_wcm_convert_remote.md)**  
If you use the Portlet API Remote Web Content Viewer portlet in your source environment, you must complete the following task after migration to convert to the JSR 286 Web Content Viewer.
-   **[Converting a Portal API Web Content Viewer to the JSR 286 API](../migrate/migrt_ptlt_api_wcm.md)**  
As installed by default, the Web Content Viewer is based on the JSR 286 API. If you have a Web Content Viewer that is based on the older HCL APIs, you can convert the viewer to the JSR 286 API. Use the convert-wcm-rendering-portlet task to convert the Portal API Web Content Viewer settings and instances to the JSR 286 Web Content Viewer portlet.


