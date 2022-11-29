# Advanced group configurations

It is possible to use HCL Digital Experience ConfigEngine helper tasks to set up advanced Virtual Member Manager \(VMM\) group configurations. Specifically, it is possible to configure VMM to understand and use the "Group membership attribute" that many directories support.

## Background: Group membership attribute

A group membership attribute is an LDAP directory feature. It allows an LDAP client to ask the LDAP directory for a list of groups that the user is a member of. It is as if the list is an attribute of the user object. It does not query the various groups to see whether a user is a member of any of them.

It is beyond the scope of this document to describe in detail all the various ways that different LDAP directory servers support a group membership attribute. Most LDAP directories have some variant of this support: Active Directory has the memberOf attribute. Sun/Oracle has nsroles or isMemberOf based on the version. IBM® Directory Server has the ibm-allGroups attribute.

Many LDAP directories support complex group membership algorithms that include nesting of groups as members within other groups. They also support the use of dynamic group membership by querying against user attributes, instead of static lists of members. While VMM supports these features, in many cases it requires multiple operations between VMM and the directory to do so and thus becomes inefficient and a performance bottleneck. The use of the group membership attribute shifts the burden of the calculations of these complex group structures to the directory itself, where it can be managed much more efficiently.

If your LDAP directory supports a group membership attribute and your use cases include group nesting or the use of dynamic groups, configure VMM to use the group membership attribute. Most LDAP directories implement this group membership attribute as a "real-time" attribute. It is calculated on demand rather than pre-calculated and stored as a persistent attribute of the user. There is likely extra processor cost on the LDAP directory for using this support. Usually this processor cost is worth the performance benefit that can be gained from offloading the work of resolving complex group relationships from VMM.

## Configuring VMM to use the group membership attribute

To configure VMM to use the group membership attribute, two things must be specified:

-   The name of the group membership attribute
-   The scope of the attribute. This information tells VMM how complete the response is to a request for the group membership attribute value for a user.

The name is the attribute name in the LDAP directory implementation. For example, this attribute is ibm-allGroups for the IBM Directory Server. This attribute is set on the federated.ldap.gc.name property in the wkplc.properties file.

The scope is set on the federated.ldap.gc.scope property and is one of three possible values: direct, nested, or all. The setting for this property depends on how your LDAP directory implements the group membership attribute.

-   **direct**

    Direct means that the value returned holds only the list of static groups of which the user is a direct member. It does not attempt to account for group nesting or dynamic group memberships. The response here is functionally equivalent, for example, to a query of the form `(&(objectClass=groupOfNames)(member=<dn of the user>))`. In this case, there is little if any reason to prefer the group membership attribute over the traditional query.

    **Note:** When the group membership attribute scope is direct or when you use the traditional query method, VMM must do extra work if it needs to resolve nested groups or dynamic groups.

    -   VMM tries to resolve dynamic groups if the dynamic group configuration information is set up within the VMM configuration files.
    -   VMM tries to resolve nested groups if the client application, which is HCL Portal, requests it to. By default, HCL Portal requests that nested groups are used. If your access control models do not use group nesting to inherit permissions, turn off the nested group function within portal. Read the documentation for the enableNestedGroups custom property within the **WP AccessControlDataManagementService** Resource Environment Provider.

        **Note:** To avoid conflicts between how HCL Portal and WebSphere® Application Server handle nested groups, globally turn off nested groups. Change the com.ibm.ws.wim.registry.grouplevel value to 1. Go to [Disabling nested group searches](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.wim.doc/disablingnestedgroupsearches.html) for instructions.

-   **nested**

    Nested means that the response from the LDAP server to a request for the group membership attribute already includes any nested group relationships, but not any dynamic group memberships. If the user is a member of group "A2" and "A2" is a member of group "A1", then the list of group memberships includes both A1 and A2. This information tells VMM that even if a client requests nested group information, the response already provides it. No further work needs to be done by VMM to satisfy the request.

-   **all**

    All means that the response from the LDAP server to a request for the group membership attribute already includes both nested groups and also dynamic groups, if any.


It is important to set the scope value to accurately reflect how your LDAP directory works to get correct and efficient operation. It is beyond the scope of this documentation to describe the unique characteristics of every directory. In some cases, the directory might require specific setup to fully support the advanced group features. For example, the IBM Directory Server must be set up with specific auxiliary object classes and special membership records to fully support nested groups and dynamic groups with the ibm-allGroups attribute. Consult your specific LDAP directory documentation or check with your LDAP administrator for specific details about your directory deployment.

## ConfigEngine tasks for advanced group configuration

Set the federated.ldap.gc.name and federated.ldap.gc.scope properties before you run one of the following tasks:

-   wp-create-ldap
-   wp-create-ldap-groupconfig

-   **[Updating the group membership configuration](../adv_grps_cfg/groupconfig.md)**  
The initial federated repositories setup might not include the advanced set up for the group membership attribute. You can configure the group membership attribute after the initial setup. Specify the properties in the wkplc.properties file and then run the wp-create-ldap-groupconfig task manually.
-   **[Configuring HCL Portal to use dynamic groups](../adv_grps_cfg/ldap_dyngrp.md)**  
By default, HCL Digital Experience is enabled for static groups. However, the Virtual Member Manager \(VMM\) allows users to be members of either static or dynamic groups. Static groups have a persistent binding between a group and its members. Dynamic groups have a search query that is defined to retrieve the members of a group.


