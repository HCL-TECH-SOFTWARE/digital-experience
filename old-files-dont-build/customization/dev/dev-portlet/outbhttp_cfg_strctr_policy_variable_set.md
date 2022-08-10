# Setting policy variables

You can set policy variables in different ways.

-   You can set a policy variable in the portal WP Configuration Service Resource Environment Provider \(REP\) properties. This method is the preferred method to place global settings independent from the policies that refer to them.
-   You can set a policy variable in the outbound HTTP connection configuration. This method is the preferred way for values or selections that are closely related with the policy rule.
-   You can set a policy variable at run time. To do so, you use a URL query string parameter. Use this method if your policy contains dynamic elements that you want to define at run time.

For more details about these methods, read the following sections.

## Setting policy variable values in the Resource Environment Provider properties

You can set policy variables in the portal WP Configuration Service Resource Environment Provider \(REP\) properties. You do so in the custom properties section of the WebSphere® Integrated Solutions Console. For more information about setting properties in the portal configuration services, read Setting service configuration properties.

The portal matches policy variables based on the following custom property name scheme:

```
wp.proxy.config.urlreplacement.variable\_name.suffix
```

The partial strings of the naming scheme have the following meanings:

-   **wp.proxy.config.urlreplacement**

    This prefix identifies the property for defining a dynamic policy replacement value.

-   **variable\_name**

    This variable identifies the target dynamic policy variable that is used in the outbound HTTP connection configuration.

-   **suffix**

    This suffix represents a string of your choice. If there is more than one key, this string makes the key unique among all replacement keys that refer to the same dynamic policy replacement variable.


Example: The following policy of an outbound HTTP connection configuration references the dynamic policy variable `my_remote_hosts`:

```
<policy url="http://{$my_remote_host}/*" >
     <actions>
     <method>GET</method>
     </actions>
</policy>
```

To attach this policy to outbound requests to URLs that match one of the URL patterns `http://www.some.server.com` or `http://some.other.server.com`, you can add the following two custom properties to the WP Configuration Service REP:

```
wp.proxy.config.urlreplacement.my_remote_host.1=http://www.some.server.com
wp.proxy.config.urlreplacement.my_remote_host.2=http://some.other.server.com
```

**Notes:** Dynamic policy values that are defined in the WP Configuration Service REP properties are not scoped. Therefore, such dynamic policy variables can be used both by policies that are set in the global configuration profile and by policies that are set in an application-scoped profile.

**Note:** For configuration changes in the WP Configuration Service REP properties to take effect, restart IBM® WebSphere Application Server.

## Setting policy variables in the outbound HTTP connection configuration

As an administrator, you can define policy variables directly in the Outbound HTTP Connection configuration. Example:

```
<variables>
     <dynamic-policy name="my_path">
          <value>wps/portal</value>
          <value>wps/contenthandler</value>
     </dynamic-policy>				
</variables> 
...
<policy url="http://www.myremotesite.com/{$my_path}/*" >
     <actions>
     <method>GET</method>
     </actions>
</policy>
```

In this example, the policy variable `my_path` is defined in the outbound HTTP connection configuration. The variable is scoped to the configuration profile, in which the variable was defined:

-   If the variable is defined in the global configuration, the variable can be referenced by policies or metadata settings of the global configuration.
-   If the variable is defined in an application-scoped configuration, the variable can be referenced by policies or metadata settings of the same application-scoped profile.

To create, modify, or delete configuration-based policy variables, use the administration tools of the outbound HTTP connection services. For more detailed information, read Administration tools for configuring outbound HTTP connections.

## Setting policy variables at run time

There are also cases where an application developer wants to set the policy variable directly by the application. Example: An application wants to choose the credential slot ID of an authenticated HTTP connection. For these scenarios, the outbound HTTP connection infrastructure provides a means to specify policy variables at run time. There are two ways to define policy variables for runtime resolution:

-   The policy variable is defined as a dynamic-policy variable.
-   The policy variable is defined as an endpoint variable. Its value is empty. At run time, the client sets the policy variable value. The value is not validated.

**Security note:** Define runtime policy variables carefully. Run time policy variables can have a security impact.

Example: The portal administrator wants to define two different user credentials for an outbound HTTP connection to the URL `http://www.myremotehost.com/test`. The user wants to select the credentials when the connection is created. A configuration defines the following policy variable:

```
name=SLOTID
type=Dynamic Policy
Values= MySlot2, MySlot33
```

The variable is referenced by the Credential Vault slot description that is defined in the metadata section of a policy mapping `/myproxy` as illustrated later:

```
metadata name: 	paa.slotid
metadata value:	{$SLOTID}
```

At run time, the client submits the following request at the Ajax proxy:

```
HTTP://localhost/wps/myproxy/www.myremotehost.com/test?SLOTID=MySlot2
```

At run time, the authentication filter of the outbound HTTP connection server reads the metadata `paa.slotid`. By doing so, it obtains the slot ID for the credentials that you want to be used for the outbound HTTP connection. The value of `paa.slotid` is mapped to the policy variable `SLOTID`. The client that called the connection defined a slot ID value `MySlot2`, which is in the valid set of policy variables.

**Parent topic:**[Policy variables](../dev-portlet/outbhttp_cfg_strctr_policy_variable.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Administration tools for configuring outbound HTTP connections](../dev-portlet/outbhttp_cfg_tools.md)

