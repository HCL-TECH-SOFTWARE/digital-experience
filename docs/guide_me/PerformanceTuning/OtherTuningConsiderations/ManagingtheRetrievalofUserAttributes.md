# Managing the Retrieval of User Attributes

A user directory doesn’t just contain a user’s ID and password; it also contains a number of other pieces of
information - attributes - about the user. A directory server can contain a lot of attributes for each user, so
if every reference to a user required retrieving all of these attributes, this would impose a performance
penalty on both the Portal server node(s) and the directory server node(s).

Therefore HCL Portal attempts to optimize the loading of these attributes. Two sets of user attributes are
defined: the base set of attributes, and the minimum set of attributes. Depending on what action caused
the user to be retrieved from the directory, either the base or the minimum set of attributes will be
retrieved. Typically, the base set of attributes will be loaded when the user is retrieved; for example, this is
what occurs when a user logs in. If the user was looked up when searching for users, then the minimum set
of attributes will be loaded. For example, this can occur when searching for users to assign access to a
page.

By default, HCL Portal defines the user attribute sets as follows:

- Base set: the following attributes are in the base set:
    - uid
    - cn
    - sn
    - preferredLanguage
    - ibm-primaryEmail
    - givenName
    - displayName

-  Minimum set:
    - uid
    - cn

What happens if additional attributes are needed? For example, consider a portlet which requires the user attribute countryName. Assume that the user in question was looked up on login, so the base set of attributes was retrieved. The attribute countryName isn’t in the base set, so the full user record - with all of its attributes - will be retrieved from the directory server at that point. This will require a second request
to the directory server. Also, since all user attributes are retrieved on the second request, this can end up consuming more memory on the HCL Portal server.

This provides an important performance tuning point to both improve response times and reduce load on
the directory server. If a user attribute will commonly be needed, then it should be included in the base set
of attributes so that it’s retrieved on the initial lookup, eliminating the need for a second request. However,
if an attribute is only needed infrequently, consider leaving it out of the base set of attributes, so that it’s
not retrieved for all users.

## Identifying a Full Fetch of User Attributes
How can you identify a second request is made to the directory server to retrieve the full set of user
attributes? This is best done in a test or staging environment, rather than a live production environment, as
it requires turning on tracing in the portal server, and this can impose a significant performance overhead.
There are two traces to enable to look for this condition. The first one will show if the all the needed user
attributes have been retrieved. If this is false, then a full fetch of the user information will occur. The
second trace shows which attributes are being requested, so you can tell which ones should be added to
the base set.

The two trace strings are:
- `com.ibm.wps.um.PrincipalImpl=all=enabled`
- `com.ibm.wps.um.PumaProfileImpl=all=enabled`

Enable those traces, and then execute the use case you wish to test. Then, look for this message in the
trace.log:
`PrincipalImpl 3 com.ibm.wps.um.PrincipalImpl isCompletelyLoaded false`

This message may be output multiple times for the same user, so check all occurrences of it. If the value
after isCompletelyLoaded is always true, then all the needed attributes have already been loaded, and no
changes are needed. In this example, the value after isCompletelyLoaded is false, showing that the
needed user attributes haven’t all been loaded. This will result in reloading all the user information from
the user directory.

In that case, the trace will then typically show a call to reload the information for that user; this will tell the
full distinguished name of the user whose information is being loaded from the user directory:
`PrincipalImpl > com.ibm.wps.um.PrincipalImpl reload ENTRY id: cn=Yin Yin_000_992,
cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com`

Next, search above that in the trace for the getAttributes call, which will show the attributes the user has
requested. It will look like this:
```
PumaProfileIm > com.ibm.wps.um.PumaProfileImpl getAttributes ENTRY id: cn=Yin Yin_000_992,
cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com

...more user details follow...
    isExternal: false

    [preferredLanguage, ibm-primaryEmail, countryName, displayName, givenName, cn, sn, uid]
```
The last line of the log entry shows the attributes being requested. In this case, the attributes being
requested are
```
[preferredLanguage, ibm-primaryEmail, countryName, displayName, givenName, cn, sn, uid].
```

Comparing this against the list of base user attributes, we can see that countryName is not in the base
user attributes. Depending on whether the action being executed is a common one or not, consider adding
this to the base set of attributes.

## Minimum Attribute Set

Generally, the minimum set of attributes does not need to be modified from the default provided by HCL
Portal, as that attribute set is satisfactory for the user management applications provided with HCL Portal.
However, if your site contains a custom application for managing users and groups, and it uses attributes
other than those in the minimum set, then you should consider expanding the minimum attribute set.