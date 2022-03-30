# How to use remote actions

Remote actions are used to trigger actions from the HCL Web Content Manager application.

You can reference remote actions by using plug-in tags by using the following format:

```
[plugin:RemoteAction action=" " docid=" " 
dialog=" " dialogSize=" " dialogTitle=" " useCurrentContext=" " showInfoMsg=" " ]
```

-   **`action`**

    This is the remote action to perform.

-   **`docid`**

    This is the document ID of the item to run the remote action against.

-   **`useCurrentContext`**

    If set to true, then the document ID is obtained from the rendering context instead of the docid attribute.

-   **`dialog`**

    If set to true, when rendered within a Web Content Viewer portlet, the remote action is rendered as a URL that redirects the user to a hidden portal page that is used by the Web Content Viewer portlet for inline editing.

-   **`dialogSize`**

    This optional setting defines the size of the dialog executing the remote action. The value must be in the format "width,height". For example, `dialogSize="200,300"` for a dialog of width 200 pixel and a height of 300 pixel. If omitted, the dialog size is calculated from the content that is displayed in the dialog. This setting is only used if dialog="true".

-   **`dialogTitle`**

    This optional setting sets the title of the dialog executing the remote action. If omitted, the action name is used instead. This setting is only used if dialog="true".

-   **`showInfoMsg`**

    Set this to true to display success status and other information messages after the remote action has finished. If omitted, this parameter is set to false and only warning and error status messages are displayed. This setting can only be used if dialog="true".


Remote actions can also be appended to the URL of an authoring portlet. For example:

```
http://[host]/wps/myportal/wcmAuthoring?wcmAuthoringAction=action
```

You can also append remote actions to the URL of a local web Content Viewer portlet. This can be useful in sites that feature inline editing of content items.

**Custom authoring interfaces:** Remote actions are not intended to be used to create a custom authoring interface. There are limitations to the functions delivered using remote actions. For example, remote actions only support plain text. You cannot use remote actions to add markup into elements such as HTML elements. You instead use the Web Content Manager API to create custom authoring interfaces.

**Note:** Each web content item can be identified by a DocumentId. The "docid" can be retrieved by using the web content API. In the following examples, the value of the "docid" parameter should be the DocumentId as retrieved by using the `DocumentID.getID()` API method. A document ID consists of a document type and a unique ID. The "docid" values that are provided in the examples are placeholders for real document IDs. For example, `com.ibm.workplace.wcm.api.WCM_Content/ID1`

## Remote action types

-   **`new`**

    This is used to open a new item form. You must also specify a "type" parameter.

    For example:

    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" ]`
    The following type parameters can be used:

    -   `com.ibm.workplace.wcm.api.WCM_AuthoringTemplate`
    -   `com.ibm.workplace.wcm.api.WCM_Category`
    -   `com.ibm.workplace.wcm.api.WCM_Content`
    -   `com.ibm.workplace.wcm.api.WCM_DateComponent`
    -   `com.ibm.workplace.wcm.api.WCM_FileComponent`
    -   `com.ibm.workplace.wcm.api.WCM_HTMLComponent`
    -   `com.ibm.workplace.wcm.api.WCM_ImageComponent`
    -   `com.ibm.workplace.wcm.api.WCM_NumericComponent`
    -   `com.ibm.workplace.wcm.api.WCM_PresentationTemplate`
    -   `com.ibm.workplace.wcm.api.WCM_RichTextComponent`
    -   `com.ibm.workplace.wcm.api.WCM_ShortTextComponent`
    -   `com.ibm.workplace.wcm.api.WCM_SiteArea`
    -   `com.ibm.workplace.wcm.api.WCM_Taxonomy`
    -   `com.ibm.workplace.wcm.api.WCM_TextComponent`
    -   `com.ibm.workplace.wcm.api.WCM_Workflow`
    -   `com.ibm.workplace.wcm.api.WCM_WorkflowStage`
    When creating a new content item, you can specify a default authoring template by providing the document ID of the authoring template in the atid parameter:

    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" atid="com.ibm.workplace.wcm.api.WCM_AuthoringTemplate/ID1"]`
    When creating site areas, content items and categories, you can specify the document ID of the parent item to save the new item under. Specify this ID in the pid parameter:

    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID"]`
    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_SiteArea" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID"]`
    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Category" pid="com.ibm.workplace.wcm.api.WCM_Taxonomy/ID"]`
    When creating site areas, you can specify the position of the new site area by using a position parameter. You can specify to save the new site area at the start or end relative to any existing site areas. If not specified, the new site area is saved at the start relative to any existing site areas:

    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" position="start"]`
    -   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_SiteArea" position="end"]`
-   **`delete`**

    This is used to delete an item. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="delete" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`edit`**

    This is used to open an item form in edit mode. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`read`**

    This is used to open an item form in read-only mode. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="read" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`openmainview`**

    This is used to open a view within an authoring portlet. You must also specify a view parameter.

    For example:

    -   `[plugin:RemoteAction action="openmainview" view="contentbysitearea"]`
    The following view parameters can be used:

    -   `contentbysitearea`
    -   `contentbytitle`
    -   `myrecent`
    -   `mydraft`
    -   `mypendingapproval`
    -   `mypublished`
    -   `myexpired`
    -   `mydeleted`
    -   `alldraftitems`
    -   `allexpireditems`
    -   `allpublisheditems`
    -   `alldeleteditems`
    -   `componentsbytype`
-   **`move`**

    This is used to move a site area or content item.

    For example, to open the move dialog for a content item or site area:

    -   `[plugin:RemoteAction action="move" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
    A move direction is specified as "1" for up and "-1" for down. For example, to move a content item up one position:

    -   `[plugin:RemoteAction action="move" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID1" moveDirection="1"]`
-   **`link`**

    This will link a content item to a site area.

    For example:

    -   `[plugin:RemoteAction action="link" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID2"]`
    When linking items, you can specify the path to the parent item by using the ppath parameter instead of the pid parameter:

    -   `[plugin:RemoteAction action="link" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" ppath="library1/sitearea1/sitearea2"]`
    When linking items, you can create a new parent item by using the autoCreateParent parameter. You must also specify the library where the item being linked is located by using the slibrary parameter. The ppath parameter is used to specify the existing parent that the new parent item is created under:

    -   `[plugin:RemoteAction action="link" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" autoCreateParent="true" slibrary="libraryname" ppath="library1/sitearea1/sitearea2"]`
-   **`copy`**

    This is used to make a copy of an item.

    For example, to copy a content item to a new site area:

    -   `[plugin:RemoteAction action="copy" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID2"]`
    You can use the following extra parameters when copying:

    -   `copyAsDraft="true"`

        This will restart the workflow of the copy being creating. In most cases this would result in the copy being created with a status of draft.

    -   `wid="com.ibm.workplace.wcm.api.WCM_Workflow/ID1"`

        Use this to specify a different workflow to use when creating the copy. This will also restart the workflow of the copy being creating. In most cases this would result in the copy being created with a status of draft.

    -   `position="start"`

        This will create the copy as the first item under the specified parent item. If not specified the item is copied as the last child of the specified parent item.

    When copying items you can specify the path to the parent item by using the ppath parameter instead of the pid parameter:

    -   `[plugin:RemoteAction action="copy" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" ppath="library1/sitearea1/sitearea2"]`
    When copying items you can create a new parent item by using the autoCreateParent parameter. You must also specify the library where the item being copied is located by using the slibrary parameter. The ppath parameter is used to specify the existing parent that the new parent item is created under:

    -   `[plugin:RemoteAction action="copy" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" autoCreateParent="true" slibrary="libraryname" ppath="library1/sitearea1/sitearea2"]`
-   **`approve`**

    This is used to approve an item in a workflow. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="approve" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`decline`**

    This is used to decline an item in a workflow. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="decline" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`saveandapprove`**

    This is used to approve an item in a workflow where that item is open in edit mode within the same session. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="saveandapprove" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
    -   `[plugin:RemoteAction action="saveandapprove" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" isdraft="true"]`
-   **`previousstage`**

    This is used to move an item to the previous stage in a workflow. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="previousstage" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`viewversions`**

    This is used to open the versions dialog for an item. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="viewversions" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   **`viewhistory`**

    This is used to open the history dialog for an item. You must also specify the docid of the item.

    For example:

    -   `[plugin:RemoteAction action="viewhistory" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`

## Populating fields when creating or editing content

When using the "new" or "edit" parameters with content items, you can also add data to different fields in the content item using a URL.

For example, to add "newcontent" as the name of the content item, you would use this URL:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.name="newcontent"]`

The following parameters can be used to populate fields when creating or editing content:

-   `wcmfield.content.name=`
-   `wcmfield.content.title=`
-   `wcmfield.content.description=`
-   `wcmfield.content.authors=`
-   `wcmfield.content.owners=`
-   `wcmfield.content.publishDate=`
-   `wcmfield.content.expiryDate=`
-   `wcmfield.content.generalDateOne=`
-   `wcmfield.content.generalDateTwo=`
-   `wcmfield.content.workflow=` \(This can only be used when creating content.\)
-   `wcmfield.content.categories=`
-   `wcmfield.content.keywords=`
-   `wcmfield.element.elementname=`

    **Note:** You replace elementname with the name of the element you are populating. The element parameter can only be used with the following element types:

    -   Text
    -   Html
    -   Rich text
    -   Option Selection
    -   User Selection
    -   Date and time
    -   Number
    -   JSP
    -   Link
    -   Component Reference

When populating fields with user IDs, you must use this format:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.authors="uid=usera,cn=cn-name,dc=dc-name"]`

When populating workflow and category fields, you must use the document IDs as their values:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.workflow="ID1"]`
-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.categories="ID1"]`

When populating date fields, the date format must be US English. Either a date and time, or just a date can be specified. If only a date is specified, the time used will be 12:00:00 AM. For example:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.generalDateOne="Feb 14, 2008 12:53:03 PM"]`
-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.generalDateOne="Feb 14, 2008"]`

The date and time set here are based on the server's timezone, not the timezone of the user's computer.

When populating a JSP element, you need to specify the path to the JSP file:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.jspelementname="/wps/wcm/jsp/html/example.jsp"]`

When populating a component reference element, you specify the component to reference. For example:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.mycompref.type="com.aptrix.pluto.cmpnt.NavigatorCmpnt" wcmfield.element.mycompref.id="e4bdf10042d0769698ccbeb0e25cc973"]`

When populating an option selection element, you specify each selection option. For example:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname="AA" wcmfield.element.elementname="BB"]`

When populating a user selection element, you specify each user. For example:

-   `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname="uid=wpsadmin,o=defaultWimFileBasedRealm" wcmfield.element.elementname="uid=wpsadmin2,o=defaultWimFileBasedRealm"]`

When populating a Link element, you can specify the following parameters:

-   **Adding a link to a content item:**

    `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname.type="content" wcmfield.element.elementname.id="contentID"]`

-   **Adding a link to a link component:**

    `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname.type="link" wcmfield.element.elementname.id="linkcomponentID"]`

-   **Adding a link to an image or file resource component:**

    `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname.type="resource" wcmfield.element.elementname.id="componentID"]`

-   **Adding a link to a URL:**

    `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.element.elementname.type="external" wcmfield.element.elementname.externalReference="myurl"]`

-   **To specify whether to use the name of the item you are linking to as the link text, add this to the tag:**

    `wcmfield.element.elementname.useReferenceLinkText="true"`

-   **When specifying an image to display as the link, add this to the tag:**

    `wcmfield.element.elementname.linkImage="imagecomponentID"`

-   **When specifying the text of the link, add this to the URL:**

    `wcmfield.element.elementname.linkText="text"`

-   **When specifying the description of the link, add this to the URL:**

    `wcmfield.element.elementname.linkDescription="text"`

-   **When specifying a link target, add this to the URL:**

    `wcmfield.element.elementname.linkTarget=`

    -   `_blank`
    -   `_parent`
    -   `_self`
    -   `_top`
    -   `targetname`

## Save parameters

You can add the following "save" parameters to a remote action tag.

-   **`autoSave`**

    This is used to save a controllable. This happens in the background and is not displayed to users.

    For example:

    -   `wcmfield.autosave="true"`
-   **`saveValidate`**

    This parameter determines if warning and error messages resulting from the autosave is displayed to the user. If set to "true", warning and error messages are displayed to the user. If set to false, messages are suppressed. The default is true.

    For example:

    -   `&wcmfield.saveValidate="false"`

## Adding comments to the item history

When creating items that use a workflow with "Enter comment on approval" set to true, you can add a comment to the item history by adding `comment="comment text"` to the URL.

For example:

```
`[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" 
createDraft="true" comment="comment text"]`
```

## Examples

Open the versions view for an item:

-   Tag: `[plugin:RemoteAction action="viewversions" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=viewversions&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1`

Open the history view for an item:

-   Tag: `[plugin:RemoteAction action="viewhistory" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=viewhistory&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1`

Open a content item in read mode:

-   Tag: `[plugin:RemoteAction action="read" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=read&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1`

Open a content item in edit mode:

-   Tag: `[plugin:RemoteAction action="edit" &docid=com.ibm.workplace.wcm.api.WCM_Content/ID1]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=edit&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1`

Move a content item up:

-   Tag: `[plugin:RemoteAction action="move" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" moveDirection="1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID1"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=move&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1&moveDirection=1&pid=com.ibm.workplace.wcm.api.WCM_SiteArea/ID1`

Move a site area down:

-   Tag: `[plugin:RemoteAction action="move" docid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID1" "moveDirection="-1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID1"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=move&docid=com.ibm.workplace.wcm.api.WCM_SiteArea/ID1&moveDirection=-1&pid=com.ibm.workplace.wcm.api.WCM_SiteArea/ID1`

Create a new content item with title of 'newcontent':

-   Tag: `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" wcmfield.content.title="newcontent"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=new&type=com.ibm.workplace.wcm.api.WCM_Content&wcmfield.content.title=newcontent`

To open a content item in edit mode and automatically change keywords:

-   Tag: `[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" wcmfield.content.keywords="keyword1" wcmfield.content.keywords="keyword2"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=edit&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1&wcmfield.content.keywords=keyword1&wcmfield.content.keywords=keyword2`

To edit a content item, automatically change the keywords and use autosave to automatically save the content \(no dialog opens\):

-   Tag: `[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" wcmfield.content.keywords="keyword1" wcmfield.content.keywords="keyword2" wcmfield.autosave="true"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=edit&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1&wcmfield.content.keywords=keyword1&wcmfield.content.keywords=keyword2&wcmfield.autosave=true`

To edit a content item, automatically save the item and prevent any validation exception from being displayed, use autosave with saveValidate=false:

-   Tag: `[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" wcmfield.content.keywords="keyword1" wcmfield.autosave="true" wcmfield.saveValidate="false"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=edit&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1&wcmfield.content.keywords=keyword1&wcmfield.autosave=true&wcmfield.saveValidate=false`

To create a content item, set the name and use autosave to automatically save the content \(no dialog opens\). The authoring template that is used by the content item must have a workflow pre-selected:

-   Tag: `[plugin:RemoteAction action="new" type="com.ibm.workplace.wcm.api.WCM_Content" atid="com.ibm.workplace.wcm.api.WCM_AuthoringTemplate/ID1" pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID2" wcmfield.content.name="newcontent" wcmfield.autosave="true" wcmfield.saveValidate="true"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=new&type=com.ibm.workplace.wcm.api.WCM_Content&atid=com.ibm.workplace.wcm.api.WCM_AuthoringTemplate/ID1&pid=com.ibm.workplace.wcm.api.WCM_SiteArea/ID2&wcmfield.content.name=newcontent&wcmfield.autosave=true&wcmfield.saveValidate=true`

To edit a content item and create a draft on the edit and set the history log comment:

-   Tag: `[plugin:RemoteAction action="edit" docid="com.ibm.workplace.wcm.api.WCM_Content/ID1" createDraft="true" comment="comment"]`
-   Url: `http://<host>/wps/myportal/wcmAuthoring?wcmAuthoringAction=edit&docid=com.ibm.workplace.wcm.api.WCM_Content/ID1&createDraft=true&comment=comment`

**Parent topic:**[Developing ](../dev/developing_parent.md)

