# How to Warm Up Your Portal Site

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

HCL Digital Experience leverages a large number of caches throughout the product. Caches offer many advantages to the HCL Digital Experience product, most notably they allow for significant performance improvements when the Portal server is under load.  When a Portal server is restarted the caches are emptied out. In the event of a planned (or unplanned) outage of the Portal server, it can take some time for the caches on a Portal server to become repopulated following a Portal server restart. Accessing the Portal server in a "cold" state before the caches have been populated can leave the end user experience degraded.

This document outlines the approach of warming up the Portal server using a series of scripted operating system commands. The code may be freely used/modified as needed for your Portal sever.

???+ info "DISCLAIMER OF WARRANTIES"
    The enclosed code is sample code created by HCL Corporation. This sample code is provided to you solely for the purpose of assisting in troubleshooting current issues or developing your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages. Note that debug of custom applications is beyond the scope of the HCL Support Contract.

## Instructions

1. Create either a .bat or .sh file depending on the operating system platform on which the Portal server is deployed (Windows- or Unix-based respectively).

2. For the first part of the script, start the ConfigWizard:

    ```shell
    cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin
    ./startServer.sh server1
    wget -qO/dev/null http://exampl.hcl.com:10200/hcl/wizard
    ```

    - Wget is recommended since it will recursively fetch multiple URLs, whereas curl will only fetch a single URL.

    - The -qO/dev/null command line parameter redirects standard output to /dev/null. For this specific scripted approach, output from wget is not needed.

3. For the second part of the script, start the Portal server:

     ```shell
     cd /opt/IBM/WebSphere/wp_profile/bin
     ./startServer.sh WebSphere_Portal
     ```

4. At this point, loading of Portal components in a browser will still be slow as the Portal server caches are not yet warmed up.  In the next part of the script, mimic access to the Portal server as an anonymous user:

     ```shell
     wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" http://example.hcl.com:10039/wps/portal
     ```

    !!! note
        The wget command is overriding the user-agent string to send "Mozilla-Loader".  This is because Portal treats wget as a web crawler, similar to search engines, and will serve Portal resources differently to those user-agents than normal web browsers.  Overriding the user-agent string forces Portal to treat wget as a normal web browser / normal user, which will accurately mimic Portal users hitting the Portal site.

5. The previous steps are helpful to warmup the anonymous part of the Portal site, but do not warm up the caches for logged in users.  In order to warm up the caches for logged in users, the following additions to the script are needed:

    ``` shell
    wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --keep-session-cookies --save-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid=wpsadmin&password=wpsadmin"
    ```

    !!! note
        This is a SINGLE line in the file.  This command is utilizing the Portal auto-login URL to login to the Portal server with a valid username and password. In this example, the administration user is being used, but any username / password could potentially be passed in.  The command also saves the cookies returned to a temporary file on the filesystem. The cookies will be needed by the login process (namely the LTPAToken2 and JSESSIONID cookies) during the next set of steps.

6. With a user logged in and cookies stored temporarily to a file on the filesystem, the following URLs will be used to access various parts of the Portal site:

    ```shell
    wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal"
    wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal/Administration"
    ```

    !!!note
        You may expand the list further as needed within your own custom scripting.  You could potentially access every page in your Portal site in this manner, so long as you have a Friendly URL, URL Mapping, and/or Vanity URL associated with each page in the Portal.

7. The warm up is now complete.  As a final step, remove the cookies in the /tmp/cookiefile.txt file.  This does NOT perform a logout from the Portal server.  However, it does ensure that there is no potentially sensitive information remaining on the Portal server.  To clear the file, run the following command:

    ```shell
    echo "" > /tmp/cookiefile.txt
    ```

## Complete Script

The complete script is as follows:

```shell
\# Run the following commands to start the Configuration Wizard.  
cd /opt/IBM/WebSphere/AppServer/profiles/cw_profile/bin  

./startServer.sh server1  
wget -qO/dev/null http://example.hcl.com:10200/hcl/wizard  

\# Run the following commands to start the Portal server.  
cd /opt/IBM/WebSphere/wp_profile/bin  

./startServer.sh WebSphere_Portal  

\# Run the following command to warm up the cache for anonymous users:  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" http://example.hcl.com:10039/wps/portal  

\# Run the following command to warm up the cache for logged in users.  
\# The first command logs in a user.  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --keep-session-cookies --save-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/portal/cxml/04_SD9ePMtCP1I800I_KydQvyHFUBADPmuQy?userid=wpsadmin&password=wpsadmin"  

\# Following commands access several pages as the logged in user to add them to the cache.  This section can be expanded as needed with additional URLs.  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal"  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt "http://example.hcl.com:10039/wps/myportal/Administration"  

\# Clear the stored cookies to remove any sensitive data.  
echo "" > /tmp/cookiefile.txt  
```

## Consideration 1: User Populations

It is important to warm up not just the Portal administration user but also a user ID that accurately mimics each user populations in Portal.  Such user populations typically are derived from business requirements, not technical implementation.  Using a healthcare company as an example, you could typically expect to see the a composition of user populations similar to the following:

- Portal Administrators
- Business Administrators
- Members
- Providers

A user ID from each of the user populations would be need to be included in the warmup script to ensure each user population can be properly warmed up on the Portal site. While some of the portlets, pages, etc. from the Portal will overlap between user populations, not all items will, and having a separate user ID for each user population will ensure that user population has its caches warmed up in full.

## Consideration 2: More complex configurations

**Clusters:**
The warmup script is targeted towards a standalone system. In a cluster, each Portal server would need to be accessed directly to ensure it is warmed up. Pointing the warmup script to the web server in front of the Portal servers is not sufficient, as the web server may randomly load balance the requests to any given Portal server, not properly warming up each individual server.  

**External Security Managers (ESM) / Single-Sign On (SSO) solutions:**
Portal environments which leverage WebSEAL, Siteminder, SPNEGO, SAML, OpenIDConnect, etc. will have difficulty implementing the script provided in this document. Such configurations are much more complex than passing a single username and password via an auto-login URL.  While the script would still work with such configurations - the intention of the script (to accurately warm-up a site to mimic a real Portal user) would not be as accurate with an ESM in place.  

**Heterogenous LDAP Data:**
An LDAP server is standard in many Portal configurations.  In many Portal configurations, LDAP data looked up for userA may be cached and reused by userB, userC, etc. that shares the same LDAP data as userA.  Most commonly, LDAP groups will overlap and cached data will be returned rather than going out to the LDAP for the group data every time. In LDAPs which contain a large amount of data that does not overlap (e.g. each user is truly unique and may not share similar data with another user) the warmup script will not be helpful in warming up LDAP caches. The warmup script assumes a fair bit of overlap in LDAP data - e.g. the user populations are homogenous within each other.

## Consideration 3: Impersonation

While this script can be used for known usernames and passwords, in practice in a Production environment access to the passwords of production users will not be available. If one or more "dummy" userIDs can be created to accurately mimic various groups of user populations, that can provide an acceptable workaround. However, in practice, such dummy user IDs are difficult to implement in Production as well.

**Solution:** Leverage impersonation programmatically within the script. You can feasibly create a page within Portal, create a custom impersonation portlet leveraging the impersonation API, and then programmatically access the page to kick off the impersonation process.

```script
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/cookiefile.txt --keep-session-cookies --save-cookies /tmp/impcookiefile.txt "http://example.hcl.com:10039/wps/myportal/imppage?user=testuser"  
wget -qO/dev/null --user-agent=agent-string="Mozilla-Loader" --load-cookies /tmp/impcookiefile.txt --keep-session-cookies --save-cookies /tmp/impcookiefile.txt "http://example.hcl.com:10039/wps/myportal"  
```

!!! note
    This is psuedo-code only and was not implemented as a part of authoring process of this document.  The psuedo-code assumes the custom impersonation portlet would call request.getQueryString() via the request and begin the impersonation process with that user ID, saving the new LtpaToken2 cookie to the "impcookiefile.txt".  The next request to /wps/myportal would then issue a JSESSIONID cookie for the impersonated cookie, also needing to be saved to the "impcookiefile.txt".  In such a setup, you need not know the user's password, yet, you can accurately warmup the site with that user ID via impersonation.  
