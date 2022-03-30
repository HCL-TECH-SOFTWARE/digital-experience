# Author access per workflow stage 

Set up access for content authors that want to create landing pages from a new page template. The page template is based on a wire frame design.

**Parent topic:**[Controlling content flow with workflows ](../install/rm_create_site_admin_workflow.md)

# Background information for the administrator: Identify the goals of the content authors

You perform a task analysis of content authors for each stage of a workflow that you recently created.

You will later need set up access control for content authors in other authoring roles. For example, a user that does not create draft content or manage their project would not need the same access rights. Users that can review or publish content require different access rights. You plan to refer to other roadmaps for these authoring roles to understand their goals and required access per workflow stage once you complete setting up access for the a content author group.

![Image of a flowchart that shows and describes roles for the Draft stage, Review stage, and Publish stage. Administrators need to assign Manager access to the draft stage so content authors can create a project, create content, and edit their content. Administrators need to assign Reviewer access to this stage so content authors can move draft content to the review stage. Administrators need to assign User access to content authors to check the status of their content, since the content author is waiting to find out if their drafts will move to the publish stage or be returned to the draft stage. During the Publish stage, Administrators need to assign Draft Creator access to content authors so they can create drafts of published content.](../images/rm-workflow-author.jpg)

# Assigning access to your Content Author Group for the Draft, Review, and Publish stages of the workflow

You created a workflow named Landing Page Workflow in an earlier roadmap. Go to the Roadmaps section and find *Roadmap: Controlling who can create drafts, reviews, and publish content with workflows* for more topic information.

1.  Log in to the authoring server as SiteAdmin.

2.  Open the applications menu and click **Content**.

3.  Click the **Web Content Authoring** tab.

4.  Click **Web Content** \> **Workflow Items** \> **Workflow Stages**.

5.  For the Draft workflow stage, assign access to your Content Author Group.

    With **Grant Manager Access** and **Grant Reviewer Access**, content authors can create content, edit their content, and send their content for review.

    1.  Click the **Draft** workflow stage.

    2.  Click **Edit**.

    3.  Expand **Workflow Defined Access** section.

    4.  Click **Grant Manager Access**.

    5.  Type Co in the search field and click **Search**.

    6.  Select **Content Authors Group** and click **Add**. Then, click **OK**.

    7.  Click **Grant Reviewer Access**.

    8.  Type Co in the search field and click **Search**.

    9.  Select **Content Authors Group** and click **Add**. Then, click **OK**.

    10. Click **Save and Close**.

6.  For the Review workflow stage, assign access to your Content Author Group.

    With **Grant User Access**, content authors can check content status to determine if their draft content will move to the Publish stage. Content reviewers approve or reject draft content during this stage.

    1.  Click the **Review** workflow stage.

    2.  Click **Edit**.

    3.  Expand **Workflow Defined Access** section.

    4.  Click **Grant User Access**.

    5.  Type Co in the search field and click **Search**.

    6.  Select **Content Authors Group** and click **Add**. Then, click **OK**.

    7.  Click **Save and Close**.

7.  For the Publish workflow stage, assign your Content Author Group **Grant Draft Creator Access** access.

    With **Grant Draft Creator Access**, content authors can create drafts of published content. Content authors do not have access to publish the drafts that they create.

    1.  Click the **Publish** workflow stage.

    2.  Click **Edit**.

    3.  Expand **Workflow Defined Access** section.

    4.  Click **Grant Draft Creator Access**.

    5.  Type Co in the search field and click **Search**.

    6.  Select **Content Authors Group** and click **Add**. Then, click **OK**.

    7.  Click **Save and Close**.


