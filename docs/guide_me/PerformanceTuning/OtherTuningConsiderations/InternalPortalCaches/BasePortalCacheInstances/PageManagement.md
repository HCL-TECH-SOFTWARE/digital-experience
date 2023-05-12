# Page Management

The following caches are used primarily in page management scenarios.

**com.ibm.wps.contentmapping.AuthoringCache**
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

Caches the mapping between Portal pages and WCM Portal Page artifacts as used by the managed pages
feature. This cache is primarily relevant on authoring systems with managed pages enabled.

**com.ibm.wps.contentmapping.ContentMappingsCache**
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular

Caches web content page resolution results. Web content page resolution means dynamically retrieving the
right portal page for rendering a given WCM content item or a IBM Connections resource. This resolution is
typically performed when clicking on a link to a WCM content item (in the Web Content Viewer portlet, a
Search result, or the Tag Center portlet) or a link to a IBM Connections resource in an IBM Connections
portlet.

**com.ibm.wps.contentmapping.ContentMappingInfoCache**
Default size: 1000, default lifetime: infinite (-1), usage pattern: regular.

Caches the content mapping configuration (aka. page association configuration) for portal pages. This
information is leveraged by the page associations dialog and other Portal administrative UIs.

**com.ibm.wps.datastore.project.DraftedVersionExistsCache**
Default size: 1000, default lifetime: uses globally configured default lifetime, usage pattern: regular.

This cache contains all ObjectIDs of pages for which a draft exists per project. It scales with the number of
active projects. Creating a cache entry requires a database call that typically has to count all entries within
an index. A cache value could be relatively big as it represents a list of ObjectIDs for all pages that are
drafted in a project.

If no projects are used at all, e. g. in a rendering-only system then this cache can be deactivated.