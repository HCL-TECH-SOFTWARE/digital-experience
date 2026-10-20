---
title: Configuring the Search V2 backend 
---

This section gives you an introduction into the configuration of the Search V2 backend for HCL Digital Experience (DX).

- **[Architectural overview](architectural_overview.md)**  
This topic shows you how the new search using OpenSearch works and is structured. This discusses the different types of deployments and the runtime behavior of the search.
- **[Configuring a content source by using the REST API](configure_a_contentsource_api.md)**  
This topic provides the steps on how to configure a content source and how to configure a crawler to index data from your HCL DX environment.
- **[Configuring a crawler by using the REST API](configure_a_crawler_api.md)**  
This topic provides the steps on how to configure a crawler to index data from your HCL DX environment.
- **[Running search queries by using the REST API](run_search_queries_api.md)**  
This topic explains the search endpoints of the REST API and provides information on how to run queries.
- **[Configuring common field mappings by using the REST API](configure_common_field_mappings_api.md)**  
This topic provides the steps on how to manage common field mappings for a content source type.
- **[Configuring NLS translations by using the REST API](configure_nls_translations_api.md)**  
This topic provides the steps on how to manage Native Language Support (NLS) translations for common field names.

You can access all API endpoints through the Swagger UI at `/dx/api/search/v2/explorer`.

## Authentication

Before you can perform administrative tasks with the Search V2 REST API, you must authenticate. You can authenticate either as a search administrator or as a DX administrator. You do not need both roles. Either role authorizes the protected endpoints described in the following table.

| Resource | Operation or endpoint | Required role |
| --- | --- | --- |
| Content sources | `GET /contentsources`<br>`GET /contentsourcetypes` | None |
| Content sources | All other operations | Search administrator or DX administrator |
| Crawlers | `GET /crawlertypes` | None |
| Crawlers | All other operations | Search administrator or DX administrator |
| Common field mappings | `GET` operations | None |
| Common field mappings | `POST`, `PUT`, `PATCH`, `DELETE` | Search administrator or DX administrator |
| NLS translations | All operations | Search administrator or DX administrator |

!!! note
    Access control is determined by the HTTP method and the path. The same path can be unprotected for one method and protected for another. For example, `GET /mapping/common-fields` is unprotected, but `POST`, `PUT`, `PATCH`, and `DELETE` on the same path require authentication.

### Authenticating as a search administrator

The search administrator credentials are configured during the Helm installation of Search V2.

1. Send a `POST` request to the `/dx/api/search/v2/admin/authenticate` endpoint with the following payload:

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

### Authenticating as a DX administrator

As an alternative to the `searchadmin` credential flow, you can authenticate as a DX administrator by using one of the following endpoints. Both endpoints issue a `dx-admin-jwt` HTTP-only cookie that is used to authorize subsequent requests.

#### Exchanging a DX session for an admin token

If you already have an active DX session, you can exchange its `LtpaToken2` cookie for an admin token by sending a `POST` request to the `/dx/api/search/v2/auth/dx-admin-token` endpoint. The request requires a valid `LtpaToken2` cookie and no request body.

The endpoint returns the following response codes:

| Code | Body | Description |
| --- | --- | --- |
| `200` | `{ "success": true }` | The endpoint issues the token and sets the `dx-admin-jwt` HTTP-only cookie. |
| `401` | `{ "error": "InvalidToken" \| "Unauthorized" }` | The LTPA token is missing or invalid, or the user is not an administrator. |
| `502` | `{ "error": "DX Core service unavailable" }` | The DX Core access control endpoint is unreachable. |
| `500` | `{ "error": "Internal server error" }` | An unexpected server error occurred. |

#### Logging in with DX administrator credentials

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
