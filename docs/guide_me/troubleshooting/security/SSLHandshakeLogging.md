# How to debug SSL Handshake problems in HCL Digital Experience

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

This document describes how to debug Secure Socket Layer (SSL) Handshake problems in HCL Digital Experience.

## Instructions

In an HCL DX environment the SSL protocol is used in a lot of different communication channels. If problems occur with the SSL-communication, further debugging might be needed for which the following can be done:

### Enable detailed SSL traces

1. Login to the IBM Integrated Solutions Console (WAS admin console).  
    Default URLs:  
    - Clustered environment: `https://<host>:9060/ibm/console`  
    - Containerized environment: `https://<host>/ibm/console`  
    - Standalone server: `https://<host>:10041/ibm/console`  
2. Navigate to **Servers > Server Types > WebSphere Application Servers > WebSphere_Portal > Process definition > Java Virtual Machine > Generic JVM arguments**.  
3. Add a blank character and then the parameter `-Djavax.net.debug=all` after the end of the existing generic JVM arguments.  
4. Save the configuration.  
5. Navigate to **Logging and Tracing > WebSphere_Portal > Diagnostic trace service**.  
6. Set the **Maximum File size** to **100 MB**.  
7. Set the **Maximum Number of Historical Files** to **10**.  
8. Click to **Change log detail levels**.  
9. Specifying the following trace-string: `*=info:SSL=all`.  
10. Click to the **Apply** button and **save the Changes to the master configuration**.
11. Restart the WebSphere_Portal server.
12. Reproduce the problem and collect all log- ffdc- and trace-files.  

For detailed steps to enable the trace-string, please check [Trace Logging](../../../deployment/manage/troubleshooting/logging_and_tracing/index.md){target="_blank"}

## Analyzing the SSL traces

Usually, if a problem occurs with the SSL communication, SSLHandshakeExceptions can be noticed in the detailed SSL-traces. That can be written inside of the SystemOut.log and/or trace-files.
Review all logs and check for **SSLHandshakeException** and for **Client Hello** and **ServerHello** messages in that files to find out more about the root-cause.  

**Example of an SSL-communication flow between a DX client and a DX server:**

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
