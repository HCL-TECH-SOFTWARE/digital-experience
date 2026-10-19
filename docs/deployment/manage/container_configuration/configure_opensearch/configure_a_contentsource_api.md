# Configuring a content source by using the REST API

Use the Content Source REST API to create a content source. You can then crawl the content source in your HCL Digital Experience (DX) instance to find items by using search queries.

You can access all API endpoints through the Swagger UI at `/dx/api/search/v2/explorer`.

## Authenticating as a search administrator

Before you can perform administrative tasks, you need to authenticate as a search administrator. The search administrator credentials are configured during the Helm installation of Search V2.

1. To authenticate, send a `POST` request to the `/dx/api/search/v2/admin/authenticate` endpoint with the following payload:

    ```json
    {
      "username": "searchadmin",
      "password": "yourconfiguredpassword"
    }
    ```

    The endpoint returns the following response:

    ```json
    {
      "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
    }
    ```

2. Add the returned JSON Web Token (JWT) in all upcoming HTTP requests in the `Authorization` header by using the `Bearer` prefix:

    | Header | Value |
    | --- | --- |
    | `Authorization` | `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....` |

## Authenticating as a DX administrator

As an alternative to the `searchadmin` credential flow, you can authenticate as a DX administrator by using one of the following endpoints. Both endpoints issue a `dx-admin-jwt` HTTP-only cookie that is used to authorize subsequent requests.

### Exchanging a DX session for an admin token

If you already have an active DX session, you can exchange its `LtpaToken2` cookie for an admin token by sending a `POST` request to the `/dx/api/search/v2/auth/dx-admin-token` endpoint. The request requires a valid `LtpaToken2` cookie and no request body.

The endpoint returns the following response codes:

| Code | Body | Description |
| --- | --- | --- |
| `200` | `{ "success": true }` | The endpoint issues the token and sets the `dx-admin-jwt` HTTP-only cookie. |
| `401` | `{ "error": "InvalidToken" \| "Unauthorized" }` | The LTPA token is missing or invalid, or the user is not an administrator. |
| `502` | `{ "error": "DX Core service unavailable" }` | The DX Core access control endpoint is unreachable. |
| `500` | `{ "error": "Internal server error" }` | An unexpected server error occurred. |

### Logging in with DX administrator credentials

To log in directly with a DX administrator username and password, send a `POST` request to the `/dx/api/search/v2/auth/dx-admin-login` endpoint with the following payload:

```json
{
  "username": "dxadmin",
  "password": "yourpassword"
}
```

The endpoint returns the following response codes:

| Code | Body | Description |
| --- | --- | --- |
| `200` | `{ "success": true }` | The endpoint sets the `dx-admin-jwt` and `LtpaToken2` HTTP-only cookies. |
| `400` | `{ "error": "Username and password are required" }` | Credentials are missing from the request body. |
| `401` | `{ "error": "Invalid credentials" \| "User is not an administrator" \| "Authorization check failed" }` | Authentication failed. |
| `502` | `{ "error": "DX Core service unavailable" }` | The DX Core service is unreachable. |
| `500` | `{ "error": "Internal server error" }` | An unexpected server error occurred. |

## Listing existing content source types

To see which content source types are available, send a `GET` request to the `/dx/api/search/v2/contentsourcetypes` endpoint.

The API returns a response similar to the following example:

```json
{
  "types": [
    "wcm",
    "dam",
    "jcr",
    "portal"
  ]
}
```

## Listing existing content sources

To see which content sources are configured, send a `GET` request to the `/dx/api/search/v2/contentsources` endpoint.

If no content sources are configured, the API returns the following response:

```json
{
  "contentSources": []
}
```

If you have content sources configured, The API returns a response similar to the following example:

```json
{
  "contentSources": [
    {
      "id": "8c2fa532-116e-46be-b4f0-9854e8605097",
      "name": "mytest1",
      "type": "wcm",
      "created": 1712661494724,
      "updated": 1712661494724,
      "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
      "aclLookupPath": "/wps/mycontenthandler",
      "security": {
        "type": "basic",
        "username": "dxadminuser",
        "password": "dxadminpassword",
        "usernameField": "",
        "passwordField": ""
      }
    },
    {
      "id": "79692505-74ed-4aa1-99ed-013ff8ac7bf1",
      "name": "mytest2",
      "type": "dam",
      "created": 1728638173742,
      "updated": 1728638173742,
      "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
      "aclLookupPath": "/wps/mycontenthandler",
      "security": {
        "type": "basic",
        "username": "dxadminuser",
        "password": "dxadminpassword",
        "usernameField": "",
        "passwordField": ""
      }
    },
  ]
}
```

To view configured content sources for a specific type (for example, `wcm`), send a `GET` request `/dx/api/search/v2/contentsources?type=wcm` endpoint.

The API returns a response similar to the following example:

```json
{
  "contentSources": [
    {
      "id": "fa25d35f-8383-4219-9a4b-136eb6d726f7",
      "name": "mytest1",
      "type": "wcm",
      "created": 1728614431815,
      "updated": 1728614431815,
      "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
      "aclLookupPath": "/wps/mycontenthandler",
      "security": {
        "type": "none",
        "username": "",
        "password": "",
        "usernameField": "",
        "passwordField": "",
        "loginPath": ""
      }
    }
  ]
}
```

## Creating a new content source

To create a new content source, send a `POST` request to the `/dx/api/search/v2/contentsources` endpoint with the following payload:

```json
{
  "name": "mytest3",
  "type": "jcr",
  "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
  "aclLookupPath": "/wps/mycontenthandler",
  "security": {
    "type": "basic",
    "username": "dxadminuser",
    "password": "dxadminpassword"
  }
}
```

You can provide the following properties:

| Property | Optional | Description |
| --- | --- | --- |
| `name` | no | A descriptive name for the content source. |
| `type` | no | The type of content source you want to create. Allowed types are `wcm`, `jcr`, `portal` and `dam`. |
| `aclLookupHost` | no | The host where the ACL lookup for search requests is made. It can directly point to your HCL DX HAProxy service in your Kubernetes deployment. The name consists of the release name used during `helm install` and the suffix `-haproxy`. You can also use the regular hostname of your deployment. |
| `aclLookupPath` | yes | The path where the ACL lookup for search requests is made. This must point to the `mycontenthandler` endpoint of your deployment (for example, `/wps/mycontenthandler`). If no path is provided, it defaults to `/wps/mycontenthandler`. |
| `security.type` | no | The type of authentication to use. Allowed types are `none`, `basic` and `form`. |
| `security.username` | no | The username of a user that has access to crawl the seedlist. |
| `security.password` | no | The password of a user that has access to crawl the seedlist. |
| `security.usernameField` | yes | The field name of the username field in a FORM-based authentication. |
| `security.passwordField` | yes | The field name of the password field in a FORM-based authentication. |
| `security.loginPath` | yes | The path where the FORM-based authentication request is being made. |
| `apiBaseUrl` | yes | The base URL of the Digital Asset Management (DAM) API. Only needed for `dam` content sources, to support [triggering a DAM reindex](#triggering-a-dam-reindex-for-a-content-source). |
| `apiPath` | yes | The path of the DAM API (for example, `/dx/api/dam/v1`). Only needed for `dam` content sources to support [triggering a DAM reindex](#triggering-a-dam-reindex-for-a-content-source). |

To create a `dam` content source that supports [triggering a DAM reindex](#triggering-a-dam-reindex-for-a-content-source), also include the `apiBaseUrl` and `apiPath` properties:

```json
{
  "name": "mydam",
  "type": "dam",
  "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
  "aclLookupPath": "/wps/mycontenthandler",
  "security": {
    "type": "basic",
    "username": "dxadminuser",
    "password": "dxadminpassword"
  },
  "apiBaseUrl": "https://my-environment.arbitarydomaintest.com",
  "apiPath": "/dx/api/dam/v1"
}
```

The API returns a response similar to the following example:

```json
{
  "id": "fd544d6e-6007-401c-8984-ec3b650de458",
  "name": "mytest3",
  "type": "jcr",
  "created": 1712661954517,
  "updated": 1712661954517,
  "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
  "aclLookupPath": "/wps/mycontenthandler",
  "security": {
    "type": "basic",
    "username": "dxadminuser",
    "password": "********",
    "usernameField": "",
    "passwordField": ""
  }
}
```

The response contains the `id` of the content source, which is required when you [configure a crawler](./configure_a_crawler_api.md).

## Configuring content sources for virtual portals and alternate context roots

If you want to configure content sources for a virtual portal or for an alternate context root, adjust the `aclLookupPath` to match you target portal.

Refer to the following sample configurations:

| Portal | Context root | `aclLookupPath` |
| --- | --- | --- |
| VP: `myportal` | `/mycontext` | `/mycontext/mycontenthandler/myportal` |
| VP: `myportal` | `/` | `/mycontenthandler/myportal` |
| Base portal  | `/mycontext` | `/mycontext/mycontenthandler` |
| Base portal  | `/` | `/mycontenthandler` |

The Search V2 UI uses the  `aclLookupPath` to determine which content sources are available for your current portal. This ensures that the search UI displays only the content sources and results available for the current portal.

The `aclLookupPath` is also used to validate user access control lists (ACLs) during search queries to ensure that users only see results they have permission to access.

## Out-of-the-box content sources

If enabled in the Helm chart during deployment, Search V2 configures content sources out of the box. These content sources are for `wcm`, `jcr` and `portal` types and are scoped at your configured context root and base portal. A content source for `dam` is also preconfigured out of the box but the Search V2 UI currently does not support it.

## Getting document counts

To get document counts for all content sources, grouped by content source ID, send a `GET` request to the `/dx/api/search/v2/documentcounts` endpoint. Each entry includes a total count and a per-document-type breakdown.

The API returns a response similar to the following example:

```json
{
  "documentCounts": {
    "ee0765b4-be3e-4d10-9ab4-95e60464e676": {
      "total": 350,
      "byType": {
        "page": 200,
        "file": 100,
        "sitearea": 50
      }
    },
    "ab123456-cd78-90ef-ab12-34567890abcd": {
      "total": 120,
      "byType": {
        "page": 80,
        "file": 40
      }
    }
  }
}
```

!!! note
    The `byType` keys reflect the actual document types stored in the content source index (for example, `page`, `file`, or `sitearea`). The `unknown` type is used for documents where the type field is missing or unrecognized.

## Triggering a DAM reindex for a content source

To trigger a reindex of a DAM content source, send a `POST` request to the `/dx/api/search/v2/contentsources/{contentsource_id}/dam-reindex`, where `contentsource_id` is the `id` of the DAM content source to reindex.

The endpoint returns the following response codes:

| Status code | Description |
| --- | --- |
| `200` | The reindex request succeeded. |
| `400` | The content source is invalid or missing required configuration. |
| `401` | Authentication failed. |
| `404` | The content source ID was not found. |
| `500` | An unexpected server error occurred. |
| `502` | The DAM API is unreachable. |
