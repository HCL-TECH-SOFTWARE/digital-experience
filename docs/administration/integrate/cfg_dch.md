# Configuring Watson Content Hub on CF15 and later

After you install HCL Digital Experience, configure the Watson Content Hub tenant ID and user credentials.

**Note:** If you are on HCL Portal Version 9 CF13 or CF14, go to [Configuring Watson Content Hub on CF13 or CF14](cfg_dch_14cf.md#).

The integration process between Watson Content Hub and HCL Portal can change because Watson Content Hub is frequently updated. Before you start or if you run into problems during the process, go to [Integrating](../integrate/int_dch.html) in the Watson Content Hub documentation for the latest information on changes to the process.

**Note:** Each stand-alone or clustered environment, which includes the base portal and virtual portals, can be configured for only one tenant ID. If you have more than one tenant ID, you must have a different stand-alone or clustered environment.

**Cluster note:** In a clustered environment, run the ConfigEngine tasks only on the Primary Node.

1.  Verify that TLSv1.2 is configured on IBM® WebSphere® Application Server. Go to [Configuring WebSphere Application Server to support TLS 1.2](https://www.ibm.com/support/knowledgecenter/SSYMRC_6.0.6/com.ibm.jazz.install.doc/topics/t_enable_tls1.2_was.html) for information.

    **Cluster note:** In a clustered environment, verify that it is configured on all secondary nodes.

2.  Complete the following steps to verify that the security protocol is set to TLSv1.2:

    **Cluster note:** In a clustered environment, verify that the security protocol on all secondary nodes.

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Go to **Security** \> **SSL certificate and key management**.

    3.  Then, go to **SSL configurations** \> **NodeDefaultSSLSettings** \> **Quality of protection \(Q0P\) settings**.

    4.  Verify that **Protocol** is set to TLSv1.2.

3.  Open a command prompt.

4.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

5.  Run the config-ch-integ task on the base portal only to configure the content hub integration. If you do not want the integration on the base portal, do not run this task.

    **Cluster note:** In a clustered environment, add the -DKeyStore=CellDefaultTrustStore parameter to the config-ch-integ task.

    -   AIX®: `./ConfigEngine.sh config-ch-integ -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh config-ch-integ -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat config-ch-integ -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    Where the content\_hub\_user can have a Watson Content Hub user role access of Administrator, Manager, Editor, or Viewer.

    **Custom domains:** If you have a custom domain, include the following parameters, `-Dch.isCustomDomain=true` and `-Dch.delivery.domain=custom\_delivery\_domain\_if\_different\_from\_api\_domain`

    Log in to Watson Content Hub. Click the **Open user menu** icon and select **Hub information**. Then, copy the **Content Hub ID** value for Content\_hub\_ID and the **Domain name** value for Domain\_name.

    **Note:** If the task commands fail, verify that all specified parameters and passwords are correct.

6.  Run the setup-ch-integ-vp only on the virtual portals where you want to configure the content hub integration.

    **Cluster note:** In a clustered environment, add the -DKeyStore=CellDefaultTrustStore parameter to the config-ch-integ-vp task.

    -   AIX: `./ConfigEngine.sh setup-ch-integ-vp -DVirtualPortalContext=vp\_context -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh setup-ch-integ-vp -DVirtualPortalContext=vp\_context -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat setup-ch-integ-vp -DVirtualPortalContext=vp\_context -Dch.tenant.id=Content\_hub\_ID -Dch.user.name=content\_hub\_user -Dch.domain=Domain\_name -Dch.user.pwd=content\_hub\_user\_password -DWasPassword=password -DPortalAdminPwd=password`
    Where the content\_hub\_user can have a Watson Content Hub user role access of Administrator, Manager, Editor, or Viewer.

    **Custom domains:** If you have a custom domain, include the following parameters, `-Dch.isCustomDomain=true` and `-Dch.delivery.domain=custom\_delivery\_domain\_if\_different\_from\_api\_domain`

    Log in to Watson Content Hub. Click the **Open user menu** icon and select **Hub information**. Then, copy the **Content Hub ID** value for Content\_hub\_ID and the **Domain name** value for Domain\_name.

7.  Restart the HCL Portal and HCL Web Content Manager server. In a clustered environment, restart your cluster.

8.  Assign one or more users and groups to use the Watson Content Hub asset picker function.

    For example, you might want to add your **Web Content authors** group to use this function. The primary portal administrator user and administrative group have access and can skip this step. Complete the following steps to assign access to the dx2dch vault slot:

    1.  Log in to HCL Portal as an administrator.

    2.  Click the **Administration menu** icon.

    3.  Go to **Access** \> **Resource Permissions**.

    4.  Select **Vault Slot**.

    5.  Click **Assign Access** at the dx2dch vault slot.

    6.  Click the **Pencil** icon for the **USER** role.

    7.  Click the **Plus** icon labeled **Add**. Search for the users and groups you want to grant access to the vault slot.

9.  Configure the HTTP server to redirect the secure traffic from the default HTTP port to the secure HTTPS port.

    For example, enter 10042 for the port value. For information on how to configure the HTTP server, go to [Guide to properly setting up SSL within the IBM HTTP Server](https://www.ibm.com/support/pages/guide-properly-setting-ssl-within-ibm-http-server).


**Parent topic:**[Integrating with Watson Content Hub](../integrate/int_dch.md)

