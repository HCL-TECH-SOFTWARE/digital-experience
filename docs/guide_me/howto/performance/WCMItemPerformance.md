# How To Identify if a WCM Item is Causing a Performance Issue

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

If you are unclear which content item is at fault, there are a few basic troubleshooting steps that you can follow to narrow down the source.

## Instructions

1. Focus on one page that demonstrates a performance issue with the fewest WCM Rendering Portlets.

2. Identify the WCM content rendered in the WCM Rendering Portlets on the page via Edit Shared Settings for each Portlet.

    You will need put the page into Edit mode to see the drop-down for Edit Shared Settings in the upper right hand corner of the portlet.

    Another option is to navigate to the page under Administration > Manage Pages > click the icon to "Edit Page Layout" > click the drop-down for the WCM Rendering Portlet in question > Edit Shared Settings.

3. Run the following ConfigEngine task: ConfigEngine.sh|bat action-WCM-clear-cache-all

    ???+ info "USE WITH CAUTION"
        Clearing WCM caches can have a major temporary impact on server performance while the caches are re-populated.

4. Clear the browser cache as well.

5. Preview each WCM item from step 2, using the preview option in the WCM Authoring Portlet.

6. Preview each item a second time without clearing the browser cache and WCM Caches.

Any WCM item that takes longer than five seconds to render is suspect.

Check the presentation template mapped to that content's site area.

Back up the contents of the presentation template, then delete entries in the presentation template one at a time and re-preview the content until the component/element causing the performance issue is isolated.
