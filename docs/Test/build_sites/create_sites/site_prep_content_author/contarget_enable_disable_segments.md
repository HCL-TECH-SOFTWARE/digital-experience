# Enabling and disabling segments in the Add Segments view

You can customize the Add Segments view so that you see only segments, only managed segments, or both segments and managed segments.

By default, both segments and managed segments are enabled in the Add Segments view.

1.  To disable segments, open the [wp\_profile\_root](../../../guide_me/wpsdirstr.md)/PortalServer/config/config/services/PersonalizationService.properties file and set `contenttargeting.hideSegments` to true.

2.  To disable managed segments, open the [wp\_profile\_root](../../../guide_me/wpsdirstr.md)/PortalServer/config/config/services/PersonalizationService.properties file and set `contenttargeting.hideManagedSegments` to true.

    !!! note
        If you are using a clustered environment, you must open the [wp\_profile\_root](../../../guide_me/wpsdirstr.md)/PortalServer/config/config/services/PersonalizationService.properties file and set `contenttargeting.hideManagedSegments` to true for all nodes.

3.  Restart the Portal server\(s\) to apply your changes.



