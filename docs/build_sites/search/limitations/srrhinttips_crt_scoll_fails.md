# The portal site search collection fails

Creating the portal site search collection can fail due to a file path length restriction.

**Problem:** If the file path length for the location of search collections exceeds its limit, the collection cannot be created.

**Cause:** The file path length for the portal search collection is limited to 118 characters. If this limit is exceeded, the default collection cannot be created. The following items contribute to the length of the file path:

-   The installation directory path.
-   By default, the search collection for the portal site content is created under the path your\_portal\_install\_directory/PortalServer/collections.
-   The name of the virtual portal.
-   The name of the search collection.

**Solution:** Complete the following steps to resolve the issue:

1.  Change the default directory location for the portal site search collection to a shorter path. The complete path and file name must not exceed a length of 118 characters. For information, go to *Configuring the default location for search collections*.
2.  Re-create the portal site search collection. For information, go to *Resetting the default search collection*.

**Parent topic:**[Hints and tips for using Portal Search](../admin-system/srrhinttips.md)

**Parent topic:**[HCL Digital Experience Portal Search](../admin-system/admsrch.md)

**Related information**  


[Creating and configuring search collections](../admin-system/srrcreatconfig.md)

[Managing the content sources of a search collection](../admin-system/srtmngcontsrc.md)

