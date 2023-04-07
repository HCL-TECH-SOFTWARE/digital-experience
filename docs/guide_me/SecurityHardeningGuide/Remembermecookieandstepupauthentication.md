# Remember me cookie and step up authentication

The [Remember me](https://help.hcltechsw.com/digital-experience/8.5/security/cfg_auth.html) cookie allows HCL Digital Experience to identify and optionally authenticate users based on a persistent cookie. [Step up authentication](https://help.hcltechsw.com/digital-experience/8.5/security/cfg_auth.html) enforces stricter authentication requirements for particularly sensitive resources.

## Recommended actions and considerations

- Enable the remember me cookie only if your application requires it.

- [J2EE authentication](https://help.hcltechsw.com/digital-experience/8.5/security/configure_remme_j2eeauth.html) allows users to authenticate to Digital Experience with only a remember me cookie (i.e. without presenting any other credentials, such as user name and password). Carefully consider your security requirements before enabling this feature. Leave it disabled unless you have specific functional requirements for it.

    - Does your application participate in an SSO realm with any other applications via LTPA? If so, consider restricting the domain of the LTPA token to the Digital Experience server. Other applications likely could not distinguish between an LTPA token issued via remember me versus normal authentication methods.

- If J2EE authentication is enabled, review the resource hierarchy and assign any particularly sensitive resources an authentication level higher than Identified. Step-up authentication will then force users to submit credentials to access those resources.

- Set the [Secure attribute on the RememberMe](https://help.hcltechsw.com/digital-experience/8.5/security/remme_prop.html) cookie.