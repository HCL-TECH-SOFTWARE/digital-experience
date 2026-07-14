# How to Change the Folder Name in WebDAV

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

Theme structure in WebDAV does not match the XMLAccess definition of the theme.

In WebDAV, the theme files are stored under:
fs-type1/themes/ibm.portal.Wok85Theme

In the XMLAccess export, the theme is configured to:
fs-type1/themes/Wokportal85

## Instructions

Use the following steps to match the WebDav definition of a theme with the one that is stored in the database (using XMLAccess):

1. Update the folder name in WebDAV:
    fs-type1/themes/Wokportal85

2. Import the following XMLAccess file to update the WebDAV related properties for the theme.

```text
<?xml version="1.0" encoding="UTF-8"?>
<request build="20210806-125930" type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
<portal action="locate">
<theme action="update" active="true" context-root="/Wokportal85" default="false" defaultskinref="ZK_JO8629C0L0NQC0A639J01610Q1" domain="rel" objectid="ZJ_9G1I1CO0K8H260A28QIC1E2000" resourceroot="dynamicSpots" uniquename="Wokportal85">
<parameter name="com.ibm.portal.layout.template.href" type="string" update="set"><![CDATA[dav:fs-type1/themes/Wokportal85/layout-templates/2ColumnEqual/]]></parameter>
<parameter name="com.ibm.portal.theme.template.ref" type="string" update="set"><![CDATA[dav:fs-type1/themes/Wokportal85/]]></parameter>
</theme>
</portal>
</request>
```

## Additional information

[Layouts](../../../build_sites/themes_skins/customizing_theme/layouts/index.md){target="_blank"}

[Working with layout templates](../../../build_sites/themes_skins/customizing_theme/layouts/themeopt_cust_layouttemp.md){target="_blank"}

[Unable to edit page layout](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012746){target="_blank"}

[While trying to refresh the Portal page layout by running this task, refresh-page-layout-template, the following error appears, EJCBC0009E](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0081003){target="_blank"}
