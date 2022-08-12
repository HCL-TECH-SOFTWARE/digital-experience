# Access Control Checks

The portal does not allow you to set permissions for attribute definitions. Therefore the remote REST service for PUMA allows requests to some operations only for authenticated users.

The portal remote REST service for PUMA allows requests to the following operations only for authenticated users by using the `/um/secure` path element:

-   `/um/attributes/users`
-   `/um/attributes/users/attribute name`
-   `/um/attributes/groups`
-   `/um/attributes/groups/attribute name`

For all other operations, the implementation performs permission checks by using the corresponding Portal Access Control \(PAC\) settings for users and groups.

**Parent topic:**[How the portal implements the remote PUMA REST service](../dev/uprof_rest_wpspec.md)

