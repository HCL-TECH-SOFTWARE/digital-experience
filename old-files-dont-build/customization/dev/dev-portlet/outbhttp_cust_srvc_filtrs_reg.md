# Registering a custom outbound connection service filter

For a custom outbound connection filter to take effect, you must register it.

Custom connection filters for outbound HTTP connections are defined at a policy setting. The following XML snippet shows how you register a custom connection filter at a policy setting:

```
<policy url="http://the_remote_server.com/path/*" >
    <actions>
        <method>GET</method>
    </actions>
    <filter-chain>
        <filter-factory>                  
            <classname>sample.test.filters.MyFilterFactory
            </classname>
        </filter-factory>
    </filter-chain>
</policy>
```

The `<filter-chain>` section contains a list of class names that denote the factory class for custom HTTP connection filters. The outbound connection service loads and runs the filters in the order in which they appear in the configuration.

**Parent topic:**[Custom outbound service filters](../dev-portlet/outbhttp_cust_srvc_filtrs.md)

