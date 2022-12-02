# XML configuration interface and content associations

With the XML configuration interface \(xmlaccess command\), you can perform batch updates of content associations or export associations to import into another portal. Content association information is represented in the XML configuration schema by content-mapping-info elements.

## Export content associations

The content associations for a web content page are represented in an XML export file as nested content-mapping-info elements.

The following example represents a web content page with two content associations:

```
<content-node action="update" content-parentref="6_000000000000000000000000A0" domain="rel" objectid="someOID" preserve-old-layout="true" type="label">
  <content-mapping-info>
    <content-mapping content-id="74-11" default="false"/>
    <content-mapping content-id="007" default="true" delegated-access-level="User"/>
  </content-mapping-info>
</content-node>
```

!!! note
  If no content-mapping-info elements are present in an XML export document, there are currently no content associations defined for the web content page.

## Import content associations

When importing content associations with an XML import file, associations for a web content page are represented in the content-mapping-info element for the web content page. Any content associations that are already defined for the web content page are removed when you perform the import process and replaced with the new associations.

The following example updates a web content page to have two specific content associations:

```
<content-node action="update" content-parentref="6_000000000000000000000000A0" domain="rel" objectid="someOID" preserve-old-layout="true" type="label">
  <content-mapping-info>
    <content-mapping content-id="74-11" default="false" />
    <content-mapping content-id="007" default="true" delegated-access-level="User"/>
  </content-mapping-info>
</content-node>
```

!!! note
  If no content-mapping-info element is present in an XML import document, no changes are made to the content associations currently defined for the web content page.

## Delete content associations

You can delete content associations by specifying an empty content-mapping-info element in the XML import file.

The following example updates a web content page to delete any defined content associations:

```
<content-node action="update" content-parentref="6_000000000000000000000000A0" domain="rel" objectid="someOID" preserve-old-layout="true" type="label">
  <content-mapping-info/>
</content-node>
```


???+ info "Related information"
    - [Web content associations](../../getting_started/wcm_delivery_contentmap_about.md)
    - [Community associations and APIs](../../../../../../../extend_dx/integration/connections/configuration/managing_community_pages/commpages_access_apis.md)
    - [Human readable URL mappings for virtual portals](../../../../../../../build_sites/virtual_portal/vp_planning/shape_vp_ux/advppln_shpux_urlmap.md)
    - [Managing community associations](../../../../../../../extend_dx/integration/connections/configuration/managing_community_pages/commpages_create_mapping.md)