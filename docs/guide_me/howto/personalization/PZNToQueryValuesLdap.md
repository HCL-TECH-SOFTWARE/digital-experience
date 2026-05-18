# How to change the redirect URL for Login, Logout, and Session Timeout

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When using PZN, a question maybe comes up, if it is possible to use PZN to query values from an LDAP server that is not configured in a WebSphere Application Server/ HCL Portal server user repository. For that a requirement could be that WAS Security need to be configured to use LDAP#1, while the PZN engine need to be configured to query records from LDAP#2.
Important in that scenario could be to make sure that LDAP#2 will not be part of the WAS Global Security authentication / authorization services.
(In other words, PZN maybe need to be configured to access LDAP#2 kind of like a JDBC datasource but using the LDAP protocol).

## Instructions

If the mentioned scenario should be implemented, it is needed to create a custom Resource Collection that provides the interface to the LDAP#2 and define that resource to PZN.

More information on Resource Collections can be found at the following link:

[Creating and editing resource collections](https://help.hcl-software.com/digital-experience/8.5/panel_help/pznCreateResourceCollection.html)
