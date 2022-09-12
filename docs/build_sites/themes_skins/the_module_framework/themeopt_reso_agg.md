# Resource Aggregator overview

When the page renders, the Resource Aggregator processes all of the modules coming from the profile.

The module framework is based on modules that are specified in a profile, and a profile is assigned to a page. It takes all of the resources coming from the modules and aggregates, or combines, them into as few URIs to link on the page as possible to achieve optimal performance. Non-deferred modules are kept separate from deferred modules, so there ends up being two sets of URIs.

!!! note
    You can turn Remote Debugging on to break apart each resource as its own individual, uncompressed request for debugging purposes. For details on how to turn Remote Debugging on and off, see *Theme Optimization Analyzer Utilities*.

For more information on how to create modules and profiles, see *Writing modules*. For more information on how to assign a profile, see *Specifying profiles*.

## Resource aggregation for portlets

In addition to processing the modules coming from the profile, the Resource Aggregator can also process all of the modules coming from the capability dependencies of all of the portlets on a page. The Resource Aggregator processes portlet modules for any theme that has its `metadata resourceaggregation.autoLoadPortletCapabilities` property set to true. For more information about how to set this metadata flag, see *Changing the auto-loading of portlet capabilities*.

For more information about how to specify portlet capability dependencies, see *Module dependencies in portlets*.

With auto-loading of portlet capabilities on, the Resource Aggregator also processes all of the modules coming from all of the capability dependencies of all of the portlets on the page. It processes them while also processing the modules coming from the profile. If the same module or subcontribution is encountered more than once, priority is given in the following order, first-to-last.

1.  non-deferred from profile
2.  non-deferred from portlets
3.  deferred from profile
4.  deferred from portlets

For example, if a profile uses Dojo deferred but a portlet uses Dojo non-deferred, Dojo loads non-deferred as part of the combined ResourceAggregator request for the portlets.

When everything is sorted into one of the four buckets, the Resource Aggregator takes all of the resources coming from the modules of each bucket and aggregates, or combines, them into as few URIs to link on the page as possible. There are four sets of URIs, or up to double the number of total URIs, or requests, for the page as compared to when auto-loading of portlet capabilities is off.

## Performance

Auto-loading enhances the ease of use of your system. Users can choose any portlet on a page, if the portlets declare their capabailites, without worrying about the theme or profile. Fewer profiles are needed and the profiles can be smaller.

Auto-loading uses caching on both the client and server level, so the performance of your portal is nearly the same as when it is turned off. You can also mitigate the slight performance drop by adding modules to the theme. The more common or shared a module is, the more it is beneficial to include it in a profile. For example, if a module is used often by portlets on many pages, list that module in the profile so it can be cached as part of the profile URIs. The profile URIs change infrequently and remain cached.

## ResourceCombinerService API

When a portlet must link to its own application-specific resources, it can do that in CF03 with the ResourceCombinerService public API. Previously, you had to link those resources individually. The ResourceCombinerService API can be called to combine resources to into a single optimized URI for optimum performance. For more information, see ResourceCombinerService public API in the *API Javadoc*.

The API has the same flexibility as the Portal module definition syntax to support all the URI possibilities. It has flexibility to support HCL Web Content Manager content URIs, deviceClass classes and equations for mobile, language locales for natural language system, type of debug for the uncompressed version of resources, and type of rtl for bidirectional languages.

The portlet can call the API in the portlet processing, such as in `doHead` for head contributions, or in `doRender` for body contributions. The portlet must manage the dynamic linking of the URIs into the head or body so it can manage the order and grouping of resources. The portlet must manage the cache headers within their datasources. The default cache headers are defined as part of global IBM® WebSphere® Application Server REP settings. They are `Cache-Control: public, max-age=86400`.

In most case, the returned list from getCombinedURI contains one URI. In a few cases, for example, with CSS size limits in Internet Explorer, it may return multiple URIs. The portlet must code to handle 1 to n.

!!! note
    ßYou must use this API with application-specific resources only. Shared, non-application-specific resources must be defined as modules or capabilities and specified as the portlet module dependencies, using the capability portlet preferences. It optimizes performance. It ensures multiple portlets on a page do not load the same resources. And it controls the order of resources that are loaded, because shared resources must load before application-specific resources.


<!-- 
**Related information**  


[Writing modules](../dev-theme/themeopt_mod_plugin_xml.md)

[Change the auto-loading of portlet capabilities](../dev-theme/themeopt_chng_auto_load_cap.md)

[Specifying profiles with the user interface](../dev-theme/themeopt_define_mod_ui.md)

[Module dependencies in portlets](../dev-theme/themeopt_mod_capfilters.md)

[Utilities for theme issues](../dev-theme/themeopt_an_util.md) --->

