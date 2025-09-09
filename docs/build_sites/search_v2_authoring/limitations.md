# Limitations of Search V2 Authoring

Take note of the following limitations when using Search V2 Authoring:

## Searchable Fields

- Advanced search filters are not currently supported.

## Basic Actions

- Currently, only Edit, Read, and Preview actions are available for search result items.

## Bulk Action

- Bulk actions are not currently supported.

## Localization

- The UI is only available in English.

## Accessibility

- To ensure full accessibility on the Search page, the user's browser-specific settings for keyboard navigation must be enabled.

    See the keyboard navigation setting for Firefox.
    ![](../../assets/HCL_Search_Browser_Safari_Settings.png){: style="height:600px"}

    See the keyboard navigation setting for Safari.

    ![](../../assets/HCL_Search_Browser_Firefox_Settings.png){: style="height:600px"}

## Delete

- When an item is deleted, it might still show up in search results as the Web Content Manager (WCM) does not instantly push deletion updates. The item will appear until the next [crawler run](../search/searching_local_portal/srccrwlindxsite.md) updates the search index.

- The Delete feature is disabled if the user is working on a project.

## Advance Search Filter

- When using **Attribute → Type** in search, the query must be spelled correctly and match the value exactly.