# Configuring NLS translations by using the REST API

Use the REST API to manage native language support (NLS) translations. NLS objects store locale-aware display names (translations) for search field names, keyed by language code (ISO 639-1 or locale variant, for example `en`, `fr`, `pt-br`, `zh-tw`). All translation keys must correspond to keys defined in the common field mappings.

You can access all API endpoints through the Swagger UI at `/dx/api/search/v2/explorer`.

!!! note
    Using the REST API endpoints requires authentication. For more information, refer to [Authenticating as a search administrator](configure_a_contentsource_api.md#authenticating-as-a-search-administrator) and [Authenticating as a DX administrator](configure_a_contentsource_api.md#authenticating-as-a-dx-administrator).

## Listing NLS translations

To list all NLS translations, send a `GET` request to the `/dx/api/search/v2/nls` endpoint. The response is paginated and supports `page` and `pageSize` query parameters.

## Creating an NLS translation

To create a new NLS translation for a language, call the `/dx/api/search/v2/nls` endpoint with a `POST` request and the following payload.

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

The request returns status code `409` if the language already exists. For more information on status codes, refer to [Response codes](#response-codes).

## Retrieving an NLS translation

To retrieve the NLS translation for a specific language, send a `GET` request to the `/dx/api/search/v2/nls/{language}` endpoint, where `{language}` is the language code or locale variant.

## Replacing an NLS translation

To replace all translations for a language, send a `PUT` request to the `/dx/api/search/v2/nls/{language}` endpoint, where `{language}` is the language code or locale variant, with the following payload:

```json
{
  "translations": {
    "title": "Titre"
  }
}
```

## Updating an NLS translation

To merge provided translations into a language while preserving existing keys, send a `PATCH` request to the `/dx/api/search/v2/nls/{language}` endpoint, where `{language}` is the language code or locale variant, with the following payload:

```json
{
  "translations": {
    "title": "Titre"
  }
}
```

<!--Let me know if this code block is accurate-->

## Deleting an NLS translation

To delete the NLS translation for a language, send a `DELETE` request to the `/dx/api/search/v2/nls/{language}` endpoint, where `{language}` is the language code or locale variant.

!!!note
    You cannot delete the default language `en`.

## Searching NLS translations

To search translation keys and values for a language, send a `POST` request to the `/dx/api/search/v2/nls/{language}/search` endpoint, where `{language}` is the language code or locale variant, with the following payload:

```json
{
  "searchTerm": "title"
}
```

The search is case-insensitive and matches substrings.

## Cleaning up orphaned translations

To remove orphaned translation keys that are no longer present in any field mapping, send a `POST` request to the `/dx/api/search/v2/nls/cleanup` endpoint.

## Response codes

| Status code | Description |
| --- | --- |
| `200` | The request completed successfully. |
| `201` | The NLS object was created successfully. |
| `204` | The NLS object was deleted successfully. |
| `400` | The request is invalid due to an invalid language code, empty translations, invalid field keys, or an attempt to delete `en`. |
| `404` | The requested NLS object was not found. |
| `409` | An NLS object for the specified language already exists. |
