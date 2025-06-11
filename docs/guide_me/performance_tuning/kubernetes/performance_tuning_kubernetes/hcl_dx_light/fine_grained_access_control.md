# Fine Grained Access Control

By default, Portal applies access control for user and group lookups. For a user to retrieve this type of information, they would typically need access to a portlet, such as the out-of-the-box Users and Groups admin portlet, which makes PUMA API calls to look up user and group information. Second, they would require access rights, the User role or higher, on the users and groups they will retrieve. In other words, Portal Access Control (PAC) is doing filtering based on access control over the individual users and groups, in addition to the access for the portlet.

This fine-grained access control may not be necessary in every customer's case, and it has a performance cost associated with it. If your access-control use cases are such that you do not require this fine-grained access control over the users and groups, then you can turn off the fine-grained access control checks, and get a performance benefit. However, you need to be aware of the resulting exposure of user and group information if you turn off the fine-grained access control checks.

Accessing User and Group Information in Portal
There are two main access paths through Portal to retrieve user and group information:

 - **Users and Groups Administration Portlet**
This is the standard UI-based access method within the Portal interface.

 - **PUMA REST Remote API Interface**
A programmatic access method that allows external systems to interact with Portal user and group data via RESTful APIs.

!!! note "Other Access Methods"
    Technically, there are  a third and fourth access path:


  - Custom code using the **PUMA API**
  - Custom code interfacing directly with the **VMM API**





These methods involve the development and deployment of custom code on your Portal instance. For the purpose of this discussion, we will ignore these options.

For a portlet, access acts as a 'gatekeeper' from an access control perspective, controlling access to user and group information. To access the portlet, the user must have sufficient permissions. A portlet using the `AdminPumaHome` API can gain performance benefits by disabling the fine-grained access checks described here. The security model then implies that access to the portlet grants access to all user and group information.
In the case of JavaScript that accesses the PUMA REST service, there is no gatekeeper. In that case, it is only safe to disable the fine-grained access checks if the PUMA REST service providing access to all users and groups is acceptable to anyone making such a REST service call.
**Disabling Fine-Grained Access Checks**

To disable these checks, set the following property:

1.  In the Integrated Solutions Console, navigate to:
    **Resources > Resource Environment > Resource Environment Providers > WP PumaStoreService > Custom Properties**.
2.  Click **New** to create a new custom property.
    * **Name:** `store.puma_default.disableACforRead`
    * **Value:** `true`
3.  Save your changes and restart the server (if required by your environment).
!!! Danger "Use with Caution"
    Disabling access control checks is a critical security decision. Ensure this configuration is appropriate for your environment before applying it.

