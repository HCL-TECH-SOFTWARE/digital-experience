# Configuring common field mappings using REST API

This topic explains how to manage common field mappings using the REST API. Common field mappings define how source-specific document fields (for example, `wcm`'s `title` or `dam`'s `summary`) map to the standard search fields (`title`, `description`, `link`, `type`, `tags`) for each content source type. Supported `contentSourceType` values are `wcm`, `dam`, `jcr`, `portal`, `website`, and `people`.

You can access all API endpoints through a Swagger UI available at the following URL: `/dx/api/search/v2/explorer`.

!!! note
    The `GET` endpoints for common field mappings are unprotected. All other operations require authentication. For more information, refer to [Authenticating as a search administrator](configure_a_contentsource_api.md#authenticating-as-a-search-administrator) and [Authenticating as a DX administrator](configure_a_contentsource_api.md#authenticating-as-a-dx-administrator).

## Listing common field mappings

To list all common field mappings, call the `/dx/api/search/v2/mapping/common-fields` endpoint with a `GET` request. Each mapping includes an `isDefault` indicator per content source type.

## Listing required fields

To see the list of required standard field names, call the `/dx/api/search/v2/mapping/common-fields/required-fields` endpoint with a `GET` request.

## Getting the mapping for a content source type

To get the mapping for a specific content source type, call the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint with a `GET` request.

## Searching common field mappings

To search mappings by key or mapped value across all content source types, call the `/dx/api/search/v2/mapping/common-fields/search` endpoint with a `POST` request.

## Adding fields to a mapping

To add new fields to a mapping, call the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint with a `POST` request and the following payload. At least one field is required.

**Payload:**

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

To fully replace a mapping, call the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint with a `PUT` request. All 5 standard fields are required in the payload.

**Payload:**

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

To partially update specific fields in an existing mapping, call the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint with a `PATCH` request, using the same payload format as adding fields.

## Deleting a mapping

To delete a custom mapping, call the `/dx/api/search/v2/mapping/common-fields/{contentSourceType}` endpoint with a `DELETE` request. A subsequent `GET` request for that content source type returns the default mapping with `isDefault: true`.

## Response codes

| Code | Description |
| --- | --- |
| `200` | Success, with the mapping object and `isDefault` indicator |
| `204` | Deleted successfully |
| `400` | Invalid source type, missing/invalid fields, or empty body |
| `404` | Mapping not found for the specified source type |
| `409` | Field(s) already exist in the mapping (`POST` only) |
