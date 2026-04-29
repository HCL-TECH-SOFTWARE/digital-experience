# How to Enable SSL Handshake Detailed Logging in HCL Digital Experience

## Applies to

> HCL Digital Experience v9.5 and Later

## Introduction

This document describes how to enable SSL Handshake detailed logging in HCL Digital Experience.

**Example:**

`Client Hello: The client sends a message to the server with its SSL version, cipher settings, session-specific data, and other information.`
`Server Hello: The server responds with its SSL version, cipher settings, session-specific data, and its digital certificate.`
`Certificate Exchange: The server sends its SSL certificate to the client to authenticate itself.`
`Key Exchange: The client and server exchange keys to establish a secure session.`
`Finished Messages: Both the client and server send finished messages to indicate that the handshake is complete.`

## Instructions

To enable this SSL Handshake detailed logging in Portal, perform the following steps:

1. Login to the DMGR admin console.
2. Follow the path below:

    - Application servers > WebSphere_Portal > Process definition > Java Virtual Machine > Generic JVM arguments

3. Add the following parameter: -Djavax.net.debug=all
4. Save the configuration and then restart the JVM.

!!!note
    This must be done for all JVMs in the cluster.

**Additional information:**
A detailed SSL-trace can also be enabled by specifying the following trace-string: *=info:SSL=all 

For detailed steps to enable the trace-string, please check [Trace Logging](../../../deployment/manage/troubleshooting/logging_and_tracing/index.md){target="_blank"}