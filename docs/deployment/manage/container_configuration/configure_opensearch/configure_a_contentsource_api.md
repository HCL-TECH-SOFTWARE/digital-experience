# Configuring a Content Source using REST API

This topic explains the use of the Content Source REST API to create a Content Source. This can later be used to crawl the content source in your HCL DX instance and will contain the items that you can find by using search queries.

You can access all API endpoints through a Swagger UI available at the following URL: `/dx/api/search/v2/explorer`.

## Authenticating as a search administrator

Before you can perform administrative tasks, you need to authenticate as a search administrator. The search administrator credentials are configured during the Helm installation of search v2.

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

The response contains the `id` of the content source, which is required when you [configure a crawler](#configuring-the-crawler).

## Configuring content sources for virtual portals and alternate context roots

If you want to configure content sources for a virtual portal or for an alternate context root, you must adjust the `aclLookupPath` to match you target portal.

Below are some example configurations:

| Portal | Context root | `aclLookupPath` |
| --- | --- | --- |
| VP: `myportal` | `/mycontext` | `/mycontext/mycontenthandler/myportal` |
| VP: `myportal` | `/` | `/mycontenthandler/myportal` |
| Base portal  | `/mycontext` | `/mycontext/mycontenthandler` |
| Base portal  | `/` | `/mycontenthandler` |

The search v2 UI uses the  `aclLookupPath` to determine which content sources are available for your current portal. This ensures that only the content sources that are available for the current portal are shown in the search UI and you only see results from your current portal.

`aclLookupPath` is also used to validate the users' ACLs when performing a search query and to ensure that only results are shown that the user has access to.

## Out of the box content sources

The search v2 will configure the content sources out of the box, if enabled in the Helm chart during deployment. These content sources are for the `wcm`, `dam`, `jcr` and `portal` types and will be scoped at your configured context root and the base portal.