# How to skip the Health Checker while running `applyCF`

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When running the `applyCF` ConfigEngine task in HCL Digital Experience (DX), the Health Checker runs pre-validation tests to verify credentials, database connectivity, and configuration prerequisites. If any health check test fails, the validation framework issues an administrative stop command to shut down the server. Because the server is stopped, subsequent `xmlaccess` tasks fail to connect and generate a connection refused error.

When this issue occurs, `ConfigTrace.log` records a connection refused error:

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

`SystemOut.log` indicates that the server stopped before the XML Access attempt:

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

This article describes how to skip the Health Checker while running the `applyCF` task.

## Instructions

To skip the Health Checker while running `applyCF`, append `-Dskip.cf.validation=true` to the command. For example:

- Linux or Unix:

    ```bash
    ./ConfigEngine.sh applyCF -Dskip.cf.validation=true
    ```

- Windows:

    ```dos
    ConfigEngine.bat applyCF -Dskip.cf.validation=true
    ```
