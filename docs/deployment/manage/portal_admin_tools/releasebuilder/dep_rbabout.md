# ReleaseBuilder

To generate or stage follow-on releases of HCL Digital Experience portals, configurations, and artifacts need to be moved between systems. ReleaseBuilder enables management of release configurations independent of user configurations.

Release configuration data are exported to XML files that can be imported using the XML configuration interface (XmlAccess). Using ReleaseBuilder it is possible to stage release configurations between two portals. This allows you to track which configuration entities were removed, added, or changed compared to the previous release generated from a given portal and to apply these differential updates to another portal. Detecting the differences between one configuration and another of the same portal server creates differential updates. A third configuration or "diff", generated by ReleaseBuilder, represents the changes made between the two configurations. The third configuration can be used to apply not only addition and update modifications but also deletions to the target server. This allows two portal servers, for example, a staging server and a production server, to remain in synch. ReleaseBuilder is designed to eliminate the need to generate complete XmlAccess exports to move a partial configuration or to manually create XML response files to export a partial configuration. ReleaseBuilder also helps to prevent the problem of configuration bloat on the target server.

For staging virtual portals, ReleaseBuilder supports a virtual portal mode that allows the generation of difference configurations for virtual portal scoped resources only. This mode allows you to stage virtual portals.

!!!note
    ReleaseBuilder is a configuration management tool. Do not use it for migration purposes.

## Performance benefits

Massively parallel portal configuration tasks, for example hundreds of administrators working in parallel, can affect the user experience and portal performance. Such tasks can be distributed to independent portal systems. ReleaseBuilder, together with the XML configuration interface, allows you to integrate the resulting configurations.

## Usage notes

-   ReleaseBuilder is installed when HCL Portal is installed along with the XML configuration interface. You can run ReleaseBuilder on the production server, although it can impact the HCL Portal performance.
-   Unlike the XML configuration interface, ReleaseBuilder does not interact with the portal server runtime. You should run ReleaseBuilder on a separate, standalone machine. This system can be the staging system or a completely separate system where HCL Portal is installed.
-   To maximize use of system resources, HCL Portal should not be running when executing ReleaseBuilder.


???+ info "Related information"  
    -   [Portal administration tools](../../portal_admin_tools/index.md)
    -   [Transferring a complete configuration](../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/adxmltsk_xfer_compl_cfg.md)

