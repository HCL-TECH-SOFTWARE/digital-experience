# Managed pages migration

When you migrate your HCL Digital Experience to Version 8.5, here are some considerations with regards to managed pages.

If you migrate from Portal Version 8.0 to HCL Digital Experience 8.5, the portal preserves the state of managed pages enablement:

-   If you had managed pages enabled in your version 8.0 portal, managed pages remain enabled after migration.
-   If you had managed pages disabled in your version 8.0 portal, managed pages remain disabled after migration.

If you migrate from Portal Version 7.0, managed pages are not automatically enabled after migration. In this case, consider enabling managed pages after migration. With managed pages, you can take advantage of new features, such as syndication and versioning of pages, and the ability to manage pages in projects. When you migrate systems that access web content from virtual portals, you need to complete extra steps after you enable managed pages.

## Portal Site Library

The Portal Site Library stores page-related web content items. The Portal Site Library, and related views in the authoring portlet, are only visible when managed pages are enabled.

## Virtual portal isolation

When managed pages are disabled, web content is shared between all virtual portals. However, when managed pages are enabled, each virtual portal has its own unique and isolated workspace for web content. Before the migrated web content can be accessed from a virtual portal with managed pages, it must be syndicated from the base portal. Syndication between virtual portals is no different from syndication between stand-alone servers.


