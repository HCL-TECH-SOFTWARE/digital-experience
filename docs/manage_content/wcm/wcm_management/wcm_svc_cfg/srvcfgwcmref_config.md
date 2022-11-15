# Web Content Manager configuration service

The HCL Web Content Manager configuration service \(WCM WCMConfigService\) defines common configuration settings for HCL Web Content Manager.

-   **api.use.dn**

    This property specifies whether calls to the HCL Web Content Manager API accept or return the common name \(cn\) or distinguished name \(dn\) for user lookups. A value of `true` indicates that the distinguished name is used.

    Default value: `false`

-   **defaultLibrary**

    The name of the default library used for rendering and the API. This is used if the URL or context does not contain a library.

    Default value: `Web Content`

-   **default.SiteArea**

    The name of the default site area to use if the URL does not contain a site area.

    Default value: `SiteArea`

-   **connect.businesslogic.module**

    A list of the modules that are run as part of Web Content Manager on the portal. Some modules are run as part of the content server itself, while others are only accessed through a URL command. The following modules can be defined:

    -   `web`: Core module for processing requests for web content. This module is required, so do not remove this module from the list.
    -   `default`: Core module for processing requests for web content. This module is required, so do not remove this module from the list.
    -   `ajpe`: Core module for processing requests for web content. This module is required, so do not remove this module from the list.
    -   `custom`: Core module used to enable custom workflow actions. This module is required, so do not remove this module from the list.
    -   `syndication`: Core module for managing syndication. This must be enabled on both the syndicator and subscriber servers.
    -   `itemdispatcher`: Core module used by syndication to send the requested item to a subscriber. This must be enabled on a syndicator server.
    -   `synd`: Core module for syndication. This must be enabled on a syndicator server.
    -   `subs`: Core module for subscribing to a syndicator. This must be enabled on a subscriber server.
    -   `mail`: Core module used for sending email from the email workflow action.
    -   `plutouploadfile`: Core module used by the authoring portlet to transfer files from the user's computer to the web content system.
    -   `plutodownloadfile`: Core module used by the authoring portlet to transfer files from the web content system to the user's computer.
    -   `refreshallitems`: Module to touch all items in a specified library. This will force all items to be saved. This module is accessed through a URL command.
    -   `unlocklibrary`: Module to unlock a specified library. This module is accessed through a URL command.
    -   `ajpecatselect`: Module used to update the profile information for the user making the request. This module is accessed through a URL command.
    -   `memberfixer`: Module to identify or change member IDs between environments with different LDAP topologies. This module is accessed through a URL command.
    -   `workflowenablement`: Module to enable workflow on content types that do not currently have workflow enabled. This module is accessed through a URL command.
    -   `clearversions`: Module to clear the version history of an item. This module is accessed through a URL command.
    -   `clearhistory`: Module to clear the history of an item. This module is accessed through a URL command.
    -   `deletemultiplelibraries`: Module to delete multiple libraries, even when references exist to other libraries.. This module is accessed through a URL command or using the host name of a virtual portal.
    -   `workflowcontrolchecker`: Module to update workflow security settings, reschedule pending workflow actions, or to detect and fix items with an invalid workflow. This module is accessed through a URL command.
    -   `ExportCacheSettings`: Module to display a summary of the current cache settings of your system. This module is accessed through a URL command.
    Default value: `web, mail, default, ajpe, ajpecatselect, memberfixer, workflowenablement, itemdispatcher, plutouploadfile, plutodownloadfile, synd, subs, syndication, refreshallitems, unlocklibrary, custom, data, clearversions, clearhistory, deletemultiplelibraries, workflowcontrolchecker, ExportCacheSettings`

-   **connect.moduleconfig.syndication.inittasks**

    Indicates whether automatic syndication is enabled. This property should be set the same on both the syndicator and the subscriber. If set to "false" , automatic syndication is not enabled. If set to "true", automatic syndication is enabled.

    Default value: `true`

-   **cmpnt.htmlEncodeDefault**

    Indicates whether HTML encoding occurs for text in components.

    Default value: `true`

-   **active.content.filtering.enable**

    Indicates whether active content filtering is enabled or disabled.

    Default value: `true`

-   **nestedGroupLookup.disabled**

    The accessControlDataManagement.enableNestedGroups setting does not apply to HCL Web Content Manager. HCL Web Content Manager continues to request a user's full hierarchical group membership and therefore prevents environments using HCL Web Content Manager from completely disabling nested groups. This setting will control whether HCL Web Content Manager will perform a nested group lookup with a value of true indicating to disable nested group lookups and a value of false indicating to perform nested group lookups.

    Default value: `false`

-   **max.recent.items**

    Specifies the maximum number of recent items to store, up to a maximum value of `100`.

    Default value: `100`

-   **max.favorite.items**

    Specifies the maximum number of favorite items to store, up to a maximum value of `100`.

    Default value: `100`

-   **versioningStrategy.Default**

    Specifies the default versioning behavior. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.AuthoringTemplate**

    Specifies the versioning behavior used for authoring templates. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.Component**

    Specifies the versioning behavior used for components. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.Content**

    Specifies the versioning behavior used for content items. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.PortalPage**

    Specifies the versioning behavior used for portal pages. Possible values include always, never, or manual.

    Default value: `always`

-   **versioningStrategy.PresentationTemplate**

    Specifies the versioning behavior used for presentation templates. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.SiteArea**

    Specifies the versioning behavior used for sites. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.Taxonomy**

    Specifies the versioning behavior used for taxonomy items. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **versioningStrategy.Workflow**

    Specifies the versioning behavior used for workflow items. Possible values include `always`, `never`, or `manual`.

    Default value: `always`

-   **resource.maxUploadSize**

    Specifies the maximum size in megabytes \(MB\) of individual files uploaded in file, image, rich text, and HTML components.

    Default value: `16`

-   **resourceserver.maxCacheObjectSize**

    Specifies the maximum size in kilobytes \(KB\) of resources to be cached by the resource server module.

    Default value: `300`

-   **resourceserver.cacheExpiryDate**

    Specifies the expiry date of resources cached by the resource server module.

    Default value: `REL 1M`

-   **user.cache.enable**

    Indicates whether the cache holds user object in the web content system.

    Default value: `false`


-   **user.cache.timeout**

    Specifies the lifetime \(in seconds, by default; or by other units of time, when specified: s=seconds, h=hours, d=days, m=months; e.g. 6h = six hours\). The default is -1, meaning that the lifetime is unlimited.


-   **admin.delete.error.percent.threshold**

    The error percent threshold for a given type when deleting a library. This value is specified as an integer from `0` to `100`. If the threshold level is reached for any type, the library deletion task is stopped.

    !!! note 
        If the threshold is set to `100`, the task ignores the error rate. If the threshold is set to an unsupported value, such as a value less than `0` or greater than `100`, the threshold is set to the default value of `40` percent.

    Default value: `40`

-   **deployment.subscriberOnly**

    Indicates whether this instance of HCL Web Content Manager will only be subscribed to by other servers and will never itself syndicate content to other servers. If this property is set to `true`, all item gatherers are deleted and the item changed task is not added to the scheduler. This improves performance and is recommended for production machines that are subscribe-only servers.

    Default value: `false`

-   **deployment.itemChangedTaskDelay**

    Specifies the number of seconds to use as the syndication interval, with a minimum of `0` seconds and a maximum of `65536` seconds. A value of `0` will prevent syndication from occurring. The shorter the interval, the sooner an update can be sent, but because frequent syndication can affect performance on servers with large amounts of content, a longer interval might be required.

    Default value: `30`

-   **wcm.transaction.timeout**

    HCL Web Content Manager uses a default transaction timeout of 120 seconds even when the value is changed in the server.

    Default value: 120

-   **connect.businesslogic.module.remoteaccess**

    When someone attempts to invoke the module remotely, they will receive an **HTTP 403** and an error will be logged to SystemOut.

    ModuleManager E Unexpected error from Module. Details of cause to follow: `com.presence.connect.business.module.ModuleAccessDeniedException: IWKWC0037E: Unauthorized access to module WorkflowControlChecker attempted.`

    Default value: false



