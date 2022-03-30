# Remote REST service for PUMA 

The remote PUMA SPI gives you access to user profiles through REST services. It provides a remote interface for user and group management for the configured Portal user repository. It is based on the REST \(REpresentational State Transfer\) architecture model.

The remote REST service for PUMA allows you to remotely perform the following tasks related to user and group data based on the HTTP protocol:

-   Access, retrieve, and modify information about available user or group attributes and their metadata
-   Search for users or groups based on attributes or group membership
-   Create, update, or delete user or group profiles and group membership relations.

The first part of this documentation describes the basic interface that lists all possible operations, including their parameters and a minimum schema to describe the resources that are involved. The second part explains specific details for the current implementation of this interface for this version of HCL Portal.

Beginning with [HCL DX 9.5 Container Update and CF 199](../overview/new_cf_95.md), a new API explorer is available. The new API explorer allows developers using the Portal User Interface APIs to explore and test these APIs. See the topic DX User and Groups REST API explorer below for details.

-   **[Structure of the remote REST service for PUMA ](../dev/uprof_rest_gen.md)**  
The interface provided by the remote REST service for PUMA defines single operations that are characterized by a particular URI path, the HTTP method, the expected input or output, and a list of query parameters. With regards to the input or output format, the interface only describes a common baseline for the payload, which can be wrapped or represented individually by different implementations of the service.
-   **[How the portal implements the remote PUMA REST service ](../dev/uprof_rest_wpspec.md)**  
The previous topics describe the general part of the remote REST service for PUMA Interface. This interface can be implemented by different providers that can be based on different backend systems or user repositories and provide their own input and output formats. The implementation of the interface described here is the one based on HCL Portal 8.5.
-   **[DX User and Groups REST API explorer ](../dev/user_and_groups_rest_api_explorer.md)**  
 The DX User and Groups REST API explorer can be used by developers creating solutions for HCL DX 9.5 on premises and container deployments to explore and test the PUMA APIs.

**Parent topic:**[User and group management](../dev/wpspuma.md)

