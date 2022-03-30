# Customizing the WSRP resource proxy SSL settings 

The WSRP resource proxy uses one SSL configuration for all secure outbound connections.

By default, the global SSL configuration as defined in the HTTP Client Service properties is taken for the WSRP resource proxy as well. To specify a different SSL configuration for the WSRP resource proxy only, you can overwrite the global configuration. To do so, proceed as follows:

1.  Set the following property in the HTTP Client Service: wsrp.resourceproxy.ssl.configuration = SSL configuration name.

    To specify the value, use the name of an SSL configuration as defined in the WebSphere® Application Server security configuration that you want to use for the WSRP resource proxy.

2.  Restart the portal or the cluster for the new setting to become active.


**Parent topic:**[Customizing the WSRP resource proxy ](../admin-system/wsrpt_cons_res_proxy.md)

