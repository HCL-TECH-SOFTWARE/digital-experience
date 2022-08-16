---
id: plugin_page
title: Page plug-ins
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Logic plug-ins are used with the current page context. This topic contains additional information for some of these plug-ins.

## Page plug-in

-   Used access information about a portal page.
-   `[Plugin:Page key=" " selection=" " ]`
-   To specify the information to retrieve, use the "key" attribute and set the value to "id", "title" or "description".
-   To specify the page these information should be retrieved for you can optionally set for the "selection" attribute to "current", "parent" or set it to the ID or unique name of the page. The default for "selection" attribute is "current".

For example:

-   To write the ID of the current portal page use `[Plugin:Page key="id"]`.
-   To write the title of the parent page use `[Plugin:Page key="title" selection="parent"]`.
-   To write the description of the page with the unique name "intranet.sales" use `[Plugin:Page key="description" selection="intranet.sales"]`

## Theme capability rendering plug-in

Use the `ThemeCapability` rendering plug-in to retrieve the list of available theme capabilities of the page that is rendered. These capabilities are described in *Basic artifacts and their relation.* The plug-in returns the capabilities, in no specific order, as a string of name-value pairs that are separated by commas.

Here is an example of a string that is returned when the `[Plugin:ThemeCapability]` tag is rendered on a page that uses the Lightweight profile theme:

```
{analytics_aggregator=8.0, portal.livetext.hcard=8.0, widget_container=2.1, 
active_site_analytics=8.0, portal.livetext.action=8.0, 
open_ajax_hub=2.0, dojo=1.7, mashups.enabler=3.0.0.1, 
content_mapping.picker=8.0, cp_tagging_rating=8.0, oneUI=3.0.1, 
portal.livetext.adr=8.0, mashups.builder=3.0.0.1, 
federated_documents.picker=8.0, portal.livetext.c2a=8.0}
```

You can use the `Matches` plug-in to check for the availability of specific theme capabilities and then dynamically add markup to the rendered content. The following sample adds a string \(`... Dojo is available ...`\) to the markup only if the Dojo theme capability is available in the current rendering context:

```
[Plugin:Matches text="[Plugin:ThemeCapability]" pattern=".*dojo=.*"] 
... Dojo is available ...
[/Plugin:Matches]
```

## URL encode plug-in

-   This plug-in encodes text so that it can be used in a URL.
-   `[plugin:urlencode text="Text"]`

