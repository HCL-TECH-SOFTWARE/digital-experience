# Portal Access Control

The scripting operations for access control differ fundamentally from content, layout, or the portlet repository. The reason is that access control data is not transparently cached on the client. To avoid many requests and slow response times for every simple lookup operation, a different programming model is adopted for access control data.

The collected access control data for a resource is represented on the client by an object. These objects are explicitly created, locally modified, and written back to the portal. All local modifications become effective when the object is written back.

Two script beans are provided for access control data. The Access bean, referenced as $Access in a script, is for reading and writing the access control objects. The PacList bean, referenced as $PacList, provides operations to view and edit access control objects.

The access bean and PacList bean provide the following functions:

-   Methods to request or release access list objects, and to load the permission set for view, edit, or manage permissions. For more information, see *Lifecycle*.
-   Methods to get a list of available action sets. For more information, see *Global lists*.
-   Methods to grant or revoke access for principals on the portal resource, or to view the permissions that are defined for the portal resource. For more information, see *Principals*.
-   Methods to set or clear permission blocks. For more information, see *Permission blocks*.
