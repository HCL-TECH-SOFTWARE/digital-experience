# Adding widgets to a community 

As an owner of an HCL Connections community, you can define the set of widgets that are available in the community. For this purpose, you use the Customize option in HCL Connections. For example, you might choose to add the Blog widget to a specific community. This way, community owners have control over the set of services available in the communities they own.

When you use portal pages as the front end for communities, the pages typically contain social content that interact with one or more widgets of the community. For example, the List of Community Blog Posts shows blog posts that were created by using the Blog widget. You can flag such social content items with Drag and Drop configurations to depend on specific sets of widgets that are available in the associated community. You set this flag by setting a specific portlet preference on the portlet entity of the associated Drag and Drop configuration. Whenever a page editor adds such portlet to a community page, the portal infrastructure tries to dynamically add the required widgets to the associated community.

To flag a drag and drop configuration to require a specific set of widgets, you set the following preference on the portlet entity:

```
ibm.portal.instantiation.community.widgets=comma separated list of widget definition IDs
```

You set this preference by using the Manage Portlets portlet, or the XML configuration interface \(XMLAccess\).

The following list shows the supported widget definition IDs :

-   `StatusUpdates`
-   `Forum`
-   `Bookmarks`
-   `Files`
-   `Blog`
-   `IdeationBlog`
-   `Activities`
-   `Wiki`
-   `Calendar`
-   `MediaGallery`
-   `Feeds`
-   `SubcommunityNav`
-   `RelatedCommunities`

Example: To flag a drag and drop configuration to require the Blog and Wiki widgets, set the preference as follows:

```
ibm.portal.instantiation.community.widgets=Blog,Wiki
```

By default, the portal tries a best effort to add the widget. If the operation fails for whatever reason, the portal still adds the social content item to the page, but it does not add the widget to the community. If you require a different behavior, you can set an additional portlet preference to generate an error message instead. To flag a drag and drop configuration to generate an error message if the required widgets cannot be added to the associated community, set the following portlet preference:

```
ibm.portal.instantiation.community.widgets.failonerror=[true|false]
```

The default value is `false`. You set this preference by using the Manage Portlets portlet, or the XML configuration interface \(XMLAccess\). With the `failonerror` portlet preference enabled, the portal does not add the social content item to the page, but shows an error message instead.

The drag-and-drop configurations for the community-focused list view definitions have the setting `failonerror` set to the value `false`. The following list shows these configurations for your reference:

-   List of Community Forum Topics: `ibm.portal.instantiation.community.widgets=Forum`
-   List of Community Blog Posts: `ibm.portal.instantiation.community.widgets=Blog`
-   List of Community Events: `ibm.portal.instantiation.community.widgets=Calendar`
-   List of Community Content: `ibm.portal.instantiation.community.widgets= Forum,Bookmarks,Files,Blog,Activities,Wiki,Calendar`
-   List of Community Files: `ibm.portal.instantiation.community.widgets=Files`

**Note:** The portlet preferences that are described here are ignored on non-community pages, that is on pages that are not associated to a specific community.

**Parent topic:**[Social rendering ](../social/soc_rendr_ovu.md)

