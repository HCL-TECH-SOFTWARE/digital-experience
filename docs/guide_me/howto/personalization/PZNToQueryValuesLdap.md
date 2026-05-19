# How to use PZN to query values from an LDAP Server not configured in a user repository

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

When using PZN, a question maybe comes up, if it is possible to use PZN to query values from an LDAP server that is not configured in a IBM WebSphere Application Server (WAS) / HCL DX server user repository. For that a requirement could be that WAS security need to be configured to use LDAP 1, while the PZN engine need to be configured to query records from LDAP 2.
Important in that scenario could be to make sure that LDAP 2 will not be part of the WAS global security authentication / authorization services. (In other words, PZN maybe need to be configured to access LDAP 2 kind of like a JDBC datasource but using the LDAP protocol).

## Instructions

If the mentioned scenario should be implemented, it is needed to create a custom resource collection that provides the interface to the LDAP 2 and define that resource to PZN.

More information on resource collections can be found in [Creating and editing resource collections](../../../manage_content/pzn/personalization/personalization_2/pznCreateResourceCollection.md){target="_blank"}
