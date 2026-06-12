# How to determine the HCL DX application server runtime from the logs

## Applies to

> HCL Digital Experience 9.5 and later

## Introduction

This document explains how to determine whether your HCL Digital Experience environment is running on an traditional WebSphere Application Server or on IBM Open Liberty.  

## Instructions

An traditional IBM WebSphere Application Server uses the following log-files:

- SystemOut.log  
- SystemErr.log  
- native_stdout.log  
- native_stderr.log  

In addition to that in the SystemOut.log file there is a header section that starts with **Start Display Current Environment**.
Inside of this header-section the edition and version of the traditional IBM WebSphere Application Server is shown.  

For example:  

```log
************ Start Display Current Environment ************
WebSphere Platform 9.0.5.18 [ND 9.0.5.18 f5182346.02] [JAVA8 8.0.5.35 pwa6480sr5fp35-20190418_01] running with process name dmgrCell01\DXNode1\WebSphere_Portal and process id 16048
...
************* End Display Current Environment *************
```

where **ND** under **\[ND 9.0.5.18 f5182346.02]** stands for **Network Deployment** and mark the server as traditional.  

IBM Open Liberty uses by default a messages.log and a console.log which do not exist in traditional IBM WebSphere Application Servers. The messages.log includes information about the edition and version of IBM Open Liberty.

For example:  

```log
********************************************************************************
product = Open Liberty 25.0.0.12 (wlp-1.0.108.cl251220251117-0302)
...
********************************************************************************
```

So you can confirm which kind of logs are output to determine your WebSphere Application Server is traditional or IBM Open Liberty.
