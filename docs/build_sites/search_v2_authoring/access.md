# Accessing Search V2 Authoring

This section provides steps on how to access the Search V2 Authoring page and portlet.

## Prerequisite

Starting from HCL Digital Experience (DX) 9.5 CF227, you can enable Search V2 Authoring. For instructions on how to install Search V2 Authoring manually on supported environments, refer to [Installing Search V2 Authoring](./installation.md).

After configuring the image in your HCL DX 9.5 CF227 deployment, you can access Search V2 Authoring from the Practitioner Studio interface.

!!! note
    You must be authenticated to access the SearchV2 Authoring page. The search results displayed will depend on your assigned user role.

## Accessing Search V2 Authoring from Practitioner Studio

Refer to the following steps to access Search V2 Authoring from the Practitioner Studio. 

1. Log in to your HCL DX 9.5 platform then select **Web Content** from the side navigation panel. Alternatively, you can click the **Web Content** card from the Practitioner Studio homepage.

    ![](../../assets/HCL_SearchV2_Authoring_Access_01.png "Log in to HCL Digital Experience 9.5")

2. In side navigation panel, select **Authoring**.

    ![](../../assets/HCL_SearchV2_Authoring_Access_02.png "Open side navigation and select Authoring")

3. Click **Search** on the upper-right corner of the Authoring page. This will open the Search V2 Authoring dialog.

    ![](../../assets/HCL_SearchV2_Authoring_Initial_State.png "See the Search V2 Authoring initial state")

## The Search V2 Authoring UI

The Search V2 Authoring UI has the following components:

![](../../assets/HCL_Search_General_Components.png)

- **Search Header** - This section includes the page title and a button to open the search dialog.
- **Search Field** - This section includes an input field for entering your query.
- **Search Data Grid** - This section displays the search results in a table with columns headers for Title, Name, Status, Authors, Last modified, and Location. Hovering over a column header reveals a sort icon, allowing you to sort the results in ascending or descending order. Each row includes an edit icon to open the item in Edit mode and a three-dot icon to reveal additional options such as Read mode or Preview mode.
- **Pagination** - This section displays the current number of rows per page and the total number of pages for the search results. You can adjust the number of rows displayed per page or navigate to the next, previous, first, or last page.
