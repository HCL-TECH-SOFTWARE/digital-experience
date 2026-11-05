# How to change the WebDAV folder name

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In WebDAV, theme files are located in the directory `fs-type1/themes/ibm.portal.Wok85Theme`, while the XML Access export points to `fs-type1/themes/Wokportal85`. This mismatch prevents HCL Digital Experience (DX) from referencing theme assets correctly. This article explains how to change the WebDAV folder name to match the theme definition configured in the database.

## Instructions

To match the WebDAV folder name with the database configuration using XML Access, perform the following steps:

1. Rename the theme directory in WebDAV to `fs-type1/themes/Wokportal85` using a WebDAV client such as WinSCP so it matches the database definition. For more information, refer to [Understanding DX Portal Themes](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0112224){target="_blank"}.
2. Import the following XML Access file to update the WebDAV-related properties for the theme, ensuring the parameters reflect the updated folder name (`Wokportal85`):

       ```xml
       <?xml version="1.0" encoding="UTF-8"?>
       <request build="20210806-125930" type="update" version="8.5.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
            <portal action="locate">
                <theme action="update" active="true" context-root="/Wokportal85" default="false" defaultskinref="ZK_JO8629C0L0NQC0A639J01610Q1" domain="rel" objectid="ZJ_9G1I1CO0K8H260A28QIC1E2000" resourceroot="dynamicSpots" uniquename="Wokportal85">
                    <parameter name="com.ibm.portal.layout.template.href" type="string" update="set"><![CDATA[dav:fs-type1/themes/Wokportal85/layout-templates/2ColumnEqual/]]></parameter>
                    <parameter name="com.ibm.portal.theme.template.ref" type="string" update="set"><![CDATA[dav:fs-type1/themes/Wokportal85/]]> </parameter>
                </theme>
           </portal>
        </request>
       ```

???+ info "Related information"
    - [Understanding DX Portal Themes](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0112224){target="_blank"}
    - [Layouts](../../../build_sites/themes_skins/customizing_theme/layouts/index.md)
    - [Working with layout templates](../../../build_sites/themes_skins/customizing_theme/layouts/themeopt_cust_layouttemp.md)
    - [Unable to edit page layout](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0012746){target="_blank"}
    - [While trying to refresh the Portal page layout by running this task, refresh-page-layout-template, the following error appears, EJCBC0009E](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0081003){target="_blank"}  
