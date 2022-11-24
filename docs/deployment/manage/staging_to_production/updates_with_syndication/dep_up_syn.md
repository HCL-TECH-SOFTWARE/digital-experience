# Syndication and staging

You can use syndication to update content that was originally created by deploying portal solution releases with either the XML configuration interface or through a Portal Application Archive (PAA) file. You can also set up syndication between virtual portals or primary portals on the same system or between virtual portals on different systems.

!!!important
    Successful syndication requires that the object IDs for portlets, themes, and other artifacts are the same on both the syndicator and subscriber. Because the syndication process itself does not manage these artifacts, you must synchronize the two servers by an initial staging process before you syndicate. In addition, each time that you deploy an artifact that is not managed by syndication to the source portal, you must stage the artifact with the appropriate staging tool. However, if the source and target are different virtual portals on the same portal server, this step is unnecessary, because these artifacts are shared between virtual portals.

Limitations:

-   Syndication can be set up only between systems that use the same user repository.
-   Syndication for managed pages between multiple servers requires that you run an initial staging to all the servers.
-   The syndication process runs a prerequisite check on the subscriber to ensure that any required themes, skins, portlets, or iWidgets on a page are present on the target system. If any required objects are missing on the subscriber, syndication is not run for the page. This behavior can result in missing pages and syndication errors for affected pages. Use the XML configuration interface to transfer the missing resources.
-   iWidgets and portlets can store data in the WebDAV file store. The syndication process does not verify or transfer WebDAV data. If a portlet on a managed page requires data from the WebDAV file store, you must manually copy the required objects to the target system.

For information about using syndication, see *Syndication*.

## Managed pages and syndication

If managed pages are enabled and you are using syndication as part of the staging process, the following considerations apply:

-   In addition to web content, syndication includes artifacts like pages and wires.
-   When you populate the production server for the first time, you must run a full export with either the XML configuration interface or through a Portal Application Archive (PAA) file. This full export can include pages and wires.
-   When you update the production server after the initial staging, do not continue to export pages and wires, but instead use syndication to transfer the updates. If you export pages and wires after the initial staging, you might inadvertently overwrite changes that are already published through syndication.

The ExportManagedPagesRelease.xml file or a Portal Application Archive (PAA) file is available for exporting all artifacts except pages and wires. For details on using this file, see *Staging artifacts that are not transferred by syndication* or *Creating a differential release*.


**Related information**  
[Administering vanity URLs](../../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/index.md)<br>
[Syndication](../../../../manage_content/wcm_delivery/syndication/index.md)<br>
[Syndication relationships](../../../../manage_content/wcm_delivery/syndication/wcm_syndication_overview.md)<br>
[Staging artifacts that are not transferred by syndication](../../staging_to_production/updates_with_syndication/dep_up_syn_staging.md)<br>
[Creating the differential release](../../staging_to_production/creating_deploying_diff_release/dep_diff.md)<br>
[The XML configuration interface](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)

