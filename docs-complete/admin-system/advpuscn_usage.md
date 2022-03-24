# Usage scenarios for virtual portals 

Learn about three typical usage scenarios for virtual portals.

## Scenario 1: Multi-Portal Enterprise

In this scenario a single enterprise operates multiple different virtual portals on a single portal installation. The virtual portals are used for different parts of the organization, such as the following:

-   Development, production, and marketing
-   Organizations or branches in different locations and foreign countries
-   Affiliate or franchise business models
-   Different branding.

These are some of the typical business requirements:

-   The portal installation as a whole is operated by the company, as the different parts of the organization are too small to have their own IT staff.
-   A common group of administrators is responsible for the administration of all the virtual portals in the installation.
-   Each part of the organization wants their own individually customized virtual portal.
-   Many applications are commonly used by the different parts of the company, and they are shared between the virtual portals.
-   All portal users are contained in the company user directory.
-   The portal installation might typically have between ten and thirty virtual portals.

As many resources are commonly used by all sections of the company, sharing these resources has large benefits, and the resulting dependencies are acceptable for the enterprise. In this case, using virtual portals is the appropriate option, as it reduces the amount of resources required for the administration of the portal. For the requirements of this scenario, you can select one or both of the following options:

-   As the sections of the company are too small to each have their own administrative staff, you can use a shared group of administrative users.
-   To allow all members of the company to access all virtual portals, a shared user population is a suitable approach. Nevertheless, you can reduce the availability of specific resources to specific user groups by assigning access rights accordingly.

## Scenario 2: Workgroup Service Provider

In this scenario one central organization provides virtual portals for a large number of small, decentralized, and independent teams. For example, this can be teamrooms for project management in small work units. This scenario supports virtual portals for different parts of the organization as follows:

-   It supports a large number of individual virtual portals on a single portal installation. This can be more than a hundred virtual portals.
-   The individual logical Portals are intended for small user groups, projects or departments.
-   The owning enterprise operates this installation like an IT service provider.
-   It is important that virtual portal administrators can create additional virtual portals with predefined default content fast, easily, and on demand. These can be based on a customized virtual portal template.
-   Sharing content and applications is a very important aspect in this scenario.
-   Administration of each virtual portal and its users and resources is independent and self-contained.

## Scenario 3: Hosted Enterprises

In this scenario a service provider hosts and operates independent enterprises on the same portal installation. For example, this scenario can support virtual portals for different tenants or service customers, such as:

-   A service provider who supports services for small businesses of the same type.
-   A provider who offers services for medical doctor practices.
-   A central banking service provider who offers services to different branches of banks.

The business requirements for this scenario include the following:

-   Most applications are shared between the tenants.
-   The tenants need to be able to administer their virtual portals themselves. If the critical business data of the tenant is stored in the back end of the tenant system, and not in the shared database of the virtual portals, sharing of other portal resources, such as JVM and database is acceptable for the tenants.
-   The portal installation might typically have between ten and thirty virtual portals.
-   Each tenant portal has its own user directory.
-   The content shown to users in the portlets are maintained in the back ends of the tenant companies themselves. For example, this is the case in a service portal with separate virtual portals for individual banks.

Based on these business requirements, you can select one or more of the following options:

-   Each virtual portal has its own groups of administrators. The administrators of one virtual portal manage the rights of the users in that virtual portal.
-   As the tenants each have their own user repository, they can set up their virtual portal with their own realm. This provides strong separation between the users in the different virtual portals. If individual users need to access more than one of these virtual portals, they need a user ID for each virtual portal that they access.
-   You can circumvent the dependency on a common maintenance window by setting up two sets of virtual portals: while one is used for production and carries the user load, the other one is free for maintenance. This also gives the required high availability.

You need to set up the configuration required for such a scenario carefully. As an alternative for this scenario, you can consider using separate portal installations rather than virtual portals. This can be the easier solution especially if you provide service for a small number of large tenants.

**Parent topic:**[Deciding about virtual portals ](../admin-system/advpuscn.md)

**Related information**  


[Separating and sharing resources between virtual portals](../admin-system/advppln_scope.md)

[Managing the user population for virtual portals](../admin-system/advppln_mgupop.md)

