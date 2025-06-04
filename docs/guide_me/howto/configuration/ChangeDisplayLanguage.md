# How to change the display language in HCL DX log files without changing the operating system's locale

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

HCL Digital Experience (DX) log file messages by default are displayed using the locale set in your operating system. This document provides the steps on how to change the display language without modifying the locale.

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

    A list of supported languages can be found at [JVM command-line properties and options](https://www.ibm.com/docs/en/wamt?topic=binaries-jvm-command-line-properties-options){target="_blank"}. If a specific language or region cannot be found, please get in contact with IBM support to find out the correct language and region code.

    For more information, refer to [Setting generic JVM arguments in WebSphere Application Server](https://www.ibm.com/support/pages/setting-generic-jvm-arguments-websphere-application-server){target="_blank"}.

5. Click **Apply > Save**.

6. Restart your HCL DX environment.

7. Test the new settings by opening for example the `<wp_profile_root>\logs\WebSphere_Portal\SystemOut.log` file. Review the log entries in the file and verify the language in which the log-entries are printed out.  
