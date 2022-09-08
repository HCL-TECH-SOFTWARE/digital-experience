# Organizing your custom HCL Connections queries

For the different query URLs that you want to use, you can create multiple dynamic or static HCL Connections query URL components. For convenient use of these query URL components, you can create a generic authoring template for all list definitions that you want to build from those queries.

When you work with Digital Data Connector \(DDC\) for HCL Portal, the generic authoring template must comprise short text elements for identifying the following elements:

-   The DDC plug-in ID and the profile name. For example, they can be elements named `provider` and `profile`.
-   Component references to the query URL HTML component and the appearance component. For example, they can be elements named `sourceref` and `design`.

You can now create individual list definition content items from this authoring template for your HCL Connections queries. To set up the query-specific list-rendering context and to render the query-specific appearance component, you can use a generic presentation template for all those queries as follows:

```
[Plugin:ListRenderingContext compute="always" 
   extension-id="[Element context='current' type='content' key='provider']" 
   profile="[Element context='current' type='content' key='profile']" 
   attribute="source=[Element context='current' type='content' key='sourceref']"]
   [Element context="current" type="content" key="design" compute="always"]
```

For example, a list definition content item for the query that was defined in *Dynamic HCL Connections source URL Construction* specifies the following settings:

-   It sets the `provider` field to `ibm.portal.ddc.sr`.
-   It sets the `profile` field to `ibm.portal.sr.communities.members`.
-   The `sourceref` component reference points to the query HTML component. For a description of that component, read *Dynamic HCL Connections source URL construction*.
-   The design component reference points to an appearance component that generates the list of community member markup. The markup is generated based on the attributes that are defined in the `ibm.portal.sr.communities.members` list-rendering profile.

???+ info "Related information:"
   - [Dynamic HCL Connections source URL construction](../extending_social_lists_using_ddc/soc_rendr_dyn_conn_srcurl_cnstrct.md)

