# Changes to the XML configuration interface

Learn about the changes that were made to the XML configuration interface from earlier versions to current versions of HCL Digital Experience. This information can be useful to you if you migrate your HCL Portal from one version to a later version.

## Changed XML schema

The XML schema is updated for new versions of HCL Digital Experience as required. Make sure that your XML scripts specify the correct version of the XML schema according to the version of your portal installation. For example, for HCL Portal 8.5 specify the current version of the XML schema as follows:

```
   <?xml version="1.0" encoding="UTF-8"?>
   <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="**PortalConfig\_8.5.0.xsd**"
    type="export \| update">
     . . . configuration . . .
   </request>
```

The different versions of HCL Portal use the following syntax definitions for the XML configuration interface:

|HCL Portal Version|XML schema|
|------------------|----------|
|Version 7.0.0|7.0.0|
|Version 7.0.0.2|7.0.0\_2|
|Version 8.0.0|8.0.0|
|8.5|8.5.0|

**Notes:**

1.  **Backward compatibility:** The later XML schemas are backward compatible with earlier supported versions of HCL Portal. This means that you can run XML scripts from earlier portal versions that IBM supports under a later version of the portal. For example, you can run an XML script that is based on the `PortalConfig_7.0.0.xsd` under portal 8.5. In such cases a warning message is written to the output script, which informs that a previous version of the XML schema was used.
2.  **Schema file naming convention:** If the XML schema is enhanced by updates, a new version of the xsd file with a new file name is created according to the following naming convention:
    -   Starting with portal V 6.0.1 the schema file name includes the portal version number as follows: `PortalConfig_portal\_version\_number.xsd`. Example: `PortalConfig_**7.0.0**.xsd`.
    -   If the schema is enhanced during a portal version, the name includes additional ID information to ensure unique schema file names: `PortalConfig_portal\_version\_number**\_id**.xsd`. Example: `PortalConfig_7.0.0**\_2**.xsd`.

## New XML resources in HCL Portal 8.5

In HCL Portal 8.5 the following new resource tags have been introduced:

|New XML configuration interface tags in portal 8.5|Tag specifies the following type of portal resource|
|--------------------------------------------------|---------------------------------------------------|
|`device-class`|a device class|
|`global-target-settings`|a section containing the cross-page wire settings that are set as global targets|
|`target`|a global target|

For more details about this tag refer to the XML configuration interface reference.

## New XML attributes in HCL Portal 8.5

This section lists the attributes that have been added to HCL Portal for 8.5.

-   A new boolean flag `system` has been introduced for content-mapping tags.
-   You can now set `parameter` sections for task nodes.
-   A new attribute `target-portletdefinitionref` has been introduced on cross-page-wire items.

## New XML attributes in HCL Digital Experience CF19 and higher

This section lists the attributes that have been added for use with HCL Digital Experience 9.5 and higher.

-   A new boolean flag `dam-collections` has been introduced for HCL DX 9.5 Digital Asset Management collections.

## Removed XML resources in HCL Portal 8.5

The following XML resource is no longer supported in portal 8.5:

-   `event-handler`

## Setting the project scope in HCL Portal 8.5

The managed pages feature enables you to edit portal resources, such as pages, in the scope of a project. By working in a project, you can create, update, and approve pages in a draft state, without affecting the live server. You can specify a project scope for actions performed with the XML configuration interface command by including the object ID of the project in the URL. See *XML configuration interface and managed pages* for details.


**Related information**  


[XML configuration interface and managed pages](../wcm/wcm_mngpages_xmlaccess.md)

