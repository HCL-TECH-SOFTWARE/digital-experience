# Search V2 Authoring Limitations

Review these limitations before you use Search V2 Authoring.

## Content and indexing

- Search V2 Authoring supports **JCR content only**.  
- Content stored in the **Digital Asset Management (DAM)** repository is not supported.

## Basic actions

You can perform only the following actions on search result items:

- **Edit**  
- **Read**  
- **Preview**

## Bulk actions

- Bulk actions are not supported.

## Localization

- The user interface is available in **English only**.

## Accessibility

To ensure full accessibility on the Search page, users must enable keyboard navigation settings in their browser.

### Firefox

![Firefox keyboard navigation settings](../../assets/HCL_Search_Browser_Firefox_Settings.png)

### Safari

![Safari keyboard navigation settings](../../assets/HCL_Search_Browser_Safari_Settings.png)

## Deletion

!!! note "Important"
    Web Content Manager (WCM) does not instantly push deletion updates.

- Deleted items might appear in search results until the next [crawler run](../search/searching_local_portal/srccrwlindxsite.md) updates the search index.  
- The **Delete** feature is disabled while you are working on a project.

## Advanced search filters

- When filtering results by **Author**, enter at least three characters to start searching for users or groups.  
- Search is **not case-sensitive**, but it is sensitive to spelling errors.

![Advanced search filter interface](../../assets/HCL_SearchV2_Authoring_Advance_Search_Site_Area_Template.png)