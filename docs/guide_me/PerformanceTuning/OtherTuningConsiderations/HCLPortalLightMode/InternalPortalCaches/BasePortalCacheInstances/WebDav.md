# WebDav

com.ibm.wps.FileCache_Syncer
This is a special purpose cache that is used for the WebDAV file store. Do not change its configuration!

com.ibm.wps.filestore.JCRItemsCache
Default size: 5000, default lifetime: infinite, usage pattern: regular

This cache is closely related to the WebDAV file store. The content of themes and skins is stored in the
WebDAV file store if this information is not contained in WAR-files.

For each file stored in the WebDAV file store, meta information, for example its administrative ID and
access information is stored in the JCRItemsCache. For further information about the WebDAV file store,
see the WebSphere Portal Knowledge Center.