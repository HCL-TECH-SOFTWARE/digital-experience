# Nonce values for Content-Security-Policy header 

Inline script is considered risky, and is not recommended. But if it must be used with HCL Digital Experience Container Update CF192 and higher releases, then a nonce value must be appended to the script tag.

**Note:** In the DX default implementation of Content Security Policy, the nonce value is not appended to any script tags due to the risk of marking malicious script as valid. Style changes are considered less risky, therefore, nonce values are appended to style tags.

For example, the nonce value that would be included on the header looks like this:

```
Content-Security-Policy: script-src 'nonce-EDNnf03nceIOfn39fn3e9h3sdfa’
```

The same nonce value would be included on the script tag as well:

```
<script nonce="EDNnf03nceIOfn39fn3e9h3sdfa">
     var element = document.getElementById(“myelement”);</script>
```

DX now supplies a CSPService which can be used to obtain a unique nonce value. Customers can use this service to append a nonce to any inline script that they choose to permit in custom code. The format to obtain a nonce from the service is:

```
String nonce=CSPService.getInstance().getNonce();
```

The implementation supports generation of 128-bit and random nonce values. For more information, refer [W3C specifications- Content Security Policy Level 3](https://w3c.github.io/webappsec-csp/#security-nonces).

**Parent topic:**[Content Security Policy ](../security/content_security_policy.md)

