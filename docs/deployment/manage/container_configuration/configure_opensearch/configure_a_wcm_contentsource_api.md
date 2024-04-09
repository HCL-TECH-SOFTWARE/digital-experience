# Configure a WCM Content Source via REST API

This chapter explains the use of the Content Source REST API to create a WCM Content Source. This can later be used to crawl WCM in your HCL DX instance and run search queries on.

## Authenticating as a search administrator

Before you can perform administrative tasks, you need to authenticate as a search administrator.
To do that, send a `POST` request to the `/dx/api/search/v2/admin/authenticate` endpoint using the following payload:

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

You need to add the returned JWT in the following requests in the `Authorization` header, using the `Bearer` prefix:

| Header | Value |
| --- | --- |
| `Authorization` | `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....` |

## List existing Content Sources

To see which Content Sources are configured, call the `/dx/api/search/v2/contentsources` endpoint with a `GET` request:

**Response:**

```json
{
  "contentSources": []
}
```

If you have Content Sources configured, the response will look like in the following example:

**Response:**

```json
{
  "contentSources": [
    {
      "id": "8c2fa532-116e-46be-b4f0-9854e8605097",
      "name": "mytest",
      "type": "wcm",
      "created": 1712661494724,
      "updated": 1712661494724,
      "aclLookupHost": "https://my-environment.arbitarydomaintest.com"
    }
  ]
}
```

## Create a new Content Source

To create a new Content Source for WCM, call the `/dx/api/search/v2/contentsources` endpoint with the following payload:

**Payload:**

```json
{
  "name": "mytest",
  "type": "wcm",
  "aclLookupHost": "https://dx-deployment-core:10042"
}
```

The following properties need to be provided:

| Property | Optional | Description |
| --- | --- |
| `name` | no | A speaking identifier for your Content Source |
| `type` | no | The type of Content Source you want to create, in this example `wcm` |
| `aclLookupHost` | no | The host where the ACL lookup for search requests is being made. It can directly point to your HCL DX Core Service inside your Kubernetes deployment. The name consists of the release name used during the helm install and the suffix `-core:10042`. |

The response of the API call looks like this:

**Response:**

```json
{
  "id": "fd544d6e-6007-401c-8984-ec3b650de458",
  "name": "mytest",
  "type": "wcm",
  "created": 1712661954517,
  "updated": 1712661954517,
  "aclLookupHost": "https://dx-deployment-core:10042"
}
```

The response contains the `id` of the Content Source, which you will need later to configure a Crawler.

## Configure the Crawler

To configure a Crawler, call the `/dx/api/search/v2/crawlers` endpoint with a `POST` request and the following payload:

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

The following properties need to be provided:

| Property | Optional | Description |
| --- | --- | --- |
| `contentSource` | no | The `id` of the Content Source you want the Crawler to be configured for |
| `type` | no | The type of Crawler, in this case `wcm` |
| `configuration.targetDataSource` | no | The WCM seedlist URL, you can use the internal HCL DX Core hostname for direct communication to it. The name consists of the release name used during the helm install, in this example `dx`. |
| `configuration.schedule` | yes | A cron type notation controlling the automated execution of the Crawler, can be omitted for no schedule |
| `configuration.security.type` | no | The type of authentication to use. In this example it is `basic`. |
| `configuration.security.username` | no | The username of an user that has access to crawl the WCM seedlist |
| `configuration.security.password` | no | The password of an user that has access to crawl the WCM seedlist |
| `configuration.maxCrawlTime` | yes | Time limit in seconds for the overall Crawler execution, useful to prevent stuck crawlers. |
| `configuration.maxRequestTime` | yes | Maximum request time per Crawler request. This limits how long the Crawler will wait for an answer from the seedlist provider. |

The response will contain the created Crawler object.

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
      "password": "*"
    },
    "maxCrawlTime": 3600,
    "maxRequestTime": 60
  },
  "incrementalTimestamp": ""
}
```

The following returned properties will be populated once the Crawler has run:

| Property | Description |
| --- | --- |
| `crawlingInstance` | The actual search-middleware node that will perform the crawls. Will state the actual Pod name in Kubernetes. |
| `lastCrawled` | UNIX Timestamp of the last time the Crawler has run. |
| `lastCrawlDuration` | Last runtime in milliseconds of the Crawler. |
| `status` | Last known status of the Crawler. |
| `incrementalTimestamp` | The stored timestamp of the Crawler that is being used in the next crawl iteration. |

## Test the Crawler configuration

To test that your Crawler configuration is correct, call the `/dx/api/search/v2/crawlers/{crawler_id}/test` endpoint with a `POST` request. It will try to retrieve the first page of the seedlist without actually performing a crawl. This ensures the URL as well as credentials are correct and search is able to contact the seedlist provider.

It will respond with a fitting HTTP status code after execution. A `200 OK` will be returned if the configuration is working.

## Manually trigger the Crawler

In case you don't want to wait for the Crawler to run by schedule or you have not configured a schedule, you can manually trigger the Crawler.

Call the `/dx/api/search/v2/crawlers/{crawler_id}/trigger` endpoint with a `POST` request.

It will respond once the crawl has been triggered:

**Response:**

```json
{
  "message": "Crawler triggered."
}
```

## Verify the Crawler status

After you have triggered a Crawler, you can easily check the Crawler status by calling the `/dx/api/search/v2/crawlers/{crawler_id}` endpoint with a `GET` request. It will return the complete Crawler object to you including the status.

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
          "username": "dxadmin",
          "password": "*"
        },
        "maxCrawlTime": 3600,
        "maxRequestTime": 60
      },
      "incrementalTimestamp": "AAABjsK+BU0="
    }
  ]
}
```
