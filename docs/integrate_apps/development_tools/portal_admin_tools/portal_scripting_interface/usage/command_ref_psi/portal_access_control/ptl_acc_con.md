# Portal Access Control

The scripting operations for access control differ fundamentally from content, layout, or the portlet repository. The reason is that access control data is not transparently cached on the client. To avoid many requests and slow response times for every simple lookup operation, a different programming model is adopted for access control data.

The collected access control data for a resource is represented on the client by an object. These objects are explicitly created, locally modified, and written back to the portal. All local modifications become effective when the object is written back.

Two script beans are provided for access control data. The Access bean, referenced as $Access in a script, is for reading and writing the access control objects. The PacList bean, referenced as $PacList, provides operations to view and edit access control objects.

The access bean and PacList bean provide the following functions:

-   Methods to request or release access list objects, and to load the permission set for view, edit, or manage permissions. For more information, see *Lifecycle*.
-   Methods to get a list of available action sets. For more information, see *Global lists*.
-   Methods to grant or revoke access for principals on the portal resource, or to view the permissions that are defined for the portal resource. For more information, see *Principals*.
-   Methods to set or clear permission blocks. For more information, see *Permission blocks*.

-   **[Access control objects](../admin-system/acc_cntrl_objts_pac.md)**  
The complete access control data for a resource is represented on the client by a PacList object. PAC stands for Portal Access Control. PacList objects are opaque, they cannot be manipulated directly. Instead, they are loaded into the PacList bean, which provides the operations to view and edit the objects. PacList objects are obtained from and written back by using the Access bean.
-   **[Lifecycle - Portal Access Control](../admin-system/lifecycle_pac.md)**  
PacList objects are read from and written back to the portal by using getacl and setacl in the Access bean. The command getacl returns the PacList object for a resource. It expects the category and identifier of the resource as arguments. The category identifies the Script bean that is responsible for the resource. It is given as a keyword, which can be the bean name or the type of the resource. The supported keywords are documented in the help for the Access bean. PacList objects are obtained only for resources that are handled by the Content and Portlet beans. For the root node of the portlet repository, there are no PacList objects.
-   **[Global lists - Portal Access Control](../admin-system/gbl_lsts_pac.md)**  
A global list holds the names of the predefined action sets. The global list is accessed with the listall command in the Access bean. The command expects the list name as an argument. The only supported list name is actionsets. See the bean help for alternative list names.
-   **[Principals - Portal Access Control](../admin-system/principals_pac.md)**  
Use the list command to access the list of principals for an action set.
-   **[Permission blocks - Portal Access Control](../admin-system/perm_blks_pac.md)**  
Use the show command to access the flags that control distribution of permissions. The first argument is the name of the action set, and the second is the name of the flag to obtain. The optional keyword numeric indicates whether the flag value must be returned as a human readable string, or as a numeric value suitable for programmatic evaluation. Since the string value is subject to translation into different locales, only the numeric value can reliably be used in conditional statements. The numeric value 0 indicates a block, while 1 stands for allowed distribution. The following names are supported for the two flags. Alternative names are documented in the help for the PacList bean.

**Parent topic:**[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

