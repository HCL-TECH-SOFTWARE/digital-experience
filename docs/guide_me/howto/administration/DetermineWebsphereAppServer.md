# How to determine the HCL DX application server runtime

## Applies to

> HCL Digital Experience v9.5 and higher.

## Introduction

HCL Digital Experience (DX) environments can run on different application server runtimes, such as traditional WebSphere Application Server or IBM Open Liberty. This article explains how to determine which application server runtime is active in your environment by inspecting log files.

## Instructions

To determine the active HCL DX application server runtime, perform the following steps:

1. Look for traditional WebSphere Application Server log files in the profile logs directory (typically `<profile_root>/logs/<server_name>/`, such as `wp_profile/logs/WebSphere_Portal/`):

    - `SystemOut.log`
    - `SystemErr.log`
    - `native_stdout.log`
    - `native_stderr.log`

2. Open `SystemOut.log` and locate the `Start Display Current Environment` section. For example:

    ```log
    ************ Start Display Current Environment ************
    WebSphere Platform 9.0.5.18 [ND 9.0.5.18 f5182346.02] [JAVA8 8.0.5.35 pwa6480sr5fp35-20190418_01] running with process name dmgrCell01\DXNode1\WebSphere_Portal and process id 16048
    ...
    ************* End Display Current Environment *************
    ```

    !!!note
        The `ND` value indicates a traditional WebSphere Application Server Network Deployment installation.

3. Look for IBM Open Liberty log files in the server logs directory (typically `<server_root>/logs/` or the container log path):

    - `messages.log`
    - `console.log`

4. Open `messages.log` and inspect the header information for IBM Open Liberty product details:

    ```log
    ********************************************************************************
    product = Open Liberty 25.0.0.12 (wlp-1.0.108.cl251220251117-0302)
    ...
    ********************************************************************************
    ```
