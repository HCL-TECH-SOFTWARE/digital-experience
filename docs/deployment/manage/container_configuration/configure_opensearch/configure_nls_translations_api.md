# Configuring NLS translations using REST API

This topic explains how to manage NLS (Native Language Support) translations using the REST API. NLS objects store locale-aware display names (translations) for search field names, keyed by language code (ISO 639-1 or locale variant, for example `en`, `fr`, `pt-br`, `zh-tw`). All translation keys must correspond to keys defined in the common field mappings.

You can access all API endpoints through a Swagger UI available at the following URL: `/dx/api/search/v2/explorer`.

!!! note
    These operations require authentication. For more information, refer to [Authenticating as a search administrator](configure_a_contentsource_api.md#authenticating-as-a-search-administrator) and [Authenticating as a DX administrator](configure_a_contentsource_api.md#authenticating-as-a-dx-administrator).

!!! note
    The default language `en` cannot be deleted.

## Listing NLS translations

To list all NLS translations, call the `/dx/api/search/v2/nls` endpoint with a `GET` request. The response is paginated and supports `page` and `pageSize` query parameters.

## Creating an NLS translation

To create a new NLS translation for a language, call the `/dx/api/search/v2/nls` endpoint with a `POST` request and the following payload. The call returns `409` if the language already exists.

**Payload:**

```json
{
  "language": "fr",
  "translations": {
    "title": "Titre",
    "description": "Description",
    "link": "Lien"
  }
}
```

## Getting an NLS translation

To get the NLS translation for a specific language, call the `/dx/api/search/v2/nls/{language}` endpoint with a `GET` request.

## Replacing an NLS translation

To fully replace the translations for a language, call the `/dx/api/search/v2/nls/{language}` endpoint with a `PUT` request.

**Payload:**

```json
{
  "translations": {
    "title": "Titre"
  }
}
```

## Updating an NLS translation

To merge provided translations into a language while preserving existing keys, call the `/dx/api/search/v2/nls/{language}` endpoint with a `PATCH` request, using the same payload format as replacing an NLS translation.

## Deleting an NLS translation

To delete the NLS translation for a language, call the `/dx/api/search/v2/nls/{language}` endpoint with a `DELETE` request. The default language `en` cannot be deleted.

## Searching NLS translations

To perform a case-insensitive substring search across translation keys and values for a language, call the `/dx/api/search/v2/nls/{language}/search` endpoint with a `POST` request and the following payload.

**Payload:**

```json
{
  "searchTerm": "title"
}
```

## Cleaning up orphaned translations

To remove orphaned translation keys that are no longer present in any field mapping, call the `/dx/api/search/v2/nls/cleanup` endpoint with a `POST` request.

## Response codes

| Code | Description |
| --- | --- |
| `200` | Success |
| `201` | NLS object created |
| `204` | Deleted successfully |
| `400` | Invalid language code, empty translations, invalid field keys, or attempt to delete `en` |
| `404` | NLS object not found |
| `409` | NLS object for the language already exists (create only) |
