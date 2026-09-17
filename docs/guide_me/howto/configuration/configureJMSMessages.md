# How to configure JMS to send messages to all members in a cluster when using topics

## Applies to  

> HCL Digital Experience v9.5 and higher  

## Introduction  

In a clustered IBM WebSphere Application Server (WAS) environment running HCL Digital Experience (DX), Message-Driven Beans (MDBs) listening to a Java Message Service (JMS) topic can default to single-consumer processing depending on activation specification topology. Enabling cluster-wide activation ensures every application server instance maintains an active subscriber connection and processes each published topic message concurrently. This article describes how to configure HCL DX and its underlying WebSphere Application Server activation specifications to deliver topic messages to all cluster members.

## Instructions  

To configure JMS to send messages to all members in a cluster when using topics, perform the following steps:

1. Log in to the IBM Integrated Solutions Console (WAS admin console).
2. In the navigation tree, navigate to **Resources > JMS > Activation Specification**.
3. Select the appropriate topic where your activation specification is defined. 

    !!! note
        To determine the appropriate topic, identify the JMS topic by the JNDI name using one of the following methods:  
        - Check the application binding files (`ibm-ejb-jar-bnd.xml` or `ibm-web-bnd.xmi`) for the `destinationJndiName` entry.  
        - In WAS admin console, navigate to **Resources** > **JMS** > **Topics** to view the list of configured topics and corresponding JNDI names.

4. Select the **Always activate MDBs in all servers** checkbox.
5. Select **Apply**.
6. Select **Save** at the top of the console messages.

For further details on MDB connection topology, failover behaviors, and messaging engine placement within a cluster, refer to [How a message-driven bean connects in a cluster](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=bus-how-message-driven-bean-connects-in-cluster){target="_blank"}.