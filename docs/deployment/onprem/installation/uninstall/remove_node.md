# Restrictions on moving a node to a stand-alone configuration

In a working cluster, all nodes share a common database. If you want to remove a node from a cell to use the node in a stand-alone configuration, some restrictions apply.

The configuration of all portlets deployed in a cell are stored in a common database. When you remove a node from a cell to use the node in a stand-alone configuration, the portlets that had been available to the node in the cell are no longer available to it as a stand-alone server. Other changes in configuration that were made after the node was federated to the cell, such as enabling LDAP security or applying fix pack maintenance, can prevent the node from operating normally after it is removed from the cell. Starting or modifying the configuration of the stand-alone node before taking steps to back up the database can introduce conflicts between the node and the remaining nodes in the cell.

Before you start or modify the configuration of the stand-alone node, restore the WebSphere® Application Server file system and the HCL Portal databases using backups taken prior to federation. Reconnect to a database that represents the portlet and page configuration of the node before it was added to the cell. Do not reconnect to the default database.

**Parent topic:**[Uninstalling the Digital Experience software](../install/uninstall.md)

