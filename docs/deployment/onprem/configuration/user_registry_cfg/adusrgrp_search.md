# Setting limits on searches for users and groups

Searching for users or groups is a time consuming task. A search may time out or return more results than the system can handle or the user may expect. To prevent this behavior, you can set limits on searches for users or groups.

You can limit searches for users or groups in two ways:

-   Setting a number of search results
-   Setting a timeout for searches in the user repository

Set the maxSearchResults and searchTimeOut parameters in the following file:

|Operating system|Directory path|
|----------------|--------------|
|Windows™:|[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\config\\cells\\cell\_name\\wim\\config\\wimconfig.xml|
|UNIX™Linux™:|[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/cell\_name/wim/config/wimconfig.xml|
|IBM® i:|[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/profiles/config/cells/cell\_name/wim/config/wimconfig.xml|
|z/OS®:|[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/cell\_name/wim/config/wimconfig.xml|

The maxSearchResults parameter specifies the number of search results. The searchTimeOut parameter specifies the time out in milliseconds.

If you set maxSearchResults=200 and searchTimeOut=120000, it returns a number of 200 users or groups and terminates the search if the back end does not respond within two minutes. These settings affect the user or groups shown in portlets \(for example the **User Manager** portlet\) and XML export scripts.

If not all search results are returned, and you are using an LDAP server as the user repository, a SizeLimitException can be thrown instead of returning the items. The search result can exceed the limit defined in LDAP. Perform one of the following actions:

-   Refine your search conditions to return fewer results.
-   Change the setting in LDAP to allow a larger search size limit.

**Important:** If your user repository contains more users or groups than the value configured in maxSearchResults, a complete export of users and groups with XML access is not possible.

**Parent topic:**[User registry](../config/config_user_registry.md)

