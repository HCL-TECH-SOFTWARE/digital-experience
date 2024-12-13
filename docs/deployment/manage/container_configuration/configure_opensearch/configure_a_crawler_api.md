# Configuring a crawler using REST API

Certain types of content sources come with an integrated crawler that you can configure to pull data from the data source. This topic explains how to configure a crawler using the REST API.

You can access all API endpoints through the Swagger UI available at the following URL: `/dx/api/search/v2/explorer`.

## Available crawler types

The following crawler types are available:

- `wcm`
- `jcr`
- `portal`

It is technically possible to configure one or more crawlers per content source. All crawled documents are then stored inside the same content source index. However, it is recommended to use one crawler per content source to keep the data separated. It is not possible to assign a crawler of a different type to a content source. This means you can only crawl WCM data with a WCM crawler in a WCM content source.

## Authenticating as a search administrator

Before you can perform administrative tasks, you must authenticate as a search administrator. The search administrator credentials are configured during the Helm installation of search v2.

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

## Configuring the crawler

To configure a crawler, call the `/dx/api/search/v2/crawlers` endpoint with a `POST` request and a payload similar to the following example:

**Payload:**

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
| `contentSource` | no | The `id` of the content source you want the crawler to be configured for. |
| `type` | no | The type of crawler you want to configure. Allowed types are `wcm`, `portal` and `jcr`. The value must match the type of the associated content source. |
| `configuration.targetDataSource` | no | The seedlist URL. You can use the internal HCL DX Core hostname for direct communication to it. The name consists of the release name used during the Helm install (for example, `dx`). |
| `configuration.schedule` | yes | A cron type notation controlling the automated execution of the crawler. You can omit this for no schedule. |
| `configuration.security.type` | no | The type of authentication used for the crawler. Allowed types are `basic`, `form`, `inherit` and `none`. |
| `configuration.security.username` | no | The username of a user that has access to crawl the seedlist. |
| `configuration.security.password` | no | The password of a user that has access to crawl the seedlist. |
| `configuration.security.usernameField` | yes | The field name of the username field in a FORM based authentication. |
| `configuration.security.passwordField` | yes | The field name of the password field in a FORM based authentication. |
| `configuration.security.loginPath` | yes | The path where the FORM authentication request is being made. |
| `configuration.maxCrawlTime` | yes | The time limit in seconds for the overall crawler execution. This is useful to prevent stuck crawlers. |
| `configuration.maxRequestTime` | yes | The maximum request time per crawler request. This limits how long the crawler will wait for an answer from the seedlist provider. |

### Crawler endpoints for `targetDataSource`

The target data source configures the endpoint where the crawler pulls the data from. The configuration depends on the content source type, your DX context root, a possible virtual portal, and the DX host.

You can either use the internal HAProxy service of your DX deployment or the regular hostname of your deployment.

You can use the following endpoints to crawl the different types of content sources:

- `wcm`: `/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments`
- `jcr`: `/seedlist/myserver?Action=GetDocuments&Format=ATOM&Locale=en_US&Range=100&Source=com.ibm.lotus.search.plugins.seedlist.retriever.jcr.JCRRetrieverFactory&Start=0&SeedlistId=1@OOTB_CRAWLER1`
- `portal`: `/seedlist/myserver?SeedlistId=&Source=com.ibm.lotus.search.plugins.seedlist.retriever.portal.PortalRetrieverFactory&Action=GetDocuments`

When configuring the `targetDataSource`, you need to incorporate the context root of your DX deployment. It also might be necessary to include the virtual portal context root if you are using virtual portals and want to limit the indexed data to a specific virtual portal.

Here are some examples of how to configure the `targetDataSource` with different context roots and virtual portals for WCM:

| Portal | Context Root | Seedlist URL |
| --- | --- | --- |
| VP: `myportal` | `/wps` | `https://dx-deployment-haproxy/wps/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| Base portal | `/wps` | `https://dx-deployment-haproxy/wps/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| Base portal | `/` | `https://dx-deployment-haproxy/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| VP: `myportal` | `/` | `https://dx-deployment-haproxy/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |
| VP: `myportal` | `/test` | `https://dx-deployment-haproxy/test/seedlist/myserver/myportal?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments` |

### Security configuration options

The following security configuration options are available:

- `none`: No authentication is required.
- `basic`: Basic authentication is required. Provide a `username` and `password`.
- `form`: Form-based authentication is required. Provide a `username`, `password`, `usernameField`, `passwordField`, and `loginPath`.
- `inherit`: Inherit the security configuration from the content source.

### Response

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

The following returned properties are populated after the crawler has run:

| Property | Description |
| --- | --- |
| `crawlingInstance` | The actual search-middleware node that performs the crawls. Will state the actual Pod name in Kubernetes. |
| `lastCrawled` | UNIX timestamp of the last time the crawler ran. |
| `lastCrawlDuration` | Last runtime of the crawler in milliseconds. |
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

If enabled during the Helm installation, the search v2 configures out-of-the box crawlers for default content sources. These crawlers are configured with the default seedlist URLs and credentials. You can adjust the configuration of these crawlers to your needs.

## Forcing a full re-crawl

In some cases, it might be necessary to force a full re-crawl of a data source. Re-crawling a data source is a two-step process:
1. [Remove existing data in the content source index.](#removing-existing-data-in-the-content-source-index)
2. [Trigger the crawler with the clear_timestamp parameter.](#triggering-the-crawler-with-the-clear_timestamp-parameter)

Doing so is a two step process:

### Remove existing data in the Content Source index

A full crawl will not inform you about documents that do not exist anymore. Therefore, it is recommended to remove all content from the content source index. Removing all content ensures that only the newly reported documents by the seedlist are actually stored and returned in the search results.

To remove all existing data, use the Push REST API endpoint to delete by query:

`DELETE` - `/dx/api/search/v2/contentsources/<content_source_id>/documents/byquery`

If you leave the query to match all documents, you must delete all documents stored in the content source index:

```json
{
  "query": {}
}
```

### Trigger the crawler with the clear_timestamp parameter

After the data has been deleted, you can trigger your crawler again and provide the query parameter `clear_timestamp` with the value `true`.  
This removes the currently stored `incrementalTimestamp` of the crawler and triggers a new, full crawl.

Call the `/dx/api/search/v2/crawlers/{crawler_id}/trigger?clear_timestamp_true` endpoint with a `POST` request.

After the crawler has run, all current state data is indexed in the content source.
