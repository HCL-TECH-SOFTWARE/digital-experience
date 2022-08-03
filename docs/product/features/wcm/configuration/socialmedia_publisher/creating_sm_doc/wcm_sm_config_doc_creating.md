# Creating a social network configuration document

To create a social network configuration document, you create a content item that uses the Social Network Configuration authoring template.

The configuration settings for each social network you want to post to are stored in separate content items. These content items are never displayed on a website and are only used to store configuration settings. To create a new social network configuration document:

1.  Create a content item that uses the **Social Network Configuration** authoring template. This template is in the **Social Configuration** library.

2.  Type a name and display title.

3.  Enter the name of your production domain in the **Site Domain** field. For example, enter www.ibm.com.

    -   If this site is a virtual portal, then the site domain must be either the virtual portal host name or a public domain name that resolves to the virtual portal host name.
    -   If your virtual portal does not define a virtual portal host name, then the site domain field can also be set by using the following format: `host/portal_context/vp_url_context`. For example, you can use `localhost/wps/portal/myvp`.
    -   When you post content to Facebook, LinkedIn and Twitter, the site domain must be internet accessible, otherwise your social media posts might not function correctly.
    -   If a web server is not being used, then the domain must include the portal port. For example, include myserver:10039.
    -   If the domain is not accessible by using port 80, then the domain must also include the HTTP port.
4.  In the **Social Network Information** section, select a social network and enter configuration settings for the chosen network.

5.  When the authentication settings are specified, click **Authorize**.

6.  Map the social network configuration document to one or more content authoring templates by clicking **Add** under the **Mapped Authoring Template** section.

    -   These templates should be authoring templates that are associated with content types you would like to post to social networks.
    -   You can map multiple social network configuration documents to the one authoring template, and multiple authoring templates to the one social network configuration document.
    -   Select **Automatically add social information element** to automatically add the **Social Information** element to each new content item created by using a mapped authoring template.
7.  Specify extra settings:

    -   **Display social action buttons**

        Select which social action buttons are displayed in the social media table.

    -   **Action to perform on document delete**

        When an item is deleted, you can choose to either delete the item only, or delete the item and also delete any social media posts related to that item.

    -   **Configuration enabled**

        This is enabled by default. If disabled, social media publishing is stopped for this social media configuration. This social media configuration is hidden from the social information table in content items, and hidden from selection dialogs in social media workflow actions.

    -   **Enable Posting for draft documents**

        If enabled, social media posts are created for draft items and published items. This setting is disabled by default. If enabled, social media posts can be sent from draft items, either by using the social media table or social media workflow actions, in the same way as published items.

    -   **Show enabled social actions in read mode**

        When enabled, the functions available in the social information table on content forms can be used in both read and edit mode.

    -   **Link Mode**

        This option determines the type of links that are used in social media posts, depending on whether your content is published in a portlet or servlet.

    -   **Language**

        This option is used to select the language that is used to render social media posts.


-   **[Defining social network settings for HCL Connections](../wcm/wcm_sm_config_doc_connections.md)**  
Complete these steps to set up a social network connection for HCL Connections.
-   **[Configuration settings for Facebook](../wcm/wcm_sm_config_doc_fb.md)**  
Complete these configuration parameters to set up a social network connection for Facebook.
-   **[Defining social network settings for LinkedIn](../wcm/wcm_sm_config_doc_li.md)**  
Complete these configuration parameters to set up a social network connection for LinkedIn.
-   **[Defining social network settings for Twitter](../wcm/wcm_sm_config_doc_twitter.md)**  
Complete these configuration parameters to set up a social network connection for Twitter.

**Parent topic:**[Social network configuration](../wcm/wcm_sm_config_doc.md)

