# Cleaning up WCM items

The amount of Web Content Manager (WCM) items grow over time. To maintain good system performance, it is recommended to clean up old items that are no longer needed. With regular cleanup, content authors can perform their tasks better and migrating from an earlier release can take less time.

The following are examples of items which you can clean up:

- Drafts
- Versions
- Expired content
- Published projects
- References to users and groups that no longer exist 
- Item history
- Deleted items
- Unused items

The following sections provide information on how to deal with each of these items.

The following limitations apply:

DISCLAIMER OF WARRANTIES:
-------------------------
The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

## Drafts

Draft items that are not published can accumulate over time. Use the following sample JSP file to clean up drafts that are no longer needed. You can adjust the file to go against different libraries and to have a "last changed" check.

Download the file [`wcm_maintenance.zip`](https://git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/files/1822/wcm_maintenance.zip). The sample JSP file is `purgeDrafts.jsp` located in the wcm_maintenance folder.

## Versions

Use the clear versions tool to eliminate versions. For more information, see [Clearing version history](../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_clear_versions.md).

With the clear versions tool, you can specify how many versions you want to keep or the timestamp before which all versions should be deleted. It is also recommended to change the default policy in WCMConfigService to not create versions automatically but to set it to manual to let the user decide which versions to keep.

## Expired content

When content expires as part of a workflow, an additional action in the workflow can trigger a deletion of the content as well. If the additional action was not done and a lot of expired content still exists, they can accumulate. Use the following sample JSP file to clean up expired contents that are no longer needed. You can adjust the file to go against different libraries and to modify how recent content is deleted.

Download the file [`wcm_maintenance.zip`](https://git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/files/1822/wcm_maintenance.zip). The sample JSP file is `purgeExpiredData.jsp` located in the wcm_maintenance folder.

## Published projects

While there is no out-of-the-box tool to delete published projects, you can use [WCM API](https://help.hcl-software.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/com/ibm/workplace/wcm/api/Workspace.html){target="_blank"} to delete published projects. 

Another option is to delete them through the WCM Authoring portlet. Go to **Project > Published** to display all published projects. Select the projects for deletion and click **Delete Project**.

You can also configure a utility to run in the background to delete published projects. For more information, see [Configuring Web content cleanup tasks](../manage_content/wcm_configuration/wcm_adm_tools/wcm_config_clean_tasks.md).

## References to users and groups that no longer exist

Users and groups are referenced in Web Content Manager items to ensure that only authorized users can access the items. It is common for user names or group names to change over time.

Sample scenarios:

- A user name can change due to a change in their marital status.
- A user can move from one department to another within the organization (for example, from Human Resources to Finance) which would change the fully qualified distinguished name from **CN=<firstname lastname>,OU=HR,O=<companyname>** to **CN=<firstname lastname>,OU=Finance,O=<companyname>**.

In such cases, you should change the user or group references made in an item to refer to the new user or group.

Administrators can also use the member fixer task to check whether any users or groups referenced in the WCM items were renamed or deleted, and fix these references. The member fixer task checks all of the items in a specified library for references to users and groups that no longer exist in the current user repository. When run in report mode, it reports all the references to members. When run in fix mode, these references can be fixed, either by replacing them with references to members that exist, or by removing the references. For more information, see [How to use the member fixer task](../manage_content/wcm_configuration/wcm_adm_tools/wcm_member_fixer/wcm_admin_member-fixer.md)

## Item history

Administrators can use the clear history tool to clear the history of an item. For more information, see [Clearing item history](../manage_content/wcm_configuration/wcm_adm_tools/wcm_admin_clear_history.md).

## Deleted items

When items are deleted, they are not completely removed to give users the chance to undo a deletion. These "deleted" items grow over time. To finally delete an item, WCM offers the Purge command. You can trigger the Purge through the user interface or API.

Use the following sample JSP file to clean up drafts that are no longer needed. You can adjust the file to go against different libraries and to have a "last changed" check. Download the file [`wcm_maintenance.zip`](https://git.cwp.pnp-hcl.com/CWPdoc/dx-mkdocs/files/1822/wcm_maintenance.zip). The sample JSP file is `purgeContent.jsp` located in the wcm_maintenance folder.

You can also configure a utility to run in the background to delete published projects. For more information, see [Configuring Web content cleanup tasks](../manage_content/wcm_configuration/wcm_adm_tools/wcm_config_clean_tasks.md).

## Unused items

Content that is no longer used but is still around can also accumulate. Cleaning unused items saves space and improves performance, syndication, or other staging activities. You can use [WCM API](https://help.hcl-software.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/com/ibm/workplace/wcm/api/Workspace.html){target="_blank"} to query, delete, and purge content and other WCM items.

In addition to the WCM items mentioned in the cleanup list, a frequent item that increases the load is old content that is not expired but is no longer needed. It is recommended to manage old content using policies (for example, enforcing an expiration of content every 1 year).

You can also use WCM APIs to find content that has not been updated in a while. The findContentModifiedBetween API only returns content modified between a certain date (for example, to find content not modified since 2016, you can run a query from 1970 to 2016). For more information, see the [WCM API documentation](https://help.hcl-software.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/com/ibm/workplace/wcm/api/Workspace.html#findContentModifiedBetween(java.util.Date,%20java.util.Date)).

## Querying version nodes

To determine which JCR nodes are versions, refer to the following queries:
- To find the nodes per workspace: SELECT COUNT(1) AS NODE_COUNT, WSID FROM <schema>.ICMUTSWIDE0 WHERE WSID > 0 GROUP BY WSID
- To find the workspaces: SELECT WSID,WSNAME FROM JCR.ICMSTJCRWS WHERE WSID > 0 ORDER BY WSID
  
The nodes in jcr:versioning and any _v workspace for virtual portals represent the version nodes.
