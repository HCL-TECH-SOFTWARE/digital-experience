# Link examples for Web Content Viewers

Web Content Viewers can broadcast and receive links to communicate with other viewers. Depending on the link settings that you use with the viewers, the behavior of the viewers can be different. These examples demonstrate how different broadcast and receive settings can affect what a viewer renders.

## Example 1: Configuring links for a single portlet

In this scenario, a single Web Content Viewer is configured to show a dynamic component, such as a menu. The menu contains links to content in a site area. When you click a link, the viewer continues to render the component, but the component uses the target content to set the web content context. Based on the new context, the component generates appropriate markup. In this example of a menu, the component shows links to content of the site area where the target content is located.

|Web Content Viewer content|Broadcast links to|Receive links from|
|--------------------------|------------------|------------------|
|**Component**|None|This Web Content Viewer|

When you display a component with a Web Content Viewer, you can also select an alternative presentation template in the content view of the content section. When a link is clicked in the component, the content that is then rendered uses the alternative presentation template.

## Example 2: Configuring links for a menu and content

In this scenario, one Web Content Viewer contains a Web Content Manager menu and another Web Content Viewer contains Web Content Manager content. Links must be created between the two viewers to enable the rendered content to change when different links in the menu are selected.

|Web Content Viewer content|Broadcast links to|Receive links from|
|--------------------------|------------------|------------------|
|**Menu**|This page|None|
|**Content**|None|Other Web Content Viewers and this viewer|

## Example 3: Configuring links for a navigator and content

In this scenario, one Web Content Viewer contains an item views navigator and another viewer contains some Web Content Manager content. Links must be created between the two viewers to enable the rendered content to change when different links in the navigator are selected. The navigator also changes to reflect the current state of the content that is rendered.

|Web Content Viewer content|Broadcast links to|Receive links from|
|--------------------------|------------------|------------------|
|**Navigator**|This page|Other Web Content Viewers and this viewer|
|**Content**|This page|Other Web Content Viewers and this viewer|

## Example 4: Configuring dynamic links for a navigator and web content pages

In this scenario, one Web Content Viewer contains a site views navigator, and several web content pages that are associated with different site areas. Each web content page contains a viewer and is configured to show the default content item of the site area that is associated with the page.

Instead of manually creating links between the different viewers, you can use dynamic link broadcasting with the viewer. Dynamic link broadcasting automatically determines which web content page is used as the target for the links to the site area in the navigator.

|Web Content Viewer content|Broadcast links to|Receive links from|
|--------------------------|------------------|------------------|
|**Navigator**|Dynamically select a web content page|None|
|**Content on web content page**|This page|Other Web Content Viewers and this viewer|


