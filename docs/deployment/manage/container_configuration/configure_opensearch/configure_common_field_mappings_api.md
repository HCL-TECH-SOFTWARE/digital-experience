# Configuring common field mappings by using the REST API

Use the REST API to manage common field mappings. Common field mappings define how source-specific document fields (for example, the `title` field in `wcm` or the `summary` field in `dam`) map to standard search fields (`title`, `description`, `link`, `type`, and `tags`) for each content source type. Supported `contentSourceType` values are `wcm`, `dam`, `jcr`, `portal`, `website`, and `people`.

You can access all API endpoints through the Swagger UI at `/dx/api/search/v2/explorer`.

!!! note
    The `GET` endpoints for common field mappings are unprotected. All other operations require authentication. For more information, refer to [Authenticating as a search administrator](configure_a_contentsource_api.md#authenticating-as-a-search-administrator) and [Authenticating as a DX administrator](configure_a_contentsource_api.md#authenticating-as-a-dx-administrator).

## Listing common field mappings

To list all common field mappings, send a `GET` request to the `/dx/api/search/v2/mapping/common-fields` endpoint. Each mapping includes an `isDefault` indicator for the content source type.

## Listing required fields

To view the list of required standard field names, send a `GET` request to the `/dx/api/search/v2/mapping/common-fields/required-fields` endpoint.

## Retrieving the mapping for a content source type

To retrieve the mapping for a specific content source type, send a `GET` request to the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint, where `{contentSourceType}` is the content source type.

## Searching common field mappings

To search mappings by key or mapped value across all content source types, send a `POST` request to the `/dx/api/search/v2/mapping/common-fields/search` endpoint.

## Adding fields to a mapping

To add new fields to a mapping, send a `POST` request to the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint, where `{contentSourceType}` is the content source type, with the following payload. At least one field is required.

```json
{
  "title": "title",
  "description": "summary",
  "link": "link",
  "type": "documentType",
  "tags": "tags",
  "customField": "sourceSpecificField"
}
```

## Replacing a mapping

To replace a mapping, send a `PUT` request to the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint, where `{contentSourceType}` is the content source type, with the following payload. All five standard fields are required.

```json
{
  "title": "title",
  "description": "summary",
  "link": "link",
  "type": "documentType",
  "tags": "tags"
}
```

## Updating a mapping

To update specific fields in an existing mapping, send a `PATCH` request to the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint, where `{contentSourceType}` is the content source type, with a payload specifying the fields to update:

```json
{
  "description": "summary",
  "customField": "sourceSpecificField"
}
```

<!--Let me know if this code block is accurate-->

## Deleting a mapping

To delete a custom mapping, send a `DELETE` request to the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint, where `{contentSourceType}` is the content source type. A subsequent `GET` request for that content source type returns the default mapping with `isDefault: true`.

## Response codes

| Status code | Description |
| --- | --- |
| `200` | The request succeeded. The endpoint returns the mapping object and the `isDefault` indicator. |
| `204` | The custom mapping was deleted successfully. |
| `400` | The source type is invalid, required fields are missing or invalid, or the request body is empty. |
| `404` | The mapping was not found for the specified content source type. |
| `409` | One or more fields already exist in the mapping. This code applies only to `POST` requests. |
