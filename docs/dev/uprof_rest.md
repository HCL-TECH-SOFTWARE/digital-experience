# Remote REST service for PUMA

The remote PUMA SPI gives you access to user profiles through REST services. It provides a remote interface for user and group management for the configured Portal user repository. It is based on the REST \(REpresentational State Transfer\) architecture model.

The remote REST service for PUMA allows you to remotely perform the following tasks related to user and group data based on the HTTP protocol:

-   Access, retrieve, and modify information about available user or group attributes and their metadata
-   Search for users or groups based on attributes or group membership
-   Create, update, or delete user or group profiles and group membership relations.

The first part of this documentation describes the basic interface that lists all possible operations, including their parameters and a minimum schema to describe the resources that are involved. The second part explains specific details for the current implementation of this interface for this version of HCL Portal.

Beginning with [HCL DX 9.5 Container Update and CF 199](../overview/new_cf_95.md), a new API explorer is available. The new API explorer allows developers using the Portal User Interface APIs to explore and test these APIs. See the topic DX User and Groups REST API Explorer below for details.

