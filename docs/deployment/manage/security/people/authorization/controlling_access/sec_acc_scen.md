# Access control scenarios

These scenarios provide helpful illustrations on how access control can be set up.

This section describes basic tasks for administering access control. The following examples use a hypothetical portal user called Mary and a hypothetical group called the Sales group. The following graphic helps illustrate the examples described in this topic.

![Illustration of role inheritance. The Market News page and USA Market News page are editable. Europe Market News has an editing block.](/digital-experience/images/inheritance.jpg)

**Note:** The tasks described here can be performed using either the administrative portlets or the XML configuration interface. For instructions about using the portlets mentioned here, refer to the portlet helps. For instructions about using the XML configuration interface, see the XML configuration interface section of the Help Center.

## Give a user full access to the portal

Give the user the Administrator@Portal role. The Administrator@Portal role permits unrestricted access to all portal resources except the private pages of other users.

Give users this role in one of two ways:

-   Add users to a group that has the Administrator@Portal role. The wpsadmins user group automatically receives the Administrator@Portal role during the portal installation. Use the Manage Users and Groups portlet to assign users to this group.
-   Explicitly assign the Administrator@Portal role to specific users. Use the Resource Permissions portlet or the User and Group Permissions portlet to give users this role.

## Allow a user to manage portlet applications with the Manage Applications portlet

Suppose that Mary needs to manage certain portlet applications. She must use the Manage Applications portlet to do this. Give Mary the following roles:

-   User@Web\_Module: This role permits Mary to see the information that is contained in a Web Module and to use the Manage Applications portlet to navigate to the Portlet Applications that are contained in this Web Module. You must assign Mary to a User role on each Web Module that she needs to access.
-   Manager@Portlet\_Application: This role permits Mary to administer the portlet application. You must assign Mary to a Manager role on each Portlet Application that she needs to administer.

There are two ways to give Mary these roles:

-   Add Mary to a group that has these roles. Use the Manage Users and Groups portlet to assign her to this group.
-   Explicitly assign the roles to Mary. Use the Resource Permissions portlet or the User and Group Permissions portlet to give her these roles.

## Allow users to access a page and some subset of its child pages

Create an inheritance block on the appropriate page. For example, give the Sales group the Editor@Market News Page role. This allows members of the Sales group to edit the Market News page and all of its current and future child pages, including the Europe Market News page and the USA Market News page. To allow the Sales group to edit the USA Market News page, but not the Europe Market News page, insert an inheritance role block for the Editor role type on the Europe Market News Page. Use the Resource Permissions portlet or the XML configuration interface to insert this role block. This role block prevents members of the Sales group \(and all other users and groups with an inherited or implicit Editor role on any parent pages of the Europe Market News page\) from editing the Europe Market News page and all of its current and future child pages.

## Allow users to access a portlet on a page

Give the group a role assignment on both the page and the portlet. Role assignments on a page do not contain access rights for portlets that appear on the page. Use the Resource Permissions portlet, the User and Group Permissions portlet, or the XML configuration interface to assign these roles.

For example, suppose there is a Market Targets portlet on the Market News Page. Give the Sales group \(or a user group that contains the Sales group\) the Editor@Market Targets Portlet role and the Editor@Market News Page role.

## Allow users to access a page, but not its child pages

Use the Resource permissions portlet to create a propagation block on the appropriate page. For example, give the Sales group Editor access to the Market News page. To prevent this group from editing the USA Market News page and the Europe Market News page, create a propagation block for the Editor role type on the Market News page. It is not necessary to create a propagation block on the Market News child pages. This Market News page role block prevents the Sales group \(and all other users and groups with an inherited or implicit Editor@Market News Page role\) from editing all current and future child pages of the Market News Page.

## Allow users to view and personalize a page and all of its child pages

Give the group the Privileged User role on the page and any portlets that appear on the page or its child pages. For example, give the Sales group to the Privileged User@Market News Page role. This allows all members of this group to view and personalize the Market News page and all of its current and future child pages. Then give the Sales group the Privileged User role on all portlets and portlet applications that appear on the Market News page and any of its child pages.

Giving the Sales group the Privileged User role instead of the Editor role allows members to create new private pages that are children of the Market News Page, but prevents members from creating new non-private pages.

The Editor role blocks that are created in the previous examples do not affect Privileged User roles in any way.

## Allow a user to assign roles on a specific resource to members of a specific group

For example, to allow Mary to assign the Sales group to the role Privileged User@Market News Page, do either of the following steps:

-   Give Mary the Privileged User@Market News Page, Security Administrator@Market News Page, and Delegator@Sales Group roles. This allows her to assign the Sales group \(or individual members of this group\) to the Privileged User@Market News Page role or the User@Market News Page role. Mary cannot assign anyone to the Editor@Market News Page role because she is not an Editor on the Market News Page. Mary cannot assign the Global Marketing group to the Privileged User@Market News Page role unless the Global Marketing group is a member of the Sales group.
-   Give Mary the Administrator@Portal role. This allows her to assign any user or group to any role on any resource.

**Note:** To administer access control through the administrative portlets, Mary must have role assignments that allow her to view the User Group Permissions or the Resource Permissions portlets and the pages that contain these portlets. To administer access control through the XML configuration interface, Mary must have a role assignment that allows her to access the XMLAccess virtual resource.


