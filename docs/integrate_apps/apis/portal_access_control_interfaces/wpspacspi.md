# Portal Access Control SPI

The Portal Access Control \(PAC\) System Programming Interface \(SPI\) lets you directly retrieve and modify access control information for portal resources.

You can retrieve the following main service interfaces through the `AccessControlHome` interface.

You can use the **runtime model** of Portal Access Control to evaluate whether a user is allowed to perform a specific operation. For example, you can evaluate whether the user who triggered the request is allowed to do that.

-   **com.ibm.portal.ac.AccessControlHome**

    Portal Access Control provides interfaces for retrieving and modifying and access control information of portal resources, such as portlets or pages.


-   **com.ibm.portal.ac.AccessControlGlobalRuntimeModel**

    The AccessControlGlobalRuntimeModel provides read access to the current access control permissions on a resource that is registered at Portal Access Control.

-   **com.ibm.portal.ac.AccessControlRuntimeModel**

    The AccessControlRuntimeModel provides read access to the current access control permissions on one specific resource.


You can use the **configuration model** to retrieve the hierarchy of protected resources, and also to retrieve and modify role assignments and configuration data such as role blocks.

-   **com.ibm.portal.ac.AccessControlEnvironment**

    The AccessControlEnvironment provides some general information about the access control configuration, for example the available role types.

-   **com.ibm.portal.ac.ManagedProtectedResource**

    The ManagedProtectedResource provides read access to the access control configuration of a resource that is registered at Portal Access Control.

-   **com.ibm.portal.ac.ManagedProtectedResourceController**

    The ManagedProtectedResourceController provides write access to the access control configuration of a resource that is registered at Portal Access Control.

-   **com.ibm.portal.ac.RoleData**

    The RoleData provides read access to the role data of a single resource, such as role assignments.

    **Note:** For performance reasons, make requests of the form "Is user x allowed to perform operation y on resource z ?" by using AccessControlRuntimeModel or AccessControlGlobalRuntimeModel, rather than by asking for explicit role assignments using the RoleData interface.

-   **com.ibm.portal.ac.RoleDataController**

    The RoleDataController provides write access to the role data of a single resource, such as role assignments.

-   **com.ibm.portal.ac.ManagedProtectedResourceModel**

    The ManagedProtectedResource represents the hierarchical tree model of protected resources per database domain.


Examples of how these interfaces are used are provided in the accompanying Javadoc. The following example shows how to evaluate if a principal has view permissions on a resource:

```
Identifiable resource = ... ; // some resource, for example a portlet
Principal bob = ... ; // some principal, for example Bob
Context ctx = new InitialContext();
AccessControlHome home = (AccessControlHome) ctx.lookup(AccessControlHome.JNDI_NAME);
AccessControlEnvironment environment = home.getAccessControlEnvironment();
Permission permission = environment.getPermission(resource, RoleType.USER);
AccessControlGlobalRuntimeModel globalModel = home.getAccessControlGlobalRuntimeModel();
isAllowed = globalModel.hasPermission(bob, permission); 
```


