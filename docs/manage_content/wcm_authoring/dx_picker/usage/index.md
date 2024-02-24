# Using DX Picker

This section details the basic usage of the HCL DX Picker.

## Prerequisite

DX Picker must be installed and configured in HCL Digital Experience 9.5 release update CF214 or higher. For instructions on installing DX Picker on supported environments, see the [DX Picker Installation](../installation/index.md) topic.

## Using DX Picker

When you open DX Picker, a list of collections from the Digital Asset Management is displayed.

  ![](../../../../assets/HCL_DX_Picker_Initial_View.png)

The details shown are the following:

- **Name** - Name of the collection.
- **Count** - How many items are inside a particular collection.
- **Description** - Text describing the collection.
- **Last modified date** - Date when the collection was last updated.

### Navigating collections

Clicking on a collection row directs the user inside that collection. The list of items inside a collection is shown.

  ![](../../../../assets/HCL_DX_Picker_Collection_View.png)

The following additional details are shown when inside a collection:

- **File Size** - Size of an asset.
- **Type** - Type of item shown.
- **Keywords** - Keywords associated with an asset.
 
### Selecting an asset

Clicking on an asset row enables the select button on the lower right corner of the screen. The **Select** button allows users to select a particular asset.

  ![](../../../../assets/HCL_DX_Picker_Select_Asset.png)

Selecting an asset triggers the following event:

    HCL-DX-PICKER-SELECT

### Display Properties

Clicking on the wrench icon next to the name of a collection/asset or in the breadcrumbs displays the Properties Panel of that item.

For the Collection:

  ![](../../../../assets/HCL_DX_Picker_Collection_Properties.png)

For the Asset:

  ![](../../../../assets/HCL_DX_Picker_Asset_Properties.png)

### Previewing an asset

To open the image in Preview mode, click the eye icon next to the asset name.

!!! note
    You can also access the Preview mode using the Properties panel.

  ![](../../../../assets/HCL_DX_Picker_Asset_Preview_Button.png)

The following actions can be done when in Preview mode:

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

4. Navigate between assets.

    To navigate other assets inside a collection, click the previous and next buttons.  

5. Zoom in and out of an image.

    To inspect the image, click the zoom in and zoom out buttons. 
