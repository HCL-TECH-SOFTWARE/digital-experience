# Starting and stopping servers, deployment managers, and node agents

Various installation and configuration tasks require you to start and stop IBM WebSphere Application Server and the HCL Digital Experience application servers, deployment managers, and node agents.

1.  Open a command prompt and change to the following directory:

    **Note:** In a clustered environment, use the dmgr\_profile\_root directory and not the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) directory.

    -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\bin
    -   AIX® HP-UX Linux™ Solaris: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin
    -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin
    -   z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin
2.  Complete the following steps to start the servers, deployment managers, and node agents

    |Server|Steps|
    |------|-----|
    |Deployment manager|Enter the following command:    -   AIX HP-UX Linux Solaris: ./startManager.sh
    -   Windows: startManager.bat
    -   IBM i: startManager
    -   z/OS: ./startManager.sh
|
    |Node agent|Enter the following command:    -   AIX HP-UX Linux Solaris: ./startNode.sh
    -   Windows: startNode.bat
    -   IBM i: startNode
    -   z/OS: ./startNode.sh
|
    |**HCL Portal server**|Enter the following command:**Note:** If you have a clustered environment or you renamed HCL Portal server, HCL Portal and HCL Web Content Manager is the name that you defined for your HCL Portal server.

    -   AIX HP-UX Linux Solaris: ./startServer.sh HCL Portal and HCL Web Content Manager
    -   Windows: startServer.bat HCL Portal and HCL Web Content Manager
    -   IBM i: startServer HCL Portal and HCL Web Content Manager
    -   z/OS: ./startServer.sh HCL Portal and HCL Web Content Manager
|

3.  Complete the following steps to stop the servers, deployment managers, and node agents:

    |Server|Steps|
    |------|-----|
    |**HCL Portal server**|Enter the following command:**Note:** If you have a clustered environment or you renamed your HCL Portal server, HCL Portal and HCL Web Content Manager is the name that you define for your HCL Portal server.

    -   AIX HP-UX Linux Solaris: ./stopServer.sh HCL Portal and HCL Web Content Manager
    -   Windows: stopServer.bat HCL Portal and HCL Web Content Manager
    -   IBM i: stopServer HCL Portal and HCL Web Content Manager
    -   z/OS: ./stopServer.sh HCL Portal and HCL Web Content Manager
|
    |Node agent|Enter the following command:    -   AIX HP-UX Linux Solaris: ./stopNode.sh
    -   Windows: stopNode.bat
    -   IBM i: stopNode
    -   z/OS: ./stopNode.sh
|
    |Deployment manager|Enter the following command:    -   AIX HP-UX Linux Solaris: ./stopManager.sh
    -   Windows: stopManager.bat
    -   IBM i: stopManager
    -   z/OS: ./stopManager.sh
|

4.  In a clustered environment, you can use the deployment manager WebSphere® Integrated Solutions Console to stop and start the application servers that are managed by the deployment manager:

    |Option|Steps|
    |------|-----|
    |Start a specific application server in a cell|Complete the following steps to start a specific application server in a cell:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **Servers** \> **Application Servers**.
    3.  Select the server and click **Start**.
|
    |Start the entire cluster|Complete the following steps to start the entire cluster:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **Servers** \> **Clusters**.
    3.  Select the cluster and click **Start** or **Ripple Start**.
|
    |Stop a specific server in a cell|Complete the following steps to stop a specific application server in a cell:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **Servers** \> **Application Servers**.
    3.  Select the server and click **Stop** or **Immediate Stop**.
|
    |Stop the entire cluster|Complete the following steps to stop the entire cluster:    1.  Open the deployment manager WebSphere Integrated Solutions Console.
    2.  Click **Servers** \> **Clusters**.
    3.  Select the cluster and click **Stop** or **Immediate Stop**.
|


