# Rendering Only Environments

## Subscriber Only

For Portal systems where no WCM authoring or page management is taking place locally, syndication
overhead can be eliminated by specifying ‘subscriber only’. Set deployment.subscriberOnly to true in WCM
WCMConfigService. Additional information can be found at [Syndication properties](../../../../../manage_content/wcm_delivery/syndication/wcm_config_prop_syndication.md).

### How to Set

In the WebSphere Integrated Solutions Console

Resources -> Resource Environment -> Resource Environment Providers -> WCM WCMConfigService -> Custom properties

Name: deployment.subscriberOnly
Value: true

## Site Toolbar

For rendering only sites where page management is not taking place locally, the Site Toolbar can be
disabled. Set global.toolbar.enabled to false and default.toolbar.enabled to false in WPVirtualPortalConfigService. Additional information can be found at https://help.hcltechsw.com/digitalexperience/9.5/wcm/wcm_mngpages_disabletool.html.

### How to Set

In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WPVirtualPortalConfigService

Modify the following custom properties:

- Name: global.toolbar.enabled
  Value: false

- Name: default.toolbar.enabled
  Value: false