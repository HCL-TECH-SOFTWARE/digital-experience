# Sample process flow: Login, access content, and logout

1. Call the `auth/login` API endpoint with a valid username and password.  
2. Call the `/{accessType}/webcontent/contents/{contentId}` API endpoint to retrieve content.  
3. Verify that the expected content payload is returned.  
4. Call the `auth/logout` API endpoint to sign out.

## Logout API response (updated)

The logout endpoint includes a `redirectUrl` field.

```json
{
  "statusCode": 200,
  "data": "You are successfully logged out",
  "redirectUrl": "https://portal.example.com/post-logout"
}
```

## Response fields

- `statusCode` (number): 200 indicates a successful logout
- `data` (string): Logout confirmation message
- `redirectUrl` (string): Post-logout redirect URL provided by the WCM Core API. This value is determined by the `redirect.logout.url` configuration property. If no `redirect.logout.url` is specified, the portal determines the default page in the public portal area and uses its URL.

The returned value is either the configured logout redirect URL or the computed default public portal page URL.

### Configuring the logout redirect URL

The `redirectUrl` returned by the logout endpoint uses the `redirect.logout.url` property configured in one of the following locations (whichever is available for DX Compose or DX Core):

- **ConfigService.properties**: The static configuration file for portal settings (usually portal home URL)
- **WAS Console**: Dynamically configured via **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom properties**

For detailed instructions on setting the logout redirect URL and related timeout properties, see [Redirect behavior and timeout settings](../../../guide_me/howto/administration/RedirectTimeout.md).

For property-level behavior of `redirect.logout` and `redirect.logout.url` (including the default public-portal-page redirect when no URL is specified), see [Portal service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/index.md).

## Backward compatibility

No changes are required for existing API consumers of `auth/logout`.

- Existing calls continue to work without modification.
- `redirectUrl` is included in logout responses and can be used by clients for post-logout navigation.

## Sample API calls

### Experience REST API logout

```bash
curl -X POST "http://localhost:3000/dx/api/core/v1/auth/logout" \
  -H "Cookie: LtpaToken2=<authentication-token>"
```

Response example with redirect:

```json
{
  "statusCode": 200,
  "data": "You are successfully logged out",
  "redirectUrl": "https://portal.example.com/home"
}
```

### WCM Core API logout (default behavior)

```bash
curl -i -X GET "https://<portal-host>/<WPS_PERSONALIZED_HOME>/!ut/p/a1/04_SD9OPcrMKyc9PLXZ2iXfUj9SPstSPzMnXL8hxVAQAAFhKBg!!/" \
  -H "Cookie: LtpaToken2=<authentication-token>"
```

### WCM Core API logout (optional parameter)

```bash
curl -i -X GET "https://<portal-host>/<WPS_PERSONALIZED_HOME>/!ut/p/a1/04_SD9OPcrMKyc9PLXZ2iXfUj9SPstSPzMnXL8hxVAQAAFhKBg!!/?autoRedirect=false" \
  -H "Cookie: LtpaToken2=<authentication-token>"
```

!!! notes

    - The WCM Core API default logout behavior is unchanged. Without `autoRedirect=false`, the API continues its normal redirect behavior.
    - `autoRedirect=false` is an optional parameter used by the Experience REST API to retrieve the redirect target and return it as `redirectUrl`.
    - Existing WCM Core API logout consumers are not affected.