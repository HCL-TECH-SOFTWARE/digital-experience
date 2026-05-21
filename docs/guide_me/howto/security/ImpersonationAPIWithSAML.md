# How to integrate the impersonation API with SAML

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

When an HCL Digital Experience (DX) deployment is configured with SAML for Single Sign-On (SSO), the user impersonation feature may fail to function as expected. This behavior occurs due to specific security processing conflicts within the underlying application server. This article outlines the steps required to enable the impersonation API to work alongside a SAML configuration.

## Instructions

To enable user impersonation within a SAML-configured environment, you must remove the `com.ibm.websphere.security.InvokeTAIbeforeSSO` security custom property. Refer to the following steps to remove this custom property:

1. Log in to the IBM WebSphere Integrated Solutions Console as the WebSphere administrator.
2. Navigate to **Security > Global security > Custom properties**.
3. Select the **com.ibm.websphere.security.InvokeTAIbeforeSSO** property.
4. Click **Delete**.
5. Click **Save** at the top of the console messages.
6. On clustered on-premise environments, synchronize the changes with all the nodes.
7. Restart the environment to apply the changes:
    - **Containerized environments:** Restart the `dx-core` pods.
    - **Clustered on-premises environments:** Restart all nodes, including the Deployment Manager (Dmgr) node.
