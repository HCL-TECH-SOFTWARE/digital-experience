# Usage of HCL DX Picker

This section details the basic usage of the HCL DX Picker.

## Using DX Picker

When you open DX Picker with a default `content source`, the list of collections from the Digital Asset Management is displayed.

  ![](../../../../assets/HCL_DX_Picker_DAM_Initial_View.png)

When you open DX Picker with a multiple `content source`, the list of objects from the content sources are displayed.

  ![](../../../../assets/HCL_DX_Picker_All_Sources_Initial_View.png)

The details shown are the following:

- **Title** - Name of the object.
- **Description** - Text describing the object.
- **Type** - Type of object shown.
- **Tags** - Tags or Keywords associated with the object.
- **Last modified date** - Date when the object was last updated.

### Navigating collections

Clicking on a collection row directs the user inside that collection. The list of items inside a collection is shown.
!!! note
    Navigation is only possible with **DAM Collections**.

  ![](../../../../assets/HCL_DX_Picker_Collection_View.png)
 
### Selecting an asset

Clicking on an asset row enables the select button on the lower right corner of the screen. The **Select** button allows users to select a particular asset.
<!-- change picture here -->

  ![](../../../../assets/HCL_DX_Picker_Select_Asset.png)

Selecting an asset triggers the following event:

    HCL-DX-PICKER-SELECT

### Previewing an asset

To open the image in Preview mode, click the eye icon next to the asset name.

  ![](../../../../assets/HCL_DX_Picker_Asset_Preview_Button.png)

The following actions can be done when in Preview mode:
<!-- change picture here -->

  ![](../../../../assets/HCL_DX_Picker_Asset_Preview_Component.png)

1. View image renditions.

    To choose the rendition of the image you want to view, click the dropown menu and select the specific rendition.

    
    For more information on renditions, refer to [Renditions](../../renditions/index.md).

2. Download an image.

    To download the previewed image, click the download icon.

    !!!note
        Only the source image is downloaded. Renditions are not included when downloading images.

3. Select an image. 

    To select an asset, click the **Select** button. 

    Selecting an asset from Preview triggers the following event:

    HCL-DX-PICKER-PREVIEW-SELECT

4. Navigate between assets.

    To navigate other assets inside a collection, click the previous and next buttons.  

5. Zoom in and out of an image.

    To inspect the image, click the zoom in and zoom out buttons. 
