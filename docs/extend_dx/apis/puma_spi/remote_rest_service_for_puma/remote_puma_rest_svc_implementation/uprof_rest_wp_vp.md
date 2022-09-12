# URL path segment for virtual portals

HCL Portal provides the concept of virtual portals that allows you to manage several separate portals within one portal installation. You can associate each of these virtual portals with a user realm and thereby limit the scope of users or groups that can access it to one realm of the underlying user repository.

To address this case, the portal remote REST service for PUMA allows you to specify a particular virtual portal for each operation. This operation is then limited to the user realm of that virtual portal. This applies to both of the following:

-   The result of the operation. For example, search results are limited to the realm.
-   Security checks. The user performing the operation must be member of the realm that is implicitly addressed.

The virtual portal information is represented by two additional path elements `/vp/virtul\_portal\_url\_mapping` that follow the URL path element `/um` or, respectively, the `/um/secure` path element. When no particular virtual portal is specified, the implementation uses the default virtual portal. For example, if the portal installation defines a virtual portal with the URL mapping `sales` for the user realm SalesPersons, the URL `/wps/um/secure/vp/sales/users/profiles` returns the references to all user profiles in the SalesPersons user realm.


