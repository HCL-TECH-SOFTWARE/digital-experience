# How to reset the Web Content Viewer portlet to its default state

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Resetting the Web Content Viewer portlet restores configuration settings to default values. Removing specific preference keys resolves rendering errors, clears invalid configuration parameters, and restores access to locked settings without deleting the portlet instance from the page. This article describes how to reset the Web Content Viewer portlet to its default state.

## Instructions

To reset the Web Content Viewer portlet to its default state, perform the following steps:

### Updating the portlet deployment

Updating the portlet deployment restores underlying application binaries, JavaServer Pages (JSPs), and system portlet definitions. Perform these steps if application files or web module configurations are corrupted:

1. Update the portlet from the copy in the `installableApps` folder.  
    1. Log in into the HCL DX as an administrator.  
    2. Navigate to **Open applications menu > Administration > Applications > Web Modules**.  
    3. Search and select **ilwwcm-localrenderingportlet-jsr.war**.  
    4. Select the **Update Web module** icon located to the right of the module name.  
    5. Select **Choose File** and open the following file location:

        ```text
        <PortalServer_root>/pzn.ext/portlet.localrendering.jsr/localrendering.war/installableApps/ilwwcm-localrenderingportlet-jsr.war
        ```

    6. Select **Next**, review the selection, and then select **Finish**.  

2. Run the `update-wcm` ConfigEngine task.  
    1. Open a command prompt or terminal session.  
    2. Navigate to the `<wp_profile_root>/ConfigEngine` directory:
        - Linux or UNIX:

            ```bash
            cd <wp_profile_root>/ConfigEngine
            ```

        - Windows:

            ```cmd
            cd <wp_profile_root>\ConfigEngine
            ```

    3. Run the `update-wcm` ConfigEngine task:

        - Linux or UNIX:

            ```bash
            ./ConfigEngine.sh update-wcm  
            ```

        - Windows:

            ```bash
            ConfigEngine.bat update-wcm  
            ```

3. Creating a copy or clone of the portlet and placed the copy on a page.  
    1. Log in into the HCL DX as an administrator.
    2. Navigate to **Open applications menu > Administration > Applications > Portlets**.
    3. Locate **Web Content Viewer**.
    4. In the **Web Content Viewer** row, select the **Copy portlet** icon.
    5. Enter a unique name for the new portlet copy and click **OK**.  
    6. Navigate to the target page and enable **Edit Mode** using the toolbar.  
    7. On the left-side panel, select **Add page components and applications**.
    8. In the **Applications** tab, search for the newly created portlet copy and drag it onto the page layout.
    9. Disable **Edit Mode** to save the changes.

### Resetting portlet preferences

If updating the portlet deployment does not resolve the issue, collect a full XMLAccess export and database backup, and then perform the following steps:  

1. Log in into the HCL DX as an administrator.
2. Navigate to **Open applications menu > Administration > Applications > Portlets**.
3. Locate **Web Content Viewer**.
4. In the **Web Content Viewer** row, select the **Configure portlet** icon.
5. Select the **Delete preference** icon for any of the following preferences that appear:  
    - **SECTION_STATES**  
    - **WCM_COMPONENT_IDR**  
    - **WCM_CONTENT_CONTEXT_BEHAVIOUR**  
    - **WCM_CONTENT_CONTEXT_IDR**  
    - **LOCKED_WCM_CONFIG_KEY**  
6. Select **OK**.  
