# Using Sametime with the HCL Portal 8.5 theme

You can add modules to your profile to use HCL Sametime with the HCL Portal Version 8.5 theme.

To gain Sametime awareness with the HCL Portal Version 8.5 theme, you must add one of the following modules to your profile:

-   wp\_sametime\_links: Provides existing STlinks support.
-   wp\_sametime\_proxy: New Sametime proxy support.

When using the wp\_sametime\_proxy module you must update the following attribute in the WP CommonComponentConfigService resource environment provider on the HCL Portal server to activate the module:

1.  Set the cc.sametime.proxy.enabled attribute to true.

2.  Set the cc.sametime.proxy.scheme attribute to http or https, depending on the way your Sametime Proxy Server is accessed.

3.  Set the cc.sametime.proxy.host attribute to hostname. Include the domain name in the attribute, for example hostname.domainname.com.

4.  Set the cc.sametime.proxy.port.

5.  Set the cc.sametime.connect.client attribute to true if you want the Sametime Proxy to use the Sametime connect client, which is installed on the system with Sametime Proxy Server.

6.  Set the cc.sametime.proxy.version attribute to 8.5.2 if you want the integrate with Sametime Proxy 8.5.2. Otherwise, set the attribute to 8.5.1 if you want to integrate with Sametime Proxy 8.5.1.


For more information about using Sametime with HCL Portal, see Integrating with HCL Sametime.

**Parent topic:**[Customizing the theme](../dev-theme/themeopt_cust.md)

**Related information**  


[Integrating with HCL Sametime](../collab/i_domi_t_sv_st_cfg_intro.md)

