# Secure communications with the LDAP server

Though Lightweight Directory Access Protocol (LDAP) underlies many security functions, it is not an inherently secure protocol. If LDAP communications are not secured, anyone with access to the network between HCL Digital Experience and the LDAP server could trivially obtain user names, passwords, or other sensitive data. The Internet Engineering Task Force advocates securing [LDAP communications via TLS](https://www.rfc-editor.org/rfc/rfc4513) (SSL). HCL Digital Experience configuration tasks and associated procedures enable you to secure LDAP communications.

## Recommended actions and considerations 

- When you initially integrate HCL Digital Experience with the LDAP, ensure that LDAP communications are over TLS.

    - Refer to the [Product Documentation](https://help.hcltechsw.com/digital-experience/8.5/config/cw_ldap.html) for general instructions.

    - For additional guidance on LDAP integration, refer to the [LDAP Integration Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0076380).

- If you initially configured non-secure communications with LDAP (e.g. port 389), you may use the WebSphere Application Server Integrated Solutions Console to update the LDAP definition to use a secure connection instead (e.g. port 636).

    - For example, for an LDAP in a federated repository:

        - Global security > Federated repositories > Repository Identifier >

            - Port

            - Require SSL communications

            - SSL configuration

    - Refer to Product Documentation or LDAP Integration Guide, linked above, for instructions on getting the LDAP server's certificate.

- Recognize that nearly all requests to the LDAP server are done as the LDAP bind user (primarily through the WebSphere Application Server component, Virtual Member Manager (VMM) - assuming a federated repository, no ESM, and only custom code that uses PUMA for user/group requests; the only exception is the request to validate a user's password during authentication, which is an LDAP bind operation as that user identity). The LDAP server is entirely reliant upon HCL Digital Experience access controls to protect objects in the Directory Information Tree (DIT) to which the bind user has access. Ask the LDAP administrator to verify that access rights have been assigned to the bind user according to the principle of least privilege.