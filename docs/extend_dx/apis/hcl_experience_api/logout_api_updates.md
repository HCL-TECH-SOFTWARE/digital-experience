# Sample process flow: Login, accessing content, and logout

1. Execute Login API endpoint `auth/login` by entering a valid username and password.
2. Execute content API endpoint `/{accessType}/webcontent/contents/{contentId}` to fetch content.
3. Verify that the expected content payload is returned.
4. Execute Logout API endpoint `auth/logout`.

## Logout API response (updated)

The logout endpoint may include an optional `redirectUrl` field.

```json
{
  "statusCode": 200,
  "data": "You are successfully logged out",
  "redirectUrl": "https://portal.example.com/post-logout"
}
```

### Response fields

- `statusCode` (number): `200` for successful logout
- `data` (string): logout confirmation message
- `redirectUrl` (string, optional): post-logout redirect URL when provided by WCM Core API

If `redirectUrl` is not present, use the application's default post-logout navigation.

## Backward compatibility

No change is required for existing API consumers of `auth/logout`.

- Existing calls continue to work as-is.
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

- WCM Core API default logout behavior is unchanged. Without `autoRedirect=false`, WCM Core API continues its normal redirect behavior.
- `autoRedirect=false` is an optional parameter used by Experience REST API to retrieve the redirect target and return it as `redirectUrl`.
- Existing WCM Core API logout consumers are not affected.
