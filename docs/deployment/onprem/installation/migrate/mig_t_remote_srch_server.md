# Migrating a remote search server

If the source portal environment uses a remote search server, update the remote search server to work with the current portal environment.

1.  Update IBM® WebSphere® Application Server on the remote search server to the supported version.

    To avoid port conflicts, ensure that the earlier installed version of WebSphere Application Server is up and running. Then install the current version of WebSphere Application Server to a different directory. After installation, check that both the earlier version and the newer version are running, and then continue configuring the remote server. For more information, see *Using remote search service*.

2.  On the migrated portal, re-create the search collections for use with the updated remote search server.


**Parent topic:**[Migrating search components](../migrate/mig_t_search.md)

