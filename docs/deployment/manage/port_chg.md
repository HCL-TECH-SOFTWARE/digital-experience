# Changing ports

One can change the HCL Digital Experience port numbers assigned to DX Portal Server after installation.
Valid reason for doing so might be

1. Port conflicts with other servers on the system.
2. Match existing convention with other WebSphere Application Server ports.
3. Match a corporate guideline which is inconsistant with the ports assigned.

By default (and without conflict with any other WebSphere Application Servers installed on this node) the installation process will assign ports 10032 through 10051 to this DX Portal Server installation.

Prerequiste for changing ports: HCL Digital Experience (DX) Portal Server is installed.

## Options for changing assigned ports
There are two options for changing the port numbers for an existing DX Portal Server installation.

* Changing the first port used by the DX Portal Server and then sequentially incrementing the port numbers for each ports needed.
* Reading the port assignments from a file.

## View existing port assignments
Run the following task from the *{wp_profile_root}/ConfigEngine* directory to generate a list of the existing port assignments:

* AIX and Linux: `./ConfigEngine.sh list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`
* Windows™: `ConfigEngine.bat list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`

The output port file is located in the *{wp_profile_root}/ConfigEngine/log* directory. 
It lists the HCL Digital Experience ports for this installation.
In addition to the *WebSphere_Portal_PortMatrix.txt* file created, the port names and values will also be imbedded in the ConfigEngine output listed to your screen.

Some ports will not be listed in the output. 
For example, the *CSIV2_SSL_SERVERAUTH_LISTENER_ADDRESS* value is not listed.

## Change the port numbers
1. Stop the HCL Portal server.
2. Do either of the following 2 options:  

	* Run the following command to change the starting port number:  

		* AIX, Linux: `./ConfigEngine.sh modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=WebSphere_Portal -DStartPort=starting port number`
		* Windows: `ConfigEngine.bat modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=WebSphere_Portal -DStartPort=starting port number`

		The starting port parameter is required for a successful completion of the "modify-ports-by-startport" task.  When you specify a start port, this port becomes the base for assigning port values.  The code increments this value as each port is assigned, which means that the DX Portal Server ports are assigned incrementally starting with the port defined with the "modify-ports-by-startport" task.  

	* Run the following command to change ports by using a port file:  

		* AIX, Linux: `./ConfigEngine.sh modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=WebSphere_Portal  -DPortsFile=full path to ports filed`
		* Windows: `ConfigEngine.bat modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=WebSphere_Portal -DPortsFile=full path to ports file`

		Sample port files are available on the Setup disc. The following information is an example of a port file although the port values are different based on your environment:

	```
	BOOTSTRAP_ADDRESS=10035
	SOAP_CONNECTOR_ADDRESS=10025
	ORB_LISTENER_ADDRESS=10034 
	SAS_SSL_SERVERAUTH_LISTENER_ADDRESS=10041
	CSIV2_SSL_SERVERAUTH_LISTENER_ADDRESS=10036
	CSIV2_SSL_MUTUALAUTH_LISTENER_ADDRESS=10033
	WC_adminhost=10042
	WC_defaulthost=10039
	DCS_UNICAST_ADDRESS=10030
	WC_adminhost_secure=10032
	WC_defaulthost_secure=10029
	SIP_DEFAULTHOST=10027
	SIP_DEFAULTHOST_SECURE=10026
	IPC_CONNECTOR_ADDRESS=10037
	SIB_ENDPOINT_ADDRESS=10028
	SIB_ENDPOINT_SECURE_ADDRESS=10038
	SIB_MQ_ENDPOINT_ADDRESS=10040
	SIB_MQ_ENDPOINT_SECURE_ADDRESS=10031
	```

3. Restart the HCL Portal server.  

**Related information**  
[Starting and stopping servers, deployment managers, and node agents](../manage/stopstart.md)

