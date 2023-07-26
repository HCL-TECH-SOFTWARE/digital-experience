---
title: Comments in WCM
---

# Comments in WCM

Starting from CF213, the product contains a new solution that allows users to leave comments for Web Content Manager (WCM).
These comments can be used in Intranet scenarios or in controlled settings allowing external comments. 

## WCM Comments as Custom Plugin Component

Starting from CF213, WCM Comments can be enabled as Custom Plugin Component for a WCM content which can be rendered on page and Web Content Viewer​ Portlet.

This section describes how to enable, configure, and disable the WCM commenting solution as as Custom Plugin Component for a WCM content.

### Overview

WCM Comments is a feature that allows customers to enhance their presentation template by adding in a plugin for commenting. The actual comments are also stored in WCM and can be managed like regular content. You can choose which library is being used for storing the comments.

Note that this solution is not related to the existing comments for blogs/wikis ability.

### Enabling the comments plugin in WAS Console 

To make the comments plugin visible in the plugin component tag which should be added to presentation template, you must first add the configuraton in WAS Console. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Enter the following details:

- Name: enable.comment.plugin
- Value: true
- Type: String

!!!important
    After adding the configuration, a JVM restart is required.

![Enable comments plugin in WAS Server](../developing_managing_content/_img/enable-comment-plugin.png)

### Adding Admin User Group Configuration in WAS Console for User Access Control (Optional)

By default, if the configuration for the admin user group is not present in the console, only users with manager-level access can delete comments.

For security purposes, if you need to limit the delete comments option to a specific user group, you must add the following configuration. In WAS Console, go to **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties > New Property**. Enter the details below:

- Name: comments.admin.group
- Value: cn={user-group},o=defaultWIMFileBasedRealm
- Type: String

**user-group** can be any user group such as managers, admins, editors, etc.

![Adding Admin User Group Configuration in WAS Console](../developing_managing_content/_img/comments-admin-group.png)

### Adding Custom Plugin

1. To use the custom plugin, add it to **Libraries > Web Content > Presentation Templates > Article Presentation**.
2. In the **Presentation Template Options**, click the **Insert Tag** button to add the custom plugin.
3. In the **Insert Tag** window, select the following values:
    - In **Select a tag type** field, select **Plugin Component**.
    - In **Select a plugin type** field, select **Content**.
    - In **Select plugin to reference** field, select **NewCommentRenderPlugin**. 
![Insert a Tag](../developing_managing_content/_img/insert-a-tag.png)
4. Click **OK** after selecting all the values.
5. The plugin tag for custom plugin is added on the Article Presentation body. Click **Save and Close** to save changes.
![Plugin Tag](../developing_managing_content/_img/plugin-tag.png)
!!!note
    You can specify the library you want to use for storing comments in the commentsLibrary field.
6. Set up and view the Comments UI on the page. 
    1. Click **Create Page** and add the content created in Step 5. 
    2. Using the Web Content Viewer portlet, select the content to render.
    3. Click **OK**.
![Page with Web Content](../developing_managing_content/_img/page-with-web-content.png)
After setting up the comments UI on the page, you can now add, reply, like/unlike, and delete comments. You can also view the total comments count on the content item.
![WCM Comments UI](../developing_managing_content/_img/wcm-comments-ui.png)

## Render Presentation Template of content in external components

Starting from CF214, WCM comments can be rendered in the external components like Page Components, Rich Text, Custom Portlets or Script applications etc. In this case, enabling and configuring Custom Plugin Component for WCM comments as described in the previous section is not required.

With this approach, WCM Comments library is shipped with additional authoring template that uses newly added presentation template for rendering the WCM comments in the external components like Page Components, Rich Text, Custom Portlets or Script applications etc.

This section gives an overview about the page component shipped as a part of CF214 and also describes how to configure WCM comments in the external components like Rich Text Editor, Script Application and Custom Portlet.

### Overview on Custom Page Component for WCM Comments

Starting from CF214, custom page component is available for rendering the WCM comments for any content that can be present in any custom library.


### New Custom Page Component

The new custom page component is available in the site manager under "Page Components Tab"

### Configuring WCM comments in Rich Text Editor

1. Edit the content to which WCM comments feature needs to be available.
2. In the **Rich Text Editor**, click the **Insert Tag** button to add the WCM tag.
3. In the **Insert Tag** window, select the following values:
    - In **Select a tag type** field, select **Content**.
    - In **Context** field, select **Selected**.
    - In **Content Reference** field, select **New Comments content under WCM Comments 1.0/Page Component**. 
![Insert a Tag](../developing_managing_content/_img/insert-a-tag.png)
4. Click **OK** after selecting all the values and then Save.
5. Once WCM Comments UI is rendered, provide the actual content uuid to the component.
6. After setting up the comments UI on the rich text editor, add, reply, like/unlike, and delete comments operations can be done. Also the total comments count on the content item can be viewed. 

### Configuring WCM comments in Script Application

1. On the Site manager > Application > Script Application (add to page)
2. Edit > Actions (top right of the page) > Insert WCM Tag then select our page component (WCM Comments 1.0/Page Component)
3. Pop-up- Tag type : Content- Context: Selected- Content reference: New Comments content under WCM Comments 1.0/Page Component
4. Ok then Save
5. Save (Top right)
6. Close the script app modal
7. Provide the actual content uuid to the component

### Configuring WCM comments in Custom Portlet


## Access Roles and Permissions for WCM Comments

Only authorized users can view, edit, and delete the comments in the library where the comments are stored. For more information, see [Managing users and groups](../../../deployment/manage/security/people/authorization/controlling_access/managing_users_groups/index.md). 

The actions available for a user depend on their role:

- The **User** role or higher is required to see the comments.
- The **Contributor** role or higher is required to create comments.
- The **Manager** role or higher is required to delete comments. In addition to the Manager role, you can configure a specific group solely for deleting comments.

## Limitations

- Nested replies to comments are yet supported.
- Posting and replying are limited to 500 characters. 
- Rendering Comments outside the WCM rendering process (for example, from REST or a custom Servlet or JSP via the java WCM API) is not yet supported.

## Update global "Article" presentation template

If you want to perform a replacement of the OOB components that are shipped, see [Adding the sample web content libraries in the authoring portlet](../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/getting_started/creating_contentsamples/wcm_delivery_ctsamples_libraries.md).



