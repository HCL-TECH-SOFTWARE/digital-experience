# How To Monitor User Logins in HCL Digital Experience

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document provides steps to monitor user logins to the HCL Digital Experience server.

## Instructions

1. Login into the IBM Integrated Solutions Console (WAS admin console)

2. Go to Troubleshooting > Logs and trace > (server) > Diagnostic trace > Change log detail levels > Configuration tab > enter the trace string:

    ```text
    com.ibm.wps.services.authentication.impl.AuthenticationServiceImpl=fine
    ```

3. Then tail and grep the trace.log with this command :

    ```text
    tail -f trace.log | grep "Trying to authenticate user"
    ```
