# How to integrate the impersonation API with SAML

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

You've configured your DX deployment with SAML for SSO and find that you're unable to impersonate other users.

## Instructions

In order for impersonation to work with SAML, the com.ibm.websphere.security.InvokeTAIbeforeSSO security custom property needs to be removed. Follow these steps to remove the custom property:  

1. Log in to the IBM WebSphere Integrated Solutions Console as the WebSphere administrator.
2. Navigate to **Security > Global security > Custom properties**.
3. Select the **com.ibm.websphere.security.InvokeTAIbeforeSSO** property.
4. Click on the **Delete** button.
5. Save the changes.
6. On clustered on-premise environments, synchronize the changes with all the nodes.
7. Restart the dx-core pod on containerized environments or all nodes, including the Deployment Manager node, when running on a clustered on-premise environment.  
