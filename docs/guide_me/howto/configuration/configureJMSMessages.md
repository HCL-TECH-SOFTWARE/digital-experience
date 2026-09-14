# How to configure JMS to send messages to all members in a cluster when using Topics

## Applies to  

> HCL Digital Experience v9.5 and higher  

## Introduction  

This document describes the steps required to configure HCL DX and it's underlying IBM WebSphere Application Server (WAS) so that all application servers in a cluster can actively receive messages for Message-Driven Beans (MDBs).

## Instructions  

1. Log in to the IBM Integrated Solutions Console (Administration Console).

2. In the navigation tree, navigate to **Resources > JMS > Activation Specification**.

3. Select the appropriate topic where your activation specification is defined.

4. Check **Always activate MDBs in all servers**.

For further details on MDB connection topology, failover behaviors, and messaging engine placement within a cluster, refer to the official IBM WebSphere Application Server documentation [How a message-driven bean connects in a cluster](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=bus-how-message-driven-bean-connects-in-cluster){target="_blank"}.  
