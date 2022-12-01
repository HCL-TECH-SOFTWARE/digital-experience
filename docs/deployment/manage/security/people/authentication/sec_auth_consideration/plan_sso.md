# Planning for single sign-on

Single sign-on provides a secure method of authenticating a user one time within an environment and using that authentication (for the duration of the session) to access other applications, systems, and networks. In the context of HCL Digital Experience there are two single sign-on realms; one realm from the client to the portal and other web applications and the other realm from the portal to the backend applications.

Single sign-on for the client realm is established using the IBM® WebSphere® Application Server Lightweight Third Party Authentication (LTPA) token functionality or an Authentication Proxy. The LTPA token can also establish backend single sign-on if the backend application accepts it through the Credential Vault portlet or the Java Connector architecture.

## HCL Digital Experience and Java Authentication and Authorization Services

Single sign-on uses only the authentication portion of Java Authentication and Authorization Services \(JAAS\). HCL Digital Experience builds a JAAS Subject for each logged on user. The Subject consists of Principals and Credentials. A Principal is a piece of data, such as the user ID or the distinguished name that gives the Subject's identity. A Credential is a piece of data, such as a password or a CORBA Credential that can be used to authenticate a subject. The Subject carries around the Principals and Credentials that the portlet can use directly or through the credential service.


???+ info "Related information"
    - [Lightweight Third Party Authentication](https://www.ibm.com/docs/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/csec_ltpa.html)

