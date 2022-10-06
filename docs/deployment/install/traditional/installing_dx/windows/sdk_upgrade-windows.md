# Upgrading the SDK

Change your version of the SDK Java Technology Edition using the applicable HCL Digital Experience Combined fix pack.

Ensure that your Portal profile is created before you upgrade the SDK.

1.  Start the IBM® Installation Manager.

2.  Install the latest supported version of IBM WebSphere SDK Java Technology Edition.

    !!!note
        Starting with HCL Digital Experience Combined fix pack 05, you can change your SDK Java Technology Edition from version 7.0 to version 7.1.Starting with HCL Digital Experience Combined fix pack 12, you can change your SDK Java Technology Edition to version 8.0.

3.  Read the following information before you run the `managesdk` task:

    -   For stand-alone environments: Stop the profile server (node) before you run the managesdk command.
    -   For clustered environments:
        -   If the profile is a federated node of a deployment manager, ensure that the deployment manager is running before you run the managesdk command to update the profile.
        -   Stop all the nodes.
        -   Ensure that the node agent for each node is started.
        -   When you enable the SDK for a node, run the managesdk command from the /bin directory to which the node belongs. You can also run the command from the /bin directory of the profile that contains the node that you want to update.
        -   A connection to the deployment manager must exist with a supported connector protocol in the following order of preference:

            -   SOAP
            -   Inter-Process Communications (IPC)
            -   Remote Method Invocation (RMI)

            If the SOAP protocol is enabled, the managesdk command uses the SOAP protocol. If the SOAP protocol is not enabled but the IPC protocol is enabled, the command uses the IPC protocol. If the SOAP and IPC protocol are not enabled, then the command uses the RMI protocol.

        -   You must provide the administrative user name and password with the managesdk command for each profile that contains a federated node or deployment manager node in a cell with security enabled. If you do not specify the -user and -password parameters, the managesdk command might fail or stop processing.
        -   When you enable the SDK for a deployment manager, only the deployment manager server is enabled. None of the managed nodes of the deployment manager is enabled to use the specific SDK.

4.  Open a command prompt and change to the AppServer_root/bin directory.

5.  Run the following command to list the available SDK versions:

    Go to [managesdk command](https://www.ibm.com/docs/en/was/9.0.5?topic=tools-managesdk-command) for information about the managesdk commands.

    -   AIX® and Linux™: `./managesdk.sh -listAvailable`
    -   Windows™: `managesdk.bat -listAvailable`

6.  Run the following command to enable all existing profiles to use the new SDK version:

    !!!note
        version_number is the supported SDK version number that was listed when you ran the `managesdk -listAvailable` command.

    -   AIX and Linux: `./managesdk.sh -enableProfileAll -sdkname version_number -enableServers`
    -   Windows: `managesdk.bat -enableProfileAll -sdkname version_number -enableServers`

7.  Run the following commands to make the new SDK version the new default:

    -   AIX and Linux: `./managesdk.sh -setCommandDefault -sdkname version_number`<br>

        `./managesdk.sh -setNewProfileDefault -sdkname version_number`

    -   Windows: `managesdk.bat -setCommandDefault -sdkname version_number`<br>

        `managesdk.bat -setNewProfileDefault -sdkname version_number`

8.  If you have a DB2® database, upgrade the JCC driver. Go to [DB2 APAR PI47282 needed when using JAVA SDK8 in WebSphere Application Server V8.5.5.9+](https://support.hcltechsw.com/csm) for information.

9. Repeat these steps on each node in your environment.

    !!!note
        You cannot roll back to a version of HCL Digital Experience earlier than fix pack 11 while you use SDK Java Technology Edition version 8. Support for SDK Java Technology Edition version 8 does not exist in earlier releases of Portal. If you want to roll back to an earlier CF level, use the commands that are shown in steps 7 and 8 to switch back to SDK version 7.0 or 7.1 before you roll back.



