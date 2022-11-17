# Manage collections

Learn more about creating, configuring, and deleting media asset collections using Digital Asset Management \(DAM\).

## Prerequisite

HCL DAM should be installed and configured to HCL Digital Experience 9.5 Container Release Update CF181 and higher. See the [Install the HCL Digital Experience 9.5 Container components](../../installation/install_config_dam.md) topic for instructions.

## Browse and search media assets in a collection

Follow these steps to work with Collections in HCL Digital Experience 9.5 DAM.

1.  From the HCL Digital Experience 9.5 DAM user interface, click **Collections**. The HCL DAM user user interface allows you to see previews of media assets for a specified collection. For example, a curated set of media assets are grouped in a collection named **Furniture Gallery** as shown below.

    ![Digital Asset Management user interface](../../../../images/dam_upload_media_collections.png)

    Following options are displayed in Collections interface:

    -   **Create Collection** - Create a new collection or a new nested collection \(when used inside an existing collection\)
    -   **View information** - Opens the Information panel and shows Access Control

        ![Information Panel](../../../../images/dam_collections_interface_view_information.png)

        -   **Information** - Allows you to update the Collection name and description.
        -   **Access Control** - Allows you to set who can access the media assets in the Collection.

    -   **Delete Collection** - Deletes the selected Collection.

2.  Select the **Filter** option to filter media asset results by **Favorites**, **Asset types**, or **Asset size**.

    -   **Favorites** - Filters media assets added to your favorites.
    -   **Asset types** - Filters media assets by type. You can further refine search results by selecting a specific file type.
    -   **Asset size** - Filters media assets by size.
    ![Filter options](../../../../images/dam_filter_by_asset_types_asset_size.png)

    !!! note 
        Asset size filter is available in HCL DX CF192 and later.

3.  On the top right, click the **Grid** or **List** icon \(**Open view options**\) to change how the media assets or collections are displayed:

    ![Open view options](../../../../images/dam_collections_open_view_as.png)

    -   **View as** - Lists options to view media assets or collections.
        -   **Grid** - Shows media assets in an equal-sized thumbnail view. This is the default display view.
        -   **List**- Shows media assets in a standard list. Use this view to access a media asset when you can recognize the asset by its attributes, such as its file name.
    -   **Sort by** - Lists options to sort media assets or collections:
        -   **Date**
        -   **Name**
        -   **Type**
        -   **Size**
    -   **Order** - Lists options to sort order of media assets or collections depending on the selected **Sort by** option:
        -   **Date**

            ![Date > Newer to older](../../../../images/dam_grid_date_newer_to_older.png)

            -   Order by file name by **Older to newer** date
            -   Order by file name by **Newer to older** date

        -   **Name**

            ![Name > Z to A](../../../../images/dam_grid_name_z_to_a.png)

            -   Order by file name from **A-Z**
            -   Order by file name **Z-A**

        -   **Type**

            ![Type > Descending](../../../../images/dam_grid_type_descending.png)

            -   **Ascending**
            -   **Descending**
            
        -   **Size**

            ![Size > Larger to smaller](../../../../images/dam_grid_size_larger_to_smaller.png)

            -   **Smaller to larger**
            -   **Larger to smaller**

## Modify information metadata of a media asset collection

1.  From the HCL Digital Experience 9.5 DAM user interface, hover over a collection and click the **Information** icon \(small i\).

    ![DAM Collection Information](../../../../images/dam_collection_information.png)

2.  On the **Information** panel, edit the **Collection name** and **Description** as applicable.
3.  Click **Save** to save changes.

## Manage user access permissions of a media asset collection

**Video**: [Configuring user access permissions to Digital Asset Management assets](https://youtu.be/vNJFcQViNVo)

1.  From the HCL Digital Experience 9.5 Digital Asset Management interface, hover over a collection and click **Information** \(small i\).
2.  Click **Access**.
3.  Assign levels for other users to access media items stored within the collection by clicking **Add user**.

    ![Access Control > Add user](../../../../images/dam_access_panel.png)

4.  When you click **Add User**, a pop-up displays options to add these user access levels for individuals and groups as defined by the user directory integrated to your Digital Experience platform. Select the appropriate member. In this example, click **Administrator**.

    ![Access Control > Assign members](../../../../images/dam_access_control_assign_members.png)

5.  Select the appropriate **Access rights**. For this example, click **All authenticated DX users**.

    ![Assign access rights > All](../../../../images/dam_access_control_assign_member_access_rights_all.png)

6.  Click **Add users and groups** to save changes.
7.  Once added, you can specify additional users for the selected access right. Select the access right to add a member or groups. For this example, click **Add Administrator**.

    ![Add Administrator](../../../../images/dam_access_control_assign_member_access_rights_add_administrator.png)

    ![Assign access rights > Select](../../../../images/dam_access_control_assign_member_access_rights_select.png)

8.  Once done, click **Add users and groups** to save changes.

## Delete a collection

1.  From the HCL Digital Experience 9.5 Digital Asset Management interface, hover over a collection and click **Delete**.
2.  A pop-up message displays to confirm your action. Once a collection is deleted, you can no longer retrieve it, including the media assets, renditions, and versions you have used as your web content.
3.  Click **Delete** to proceed with deleting the collection.

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).


