---
title: Comments in WCM
---

# Comments in WCM

Starting from CF213, the product contains a new solution for the ability for users to leave comments for Web Content Manager (WCM).
These comments can be used in Intranet scenarios or in controlled settings allowing external comments.

This page describes how to enable and configure or disable the solution.

## Overview

WCM Comments is a feature that allows customers to enhance their presentation template by adding in a plugin for commenting. The actual comments are also stored in WCM and can be managed like regular content. You can choose which library is being used for storing the comments.

Only authorized users can view, edit, and delete the comments (user access permission ![user access permission](https://pages.git.cwp.pnp-hcl.com/CWPDoc/dx-mkdocs/in-progress/deployment/manage/security/people/authorization/controlling_access/wcm_security/wcm_cms_access/wcm_security_items/) to the library the comments are stored in).

The actions available for a user are dependent on their role:
- The **User** role or higher is required to see the comments.
- The **Contributor** role or higher is required to create comments.
- The **Manager** role or higher is required to delete comments. In addition to the Manager role, you can configure a specific group solely for deleting comments.

Note that this solution is not related to the existing comments for blogs/wikis ability.

## Enabling the comments plugin in WAS Console 

To make the comments plugin visible in the plugin component tag which should be added to presentation template, you must first add the configuraton in WAS Console. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Enter the following details:

- Name: enable.comment.plugin
- Value: true
- Type: String

!!!note
    After adding the configuration, a JVM restart is required.

![Enable comments plugin in WAS Server](../developing_managing_content/_img/enable-comment-plugin.png)

## Adding Admin User Group Configuration in WAS Console for User Access Control (Optional)

By default, if the configuration for the admin user group is not present in the console, only users with manager-level access can delete comments.

For security purposes, if you need to limit the delete comments option to a specific user group, you must add the following configuration. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Enter the details below:

- Name: comments.admin.group
- Value: cn={user-group},o=defaultWIMFileBasedRealm
- Type: String

**user-group** can be any user group such as managers, admins, editors, etc.

Take note of the following:

-   Only users with manager level access inside the user group can delete comments


![Adding Admin User Group Configuration in WAS Console](../developing_managing_content/_img/comments-admin-group.png)

## Adding Custom Plugin

1. To use the custom plugin, add it to **Libraries > Web Content > Presentation Templates > Article Presentation**.
2. In the **Presentation Template Options**, click the **Insert Tag** button to add the custom plugin.
3. In **Insert Tag** window, select a tag type as **Plugin Component**, select a plugin type as **Content** and select plugin to reference as **NewCommentRenderPlugin**. Click **OK** after selecting all the values.
![Insert a Tag](../developing_managing_content/_img/insert-a-tag.png)
4. The plugin tag for custom plugin already added on the Article Presentation body. Click **Save and Close** to save changes.
![Plugin Tag](../developing_managing_content/_img/plugin-tag.png)
!!!note
    We can specify our own library for commentsLibrary field to store comments.
5. Set up and view the Comments UI in page. 
    1. Click **Create Page** and add the content mentioned in Step 4 directly. 
    2. Using the Web Content Viewer portlet, select the content to render.
    3. Click **OK**.
![Page with Web Content](../developing_managing_content/_img/page-with-web-content.png)
6. After setting up the comments UI on the page, you can now add, reply, like/unlike, and delete comments. You can also view the total comments count on the content item.
![WCM Comments UI](../developing_managing_content/_img/wcm-comments-ui.png)

## Limitations

1. Nested replies to comments are yet supported.
2. Posting and replying are limited to 500 characters. 
3. Localized date is not yet properly rendered.
4. Comments cannot be rendered outside of WCM.

## Update global "Article" presentation template

If you want to perform a replacement of the OOB components that are shipped, see [Adding the sample web content libraries in the authoring portlet](https://opensource.hcltechsw.com/digital-experience/latest/manage_content/wcm_delivery/deliver_webcontent_on_dx/getting_started/creating_contentsamples/wcm_delivery_ctsamples_libraries/).
