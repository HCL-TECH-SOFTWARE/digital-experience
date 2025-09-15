# How to Add Additional WebSphere Realms for Virtual Portals

## Applies to

> HCL Digital Experience 9.5

## Introduction

This article describes how to create additional WebSphere realms to be used when creating virtual portals for a specific user base, for example, users within a secondary LDAP server.

## Instructions

The following steps are an example of how to configure a realm within WebSphere that references a secondary LDAP server:

1. Login to the WebSphere Admin console as an administrator.

2. Go to Security > Security domains and click on the "New" button.

3. Provide a name for the new security domain such as SecondLDAP, click on OK, and Save.

4. Go into the security domain, expand the User Realm attribute, select Customize for this domain > Realm type > Standalone LDAP registry and click on the "Configure" button.

5. Provide a realm name as well as the details of the secondary LDAP server (i.e. type of LDAP server, hostname of the LDAP server).

6. Confirm that the configuration is correct by clicking on the "Test Connection" button.

7. Synchronize the Portal node(s).

The new realm should now be available when creating a virtual portal.
