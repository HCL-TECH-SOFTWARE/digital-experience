# Custom RESTful directories

HCL People Service can be extended to support custom user directories. It defines a RESTful API schema that custom directories need to follow in order to be integrated with People Service. This allows the service to access user data from a wide range of systems and applications. 

Custom directories can be used to enrich user data that may not be available in the primary user directory. This can include additional user properties such as user preferences or user data from adjacent systems. Examples of adjacent systems include Customer Relationship Management (CRM) or Enterprise Resource Planning (ERP) systems. By integrating these custom directories into the service, user data can be consolidated and made available to People Service for further processing and consumption.

## Custom directory API schema

The custom directory API schema defines the endpoints and data structures that custom directories need to implement in order to be integrated with People Service. The API schema is designed to be flexible and extensible, allowing custom directories to expose user data with People Service's internal data model in a compatible way.

The custom directory API schema consists of the following endpoints:

- `GET /users`: Retrieves a list of users from the custom directory. The endpoint supports query parameters to filter the results based on specific criteria.
- `GET /users/{guid}`: Retrieves a single user from the custom directory based on the user's GUID.
- `GET /probes/ready`: Confirms that the custom directory is ready to serve requests.
- `GET /probes/auth`: Checks if the custom directory can be authenticated against using the configured API key.

For more details about the custom directory API schema, refer to the [OpenAPI spec](./custom-restful-directories-openapi-spec.json) JSON file.

## Configuration

You can configure custom directories using environment variables during the deployment of HCL People Service. For more details on the available configuration options, Refer to [Configuration - Application configuration](../../deployment/configuration/index.md#application-configuration).

For example, if you want to add a custom directory with the ID `LOOKASIDEDB`, you need to set the following environment variables:

```yaml
extraEnvVars:
  - name: USER_DIRECTORIES
    value: "LOOKASIDEDB"
  - name: USER_DIRECTORY_LOOKASIDEDB_BASE_URL
    value: "https://lookaside-db.example.com"
  - name: USER_DIRECTORY_LOOKASIDEDB_API_KEY
    value: "secret"
```

### Verifying the custom directory connection

After configuring the custom directory, you can verify the connection by checking its readiness through the validation endpoint `dx/api/people/v1/user-directories`. This endpoint will return a list of the configured directories and their readiness status.
