# Separating and sharing resources between virtual portals

Separation between virtual portals is achieved by scoping the portal resources of the virtual portals. Scoping means making portal resources available uniquely and separately to individual virtual portals and their users.

Scoping of resources works as follows:

-   A portal resource that is scoped for virtual portals exists individually for each virtual portal. It has an identification that is unique within the entire portal installation. The resource is available only in one particular virtual portal. Consequently, you can customize such resources for each virtual portal independently. Example: The resource resource\_A is scoped for the virtual portals VP\_1, VP\_2, and VP\_3 as resource\_A\_VP\_1, resource\_A\_VP\_2, and resource\_A\_VP\_3. Customizing resource\_A\_VP\_1 does not affect resource\_A\_VP\_2 or resource\_A\_VP\_3.
-   A portal resource that is not scoped for virtual portals is shared between all virtual portals. Consequently, if you customize this resource, this will affect that resource in all virtual portals equally.

Scoping works for some portal resources, but not for others:

-   HCL Portal scopes some portal resources for virtual portals. This means that these resources exist separately for each virtual portal.
-   Other resources are common for all virtual portals in a portal installation. However, you can scope some of these resources:
    -   You can scope some resources by using portal administration and Portal Access Control.
    -   There are some portal resources that cannot be scoped at all.

-   The user population can be scoped to one or more specific virtual portals.

The differences in scoping portal resources are described in the following sections.

## Portal resources that are scoped for virtual portals

HCL Portal has the following portal resources scoped internally for virtual portals:

-   Portal pages
-   Portlet instances
-   Portal Search Engine search services and search collections. This includes the search content sources.
-   HCL Web Content Manager web content libraries. See the note later in this section.

Scoping of these resources is managed by internal portal mechanisms. Scoped resources are only available for the virtual portal for which they are defined. They are well isolated from other virtual portals. Scoped resources cannot be shared with other virtual portals. They are not visible or accessible outside of the virtual portal for which they have been created. This behavior cannot be changed by any portal access control settings.

The following rules apply:

-   Within each virtual portal you or a sub-administrator can use Portal Access Control to grant individual users of that virtual portal specific access permissions to the scoped portal resources. This works just like under a single portal installation.
-   An administrator can give access permissions to users who are members of the user population of a virtual portal only on the scoped resources of that same virtual portal. This implies that, vice versa, you can give access permissions on the resources of a virtual portal only to those users who are members of the user population of that virtual portal.
-   Users can only use these access permissions when they access the specific virtual portal under which they have the access permissions on the scoped resources. The same users cannot access the resources when logging in to a different virtual portal.

**Note for HCL Web Content Manager web content libraries:** HCL Web Content Manager web content libraries are scoped to virtual portals if Managed Pages are enabled as by the default HCL Portal installation. If you want to make HCL Web Content Manager web content libraries available between your virtual portals, you can do so by disabling Managed Pages and restarting your portal. HCL Web Content Manager web content libraries of the base portal are then also available to the virtual portals.

## Portal resources that you can separate for virtual portals by using Portal Access Control

There are some portal resources that are not scoped internally for a particular virtual portal. These resources are shared among all virtual portals of the entire installation. However, as a master administrator you can yourself separate such portal resources for the virtual portals. To do this, use Portal Access Control and the access permissions portlets to set up the appropriate access permissions for users on the resources of each virtual portal as required.

You can separate the following portal resources by using Portal Access Control to give users of an individual virtual portal access permission to the resources:

-   Portlets
-   Portlet applications
-   Web modules
-   URL mapping contexts
-   Users and groups.

You can separate these resources for individual virtual portals by using Portal Access Control. When you do this, apply special care. It can be of benefit to document the relationships between the users and the virtual portals.

## Portal resources that cannot be separated for virtual portals

There are some types of portal resources that are not scoped to a particular virtual portal, and you cannot separate them yourself by using Portal Access Control. The following list shows portal resources that you cannot separate for virtual portals:

-   **Themes and skins**

    If you do not want sub-administrators to be able to manage themes and skins, restrict their access permissions on them.

-   **Vault segments and vault slots**

    To avoid security problems, use private credentials only. They can be used by only one specific user.

-   **Supported clients and markups**

    The settings for these are configured in the corresponding portlets; therefore they apply to the entire portal installation.

-   **Policies**

    Policy resources are not scoped to virtual portals. Users see the policy resources to which they have access, regardless of the virtual portal assignments.

-   **Personalization**

    Personalization is not aware of virtual portals. A document library that is available in the initial portal installation is also available in each virtual portal, if Personalization is available in that virtual portal and is configured to use that document library. Searching for a document in a document library will produce a document reference \(URL\) that is different in each virtual portal, but points to the same document in the document library. To provide separation of content within virtual portals, use separate document libraries for each virtual portal. To provide content collaboration between virtual portals, use the same document libraries between virtual portals.


Example: Themes and skins can be accessed by all sub-administrators who have the access permission to apply themes and skins to the pages that they can administer, regardless of which virtual portal the sub-administrators are responsible for.

## Separating portlets, portlet applications, and portlet instances

Portlet applications are not scoped for virtual portals. Therefore, the configuration settings that you set for a portlet application by using the Manage Applications portlet apply to that portlet application in all virtual portals. If you need different configurations for a portlet application between virtual portals, create a copy of the portlet application, and configure the copied portlet application as required.

Portlets are separate portal resources, but they are not scoped for each separate virtual portal. However, each portlet in a virtual portal shares its portlet application on the initial portal installation with its siblings on the other virtual portals. Therefore the following configuration settings set for a portlet apply to that portlet in all virtual portals:

-   The configuration settings that you set for a portlet by using the Manage Portlets portlet
-   The configuration settings that you set for a portlet by using the **Configure** mode of the portlet.

Portlet instances are scoped to the virtual portals. If you need different configurations for a portlet between virtual portals, create a copy of the portlet, and configure the copied portlet as required. The configuration settings that you set for a portlet by using the **Personalize** or **Edit shared settings** mode of the portlet apply only to that individual portlet instance on that individual page.

## Special case: Scoping unique names

Unique names that you apply to portal resources represent a special case with regards to scoping. Unique names are attributes to portal resources. Therefore, whether a unique name is scoped to a virtual portal or not is determined by whether the portal resource to which the unique name applies is scoped or not:

-   Unique names for scoped portal resources are themselves also scoped.
-   Unique names for resources that are not scoped are themselves not scoped.

Example for a scoped unique name: Each virtual portal has its own separate login page. Therefore you can assign the same identical unique name to all login pages for all virtual portals. The unique name that you give to the login page of a specific virtual portal applies only within that portal. It cannot be administered in a different virtual portal that has the same unique name for its login page.

Example for a unique name that is not scoped: Portlet applications are not scoped but shared between all virtual portals. You can assign a unique name to the portlet application. You can reference that portlet application by that unique name throughout the portal installation with all virtual portals.

<!--
**Related information**  


[Deciding about virtual portals](../admin-system/advpuscn.md)

[Scenarios with multiple portals for your business requirements](../admin-system/advpuscn_pln.md)

[Usage scenarios for virtual portals](../admin-system/advpuscn_usage.md)

[Administering virtual portals](../admin-system/advp_adm.md) -->

