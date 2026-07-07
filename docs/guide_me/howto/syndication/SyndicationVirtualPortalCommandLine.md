# How to create a Syndication pair on a virtual portal at the command line

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

This document provides an example syntax to create a WCM syndicator / subscriber pair for a virtual portal from the command line.

## Instructions

Use this command to create a syndication / subscription pair between two virtual portals from the command line:
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


Run the command from the configengine directory on the SUBSCRIBER machine.

In the example above, both the syndicator and subscriber portal servers had a virtual portal with name "myVirtualPortal".

