# How to Skip the Health Checker While Running ApplyCF

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document describes how to skip the Health Checker while running applyCF when it's causing an inopportune server shut down and it won't let the main part of the profile update run.

ConfigTrace.log shows a connection refused:

```text
 define-device-classes:
 [DateTime] Target started: define-device-classes
 [xmlaccess] EJPXB0006I: Connecting to URL http://localhost:10039/wps/config
 [xmlaccess] EJPXB0004I: Writing output file ..\wp_profile\logs\define-device-classes.wp.devicesupport.impl.log
 [xmlaccess] EJPXB0009E: Could not connect to portal.
 [xmlaccess] java.net.ConnectException: Connection refused: connect
 [xmlaccess] EJPXB0016E: An error occurred on the client: Connection refused: connect
 --- Exception Thrown ---
 ..\PortalServer\base\wp.devicesupport.impl\config\includes\wp.devicesupport.impl_cfg.xml:41: EJPXB0016E: An error occurred on
 the client: Connection refused: connect
```


The SystemOut.log revealed that something caused the server to shut down before the XML Access attempt:

```text
 [DateTime] 000003fe AdminHelper   A   CWWMN1020I: An
 attempt is made to stop the WebSphere_Portal server. (User ID =
 defaultWIMFileBasedRealm/WPADMIN)
 [DateTime] 00000053 ServerCollabo A   CWWSR0023I: Server
 WebSphere_Portal is stopping
 ...
 [DateTime] 00000053 ServerCollabo A   CWWSR0024I: Server
 WebSphere_Portal stopped
```

## Instructions

Run the applyCF task with the following parameter:

```text
-Dskip.cf.validation=true
```
