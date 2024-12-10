# Using HCL End-user Search with OpenSearch

Generate search results from different content sources (from WCM or Portal) using HCL End-user Search with OpenSearch. This section details how to generate a set of search results in HCL End-user Search with OpenSearch.

## Prerequisites

- Starting from HCL Digital Experience (DX) 9.5 CF224, you can enable End-user Search with OpenSearch. For instructions on how to manually install End-user Search with OpenSearch on supported environments, refer to [Installing HCL Digital Experience 9.5 End-user Search with OpenSearch](../installation/index.md).

- For instructions on how to access the HCL End-user Search UI, refer to [Accessing HCL DX 9.5 End-user Search with OpenSearch](../access/index.md).

## Generating a set of search results

A set of search results set is generated to match the search terms that you enter in the Search input field. You can get more specific results if you define the content source to search from and specify the attributes to search for, such as the title, description, type, or tags.

1.  Log in to your HCL DX 9.5 platform then select **Search** from the Practitioner Studio navigator.

    ![](../../../assets/HCL_DX_95_Practitioner_Studio_interface.png "Log in to HCL Digital Experience 9.5 and Go to the End-user Search UI")

2.  In the End-user Search user interface, enter your search terms on the **Search** field, then click **Search**. In the example below, the term "blog" is searched.

    ![](../../../assets/HCL_Search_02_Button_Trigger.png "Click on the blue Search button")

3.  View the search results generated. Above the list of results, you can see the total number of results found for the search term. In the example below, the term "blog" generated 32 search results.

    ![](../../../assets/HCL_Search_03_Results_Set_Initial.png "View the search results and note the count of results found")

4.  Specify the search results further by selecting a content source and attribute, then click **Search** again.
    1. Click the **Select a content source** dropdown and select a content source, such as "MyWCM".
    2. Click the **Select an attribute** dropdown and select an attribute, such as "title".

5.  View the search results generated again. By selecting a content source and attribute, searching for the term "blog" generated eight, more specific search results.

    ![](../../../assets/HCL_Search_07_Results_Set_Filtered.png "View the filtered down search results and note the count of results found")

9.  Go back to the **Search** input box and type a new search term you need to search e.g "interiors" and click the blue **Search** button again to start the search. View the new results list. Above the results, you can find a description of the total count of results found for the search term e.g. "3 results for **interiors**"

    ![](../../../assets/HCL_Search_08_Input_Query_Change.png "Change the search term in the Search input box")

6.  Click a search result link to open that item in a new tab.

    ![](../../../assets/HCL_Search_09_Open_Result_Item.png "Click on one of the result items to open it in a new tab")

## Other search result scenarios

- If the search term yields no results, the following message is displayed.
    
    ![](../../../assets/HCL_Search_10_No_Results_Found.png)

- If the search engine is down or unavailable, the following message is displayed.
    
    ![](../../../assets/HCL_Search_11_Search_Engine_Unavailable.png)