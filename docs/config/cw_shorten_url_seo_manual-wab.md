# Manual Step: Redeploying the HCL Web Application Bridge to a virtual host

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual steps in this section of the product documentation.

Optional manual step: Redeploy the HCL Web Application Bridge to a virtual host.

1.  If you remove the portal context root, Web Application Bridge is disabled. Use the following command to deploy Web Application Bridge to a virtual host:

    -   AIX® HP-UX Linux™ Solaris:./ConfigEngine.sh deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DPortalAdminPwd=password -DPortalAdminId=PortalAdminId -DWasUserid=WasUserid -DWasPassword=password
    -   Windows™: ConfigEngine.bat deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DPortalAdminPwd=password -DPortalAdminId=PortalAdminId -DWasUserid=WasUserid -DWasPassword=password
    -   IBM® i: ConfigEngine.sh deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DPortalAdminPwd=password -DPortalAdminId=PortalAdminId -DWasUserid=WasUserid -DWasPassword=password
    -   z/OS®:./ConfigEngine.sh deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DWasPassword=password
    virtualHostName is the name of the virtual host; for example, wab\_host. virtualHostAlias is the DNS alias name that is used to access the applications on the virtual host; for example, wab.portal.com. If the virtualHostName and virtualHostAlias exist, the existing values are used. The task maps the virtualHostAlias on the same URI scheme \(HTTP or HTTPS\) and port that the portal is deployed on.

2.  Complete the following steps to configure single sign-on between portal and the virtual host alias that was created in the previous step.

    -   Log in to WebSphere® Integrated Solutions Console.
    -   Go to **Security** \> **Global Security** \> **Web and SIP security** \> **Single sign-on \(SSO\)**.
    -   Enter the domain name. For example, if the portal host is portal.domain.hcl.com and the virtual host alias is wab.domain.hcl.com then the domain value is domain.hcl.com.
    -   Enter the virtual host alias to the DNS server to make sure that the virtual host alias is reachable from the your workstation. The virtual host alias must be accessible from all the workstations from where the portal server is accessed.

