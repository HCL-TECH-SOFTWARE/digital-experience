# Identifiers used in the Portal Implementation

For the unique identifier in the URLs, the portal uses a string representation of the internal identifier that is considered to be opaque to the client. The identifier that is used for retrieval of users or groups, that is by either the `identifier` or the `memberOf` request parameters, is the unique security name that is associated to the security context in the WebSphere® Application Server. The exact matching of the unique security name is part of the security configuration, but in most scenarios it matches the distinguished name \(DN\). The same identifier is of course also used for the `identifier` attribute in the profile element.

**Parent topic:**[How the portal implements the remote PUMA REST service](../dev/uprof_rest_wpspec.md)

