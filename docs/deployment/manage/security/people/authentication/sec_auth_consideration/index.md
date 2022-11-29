# Security authentication considerations

Security and authentication are key elements of a production environment. Learn about single sign-on, credential vaults and external security managers.

-   **[Authentication](../sec_auth_consideration/authentication.md)**  
Authentication requires users to identify themselves to gain access to a system or resources. The combination of a user ID and a password is the most common method of authentication. Users can identify themselves immediately upon entry to the system or the system can prompt users to identify themselves before accessing protected resources. After users successfully authenticate, the system identifies which resources-specific users have sufficient authorization to access.
-   **[Federal Information Processing Standards and \(NIST\) SP800-131a](../sec_auth_consideration/plan_fips.md)**  
Federal Information Processing Standards \(FIPS\) and NIST SP800-131a are standards and guidelines issued by the United States National Institute of Standards and Technology \(NIST\) for federal government computer systems. FIPS and SP800-131a are developed when there are compelling federal government requirements for standards, such as for security and interoperability, but acceptable industry standards or solutions do not exist.
-   **[Planning for single sign-on](../sec_auth_consideration/plan_sso.md)**  
Single sign-on provides a secure method of authenticating a user one time within an environment and using that authentication \(for the duration of the session\) to access other applications, systems, and networks. In the context of HCL Digital Experience there are two single sign-on realms; one realm from the client to the portal and other web applications and the other realm from the portal to the backend applications.
-   **[Secure communications using SSL](../sec_auth_consideration/ssloverview.md)**  
Configuring HCL Digital Experience for SSL adds security to the client-portal exchange. It encrypts all traffic between the client browser and the server, so that no one can "eavesdrop" on the information that is exchanged over the network between the client browser and HCL Digital Experience. In addition, assuming that the IBM WebSphere Application Server is also configured to accept or require SSL connections, the LTPA Token and other security and session information can be protected against hijack and replay attacks.
-   **[Credential Vault](../sec_auth_consideration/plan_credvault.md)**  
The Credential Vault is a service that stores credentials that allow portlets to log in to applications outside the realm on behalf of the user.
-   **[Caching considerations](../sec_auth_consideration/cache_consid.md)**  
Information that is protected by access control and is therefore restricted to a limited set of people needs special consideration when served from an access control agnostic cache. These considerations especially apply to server side caches but you also need to consider local browser caches.


**Related information**  


[Web Security concepts and considerations for HCL Digital Experience](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0085886&sys_kb_id=9dbe4e32db89a814a45ad9fcd396194d)

[WebSphere Application Server V7.0 Security Guide](http://www.redbooks.ibm.com/abstracts/sg247660.html?Open)

