# Usage of HCL DX Picker

This section details the basic usage of the HCL DX Picker.

## Using DX Picker

!!! note
    You must have at least **User** access to use DX Picker. You also need to have access to the content source to display the items from the content source unless it has anonymous access. Refer to [Working with resource permissions](../../../../deployment/manage/security/people/authorization/controlling_access/working_with_resource_permission/index.md) for more information.

The content sources available for DX Picker are the following:

- **DAM**
- **WCM**
- **JCR**

When you open DX Picker with a default `content source`, the list of root collections from the Digital Asset Management is displayed.

  ![](../../../../assets/HCL_DX_Picker_DAM_Initial_View.png)

When you open DX Picker with a different `content source type`, the list of objects from the content source are displayed.

  ![](../../../../assets/HCL_DX_Picker_Configure_Source_Initial_View.png)

The details shown are the following:

- **Title** - Name of the object.
- **Description** - Text describing the object.
- **Type** - Type of object shown.
- **Tags** - Tags or Keywords associated with the object.
- **Last modified date** - Date when the object was last updated.
 
### Selecting an item

Clicking on an item row enables the select button on the lower right corner of the screen. The **Select** button allows users to select a particular item.

!!! note
    Any items from the content source can be selected.

  ![](../../../../assets/HCL_DX_Picker_Select_Asset.png)

Selecting an item triggers the following event:

    HCL-DX-PICKER-SELECT

#### Navigating collections

Clicking on a collection row directs the user inside that collection. The list of items inside a collection is shown.
!!! note
    Navigation is only possible with non-empty **DAM Collections**.

  ![](../../../../assets/HCL_DX_Picker_Collection_View.png)

### Using Search

To search for an item, type a keyword in the search textbox and click the search button or press `Enter`. Only fields such as **title**, **description**, **type**, **tags** (keywords are from DAM), **userid** (creator/owner) and **text** (extracted from content/wcm items) may be specifically searched for now.

!!! note
    Navigation with **DAM Collections** and Selecting **item** is possible in the search results.

  ![](../../../../assets/HCL_DX_Picker_Search_Result.png)

### Previewing an item

To open an item in Preview mode, hover on the row and click the eye icon beside the item title.

!!! note
    Only DAM supported images and video files are available for Preview.

  ![](../../../../assets/HCL_DX_Picker_Asset_Preview_Button.png)

The following actions can be done when in Preview mode:

  ![](../../../../assets/HCL_DX_Picker_Asset_Preview_Component.png)

1. View image renditions.

    To choose the rendition of the image you want to view, click the dropown menu and select the specific rendition.

    
    For more information on renditions, refer to [Renditions](../../renditions/index.md).

2. Download the item.

    To download the previewed item, click the download icon.

    !!!note
        For images with renditions only the selected one will be downloaded.

3. Select an item. 

    To select an item, click the **Select** button. 

    !!! note
        Changing the rendition will change the `selectedRendition` inside the `_source` property refer to [Picker Events](../access/index.md#picker-events).

    Selecting an item from Preview triggers the following event:

        HCL-DX-PICKER-PREVIEW-SELECT

4. Navigate between item.

    To navigate to the other supported file formats inside the collection, click the previous and next buttons.  

5. Zoom controls.

    !!! note
        This functionality is only available for images.

    To inspect the image, click the zoom in and zoom out buttons. 
