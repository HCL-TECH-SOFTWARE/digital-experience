# The Authoring tools element 

The authoring tool element is used to add authoring portlet functions to web pages.

You can add the following authoring portlet functions to a web page:

-   Create a content item.
-   Perform inline editing of a content item that is displayed in a web page.
-   Delete the content item that is displayed in a web page.
-   Approve or reject the current content that is being previewed. These options are visible to approvers only when they preview a draft item, or by opening the URL sent by an email action during a workflow.

Authoring tools can be referenced within presentation templates, menu element designs, and navigator element designs. When added to menus and navigators, the edit, delete, and approve functions are applied to each item displayed in a menu or navigator.

## Creating an authoring tool element

You can use an authoring tool element only by creating an authoring tool component. You cannot add an authoring tool element to authoring templates, site areas, or content items.

## How to use an authoring tool

When content is previewed, users with access to an authoring tool are able to run various authoring portlet functions.

**Note:** When content items that use a presentation template that includes an authoring tool are previewed, some functions are active and ready to use while other functions might not work as normal.

The authoring tool is also visible on the published site.

## How to use an authoring tool on multiple servers

When an authoring tool is used on more than one server, you use two-way syndication to keep each server synchronized. This can lead to the occasional "save" conflict where an item updated on one server is overwritten with changes to the same item on another server when syndication occurs.

## User access to an authoring tool

The authoring tools available to users on a web page are determined by:

-   Whether a user has access to the authoring tool component.
-   Which tools are enabled in the authoring tool element.
-   The user's level of access to the content item displayed in a web page.
-   Whether a user has access to the authoring portlet. Users are assigned at least contributor access to each web content library in a site to ensure that they have access to the authoring portlet.

-   You grant "editor" access or higher to users who need to edit the authoring tool.
-   You grant "user" access to users who also have access to the authoring server and who are using the authoring tool.
-   In most cases, users who have access to the published site would not be granted access to an authoring tool as the tool is used as an authoring tool on an authoring server, not a published site.

**Parent topic:**[Creating an authoring tools element ](../panel_help/wcm_dev_elements_authoring-tools_using.md)

