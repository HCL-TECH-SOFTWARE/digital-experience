# Variables 

Variables settings define variables that are used in other sections of the configuration.

There are two types of variable settings, endpoint variables and dynamic-policy variables:

-   **endpoint variables**

    Endpoint variables define a single endpoint. For example, this endpoint can be the host name of a remote server. You specify the value of an endpoint in the content of an endpoint variable.

-   **dynamic-policy variables**

    Dynamic-policy variables can have multiple values. Dynamic-policy variables contain one or more value elements. All of these value elements apply to the variable.


The following example illustrates the usage of an endpoint variable:

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
   xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
     <variables>
          <endpoint name="the_remote_host">www.myremotehost.com</endpoint>
     </variables>
     <policy url="http://{$the_remote_host}/*" name="endpoint_sample">
          <actions><method>GET</method></actions>
     </policy>
</proxy-rules>
```

The following example shows the usage of a dynamic policy variable. The policy that is defined in this example applies to the following URL patterns:

-   `http://www.myremotehost.com/*`
-   `http://w3.myremotehost.com/*`
-   `https://www.myremotehost.com/*`
-   `https://w3.myremotehost.com/*`

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
     <variables>
          <dynamic-policy name="my_prot_selector">
               <value>http</value>
               <value>https</value>
          </dynamic-policy>

          <dynamic-policy name="the_remote_host">
               <value>www.myremotehost.com</value>
               <value>w3.myremotehost.com</value>
          </dynamic-policy>
     </variables>
     <policy url="{my_prot_selector}://{$the_remote_host}/*" name="dyn_policy_example">
          <actions><method>GET</method></actions>
     </policy>
</proxy-rules>
```

**Parent topic:**[Description of the outbound HTTP connection configuration script ](../dev-portlet/outbhttp_cfg_descript.md)

