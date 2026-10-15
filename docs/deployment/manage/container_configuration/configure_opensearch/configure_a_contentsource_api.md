# Configuring a Content Source using REST API

This topic explains the use of the Content Source REST API to create a Content Source. This can later be used to crawl the content source in your HCL DX instance and will contain the items that you can find by using search queries.

You can access all API endpoints through a Swagger UI available at the following URL: `/dx/api/search/v2/explorer`.

## Authenticating as a search administrator

Before you can perform administrative tasks, you need to authenticate as a search administrator. The search administrator credentials are configured during the Helm installation of Search V2.

1. To authenticate, send a `POST` request to the `/dx/api/search/v2/admin/authenticate` endpoint using the following payload:

    **Payload:**

    ```json
    {
      "username": "searchadmin",
      "password": "yourconfiguredpassword"
    }
    ```

    **Response:**

    ```json
    {
      "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
    }
    ```

2. Add the returned JWT in all upcoming HTTP requests in the `Authorization` header using the `Bearer` prefix:

    | Header | Value |
    | --- | --- |
    | `Authorization` | `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....` |

## Authenticating as a DX administrator

As an alternative to the `searchadmin` credential flow above, you can authenticate as a DX administrator using one of the following endpoints. Both endpoints issue a `dx-admin-jwt` httpOnly cookie that is used to authorize subsequent requests.

### Exchanging a DX session for an admin token

If you already have an active DX session, you can exchange its `LtpaToken2` cookie for an admin token by calling the `/dx/api/search/v2/auth/dx-admin-token` endpoint with a `POST` request. The request requires a valid `LtpaToken2` cookie and no request body.

**Response codes:**

| Code | Body | Description |
| --- | --- | --- |
| `200` | `{ "success": true }` | Token issued; `dx-admin-jwt` httpOnly cookie set |
| `401` | `{ "error": "InvalidToken" \| "Unauthorized" }` | Missing/invalid LTPA token, or the user is not an administrator |
| `502` | `{ "error": "DX Core service unavailable" }` | DX Core access control endpoint unreachable |
| `500` | `{ "error": "Internal server error" }` | Unexpected server error |

### Logging in with DX administrator credentials

To log in directly with a DX administrator username and password, call the `/dx/api/search/v2/auth/dx-admin-login` endpoint with a `POST` request and the following payload:

**Payload:**

```json
{
  "username": "dxadmin",
  "password": "yourpassword"
}
```

**Response codes:**

| Code | Body | Description |
| --- | --- | --- |
| `200` | `{ "success": true }` | `dx-admin-jwt` and `LtpaToken2` httpOnly cookies set |
| `400` | `{ "error": "Username and password are required" }` | Missing credentials in the request body |
| `401` | `{ "error": "Invalid credentials" \| "User is not an administrator" \| "Authorization check failed" }` | Authentication failed |
| `502` | `{ "error": "DX Core service unavailable" }` | DX Core unreachable |
| `500` | `{ "error": "Internal server error" }` | Unexpected server error |


## Listing existing content source types

To see which content source types are available and can be used, call the `/dx/api/search/v2/contentsourcetypes` endpoint with a `GET` request.

The response of the API call is similar to the following example:

**Response:**

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

To see which content sources are configured, call the `/dx/api/search/v2/contentsources` endpoint with a `GET` request:

**Response:**

```json
{
  "contentSources": []
}
```

If you have content sources configured, the response looks similar to the following example:

**Response:**

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

To see configured content sources for a certain type (for example, `wcm`), call the `/dx/api/search/v2/contentsources?type=wcm` endpoint with a `GET` request:

**Response:**

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

To create a new content source, call the `/dx/api/search/v2/contentsources` endpoint with a `POST` request and the following payload:

**Payload:**

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
| `name` | no | A speaking identifier for your content source. |
| `type` | no | The type of content source you want to create. Allowed types are `wcm`, `jcr`, `portal` and `dam`. |
| `aclLookupHost` | no | The host where the ACL lookup for search requests is being made. It can directly point to your HCL DX HAProxy Service inside your Kubernetes deployment. The name consists of the release name used during the `helm install` and the suffix `-haproxy`. You can also use the regular hostname of your deployment. |
| `aclLookupPath` | yes | The path where the ACL lookup for search requests is being made. This should point to the `mycontenthandler` endpoint of your deployment (for example, `/wps/mycontenthandler`). If no path is provided, it defaults back to `/wps/mycontenthandler`. |
| `security.type` | no | The type of authentication to use. Allowed types are `none`, `basic` and `form`. |
| `security.username` | no | The username of a user that has access to crawl the seedlist. |
| `security.password` | no | The password of a user that has access to crawl the seedlist. |
| `security.usernameField` | yes | The field name of the username field in a FORM based authentication. |
| `security.passwordField` | yes | The field name of the password field in a FORM based authentication. |
| `security.loginPath` | yes | The path where the FORM authentication request is being made. |
| `apiBaseUrl` | yes | The base URL of the DAM API. Only needed for `dam` content sources, to support [triggering a DAM reindex](#triggering-a-dam-reindex-for-a-content-source). |
| `apiPath` | yes | The path of the DAM API (for example, `/dx/api/dam/v1`). Only needed for `dam` content sources, to support [triggering a DAM reindex](#triggering-a-dam-reindex-for-a-content-source). |

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

The response of the API call looks similar to the following sample:

**Response:**

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

If you want to configure content sources for a virtual portal or for an alternate context root, you must adjust the `aclLookupPath` to match you target portal.

See the following sample configurations:

| Portal | Context root | `aclLookupPath` |
| --- | --- | --- |
| VP: `myportal` | `/mycontext` | `/mycontext/mycontenthandler/myportal` |
| VP: `myportal` | `/` | `/mycontenthandler/myportal` |
| Base portal  | `/mycontext` | `/mycontext/mycontenthandler` |
| Base portal  | `/` | `/mycontenthandler` |

The Search V2 UI uses the  `aclLookupPath` to determine which content sources are available for your current portal. This ensures that only the content sources that are available for the current portal are shown in the search UI and you only see results from your current portal.

`aclLookupPath` is also used to validate the users' ACLs when performing a search query and to ensure that only results are shown that the user has access to.

## Out-of-the-box content sources

If enabled in the Helm chart during deployment, the Search V2 configures the content sources out-of-the-box. These content sources are for `wcm`, `jcr` and `portal` types and are scoped at your configured context root and base portal. A content source for `dam` is also pre-configured out-of-the-box but the Search V2 UI currently does not support it.

## Getting document counts

To get document counts for all content sources, grouped by content source ID, call the `/dx/api/search/v2/documentcounts` endpoint with a `GET` request. Each entry includes a total count and a per-document-type breakdown.

**Response:**

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
    The `byType` keys reflect the actual document types stored in the content source index (for example, `page`, `file`, `sitearea`). An `unknown` type is used for documents where the type field is missing or unrecognized.

## Triggering a DAM reindex for a content source

To trigger a reindex of a DAM content source, call the `/dx/api/search/v2/contentsources/{contentsource_id}/dam-reindex` endpoint with a `POST` request, where `contentsource_id` is the `id` of the DAM content source to reindex.

**Response codes:**

| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Invalid content source or missing configuration |
| `401` | Authentication error |
| `404` | Content source ID not found |
| `500` | Server error |
| `502` | DAM API unavailable |