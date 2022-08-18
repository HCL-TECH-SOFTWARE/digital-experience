---
id: h_wab_dock
title: Web Dock application
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Create Web Dock Applications that content authors can add to their web pages. Configure how the web dock application displays on the page and enable other dynamic features according to the page layout and design.

Web dock applications are created as clones of the Web Dock portlet. The content author can add these clones to their page from the application list.

Create web dock applications from the Virtual Web Application Manager portlet after you create the content provider profile and at least one associated policy. Ensure that the title is meaningful so that content authors know which Web Dock portlet to add to the page.

After you select the content provider profile, enter a resource path for the content provider. The resource path that is combined with the profile host is the content provider resource URL. This resource URL is the first content that gets loaded on the web page in the Web Dock portlet. This URL is called the Bootstrap URL for the web dock application. The policies that you created for the profile are loaded at run time that is based on the resource part.

**Note:** If the system administrator changes the host or port information in the content provider profile, you must edit the web dock application and reselect the profile. Otherwise, the web dock application does not pick up the changes.

You can enter a single resource part; for example: /resource\_path. The /resource\_path must be a valid and complete relative URL of the content application.

Web dock applications are created with the values from the **Display**, **Client Side IPC**, **Server Side IPC**, and **Plug-in** settings. You can edit these settings from the Virtual Web Application Manager portlet or from the web dock application's **Edit Shared Settings**.

Content authors can add the appropriate Web Dock portlets to their pages with the site toolbar.

