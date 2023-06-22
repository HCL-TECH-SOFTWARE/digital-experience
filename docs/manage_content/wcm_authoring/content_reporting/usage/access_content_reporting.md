# Access content reporting portlet
This section provides the steps on how to access the HCL Content Reporting portlet and use it to generate a report based on different criteria, export the report, and update the expiry date of the items in the report.

## Prerequisite

Content Reporting should be installed and configured in HCL Digital Experience 9.5 release update CF213 or higher. See instructions to install to supported container environments to the [Install HCL Digital Experience 9.5 Content Reporting](../installation/index.md) topic.

Content Reporting is accessible from the Practitioner Studio interface (after image configuration to your HCL Digital Experience 9.5 CF213 and higher deployment).

## Access Content Reporting

Follow the instructions below to access HCL Digital Experience 9.5 Content Reporting from the Practitioner Studio.

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Web Content** from the Practitioner Studio navigator.

    ![](../../../../assets/HCL_DX_95_Practitioner_Studio_interface.png "Log in to HCL Digital Experience 9.5")

2.  Select **Content Reporting** from the **Web Content** menu to access the HCL Digital Experience 9.5 Content Reporting user interface.

    ![](../../../../assets/HCL_Content_Reporting_Landing_Page.png "HCL Content Composer Dashboard")

## The HCL Content Reporting UI

The HCL Content Reporting UI has the following components:

![](../../../../assets/HCL_Content_Reporting_Full_View.png)

-   **Main header** - This contains the HCL Content Reporting **Update button** to update the expiry date of the reported items, **Export button** to export the search results into a CSV file, Link for pending update actions **Updates** and the total number of results found.
-   **Search Criteria** - **Search Criteria** - This section contains information on all the criteria used to search for items to populate the report.
-   **Report table** - This table contains the reported items in table format. The table is sorted by the items' *Title* and then by the date they were *Last Modified*.
-   **View Criteria** - Click on **View Criteria** to open the top drawer and display the criteria used for populating the report. The criteria can be set there and the generation of the report can be run from there as well.

    ![](../../../../assets/HCL_Content_Reporting_Criteria_Options.png)

-   **Criteria** - There are 5 criteria that can be used in different combinations as the basis to generate a report.
e.g. The respective dynamic fields of each criterion will be displayed upon selection. A report can be generated based on any or all of these criteria. which includes:

    -   **Expiry date** - Through this criterion, the report can be scoped to include items based on their assigned expiry date. The expiry date has two date fields namely, **From date** and **To date**. The generated report will only include items that have an expiry date that is within the dates entered in the input fields. The date range is interpreted to be open ended when one of the input fields are left open.

    !!! warning "Invalid date range"
        Using an invalid date range (e.g. from a future date to a past date) will cause the generated report to be empty.

    -   **Owner** - Through this criterion, the report can be scoped to include items based on their owners. Multiple users can be set in this criterion and the generated report will include an item if any of those users is its owner or one of its owners.

    !!! info "User suggestions"
        Typing in the input field will suggest users whose distinguished name (cn) matches the input. Only the suggested users are considered valid inputs. At least one of the suggested users must be selected to finish setting up the criteria.

    -   **Author** - Through this criterion, the report can be scoped to include items based on their authors. Multiple users can be set in this criterion and the generated report will include an item if any of those users is its author or one of its authors.

    !!! info "User suggestions"
        Typing in the input field will suggest users whose distinguished name (cn) matches the input. Only the suggested users are considered valid inputs. At least one of the suggested users must be selected to finish setting up the criteria.

    -   **Item type** - Through this criterion, the report can be scoped to include items based on their included types.

    !!! info "User suggestions"
        In case of user input of both a grouped type (e.g. All Authoring Templates) and one or more of its sub types (e.g. Content Template), the system should only fulfill the search of the sub-types. In other words, the most specific search criteria of the sub-type will be searched for since searching for the grouped item type will nullify the specific search.

    -   **Phrase** - Through this criterion, the report can be scoped to include items based on their included phrase. Only one phrase can be searched per criteria line.

    -   **Word** - Through this criterion, the report can be scoped to include items based on their inclusion of words within attributes such as titles, description, name, and keywords.

  -  **Add Criteria** - Adding another criteria line by clicking +Add button. Only one instance of each option can be added at a time.

  -  **Action buttons** - Proceed with the search by clicking the Search button. Clear fields by clicking the Clear button. Close search criteria drawer by clicking cancel button.


