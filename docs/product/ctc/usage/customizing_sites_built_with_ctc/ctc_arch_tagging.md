# Tagging and rating for Content Template

The HCL Digital Experience tagging and rating services are included in many of the Content Template Catalog templates. The services have only been modified with some style overrides to make them fit properly within the Content Template design.

## Disabling tagging and rating for some content areas

The elements that control the enabling and disabling are called **Tagging** and **Rating**. They must be set to "true" for the tagging and rating services to be displayed on content in that area of the site. You can disable tagging and rating functions on pages by editing the "Content" area inside any of the microsites. When you disable tagging and rating inside the CTC content library, or in any of your own microsite libraries, the change applies to all new areas created from that microsite. You can also disable tagging and rating on a case-by-case basis by editing the "Content" site area after page instantiation.

Content Template does not include an integrated use of the Tag Center. Like Search, each deployment develops the solution as needed.

## Tagging and Rating in Virtual Portals

For the tagging and rating widgets to work, the Web Resources v70 library needs to be present in the virtual portal, since this library contains the default formatting components referenced by the \[Plugin:tags\] and \[Plugin:ratings\] WCM rendering plugin tags. Therefore, the Web Resources v70 library needs to be syndicated into the virtual portal in order to use tagging and rating in the virtual portal.

**Parent topic:**[Customizing sites built with Content Template](../ctc/ctc_design_custom.md)

