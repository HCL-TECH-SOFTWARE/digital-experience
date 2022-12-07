# How to clone a web content repository

Syndicating items from one server to another, either after migration or to roll out a new server, can take a long time. Your database backup and restore features can be used to clone data from one repository to another, making your system ready for syndication to be used from then on for incremental updates.

There are two basic cloning scenarios:

-   Cloning all items from one server to another. For example, cloning data from one authoring server to another authoring server.
-   Cloning all items from one server to another, but then removing unnecessary data from the cloned server. For example, cloning data from an authoring server to a delivery server where you would want to remove version history and draft items from the delivery server repository.

!!! note 
    These procedures describe how to clone a web content repository only. To clone a HCL Portal environment, XMLAccess export and import are used to transfer the HCL Portal data to the target environment.