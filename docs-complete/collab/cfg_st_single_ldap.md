# Configuring HCL Sametime Proxy 

If HCL Digital Experience and HCL Sametime are both authenticating with the same LDAP server, SSO configuration is simple.

1.  Install HCL Portal and configure it with an LDAP.
2.  Install and configure the IBM® Domino® 8.5.2 server.
3.  Install and configure the Lotus Notes Administrator client.
4.  Install the HCL Sametime server with the IBM Domino 8.5.2 server and configure the same LDAP you used with HCL Portal.
5.  Install the Sametime Proxy server with the Sametime server. Configure it to work with the HCL Portal server.
6.  Reboot the Sametime Proxy sever and the HCL Portal server.

**Note:** Only users in the LDAP will have awareness functions.

Use the following steps to configure HCL Portal with the Sametime Proxy server.

1.  Configuring Sametime single sign on to work with HCL Portal.
2.  Install HCL PortalVersion 8.5.

3.  Log in to the IBM WebSphere® Application Server Integrated Solutions Console and click **Security** \> **Global Security**.

4.  Click **Web and SIP security** \> **Single Sign-on SSO**.

5.  Set the single sign-on domain and save it to Master Configuration.

6.  From the main Global Security page, click **LTPA**.

7.  Enter a password for the token, then enter a path for the token.

8.  Click **Export Keys** and then **OK**.

9.  Save to Master Configuration.

10. Copy the key to the Sametime Proxy server machine.

11. Open the **Address Book** for the domain.

12. Open the **Web** \> **Web Configuration** section. Open the **Web SSO Configuration** twistie and delete the existing token.

13. Click the **Configuration** tab. Click **Server** \> **All Server documents**.

14. Open **Web** \> **Web SSO Configuration**.

    The Web SSO Configuration for: page opens.

15. Open **Keys** \> **Import WebSphere LTPA Key**.

16. Enter the path and password for the key you created.

    The key imports.

17. Set the domain starting with a period. For example, .rtp.yourco.com.

    **Note:** There must be a period at the beginning of the domain.

18. Choose the Domino server name from the twistie. Choose the **Domino Address Book** as the source.

19. Set the token format to LtpaToken and LtpaToken 2.

20. Click **Save and Close** to save the token.

21. Creating the Resource Environment Providers
22. Log in to the IBM WebSphere Application Server Integrated Solutions Console.

23. Click **Resources** \> **Resource Environment Providers**.

24. Open the **WP CommonComponentConfigService** provider.

25. Create the following custom properties if the are not already created:

    -   **cc.sametime.proxy.enabled**

        Set the value to true.

    -   **cc.sametime.proxy.scheme**

        Set the value to http or https. It must match the way your Sametime Proxy Server is accessed.

    -   **cc.sametime.proxy.host**

        Set the value to the name of your server. For example, hostname.domainname.com.

    -   **cc.sametime.proxy.port**

        Set the value to the port of your server.

    -   **cc.sametime.connect.client**

        Set the value to false. If you set the value to true Sametime Proxy uses the Sametime connect client which is installed on Sametime Proxy server machine.

    -   **cc.sametime.proxy.version**

        Set the value to 9.0.

    -   **cc.sametime.proxy.includedock**

        Set the value to true to show the Sametime web client dock.

26. Save to Master Configuration.

27. Log in to HCL Portal as a Sametime user.

28. Navigate to the page with the Sametime Web 2.0 Contact List portlet.

29. Edit the page properties and set the profile to the custom profile you created.

30. Log in as a user in the LDAP and open the page with the Sametime Web 2.0 Contact List portlet. Click **Applications** \> **Collaboration** \> **HCL Sametime**.

    The portlet shows that the user is online and you can use other Sametime Web 2.0 Contact List functions to see other online users.


**Parent topic:**[Integrating with HCL Sametime ](../collab/i_domi_t_sv_st_cfg_intro.md)

**Previous topic:**[HCL Sametime server installation reference ](../collab/i_domi_r_sv_st_install.md)

**Next topic:**[People awareness ](../collab/i_coll_c_people_aw.md)

**Related information**  


[Serving HTTP OPTIONS requests to the server context root by WebDAV clients](../admin-system/webdav_http_options.md)

