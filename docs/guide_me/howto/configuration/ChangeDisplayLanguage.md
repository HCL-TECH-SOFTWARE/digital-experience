# How to change the display language in HCL DX log files without changing the operating system's locale

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

By default, HCL Digital Experience (DX) log file messages are displayed using the locale set in your operating system. This document provides the steps on how to change the display language without modifying the locale.

## Instructions

You can change the display language of HCL DX log files using Java properties. These properties must be added to the **Generic Java Virtual Machine (JVM) arguments** before restarting the target JVM. Refer to the following steps to change the display language of HCL DX log files:

1. Log on to IBM WebSphere Integrated Solutions Console.  

2. Navigate to **Servers > Server Types > WebSphere application servers**.

3. Click your Portal server name then go to **Java and Process Management > Process definition > Java Virtual Machine**.

4. Add the following parameters in the **Generic JVM arguments** field:

    ``` generic
    -Duser.language=<language> -Duser.region=<region>
    ```

    For example, to set the language to English, use the following parameters:

    ``` generic
    -Duser.language=en -Duser.region=US
    ```

    For more information on the supported languages, refer to [JVM command-line properties and options](https://www.ibm.com/docs/en/wamt?topic=binaries-jvm-command-line-properties-options){target="_blank"}. If a specific language or region cannot be found, contact IBM support.

    For more information on generic JVM arguments, refer to [Setting generic JVM arguments in WebSphere Application Server](https://www.ibm.com/support/pages/setting-generic-jvm-arguments-websphere-application-server){target="_blank"}.

5. Click **Apply > Save**.

6. Restart your HCL DX environment.

7. Open a log file (for example, `<wp_profile_root>\logs\WebSphere_Portal\SystemOut.log`) and review the log entries to verify the language change.
