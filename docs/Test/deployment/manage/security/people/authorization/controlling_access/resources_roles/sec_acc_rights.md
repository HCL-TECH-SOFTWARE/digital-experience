# Access permissions

Learn about sensitive operations for resources and the roles that are required to perform those operations. Sensitive operations include common tasks such as viewing portlets on specific pages and complex, high-risk tasks like running XML configuration interface scripts.

Roles provide permissions for user to perform specific operations on resources. The following tables denote roles as follows: `Role@Resource`.

**Notes about the following tables:**

-   The following tables list minimum role assignments that are necessary to perform sensitive operations. Roles are organized in a hierarchy. Roles that are higher in the hierarchy generally include the permissions of roles that are lower in the role hierarchy. For example, to install web modules the editor role on the virtual resource `Web Modules`, `Editor@Web Modules`, is the minimum role assignment for this operation. The manager role is higher in the hierarchy than the editor role. For this reason, the manager role includes the permissions of the editor role. `Manager@Web Modules` also allows users to install web modules.
-   When access permissions are granted to any listed resource, it inherently requires access to the resource Access Control Administration.
-   Use the Access Control Administration to change the owner of a resource.
-   The resources that are listed can be different depending on other products that might be installed with the product. Some roles are required on virtual resources; other roles must be on resource instances.
-   Users might also have access permissions for some operations through ownership of resources.
-   Definition of terms:
    -   ****private****

        Accessible only by the owner of the resource.

        **Note:** Creators of private resources automatically gain rights that are similar to the rights of a Manager. For example, if you create a private page, you have rights similar to manager for that page. You can also perform certain actions such as changing the page theme or deleting the page.

    -   ****non-private****

        Accessible by those people who were granted access to the resource.

    -   ****public****

        Accessible without authentication.


|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing the access control configuration of a resource R|If R is under internal PORTAL protection: `Security Administrator@R` or `Security Administrator@PORTAL`. If R is under external protection: `Security Administrator@R` or `Security Administrator@PORTAL` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br> **Notes:**<br> - PORTAL and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the IBM® Security Access Manager `pdadmin>` command line or the Computer Associates eTrust SiteMinder administrative console.|
|Creating a role RT on resource R|If R is under PORTAL protection: `Security Administrator@R` + RT@R or `Security Administrator@PORTAL`If R is under external protection: `Security Administrator@R` + `RT@R` or `Security Administrator@PORTAL` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br> **Notes:**<br> - PORTAL and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the Security Access Manager `pdadmin>` command line or the eTrust SiteMinder administrative console.
|Deleting a role that is created from role RT on resource R. All corresponding role mappings are also deleted.|If R is under internal PORTAL protection: `Security Administrator@R` + RT@`R` + Delegator role on all assigned principals or Security Administrator@PORTALIf R is under external protection: `Security Administrator@R` + `RT@R` + Delegator role on all assigned principals or `Security Administrator@PORTAL` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br> **Notes:**<br> - PORTAL and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the Security Access Manager `pdadmin>` command line or the eTrust SiteMinder administrative console.|
|Creating or deleting a role assignment for user or group U created from role RT on resource R|If R is under internal PORTAL protection: `Security Administrator@R` + `RT@R` + `Delegator@U` or `Security Administrator@PORTAL`If R is under external protection: `Security Administrator@R` + `RT@R` + `Delegator@U` or `Security Administrator@PORTAL` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br> **Notes:**<br> - PORTAL and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the Security Access Manager `pdadmin>` command lineor the eTrust SiteMinder administrative console.|
|Creating or deleting a role block for all roles that are created from role RT on resource R|If R is under internal PORTAL protection: `Security Administrator@R` + `RT@R` or `Security Administrator@PORTAL`If R is under external protection: `Security Administrator@R` + `RT@R` or `Security Administrator@PORTAL` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br> **Note:** A Security Administrator on this resource is always implicitly a Delegator on this resource. For all other roles, the `Security Administrator@R` plus the previous assignments are required.<br> **Notes:**<br> - PORTAL and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the Security Access Manager `pdadmin>` command lineor the eTrust SiteMinder administrative console.|
|Externalizing or internalizing resources:<br> Moving a resource R back and forth from internal to external control. All non-private child resources of R move with it. Private resources cannot be externalized.|`Security Administrator@R` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` or `Security Administrator@Portal` + `Security Administrator@EXTERNAL\_ACCESS\_CONTROL`<br>**Notes:**<br> - Portal and EXTERNAL\_ACCESS\_CONTROL are virtual resources.<br> - The `Security Administrator@EXTERNAL\_ACCESS\_CONTROL` role is created and managed in the External Security Manager. It must be modified with the external security management tools. For example, use the Security Access Manager `pdadmin>` command lineor the eTrust SiteMinder administrative console.|
|Modifying the owner of a resource:<br>Setting a user or group U1 as new owner of the non-private resource R, where the old owner was U2|`Delegator@U1`, `Delegator@U2`, `Manager@R`, and `Security_Administrator@R`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing a Business Rule|`User@Business Rules Workspace`<br> Set this permission on the Business Rules workspace in the Personalization navigator by selecting the root node and then choosing **Extra Action** \> **Edit Access** from the menu.|
|Creating a Business Rule|`Contributor@Business Rules Workspace`<br> **Important:** `Contributor@Business Rules Workspace` is the minimum required access permission to create a Business Rule. However, you must use `Editor@Business Rules Workspace` to create and maintain business rules and use the Portal administration facilities.|
|Deleting a Business Rule|`Manager@Business Rules Workspace`|
|Assigning a Business rule to a page P|For non-private pages: `Editor@P` and `User@Business Rules Workspace`For private pages: `Priviliged User@P` and `User@Business Rules Workspace`|
|Assigning a Business rule to a portlet PO on page P|For non-private pages: `Editor@P`, `User@PO`, and `User@Business Rules Workspace`<br> For private pages: `Privileged User@P`, `User@PO`, and `User@Business Rules Workspace`|
|Additional actions|Use the **Set Access** icon in Personalization to add a user or a group to a role on the root of the workspace. The same role is given to that user or group for all Web Content Manager libraries, policies, and templates.|
|Create or edit Segment Groups| - `Editor@Business Rules Workspace`<br> To be able to create Segment Groups, the user must have read access to the Application objects and Resource Collections that are used in the segment group definition. Write access is required to add or manage dynamic properties. To obtain this level of access, the user must be given the `Editor@Business Rules Workspace` role on the Business Rules workspace.<br> - Set as `Editor` of the library that contains the segment groups.<br> `Editor` role is required on the web content library to be able to create and edit segment groups. Log in to HCL Portal. Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**. Click the **Set permissions** icon on the **Web Content** library to set the `Editor` role. For information about the roles, go to [Web content management roles](../wcm_security/wcm_cms_access/wcm_cms_roles.md).|
|Use Segments from Segment Groups to target content|Set as `User` on the segment groups to be accessible.Set this access at the library level or Segments folder level to give access to all segment groups within the library. Use the **Web Content Libraries** portlet to set access. Alternatively, set this access at the item level to give access to individual segment groups. For information about the roles, go to [Web content management roles](../wcm_security/wcm_cms_access/wcm_cms_roles.md).<br> To target content on a **Web Content Viewer** portlet on a page, a user must have the following roles:<br> - `Editor` on the **Web Content Viewer** portlet. Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.<br> - `Editor` on the page itself.<br> - `User` on the content to be targeted.<br> - `Contributor` on the library where the content is stored.<br> - `Editor` on the **Site Areas and Pages** library resource (item types) in the Portal Site Library. Go to the **Web Content Library**. Click the **Library resources** icon for this library. Then, click the **Set permissions** icon for **Site Areas and Pages**. You can now add users and groups to the `Editor` role.|

|Sensitive operation and description<br> **Note:** The operations in this column specifically refer to pages only, but also applies to labels and URLs in some cases.|Required role assignment|
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
|Traversing a page:<br> Viewing the navigation of a page P|`User@P` or @ some child resource of P|
|Viewing the content of a page P, including page decoration and potentially the portlets on that page. The portlets on a page are protected separately. See the portlets on pages row of this table for information.|`User@P`|
|Modifying page properties includes the following actions:<br> - Adding or removing markup<br> - Adding or removing a locale<br> - Adding or removing parameters<br> to or from a page P|`Editor@P`|
|Modifying page properties includes Set page layout properties of a static page.P|`Markup editor role`. If the resources are in secure locations of layout templates, use `Manager role`. For more information, see *Adapt the list of required runtime configuration changes for your theme* in the related links.|
|Changing the theme of a page P|`Editor@P`|
|Modifying the layout of a page P includes the following actions:<br> - Adding or removing wires<br> - Managing actions|For non-private pages: `Editor@P`<br>For private pages: `Privileged User@P`<br> For managing receiving actions of a portlet on a target page: `Editor@P` and `Editor@PO`|
|Customizing the layout of a non-private page:<br> Creating a private, implicitly derived copy of a non-private page P|`Privileged User@P`|
|Adding a root page:<br> Creating and adding a new top-level page P|For non-private pages: `Editor@Pages`<br> For private pages: `Privileged User@Pages`<br> Pages is a virtual resource.|
|Adding a page:<br>Creating a page under any Page P|For non-private pages: `Editor@P`<br> For private pages: `Privileged User@P`|
|Creating a derived page:<br> Creating a page underneath P1 that is explicitly derived from page P2|New page is private: `Privileged User@P1` + `Editor@P2`<br> New page is non-private: `Editor@P1` + `Editor@P2`|
|Deleting a page P and all descendant pages, including further subpages and the portlets on those pages|`Manager@P`|
|Moving page P1 to a new parent page P2|For non-private pages: `Manager@P1` + `Editor@P2`For private pages: `Manager@P1` + `Privileged User@P2`|
|Locking or unlocking the contents of a non-private page P|`Editor@P` + `User@portlet` (Page Locks) + `User@page` (Locks)|
|Edit page associations for a non-private page P|`Editor@P`|
|Edit page associations for a private page P|`Privileged User@P`|
|Enabling membership-based access control delegation for a Community Page P associated to an HCL Connections<br> Community C represented by the virtual user groups G. It is activated through the **Limit access to this page to only community members** Page Associations check mark.|`Editor@P` + `Security Administrator@P` + `Delegator@G` + `View Privileges@C(in HCL Connections)`|
|Activating Portal Page Security for a web content page P that is associated with site area SA in web content library L. This security is activated through the **Use Portal Page Security** check mark in the Page Associations window.|`Editor@P` + `User@SA` + `Administrator@L` and `Editor@P` + `User@SA` + `Administrator@L` + `Manager@VirtualResource CONTENT MAPPINGS`|

|Sensitive operation|Required role assignment|
|-------------------|------------------------|
|Adding a root page<br> Creating and adding a new top-level page<br> Pages based on page template T|For non-private pages: `Editor@Pages` and `User@T`<br> For private pages: `Privileged User@Pages` and `User@T`<br> Additional roles can be required based on instantiation features associated to page template T:<br> - T is associated to site area SA1 in Web Content Manager, and the **wps.content.root** label is associated with site area SA2, with default content associations on each site area. Web Content Manager view permissions on SA1 and Web Content Manager create content permissions on SA2.<br> - T is associated to an HCL Connections community C. Grant the following privileges to the user in HCL Connections: View C and Create new communities<br> - T is configured to create a community during instantiation with the ibm.portal.instantiation.community.create.new page parameter. Grant the following privileges to the user in HCL Connections: Create new communities<br> - T is enabled for Membership-based access control delegation: `Delegator@USER\_GROUPS`<br> USER\_GROUPS is a virtual resource.|
|Adding a page<br> Creating a page from Template T under any Page P|For private pages: `Privileged User@P` and `User@T`<br>Additional roles can be required based on instantiation features associated to page template T:<br> - T is associated to site area SA1 in Web Content Manager, and the **wps.content.root** label is associated with site area SA2, with default content associations on each site area. Web Content Manager view permissions on SA1 and Web Content Manager create content permissions on SA2.<br> - T is associated to an HCL Connections community C. Grant the following privileges to the user in HCL Connections: View C and Create new communities<br> - T is configured to create a community during instantiation with the ibm.portal.instantiation.community.create.new page parameter. Grant the following privileges to the user in HCL Connections: Create new communities<br> - T is enabled for Membership-based access control delegation: `Delegator@USER\_GROUPS`<br> USER\_GROUPS is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Sensitive operation and description|Required role assignment|
|Adding, viewing, or deleting a vault segment|Management of the Credential Vault through the Credential Vault portlet requires access to an instance of the Credential Vault portlet.|
|Adding a shared administrative credential vault slot (containing a system credential)|Management of the Credential Vault through the Credential Vault portlet requires access to an instance of the Credential Vault portlet.|
|Retrieving the credential from a shared administrative credential vault slot (containing a system credential)|`User@slot` or `User@ADMIN\_SLOTS`|
|Modifying a shared administrative credential vault slot (containing a system credential)|`Editor@slot` or `Editor@ADMIN\_SLOTS`|
|Deleting a shared administrative credential vault slot (containing a system credential)|`Manager@slot` or `Manager@ADMIN\_SLOTS`|
|Adding, viewing, deleting, or editing a non-shared vault slot|Management of the Credential Vault through the Credential Vault portlet requires access to an instance of the Credential Vault portlet.|

!!!note
    `Virtual resource: ADMIN\_SLOTS` is a virtual resource. The permission on this node is propagated to all slots, if it is not blocked by an inheritance or propagation block.

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Adding or deleting portal trace settings|Adding or deleting portal trace setting through the **Enable Tracing** portlet requires access to an instance of the **Enable Tracing** portlet.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Managing event handlers:<br> Creating, modifying, and deleting event handlers|`Security Administrator@Event Handlers`<br> **Virtual resource:** Event Handlers is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Managing clients:<br> Viewing the portlet; deleting, modifying, and adding clients in the Manage Clients portlet|`User@Manage Clients`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a search index|`Editor@PSE\_Sources`<br> **Virtual resource:** PSE\_Sources is a virtual resource.|
|Associating keywords with content items through the Search Center portlet, so that they are promoted to users who search for those keywords.|`Administrator@` for `Search Center Portlet`<br> **Virtual resource:** Search Center Portlet is a virtual resource.|
|Modifying keywords that are associated with content items that exist in the Suggested Links portlet already.|`Administrator@` for `Suggested Links Portlet`<br> **Virtual resource:** Suggested Links Portlet is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating the New Virtual Portal|`Security Administrator@Portal`<br> **Virtual resource:** Portal is a virtual resource.|
|Viewing the Virtual Portal|`Security Administrator@Portal`<br> **Virtual resource:** Portal is a virtual resource.|
|Deleting the Virtual Portal|`Security Administrator@Portal`<br> **Virtual resource:** Portal is a virtual resource.|
|Editing the Virtual Portal|`Security Administrator@Portal`<br> **Virtual resource:** Portal is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Managing Markups:<br> Creating, deleting, or modifying a Markup|`Editor@Markups`<br> **Virtual resource:** Markups is a virtual resource|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a Policy under any Policy|`Editor@Policy` and `User@Business Rules Workspace`<br> **Notes:**<br> - `Contributor@Policy` is the minimum required access permission to create a Policy under any Policy, though it is not recommended. `Editor@Policy` is recommended to create and maintain policies and use the Portal administration utilities.<br> - If a rule must be created or edited during the creation of a Policy, then `Editor@Business Rules Workspace` and `Editor@Policy` is also required.<br> - Business Rules workspace is the root node in the Personalization navigator for Business Rules resources. Set permissions on this node by selecting the workspace node and then choosing **Extra Action** \> **Edit Access** from the menu.|
|Assigning a Business rule to a Policy|`User@Business Rules` and `Editor@Policy`|
|Editing a Policy|`Editor@Policy` and `User@Business Rules`<br> **Note:** If a rule must be created or edited during the creation of a Policy, then `Editor@Business Rules` is also required.|
|Viewing a Policy|`User@Policy` + `User@Business Rules`|
|Importing a new Policy|`Editor@Policy\_Root`<br> **Important:** `Contributor@Policy\_Root` is the minimum required access permission to import a new Policy, however, you must use `Editor@Policy\_Root` to import and maintain policies and use the Portal administration utilities.|
|Deleting a Policy|`Manager@Policy` + `User@Business Rules`<br> **Deleting policies:** When you delete a policy, the associated rule is not deleted.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing current portal settings|`User@Portal Settings`<br> **Virtual resource:** Portal Settings is a virtual resource.|
|Modifying current portal settings|`Editor@Portal Settings`<br> **Virtual resource:** Portal Settings is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing the portlet application definition information for a portlet application PA|`User@PA`|
|Modifying a portlet application includes the following actions:<br> - Adding or removing a locale<br> - Setting default locale<br> - Modifying settings<br> to, from, or of the portlet application PA.|`Editor@PA`|
|Duplicating a portlet application:<br> Creating a portlet application based on an existing portlet application PA|`Editor@Portlet Applications` + `User@PA`<br> **Virtual resource:** Portlet Applications is a virtual resource.|
|Deleting a portlet application and removing all corresponding portlets and portlet entities from all pages within the portal|`Manager@PA`|
|Enabling or disabling a portlet application:<br> Temporarily enabling or disabling the portlet application PA|`Manager@PA`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing an installed portlet:<br> Viewing the portlet definition information of a portlet PO|`User@PO`|
|Modifying an installed portlet includes the following actions:<br> - Adding or removing a locale<br> - Setting default locale<br> - Modifying settings<br> to, from, or of the portlet PO.|For adding or removing locales and setting default locale: `Editor@PO`<br> For modifying settings: `Manager@PO`|
|Duplicating an installed portlet:<br> Creating a new installed portlet based on an existing portlet PO that is part of a portlet application PA.|`Editor@Portlet Applications` + `User@PO` + `User@PA`<br> **Virtual resource:** Portlet Applications is a virtual resource.|
|Deleting an installed portlet PO and removing all corresponding portlet entities from all pages within the portal|`Manager@PO`|
|Enabling or disabling an installed portlet:<br> Temporarily enabling or disabling a portlet PO|`Manager@PO`|
|Providing portlet PO as a WSRP service|`Editor@WSRP Export` and `Editor@PO`<br> **Virtual resource:** WSRP Export is a virtual resource.|
|Withdrawing portlet PO from WSRP service|`Manager@WSRP Export` and `Editor@PO`<br> **Virtual resource:** WSRP Export is a virtual resource.|
|Integrating the portlet of a WSRP Producer PR into the portal|If no portlet application exists for the group of portlets:<br> `Editor@Portlet Applications` and `User@PR`<br> **Virtual resource:** Portlet Applications is a virtual resource.<br> If a Portlet Applications PA exists for the group of portlets:<br> `Editor@PA` and `User@PR`|
|Deleting an integrated WSRP portlet PO contained in the portlet application PA from the portal|If this portlet is the last portlet in Portlet Applications: `Manager@PA`<br> If more than one portlet is in Portlet Applications: `Manager@PO`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing a portlet PO on page P|`User@P` + `User@PO`|
|Configuring an installed portlet:<br> Entering the configure mode of a portlet PO and modifying its configuration|`Manager@PO`|
|Modifying a portlet on a page:<br> Entering the **Edit Shared Settings** mode of a portlet PO on page P and modifying its configuration<br> **Note:** If P is a non-private page and the user has no Editor role for this page, then modifying the configuration of the portlet results in the creation of an implicitly derived copy of page P.|`Editor@P` + `Editor@PO`Or<br> `Privileged User@P` + `Privileged User@PO`|
|Modifying page content:<br> Adding or removing a portlet PO to/from a page P<br> **Note:** If P is a non-private page and the user has no Editor role for this page, then modifying the content of P results in the creation of an implicitly derived copy of page P.|For non-private pages: `Editor@P` + `User@PO`Or<br> For private pages: `Privileged User@P` + `User@PO`|
|Adding web content to a page:<br> Adding a web content viewer portlet PO that is configured to render web content C from site area SA in Web Content Manager. Portlet PO is configured with the option **Create content (based on selection)**, and page P is associated with site area SA.<br> **Note:** If P is a non-private page and the user has no Editor role for this page, then modifying the content of P results in the creation of an implicitly derived copy of page P.|For non-private pages: `Editor@P + User @ PO` + Web Content Manager view permissions on C and Web Content Manager create content permissions on SA.<br> For private pages: `Privileged User@P` + `User@PO` + Web Content Manager view permissions on C and Web Content Manager create content permissions on SA|
|Restricting the content of a page:<br> Adding or removing a portlet from the Allowed Portlet List of a page|`Editor@P` + `User@PO`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Operating with ActionSets or PropertySets for a portlet PO|`User@PO`|
|Creating, updating, or deleting a wire from a portlet PO1 on Page P1 to a portlet PO2 on Page P2|Global wire: `Editor@P1`, `User@PO1`, `Editor@P2`, `User@PO2`<br> Personal wire: `Privileged User@P1`, `User@PO1`, `Privileged User@P2`, `User@PO2`<br> **Important:** To update or delete a personal wire, the user must have the previous role assignments and created the wire that they are updating or deleting.|
|Creating a wire from a portlet PO1 on Page P1 to a portlet PO2 on Page P2|Global wire: `User@P1`, `User@PO1`, `User@P2`, `User@PO2`<br> Personal wire: `Privileged User@P1`, `User@PO1`, `Privileged User@P2`, `User@PO2`<br> **Important:** To create a personal wire, the user must have the previous role assignments and created the wire that they are starting.|
|Viewing a wire from a portlet PO1 on Page P1 to a portlet PO2 on Page P2|Global wire: `User@P1`, `User@PO1`, `User@P2`, `User@PO2`<br> Personal wire: `Privileged User@P1`, `User@PO1`, `Privileged User@P2`, `User@PO2`<br> **Important:** To view a personal wire, the user must have the previous role assignments and created the wire that they are viewing|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a PSE Source:<br> Creating a search collection|`Editor@PSE Sources`<br> **Virtual resource:** PSE Sources is a virtual resource.|
|Viewing a PSE Source:<br> Viewing a search collection SC|`User@SC`|
|Facilitating a PSE Source:<br> Using a search collection SC|`User@SC`|
|Editing a PSE Source:<br> Editing a search collection SC|`Editor@SC`|
|Deleting a PSE Source:<br> Deleting a search collection SC|`Manager@SC`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Viewing community tags and ratings that other users applied.<br> Creating and deleting personal public tags and ratings.<br> Deleting community tags regardless of ownership.|`Manager@Tags` + `Manager@Ratings`<br> **Virtual resource:** Tags and Ratings are virtual resources.|
|Viewing community tags and ratings that other users applied.<br> Creating and deleting personal public tags and ratings.|`Contributor@Tags` + `Contributor@Ratings`|
|Viewing community tags and ratings that other users applied.<br> Creating and deleting personal private tags and ratings.|`Privileged user@Tags` + `Privileged user@Ratings`|
|Viewing community tags and ratings that other users applied.|`User@Tags` + `User@Ratings`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating, viewing, editing, and deleting a Theme, Skin, or Layout Template|`Manager@THEME MANAGEMENT`<br> **Virtual resource:** THEME MANAGEMENT is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Managing unique names:<br> Viewing the portlet; deleting, modifying, and adding unique names in the Unique Names portlet|`Editor@R` + `User@Unique Names`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a URL mapping context UMC|`Editor@URL Mapping Contexts`<br> **Virtual resource:** URL Mapping Contexts is a virtual resource.|
|Traversing a URL mapping context:<br> The ability to traverse a URL mapping context due to a role assignment to some child context of UMC|`User@UMC` or @ some child context of UMC|
|Viewing the definition of a URL mapping context UMC|`User@UMC`|
|Assigning a URL:<br> Creating or editing a mapping between a URL mapping context UMC and a portal resource R|`Editor@UMC` + `User@R`|
|Modifying a URL mapping context:<br> Changing the properties of an existing URL mapping context UMC; for example, editing the label|`Editor@UMC`<br> If Virtual Portal Mapping: `Editor@VP URL Mappings`<br> **Virtual resource:** VP URL Mappings is a virtual resource.|
|Deleting a URL mapping context UMC and all of its child contexts|`Manager@UMC`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a User group within the user registry|`Editor@User Groups`<br> **Virtual resource:** User Groups is a virtual resource.|
|Viewing the User group profile information of a user group UG|`User@UG`|
|Modifying the profile information of a User group UG|`Editor@UG`|
|Adding or removing an existing User U or a User group UG2 to or from an existing User group UG1|`Security Administrator@Users` + `Editor@UG1`<br> **Virtual resource:** Users is a virtual resource.|
|Deleting a user group UG|`Manager@UG`<br> **Deleting the user group:** The owner of the user group can also delete it.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a user in the user registry|`Contributor@User Self Enrollment` or `Editor@Users`<br> `Contributor@User Self Enrollment` allows the user to add new users. You can modify other existing users with `Editor@Users`<br> **Virtual resource:** User Self Enrollment is a virtual resource. Users is also a virtual resource.|
|Viewing the user profile information of a user U|`User@UG` and U is a member of user group UG or `User@Users`<br> **Virtual resource:** Users is a virtual resource|
|Modifying the profile information of a user U|`Editor@UG` and U is a member of user group UG or `Editor@Users`<br> **Virtual resource:** Users is a virtual resource.|
|Deleting a user from the user registry and deleting all private pages that are created by this user|`Manager@Users`<br> **Virtual resource:** Users is a virtual resource.|
|Impersonating a user to troubleshoot problems and view pages, portlets, and other portal components.|`Can Run As User@Users`<br> **Restriction:** To use the **Can Run As User** role, you must enable the impersonation feature and assign the **Can Run As User** role to an appropriate user.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating a user in the user registry|`Editor@User Self Enrollment`<br> **Virtual resource:** User Self Enrollment is a virtual resource.|
|Viewing the user profile information of a user U|`User@UG` and U is a member of user group UG or `User@Users`<br> **Virtual resource:** Users is a virtual resource.|
|Modifying the profile information of a user U|`Editor@UG` and U is a member of user group UG or `Editor@Users`<br> **Virtual resource:** Users is a virtual resource.|
|Deleting a user from the user registry and deleting all private pages that are created by this user|`Manager@Users`<br> **Virtual resource:** Users is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating new clippings|`Editor@Portlet Applications`<br> **Virtual resource:** Portlet Applications is a virtual resource.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Installing a new portlet application WAR file|`Editor@Web Modules`<br> **Virtual resource:** Web Modules is a virtual resource.|
|Updating a web module WM by installing a corresponding WAR file|`Editor@Web Modules` + `Manager@WM`|
|Uninstalling a web module and removing all corresponding portlet applications and portlets from all pages within the portal|`Manager@WM` + Manager @ all portlet applications that are contained in WM|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Adding a remote WSRP Producer PR to the Portal|`Editor@WSRP Producers`<br> **Virtual resource:** WSRP Producers is a virtual resource.|
|Editing the settings of a remote Producer PR|`Editor@PR`|
|Viewing the settings or display the list of portlets that are provided by a remote WSRP Producer PR|`User@PR`|
|Deleting a remote WSRP Producer from the portal|`Manager@PR`|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Running commands with the XML configuration interface|`Security Administrator@Portal` + `Editor@XML Access`<br> **Virtual resources:** Portal and XML Access are virtual resources.|

|Sensitive operation and description|Required role assignment|
|-----------------------------------|------------------------|
|Creating, modifying, or deleting a vanity URL that points to page P|`Editor@P` and `Editor@VANITY_URL`<br> **Virtual resources:** VANITY\_URL is a virtual resource.|

!!!note
    If a user deletes a page, all vanity URLs that point to that page are also deleted, independent of the rights that the user has on the virtual resource VANITY\_URL.

## Overlay reports and site promotions

|Resource|Sensitive operation and description|Required role assignment|
|--------|-----------------------------------|------------------------|
|Overlay reports|Can view overlay reports on a resource.|`User@OverlayReports` + `User@Resource`<br>**Note:** `OVERLAY_REPORTS` is a virtual resource.|
|Overlay reports|Can view all existing site promotions.|`User@SitePromotions`<br> **Note:** `SITE_PROMOTIONS` is a virtual resource.|
|Overlay reports|Can create a site promotion.|`Editor@SitePromotions`|
|Overlay reports|Can update an existing site promotion.|`Editor@SitePromotions`|
|Overlay reports|Can delete a site promotion.|`Editor@SitePromotions`|
|Overlay reports|Can add a site promotion assignment on specific resource.|`Editor@SitePromotions` + `User@Resource`|
|Overlay reports|Can view a site promotion assignment on specific resource.|`User@SitePromotions` + `User@Resource`|
|Site promotions|Can remove a site promotion assignment on specific resource.|`Editor@SitePromotions` + `User@Resource`|

## Role Mappings and WSRP services

On the WSRP producer side, you can set the configuration property wsrp.security.enabled to enforce the access control decision for the provided portlets. If this property value is set to true, then all access control decisions in the producing portal are based on the authenticated principal. If wsrp.security.enabled is set to false, then the producing portal does not enforce any access control on incoming client portal WSRP requests.

When you use identity propagation, the user who is authenticated on the client portal needs to have the required role assignments. If no identity propagation is configured, but SSL client certificate authentication is enabled, then the ID of the certificate needs to have the required role assignments. If no authentication method is used, then the request is treated as if it comes from the Anonymous Portal Users. In the latter case, the required roles need to be assigned to the Anonymous Portal User. This assignment implies allowing unauthenticated access to the corresponding resources for all users who can access the producer portal.


???+ info "Related information"
    - [Securing a WSRP Producer portal](../../../../../../../extend_dx/portlets_development/usage/wsrp/configuration/portal_wsrp_producer/securing_wsrp_prod_portal/wsrpt_prod_prep_sec.md)
    - [Configuring security on the Consumer portal](../../../../../../../extend_dx/portlets_development/usage/wsrp/configuration/portal_wsrp_consumer/cfg_security_consumer_portal/wsrpt_cons_prep_sec.md)
    - [Configuring Portal Access Control for a WSRP Producer portal](../../../../../../../extend_dx/portlets_development/usage/wsrp/configuration/portal_wsrp_producer/securing_wsrp_prod_portal/wsrpt_prod_sec_pac.md)
    - [Adapting the list of required runtime configuration changes for your theme](../../../../../../../build_sites/themes_skins/developing_theme/dev_op_overview/manual_packaging_themes/themeopt_move_repack_runtime.md)
    - [Viewing and creating vanity URLs](../../../../../../../manage_content/wcm_delivery/vanity_url/van_url_create.md)
    - [Human readable URL mappings for virtual portals](../../../../../../../build_sites/virtual_portal/vp_planning/shape_vp_ux/advppln_shpux_urlmap.md)
    - [Managing community associations](../../../../../../../extend_dx/integration/connections/configuration/managing_community_pages/commpages_create_mapping.md)
    - [Security for tagging and rating](../../../../../../../build_sites/tagging_rating/tag_rate_secy.md)

