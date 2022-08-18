---
id: h_wab_unconfig
title: Disabling the web application bridge
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The portal administrator collects information about the content provider and its applications and then follows basic configuration steps to enable the web application bridge.

1.  Run the following task to disable the web application bridge. This task automatically deploys the Reverse Proxy servlet \(RPS\) back to the default host and sets the RPS context root to /wps/vwat. It also removes the virtual host name.

    -   AIX® HP-UX Linux™ Solaris:./ConfigEngine.sh undeploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DWasPassword=password
    -   Windows™: ConfigEngine.bat undeploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DWasPassword=password
    -   IBM® i: ConfigEngine.sh undeploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DWasPassword=password
    -   z/OS®:./ConfigEngine.sh undeploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DWasPassword=password
    virtualHostName is the name of the virtual host; for example, wab\_host. virtualHostAlias is the DNS alias name that is used to access the applications on the virtual host; for example, wab.portal.com.

2.  Complete the following steps to disable single sign-on between portal and the virtual host alias that was created in the previous step.

    1.  Log in to WebSphere® Integrated Solutions Console.

    2.  Go to **Security** \> **Global Security** \> **Web and SIP security** \> **Single sign-on \(SSO\)**.

    3.  Clear the domain name.

    4.  Restart the HCL Digital Experience server.

3.  Remove the virtual host alias from the DNS server.


