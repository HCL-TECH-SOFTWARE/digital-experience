# Social object resolution

When a portal user clicks a link to an object, the portal takes the user to the details view of that object. This process is called social object resolution. For example, a user might click a specific forum topic that is listed in the Community Forum Topics list. In this case, the social object resolution takes the user to a portal page that provides a details view of the forum topic that the user clicked. You can influence the result of the resolution that the user views by setting various parameters. These parameters are described here.

The social object resolution process is implemented by the connections resolver that is contained in the HCL Connections Portlets for HCL Digital Experience. To enable social object resolution, you need to install this resolver first.

The resolution result for a specific social object depends on the following parameters:

1.  The type of link that points to the social object. This link can be either of the following two types:
    -   A portal URL. In this case, the link is called a POC \(piece of content\) link.
    -   An HCL Connections URL.
2.  The resolution root page parameter that is defined in your view definition.
3.  Whether the social object is contained in a community or not, and if it is contained in a community, which community that is.
4.  The type of object that the user clicked, for example whether it is a forum topic or a blog post.

The type of link that points to the social object determines the resolution outcome as follows:

-   **HCL Connections URL:**

    If the link to the social object is an HCL Connections URL, the social object resolution process is not triggered. Instead, the user is taken directly to the corresponding HCL Connections user interface that shows the details of the object that the user clicked. You can set the portal-wide default type for your social object links in the portal configuration. For more information about how to do so, read *Configuring globally how social object links are resolved*. You can always overrule that default in your appearance components by using the `[AttributeResource attributeName=""]` tag as follows:

    -   To generate default links to the current social object, specify `[AttributeResource attributeName="link"]`.
    -   To generate a HCL Portal type link, specify `[AttributeResource attributeName="portalLink"]`.
    -   To generate an HCL Connections type link, specify the `[AttributeResource attributeName=rawLink]`.
-   **HCL Portal URL:**

    If the link to the social object is a HCL Portal URL, the connections resolver starts the social object resolution. It evaluates this process in the following three phases:

    1.  Determine the set of candidate pages
    2.  Determine the appropriate page from the set of candidate pages
    3.  Determine the final fallback resolution target for the case that the resolver finds no matching page from the set of candidate pages.

The connections resolver determines the candidate pages based on the resolution root page parameter and the ID of the community that contains the social object. You can specify the resolution root page parameter in the social list definition authoring template by using the element Custom Resolution Root Page. For more information, read *Customizing list view definitions by using inline editing*. You can use the resolution root page parameter to identify a specific portal page by using its custom unique name. To identify the current portal page that renders the current view definition, you can also use the value `current`. If you identify a portal page by using the resolution root page parameter, the connections resolver considers the identified page and all of its descendant pages to be candidate pages for the current social object resolution process.

**Note:** The value of the resolution root page parameter is passed to the connections resolver as a root page URL parameter. If the resolution root page parameter is not set and the social object belongs to a community, the connections resolver considers all portal pages that are associated with this community to be candidate pages. For more information, read *Managing community associations*.

If the set of candidate pages is not empty, the social object resolution process tries to determine the appropriate page from the set of candidate pages. To do so, it searches the candidate pages for a page that contains a suitable viewer portlet that matches the type of the social object that is to be resolved. Whether a portlet entity can render a detail view for a specific social object is determined based on specific portlet preferences. For example, the drag-and-drop configuration for the Forum Topic Details view definition sets the portlet preference `IC_Forums.topic=true` to indicate that this portlet can render a detail view for a forum topic. For a full list of the supported portlet preferences, read *HCL Connections Portlets for HCL Portal*.

If the connections resolver finds no candidate page or candidate page that contains a suitable viewer portlet, the portal takes the user to the default page for the social object that the user clicked. To identify the default pages for specific types of social objects, you assign those pages-specific unique names. For example, the default name for identifying the default page for social objects that are served by the Forums service is `ibm.conn.forums`. An administrator can change the default unique names. For more information, read *HCL Connections Portlets for HCL Portal: Configuring unique names*.

If the connections resolver does not find the default page, the final fallback is either to redirect the user to a defined portal error page or to take the user to the details view in the HCL Connections user interface. An administrator can control this behavior by running the portal configuration tasks `disable-poc-redirect-to-connections` or `enable-poc-redirect-to-connections`. For more details about the social object resolution, read *HCL Connections Portlets for HCL Portal: HCL Connections Portlets for HCL Portal*.

**Parent topic:**[Concept of the lists of social objects provided with the social rendering feature](../social/soc_rendr_undrstd.md)

**Related information**  


[Managing community associations](../admin-system/commpages_create_mapping.md)

[Configuring globally how social object links are resolved](../social/soc_rendr_cfg_reslv_links.md)

[Customizing social list definitions by using inline editing](../social/soc_rendr_cust_socl_list.md)

