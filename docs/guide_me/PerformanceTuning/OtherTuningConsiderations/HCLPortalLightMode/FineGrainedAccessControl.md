# Fine Grained Access Control

By default, Portal applies access control for user and group lookups. For a user to retrieve this type of information, they would typically need access to a portlet, such as the out-of-the-box Users and Groups admin portlet, which makes PUMA API calls to look up user and group information. Second, they would require access rights, the User role or higher, on the users and groups they will retrieve. In other words,
Portal Access Control (PAC) is doing filtering based on access control over the individual users and groups, in addition to the access for the portlet.

This fine-grained access control may not be necessary in every customer's case, and it has a performance cost associated with it. If your access-control use cases are such that you do not require this fine-grained access control over the users and groups, then you can turn off the fine-grained access control checks, and get a performance benefit. **However, you need be aware of the resulting exposure of user and group information if you turn off the fine-grained access control checks.**

There are 2 access paths through Portal to the user and group information: Via the Users and Groups administration portlet, and via the PUMA REST remote API interface. (Technically there is also a 3rd and 4th, via custom code written and deployed on your Portal instance that uses the PUMA API or directly written to the VMM API. We will ignore those possibilities, which involve the development and deployment
of custom code, for this discussion).

In the case of a portlet, the access to the portlet acts as a 'gatekeeper' from an access control perspective, for the user and group information. In order to access the portlet, the user has to have sufficient permissions. A portlet that uses the AdminPumaHome API can get a performance benefit from turning off the fine-grained access checks described here, and the security model is then that access to the portlet
implies access to any and all user and group information.

In the case of JavaScript that accesses the PUMA REST service, there is no gatekeeper. In that case it is only safe to disable the fine-grained access checks if it is acceptable for the PUMA REST service to provide access to all users and groups to anyone able to make such a REST service call.

To turn off these fine-grained access control checks, the `store.puma_default.disableACforRead property` needs to be set to `true`.

## How to Set

In the Integrated Solutions Console

Resources -> Resource Environment -> Resource Environment Providers -> WP PumaStoreService -> Custom Properties -> New
Name: `store.puma_default.disableACforRead`
Value: `true`