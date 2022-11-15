# Filtering the Results of a WCM Navigator Component

This document describes how to filter WCM navigator component results and uses the Woodburn Studio site as an example of when this type of filtering might be needed.

A WCM navigator component is designed to run through the WCM artifacts located under a site area or content item and to display those resources. Under certain circumstances, it might be necessary to filter the results of the navigator component to control what is displayed.

## Woodburn Studio Home page issue

The Woodburn Studio Home page uses a navigator component to display some of the contents of the page. In addition, the page has associated content defined which points to the Woodburn Studio Content/Home site area. The navigator is configured to display the content of this site area.

![](../../images/Woodburn_Studio_issue_HomeSiteArea.png)

An issue can therefore occur if additional, unrelated content is placed in this site area. One way this can happen is by adding a script application to the Home page. The OOB \(Out Of Box\) Script Application uses the associated content of the page to determine where the application will be placed. For example, if the Script Application is added to the Woodburn Studio Home page, you can see in the Web Content Management \(WCM\) UI that an additional content item has appeared under the site area.

![](../../images/WoodBurn_Studio_LibraryExplorer.png)

Adding the Script Application to the Woodburn Studio Home page causes an appearance issue because the portlet displays twice at the bottom of the page. The navigator is configured to display every item under the Home site area so the Script Application is displayed first as part of the navigator, and secondly, as a new portlet on the page. Having the portlet appear twice on the page is not desirable, and can be fixed in the following two ways:

-   Fix by reconfiguring the page properties
-   Fix by filtering the navigator results

![](../../images/WoodBurn_Studio_SiteManager.png)

## Fix by reconfiguring the page properties

The issue on the Woodburn Studio Home page can be fixed by changing the content association in the page properties dialog to something other than Woodburn Studio Content/Home. However, it is a WCM best practice to associate the page with a WCM site area or other WCM artifact, so this fix is not recommended.

![](../../images/Fix_reconfiguring_WCMArtifact.png)

## Fix by filtering the navigator results

The better option to fix the Woodburn Studio Home page issue is to filter the results in the navigator so that the Script Application content item is not included.

The navigator used for the Home page can be found by looking at the Home page site area presentation template override.

![](../../images/Fix_filtering_template.png)

The presentation template override in the Home page site area identifies PT-Override as the presentation template which will be used to render the page. The **Presentation Template Options** section in the **PT-Override** template pulls in the nav-render-content-per-site-area navigator component.

![](../../images/Fix_filtering_PT_Override.png)

The Nav-Render-Content-Per-Site-Area navigator is configured to start at the current top level site area \(in this case, Woodburn Studio Content/Home\) and there is no filtering in the **Result design 1** section, so the Script Application shows up in the navigator list and is subsequently displayed twice on the page.

![](../../images/Fix_filtering_Nav-Render-Content.png)

The following filter can be added to the navigator to filter the Script Application from the results. The filter displays only artifacts which do not have an associated authoring template of **Script Portlet**.

![](../../images/Fix_filtering_List_presentation_Markup.png)

As a result of the filter, the Script Application is removed from the navigator list and the page displays correctly showing only one instance of the portlet.

![](../../images/Fix_filtering_FinalResult.png)


