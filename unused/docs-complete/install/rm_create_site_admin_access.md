# Authors, groups, setting permissions 

Administrators must understand the roles and goals of content authors to grant the appropriate permissions. Learn how to create users, create content author and reviewer groups, and grant access to resources and libraries.

**Parent topic:**[Setting up the site for the content author ](../install/rm_create_site.md)

# Background information for the administrator: Identify the goals of the content authors

As the administrator, you must understand the various content author roles. For example, a content author might want to create a landing page from a page template. For this type of site update, the content author creates a project and then creates a page from a page template in site manager. To accomplish these goals, the content author needs to exist in the system and belong to a content author group. The content author would need access to projects to create or enter a project and access to other resources types like pages in order to create a draft page.

A content reviewer role also exists in the content authoring story. You need to add the content reviewer to the system to a content reviewer group. The content reviewer group needs sufficient access to view draft content and to move drafts to the next workflow stage.

The flow chart highlights the content authors and reviewers goals and the tasks that administrators must complete for these roles to accomplish their goals.

This roadmap focuses on creating users and groups, assigning resource permissions, and assigning library permissions.

To learn more about how an administrator defines workflow access control, go to the Roadmaps section and find *Roadmap: Controlling who can create drafts, reviews, and publish content with workflows*.

![Flow chart that displays task flow of content author that wants to create and publish a page. The image highlights the Administrator's current goal and next steps as it relates to the content author. In order for the content author to log in to the site, the administrator must create groups for content authors and reviewers and adds users to groups. In order for the content author to create a draft landing page with the new landing page template, the content author needs access to edit the page. The administrator must grant the content author and content reviewer groups access to pages, virtual resources, and libraries. The administrator's next steps is to create a 3 stage workflow and assign access per stage to content author and review groups. This workflow is associated with the new page template. The content author can then send content out for review for the content reviewer to approve. After the content reviewer approves the draft content, the content moves to the publish stage of the workflow.](../images/rm-access-admin-area.jpg)

# Creating content authors and content reviewers in your site

Learn how to create the Content Authors Group and the Content Reviewers Group. Then, learn how to add users to these groups.

1.  Log in as the adminstrator.

2.  Click the **Administration menu** icon. Then, click **Access** \> **Users and Groups**.

3.  Click **All Portal User Groups**.

4.  Create the Content Author and the Content Reviewer Groups. These groups represent various content authoring roles.
5.  Click **New Group** and enter Content Authors Group as the ID for your new group. Click **OK** to save your group.

6.  Click **New Group** and enter Content Reviewers Group as the an ID for your new group. Click **OK** to save your group.

7.  Create users in the system. Add these users to your new groups.
8.  Click **Content Authors Group** to open the group. Then, click **New User** to create your content author, such as Author1, to your group. To create a new content author, you must enter profile information for the user. Profile information includes user ID and password. Click **OK** to save your changes.

9.  Click **All Portal User Groups**.

10. Click **Content Reviewers Group** to open the group. Then, click **New User** to create a content reviewer, such as Reviewer1, that you want to review content.


# Assigning the authoring groups access to pages and vanity URLs

The content authoring options that are available to content authors depend on the resource permissions that you assign.

1.  Click the **Administration** menu icon. Then, click **Access** \> **Resource Permissions.**

2.  Assign access to resources types that content authors and content reviewers use to create and publish content.
3.  Assign access to pages. Assign the Content Authors Group to the Contributor role. Assign the Content Reviewers Group to the User role.

    If the access control is set up correctly, **Create Sibling Page** and the **Create Child Page** options are available and enabled in the context menu from Site Manager for the content author. Content authors must have access to these options to create a new landing page from a page template. For content authors to create drafts from published content, the administrator must assign the appropriate workflow access. Instructions for workflow permissions are contained in a later roadmap.

    1.  Click **Pages**.

    2.  Click the **Assign Access** icon by the Content Root. A list of roles that are associated with the Page resource appears.

        **Note:** If you want to assign access to a specific page in your site hierarchy, click **Content Root** to find the page.

    3.  By the Contributor role, click the **Edit Role** icon to assign your Content Author group to this role.

    4.  Click **Add**.

    5.  Browse or search for the Content Authors Group. Select this user group from the search results.

    6.  Click **OK** to save your changes. The user group is now assigned to the role.

    7.  Click **Content Root**.

    8.  By the User role, click the **Edit Role** icon to assign your Content Reviewer group to this role.

    9.  Click **Add**.

    10. Browse or search for the Content Reviewers Group. Select this user group from the search results.

    11. Click **OK** to save your changes. The user group is now assigned to the role.

4.  Assign access to virtual resources. Assign the Content Authors Group to the Editor role. Assign the Content Reviewers Group to the User role. From Resource Permissions, go to **Virtual resources** \> **Vanity URL** to assign access to these roles. Follow the instructions that are outlined in the earlier step for assigning access to these roles.


# Setting up library access

Libraries store content and pages on the site. Draft pages that the content author creates from Site Manager in the site toolbar are stored in the portal site library. Workflows, content, and other design elements are stored in the web content library. You must give your content author the correct permissions to work with the web content and portal site libraries.

1.  Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.

2.  Set **permissions** for the Portal Site library.

    1.  Click the **Set permissions** icon for the Portal Site library.

    2.  Click the **Edit Role** icon for the Editor role.

    3.  Click **Add**. Then, click **Search** to show all groups.

    4.  Select the **Content Authors Group** and **Content Reviewers Group**.

3.  Click **Portal Content** \> **Web Content Libraries**.

4.  Set **permissions** for the Web Content library.

    1.  Click the **Set permissions** icon for the Web Content library.

    2.  Click the **Edit Role** icon for the Editor role.

    3.  Click **Add**. Click **Search** to show all groups.

    4.  Select the **Content Authors Group** and **Content Reviewers Group**.


