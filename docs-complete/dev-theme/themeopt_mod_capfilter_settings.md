# Configuration settings for capability filters 

Set the following properties in the Wp ConfigService Resource Environment Provider to enable or disable the various capability filters.

## Enable or disable the runtime filter for the local rendering use case

```
Property : resourceaggregation.enableRuntimePortletCapabilitiesFilter
Possible Values:
true: Enables the runtime filter
false: Disables the runtime filter
Default: true
```

## Enable or disable the buildtime filter for the local rendering use case

```
Property : resourceaggregation.enableBuildtimePortletCapabilitiesFilter
Possible Values:
true: Enables the buildtime filter
false: Disables the buildtime filter
Default: true
```

## Set the themes to which the filters are applied in the local rendering case

```
Property : resourceaggregation.themeObjectIDs
Possible Values:
Comma separated list of unique names of themes for which the filters should apply.
Default: ibm.portal.80Theme, ibm.portal.85Theme
```

**Note:** This setting does not apply for the remote rendering use case \(WSRP\).

**Note:** This property is no longer supported in Combined Cumulative Fix 03. The filters are applied for custom themes by default, and you must now disable it for custom themes, if you do not want them filtered. In previous versions, the opposite was true. To disable the filter for any theme, add the metadata `THEME_METADATA_DISABLE_THEME_FILTER` to your theme with the value of `true`. For more information about how to set metadata, see *Change the auto-loading of portlet capabilities*.

## Disable theme filters in local rendering

Theme filters check whether a portlet can be rendered based on the current rendering context or not. This particular filter checks all `capability.*.id` preferences and validates them against the theme capabilities. If a capability is not available, the portlet is either not rendered or is not allowed to be added to the page. For more information, see *Module dependencies in portlets*.

This feature is enabled by default in Combined Cumulative Fix 03 and can be disabled by adding the following theme metadata to your theme.

```
resourceaggregation.disableThemeFilter = true
```

The easiest way to set a theme metadata is through the themelist entry point. Modify the metadata.properties. You can also use XMLaccess to update your theme.

## Enable or disable the runtime filter for the remote rendering use case \(WSRP\)

```
Property : resourceaggregation.enableRuntimePortletCapabilitiesFilterForWSRP
Possible Values:
true: Enables the runtime filter for WSRP
false: Disables the runtime filter for WSRP
Default: true
```

## Enable or disable the buildtime filter

```
Property : resourceaggregation.enableBuildtimePortletCapabilitiesFilter
Possible Values:
true: Enables the buildtime filter
false: Disables the buildtime filter
Default: true
```

## Disable JSON file filter

```
Property: resourceaggregation.load.json.only
Possible values: 
true: Filters files other than json files when creating WebDav contribution and profile directories.
false: Does not filter any files in the WebDav contribution and profile directories.
```

**Parent topic:**[Configuring the portal theme and modules ](../dev-theme/themeopt_cust_config.md)

**Related information**  


[Module dependencies in portlets ](../dev-theme/themeopt_mod_capfilters.md)

[Change the auto-loading of portlet capabilities ](../dev-theme/themeopt_chng_auto_load_cap.md)

