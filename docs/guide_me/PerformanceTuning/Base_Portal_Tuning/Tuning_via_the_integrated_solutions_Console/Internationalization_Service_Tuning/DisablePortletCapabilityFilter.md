# Disable Portlet Capability Filter

The runtime portlet capabilities filter allows a Portal developer to get friendly error messages on pages if
the theme profile that is in place for a page does not contain all the capabilities that the portlets on the
page require. This is very useful for development purposes, but has an undesirable overhead in a
production environment. In production this filter should be disabled as the pages should be properly
debugged before going into production.

More information about these settings can be found at https://help.hcltechsw.com/digitalexperience/8.5/dev-theme/themeopt_mod_capfilter_settings.html

To disable, set `resourceaggregation.enableRuntimePortletCapabilitiesFilter` to **false** in WP ConfigService.

## How to Set

In the WebSphere Integrated Solutions Console
Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom
properties

Name: resourceaggregation.enableRuntimePortletCapabilitiesFilter

Value: false