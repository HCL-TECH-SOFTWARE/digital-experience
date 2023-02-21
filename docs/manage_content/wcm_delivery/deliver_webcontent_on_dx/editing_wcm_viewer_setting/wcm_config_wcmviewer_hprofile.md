---
id: wcm_config_wcmviewer_hprofile
title: Profiling settings
---




The **Profile** section contains profiling settings for the Web Content Viewer, specifying categories, site areas, and authoring templates that can be used as menu search options.

You can profile the Web Content Viewer by selecting categories, site areas, and authoring templates. A menu can use this profile to display a list of content items that are profiled with the same categories, site areas, or authoring templates.

-   **Categories**

    Add or remove categories to profile content rendered with the Web Content Viewer.

-   **Site Areas**

    Add or remove site areas to profile content rendered with the Web Content Viewer.

-   **Authoring Templates**

    Add or remove authoring templates to profile content rendered with the Web Content Viewer.


## Locked settings

You can lock settings in the **Configure** mode of the viewer. When a setting is locked, a lock icon is displayed in the **Edit Shared Settings** mode of the viewer, and no **Edit** link is available.

## Content paths and unique IDs

When you configure the viewer, content paths are represented as readable paths that include the library and site areas that contain the content. However, in the viewer configuration, the location of a content item is typically stored as the unique ID of the item. The use of the unique ID is helpful because the viewer can still render the content even if the item is renamed or moved.

If you configure the viewer with the XML configuration interface \(xmlaccess\), you have the option of specifying content location with the content path instead of the unique ID. With the content path, you do not have to determine the unique ID of the content item. But if the content item is moved or renamed later, the viewer can no longer render the content.

If a viewer is configured to use content paths, a path icon \(![Path icon](../../../../images/wcmviewer_path.jpg)\) is displayed after the title path. If you change the configuration to reference different content, the location of the new content item continues to be stored as a content path. If you want to store the location as a unique ID instead, you must click **Clear** before you select the new content. The path icon is also removed to indicate that the content path is no longer being used.

