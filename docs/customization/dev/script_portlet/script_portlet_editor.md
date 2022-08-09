# Script Application Editor

You can take any existing web page, pick out individual parts, and enter them into corresponding tabs in the Script Application Editor. The Preview window displays the results as you edit.

## Using the editor

Open the Script Application page on which you added the new instance of the Script Application. Turn on **Edit mode**. Click **Edit** in the portlet.

Each of the panes can be maximized and the Preview pane can be popped out into a separate window.

In the CSS pane, the `<style>` tags are added automatically by the editor. Do not add your own. In the **JavaScript** tab, do not add the surrounding `<script>` tags either.

If you modify Script Application when in a project, your changes are tracked in that project. Your changes are saved as a draft instead of published as site content. Approval processes, syndication, versions, and unpublish features are all applicable to your application logic. A user with the access control role of a normal author can add items to the Script Application Editor.

When you add a Script Application to a page, a content item is created in the Portal Site library. The default content item name is `Untitled`. You can edit the item name from the Script Application Editor by clicking the **Edit** link in the portlet. The item is created under the page on which you added the Script Application.

**Note:** If you add the Script Application to pages for which you selected the Lightweight profile, you cannot start the portal dialog to use the Edit and Import features. Script Application instances that you created and edited on pages with profiles other than the Lightweight profile or elsewhere can be added to Lightweight profile pages from the Script Applications for runtime use.

Because the Script Application is stored as a content item, you can apply a workflow process to govern the deployment of the application to the live site. As a developer, you do not have to bundle the application and pass it to an administrator to deploy on the live site.

Workflow in HCL Web Content Manager is customizable. Your organization can create a unique workflow for script-based applications. One of the stages in the workflow can be checking the JavaScript for security vulnerabilities. After the item is approved, it is syndicated to the live site.

You can build applications with the help of the following tools.

-   **[Importing Script Applications](../script-portlet/import-apps.md)**  
Add the Script Application to a page. Then, import an application.
-   **[Exporting Script Applications](../script-portlet/export-apps.md)**  
You can export applications to edit the scripts by using your portal interface.
-   **[CSS best practices](../script-portlet/css_best_practices.md)**  
If your code uses a map, or another element that has no fixed height, you must give it an explicit height, such as `400px vs 50%`.

**Parent topic:**[Build applications with the Script Application](../script-portlet/build_apps.md)

