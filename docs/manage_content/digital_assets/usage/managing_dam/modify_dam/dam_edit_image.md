# Edit image

Follow these steps to edit images using HCL Digital Experience 9.5 Digital Asset Management:

1. From the HCL Digital Experience 9.5 Digital Asset Management interface, hover over a media asset to access **Edit** options. Click the **Edit** (pencil) icon.

    ![Edit digital media asset](../../../../../images/dam_05_edit_media.png)

2. From the **Edit** page, several options are available to edit the image.

    ![Edit > Crop options](../../../../../images/dam_edit_crop_options.png)

3. Select and click any of the following **Edit** options:

    !!! note
        Some of the menu options are also available for video and document media assets.

    - **Add to Favorites** (the star located next to the image title and from the edit digital media asset selection) - Sorts and filters digital media assets from the HCL Digital Asset Management repository. For more information, see [Manage media asset collections](../manage_collections.md).
    - **Crop** - Extracts a region of the specified dimensions from the original image. You can crop the image using the resize handles (freeform) or by selecting a preset aspect ratio. Administrators can [configure aspect ratio via helm charts](../../../configuration/dam_crop_aspect_ratio.md).
    - **Rotate left**, **Rotate right** - Rotates the image 90° counter-clockwise (left) or 90° clockwise (right).

        !!! note
            When editing assets in DAM, there is some expected variation in image size.

    - **Replace** - Replaces the digital media asset file with a new image media file.

        !!! note
            You can only replace the image with a new image of a supported image filetype. No other assets (like document and video filetypes) have the **Replace** option at the moment.

    - **More** - Click to see additional actions available for the digital media asset.

        ![Edit > More options](../../../../../images/dam_edit_more_options.png)

        - **Copy link** - Copies the URL address of the digital media asset.
        - **Delete** - Deletes the selected digital media asset.
        - **Download** - Downloads a copy of the digital media asset, including versions and renditions. See [Generate Digital Asset Renditions](dam_generate_renditions_and_versions.md).

4. Click **Undo** or **Redo** to undo and/or redo any edits to an image prior to saving the image.
5. Click **Apply** to save your changes.
6. To save your changes, click either **Save** or **Save as new** to save changes as a new digital asset.
