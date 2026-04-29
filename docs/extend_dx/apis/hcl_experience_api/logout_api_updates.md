# Sample process flow: Login, access content, and logout

1. Call the `auth/login` API endpoint with a valid username and password.
2. Call the `/{accessType}/webcontent/contents/{contentId}` API endpoint to retrieve content.
3. Verify that the expected content payload is returned.
4. Call the `auth/logout` API endpoint to sign out.

## Logout API response (updated)

The logout endpoint can include an optional `redirectUrl` field.

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
- `redirectUrl` (string, optional): Post-logout redirect URL provided by the WCM Core API. By default, this value is determined by the `redirect.logout.url` configuration property.

If `redirectUrl` is not present, use the application's default post-logout navigation.

### Configuring the logout redirect URL

The `redirectUrl` returned by the logout endpoint uses the `redirect.logout.url` property configured in one of the following locations:

- **ConfigService.properties**: The static configuration file for portal settings
- **WAS Console**: Dynamically configured via **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom properties**

For detailed instructions on setting the logout redirect URL and related timeout properties, see [Redirect behavior and timeout settings](../../deployment/manage/security/people/authentication/sec_auth_consideration/redirect_timeout_settings.md).

## Backward compatibility

No changes are required for existing API consumers of `auth/logout`.

- Existing calls continue to work without modification.
- `redirectUrl` is optional and additive.

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

Response example without redirect:

```json
{
  "statusCode": 200,
  "data": "You are successfully logged out"
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

Notes:

- The WCM Core API default logout behavior is unchanged. Without `autoRedirect=false`, the API continues its normal redirect behavior.
- `autoRedirect=false` is an optional parameter used by the Experience REST API to retrieve the redirect target and return it as `redirectUrl`.
- Existing WCM Core API logout consumers are not affected.