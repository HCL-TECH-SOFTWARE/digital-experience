# Security architecture

The security architecture describes what groups are required for your site and what access is required for different groups to the authoring portlet and rendered website.

**Note:** The following example describes the type of security architecture that is required for an authoring environment. In most cases, the security architecture for a staging or delivery environment would be much simpler with only the **All Portal User Groups** group assigned user access to the library. This strategy prevents users from being able to edit content and disables features like authoring tools from being displayed on the published site.

In this example, item type roles are applied to the following groups:

|Group|Details|
|-----|-------|
|WCMAdmins|Members of this group require access to all features of the authoring portlet.|
|SiteAdmins|Members of this group require access to all features of the authoring portlet except workflow.|
|SiteDesigners|Members of this group require access to content items, presentation templates, authoring templates, and components.|
|ContentAuthors|Members of this group require editor access to content items only.|
|ContentReviewers|Members of this group require Reviewer access to content items only.|

## Library access

The simplest method of setting library access is to grant contributor access to all your groups. This access gives all users and groups contributor access to the library and authoring portlet. Extra access is then granted to each group by using resource permissions. You can also grant the Anonymous Portal User group user access to ensure that all anonymous users can access the library if anonymous access is required for your website.

|Roles|Allow propagation|Allow inheritance|User or group|
|-----|-----------------|-----------------|-------------|
|Administrator|Yes|Yes| |
|Manager|Yes|Yes| |
|Editor|Yes|Yes| |
|User|No|Yes|Anonymous Portal User|
|Contributor|Yes|Yes|WCMAdmins

SiteAdmins

SiteDesigners

ContentAuthors

ContentReviewers

|

## Resource permissions

Set the following resource permissions for each role type:

-   The WCMAdmins group is assigned the administrator role for all resources.
-   The SiteAdmins group is assigned the manager role to all resources except workflow and workflow elements as they do not require access to these resources.
-   The other groups are assigned roles for each resource according to the following tables.

-   **Authoring templates**

    The SiteDesigners group is assigned editor access to authoring templates as they are required to create new authoring templates.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes|SiteDesigners|
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |

-   **Components**

    SiteDesigners are assigned editor access to components as they are required to create components.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes|SiteDesigners|
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |

-   **Content**

    Both the SiteDesigners and ContentAuthors groups are assigned editor access to content as they are required to create content items.

    The ContentReviewers group is assigned Reviewer access only, because they are not required to create new content items, but need Reviewer access to content items during a workflow. You must also assign the ContentReviewers group approve access in the properties section of any workflow stages that ContentReviewers use to approve content items.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes|SiteDesignersContentAuthors

|
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |
    |Reviewer|Yes|Yes|ContentReviewers

|

-   **Presentation Templates**

    The SiteDesigners group is assigned editor access to presentation templates as they are required to create new presentation templates.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes|SiteDesigners|
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |

-   **Site areas and pages**

    Only the WCMAdmins and SiteAdmins groups require access to site areas and pages as these are the only groups that build site frameworks.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes| |
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |

-   **Taxonomy**

    Only the WCMAdmins and SiteAdmins groups require access to taxonomies as these are the only groups that build taxonomies.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes|SiteAdmins|
    |Editor|Yes|Yes| |
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |

-   **Workflow Items**

    Only the WCMAdmins group requires access to workflow items as this is the only group that creates workflows. The groups that use workflows do not require access to the workflow items resource permissions.

    |Roles|Allow propagation|Allow inheritance|User or group|
    |-----|-----------------|-----------------|-------------|
    |Administrator|Yes|Yes|WCMAdmins|
    |Manager|Yes|Yes| |
    |Editor|Yes|Yes| |
    |User|Yes|Yes| |
    |Contributor|Yes|Yes| |


## Item-level security inheritance

By default, each role's access is automatically inherited down to each item in a library. To prevent a user or group from automatically having inherited access to an item, you need to turn off inheritance on that item.

The permissions set for item type do not automatically give you access to individual items. They give you access only to specific tasks and views within the authoring portlet.

You can also assign specific access to individual groups or users on each item.


**Related information**  


[Setting up access](/digital-experience/build_sites/create_sites/building_website/site_acl)

