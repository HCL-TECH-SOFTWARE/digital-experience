# How to reset the Web Content Viewer portlet to its default state

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Resetting the Web Content Viewer portlet restores configuration settings to default values. Removing specific preference keys resolves rendering errors, clears invalid configuration parameters, and restores access to locked settings without deleting the portlet instance from the page. This article describes how to reset the Web Content Viewer portlet to its default state.

## Instructions

To reset the Web Content Viewer portlet to its default state, perform the following steps:

### Updating the portlet deployment

Updating the portlet deployment restores underlying application binaries, JavaServer Pages (JSPs), and system portlet definitions. Perform these steps if application files or web module configurations are corrupted:

1. Updating the portlet from the copy in installableApps.  
    a. Login into the HCL DX Portal as portal administrator.  
    b. In the menubar click to the **home icon** (open application menu) and then click to **Administration**.  
    c. Navigate to **Applications > Web Modules**.  
    d. Search for the **ilwwcm-localrenderingportlet-jsr.war**.  
    e. Click the **Update Web module** icon located to the right of the module properties.  
    f. Click **Browse** and open the following file location:  
        `<PortalServer_root>/pzn.ext/portlet.localrendering.jsr/localrendering.war/installableApps/ilwwcm-localrenderingportlet-jsr.war`.  
    g. Click **Next**, review the selection, and click **Finish**.  

2. Run the **update-wcm** ConfigEngine task.  
    a. Open a command prompt or terminal session.  
    b. Navigate to the `<wp_profile_root>/ConfigEngine` directory.  
    c. Run the following command:  
        **On Linux/UNIX:**  
        ```bash
        ./ConfigEngine.sh update-wcm  
        ```
        **On Microsoft Windows:**  
        ```bash
        ConfigEngine.bat update-wcm  
        ```

3. Creating a copy or clone of the portlet and placed the copy on a page.  
    a. Login into the HCL DX Portal as portal administrator.  
    b. In the menubar click to the **home icon** (open application menu) and then click to **Administration**.  
    c. Navigate to **Applications > Portlets**.  
    d. Search for **Web Content Viewer**.  
    e. Click the **Copy portlet** icon in the row of the Web Content Viewer portlet.  
    f. Enter a unique name for the new portlet copy and click **OK**.  
    g. Navigate to the target page and enable Edit Mode using the toolbar.  
    h. Open the Applications palette, search for the newly created portlet copy, and drag it onto the page layout.  
    i. Save the page changes.  

### Resetting portlet preferences

If updating the portlet deployment does not resolve the issue, collect a full XMLAccess export and database backup, and then perform the following steps:  

1. Log in to HCL DX as an administrator.  
2. In the menubar click to the **home icon** (open application menu) and then click to **Administration**.  
3. Navigate to **Applications > Portlets**.  
4. Search for **Web Content Viewer**.  
5. Select the **Configure portlet** icon.  
6. Delete any of the following preferences that appear:  
    - **SECTION_STATES**  
    - **WCM_COMPONENT_IDR**  
    - **WCM_CONTENT_CONTEXT_BEHAVIOUR**  
    - **WCM_CONTENT_CONTEXT_IDR**  
    - **LOCKED_WCM_CONFIG_KEY**  
7. Select **OK**.  
