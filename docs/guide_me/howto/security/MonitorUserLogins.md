# How to monitor user logins from traces on HCL Digital Experience

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document provides steps to monitor user logins from traces on the HCL Digital Experience server.

## Instructions

1. Login into the IBM Integrated Solutions Console (WAS admin console)

2. Navigate to **Troubleshooting > Logs and trace > WebSphere_Portal > Diagnostic trace > Change log detail levels**.

3. In the **Configuration tab** enter the trace string:

    ```log
    com.ibm.wps.services.authentication.impl.AuthenticationServiceImpl=fine
    ```

4. Then tail and grep the trace.log with this command :

    ```shell
    tail -f trace.log | grep "Trying to authenticate user"
    ```
