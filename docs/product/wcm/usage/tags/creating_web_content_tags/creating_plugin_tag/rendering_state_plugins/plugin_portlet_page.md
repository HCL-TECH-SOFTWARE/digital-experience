---
id: plugin_portlet_page
title: The Page mode rendering plug-in
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Use the `PageMode` rendering plug-in to write web content, depending on the mode of a portal page, for example EDIT, HELP, INFO mode.

This plug-in uses the following attribute:

-   **pageMode**

    Use this attribute to specify the name of the page mode for which you want to check. If the specified page mode is active, this plug-in renders the content between the plug-in opening and closing tags.


Examples:

-   To render the content between the opening and the closing tag only if the page is in EDIT mode, use the following plug-in tag:

    ```
    [Plugin:PageMode pageMode="EDIT"]   
       This markup is rendered only if the current page is in edit mode. 
    [/Plugin:PageMode]
    
    ```

-   To render the content between the opening and the closing tag only if the page is in HELP mode, use the following plug-in tag:

    ```
    [Plugin:PageMode pageMode="HELP"]    
       This markup is rendered only if the current page is in help mode.  
    [/Plugin:PageMode]
    ```

-   To render the content between the opening and the closing tag only if the page is in INFO mode, use the following plug-in tag:

    ```
    [Plugin:PageMode pageMode="INFO"]    
       This markup is rendered only if the current page is in info mode.  
    [/Plugin:PageMode]
    ```


