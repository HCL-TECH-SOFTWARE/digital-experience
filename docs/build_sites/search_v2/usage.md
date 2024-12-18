# Using Search V2

Generate search results from different content sources (from WCM or Portal) using Search V2. This section details how to generate a set of search results in Search V2.

## Prerequisites

- Starting from HCL Digital Experience (DX) 9.5 CF224, you can enable Search V2. For instructions on how to manually install Search V2 on supported environments, refer to [Installing HCL Digital Experience 9.5 Search V2](./installation.md).

- For instructions on how to access the Search V2 UI, refer to [Accessing HCL DX 9.5 Search V2](./access.md).

## Generating a set of search results

A set of search results is generated based on the keywords or phrases you enter in the Search input field. You can get more specific results if you define the content source to search from and specify the attributes to search for, such as the title, description, type, or tags.

1.  Log in to your HCL DX 9.5 platform then select **Search** from the Practitioner Studio homepage.

    ![](../../assets/HCL_DX_95_Practitioner_Studio_interface.png "Log in to HCL Digital Experience 9.5 and Go to the Search V2 UI")

2.  In the Search V2 user interface, enter your search terms on the **Search** field, then click **Search**. In the example below, the term "blog" is searched.

    ![](../../assets/HCL_Search_02_Button_Trigger.png "Click on the blue Search button")

3.  View the search results generated. Above the list of results, you can see the total number of results found for the search term. In the example below, the term "blog" generated 32 search results.

    ![](../../assets/HCL_Search_03_Results_Set_Initial.png "View the search results and note the count of results found")

4.  Refine the search results further by selecting a content source and attribute, then click **Search** again.

    1. Click the **Select a content source** dropdown and select a content source, such as "MyWCM".

        ![](../../assets/HCL_Search_04_Input_Scope.png "Click on Select a content source and choose one option")

    2. Click the **Select an attribute** dropdown and select an attribute, such as "title".

        ![](../../assets/HCL_Search_05_Input_Type.png "Click on Select an attribute and choose one option")

5.  View the search results generated again. By selecting a content source and attribute, searching for the term "blog" generated eight, more specific search results.

    ![](../../assets/HCL_Search_07_Results_Set_Filtered.png "View the filtered down search results and note the count of results found")

6.  Click on a search result link.

    ![](../../assets/HCL_Search_08_Click_Result_Link.png "Click on one of the result items to open it in a new tab")

7.  View the opened item in a new tab.

    ![](../../assets/HCL_Search_09_Open_Result_Item.png "View the opened item in a new tab")

## Other search result scenarios

- If the search term yields no results, the following message is displayed.
    
    ![](../../assets/HCL_Search_10_No_Results_Found.png)

- If the search engine is down or unavailable, the following message is displayed.
    
    ![](../../assets/HCL_Search_11_Search_Engine_Unavailable.png)