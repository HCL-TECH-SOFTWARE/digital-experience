# How to change the LDAP attribute used by the Impersonation portlet

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The HCL Digital Experience (DX) Impersonation portlet allows administrators to impersonate other users for troubleshooting and access verification. By default, the portlet renders user profiles using the common name (`cn`) attribute configured in your Lightweight Directory Access Protocol (LDAP) directory. In deployment environments with identical user names or specific naming standards, administrators may prefer displaying the user ID (`uid`) or another attribute to clearly identify accounts.

![Example LDAP Profile](./files/LDAPAttrForImpersonation/Example_LDAP_Profile.jpg)

When using the `uid` attribute, the user profile name is displayed as follows:

![Example LDAP Profile 2](./files/LDAPAttrForImpersonation/Example_LDAP_Profile_2.jpg)

!!!note
    The environment where these screen captures were taken uses HCL Domino as the LDAP platform. The equivalent attributes for other LDAP platforms may be different.

This article describes how to change the user profile LDAP attribute that displays within the HCL DX Impersonation portlet.

## Instructions

To change the user profile LDAP attribute that displays within the HCL DX Impersonation portlet, perform the following steps:

1. Log in to the WebSphere Integrated Solutions Console as an administrator on the standalone application server or the deployment manager (DMGR) in a clustered environment.
2. Go to **Resources > Resource Environment > Resource Environment Providers > WP GlobalThemeConfig > Custom properties**.
3. Select the **user.displaynameattribute** custom property.
4. In the **Value** box, enter the LDAP attribute that you want to use (for example, `cn`, `uid`, or `displayName`).
5. Select **Apply**.
6. Select **Save** at the top of the console messages.
7. If you have a clustered environment, synchronize the nodes:
    1. Navigate to **System administration > Nodes**.
    2. Select the nodes you want to synchronize.
    3. Select **Synchronize** or **Full Resynchronize**. Ensure the nodes you selected are showing a green status icon indicating that the nodes are synced.

!!!note
    Changing the value of the `user.displaynameattribute` custom property changes how the user profile name is displayed throughout the theme, not just in the Impersonation portlet. This change does not affect how the user profile name is displayed in areas of the product where it is not rendered through the theme.
