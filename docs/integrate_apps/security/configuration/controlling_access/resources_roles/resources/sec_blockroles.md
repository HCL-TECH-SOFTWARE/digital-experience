# Role blocks for resources

Role blocks prevent inheritance and propagation through the resource hierarchy. This topic describes role blocks and provides examples of how role blocks affect resources.

## Role blocks

There are two types of role blocks:

-   **Inheritance blocks**

    Prevent child resources from acquiring role assignments from parent resources.

-   **Propagation blocks**

    Prevent parent resources from extending role assignments to child resources.


Inheritance blocks and propagation blocks are similar in that they prevent parent resources from affecting child resources. You apply inheritance blocks to prevent parent resources from affecting only specific child resources. You apply propagation blocks to prevent parent resources from affecting all child resources.

Role blocks apply to specific resources. For example, the Market News page is the parent of the Europe Market News page and the USA Market News page. An inheritance block exists for the Editor role on the Europe Market News page. No inheritance blocks exist for the USA Market News page. All users with the Editor role on the Market News page \(Editor@Market News Page\) inherit the Editor role for the USA Market News page \(Editor@USA Market News Page\), but do not inherit the Editor role for the Europe Market News page.

Role blocks apply to specific roles. For example, an inheritance block exists for the Editor role on the Europe Market News page. This role block prevents the Europe Market News page from acquiring any Editor role assignments from the Market News page. However, this role block does not affect inheritance of other roles. For example, no inheritance blocks exist for the Manager role. For this reason, all users with the Manager role on the Market News Page \(Manager@Market News Page\) inherit the Manager role on the Europe News Page \(Manager@Europe Market News Page\).

## Creating and deleting role blocks

Use the following to create and delete role blocks:

-   **XML configuration interface**

    Create and delete role blocks for all roles.

-   **Portal scripting interface**

    Create and delete role blocks for all roles, except for Administrator and Security Administrator.

-   **User and Group Permissions portlet**

    Create and delete role blocks for all roles, except for Administrator and Security Administrator.

-   **Resource Permissions portlet**

    Create and delete role blocks for all roles, except for Administrator and Security Administrator.


For example, a user named Mary has the Administrator role on the Market News page \(Administrator@Market News Page\). The Market News page is the parent of the USA News Page. Mary automatically has the Administrator role on the USA Market News Page \(Administrator@USA Market News Page\) if you do not create a role block with the XML Configuration Interface.

All roles, including Administrator and Security Administrator, are automatically blocked for the following:

-   Private pages
-   Externalized resources that have an internal parent resource
-   Internal resources that have an externalized parent resource

For example, HCL Portal controls access to the Market News page. IBM® Security Access Manager controls access to the USA Market News page. This scenario is one in which an externalized resource, the USA Market News page, has an internal parent resource, the Market News page. In this scenario, the USA Market News Page, the child, does not inherit roles from the Market News Page, the parent. For this reason, if a user named Mary has the Editor role on the Market News Page \(Editor@Market News Page\), she does not automatically get the Editor role on the USA Market News page \(Editor@USA Market News Page\).

**Parent topic:**[Resources](../security/sec_resources.md)

