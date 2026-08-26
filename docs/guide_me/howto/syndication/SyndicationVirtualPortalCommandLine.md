# How to create a virtual portal syndicator-subscriber pair using the command line

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In Web Content Manager (WCM), content updates can be distributed across virtual portals using the command line. This article describes how to create a virtual portal syndicator-subscriber pair using the command line in HCL DX.

## Instructions

To create a virtual portal syndicator-subscriber pair using the command line in HCL DX, perform the following steps:

1. Open a command prompt and navigate to the `ConfigEngine` directory on the subscriber server.
2. Execute the the `run-wcm-admin-task-subscribe-now` ConfigEngine task. For example:

    ```cmd
    ConfigEngine.bat run-wcm-admin-task-subscribe-now
    -Dsyndicator=http://<myHost>:<myPort>/wps/wcm/<context>
    -DvaultSlotName=syndicationSlot
    -DsyndicatorName=mySyndicator
    -DsubscriberName=mySubscriber
    -DliveItems="Portal Site"
    -DisEnabled=false
    -DsubscriberURL=http://localhost:10039/wps/wcm/myVirtualPortal
    -DVirtualPortalContext="myVirtualPortal"
    ```

    - On AIX, Linux, or Unix operating systems, execute `ConfigEngine.sh` instead of `ConfigEngine.bat`.
    - In this example, both the syndicator and subscriber portal servers use a virtual portal named `myVirtualPortal`. Replace `myVirtualPortal` with your virtual portal context name.
