# Portal User Management

The following caches are used by the Portal user management component (PUMA). They are closely related
to the access control caches and caching within the WebSphere WIM and VMM functionality.

**com.ibm.wps.puma.CommonPrincipalCache**
Default size: 30000, default lifetime: 3600, usage pattern: physical cache instance for the combined caches
com.ibm.wps.puma.* instances.

This physical cache instance holds entries from PUMA OID_User_Cache, OID_Group_Cache,
DN_User_Cache and DN_Group_Cache. Those caches contain the mapping between the distinguished
name / internal ObjectID of users and groups and their internal data object. The size of these caches scales
with the number of active users and groups or users and groups that are used for delegation multiplied
with factor 4 (as each entry is stored with different keys to enhance lookup). Entries are invalidated from
this cache during deletion of a user or group. Creating an entry requires database and WIM/VMM access
that may trigger further LDAP requests. An entry in the cache is fairly large.

**com.ibm.wps.puma.DN_OID_Cache & com.ibm.wps.puma.OID_DN_Cache**
Default size: 30000 & 5000, respectively, default lifetime: infinite (-1), usage pattern: regular.

These two caches contain the mapping between the distinguished name of users and groups and their
internal ObjectID identifier. The size of these caches scale with the number of active users and groups or
users and groups that are used for delegation. Entries are invalidated from this cache during deletion of a
user or group. Creating an entry requires one database lookup. An entry into the caches is fairly small.

**com.lotus.cs.services.domino.DominoService**
Default size: 2000, default lifetime: 11080, usage pattern: regular.

This cache stores user-specific Domino information. It is used for HCL Sametime awareness functions. It
scales with the number of users working with the corresponding function. The cache is accessed whenever
awareness functions are requested during page rendering. Creating a cache entry is cheap and simply
involves creating a new Domino session. An entry to the cache is medium-sized.

**com.lotus.cs.services.UserEnvironment**
Default size: 2000, default lifetime: 10880, usage pattern: regular.

This cache stores user-specific information. Entries represent a compilation of credential information for
one user to different LDAP directories and details which data on the given user can be found in which
directory. For example, the general info may be stored in one directory, but the mail server and file may be
in another. The cache scales with the number of users working with Collaboration portlets. The cache is
accessed whenever a Collaboration portlet such as for use with HCL Sametime is accessed. Creating a cache
entry can be fairly expensive since multiple resources might be queried. An entry to the cache is medium sized.