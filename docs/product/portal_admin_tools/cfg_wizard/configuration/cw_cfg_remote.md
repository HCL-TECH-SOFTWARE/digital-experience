# Configuring a remote server to receive workflows

The configuration wizard provides you with the option of sending your customized workflow to a remote server.

To send your workflow to a system that you are not connected to, you must provide connection information for the remote system to the configuration wizard.

1.  Provide your connection information for the remote system.

    -   Cell name
    -   Node name
    -   Host name
    -   SOAP port
    -   Application server administrator ID
    -   Password
2.  Click **Test Connection** to check your connection information before you start your configuration.

    If you have connection issues,

    -   Check the values of the SOAP connection properties.
    -   Start the remote server in listener mode if you are not already running the server in listener mode.
        -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh start-listner
        -   IBM® i: ConfigEngine.sh start-listner
        -   Windows™:ConfigEngine.bat start-listner
3.  Click **Send to Remote System** to start your configuration on the remote system.

    **Note:**

    -   Scripts are run from the command line.
    -   The configuration pauses for manual steps. You are prompted from the command line to perform these manual steps as necessary. You are also prompted to confirm whether these steps are completed or whether you want to skip the manual steps.

**Related information**  


[Configuration Wizard: Running the configuration](../cw_panelhelp/cw_workflow_opt.md)

