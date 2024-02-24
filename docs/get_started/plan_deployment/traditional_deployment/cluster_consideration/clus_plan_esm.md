# External security managers in a cluster

Complete any configuration for an external security manager after you complete all other setup.

## General considerations

The following considerations apply to all external security managers:

-   When you set up security in a cluster to use an external security manager, ensure that you review and, if required, configure  security on each node in the cluster, as described in the following topic: IBM® Security Access Manager and configuring Computer Associates eTrust SiteMinder for authentication and authorization.
-   When you set up security in a cluster to use an external security manager, ensure that you review and, if required, configure security on each node in the cluster, as described in Security Access Manager.
-   If you change the external security manager configuration after the initial setup, first make the changes in the `wkplc\_comp.propreties` file on the primary node of the cluster. If additional nodes exist in the cluster, ensure that your changes to the `wkplc\_comp.properties` file on the primary node are propagated to the `wkplc\_comp.properties` files on other nodes in the cluster.

## Security Access Manager cluster considerations

-   Ensure that you run the validate-pdadmin-connection task on each node in the cluster.
-   If the validate-pdadmin-connection task fails, run the run-svrssl-config task before you attempt to run the validate-pdadmin-connection task again. Note that the `wp.acc.impl.PDServerName` parameter in the `wkplc\_comp.properties` file represents an individually configured AMJRTE connection to Security Access Manager, and each node in the cluster must have a unique value for the `wp.acc.impl.PDServerName` parameter before you run the run-svrssl-config task.
-   If you use an external web server, additional configuration is required before you run any task to configure an external security manager with an HCL Portal cluster. Edit the `wkplc\_comp.properties` file on each node and ensure that the values for the `wp.ac.impl.JunctionHost` and `wp.ac.impl.JunctionPort` properties are set to the backend server host name and port number you use for the web server.
-   Ensure that the WebSEAL Trust Association Interceptor \(TAI\) parameters, found in the `wkplc\_comp.properties` file, are the same on each node in the cluster. If you run a configuration task that overwrites the WebSEAL junction, the WebSphere® Application Server TAI properties are not automatically updated. Therefore, you must manually ensure that all nodes use the same parameters. To manually ensure the nodes are the same, open the Deployment Manager WebSphere Integrated Solutions Console and click **Security** \> **Global security** \> **Web and SIP Security** \> **Trust Association** \> **Interceptors** \> **com.ibm.sec.authn.tai.TAMETai** \> **Custom properties**.

    !!! note 
        If you are still using the deprecated Trust Association Interceptors \(TAIs\) implementation, click **Security** \> **Global security** \> **Web and SIP Security** \> **Trust Association** \> **Interceptors** \> **com.ibm.ws.security.web.TAMTrustAssociationInterceptorPlus** \> **Custom properties**.

-   Enter the file location specified in the `wp.ac.impl.PDPermPath` parameter in the `wkplc\_comp.properties` file. This property indicates the location of the Security Access Manager AMJRTE properties file \(`PdPerm.properties`\). In a cluster composed of nodes with different operating systems, the location of the `PdPerm.properties` file might differ, depending on the node.

    The value for `wp.ac.impl.PDPermpath` parameter can be set globally for all cluster members. Use the `com.ibm.websphere.security.webseal.configURL` property, which you can access in the Deployment Manager WebSphere Application Server. Click **Security** \> **Global security** \> **Web and SIP Security** \> **Trust Association** \> **Interceptors** \> **com.ibm.ws.security.web.TAMTrustAssociationInterceptorPlus** \> **Custom properties**. Because the Deployment Manager security configuration is not sensitive to each node's file system type, the value for the configURL property must be resolved on each node.

    To ensure that the location of the `PdPerm.properties` file is correctly specified, use one of the following approaches:

    -   If your nodes are all on UNIX or Linux™ platforms, use the UNIX or Linux link command \(`ln`\) to ensure the value for the `0.om.hcl.websphere.security.webseal.configURL` property resolves on each node.
    -   If the `PdPerm.properties` file location differs on each node and your cluster consists of different platforms, this property can accept a WebSphere Application Server variable to establish a location on each node's file system to correctly reference the file.

## eTrust SiteMinder cluster considerations

Ensure that you installed and validated the eTrust SiteMinder binary files on each node in the cluster. If you are using only eTrust SiteMinder for authentication, install and validate the Application Server Agent. If you are using eTrust SiteMinder for authentication and authorization, you must install and validate both the Application Server Agent and the SDK.


