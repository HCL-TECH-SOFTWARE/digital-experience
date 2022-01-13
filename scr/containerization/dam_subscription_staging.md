
# DAM staging | HCL Digital Experience





<!---->



[Jump to main content](#wh_topic_body) 






[HCL Digital Experience 9.5](../index.html)







* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)

[Index](../indexTerms.html "Index")






Search



















# DAM staging | HCL Digital Experience


This topic contains the commands that administrators can use to configure the staging
 of [Digital Asset
 Management](../digital_asset_mgmt/digital_asset_mgmt_overview.html "HCL Digital Asset Management (DAM) delivers a central platform to store and include rich media assets in Digital Experience site content to present engaging, consistently branded experiences across digital channels.") (DAM) content. This allows you to manage subscriber registration or
 configure periodic sync.


## DAM staging framework


The DAM staging framework allows you to stage your DAM content from an authoring
 environment (source environment/publisher) to multiple rendering environments
 (target environment/subscriber). Using DXClient, you can configure DAM staging
 to:* Trigger a manual staging or use periodic staging processes.
* Set the cycle length (default: 2 minutes, maximum: 24 hours) for periodic
 sync.
* Register a subscriber with a publisher.Note: A subscriber must be registered
 with a publisher. Access rights from DAM staging assets are not
 transferred for subscribers that do not share the same Lightweight
 Directory Access Protocol (LDAP).



## Manage DAM staging


Use the `manage-dam-staging trigger-staging` command to trigger DAM
 staging.



Command description

You can trigger the DAM staging with the following command:
 
```
dxclient manage-dam-staging trigger-staging
```


Help command

This command shows the help information for `manage-dam-staging
 trigger-staging` command
 usage:
```
dxclient manage-dam-staging trigger-staging -h
```


Command options

Use this attribute to specify the protocol with which to connect to the
 DX server (default: "")
```
-dxProtocol <value>
```

Use this attribute to specify the host name of the DX server (default:
 "")
```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX
 server (default: ""; default port for any Kubernetes environment is
 443):
```
-dxPort <value>
```

Use this attribute to specify the user name that is required for
 authenticating with the DX server (default:
 "")
```
-dxUsername <value> 
```

Use this attribute to specify the password that is required for
 authenticating with the DX Core (default:
 "")
```
-dxPassword <value>
```

Use this attribute to specify the port number of the DAM server (default:
 ""; default port for any Kubernetes environment is
 443):
```
-damAPIPort <value>
```

Use this attribute to specify the port number of the DX Core API server
 (default: ""; default port for any Kubernetes environment is
 443):
```
-ringAPIPort <value>
```

Use this attribute to specify the API version number of DAM (default: "";
 default port for any Kubernetes environment is
 443):
```
-damAPIVersion <value>
```

Use this attribute to specify the API version number of DX Core (default:
 ""; default port for any Kubernetes environment is
 443):
```
-ringAPIVersion <value>
```

Use this attribute to specify the host name of the target
 environment:
```
-targetHostname <value>
```

Use this attribute to specify the interval between two sync cycles. The
 unit of interval is in minutes. (default: "2
 minutes")
```
-interval <value>
```

All these command options are configured in the
 config.json file of the tool, which is read by
 default. The configuration file is located at
 `<working-directory>/store/config.json`. The
 options that are passed through the command line override the default
 values.



Example Usage:



```
dxclient manage-dam-staging trigger-staging -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -targetHostname <targetHostname>

```






## Registering or deregistering for DAM staging


Use the `manage-dam-staging **register**-dam-subscriber` command to
 register or the `manage-dam-staging **deregister**-dam-subscriber`
 command to deregister the subscriber for DAM staging.



Command description

You can **register** a subscriber for DAM staging with the following
 command:
 
```
dxclient manage-dam-staging register-dam-subscriber
```



You can **deregister** a subscriber for DAM staging with the following
 command:
 
```
dxclient manage-dam-staging deregister-dam-subscriber
```


Help command

The following command shows the help information for
 `manage-dam-staging **register**-dam-subscriber`
 command
 usage:
```
dxclient manage-dam-staging register-dam-subscriber -h
```



The following command shows the help information for
 `manage-dam-staging **deregister**-dam-subscriber`
 command
 usage:
```
dxclient manage-dam-staging deregister-dam-subscriber -h
```


Command options

Use this attribute to specify the protocol with which to connect to the
 DX server (default:
 "")
```
-dxProtocol <value>
```

Use this attribute to specify the host name of the DX server (default:
 "")
```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX
 server (default: ""; default port for any Kubernetes environment is
 443):
```
-dxPort <value>
```

Use this attribute to specify the user name that is required for
 authenticating with the DX server (default:
 "")
```
-dxUsername <value> 
```

Use this attribute to specify the password that is required for
 authenticating with the DX Core (default:
 "")
```
-dxPassword <value>
```

Use this attribute to specify the port number of the DAM server (default:
 ""; default port for any Kubernetes environment is
 443):
```
-damAPIPort <value>
```

Use this attribute to specify the port number of the DX Core API server
 (default: ""; default port for any Kubernetes environment is
 443):
```
-ringAPIPort <value>
```

Use this attribute to specify the API version number of DAM (default: "";
 default port for any Kubernetes environment is
 443):
```
-damAPIVersion <value>
```

Use this attribute to specify the API version number of DX Core (default:
 ""; default port for any Kubernetes environment is
 443):
```
-ringAPIVersion <value>
```

Use this attribute to specify the host name of the target
 environment:
```
-targetHostname <value>
```

Use this attribute to specify the subscriber ID of the target
 environment:
```
-subscriberId <value>
```

Use this attribute to specify the interval between two sync cycles. The
 unit of interval is in minutes. (default: "2
 minutes")
```
-interval <value>
```

All these command options are configured in the
 config.json file of the tool, which is read by
 default. The configuration file is located at
 `<working-directory>/store/config.json`. The
 options that are passed through the command line override the default
 values.



Example usage:
To register:
 
```
dxclient manage-dam-staging register-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
```

To deregister:
 
```
dxclient manage-dam-staging deregister-dam-subscriber -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -damAPIVersion <damAPIVersion> -ringAPIVersion <ringAPIVersion> -subscriberId <subscriberId>
```







On this page* [DAM staging framework](#dam_subscription_staging__dam_staging_framework)
* [Manage DAM staging](#dam_subscription_staging__deletedamschema)
* [Registering or deregistering for DAM staging](#dam_subscription_staging__dam_staging_register_subscriber)







 
 Generated by [<oXygen/> XML WebHelp](http://www.oxygenxml.com/xml_webhelp.html) 









![]()




