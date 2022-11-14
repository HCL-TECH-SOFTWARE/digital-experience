---
id: wcm_dev_using_search
title: Searching for items
---




Large websites contain large numbers of items. You can search for items by using the search feature.

1.  To run a basic search:

    1.  Select an attribute to search for. You can choose to search an item's description or title, or select **All Attributes** to search both of these attributes. You can also search for the UUID of an item by using the ID attribute.

    2.  Enter some text to search for:

        -   The wildcard \* character can be used to search for similar words. For example, \*raft, dr\*ft, or draf\*. Only a single wildcard can be used in a search query. It can also be used on its own to specify that the search is for all items in the selected search form.
        -   You can explicitly search for phrases by enclosing keywords in double quotation marks \( " \). If you are searching a double-byte character set language that you must enter at least 2 characters.
        -   The use of an underscore \( \_ \) character functions in the same manner as the space \( \) character. For example: `_my_content` displays results that contain the word "my" or "content".
        -   Common words \(often called "stopwords"\), such as "the," "and," or "of," are typically not included in search indexes. If you named an item "the home page", and then searched for "the", your search may return no results. To search for stopwords, enclose the word or phrase in double quotation marks. For example, "the".
    3.  Click **Search**.

    **Note:** A basic search searches only for items in the current view:

    -   If you select a view, only items that are related to that view are shown in the search results for the basic search. For example:
        -   If the "My items" view is selected, only items that are created by the current user are searched for.
        -   If the "Content" view is selected, only site areas and content are searched for.
        -   If the "Categories" view is selected, only taxonomies and categories are searched for.
        -   If the "Components" view is selected, only components are searched for.
        -   If the "Authoring Templates" view is selected, authoring templates are searched for.
        -   If the "Presentation Templates" view is selected, presentation templates are searched for.
        -   If the "Workflow Items" view is selected, only workflows, workflow stages, and workflow actions are searched for.
        -   If the "All Items" view is selected, all items are searched for.
    -   If you open a sublevel view, only items that are displayed within this view are shown in the search results for the basic search. For example:
        -   If the "Components \> Image Components" view is selected, only image components are searched for.
        -   If the "Workflow Items \> Workflows" view is selected, only workflows are searched for.
        -   If the "All Items \> Items by Workflow" view is selected, only items that are workflowed are searched for.
    -   When you search within the first level of "My Items" or "All Items", only published and expired content is displayed in search results. To search for draft or deleted items that you need to open the "draft" or "deleted" views first.
    -   If you would like to search for items in all views, select the 'All items' view, or use the advanced search.
2.  To run an advanced search:

    1.  Click **Advanced Search**.

    2.  To search for items within a specific index, select **Selected path** in the **Search in** list and then click **Select Path** to specify the path.

    3.  To search for items in all libraries, select **All libraries** in the **Search in** list. To search for items within a specific library, select **Selected Library** in the **Search in** list and then select a library.

    4.  Select the item types to search for.

    5.  Select to search either published, expired, draft, items that are pending approval, or deleted items.

    6.  Select an attribute to search for. You can choose to search an item's description, title, or keywords, or select **All Attributes** to search all of these attributes.

    7.  Select to either search for all words, any words, an exact phrase, or none.

    8.  Enter some text to search for:

        -   The wildcard \* character can be used to search for similar words. For example, \*raft, dr\*ft, or draf\*. Only a single wildcard can be used in a search query. It can also be used on its own to specify that the search is for all items in the selected search form.
        -   You can explicitly search for phrases by enclosing keywords in double quotation marks \( " \). If you are searching a double-byte character set language that you must enter at least 2 characters.
        -   The use of an underscore \( \_ \) character functions in the same manner as the space \( \) character. For example: `_my_content` displays results that contain the word "my" or "content".
        -   Common words \(often called "stopwords"\), such as "the," "and," or "of," are typically not included in search indexes. If you named an item "the home page", and then searched for "the", your search may return no results. To search for stopwords, enclose the word or phrase in double quotation marks. For example, "the".
        -   Punctuation in each attribute is ignored during search. For example, searching for "apples bananas" would find the attribute "apples, bananas".
        -   Keywords are treated as a single comma-separated attribute, so multiple keywords on an item are merged and considered as a single phrase during search.
    9.  Click **Add an entry** to add further search queries.

    10. Select options to filter the search with as required. You can filter search results based on:

        -   Click **Add an entry** to add a filter option. You can filter a search by:
            -   The authors and owners of items that are returned in a search result. If you search for a user, only items where the user is explicitly set as the owner or author are searched for. If you search for a group, only items where the group is explicitly set as the owner or author are searched for.
            -   When an item was created, published, expired, or last modified.
            -   The authoring template, category, workflow, or workflow stage that is used by items that are returned in a search result.
        -   Click **Add an entry** to add further filter options.
    11. Click **Search**.


**Search indexes:**

Search indexes are updated periodically. Newly created or updated items are not found in the search results until the search index is updated.

**Searching for pages in the Portal Site library:**

Searching for pages in the Portal Site library is not supported. For a possible work-around, [see this answer](https://hclpnpsupport.hcltech.com/csm?id=kb_category&kb_category=c0ef98b71bb0778083cb86e9cd4bcbf2).

