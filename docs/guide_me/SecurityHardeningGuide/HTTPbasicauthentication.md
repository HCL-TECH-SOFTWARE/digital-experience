# HTTP basic authentication

HCL Digital Experience provides a trust association interceptor (TAI) for [HTTP Basic Authentication](https://www.ietf.org/rfc/rfc2617.txt) to allow simple clients, such as WebDAV, to connect. HTTP Basic Authentication is not as secure as form-based login via HTTPS with LTPA for SSO. Basic authentication base-64 encodes the user ID and password and submits them with every request. Base-64 encoding is not secure and can be trivially decoded.

## Recommended actions and considerations

• Disable the HTTP Basic Authentication TAI if you are not using WebDAV (e.g. to manage custom themes). Do so by setting [enabled=false](https://help.hcltechsw.com/digital-experience/8.5/security/tait_cfg_hba4sc.html).
    ◦ Consider enabling this TAI on an as-needed basis (e.g. when deploying themes, installing maintenance).

• If you require the HTTP Basic Authentication TAI, tightly restrict which requests the TAI will attempt to authenticate, preferably with the [configuration parameters](https://help.hcltechsw.com/digital-experience/8.5/security/tait_cfg_hba4sc.html):
    ◦ userAgentWhiteList
    ◦ urlWhiteList

• Note that WebDAV/HTTPS is [not supported](https://help.hcltechsw.com/digital-experience/8.5/admin-system/webdav.html). Consider the security of your network when deciding where to run the WebDAV client, knowing that IDs and passwords may be transmitted while only base-64 encoded.
• Syndication relies on basic authentication, as provided by WebSphere Application Server. It can function over SSL and should be [configured to do so](https://help.hcltechsw.com/digital-experience/8.5/wcm/wcm_config_prop_syndication.html), considering the security of the network.