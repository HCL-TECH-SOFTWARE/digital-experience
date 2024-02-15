# Metadata and access control for web content items in WebDAV

WebDAV uses XML files to represent metadata and access control information for a web content item. You can change an item's metadata and access control settings by modifying these files, and you can specify settings for multiple files by copying the XML files to their appropriate locations in the WebDAV tree.

## Metadata

An item's metadata is represented by the `meta-data.xml` file, which describes identification information for the item, including the name and title for the item and the list of authors and owners that are associated with the item.

Here is a sample `meta-data.xml` file:

```
<?xml version="1.0" encoding="UTF-8"?>
<meta-data>
  <item>
    <title lang="en" value="test1.JPG"/>
    <description lang="en" value="description"/>
    <wcm-group id="authors">
      <member DN="all_auth_portal_users" type="group"/>
      <member DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" type="user"/>
    </wcm-group>
    <wcm-group id="owners">
      <member DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" type="user"/>
      <member DN="all_users" type="group"/>
    </wcm-group>
  </item>
</meta-data>
```

## Access control

An item's access control information is represented by the following files:

-   `access-control-system.xml`: Contains access control settings for the system that are specified by the administrator.
-   `access-control-user.xml`: Contains access control settings that are defined by the user.

In addition to these item-specific files, the `access-control.xml` file is provided for folders that represent resource types, like the `components` folder, and contains access control settings for the resource type.

Here is a sample `access-control.xml` file for resource access control settings:

```
<?xml version="1.0" encoding="UTF-8"?>
<access-control>
  <resource-config>
    <role-block role-type="Editor" type="inheritance"/>
    <role-block role-type="User" type="inheritance"/>
    <role-block role-type="Editor" type="propagation"/>
    <role-block role-type="User" type="propagation"/>
  </resource-config>
  <role-list>
    <role type="Administrator">
      <member DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" type="user"/>
    </role>
    <role type="Contributor">
      <member DN="all_auth_portal_users" type="group"/>
    </role>
    <role type="Manager">
      <member DN="all_auth_portal_users" type="group"/>
    </role>
  </role-list>
</access-control>
```

Here is a sample `access-control-system.xml` file for an item's administrator-defined access control settings:

```
<?xml version="1.0" encoding="UTF-8"?>
<access-control>
  <resource-config>
    <role-block role-type="Contributor" type="inheritance"/>
    <role-block role-type="Manager" type="inheritance"/>
  </resource-config>
  <role-list>
    <role type="Editor">
      <member DN="authors" type="virtual"/>
    </role>
    <role type="User">
      <member DN="all_auth_portal_users" type="group"/>
    </role>
  </role-list>
</access-control>
```

Here is a sample `access-control-user.xml` file for an item's user-defined access control settings:

```
<?xml version="1.0" encoding="UTF-8"?>
<access-control>
  <role-list>
    <role type="Contributor">
      <member DN="owners" type="virtual"/>
    </role>
    <role type="Editor">
      <member DN="all_auth_portal_users" type="group"/>
    </role>
    <role type="Manager">
      <member DN="uid=wpsadmin,o=defaultWIMFileBasedRealm" type="user"/>
    </role>
  </role-list>
</access-control>
```


???+ info "Related information"
  - [Managing metadata and access control settings for authoring templates with WebDAV](../webdav/wcm_webdav_authtemp.md)

