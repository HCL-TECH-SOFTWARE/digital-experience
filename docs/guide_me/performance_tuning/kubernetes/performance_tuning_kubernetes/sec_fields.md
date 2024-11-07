# Security-Related Fields

## Security Attribute Propagation

If the WebSphere Subject has not been customized, for example through Trust Association Interceptor (TAI) or a custom WAS login module, then there is no need to enable Security Attribute Propagation. Security Attribute Propagation (SAP) can add extra overhead due to the extra processing required. However, there are certain configurations where performance might be better with security propagation enabled due to reduction of remote registry calls. See [Security attribute propagation](https://www.ibm.com/docs/en/was/8.5.5?topic=users-security-attribute-propagation){target="_blank"} for more information.

If you want to enable SAP for functional reasons, you can reduce the overhead using a custom property **com.ibm.CSI.disablePropagationCallerList**. This will improve login performance. Adding this property and turning off SAP will give the best performance.

**How to Set When Propagation Is Not Required**

1. In the WebSphere Integrated Solutions Console

Security→Global security→Web and Sip security→Single sign-on(SSO) →uncheck 'Web inbound security attribute propagation'

2. In the WebSphere Integrated Solutions Console Security → Global security → Custom properties → New

**Name:** `com.ibm.CSI.disablePropagationCallerList`  
**Value:** `true`

## **_Avoid Refetching Static Content After Login_**

Many resources do not change before and after logging in. These resources include the **ra: collection** URLs that are part of the theme. The same URL can safely be used for authenticated and unauthenticated users.

How to Set

1. In the WebSphere Integrated Solutions Console: Security → Global security
2. Expand Web and SIP security
3. Click on General Settings
4. Check 'Use available authentication data when an unprotected URI is accessed'
5. Save

## Nested Group Cache

See the Nested Group Cache Section under Other Performance Tuning of this document for a discussion of disabling nested group cache.

## VMM Tuning

**VMM Context Pool**

Tune the VMM Context Pool to improve the performance of concurrent access to an LDAP server.

The settings specified here depend on the number of users that will be accessing Portal concurrently.

**How to Set in ISC**

1. In the WebSphere Integrated Solutions Console Security → Global security
2. Under **Available realm definitions** ensure Federated Repositories is selected
3. Click the **Configure** button
4. Click on the LDAP **Repository Identifier**
5. Click Performance under **Additional Properties**

**How to Set Manually**

Edit &lt;wp_profile_root&gt;/config/cells/&lt;cellname&gt;/wim/config/wimconfig.xml.

Change the contextPool settings to match the following:

&lt;config:contextPool enabled="true" initPoolSize="10" maxPoolSize="40" poolTimeOut="0" poolWaitTime="3000" prefPoolSize="40"/&gt;

**VMM Context Pool Settings**

| Context Pool Setting | Default Value | Value Used |
| --- | --- | --- |
| Initial Size | 1 | 10  |
| Preferred Size | 3<br><br>Number of open connections to maintain to an LDAP server | 40  |
| Maximum Size | 20<br><br>A value of 0 allows the pool to grow as large as needed.<br><br>If access to the LDAP server is shared by many systems, this setting may allow an excessive number of connections to the LDAP server; in such a case, set the maximum pool size to a value appropriate to your environment | 40 |

The number of active LDAP connections can be monitored by viewing the number of open connections on the LDAP server via the netstat command:
**netstat -an | grep 389 | wc -l**

Note: If your networking configuration requires your Portal server to access the LDAP server through a proxy (such as a firewall or a load balancer) that breaks TCP connections without notifying it’s endpoint, it may be necessary to modify the pool timeout to never reuse a connection past a certain age. View additional guidance on connection pooling options available from the [IBM WebSphere Application Server Knowledge Center documentation](https://www.ibm.com/docs/en/was/9.0.5?topic=settings-session-pool){target="_blank"}.

**VMM Caches**

Tune VMM search results and attributes cache to improve the performance of VMM search.

**How to Set in ISC**

1. In the WebSphere Integrated Solutions Console Security → Global security
2. Under **Available realm definitions?** ensure **Federated Repositories** is selected
3. Click the **Configure** button
4. Click on the **LDAP Repository Identifier**
5. Click ***Performance** under Additional Properties

**How to Set Manually**

Edit &lt;wp_profile_root&gt;/config/cells/&lt;cellname&gt;/wim/config/wimconfig.xml.

Change the **attributesCache** settings to match the following

&lt;config:attributesCache attributeSizeLimit="2000" cacheSize="8000" cacheTimeOut="1200" enabled="true"/&gt;

Change the **searchResultsCache** settings to match the following:

&lt;config:searchResultsCache cacheSize="8000" cacheTimeOut="600" enabled="true" searchResultSizeLimit="1000"/&gt;

**VMM Attribute Cache Settings:**

| Attribute Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache size | 4000 | 8000 |
| Cache Timeout | 1200 | 1200 |

**VMM Search Results Cache Settings:**

| Search Results Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache Size | 2000 | 8000 |
| Cache Timeout | 600 | 600 |

Note that with VMM caching content from the LDAP server, changes made to existing LDAP entries will not be visible to Portal until the cache entries expire.

In our performance testing for the medium configuration, we optimized the VMM (Virtual Memory Manager) settings by adjusting the Attribute Cache size and Cache Search Results to **10,000**. This tuning helped enhance performance by improving the efficiency of cache utilization.

We recommend applying similar VMM cache adjustments during your tests to achieve better performance, especially in scenarios with similar configurations. These settings can serve as a reference point for optimizing your system's performance.

**Advanced group configurations**

If your LDAP supports the group membership attribute, it is recommended to configure VMM to use it to gain a performance benefit. Details on the use of this attribute and steps to configure VMM to use it can be found in [Virtual Member Manager integration](../../../../get_started/plan_deployment/traditional_deployment/user_registry_consideration/plan_vmm_int.md).