---
title: Comments in WCM
---

# Comments in WCM

Starting with version 95_CF213 the product contains a new solution for the ability for users to leave comments for WCM.
We envision comments to be used in Intranet scenarios or in controlled settings allowing external comments.

This article describes how to enable and configure or disable the solution.

## Description of the feature

WCM Comments is a feature that allows customers to enhance their presentation template by adding in a plugin for commenting. The actual comments are stored in WCM as well and can be managed like regular content. You can choose which library is being used for storing the comments.

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

Note: After adding the configuration, a JVM restart is required.

![Enable comments plugin in WAS Server](../developing_managing_content/_img/enable-comment-plugin.png)

## Adding Admin User Group Configuration in WAS Console for User Access Control (Optional)

By default, if the configuration for the admin user group is not present in the console, users with manager level access only would be able to delete comments.

For security purposes if you need to limit the delete comments option into a specific user group you need to add the below configuration. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Input the details below:

- Name: comments.admin.group
- Value: cn={user-group},o=defaultWIMFileBasedRealm
- Type: String

Note:

-   user-group can be any user group like managers, admins, editor, etc.
-   Only users with manager level access inside the user group can delete comments
-   After adding the configuration, a JVM restart is required. Also note that, we are in the process of including manager role to do all the operation on comments as per the portal access control feature.


![Adding Admin User Group Configuration in WAS Console](../developing_managing_content/_img/comments-admin-group.png)

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
    2. Using the Web Content Viewer portlet, select the content to render
    3. Click OK after selecting content.
![Page with Web Content](../developing_managing_content/_img/page-with-web-content.png)
6. After setting up comments UI in page, you can now add, reply, like/unlike, and delete comments. You can also view total comments count on the content item.
![WCM Comments UI](../developing_managing_content/_img/wcm-comments-ui.png)

## Limitations

1. Nested replies to comments are not supported yet
2. Posting/replying of long comments not yet supported
3. Localized date not yet properly rendered
4. Comments can not be rendered outside of WCM

## Update global "Article" presentation template

If you want to do a replacement of the OOB components that are shipped, please see [Adding the sample web content libraries in the authoring portlet](https://opensource.hcltechsw.com/digital-experience/latest/manage_content/wcm_delivery/deliver_webcontent_on_dx/getting_started/creating_contentsamples/wcm_delivery_ctsamples_libraries/)
