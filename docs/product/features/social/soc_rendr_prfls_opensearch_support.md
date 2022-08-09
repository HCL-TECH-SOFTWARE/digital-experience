# OpenSearch support profile

The OpenSearch support profile provides access to information that is defined in the OpenSearch specification. The OpenSearch specification is commonly used in the Atom feed format.

Specifically, this profile supports list properties that are required to make paging possible. Paging becomes necessary if the backend service does not return all available data records in a single feed and provides links for retrieving the next page of data records.

The OpenSearch support profile declares the following attribute names:

-   **Total Number of Items totalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of Items requestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start Index startIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URLrawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URL rawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URLrawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URLrawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncatedisTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.


**Parent topic:**[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)

