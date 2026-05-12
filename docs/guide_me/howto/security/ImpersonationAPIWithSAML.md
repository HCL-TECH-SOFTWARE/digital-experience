# How To Integrate the Impersonation API with SAML

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction
You've configured your DX deployment with SAML for SSO and find that you're unable to impersonate other users.

## Instructions
In order for impersonation to work with SAML, the com.ibm.websphere.security.InvokeTAIbeforeSSO security custom property needs to be removed.  Follow these steps to remove the custom property:

1. Log in to the WebSphere Integrated Solutions Console as the WebSphere administrator.
2. Go to Security > Global security > Custom properties.
3. Select the com.ibm.websphere.security.InvokeTAIbeforeSSO property.
4. Click on the Delete button.
5. Save the changes.
6. Synchronize the nodes.
7. Restart all of the nodes, including the Deployment Manager node.
