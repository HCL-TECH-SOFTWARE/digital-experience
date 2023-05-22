---
title: Comments in WCM
---

# Comments in WCM

Starting with version 213 the product contains a new solution for the ability for users to leave comments for WCM.
We envision comments to be used in Intranet scenarios or in controlled settings allowing external comments.

This article describes how to enable and configure or disable the solution.

## Description of the feature

The actual comments are stored in WCM as well and can be managed like regular content. 
You can choose which library is being used for storing the comments.

Only authorized users can view / edit / delete the comments (specific to the library the comments are stored in).
The User role or higher is required to see the comments.
The Contributor role or higher is required to create comments.
The Manager role or higher is required to delete comments. Additionally a specific group can be configured that is the only one to delete comments (in addition to Manager role).

Note that this solution is not related to the existing comments for blogs/wikis ability.

## Enable comments plugin in WAS Console 

In order to make comments plugin visible in the plugin component tag which we will add to presentation template, we need to add the configuraton in WAS Console. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Input the details below:

- Name: enable.comment.plugin
- Value: true
- Type: String

Note: After adding the configuration, JVM restart is required.

![Enable comments plugin in WAS Server](../developing_managing_content/_img/enable-comment-plugin.png)

## Adding Admin Group Configuration in WAS Console for User Access Control

For added security one can configure an admin group to be able to delete comments. From that a new configuration in the WAS Console is needed. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Input the details below:

- Name: comments.admin.group
- Value: cn=wpsadmins,o=defaultWIMFileBasedRealm
- Type: String

Note: After adding the configuration, JVM restart is required. Also note that, we are in the process of including manager role to do all the operation on comments as per the portal access control feature.

![Adding Admin Group Configuration in WAS Console](../developing_managing_content/_img/comments-admin-group.png)

## Adding Custom Plugin

1. To use the custom plugin, add it to **Libraries > Web Content > Presentation Templates > Article Presentation**.
2. In the Presentation Template Options, click the Insert Tag button to add the custom plugin.
3. In Insert Tag window, select a tag type as **Plugin Component**, select a plugin type as **Content** and select plugin to reference as **NewCommentRenderPlugin**. Click OK button after selecting all the values.
![Insert a Tag](../developing_managing_content/_img/insert-a-tag.png)
4. The plugin tag for custom plugin already added on the Article Presentation body. Click Save and Close button to save changes.
![Plugin Tag](../developing_managing_content/_img/plugin-tag.png)
Note: We can specify our own library for commentsLibrary field to store comments.
5. Setup and View Comments UI in page. 
    1. Create Page and add above content directly
    2. Render content on the page and select content with custom plugin in Web Content Viewer
    3. Click OK after selecting content.
![Page with Web Content](../developing_managing_content/_img/page-with-web-content.png)
6. After setting up comments UI in page, you can now add, reply, like/unlike, and delete comments. You can also view total comments count on the page.
![WCM Comments UI](../developing_managing_content/_img/wcm-comments-ui.png)

## Limitations

1. Comments nested reply not yet supported
2. Posting/replying of long comments not yet supported (TBD)
3. Localized date not yet properly rendered (TBD)
4. Rendering comments outside WCM

## Update global "Article" presentation template

If you want to do a replacement of the OOB components that are shipped, please see [Adding the sample web content libraries in the authoring portlet](https://opensource.hcltechsw.com/digital-experience/CF211/manage_content/wcm_delivery/deliver_webcontent_on_dx/getting_started/creating_contentsamples/wcm_delivery_ctsamples_libraries/)
