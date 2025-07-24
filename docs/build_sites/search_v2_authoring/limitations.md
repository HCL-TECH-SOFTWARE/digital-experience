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

- After deletion, the item may still appear in the search results because WCM does not support push functionality for deletions. The deleted item will be displayed as a disabled row until the next crawler run updates the index.