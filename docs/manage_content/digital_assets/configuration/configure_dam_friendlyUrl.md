# Configure Friendly URLs for Digital Asset Management

Optional custom path definition to access the DAM resources using friendly URLs. This will create a new context route as defined in `friendlyUrlContextRoot`. By default, if no value is set for `friendlyUrlContextRoot`, this feature is disabled.

```yaml
configuration:
  digitalAssetManagement:
    friendlyUrlContextRoot: ""
```

Example:

```yaml
configuration:
  digitalAssetManagement:
    friendlyUrlContextRoot: "/assets"
```

When the context root is set as `/assets`, it will make the  DAM assets accessible at `/assets/{collection name/unique id}/{asset name/unique id}`.

The following optional query parameters can be used with the friendly URLs:

- `binary`: `true`/`false` - retrieves the asset file as a binary if true or the metadata if false 
- `rendition`: `Original`/`Desktop`/`Tablet`/`Smartphone`/`{custom rendition}` - retrieves the specified rendition of the asset 
- `version`: (Version number or id) - retrieves the specified version of the asset

This will form URLs in the following form:

`/assets/{collection name/unique id}/{asset name/unique id}?binary={true/false}&rendition={rendition type}&version={version id}`