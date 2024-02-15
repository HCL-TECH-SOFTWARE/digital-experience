# Planning for WSRP

Before you work with WSRP, plan your configuration based on the information in the following topics.

You can consume portlets from a HCL Digital Experience or from a different WSRP Producer such as the IBM WSRP Version 2.0 Producer for IBM® WebSphere® Application Server.

## Prerequisites for WSRP in the portal

If you want to use WSRP with your portal, you must have the appropriate level of IBM WebSphere Application Server installed. Refer to the [detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514) to determine the WebSphere Application Server version that is required by your version of HCL Digital Experience.

!!!note
    When creating a WSRP Producer in a Kubernetes environment, you must first import the external certificate used by Kubernetes into the truststore of the WebSphere Application Server and then click ***Apply*** and ***OK***.

![](../planning_wsrp/_img/ssl_certificate_key_mgmt.png "SSL certificate and key management")
