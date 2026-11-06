# Configuring a crawler by using the REST API

Certain content source types include an integrated crawler that pulls data from the data source. Use the REST API to configure a crawler for your content source.

You can access all API endpoints through the Swagger UI at `/dx/api/search/v2/explorer`.

## Available crawler types

The following crawler types are available:

- `wcm`
- `jcr`
- `portal`

You can configure one or more crawlers for each content source. All crawled documents are stored in the same content source index. To keep data separate, use one crawler per content source. You cannot assign a crawler of a different type to a content source. For example, you can only crawl Web Content Manager (WCM) data with a WCM crawler in a WCM content source.

!!! note
    Most crawler operations require authentication as a search administrator or a DX administrator. The `GET /crawlertypes` endpoint is unprotected. For more information, refer to [Authentication](index.md#authentication).

## Configuring the crawler

To configure a crawler, send a `POST` request to the `/dx/api/search/v2/crawlers` endpoint with a payload similar to the following example:

```json
{
  "contentSource": "fd544d6e-6007-401c-8984-ec3b650de458",
  "type": "wcm",
  "configuration": {
    "targetDataSource": "https://dx-deployment-haproxy/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
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
| `contentSource` | no | The ID of the target content source. |
| `type` | no | The type of crawler you want to configure. Allowed types are `wcm`, `portal` and `jcr`. The value must match the type of the associated content source. |
| `configuration.targetDataSource` | no | The seedlist URL. You can use the internal HCL DX Core hostname for direct communication. The name consists of the release name used during `helm install` (for example, `dx`). |
| `configuration.schedule` | yes | Cron notation that controls the automated execution of the crawler. Omit this property to run the crawler without a schedule. |
| `configuration.security.type` | no | The authentication protocol used for the crawler. Allowed types are `basic`, `form`, `inherit`, and `none`. |
| `configuration.security.username` | no | The username of an account authorized to crawl the seedlist. |
| `configuration.security.password` | no | The password of an account authorized to crawl the seedlist. |
| `configuration.security.usernameField` | yes | The field name of the username field in FORM-based authentication. |
| `configuration.security.passwordField` | yes | The field name of the password field in FORM-based authentication. |
| `configuration.security.loginPath` | yes | The path where the FORM-based authentication request is sent. |
| `configuration.maxCrawlTime` | yes | The time limit in seconds for overall crawler execution. Prevents crawlers from stalling. |
| `configuration.maxRequestTime` | yes | The maximum wait time in seconds for a crawler request to receive a response from the seedlist provider. |

### Crawler endpoints for `targetDataSource`

The `targetDataSource` property specifies the endpoint from which the crawler pulls data. The configuration depends on the content source type, your HCL Digital Experience (DX) context root, virtual portals (VPs), and the DX host. You can either use the internal HAProxy service of your DX deployment or the regular hostname of your deployment.

Use the following endpoints to crawl the different content source types:

- `wcm`:

    ```text
    /seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments
    ```

- `jcr`:

    ```text
    /seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=1@OOTB_CRAWLER1
    ```

- `portal`:

    ```text
    /seedlist/myserver?SeedlistId=&Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&Action=GetDocuments
    ```

When you configure `targetDataSource`, include the context root of your DX deployment. If you use virtual portals and want to limit indexed data to a specific virtual portal, also include the virtual portal context root.

Refer to the following example configurations of targetDataSource with different context roots and virtual portals for WCM:

| Portal | Context Root | Seedlist URL |
| --- | --- | --- |
| VP: `myportal` | `/wps` | `https://dx-deployment-haproxy/wps/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| Base portal | `/wps` | `https://dx-deployment-haproxy/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| Base portal | `/` | `https://dx-deployment-haproxy/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| VP: `myportal` | `/` | `https://dx-deployment-haproxy/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| VP: `myportal` | `/test` | `https://dx-deployment-haproxy/test/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |

### Security configuration options

The following security configuration options are available:

| Option | Description |
| ------ | ----------- |
| `none` | No authentication is required |
| `basic` | Basic authentication is required. Provide a `username` and `password`. |
| `form` | FORM-based authentication is required. Provide a `username`, `password`, `usernameField`, `passwordField`, and `loginPath` |
| `inherit` | Inherit the security configuration from the content source. |

The API returns the created crawler object:

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
    "targetDataSource": "https://dx-deployment-haproxy/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
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

The endpoint populates the following properties after the crawler runs:

| Property | Description |
| --- | --- |
| `crawlingInstance` | The search-middleware node that performs the crawl, specified as the Kubernetes pod name. |
| `lastCrawled` | The UNIX timestamp of the last crawler run. |
| `lastCrawlDuration` | The runtime of the last crawl in milliseconds. |
| `status` | The last known status of the crawler. |
| `incrementalTimestamp` | The stored timestamp used in the next crawl iteration. |

## Testing the crawler configuration

To test the crawler configuration, send a `POST` request to the `/dx/api/search/v2/crawlers/{crawler_id}/test` endpoint, where `{crawler_id}` is the ID of the crawler. The endpoint retrieves the first page of the seedlist without performing a crawl to verify that the URL and credentials are correct and that Search can reach the seedlist provider.

The endpoint returns a `200 OK` status code if the configuration is valid.

## Triggering the crawler manually

If you do not want to wait for the scheduled crawl or have not configured a schedule, you can trigger the crawler manually.

Send a `POST` request to the `/dx/api/search/v2/crawlers/{crawler_id}/trigger` endpoint, where `{crawler_id}` is the ID of the crawler.

The endpoint returns the following response:

```json
{
  "message": "Crawler triggered."
}
```

## Verifying the crawler status

To check the crawler status after triggering a crawl, send a `GET` request to the `/dx/api/search/v2/crawlers/{crawler_id}` endpoint, where `{crawler_id}` is the ID of the crawler.

The endpoint returns the complete crawler object, including the status:

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
        "targetDataSource": "https://dx-deployment-haproxy/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments",
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

## Out-of-the-box crawlers

If enabled during Helm installation, Search V2 configures crawlers out of the box for default content sources. These crawlers use default seedlist URLs and credentials. You can adjust the configuration of these crawlers as needed.

## Forcing a full recrawl

To force a full recrawl of a data source, perform the following steps:

1. [Remove existing data in the content source index.](#removing-existing-data-in-the-content-source-index)
2. [Trigger the crawler with the `clear_timestamp` parameter.](#triggering-the-crawler-with-the-clear_timestamp-parameter)

### Removing existing data in the content source index

A full crawl does not detect deleted documents. Remove all content from the content source index before recrawling to ensure that search results only return documents currently in the seedlist.

To remove all existing data, send a `DELETE` request to the `/dx/api/search/v2/contentsources/{content_source_id}/documents/byquery` endpoint, where `{content_source_id}` is the ID of the content source, with the following payload:

```json
{
  "query": {}
}
```

### Triggering the crawler with the `clear_timestamp` parameter

After deleting the data, send a `POST` request to the `/dx/api/search/v2/crawlers/{crawler_id}/trigger?clear_timestamp=true` endpoint, where `{crawler_id}` is the ID of the crawler.

Setting `clear_timestamp` to `true` clears the stored `incrementalTimestamp` of the crawler and initiates a full recrawl.

After the crawler runs, all current state data is indexed in the content source.

## Getting crawler status summary

To get aggregated crawler status counts and the most recent crawl result, send a `GET` request to the `/dx/api/search/v2/crawlers/status-summary` endpoint.

The endpoint returns the following response:

```json
{
  "counts": {
    "new": 2,
    "triggered": 0,
    "running": 1,
    "stopped": 0,
    "failed": 1,
    "finished": 5,
    "scheduled": 3
  },
  "lastCrawl": {
    "name": "WCM Crawler",
    "result": "Success",
    "timestamp": 1723622400000
  }
}
```

## Stopping a crawler

To stop a running crawler, send a `PUT` request to the `/dx/api/search/v2/crawlers/{crawler_id}/stop endpoint`, where `{crawler_id}` is the universally unique identifier (UUID) of the crawler to stop. The crawler stops after completing the current page, preserving indexed crawl results. If the crawler is not running, the endpoint returns a `200` status code with the current crawler document and an informational message.

The endpoint returns the following response codes:

| Status code | Body | Description |
| --- | --- | --- |
| `200` | `{ "message": "...", "crawler": {...} }` | The crawler stopped successfully, or it was not running. |
| `404` | `{ "message": "Crawler does not exist." }` | The crawler ID was not found. |
| `500` | `{ "message": "Unable to stop crawler document in management index." }` | An unexpected server error occurred. |

## Listing crawler types

To list the crawler type identifiers supported by the server, send a `GET` request to the `/dx/api/search/v2/crawlertypes` endpoint. This endpoint is public and does not require authentication.

The endpoint returns the following response:

```json
{
  "types": ["wcm", "jcr", "portal", "website"]
}
```
