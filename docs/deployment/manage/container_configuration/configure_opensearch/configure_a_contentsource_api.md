# Configuring a Content Source using REST API

This topic explains the use of the Content Source REST API to create a Content Source. This can later be used to crawl the content source in your HCL DX instance and will contain the items that you can find by using search queries.

## Authenticating as a search administrator

Before you can perform administrative tasks, you need to authenticate as a search administrator.

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
      "security": {
        "type": "none",
        "username": "",
        "password": "",
        "usernameField": "",
        "passwordField": "",
        "loginPath": ""
      }
    },
    {
      "id": "79692505-74ed-4aa1-99ed-013ff8ac7bf1",
      "name": "mytest2",
      "type": "dam",
      "created": 1728638173742,
      "updated": 1728638173742,
      "aclLookupHost": "https://my-environment.arbitarydomaintest.com",
      "security": {
        "type": "basic",
        "username": "dxadminuser",
        "password": "dxadminpassword",
        "usernameField": "",
        "passwordField": ""
      }
    }
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
  "security": {
    "type": "basic",
    "username": "dxadminuser",
    "password": "dxadminpassword"
  }
}
```

Provide the following properties:

| Property | Optional | Description |
| --- | --- | --- |
| `name` | no | A speaking identifier for your content source. |
| `type` | no | The type of content source you want to create (for example, `wcm`). |
| `aclLookupHost` | no | The host where the ACL lookup for search requests is being made. It can directly point to your HCL DX Core Service inside your Kubernetes deployment. The name consists of the release name used during the helm install and the suffix `-core:10042`. |
| `security.type` | no | The type of authentication to use (for example, `basic`). |
| `security.username` | no | The username of a user that has access to crawl the seedlist. |
| `security.password` | no | The password of a user that has access to crawl the seedlist. |

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

## Configuring the crawler

To configure a crawler, call the `/dx/api/search/v2/crawlers` endpoint with a `POST` request and a payload similar to the following example:

**Payload:**

```json
{
  "contentSource": "fd544d6e-6007-401c-8984-ec3b650de458",
  "type": "wcm",
  "configuration": {
    "targetDataSource": "https://dx-core:10042/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
    "schedule": "*/15 * * * *",
    "security": {
      "type": "basic",
      "username": "dxadminuser",
      "password": "dxadminpassword"
    },
    "maxCrawlTime": 3600,
    "maxRequestTime": 60
  }
}
```

Provide the following properties:

| Property | Optional | Description |
| --- | --- | --- |
| `contentSource` | no | The `id` of the content source you want the crawler to be configured for. |
| `type` | no | The type of crawler (for example, `wcm`) |
| `configuration.targetDataSource` | no | The seedlist URL. You can use the internal HCL DX Core hostname for direct communication to it. The name consists of the release name used during the Helm install (for example, `dx`). |
| `configuration.schedule` | yes | A cron type notation controlling the automated execution of the crawler. You can omit this for no schedule. |
| `configuration.security.type` | no | The type of authentication to use (for example, `basic`). |
| `configuration.security.username` | no | The username of a user that has access to crawl the seedlist. |
| `configuration.security.password` | no | The password of a user that has access to crawl the seedlist. |
| `configuration.maxCrawlTime` | yes | Time limit in seconds for the overall crawler execution. This is useful to prevent stuck crawlers. |
| `configuration.maxRequestTime` | yes | Maximum request time per crawler request. This limits how long the crawler will wait for an answer from the seedlist provider. |

The various target data sources in DX which must be provided in parameter `configuration.targetDataSource` look similar. See the following sample URL:

https://<hostname and port>/wps/seedlist/myserver?SeedlistId=&Source=<DX internal source name>&Action=GetDocuments

In this URL, <hostname and port> is the internal HCL DX Core hostname and is also used during the Helm install. For details on <DX internal source name>, see the HCL DX documentation.

The response contains the created crawler object:

**Response:**

```json
{
  "id": "62d8560d-9a41-4a18-abf8-3d9df697e54f",
  "contentSource": "fd544d6e-6007-401c-8984-ec3b650de458",
  "crawlingInstance": "",
  "lastCrawled": 0,
  "lastCrawlDuration": 0,
  "status": "",
  "type": "wcm",
  "configuration": {
    "targetDataSource": "https://dx-core:10042/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
    "schedule": "*/15 * * * *",
    "security": {
      "type": "basic",
      "username": "dxadminuser",
      "password": "********"
    },
    "maxCrawlTime": 3600,
    "maxRequestTime": 60
  },
  "incrementalTimestamp": ""
}
```

The following returned properties are populated after the crawleer has run:

| Property | Description |
| --- | --- |
| `crawlingInstance` | The actual search-middleware node that performs the crawls. Will state the actual Pod name in Kubernetes. |
| `lastCrawled` | UNIX Timestamp of the last time the crawler ran. |
| `lastCrawlDuration` | Last runtime in milliseconds of the crawler. |
| `status` | Last known status of the crawler. |
| `incrementalTimestamp` | The stored timestamp of the crawler that is used in the next crawl iteration. |

## Testing the crawler configuration

To test if your crawler configuration is correct, call the `/dx/api/search/v2/crawlers/{crawler_id}/test` endpoint with a `POST` request. The system then tries to retrieve the first page of the seedlist without actually performing a crawl. This ensures the URL and credentials are correct and search is able to contact the seedlist provider.

Calling the endpoint responds with a fitting HTTP status code after execution. A `200 OK` is returned if the configuration is working.

## Triggering the crawler manually

If you do not want to wait for the crawler to run by schedule or you have not configured a schedule, you can manually trigger the crawler.

Call the `/dx/api/search/v2/crawlers/{crawler_id}/trigger` endpoint with a `POST` request.

The following response is returned after a crawl is triggered:

**Response:**

```json
{
  "message": "Crawler triggered."
}
```

## Verifying the crawler status

After triggering a crawler, you can check the crawler status by calling the `/dx/api/search/v2/crawlers/{crawler_id}` endpoint with a `GET` request. This returns complete crawler object to you, including the status.

**Response:**

```json
{
  "crawlers": [
    {
      "contentSource": "fd544d6e-6007-401c-8984-ec3b650de458",
      "crawlingInstance": "dx-search-search-middleware-query-66f457d9d8-qdnnx",
      "lastCrawled": 1712664216691,
      "lastCrawlDuration": 7599,
      "status": "finished",
      "type": "wcm",
      "configuration": {
        "targetDataSource": "https://dx-core:10042/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
        "schedule": "*/15 * * * *",
        "security": {
          "type": "basic",
          "username": "dxadminuser",
          "password": "********"
        },
        "maxCrawlTime": 3600,
        "maxRequestTime": 60
      },
      "incrementalTimestamp": "AAABjsK+BU0="
    }
  ]
}
```
