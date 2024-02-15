# Updating custom theme Dojo references

The default Dojo context root in HCL Digital Experience is /WpsContextRoot/portal_dojo. You can find the value of WpsContextRoot in wp_profile_root/ConfigEngine/properties/wkplc.properties.

You might find that migrated themes, including custom themes, have references to /portal_dojo without the WpsContextRoot prefix. You can look for these references in both the WAR file and in the WebDAV storage for the theme, and update it if needed.

See the following procedure for an example of how to search for these references in a Linux™ environment.

1.  Open a command line on your server.

2.  Enter the following command: WebSphere Portal Install Directory\> grep -Hr "\\"/portal\_dojo".



???+ info "Related information"
    -   [Dojo Toolkit](../../../../../../extend_dx/development_tools/dojo/dojo_overview.md)
    -   [Using WebDAV with HCL Portal](../../../../../../manage_content/wcm_delivery/webdav/administer_webdav/index.md)

