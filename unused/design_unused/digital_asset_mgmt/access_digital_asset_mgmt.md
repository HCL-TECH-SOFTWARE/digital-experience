# Access HCL Digital Asset Management

This section provides the steps on how to access HCL Digital Asset Management and use it as a central platform to store and include rich media assets. Using the HCL Digital Experience 9.5 Digital Asset Management features, users can upload, browse, and search for media files, edit images and metadata, and manage collections and media access,

## Prerequisite

HCL Digital Asset Management should be installed and configured to HCL Digital Experience 9.5 Container Release Update CF181 and higher.

-   For Operator-based deployments, see the [Install the HCL Digital Experience 9.5 Container components](../containerization/install_config_cc_dam.md) topic for instructions on container components.
-   For Helm-based deployments, see the [Deploying DX 9.5 applications to container platforms using Helm](../containerization/deploy_applications_using_helm.md) topic for instructions on deploying applications

**Note:** If you are using a content delivery network \(CDN\) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn), using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.

## Access HCL Digital Asset Management from Practitioner Studio

Follow these steps to access HCL Digital Experience 9.5 Digital Asset Management from the Practitioner Studio.

1.  From your HCL Digital Experience 9.5 Practitioner Studio interface, select **Digital Assets** from the navigator as shown below.

    ![](../images/dam_practitioner_studio_home_page.png "Select Digital Assets from the Practitioner Studio navigator")

    The HCL Digital Experience 9.5 Digital Asset Management can also be accessed from the Practitioner Studio **Digital Assets** tile.

2.  The HCL Digital Experience 9.5 Digital Asset Management user interface is shown. The HCL Digital Asset Management features are displayed on the top bar of the page.

    ![](../assets/HCL_DAM_menu_bar.png "HCL Digital Asset Management user interface")


## Access HCL Digital Asset Management from Content Composer

Content authors can access Digital Asset Management media items when creating content in Content Composer, or Web Content Manager, working with content templates that include image elements.

Follow these steps in this example to HCL Digital Experience 9.5 Digital Asset Management media items when creating web content in Content Composer.

1.  From your HCL Digital Experience 9.5 Practitioner Studio interface, select **Web Content** then **Content Composer** from the navigator.

    ![](../assets/Select_Web_Content_from_Practitioner_Studio_navigator.png "Select Web Content from the Practitioner Studio navigator")

2.  Select a content template with the **Image** element configured to it, Furniture Gallery, in this example.

    ![](../assets/Select_Web_Content_from_Practitioner_Studio_navigator_2.png "Selecting a Web Content template with the Image element")

    Options are presented in the template **Image** element to drag and drop an image to the page or access Digital Asset Management \(DAM\) media items.

3.  Select the **Digital Asset Management** source then view the **Collections** you have access to. From the available **Collection** media items, select the item to add to your content page.

    ![](../assets/Selecting_media_asset_from_DAM_collection_to_insert_web_content_item.png "Selecting the media asset from the DAM collection to insert to the web content
                    item")

4.  Select the **Access** icon to assign levels for other users to access media items stored within the Collection.
5.  Complete the remaining elements in the Content item template as required and click **Save**. Select a **Location** of your Digital Experience site to present the content item, including the media asset from your Digital Asset Management repository.

## Access HCL Digital Asset Management from WCM Authoring Portlet or Inline Editing

Content authors can access Digital Asset Management media items when creating or editing content, components, or content templates in Web Content Manager Authoring Portlet or inline editing. Both image and file components and elements can be configured to use DAM as the source.

To enable users to use DAM as the source while editing the content, use one of the following options:

-   Remove the existing image or file from the content and then select a new image from DAM.
-   In the **Image field properties** window, select the **Show digital asset source** check box, and then select HCL DAM in the **Digital asset source** drop-down list.

    ![](../assets/access_DAM_from_WCM_portlet.png "Image field properties")


**Parent topic:**[HCL Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md)

