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
