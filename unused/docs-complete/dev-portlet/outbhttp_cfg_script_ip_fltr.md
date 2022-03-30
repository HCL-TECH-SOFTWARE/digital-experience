# IP filtering 

You can use ipfilter settings to declare IP filtering rules and to either grant or deny a client access to the Ajax proxy.

You can use `allow` settings to grant access to a particular IP address or set of addresses. By alternative, you can use `deny` settings to deny access to a particular IP address or set of addresses.

The `allow` and `deny` settings support the following value formats:

-   Net address and bit number. Example: `192.0.0.0/24`
-   Net address and NetMask. Example: `192.0.0.0/255.255.255.0`
-   Specific IP address. Example `192.168.0.1`
-   Specific IP address with wildcards. Example `192.168.*.1`

**Note:** If you declare multiple `ipfilter` settings in the proxy configuration, the proxy processes them by the sequence in which you specify them. As a result, the last matching rule always takes effect, regardless of the previous rules.

The following example makes the policies in the `/myproxy` mapping accessible only to clients that have an IP address in the specified range:

```
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
     <mapping contextPath="/myproxy" url="*">
          <policy name="SamplePolicy" url="http://www.myremotehost.com/*">
               <actions><method>GET</method></actions>
          </policy>
          <ipfilter>
               <allow>192.168.1.*</allow>
          </ipfilter>
     </mapping>
</policy-rules>
```

**Parent topic:**[Description of the outbound HTTP connection configuration script ](../dev-portlet/outbhttp_cfg_descript.md)

