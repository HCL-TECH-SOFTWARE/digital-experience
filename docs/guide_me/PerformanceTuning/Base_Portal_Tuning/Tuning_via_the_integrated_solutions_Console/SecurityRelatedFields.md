# Security Related Fields

## Security Attribute Propagation

If the WebSphere Subject has not been customized, for example through Trust Association Interceptor (TAI) or a custom WAS login module, then there is no need to enable Security Attribute Propagation. Security Attribute Propagation (SAP) can add extra overhead due to the extra processing required. However, there are certain configurations where performance might be better with security propagation enabled due to reduction of remote registry calls. See the [HCL Digital Experience 8.5 Help Center](https://help.hcltechsw.com/digital-experience/8.5/welcome/wp_welcome.html) (search for 'security attribute propagation') for a discussion of when propagating security attributes is desirable.

If you want to enable SAP for functional reasons, you can reduce the overhead using a custom property `com.ibm.CSI.disablePropagationCallerList`. This will improve login performance. Adding this property and turning off SAP will give the best performance.

### How to Set When Propagation Is Not Required

1. In the WebSphere Integrated Solutions Console
Security>Global security>Web and Sip security>Single sign-on(SSO) >uncheck Web inbound security attribute propagation

2. In the WebSphere Integrated Solutions Console

- Security > Global security > Custom properties > New

- Name: com.ibm.CSI.disablePropagationCallerList

- Value: true

## Avoid Refetching Static Content After Login

With the Portal 8.5 theme many resources do not change before and after logging in. These resources
include the ra: collection URLs that are part of the theme. The same URL can safely be used for
authenticated and unauthenticated users.

### How to Set
1. In the WebSphere Integrated Solutions Console:

    Security > Global security

2. Expand Web and SIP security

3. Click on General Settings

4. Check 'Use available authentication data when an unprotected URI is accessed'

5. Save

## Nested Group Cache

See the Nested Group Cache section under Other Performance Tuning of this document for a discussion of
disabling nested group cache.

## VMM Tuning

### VMM Context Pool

Tune the VMM Context Pool to improve the performance of concurrent access to an LDAP server.
The settings specified here depend on the number of users that will be accessing Portal concurrently.

### How to Set in ISC

1. In the WebSphere Integrated Solutions Console
    Security > Global security

2. Under Available realm definitions ensure Federated Repositories is selected
3. Click the Configure button
4. Click on the LDAP Repository Identifier
5. Click Performance under Additional Properties

### How to Set Manually

Edit <wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml.

Change the contextPool settings to match the following:

<config:contextPool enabled="true" initPoolSize="10" maxPoolSize="40" poolTimeOut="0" poolWaitTime="3000" prefPoolSize="40"/>


|Context Pool Setting| Default Value| Value Used|
|------|------|------|
|Initial Size| 1 |10|
|Preferred Size <br> Number of open connections to maintain to an LDAP server| 3 |40|
|Maximum Size <br> A value of 0 allows the pool to grow as large as needed. If access to the LDAP server is shared by many systems, this setting may allow an excessive number of connections to the LDAP server; in such a case, set the maximum pool size to a value appropriate to your environment.|20 |40|

The number of active LDAP connections can be monitored by viewing the number of open connections on
the LDAP server via the netstat command:

    netstat -an | grep 389 | wc -l

!!! note
    If your networking configuration requires your Portal server to access the LDAP server through a proxy (such as a firewall or a load balancer) that breaks TCP connections without notifying it’s endpoint, it may be necessary to modify the pool timeout to never reuse a connection past a certain age. View additional guidance on connection pooling options available from the IBM WebSphere Application Server Knowledge Center documentation: [Session pool settings](https://www.ibm.com/support/knowledgecenter/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/umj_sesspoolset.html)

## VMM Caches

Tune VMM search results and attributes cache to improve the performance of VMM search.

### How to Set in ISC

1. In the WebSphere Integrated Solutions Console
    Security > Global security

2. Under Available realm definitions ensure Federated Repositories is selected
3. Click the Configure button
4. Click on the LDAP Repository Identifier
5. Click Performance under Additional Properties

### How to Set Manually

- Edit <wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml.

- Change the attributesCache settings to match the following
<config:attributesCache attributeSizeLimit="2000" cacheSize="8000" cacheTimeOut="1200" enabled="true"/>

- Change the searchResultsCache settings to match the following:
<config:searchResultsCache cacheSize="8000" cacheTimeOut="600" enabled="true" searchResultSizeLimit="1000"/>

Table: VMM Attribute Cache Settings Attribute Cache

|Attribute Cache Property|Default Value| Value Used|
|----|----|----|
|Cache size |4000| 8000|
|Cache time out |1200 |1200|

Table: VMM Search Results Cache Settings

|Search Results Cache Property|Default Value | Value Used|
|----|---|----|
|Cache size 2000 |8000|
|Cache time out| 600 |600|

!!! note
    With VMM caching content from the LDAP server, changes made to existing LDAP entries will not be visible to Portal until the cache entries expire.

## Advanced group configurations

If your LDAP supports the group membership attribute, it is recommended to configure VMM to use it to gain a performance benefit. Details on the use of this attribute and steps to configure VMM to use it can be found here: [Virtual Member Manager integration](https://help.hcltechsw.com/digital-experience/8.5/plan/plan_vmm_int.html?query=vmm)