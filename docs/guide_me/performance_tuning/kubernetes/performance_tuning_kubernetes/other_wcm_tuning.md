# Other WCM Tuning

## Theme Profile

In a `profile_ctc_deferred.json` file we evaluated, our test data had more than 3 levels of content in the page hierarchy, and the `primaryNav_overlay` and `secondaryNav_overlay` modules were removed from the theme profile. Removing these two modules improved response time and throughput, but the ability to hover over a link and see all its children is not enabled. Without that functionality, it is necessary to click on the link to see the children. It may also be necessary to leave these modules enabled for mobile sites.

## Content Scalability

In our own internal rendering tests, we have scaled as high as 1 million total items across 10 libraries with 100,000 items per library in rendering. In Authoring, we have scaled as high as 500,000 items (10 libraries with 50,000 items per library).

When scaling, the primary issue appears to be the total number of children under any one node. We recommend having no more than 25,000 items.

## Personalization Service

In a rendering scenario that uses personalization, performance can be improved by setting the following tuning parameters:

**Personalization Service Setting for WCM Rendering**

`PersonalizationService.properties`

| **Parameter**                  | **Default Value** | **Value Used** |
|-------------------------------|-------------------|----------------|
| `rulesEngine.cache.timeout`   | `300`             | `900`          |

!!! Note
    Rule results updates can take up to the length of this timeout to show up so set it the timeout to an acceptable duration based on your business requirements.

**How to Set**

1. Edit the file:

```
<wp_profile_root>/PortalServer/config/config/services/PersonalizationService.properties
 ```

2. Set the property:

`rulesEngine.cache.timeout = 900`
 


3. Restart the Portal server

### Default Content on Site Areas

There can be a performance impact when accessing site areas without default content set. The impact becomes larger as the number of content items under the site area grows. WCM has to parse all of the content items to see which should be the first by title. It is a best practice to set this on every site area even if site areas are not being referenced directly.

![Default Content on Site Areas](../DefaultContentOnSiteAreas.jpg)
**How to Set**

In the **Web Content Authoring Page**:

1. Navigate in the Library Explorer to the site area you want to modify.

2. Select the site area and click the **Edit** button.

3. Click Select Default Content, then choose the content item to be used as the default.

4. Click **OK** to confirm your selection.

5. Click **Save and Close** to apply the changes.

## Size & Structure of Web Content Libraries

In our performance benchmarks, we have tested web content library sizes up to 100,000 content items in rendering and 50,000 content items in authoring with acceptable performance. These items were equally distributed between 10 libraries; every library was of equal size. Larger library sizes were not tested due to the time limitations of setting up and working with such large populations.

Library structure can play an important role in WCM performance. A flat library structure with many children items under one parent can have a negative impact on performance and should be avoided if possible. For the internal benchmarks, content was spread over 500 site areas in a 5-10-10 tree structure with no more than 200 content items under one site area.

For WCM items such as components, templates, workflows and categories, folders or multiple libraries should be used to minimize the number of children under a parent to avoid a flat library structure. In general libraries should be limited to about 20,000 items total.

## Page Level Access Control Delegation

A significant benefit can be achieved by enabling the Use Page Security option with pages that have web content associated with them. This setting bypasses the access control settings on the content items and instead defers to the access control settings of the page. By default this feature is disabled. Benchmarks are run with this setting disabled as well. However, in our WCM rendering scenario we measured a 7.5% increase in capacity when using this feature.

**How to Set**

In the **WebSphere Portal Administration Page**:

1.  o to: **Manage Pages** > **Content Root** > *Page(s) to be modified* > **Edit Page Properties**.
2.  Expand **Advanced options** and click **I want to edit associations**.
3.  Under the content item settings, check:  

   **Use Portal Page Security**

4. Click **OK** to save the changes

![Page-Level Access Control](../PageLevelAccessControl.jpg)


### Asynchronous Web Content Rendering

Asynchronous web content rendering can selectively be enabled for Web Content Viewer portlets that take a long time to render. When we apply this feature to heavy-weight Web Content Viewer portlets or Web Content Viewer portlets with a slow back end, we measure significant performance enhancements. But we do not recommend applying this feature to all Web Content Viewer portlets.

**How to Set**

To enable asynchronous rendering for a Web Content Viewer portlet:

1. Go to the page that contains the **Web Content Viewer** portlet.
2. Switch to **Edit** mode.
3. Open the portlet’s display menu.
4. Select **Edit Shared Settings** to enter configuration mode.
5. Expand the **Advanced Options** section (if not already expanded).
6. Scroll to the **Asynchronous Web Content Rendering** section.
7. Check the box for **Asynchronous Web Content Rendering** to enable it.
8. Click **OK** to save changes and exit the settings.

![Asynchronous Web Content Rendering](../AsynchronousWebContentRendering.jpg)

For more configuration options, see:  
[Improving page loading performance with asynchronous web content rendering](../../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/improving_asynch_render/index.md)

Use of WCM advanced caching with Asynchronous Web Content Rendering is recommended to improve response times of subsequent requests.

## Web Content Viewer Portlet Caching

The Web Content Viewer portlet (JSR 286 version) can be configured to use the Portlet Fragment Cache. Since the fragment cache stores the Content Viewer’s generated HTML. This cache can be used in addition to the WCM Object Caches.

This cache was not used in our benchmark testing because the purpose of our evaluation was to focus our analysis on WCM performance. However, you can achieve a significant performance increase by enabling this cache, especially if your Web Content Viewer portlet is displaying non-personalized content.

## Projects

WCM and Portal page management authoring environments involve constant database updates. Therefore, the best practice should be to delete unused published projects and update the database statistics on a regular basis (runstats).

**Deleting Published Projects**

1. In the **Authoring Portlet**, navigate to:  
   **Views > Projects > Published**

2. Delete any unused projects to reduce clutter and improve performance.

3. After cleanup, run `RUNSTATS` on the database as described in the [DB2 Tuning](database_tuning.md#db2-tuning) section 