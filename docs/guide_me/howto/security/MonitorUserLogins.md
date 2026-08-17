# How to monitor user logins from traces in HCL DX

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

Monitoring user logins through trace files helps troubleshoot authentication issues on your HCL Digital Experience (DX) server. This article explains how to monitor user logins from traces.

## Instructions

To monitor user logins from traces, perform the following steps:

1. Log in to the IBM Integrated Solutions Console (WAS admin console).

2. Navigate to **Troubleshooting > Logs and trace > WebSphere_Portal > Diagnostic Trace > Change log detail levels**.

3. Under **Change log detail levels** in the **Configuration tab**, enter the following trace string:

    ```log
    com.ibm.wps.services.authentication.impl.AuthenticationServiceImpl=fine
    ```

4. In your terminal, run the following command to tail and filter the `trace.log` file:

    ```shell
    tail -f trace.log | grep "Trying to authenticate user"
    ```
