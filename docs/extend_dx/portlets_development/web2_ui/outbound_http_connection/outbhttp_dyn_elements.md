# Using dynamic elements in outbound HTTP connection settings

In some cases, it is useful to control configuration settings at run time. For example, an administrator might want to have the program decide at run time which policy rule is applied. In another scenario, parts of a policy rule configuration that are known only at run time must be included in the configuration.

Enabling and disabling policy rules: Administrators can use the metadata parameter `active` to enable or disable the policy rule to which the metadata belongs. Instead of setting a static metadata value to `true` or `false`, the administrator can set a variable token. The following example uses this feature to disable policy mappings. For more details, read the information about *deactivate policy rules, mappings, or custom connection filters* under [Description of the outbound HTTP connection configuration script](../outbound_http_connection/cfg_outbound_http_connections/xml_format_outbound_http/desc_outbound_http_cfg_script/index.md).

The following example deactivates multiple policy rules, depending on a single policy variable:

```
<proxy-rules ...>
     <variables>
          <endpoint name="am_i_active">false</endpoint>
     <variables>
     <mapping contextPath="/theproxy">
          <policy url="http://the_remote_server.com/*">     
                ...
               <meta-data>
                    <name>active</name>
                    <value>{**$am\_i\_active**}</value>
               </meta-data>
          </policy>
          <policy url="http://another_remote_server.com/*">     
                ...
               <meta-data>
                    <name>active</name>
                    <value>{**$am\_i\_active**}</value>
               </meta-data>
          </policy>
     </mapping>

</policy-rules>
```

In some cases, the decision whether the policy rules is active or inactive can be made only at run time. In this case, the policy variable must be passed to the Ajax proxy as a URL parameter. The following example shows the configuration:

```
<proxy-rules ...>
     <mapping contextPath="/theproxy">
          <policy url="http://the_remote_server.com/*">     
                ...
               <meta-data>
                    <name>active</name>
                    <value>{**$active\_a**}</value>
               </meta-data>
          </policy>
          <policy url="http://the_remote_server.com/*">     
                ...
               <meta-data>
                    <name>active</name>
                    <value>{**$active\_b**}</value>
               </meta-data>
          </policy>
     </mapping>
</policy-rules>
```

The following example activates the first rule and deactivates the second rule:

```
http://localhost/wps/theproxy/http/the_remote_server.com/main.html?active_a=true&active_b=false
```


