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

- When an item is deleted, it might still show up in search results. This is because WCM doesn't instantly push deletion updates. The item will appear until the next [crawler](https://help.hcl-software.com/digital-experience/9.5/latest/build_sites/search/searching_local_portal/srccrwlindxsite/) run updates the search index.

- Delete feature will be disabled if the user is working in a project context.
