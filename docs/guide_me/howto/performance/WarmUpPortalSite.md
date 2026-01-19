# How to warm up your Portal site

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

HCL Digital Experience (DX) leverages a large number of caches throughout the product. Caches offer many advantages to the HCL DX product, including significant performance improvements when the Portal server is under load.  When a Portal server is restarted, the caches are emptied. In the event of a planned or unplanned disruption of the Portal server, it can take some time for the caches on a Portal server to be repopulated following a restart. Accessing the Portal server in a "cold" state before the caches are populated can leave the end user experience degraded.

This article outlines the approach of warming up the Portal server using a series of scripted operating system commands. The code may be freely used or modified as needed for your Portal sever.

???+ info "DISCLAIMER OF WARRANTIES"
    The enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting in troubleshooting current issues or developing your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages. Note that debug of custom applications is beyond the scope of the HCL Support Contract.

## Instructions

Create a .bat (Windows) or .sh (Unix) file containing the following script to warm up the Portal server caches:

```shell
# 1. Start the Configuration Wizard.  
cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin  

./startServer.sh server1  
wget -qO/dev/null http://example.hcl.com:10200/hcl/wizard  

# 2. Start the Portal server.  
cd /opt/IBM/WebSphere/wp_profile/bin  

./startServer.sh WebSphere_Portal  

# 3. Warm up the cache for anonymous users:  
# Uses "Mozilla-Loader" to bypass default crawler restrictions and ensure full page rendering  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" http://example.hcl.com:10039/wps/portal  

# 4. Warm up the cache for logged in users.  
# Part A: Logs in using the auto-login URL and saves cookies to /tmp/cookiefile.txt
# IMPORTANT: The command below must remain on a SINGLE line.
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --keep-session-cookies --save-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid=wpsadmin&password=wpsadmin"  

# Part B: Accesses protected pages using the saved cookies to warm up the cache.
# You can expand the list below with additional URLs to warm up other parts of your site.
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal"  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal/Administration"  

# 5. Clear the stored cookies to remove any sensitive data.  
echo "" > /tmp/cookiefile.txt  
```

### Configuration details

- `wget` is recommended since it recursively fetches multiple URLs (unlike `curl`).
- The `-qO/dev/null` command line parameter redirects standard output to `/dev/null`. For this specific scripted approach, output from `wget` is not needed.
- The `wget` command is overriding the `user-agent` string to send `"Mozilla-Loader"`. Portal treats `wget` as a web crawler, similar to search engines, and serves Portal resources differently to those user-agents than normal web browsers. This override forces Portal to treat the request as a normal user browser, ensuring the cache warms up accurately.
- The script uses the Portal auto-login URL to authenticate. It saves session cookies (`--save-cookies`) to a temporary file and reuses them (`--load-cookies`) to access protected pages such as `wps/myportal`.
- The final step clears the cookie file to ensure no sensitive session data remains on the server.

## User populations

To ensure full cache coverage, the script must warm up a user ID for each distinct user population. While shared components will overlap, role-specific content requires distinct users.

Common user populations include:

- Portal Administrators
- Business Administrators
- Members
- Providers

## Complex environments

For clusters, run the script against each Portal server directly. Do not target the load balancer or web server, as they distribute requests randomly and will not guarantee that every Portal server is warmed up.

For External Security Managers (ESM) and SSO solutions, environments using WebSEAL, SiteMinder, SPNEGO, SAML, or OpenID Connect require complex authentication flows. The simple auto-login URL used in this script may not work effectively if the ESM intercepts or blocks the request.

For heterogenous LDAP data, this script is most effective when user populations share overlapping LDAP group data. If your LDAP data is highly unique per user (little overlap), the script will provide limited caching benefits for LDAP lookups.

## Impersonation

Production environments often restrict access to user passwords, making it difficult to use "dummy" accounts for warming up caches.

To resolve this, leverage the Impersonation API. You can create a custom portlet that accepts a user ID using a query string and initiates a session for that user programmatically.

The following pseudo-code demonstrates this approach:

```script
# 1. Initiate impersonation (saves LtpaToken2 to cookie file)  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt --keep-session-cookies --save-cookies /tmp/impcookiefile.txt "http://example.hcl.com:10039/wps/myportal/imppage?user=testuser"  

# 2. Access portal as impersonated user (saves JSESSIONID)  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/impcookiefile.txt --keep-session-cookies --save-cookies /tmp/impcookiefile.txt "http://example.hcl.com:10039/wps/myportal"  
```

!!! note
    - This is pseudo-code. It assumes you have created a custom portlet that calls `request.getQueryString()` to retrieve the user ID and begin the impersonation process.
    - This sequence allows you to accurately warm up caches for specific user IDs without requiring their passwords: 
        1. The first command calls the custom portlet. The portlet initiates the session and returns an `LtpaToken2` cookie, which is saved to `impcookiefile.txt`.  
        2. The second command uses that token to access the standard Portal interface. This triggers the creation of a `JSESSIONID` for the impersonated user, which is also added to the cookie file.  
