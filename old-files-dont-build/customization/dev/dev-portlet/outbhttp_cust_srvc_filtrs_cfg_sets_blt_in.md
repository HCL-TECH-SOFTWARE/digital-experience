# Built-in configuration settings for custom outbound connection filters

The following built-in metadata setting for custom connection filter is defined.

-   **active**

    The built-in metadata setting `active` activates or deactivates a custom connection filter. If you want to disable the connection filter but keep the definition in the configuration, set this flag to `false`. Example: The portal administrator wants to temporarily disable the redirection handling of a connection filter.


```
<filter-chain>
    <filter-factory>                          
        <classname>sample.test.filters.MyUserAgentRedirectionFilterFactory
        </classname>
        <meta-data>
            <name>my_redirection_url</name>
            <value>http://iphone.my_remote_server.com/index.html</value>
        </meta-data>
        <meta-data>
            <name>my_user_agents</name>
            <value>.*iPhone.*</value>
        </meta-data>
        <meta-data>
            <name>active</name>
            <value>false</value>
        </meta-data>
    </filter-factory>
</filter-chain>
```

**Parent topic:**[Custom outbound service filters](../dev-portlet/outbhttp_cust_srvc_filtrs.md)

