---
title: Inline Item Creation 
---
# Inline Item Creation with Authoring Tool Components

Inline item creation can be enabled for authoring tool components so that users can quickly create a new content item without having to access the authoring interface.

## How to enable inline item creation with an authoring tool component

To enabled inline item creation with an authoring tool component, you select **Enable inline item creation** under the **New action properties** section of the authoring tools component form.

When enabled, when a user clicks the new action tool on the rendered web page, a small dialog is displayed where a user enters the name of the new item. No other fields are displayed.

For inline item creation with an authoring tool component to work:

-   The authoring template must use a multiple stage workflow with the initial stage being a draft, or the authoring template has workflows disabled.
-   The location for the new item must have been predefined in either the authoring template, or the authoring tool component.
-   The portal page the authoring tool is displayed on must be in edit mode.

If any of these requirements are not met, the normal inline item creation dialog is displayed instead.

## How to use inline item creation with an authoring tool component

Inline item creation with an authoring tool component works best when:

-   The item created using the authoring tool has a valid page mapping so that the new item is automatically opened in the correct page.
-   The authoring template used to create the content item contains some default content and metadata. For example, the **Title** field might be pre-filled with the sentence "Add your title here".
-   The presentation template used by the new content item uses editable property and editable element tags so that the user can immediately update the new content item.
-   If using a workflow, you should select **Allow templated items to be saved in the first draft stage even if the item fails field validation** when creating the workflow. This will allow users to create draft items that do not meet all field validation requirements.
-   The new action properties section can use the tags `[Placeholder tag="titlelink"]`, `[Placeholder tag="namelink"]` or `<a href="javascript:;" onclick="[Placeholder tag="href"]">Create</a>` to create the link that opens the inline item creation dialog.

This ensures that the user is taken to an inline edit ready content item when they create a new item by using the inline authoring tool.


