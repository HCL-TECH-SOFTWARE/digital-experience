# API documentation

In this section, you will learn about the available APIs in People Service and how to interact with them. This section serves as a reference for developers and administrators looking to leverage People Service APIs to enhance their platforms. It includes details on the available APIs such as OpenAPI and Swagger Explorer to help users understand and work with People Service APIs effectively.

## Working with APIs

People Service APIs are designed to provide developers and administrators with the necessary tools to interact with the service and enhance their platforms. The APIs are RESTful and follow standard conventions, making them easy to work with and integrate into existing systems. The following sections provide an overview of the available APIs and how to interact with them effectively.

People Service APIs are categorized into the following sections:

- **Authentication**: APIs related to user authentication and session management.
- **Profiles**: APIs related to managing user profiles, including creating, updating, and deleting profiles.
- **Schema**: APIs related to managing profile attributes and schema definitions.
- **Custom fields**: APIs related to managing custom fields for user profiles.
- **Images and media**: APIs related to managing profile images and media content.
- **Tags**: APIs related to managing tags for user profiles.
- **Search**: APIs related to searching for user profiles based on specific criteria.
- **Privacy**: APIs related to managing user privacy settings and data protection.
- **Federation and user directories**: APIs related to integrating with external user directories and federated identity providers.
- **Utils**: Utility APIs for common tasks and operations.
- **Probes**: Health check APIs for monitoring the service status and availability.
- **Search Re-Index**: APIs related to retrying full or partial re-indexing for all or pending user profiles.

## OpenAPI and Swagger Explorer

People Service APIs are documented using OpenAPI, which provides a standard way to describe RESTful APIs and generate interactive documentation. The OpenAPI specification is available for each API category, allowing developers and administrators to explore the available endpoints, request and response formats, and authentication requirements.

You can check the OpenAPI documentation for People Service APIs using the Swagger Explorer tool. This tool provides an interactive interface for exploring the APIs, making it easy to understand the available endpoints and test them with sample requests.

Use the following URLs to access the Swagger Explorer for People Service APIs and OpenAPI specification:

- **People Service APIs**: `<HOSTNAME>/dx/api/people/v1/explorer`
- **OpenAPI Specification**: `<HOSTNAME>/dx/api/people/v1/openapi/openapi.json`

Ensure to replace `<HOSTNAME>` with the correct value.

## OpenAPI Specification

For more information on the People Service API schema, refer to the [OpenAPI spec](./people-service-openapi-spec.json) JSON file.
