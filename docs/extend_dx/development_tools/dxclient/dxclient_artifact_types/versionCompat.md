# Version Compatibility 

Use the version compatibility command to check the version details of DX Core and DXClient.


-   **Command description**

	Use the following command to show version compatibility details between DX Core and DXClient:

	```
	dxclient version-compat [command] [options]
	
	```

-   **Command options**

	Use this attribute to specify the hostname of the target server:
	
	```
	-hostname <value>
	```
	
	Use this attribute to specify the protocol with which to connect to the CW server:
	
	```
	-dxConnectProtocol <value>
	```
	
	Use this attribute to specify the username that is required for authenticating to the cw_profile:
	
	```
	-dxConnectUsername <value>
	```
	
	Use this attribute to specify the password that is required for authenticating to the cw_profile:
	
	```
	-dxConnectPassword <value>
	```
	
	Use this attribute to specify the port number of the cw_profile (for Kubernetes Environment, dxConnectPort is 443):
	
	```
	-dxConnectPort <value>
	```
