# System content associations

System content associations are used to associate a portal page with its corresponding artifacts in HCL Web Content Manager. A system content association is an extension of the standard content association.

A standard content association maps a web content page or web content viewer to content in a web content library. For a system content association, there is an additional `system` flag that distinguishes the association from a content association. Like web content associations, system content associations point to objects in a web content library. However, the objects are associated with a page rather than content. System content associations are managed by the portal. The system content association acts as an automatic default content mapping of the portal page to the portal page site area and allows to automatically find content underneath that portal page site area. The content mappings can be used in addition to the system mapping and define extra content contributions to the page and it is also possible to change the default from using the system mapping to another content mapping.

The `system` flag is a private, read-only flag. You can use the public API or the REST API to query a content association to determine whether it is a system content association or standard content association. You cannot use these interfaces to modify the `system` flag. To modify `system` data, use the XML configuration interface \(XML Access\).

**Parent topic:**[Pages](../site/pages_overview.md)

