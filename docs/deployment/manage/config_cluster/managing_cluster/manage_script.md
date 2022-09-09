# Managing Portal Scripting Interface in your cluster

The Portal Scripting Interface enables the creation of administrative tasks that administrators can run from a command line. You must prepare your cluster to manage Portal Scripting Interface.

1.  Complete the following steps before you use the Portal Scripting Interface for the first time:

    1.  Verify that the wp.wire.jar file is present in the AppServer_root/lib directory on the deployment manager workstation.

    2.  If the file is not present, copy the file from the AppServer_root/lib directory on any HCL Portal node to the AppServer_root/lib directory on the deployment manager workstation.

    3.  Restart the deployment manager.

2.  For z/OS®: Before you use the Portal Scripting Interface for the first time, complete the following steps:

    1.  Mount the SMP/E home directory of HCL Portal, read only, on your deployment manager node.

    2.  Edit job EJPSSEWL with the SMP/E home directory of HCL Portal for #EJPSMPH# and with the WebSphere® Application Server home directory of the deployment manager node for #ASWASH#.

    3.  Submit the job on the deployment manager node.

    4.  Upon completion, examine the job output. Success is indicated with "rc=0" in the job output.

    5.  Restart the deployment manager.

3.  Run the following task to connect the scripting client to the WebSphere Application Server Network Deployment SOAP port:

    Where:

    -   ND SOAP Port is the WebSphere Application Server Network Deployment workstation's SOAP connector-address.

        To find the SOAP port, on the WebSphere Integrated Solutions Console, click**System administration > Deployment Manager > Ports > SOAP_CONNECTOR_ADDRESS**.

        For example, if you are running wpscript on a workstation that is part of a cell that is managed by a deployment manager, the SOAP port might be 8881.

    -   user is the WebSphere Application Server administrative user name.
    -   password is the administrative user password.
    
    |Operating system|Task|
    |----------------|----|
    |Windows™|wpscript.bat -port ND SOAP Port -user user -password password|
    |AIX®HP-UXLinux™Solaris|./wpscript.sh -port ND SOAP Port -user user -password password|
    |IBM® i|wpscript.sh -port ND SOAP Port -user user -password password|
    |z/OS|./wpscript.sh -port ND SOAP Port -user user -password password <br> **Note:** You must be logged in using the WebSphere administrative user ID.|



