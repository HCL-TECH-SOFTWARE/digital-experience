# Using HCL Enduser Search with Opensearch

Create and export reports on content items using HCL Enduser Search with Opensearch. Users can also update the reported content items in bulk.

# Generating a search results set

This section details how to generate a search results set in HCL Enduser Search with Opensearch.

## Prerequisites

- Beginning with HCL Digital Experience 9.5 release update CF224, Enduser Search with Opensearch is available to be enabled. For instructions on installing Enduser Search with Opensearch manually on supported environments, see the [Installing HCL Digital Experience 9.5 Enduser Search with Opensearch](../installation/index.md) topic.

- To acess the HCL Enduser Search UI, see the [Accessing HCL Digital Experience 9.5 Enduser Search with Opensearch](../access/index.md) topic.

## Generating a search results set

A search results set is a list of items that matches the search term that the enduser enters in the Search input box. It may be limited further when the enduser specifies the scope of the result (i.e. the data source to search) as well as the specific attribute to search (e.g. title, description, type, or tags).

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Search** from the Practitioner Studio navigator.

    ![](../../../assets/HCL_DX_95_Practitioner_Studio_interface.png "Log in to HCL Digital Experience 9.5 and Go to the Enduser Search UI")

2.  In the Enduser Search user interface, go to the **Search** input box and type a term you need to search e.g "blog".

    ![](../../../assets/HCL_Search_01_Input_Query.png "Input a search term in the Search input box")

3.  Click on the blue **Search** button to start the search.

    ![](../../../assets/HCL_Search_02_Button_Trigger.png "Click on the blue Search button")

4.  View the results list. Above the results, you can find a description of the total count of results found for the search term e.g. "32 results for **blog**".

    ![](../../../assets/HCL_Search_03_Results_Set_Initial.png "View the search results and note the count of results found")

5.  To limit the results set, click on the **Select a content source** field to open the dropdown options of content sources. Choose one option e.g. "MyWCM".

    ![](../../../assets/HCL_Search__04_Input_Scope.png "Click on Select a content source and choose one option")

6.  To further limit the results set, click on the **Select an attribute** field to open the dropdown options of attributes. Choose one option e.g. "title".

    ![](../../../assets/HCL_Search__05_Input_Type.png "Click on Select an attribute and choose one option")

7.  Click on the blue **Search** button to start another search.

    ![](../../../assets/HCL_Search_06_Button_Trigger.png "Click on Search button to start another search")

8.  View the new results list. Above the results, you can find a description of the total count of results found for the search term e.g. "8 results for **blog**".

    ![](../../../assets/HCL_Search_07_Results_Set_Filtered.png "View the filtered down search results and note the count of results found")

9.  Go back to the **Search** input box and type a new term you need to search e.g "interiors" and click the blue **Search** button again to start the search. View the new results list. Above the results, you can find a description of the total count of results found for the search term e.g. "3 results for **interiors**".

    ![](../../../assets/HCL_Search_08_Input_Query_Change.png "Change the search term in the Search input box")

10.  Click on the blue link title of one of the result items to open that item in a new tab.

    ![](../../../assets/HCL_Search_09_Open_Result_Item.png "Click on one of the result items to open it in a new tab")
    
### Other actions available

- When the search term yields no results, the following message will be displayed in the output area.
    
    ![](../../../../assets/HCL_Search_10_No_Results_Found.png)