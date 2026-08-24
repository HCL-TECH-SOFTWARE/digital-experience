# Adding workflow to managed pages

The default workflow that is used for published pages has only a draft and approved state. However, if the default workflow is not sufficient, you can define custom workflows and use them with published pages.

Before you do this task, ensure that you add the **Portal Site** library to the list of libraries that you can edit in the **Web Content Authoring** tab. In the **Web Content Authoring** tab, click **Preferences**, and then click **Configure** or **Edit Shared Settings**.

To use a custom workflow with a published page, you must create a page template and specify the custom workflow on the template. When you create a page that is based on the template, the custom workflow is used for the page.

!!!important
    Users with Privileged User access can personalize a page by adding content or by making other customizations to the page. Because Privileged User access is inherited by pages by default, your custom workflow can be bypassed by users with this access. If you want to ensure that users can update the page only through the workflow, disable the inheritance of Privileged User access for the page.

1. In the **Web Content Authoring** tab, create any workflow stages that you require and then create the custom workflow.

2. Create a project to use for creating the page template.

    !!! note
        Because you can set a workflow only on draft items, you must create the template as a draft in the context of a project. After you add your custom workflow to the draft, publish the draft to make the page template available.

3. In the **Web Content Authoring** tab, select **Project Views > All Projects** and select the new project as the current context.

4. Click the **Administration menu** icon. Then, click **Site Management > Page Templates**.

5. Select **Create** from the site toolbar and create the page template.

6. Add the workflow to the template.

    1. In the site toolbar, select **Menu > Edit Page Properties** to display the Manage Page Properties window.

    2. Select the **Security** tab.

    3. In the **Workflow** section, click **Select** in the **Workflow** field.

    4. Select the custom workflow, and click **OK**.

    5. Exit out of the Manage Page Properties window.

7. Approve and publish the project to make the page template available for use.

    1. In the **Projects** menu of the site toolbar, select **Manage Project**.

    2. Select the page template in the list of project items, and click **More > Approve**.

    3. Click **Publish Project**.

After you complete this task, you can select the new page template when you create a page in a project, and the custom workflow is automatically used.

## Demo

<div style="position: relative; padding-bottom: calc(56.885% + 41px); height: 0px; width: 100%;"><iframe src="https://demo.arcade.software/eb13GmnOyAtVljKprzVN?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" title="Assign a Workflow to a Digital Experience Page Template" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write; autoplay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; color-scheme: light;" ></iframe></div>

???+ info "Related information"
    - [Scope of edits](../projects/wcm_mngpages_editscope.md)
