# Security-Related Fields

## Security Attribute Propagation

If the WebSphere Subject has not been customized—such as through a Trust Association Interceptor (TAI) or a custom WAS login module—then enabling Security Attribute Propagation (SAP) is not necessary. SAP can introduce additional overhead due to the extra processing it requires.

However, in some configurations, enabling SAP may improve performance by reducing the number of remote registry calls.

See [Security attribute propagation](https://www.ibm.com/docs/en/was/8.5.5?topic=users-security-attribute-propagation){target="_blank"} for more information.

If you want to enable SAP for functional reasons, you can reduce the overhead using the `com.ibm.CSI.disablePropagationCallerList` custom property. This will improve login performance. Adding this property and turning off SAP will give the best performance.

**Setting SAP when propagation is not required**

1. In the WebSphere Integrated Solutions Console (ISC), go to **Security > Global security > Authentication: Web and Sip security > Single sign-on (SSO)**.

2. Uncheck **Web inbound security attribute propagation**.

3. Click **Apply**.

4. Go to **Security > Global security > Custom properties > New...**.

5. Enter the following values:

    - **Name:** `com.ibm.CSI.disablePropagationCallerList`  
    - **Value:** `true`

6. Click **Apply**.

## Avoid refetching static content after logging in

Many resources do not change before and after logging in. These resources include the **ra: collection** URLs that are part of the theme. The same URL can safely be used for authenticated and unauthenticated users.

### Setting the Web Authentication Behavior

1. In the WebSphere ISC, go to **Security > Global security > Authentication: Web and SIP security > General Settings**.

2. Click **Authenticate only when the URI is protected** and check **Use available authentication data when an unprotected URI is accessed**.

3. Click **Apply**.

## Nested Group Cache

For more information regarding how to disable Nested Group Cache, refer to [Other Tuning Considerations - Nested Group Cache](./other_tuning_considerations.md#nested-group-cache).

## VMM Tuning

**VMM Context Pool**

Tune the Virtual Member Manager (VMM) context pool to improve the performance of concurrent access to an LDAP server.

The settings specified here depend on the number of users that will be accessing Portal concurrently.

### Setting the VMM Context Pool in ISC

1. In the WebSphere ISC, go to **Security > Global security > User account repository**.

2. Under **Available realm definitions**, select **Federated Repositories** from the dropdown.

3. Click **Configure**.

4. Click on the LDAP **Repository Identifier** <!--what are steps 4 and 5 for? Does not seem to be consistent with previous step-->

5. Click Performance under **Additional Properties**

**Setting the VMM context pool manually**

To set the VMM context pool manually, open your `<wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml` file and change the `contextPool` settings to match the following parameters:

```xml
<config:contextPool enabled="true" initPoolSize="10" maxPoolSize="40" poolTimeOut="0" poolWaitTime="3000" prefPoolSize="40"/>
```

### VMM context pool settings

| Context Pool Setting | Default Value | Value Used |
| --- | --- | --- |
| Initial Size             | `1`               | `10`           |
| Preferred Size           | `3`<br><br>Number of open connections to maintain to an LDAP server | `40` |
| Maximum Size             | `20`<br><br>A value of `0` allows the pool to grow as large as needed.<br><br>If access to the LDAP server is shared by many systems, this setting may allow an excessive number of connections. To avoid this, set the maximum pool size to a value appropriate for your environment. | `40` |


The number of active LDAP connections can be monitored by viewing the number of open connections on the LDAP server using this `netstat` command:

```
netstat -an | grep 389 | wc -l
```

!!! note
    - If you are using HTTPS to connect to the LDAP server, replace `389` in the `netstat` command with the SSL port (typically `636`).
    - If your network configuration requires the Portal server to connect to LDAP through a proxy (e.g., a firewall or load balancer) that breaks TCP connections without notifying endpoints, you may need to configure the pool timeout to prevent reusing aged connections.  
      For more information on connection pooling options, see [Session pool settings](https://www.ibm.com/docs/en/was/9.0.5?topic=settings-session-pool){target="_blank"}.

**VMM caches**

Tune VMM search results and attributes cache to improve the performance of VMM search.

**Setting the VMM caches in ISC**

1. In the WebSphere ISC, go to **Security > Global security > User account repository**.

2. Under **Available realm definitions**, select **Federated Repositories** from the dropdown.

3. Click **Configure**.

4. Click on the **LDAP Repository Identifier** <!--cannot recreate steps 4 and 5-->

5. Click ***Performance** under Additional Properties

**Setting the VMM caches Manually**

1. Open your `<wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml` file.

2. Change the `attributesCache` settings to match the following parameters:

    ```
    <config:attributesCache attributeSizeLimit="2000" cacheSize="8000" cacheTimeOut="1200" enabled="true"/>
    ```

3. Change the `searchResultsCache` settings to match the following parameters:

    ```
    <config:searchResultsCache cacheSize="8000" cacheTimeOut="600" enabled="true" searchResultSizeLimit="1000"/>
    ```

**VMM Attribute Cache Settings**

| Attribute Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache size | 4000 | 8000 |
| Cache Timeout | 1200 | 1200 |

**VMM Search Results Cache Settings**

| Search Results Cache Property | Default Value | Value Used |
| --- | --- | --- |
| Cache Size                   | `4000`            | `8000`         |
| Cache Timeout (seconds)      | `1200`            | `1200`         |

!!! Note
    With VMM caching content from the LDAP server, changes made to existing LDAP entries will not be visible to Portal until the cache entries expire.

During performance testing for the medium configuration, the VMM settings were optimized by adjusting the Attribute Cache and Search Results Cache sizes to 10,000. This tuning helped enhance performance by improving the efficiency of cache utilization.

It is recommended to apply similar VMM cache adjustments during your tests to achieve better performance, especially in scenarios with similar configurations. These settings can serve as a reference point for optimizing your system's performance.

**Advanced group configurations**

If your LDAP supports the group membership attribute, it is recommended to configure VMM to use it to improve performance. For more information on this attribute and how to configure VMM to use it, refer to 
[Virtual Member Manager integration](../../../../get_started/plan_deployment/traditional_deployment/user_registry_consideration/plan_vmm_int.md).
