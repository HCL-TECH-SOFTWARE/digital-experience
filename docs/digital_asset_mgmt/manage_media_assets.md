# Manage media assets 

This section provides the steps on how to manage media assets and view configuration settings using HCL Digital Asset Management.

## Prerequisite

HCL Digital Asset Management CF181 or higher should be installed and configured to the HCL Digital Experience 9.5 Container Release update, following these instructions in the [Install the HCL Digital Experience 9.5 Container components](../containerization/install_config_cc_dam.md) topic.

## View supported file formats

Follow these steps to view a list of file formats supported by HCL Digital Experience 9.5 Digital Asset Management.

1.  Log in to your HCL Digital Experience 9.5 platform and select **Digital Assets** from the Practitioner Studio navigator.

    ![](../images/dam_upload_media_collections.png "Digital Asset Management user interface")

    The HCL Digital Experience 9.5 Digital Asset Management can also be accessed from the Practitioner Studio **Digital Assets** tile.

2.  From the HCL Digital Experience 9.5 Digital Asset Management user interface, select the gear icon \(for **Settings**\) located at the far top-right of the Digital Asset Management menu bar.
3.  **Settings** will display the **Supported file formats** section by default.

    ![](../images/dam_settings_supported_file_formats.png "DAM > Settings > Files")


The following are supported media asset file formats in HCL Digital Experience 9.5 Container Update Release CF183 and higher releases.

|File type|Extension|
|---------|---------|
|.png|image/png|
|.svg|image/svg+xml|
|.gif|image/gif|
|.jpg|image/jpeg|
|.jpeg|image/jpeg|
|.tif|image/tiff|
|.tiff|image/tiff|

|File type|Extension|
|---------|---------|
|.ogv|video/ogg|
|.mp4|video/mp4|
|.webm|video/webm|

**Note:** Videos are automatically synchronized once they are uploaded. Auto-synchronization is a background activity in HCL Digital Asset Management that happens when any video is uploaded and when Kaltura integration is configured and enabled.

|File type|Extension|
|---------|---------|
|.pptx|application/vnd.openxmlformats-officedocument.presentationml.presentation|
|.xls|application/vnd.ms-excel

 application/octet-stream

 application/x-msi

|
|.doc|application/msword|
|.docx|application/vnd.openxmlformats-officedocument.wordprocessingml.document|
|.xlsx|application/vnd.openxmlformats-officedocument.spreadsheetml.sheet|
|.ppt|application/vnd.ms-powerpoint|
|.pdf|application/pdf|

## Play a video in DAM

Play uploaded videos in DAM using the DAM binary URL or the Kaltura Player \(if the Kaltura plugin is configured and enabled\):

-   Use the DAM binary URL when:
    -   The uploaded video synchronization status is SYNC FAILED.
    -   The Kaltura plugin is not configured and enabled.

        ![](../images/dam_binary_url_for_failed.png "Using the DAM binary URL to play a video")

-   Use the Kaltura Player when:
    -   The video synchronization status is SYNCED, play the video based on the configured Player ID.
    -   The Kaltura plugin is configured and enabled.

        ![](../images/dam_kaltura_player_for_synced.png "Playing a video using the Kaltura Player")


**Note:** Videos being synced in progress displays a warning message and cannot be played yet.

![](../images/dam_warning_message_for_in_progress.png "Warning message for sync in progress")

For more information on the video synchronization statuses for uploaded videos, see [Upload rich media assets](upload_rich_media_assets.md#ul_zhl_vxq_qnb).

## Download a media asset source, version, or rendition

Use the HCL Digital Experience 9.5 Digital Asset Management editor to download a media asset source, version, or rendition:

1.  From the HCL Digital Experience 9.5 Digital Asset Management interface, hover over a media asset to access and click the Overflow menu on the far right \(three vertical dots icon\), which is after **Add Favorites** \(star icon\). Then, select **Download**.

    ![](../images/dam_05_edit_media.png "Digital asset menu options")

2.  A pop-up will appear for you to select your Download actions. You can rename downloaded media asset and choose to download **Source** or **Renditions**, or all asset types.

    ![](../assets/Download_renditions_HCL_DAM.png "Download media asset and renditions")

3.  Click **Download** to proceed.

## Deleting a media asset

Use the HCL Digital Experience 9.5 Digital Asset Management editor to delete a media asset, including its renditions:

1.  From the HCL Digital Experience 9.5 Digital Asset Management interface, hover over a media asset to access and click the Overflow menu on the far right \(three vertical dots icon\), which is after **Add Favorites** \(star icon\), as shown above. Then, select **Delete**.
2.  A pop-up will appear for you to select your Delete action. If the selected media assets will not affect any references, click **Check for references and delete** to complete action.

    ![](../assets/Check_for_references_and_delete_HCL_DAM.png "Check references and delete media asset")


-   **[DAM Assets Export and Import \(EXIM\) ](../containerization/dam_exim.md)**  
[Digital Asset Management](digital_asset_mgmt_overview.md) \(DAM\) Assets Export and Import \(EXIM\) is a tool used for exporting the DAM assets from the source environment to the file system in a structured manner. It can also be used for importing DAM assets from the file system to the target environment.

**Parent topic:**[Common tasks ](../digital_asset_mgmt/DAM_common_tasks.md)

