# How to debug SSL handshake problems in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In an HCL Digital Experience (DX) environment, the SSL/TLS protocol secures multiple communication channels. When SSL communication issues occur, enabling detailed tracing helps isolate the root cause. This article describes how to enable detailed SSL traces and analyze the resulting logs.

## Instructions

To configure and gather SSL trace information, perform the following steps:

### Configuring JVM arguments for SSL debugging

1. Log in to the IBM WebSphere Integrated Solutions Console (WAS admin console) using the appropriate URL for your environment:

    - Clustered environment: `https://<host>:9060/ibm/console`
    - Containerized environment: `https://<host>/ibm/console`
    - Standalone server: `https://<host>:10041/ibm/console`

2. In the navigation pane, select **Servers > Server Types > WebSphere application servers > WebSphere_Portal**.
3. Under **Server Infrastructure**, go to **Java and Process Management > Process definition > Java Virtual Machine**.
4. In the **Generic JVM arguments** field, enter a space and append `-Djavax.net.debug=all` to the end of the existing generic JVM arguments.  
5. Select **Apply**.
6. Select **Save** at the top of the console messages.

### Configuring the diagnostic trace service

1. In the navigation pane, select **Troubleshooting > Logs and trace > WebSphere_Portal > Diagnostic Trace**.  
2. Set the **Maximum file size** to `100` MB.  
3. Set the **Maximum number of historical files** to `10`.  
4. Select **Change log detail levels**.  
5. Specify the following trace string: `*=info:SSL=all`
6. Select **Apply**.
7. Select **Save** at the top of the console messages.
8. Restart the `WebSphere_Portal` server.
9. Reproduce the problem and collect all log, First Failure Data Capture (FFDC), and trace files.

For more information about enabling trace strings, refer to [Trace Logging](../../../deployment/manage/troubleshooting/logging_and_tracing/index.md).

### Analyzing SSL traces

1. Review the generated log and trace files, such as `SystemOut.log`. When an SSL communication issue occurs, `SSLHandshakeException` errors typically appear within these detailed SSL traces.

2. Check the files for `SSLHandshakeException`, `Client Hello`, and `ServerHello` messages to determine the root cause of the failure.

    Example of an SSL communication flow between a DX client and a DX server:

    ```logs
    Client Hello: The client sends a message to the server with its SSL version, cipher settings, session-specific data, and other information.
    ...
    Server Hello: The server responds with its SSL version, cipher settings, session-specific data, and its digital certificate.
    ...
    Certificate Exchange: The server sends its SSL certificate to the client to authenticate itself.
    ...
    Key Exchange: The client and server exchange keys to establish a secure session.
    ...
    Finished Messages: Both the client and server send finished messages to indicate that the handshake is complete.
    ```  
