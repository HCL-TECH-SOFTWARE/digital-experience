# DX User and Groups REST API explorer

The DX User and Groups REST API explorer can be used by developers creating solutions for HCL DX 9.5 on premises and container deployments to explore and test the PUMA APIs.

The PUMA REST API provides a remote interface for user and group management for the configured HCL DX Portal user repository. The DX User and Groups API explorer is available for use with [HCL DX 9.5 CF and Container Update 199](../overview/new_cf_95.md) and later deployments on supported Kubernetes container-based and on-premises platforms. The DX User and Groups API explorer allows developers to explore and test the PUMA APIs.

## Access and launch the DX User and Groups REST API Explorer

To access the DX User and Groups REST APIs Explorer, after installing HCL DX 9.5 CF or Container Update CF199 or later, launch the following URL located at:

```
/dx/api/users/v1/explorer
```

Example:

```
http://localhost:10039/dx/api/users/v1/explorer/
```

![DX User and Group Management REST API](../images/DX_user_group_management_REST_API.png)

## Using the DX User and Group API explorer

-   **Authentication**

    Authentication is required to use the DX User and Group API explorer, and the user also needs to be authorized to execute the requested operations.


-   **Endpoint**

    Open the web browser with:

    ```
    http://host:port/dx/api/users/v1/explorer
    ```

    Sample URL:

    ```
    http://localhost:10039/dx/api/users/v1/explorer/
    ```


-   **Payload**

    See the [Remote REST service for PUMA](uprof_rest.md) Help Center topic for details on the body, headers, query parameters, response body, and other information.


**Parent topic:**[Remote REST service for PUMA](../dev/uprof_rest.md)

