# Usage of HCL DX Picker

This section details the basic usage of the HCL DX Picker.

## Using DX Picker

!!! note
    You must have at least **User** access to use DX Picker. You also need to have access to the content source to display the items from the content source unless it has anonymous access. Refer to [Working with resource permissions](../../../../deployment/manage/security/people/authorization/controlling_access/working_with_resource_permission/index.md) for more information.

The content sources available for DX Picker are the following:

- **DAM**
- **WCM**
- **JCR**
- **People**
- **Portal**

When you open DX Picker with a default `content source`, the list of collections from the Digital Asset Management is displayed.

  ![](../../../../assets/HCL_DX_Picker_DAM_Initial_View.png)

When you open DX Picker with a different `content source type`, the list of objects from the content source are displayed.

  ![](../../../../assets/HCL_DX_Picker_Configure_Source_Initial_View.png)

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

!!! note
    Any items from the content source can be selected.

  ![](../../../../assets/HCL_DX_Picker_Select_Asset.png)

Selecting an item triggers the following event:

    HCL-DX-PICKER-SELECT

### Previewing an asset

To open the image in Preview mode, click the eye icon next to the asset name.

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

    !!! note
        Changing the rendition will change the `selectedRendition`.

    Selecting an asset from Preview triggers the following event:

        HCL-DX-PICKER-PREVIEW-SELECT

4. Navigate between assets.

    To navigate other assets inside a collection, click the previous and next buttons.  

5. Zoom in and out of an image.

    To inspect the image, click the zoom in and zoom out buttons. 

### Using Search

To search an object, type in the search input and click the search button or press `Enter`. Only common fields such as **title**, **description**, **type**, **tags** (keywords are from DAM), **userid** (creator/owner) and **text** (extracted from content/wcm items) may be specifically searched for now.

!!! note
    Navigation with **DAM Collections** and Selecting **Object** is possible in the search results.

  ![](../../../../assets/HCL_DX_Picker_Search_Result.png)
