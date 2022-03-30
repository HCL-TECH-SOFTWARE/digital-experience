# Upload rich media assets 

Follow these steps to upload rich media assets using HCL Digital Experience 9.5 Digital Asset Management.

## Prerequisite

HCL Digital Asset Management should be installed and configured to HCL Digital Experience 9.5 Container Release Update CF181 and higher. See the [Install the HCL Digital Experience 9.5 Container components](../containerization/install_config_cc_dam.md) topic for instructions.

## Upload rich media assets

Follow these steps to access HCL Digital Experience 9.5 Digital Asset Management from the Practitioner Studio.

1.  From the HCL Digital Experience 9.5 Digital Asset Management interface, click **Upload**. This allows you to view or search, select, and upload rich media assets, such as images and videos from your source repository, to be stored in HCL DAM.

    ![](../images/dam_interface_upload_button.png "Upload button from the HCL DAM interface")

    **Notes:**

    -   You can drag and drop rich media assets from your source or local repository to the HCL Digital Asset Management interface to upload selected rich media assets.
    -   Once the Kaltura plugin is configured and enabled, automatic synchronization of videos happen in the background whenever a video is successfully uploaded.

        -   Videos uploaded to HCL Digital Asset Management are automatically synchronized.
        -   Videos with the **SYNCED** status generates the thumbnail from Kaltura and displays the preview in HCL Digital Asset Management. Videos with other statuses will not have the preview thumbnail available.
        See the [Configure DAM - Kaltura integration ](configure_dam_kaltura_integration.md) topic for details.

2.  After selecting the rich media assets for upload, you are prompted to either add the selected assets to an existing collection or create a collection.
3.  Click **Create Collection** to add selected rich media assets to a new collection. Enter the **Collection Name** and **Collection Description** as applicable.

    ![](../assets/Upload_Media_HCL_Digital_Asset_Management.png "Create or assign rich media assets to a Collection")

4.  Click **Upload**.
5.  The HCL Digital Asset Management interface shows an upload progress bar. When completed, it shows a success message. Click **View Details** to see information about the media asset uploaded, including file size and media type. , as in this example:

    ![](../images/dam_interface_upload_success_view_details.png "Upload completed with details viewed")

    **Notes:**

    -   If the Kaltura plugin is configured and enabled, the media tile shows the following sync statuses for uploaded videos:

        -   SYNC IN PROGRESS
        -   SYNC FAILED
        -   SYNCED
        See the [Configure DAM - Kaltura integration ](configure_dam_kaltura_integration.md) topic for details.

    -   The interface displays features that allows you to edit media asset metadata \(such as `Title` and `Description`\) and user access control \(Access\) of the new or existing collection the rich media asset is uploaded to. See the [Manage collections ](manage_collections.md) topic for details.

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

**Parent topic:**[Common tasks ](../digital_asset_mgmt/DAM_common_tasks.md)

