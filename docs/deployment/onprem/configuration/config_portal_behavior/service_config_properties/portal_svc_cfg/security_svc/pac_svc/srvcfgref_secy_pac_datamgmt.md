# Access Control Data Management Service

The Access Control Data Management Service contains the configuration properties for Portal Access Control. The domain short names have to correspond to the domain names that are defined for the portal Data Store Service.

In the WebSphere® Integrated Solutions Console, the portal Access Control Data Management Service is listed as **WP AccessControlDataManagementService**.

The following set of properties is mandatory for each database domain that contains resources that need to be protected by Portal Access Control:

-   **accessControlDataManagement.domain.domain\_short\_name.adminuser = full distinguished name of the administrative user for this domain**

    Use this property to define the administrative user. As the value specify a full distinguished name that corresponds to a valid entry in the associated user repository. This property is mandatory.

-   **accessControlDataManagement.domain.domain\_short\_name.admingroup = full distinguished name of the administrative group for this domain**

    Use this property to define the administrative group. As the value specify a full distinguished name that corresponds to a valid entry in the associated user repository. This property is mandatory.

-   **accessControlDataManagement.domain.domain\_short\_name.virtualresource = name of the virtual root resource of this domain**

    This property specifies the virtual root resource. The value is the name of a virtual resource that actually exists in the domain and represents the root of the protected resource hierarchy in this domain. This property is meant for internal use only; do not change its value.


The administrative user and group are granted administrator roles on the full hierarchy of protected resources starting from the virtual root resource of the domain defined with the third setting. These roles are granted in addition to the portal roles of the user or group and therefore not displayed in the Access Control portlets. A valid set of values to these properties could for example look like the following:

```
accessControlDataManagement.domain.rel.adminuser=uid=Bob,o=Your Company
accessControlDataManagement.domain.rel.admingroup=cn=Admins,o=Your Company
accessControlDataManagement.domain.rel.virtualresource=PORTAL
accessControlDataManagement.domain.cust.adminuser=uid=Bob,o=Your Company
accessControlDataManagement.domain.cust.admingroup=cn=Admins,o=Your Company
accessControlDataManagement.domain.cust.virtualresource=PORTAL
accessControlDataManagement.domain.comm.adminuser=uid=Bob,o=Your Company
accessControlDataManagement.domain.comm.admingroup=cn=Admins,o=Your Company
accessControlDataManagement.domain.comm.virtualresource=PORTAL
accessControlDataManagement.domain.jcr.adminuser=uid=Bob,o=Your Company
accessControlDataManagement.domain.jcr.admingroup=cn=Admins,o=Your Company
accessControlDataManagement.domain.jcr.virtualresource=PORTAL

```

The following additional properties of the Access Control Data Management Service are optional:

-   **accessControlDataManagement.enableNestedGroups = \(true\)**

    Use this setting to determine whether the group membership of groups is exploited at all by the Portal Access Control component. Supported values are: true and false. The default is true.

-   **accessControlDataManagement.enableTargetResourceGroupInheritance = \(false\)**

    Use this setting to determine whether the group membership of groups is exploited by the Portal Access Control component for permission enforcement on users or groups. If you specify false, you can only get permissions on user groups via roles on the groups and on users via roles on the direct groups of which the user is a member. Supported values are: true and false. The default is false.

-   **accessControlDataManagement.reorderRoleNames = \(false\)**

    Use this setting to determine whether the role name contains the unique name or the title of the resource on which the role was created. Specify true when you use an external authorization provider, such as IBM® Security Access Manager, as this makes it easier to find the role names. Supported values are: true and false. The default is false.

-   **accessControlDataManagement.externalizeAllRoles = \(false\)**

    This property is only applicable for externalization of resources through the user interface. the default value is `false`. If the property is set to `false` and a resource is externalized, then the following things happen:

    1.  The resource and all descendants of this resource that are not private and not externalized so far are externalized.
    2.  The roles and role mappings that exist on all resources that were identified in the previous step 1 are written into the external security manager object space.
    3.  For the root resource that was chosen to be externalized, a role mapping for the Administrator role for the executing user is created in the external security manager object space.
    If this property is set to `true`, then in addition to the previous three steps, roles are created in the external security manager object space for all action sets for the root resource that have not already been created in steps 2 and 3.

-   **accessControlDataManagement.createAdminMappingXMLAccess = \(true\)**

    This property is only applicable for externalization of resources through the XML Configuration Interface. If the property is set to false and a resource is externalized the following happens:

    1.  The resource will be externalized.
    2.  The roles and role mappings on the resource are written into the external security manager object space.
    If the property is set to `true`, then in addition to the two previous steps, a role mapping for the Administrator role is created for the executing user in the external security manager object space.


## Connecting to the user repository during startup

If you want the portal to wait and retry connecting to the underlying user repository, and if it is not available during portal startup, change the following two properties. This might be necessary in scenarios where the user repository is only available in a certain time frame after the initialization of the portal startup. As the domain administrative users and groups have to be resolved, the portal cannot start without connecting to the user repository. The service startup performs the specified number of attempts to connect to the user repository, each time waiting for the specified time interval before starting the next attempt. If none of the attempts is successful, the service startup quits with an exception.

-   **accessControlDataManagement.ldapFailoverNumberOfAttempts = \( 1 \)**

    Use this property to specify how many times the service startup attempts to connect to the user repository. The default is `1` \(once\).

-   **accessControlDataManagement.ldapFailoverInterval = \( 60 \)**

    Use this property to specify how long the service startup waits until it retries to connect to the user repository. This value is specified in seconds. The default is `60` seconds.


**Parent topic:**[Portal Access Control Services](../admin-system/srvcfgref_secy_pac.md)

