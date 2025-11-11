# How to add additional security realms for virtual portals

## Applies to

> HCL Digital Experience 9.5

## Introduction

This article describes how to create additional security realms when creating Virtual Portals for a specific user base. For example, users within a secondary LDAP server.

## Instructions

The following steps are an example of how to configure a realm that references a secondary LDAP server:

1. Login to the IBM Integrated Solutions Console (admin console) as an administrator.

2. Navigate to **Security > Security domains** and click on the **New** button.

3. Provide a name for the new security domain such as SecondLDAP, click on **OK**, and **Save**.

4. Go into the security domain.

5. Expand the **User Realm** attribute.

6. Select **Customize for this domain**

7. For the **Realm type** select  **Standalone LDAP registry** and click on the **Configure** button.

8. Provide a realm name as well as the details of the secondary LDAP server (i.e. type of LDAP server, hostname of the LDAP server).

9. Confirm that the configuration is correct by clicking on the **Test Connection** button.

10. On a clustered environment, synchronize the changes with all DX nodes.  

11. Restart the DX environment

The new security realm should now be available when creating a Virtual Portal.
