# XML format for outbound HTTP connection configuration settings

To export or import the outbound HTTP Connections configuration, you use an XML file with a specific schema.

## Example of a `proxy-config.xml` file

The following example is a sample outbound HTTP connection configuration script. It shows the schema for XML scripts that you can use to export or import the outbound HTTP Connections configuration.

```
<?xml version="1.0" encoding="UTF-8"?>
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">
    <variables>
        <dynamic-policy name="default_policy">
           <value>http://www.ibm.com/*</value>
           <value>http://www-3.ibm.com/*</value>
        </dynamic-policy>
    </variables>
    <mapping contextpath="/proxy" url="*" name="proxy"/>
    <mapping contextpath="/myproxy" url="*" name="myproxy">
       <policy url="http://www.cntserv_exmp.com/*" name="ibm1">
           <actions>
              <method>GET</method>
           </actions>
	    <cookie-rule name="my.application.cookie">
	       <cookie>TestCookie</cookie>
   	          <scope>user</scope>
	          <handling>store-session</handling>
	    </cookie-rule>
        </policy>
    </mapping>
    <policy url="{$default_policy}" name="default">
        <actions>
            <method>GET</method>
            <method>HEAD</method>
        </actions>
    </policy>

    <meta-data>
        <name>socket-timeout</name>
        <value>10000</value>
    </meta-data>
</proxy-rules>
```

-   **[XML schema of outbound HTTP connection configuration script](../dev-portlet/outbhttp_cfg_script_strct.md)**  
An outbound connection configuration script file needs to conform to the following XML schema.
-   **[Description of the outbound HTTP connection configuration script](../dev-portlet/outbhttp_cfg_descript.md)**  
The configuration settings of an outbound HTTP connection configuration script are described here.


