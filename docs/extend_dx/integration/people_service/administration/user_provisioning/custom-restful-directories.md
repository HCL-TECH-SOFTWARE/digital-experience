# Custom RESTful directories

The people service can be extended to support custom user directories. It defines a RESTful API schema that custom directories need to adhere to in order to be integrated with the people service. This allows the people service to access user data from a wide range of systems and applications.

A common use case for custom directories is to enrich user data that may not be available in the primary user directory. This can include additional user properties, such as user preferences, or user data from adjacent systems, such as CRM or ERP systems. By integrating these custom directories with the people service, the user data can be consolidated and made available to the people service for further processing and consumption.

## Custom directory API schema

The custom directory API schema defines the endpoints and data structures that custom directories need to implement in order to be integrated with the people service. The API schema is designed to be flexible and extensible, allowing custom directories to expose user data in a way that is compatible with the people service's internal data model.

The custom directory API schema consists of the following endpoints:

- `GET /users`: Retrieves a list of users from the custom directory. The endpoint supports query parameters to filter the results based on specific criteria.
- `GET /users/{guid}`: Retrieves a single user from the custom directory based on the user's GUID.
- `GET /probes/ready`: Confirms that the custom directory is ready to serve requests.
- `GET /probes/auth`: Allows to check if the custom directory can be authenticated against using the configured API key.

See the [OpenAPI spec](./custom-restful-directories-openapi-spec.json) for more details on the custom directory API schema.

## Configuration

Custom directories can be configured via environment variables in the people service deployment. Refer to the [configuration properties - user directory settings](../../deployment/configuration_parameters.md#user-directory-settings) section for more details on the available configuration options.

For example, adding a custom directory with the ID `LOOKASIDEDB` would require the following environment variables to be set:

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

After configuring the custom directory, you can verify the connection by checking the readiness through the validation endpoint `/people/api/v1/user-directories`. This endpoint will return a list of the configured directories  and their readiness status.
