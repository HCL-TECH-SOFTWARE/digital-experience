# Changing ports

You can change the HCL Digital Experience ports values after installation if there are port conflicts with other cells on the system.

HCL Digital Experience is installed.

**Note:** The starting port parameter is required for a successful completion of the `modify-ports-by-startport` task. When you specify a start port, this port becomes the base for assigning port values. The code increments this value as each port is assigned, which means that the HCL Portal ports are assigned incrementally starting with the port defined with the `modify-ports-by-startport` task.

1.  Run the following task from the wp_profile_root/ConfigEngine directory to generate the `HCL Portal and HCL Web Content Manager_PortMatrix.txt` file:
    !!!note


    **Note:** The port file is in the wp_profile_root/ConfigEngine/log directory. It lists the HCL Digital Experience (HCL Portal and HCL Web Content Manager) ports for your installation.

    -   AIX, HP-UX, Linux, and Solaris: `./ConfigEngine.sh list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`
    -   IBM® i: `ConfigEngine.sh list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`
    -   z/OS®: `./ConfigEngine.sh list-server-ports-by-name -DServerName=HCL Portal and HCL Web Content Manager -DWasPassword=password`
2.  Stop the HCL Portal server.

3.  Run the following command to change the starting port number:

    -   AIX HP-UX Linux Solaris: `./ConfigEngine.sh modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DStartPort=starting port number`
    -   Windows: `ConfigEngine.bat modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DStartPort=starting port number`
    -   IBM i: `ConfigEngine.sh modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DStartPort=starting port number`
    -   z/OS: `./ConfigEngine.sh modify-ports-by-startport -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DStartPort=starting port number`
4.  Run the following command to change ports by using the port file:
    !!!note
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

    -   AIX, HP-UX, Linux, and Solaris: `./ConfigEngine.sh modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DPortsFile=full path to ports file`
    -   Windows: `ConfigEngine.bat modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DPortsFile=full path to ports file`
    -   IBM i: `ConfigEngine.sh modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DPortsFile=full path to ports file`
    -   z/OS: `./ConfigEngine.sh modify-ports-by-portsfile -DWasPassword=password -DModifyPortsServer=HCL Portal and HCL Web Content Manager -DPortsFile=full path to ports file`

5.  Restart the HCL Portal server.



**Related information**  


[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

