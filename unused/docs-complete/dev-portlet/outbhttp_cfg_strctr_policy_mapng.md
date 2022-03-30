# Policy mappings 

When an outbound HTTP connection is established through the outbound connection service, the caller can specify the mapping context in an optional parameter.

Policy mappings have the following two purposes:

-   The policy mapping is the container of the policy rules that define the characteristics of the outbound connections.
-   If the outbound connection is accessed through the Ajax proxy, the policy mapping defines the connection settings for the Ajax proxy.

The following code sample shows how you create an outbound connection service by using the policy mapping context path /mycontext:

```
String theMappingContextPath = "/mycontext";

OutboundConnectionServiceHome home = (OutboundConnectionServiceHome)
          ctx.lookup("portal:service/model/OutboundConnectionService");
OutboundConnectionService connectionService = home.getOutboundConnectionService 			
          (request, Response, theMappingContextPath);
```

If the connection is established through the Ajax proxy, the mapping context root is used as context root for the proxy:

```
http://localhost:10039/wps/mycontext/(...encoded remote url ...);
```

An outbound connection profile contains at least one policy mapping item. This item is created when the outbound connection profile element is created. This default policy mapping does not have a context path. Therefore, policy rules that are defined in the default policy mapping are always accessible to outbound HTTP connection filters, independent of the context for which the connection was created. In the previous example, the following policy rules are available for the connection:

-   The policy rules that are defined at the Policy Mapping with the context path /mycontext.
-   The policy rules that are defined at the default policy mapping.

**Parent topic:**[Configuration structure ](../dev-portlet/outbhttp_cfg_structure.md)

**Related information**  


[Adding an outbound connection policy ](../dev-portlet/outbhttp_cfgsmptsk_add_ob_conn_plcy.md)

