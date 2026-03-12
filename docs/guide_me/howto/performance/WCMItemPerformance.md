# How to identify if a WCM item is causing a performance issue

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

If it is unclear which content item is at fault, there are a few basic troubleshooting steps that can be followed to narrow down the source.

## Instructions

1. Focus on one page that demonstrates a performance issue with the fewest WCM Rendering Portlets.

2. Identify the WCM content rendered in the WCM Rendering Portlets on the page via **Edit Shared Settings** for each Portlet.

    You will need put the page into **Edit mode** to see the drop-down for **Edit Shared Settings** in the upper right hand corner of the portlet.

    Another option is to navigate to the page in question under **Administration > Site Management** and click the icon to **Edit Page Layout**. Then click the drop-down for the WCM Rendering Portlet in question and select **Edit Shared Settings**.

3. Run the following ConfigEngine task:  

    **On Microsoft Windows:**  

    ```shell
    ConfigEngine.bat action-WCM-clear-cache-all
    ```

    **On AIX/Unix/Linux:**

    ```shell
    ConfigEngine.sh action-WCM-clear-cache-all
    ```

    ???+ info "USE WITH CAUTION"
        Clearing WCM caches can have a major temporary impact on server performance while the caches are re-populated.

4. Clear the browser cache as well.  

5. Preview each WCM item from step 2, using the preview option in the WCM Authoring Portlet.  

6. Preview each item a second time without clearing the browser cache and WCM Caches.  
    Any WCM item that takes longer than five seconds to render is suspect.  

7. Check the presentation template mapped to that content's site area.  

8. Back up the contents of the presentation template, then delete entries in the presentation template one at a time and re-preview the content until the component/element causing the performance issue is isolated.  
