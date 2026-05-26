# How to use PZN to query values from an LDAP Server not configured in a user repository

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

Personalization (PZN) can query values from an external LDAP server that is not integrated into the IBM WebSphere Application Server (WAS) or HCL Digital Experience (DX) federated user repository. This scenario allows WAS security to manage authentication against a primary user directory, while the PZN engine independently queries a secondary LDAP directory for user attributes without including it in global security authentication or authorization services. This article describes how to configure PZN to access an external LDAP directory as an isolated data source.

## Instructions

To query an external LDAP directory that sits outside of your primary user repository, you must create a custom resource collection to serve as the interface between PZN and the secondary LDAP server.

For detailed steps on creating and defining this interface, refer to [Creating and editing resource collections](../../../manage_content/pzn/personalization/personalization_2/pznCreateResourceCollection.md){target="_blank"}.
