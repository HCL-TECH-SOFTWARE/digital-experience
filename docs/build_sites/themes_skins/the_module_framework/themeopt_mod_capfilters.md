# Module dependencies in portlets

When a portlet requires existing client-side capabilities, such as Dojo, loaded on the page, it can define a set of portlet preferences that declare the capabilities it requires.

Define two preferences for each capability the portlet depends upon. One preference that describes the ID of the capability and one that defines the minimal value or version in the following format, major.minor.revision:

ID:

```
Preference Name: capability.<sequence-number>.id
Preference Value : <the capability name>
```

Value:

```
Preference Name: capability.<sequence-number>.minValue
Preference Value: <the capability value>
```

Sample

```
<portlet-preferences>
    <preference>
        <name>capability.1.id</name>
        <value>dojo</value>
        <read-only>true</read-only>
    </preference>
    <preference>
        <name>capability.1.minValue</name>
        <value>1.6</value>
        <read-only>true</read-only>
    </preference>
        
    <preference>
        <name>capability.2.id</name>
        <value>oneUI</value>
        <read-only>true</read-only>
    </preference>
    <preference>
        <name>capability.2.minValue</name>
        <value>3.0.1</value>
        <read-only>true</read-only>
    </preference>

    <preference>
        <name>capabilities.selfManaged</name>
        <value>false</value>
        <read-only>true</read-only>
    </preference>            
</portlet-preferences>
```

In this version, `capability.sequence-number.minValue` is optional. If you do not know the version numbers or the portlet works with any version of the capability, then do not specify the minValue preference, and the system loads the highest available version of the capability.

There is not always a capability that is defined for every module. Many modules are not part of any capability. Every module automatically surfaces itself as an implicit capability, or a capability with the same name and version number as the module. If there is no capability or you only know the name of the module, you can specify the module name for the value of `capability.sequence-number.id`.

For the list of available capabilities, see *Modules provided with the HCL Portal theme*.

## Self managed

In addition to the definition of the capabilities, the portlet must define a `capabilities.selfManaged` preference that describes whether the portlet handles the error case of missing capabilities itself or not. To delegate the handling of the error case to HCL Portal, the preference `capabilities.selfManaged` must be set to `false`.

!!! note
    A portlet can either handle all capability dependencies or none.

If this preference is not set, the framework expects that the portlet itself manages the handling of the error case of a missing capability dependency.

## Non-self managed error handling

When `capabilities.selfManaged` is set to `false`, HCL Portal handles the error case of missing capability dependencies. It displays error messages. One set of error messages, error codes: EJPNK0022E, EJPNK0023E, and EJPNK0024E, can display at the beginning of the page when you try to add a portlet to a page. The other set of error messages, error codes: EJPNK0026E, EJPNK0027E, andEJPNK0028E can display within the portlet when a portlet is already on a page and the page is rendered. The messages contain detailed information for each portlet about which capabilities are missing entirely or do not meet the minimum version required.

The non-self managed error handling can also be turned off for certain situations, such as for maximum performance on a production system or in the remote rendering use case \(WSRP\) where the consumer is not of type HCL Portal. For more information, see *Configuration settings for capability filters*.

## Loading the capabilities

While each portlet declares the capabilities the portlet depends on, those capabilities and their modules do not load automatically. The loading of the modules is done through the profile that is assigned to the page, so you must assign a profile that is adequate for the portlets that are to be used on a page.

If the non-self managed error handling messages appear, they mean that the required capabilities are missing from the profile. The errors can be resolved by assigning a different profile to the page.

## Auto-loading the capabilities

All portlets can automatically load their dependent capabilities, independent of which profile is assigned to the page. This feature can be turned on per theme in the theme metadata by setting `resourceaggregation.autoLoadPortletCapabilities` to `true`. For details of how to set this metadata, see *Changing the auto-loading of portlet capabilities*.

The Portal 8.5 theme in CF03 and newer has the auto-loading turned on by default. So, if you create your custom theme from the Portal 8.5 theme on a system at CF03 or beyond, you do not need to manually enable this feature. If your custom theme was created from the Portal 8.5 theme on a system before CF03, you need to manually enable this feature if you want it.

Usage of the auto-loading is recommended, because it makes the system overall simpler and easier to use. Users can use whichever portlets they want on a page \(provided the portlets declare their needed capabilities\) without having to think about the theme and which profile is assigned to the page. Fewer profiles are needed, and the size of each profile can be smaller.

If auto-loading is turned on, the non-self managed error handling messages appear less frequently, and if they do appear, they mean that the required capabilities are not installed or active anywhere in the system. The errors can be resolved by installing the capabilities and modules or making sure that they are active.

When auto-loading is turned on for a theme, it is not common to turn it off later. If you do, many pages can report missing capability error messages until appropriate profiles are assigned to the pages.

## Deferred Capabilities

A portlet can now also declare a deferred capability dependency.

ID:

```
Preference Name: deferredCapability.<sequence-number>.id
Preference Value : the capability name
```

Value:

```
Preference Name: deferredCapability.<sequence-number>.minValue
Preference Value: the capability minimum version
```

Sample:

```
<portlet-preferences>
    <preference>
        <name>deferredCapability.1.id</name>
        <value>wcm_inplacEdit</value>
        <read-only>true</read-only>
    </preference>
</portlet-preferences>
```

With auto-loading on, a deferred capability does not load until the page is in edit mode or when the `i$.loadDeferred` API is used. With auto-loading off, a deferred capability declaration behaves like a capability declaration in that the loading of the capability's modules is done by the profile and not the portlet.

The `deferredCapability` sequence-number is independent of the `capability` sequence-number. For example, both can start at 1. And, like `capability`, `deferredCapability.sequence-number.minValue` is optional.


???+ info "Related information:"
    - [Resource Aggregator overview](../the_module_framework/themeopt_reso_agg.md)
    - [Modules that are provided with the modularized theme](../the_module_framework/oob_modules/index.md)
    - [Configuration settings for capability filters](../customizing_theme/cfg_portal_theme_and_modules/themeopt_mod_capfilter_settings.md)
    - [Change the auto-loading of portlet capabilities](../the_module_framework/change_the_auto_loading_of_portlet/index.md)
    - [Adding or removing a capability from a portlet](../the_module_framework/add_remove_oob_modules/themeopt_add_cap_portlet.md)

