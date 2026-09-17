# How to disable an application blocking the HCL DX server startup

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

During startup, HCL Digital Experience (DX) can fail and log a hanging thread warning in the `SystemOut.log` file. When this occurs, the IBM Integrated Solutions Console becomes inaccessible, preventing administrators from disabling the problematic application through the user interface. This article describes how to prevent the application from starting and blocking the server startup.

## Instructions

To prevent the application from starting, perform the following steps:

1. Open the `SystemOut.log` file.
2. Locate the hanging thread warning message and review the stack trace. For example:

    ```log
    [Timestamp] 000000cc ThreadMonitor W CWWSR0605W: Thread "server.startup : 7" (0000010e) has been active for 749284 milliseconds and may be hung. There is/are 1 thread(s) in total in the server that may be hung. at java.net.SocketInputStream.socketRead0(Native Method)
    ...
    at com.ibm.ws.rsadapter.jdbc.WSJdbcDataSource.getConnection(WSJdbcDataSource.java:644)
    ...
    at com.myCo.myApp.web.db.ProdSessions.session(ProdSessions.java:66)
    ...
    ```

3. Identify the application causing the issue from the class or package name. In the previous example, `com.myCo.myApp` indicates the application is `myApp`.
4. Navigate to the deployment configuration file for the identified application. On a standalone server, the file is typically located in `<wp_profile_root>\config\cells\myCell\applications\myApp.ear\deployments\myApp\deployment.xml`.
5. Open the `deployment.xml` file.
6. Locate the `targetMappings` line for the application. For example:

    ```xml
    targetMappings xmi:id="DeploymentTargetMapping_1475773622265" enable="true"
    ```

7. Change the `enable` attribute to `false`. For example:

    ```xml
    targetMappings xmi:id="DeploymentTargetMapping_1475773622265" enable="false"
    ```

8. Save the changes to the file. The HCL DX server should now start successfully without initiating the problematic application.
