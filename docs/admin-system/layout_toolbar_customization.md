# Customizing toolbar layouts 

The toolbar layouts can be customized by adding theme metadata to the theme deployment file.

## Implementation

The toolbar layouts can be customized by adding theme metadata to the theme deployment file.

-   **`layout.hidebydefault`**

    List of layouts that should be included for the corresponding users in the `group.show` metadata groups. These layouts aren’t shown for all other users.

-   **`group.show`**

    List of groups that should see the corresponding layouts specified in the `.layout.hidebydefaultmetadata` list of layouts.


Both of these parameters are required and relate to each other. The layout in position X in the layouts list relates to the group in position X in the groups list.

For example, if users in a group called "See1ColumnGroup" are allowed to see the "1Column" layout, the theme metadata would look like:

```
<parameter name="layout.hidebydefault" type="string" update="set">
<![CDATA[1Column]]></parameter>
<parameter name="group.show" type="string" update="set">
<![CDATA[See1ColumnGroup]]></parameter> 
```

The layout name used in the metadata must match the ID of the layout as listed in the custom theme layouts.json file located in the static theme WAR. For the OOB theme or a custom theme that stores the static resources in WebDAV, the layouts.json is located in this directory in WebDAV: /fs-type1/themes/yourcustomtheme/system/

For an EAR-based theme the layouts.json file will be located in this directory: yourcustomthemestaticWARcontext/themes/yourcustomtheme/system

For example, the 1Column layout is listed in the JSON file as:

```
{'url':ibmCfg.themeConfig.themeWebDAVBaseURI+'layout-templates/1Column/
','id':'1Column','thumbnail':ibmCfg.themeConfig.themeRootURI+'/
layout-templates/1Column/icon.png','titles': [{'value':'1 Column','lang':'en'}]},
```

The metadata can be set by exporting the themes and skins using XMLAccess and the ExportThemesAndSkins.xml file in the PortalServer/doc/xml-samples directory and updating the theme. Then, import the xml file.

Users in the "See1ColumnGroup" group will see the "1Column" layout in the toolbar layouts.

Extra layouts and groups can be specified by using a "," delimiter. If extra layouts and groups are specified, there’s a one-to-one relationship between those layouts and groups. For example:

If the metadata looks like this:

```
<parameter name="layout.hidebydefault" type="string" update="set">
<![CDATA[1Column, 2ColumnRight]]></parameter>
<parameter name="group.show" type="string" update="set">
<![CDATA[See1ColumnGroup, See2ColumnRightGroup]]></parameter> 
```

Users in the "See1ColumnGroup" group will see the "1Column" layout and users in the "See2ColumnRightGroup" group will see the "2ColumnRight" layout. All other users won’t see either layout. Any layout or group that doesn’t have a matching layout or group will be ignored. Any number of layout/group pairs can be specified.

**Parent topic:**[Preparing the site toolbar ](../dev-theme/themeopt_themeshelf.md)

