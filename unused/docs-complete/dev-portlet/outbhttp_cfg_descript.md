# Description of the outbound HTTP connection configuration script 

The configuration settings of an outbound HTTP connection configuration script are described here.

-   **proxy-rules**

    The `proxy-rules` setting is the root of a configuration profile. The configuration profile for which the script is applied is specified in the configuration task that is run against this script. The `proxy-rules` setting can contain the following subsettings:

    -   **variables**

        Use the `variables` setting to specify endpoint variables or dynamic policy variables. Variables are used in the URL attribute of the policy setting, or they are used in a variable value. For more details about how to use variables, read *Variables*.

    -   **mapping**

        Use the `mapping` setting to map incoming requests to a target URL, based on their context path. Therefore, each mapping must specify a `contextpath` attribute and optionally a `url` attribute. Optionally, mappings can declare policy settings that represent mapping specific access policies. For more details about how to use mappings, read *Context path mappings*. Mappings contain a name attribute that gives an administrative name for this mapping. This attribute is used by administrative tasks to identify the mapping for update tasks or delete tasks.

    -   **policy**

        Use the `policy` setting to define an access policy for a specific URL pattern. A proxy configuration can contain multiple policy definitions. If no policy is specified at all, the portal denies all incoming requests. For more details about policies, read *Access policies*.

    -   **ipfilter**

        Use `ipfilter` setting to define one or more IP patterns. You can use these IP filter patterns to either grant or deny a particular IP address or a set of addresses access to the Ajax proxy. For more details about IP filtering rules, read *IP filtering*.

    -   **meta-data**

        Use the `meta-data` setting to specify general configuration properties of the proxy, for example HTTP-related parameters. Each `meta-data` setting must have a `name` and a `value`. To get a list of configuration parameters that are available in the portal, read *General configuration parameters by metadata*.


-   **[Variables ](../dev-portlet/outbhttp_cfg_script_variables.md)**  
Variables settings define variables that are used in other sections of the configuration.
-   **[Context path mapping ](../dev-portlet/outbhttp_cfg_script_cntxt_path_map.md)**  
You use a context path mapping to map a specific context path to a specific target URL. The proxy resolves context path mappings before it applies the matching access policy.
-   **[Policies ](../dev-portlet/outbhttp_cfg_script_acc_pol.md)**  
Each policy setting defines an access policy for a URL pattern. You specify the pattern by using the url attribute. A url attribute can be either a URL, or the wildcard character, or URL part that ends with the wildcard character "\*". The following are examples for url attribute values: http://localhost/index.html \*http://www.ibm.com/developerWorks/\*.
-   **[IP filtering ](../dev-portlet/outbhttp_cfg_script_ip_fltr.md)**  
You can use ipfilter settings to declare IP filtering rules and to either grant or deny a client access to the Ajax proxy.
-   **[Configuration metadata for outbound HTTP connections ](../dev-portlet/outbhttp_cfg_script_metadata.md)**  
You can add general proxy configuration parameters to the file proxy-config.xml by using meta-data settings.
-   **[Cookie rule ](../dev-portlet/outbhttp_cfg_script_cookie_rule.md)**  
You can use cookie rules to determine how you want the cookie to be handled.

**Parent topic:**[XML format for outbound HTTP connection configuration settings ](../dev-portlet/outbhttp_cfg_xml.md)

**Related information**  


[The programming model for the outbound HTTP connection service ](../dev-portlet/outbhttp_progr_model.md)

