# Generating a content report

This section details how to generate content report in HCL Content Reporting.

## Prerequisite

Content Reporting should be installed and configured in HCL Digital Experience 9.5 release update CF213 or higher. For instructions on installing Content Reporting on supported environments, see the [Install HCL Digital Experience 9.5 Content Reporting](../installation/index.md) topic. An Editor access is required to generate a query.

!!! note
    Configure a JCR text search to get valid search results. Refer to [Setting up a JCR search collection](../../../../build_sites/search/portal_search/administer_portal_search/setup_search_collections/jcr_search_collections/index.md) for more information.

## Generating a report

A report is a list of items that matches a set or combined sets of criteria. Content managers generate reports of content items that they are planning to analyze or update. They have a set of criteria that the content items have to match. In this feature, content managers can combine the required criteria into a single report to get the list of items that need updating.

1.  Log in to your HCL Digital Experience 9.5 platform and select **Web Content**, then select **Content Reporting** from the Practitioner Studio navigator.

    ![](../../../../assets/HCL_Content_Reporting_Landing_Page.png)

2.  Close the sidebar. On the **Search Criteria** section, select the appropriate criteria to generate a report of matching contents.
    ![](../../../../assets/HCL_Content_Reporting_Criteria_Dropdown.png)

    !!!note
        The dynamic fields of each criterion are displayed upon selection. You can generate a content report by any or all of these search criteria.

    In the **Criteria** dropdown, you can select any of the following:

    - **Expiry date**

        When you select the **Expiry date** criterion, two date input fields appear: **From** and **To**.

        ![](../../../../assets/HCL_Content_Reporting_Search_By_Expiry.png)

        Click the calender icon in the **From** or **To** field to display the calendar. Select the **From** date and the **To** date from calendar and click **Search**.
        
        ![](../../../../assets/HCL_Content_Reporting_Select_Date.png)

        !!!note
            Filling up both date fields is not mandatory and only one is needed to proceed. Entering only the **From** date searches items from that date onwards. Entering only the **To** date searches items on and before that date.
            
        !!!important "Invalid date range"
            Using an invalid date range (for example, from a future date to a past date) causes the generated report to be empty.

    - **Owner**

        Selecting the **Owner** criterion adds the **User** field, a typeahead input field where you can select the owners of the items you want included in your report. The list of matched users is displayed as auto-suggested options according to the input value as you type. Select the users from auto-suggested options. A checkmark appears to the left of the selected user to indicate that it has been selected. 
        
        ![](../../../../assets/HCL_Content_Reporting_Owner_Criteria.png)
    
    - **Author**

        Selecting the **Author** criterion adds the **User** field, a typeahead input field where you can select the authors of the items you want included in your report. The list of matched users is displayed as auto-suggested options according to the input value as you type. Select the users from auto-suggested options. A checkmark appears to the left of the selected user to indicate that it has been selected. 
        
        ![](../../../../assets/HCL_Content_Reporting_Author_Criteria.png)

    - **Item type**

        Selecting the **Item type** criterion adds the **Item** field, a multi-select dropdown input field where you can select the item type of the items you want included in your report. You can also type in the input field to get an auto-suggested list of matching item types.
        
        ![](../../../../assets/HCL_Content_Reporting_Item_Type_Criteria.png)

        Select one or more item types from the **Item** dropdown list.

        ![](../../../../assets/HCL_Content_Reporting_Item_Type_Select.png)
        
        !!!note
            In case you select both a grouped item type (for example, *All Authoring Templates*) and one or more of its sub-types (for example, *Content Template*), the system only fulfills the search for the sub-types. The most specific search criteria of the sub-type is recognized because searching for the grouped item type nullifies the specific search.

    - **Phrase**

        Selecting the **Phrase** criterion adds the **Phrase** field, a text input field where you can enter a phrase that would match the items you want included in your report. Enter a phrase (for example, *Sample Article*) in the **Phrase** field. Only one phrase can be searched per criteria line. 
        
        ![](../../../../assets/HCL_Content_Reporting_Phrase_Select.png)

    - **Word**

        Selecting the **Word** criterion adds the **Words** field, a multiple text input field where you can enter words that would match the items you want included in your report. Enter a few words (for example, *wps*, *test*) in the **Words** field. This searches for words within attributes such as titles, description, name, and keywords.
        
        !!!note
            Any of the words entered will be searched. All words entered do not have to be present in an item.
        
        ![](../../../../assets/HCL_Content_Reporting_Words_Select.png)

    !!!note
        After you select a criterion, it will not be available for selection again in the **Criteria** dropdown menu. 

3. After you have selected the search criteria, click **Search**.

    The system displays a set of search results that fit the selected criteria. The total number of results is shown at the top (for example, *15 results found*). The number of matching results helps the user make more informed query reformulations. The applied search criteria information is also displayed at the **Search Criteria** bar (for example, *Expiry date: To 07/13/2023;*).

    On the top right corner, the **View Criteria** opens the top drawer and displays the applied search criteria.

    ![](../../../../assets/HCL_Content_Reporting_Search_Results.png)
    
### Other actions available

- To add more criteria to your search, click **View Criteria**. Click the **Add** button to add another search criteria.
    
    ![](../../../../assets/HCL_Content_Reporting_Add_Criteria_Button_Dropdown.png)

- To remove already added search criteria, click the **Remove** button. Clicking the **Remove** button removes the criterion and makes it available in the **Criteria** dropdown menu again.
    
    ![](../../../../assets/HCL_Content_Reporting_Remove_Criteria.png)

- To remove multiple selected criteria, click the **Clear** button.
    
    ![](../../../../assets/HCL_Content_Reporting_Clear_Criteria_Options.png)
