# How to prevent startup of an application when it is blocking the HCL DX server startup

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The HCL Digital Experience server may fail to start with the following message in the SystemOut.log:

```log
ThreadMonitor W CWWSR0605W: Thread "server.startup : 7" (0000010e) has been active for 749284 milliseconds and may be hung. There is/are 1 thread(s) in total in the server that may be hung.
```

In such a situation the IBM Integrated Solutions Console (admin-console) can not be accessed anymore to disable the application that is causing it. This document describes detailed steps that can be used to prevent the application from starting and blocking the server startup.

## Instructions

The first step is to identify the application that is causing the hang. That can be checked by reviewing the stack-trace of the hanging thread warning message.  

For example:  

```log
[Timestamp] 000000cc ThreadMonitor W CWWSR0605W: Thread "server.startup : 7" (0000010e) has been active for 749284 milliseconds and may be hung. There is/are 1 thread(s) in total in the server that may be hung. at java.net.SocketInputStream.socketRead0(Native Method)
...
at com.ibm.ws.rsadapter.jdbc.WSJdbcDataSource.getConnection(WSJdbcDataSource.java:644)
...
at com.myCo.myApp.web.db.ProdSessions.session(ProdSessions.java:66)
...
```

In the sample above the application **myApp** is causing the issue for which class/package `com.myCo.myApp` provides the information about the application that is causing it.  

To prevent the startup of the application, modify the `deployment.xml` for **myApp**.

On a standalone server the location of that file is usually in:  

`<wp_profile_root>\config\cells\myCell\applications\myApp.ear\deployments\myApp\deployment.xml`

Change this line:

`targetMappings xmi:id="DeploymentTargetMapping_1475773622265" enable="true"`

to this:

`targetMappings xmi:id="DeploymentTargetMapping_1475773622265" enable="false"`

The HCL Digital Experience Server should now start without starting **myApp**.  
