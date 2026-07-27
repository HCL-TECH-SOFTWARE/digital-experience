# How to reset the Web Content Viewer portlet to its default state

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Resetting the Web Content Viewer portlet restores configuration settings to default values. Removing specific preference keys resolves rendering errors, clears invalid configuration parameters, and restores access to locked settings without deleting the portlet instance from the page. This article describes how to reset the Web Content Viewer portlet to its default state.

## Instructions

To reset the Web Content Viewer portlet to its default state, perform the following steps:

### Updating the portlet deployment

Updating the portlet deployment restores underlying application binaries, JavaServer Pages (JSPs), and system portlet definitions. Perform these steps if application files or web module configurations are corrupted:

1. Updating the portlet from the copy in installableApps. <!--Can we get more specific steps here?-->

    <!--
    a. Go to Administration > Portlet Management > Web Modules.
    b. Locate ilwwcm-localrenderingportlet-jsr.war.
    c. Click the Update Web module icon located to the right of the module properties.
    d. Click Browse and select PortalServer_root/pzn.ext/portlet.localrendering.jsr/localrendering.war/installableApps/ilwwcm-localrenderingportlet-jsr.war.
    e. Click Next, review the selection, and click Finish.
    -->

2. Run the **update-wcm** ConfigEngine task. <!--Can we get more specific steps here?-->

    <!--
    a. Open a command prompt or terminal session.
    b. Navigate to the wp_profile_root/ConfigEngine directory.
    c. Run ./ConfigEngine.sh update-wcm on Linux/UNIX or ConfigEngine.bat update-wcm on Windows.
    -->

3. Creating a copy or clone of the portlet and placed the copy on a page. <!--Can we get more specific steps here?-->

    <!--
    a. Go to Administration > Portlet Management > Portlets.
    b. Search for Web Content Viewer.
    c. Click the Copy portlet icon in the row of the Web Content Viewer portlet.
    d. Enter a unique name for the new portlet copy and click OK.
    e. Navigate to the target page and enable Edit Mode using the toolbar.
    f. Open the Applications palette, search for the newly created portlet copy, and drag it onto the page layout.
    g. Save the page changes.
    -->

### Resetting portlet preferences

If updating the portlet deployment does not resolve the issue, collect a full XMLAccess export and database backup, and then perform the following steps:

1. Log in to HCL DX as an administrator.
2. Navigate to **Administration > Portlet Management > Portlets**.
3. Search for **Web Content Viewer**.
4. Select the **Configure portlet** icon.
5. Delete any of the following preferences that appear:
    - **SECTION_STATES**
    - **WCM_COMPONENT_IDR**
    - **WCM_CONTENT_CONTEXT_BEHAVIOUR**
    - **WCM_CONTENT_CONTEXT_IDR**
    - **LOCKED_WCM_CONFIG_KEY**
6. Select **OK**.
