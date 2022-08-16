---
id: wcm_dev_renderplugins_remote
title: Remote action plug-in
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Use the RemoteAction plug-in to reference remote actions from your web content. Remote actions are used to run actions, such as creating and editing items and generating views.

You can reference remote actions by using plug-in tags with the following format:

```
[plugin:RemoteAction action=" " docid=" " 
useCurrentSelection=" " dialog=" " useCurrentContext=" "]
```

-   **`action=`**

    This attribute is the remote action to run.

-   **`docid=`**

    This attribute is the document ID of the item to run the remote action against.

-   **`useCurrentContext=`**

    If set to true, then the document ID is obtained form the rendering context instead of the docid attribute.

-   **`dialog=`**

    If this attribute is set to true, when rendered within a web content viewer, the remote action is rendered as a URL. The URL redirects the user to a hidden portal page that is used by the viewer for inline editing.


This example demonstrates a "new" action to create a content item:

```
[plugin:RemoteAction action="new" 
type="com.ibm.workplace.wcm.api.WCM_Content" 
pid="com.ibm.workplace.wcm.api.WCM_SiteArea/ID2" 
atid="com.aptrix.pluto.presentation.template/ID1" 
wcmfield.content.name="newcontent" 
wcmfield.autosave="true" wcmfield.saveValidate="true" ] 
```

For details on the remote actions that you can access with plug-in tags, see *Using remote actions*.

