# How to Change the LDAP Attribute Used by the Impersonation Portlet

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This documentation describes how to change the user profile LDAP attribute that's displayed within the DX Impersonation portlet.  For example, when using the common name (cn) LDAP attribute, the user profile name is displayed as follows:


![Example LDAP Profile](./files/LDAPAttrForImpersonation/Example_LDAP_Profile.jpg)
 

When using the uid attribute, the user profile name is displayed as follows:


![Example LDAP Profile 2](./files/LDAPAttrForImpersonation/Example_LDAP_Profile_2.jpg)
 

**NOTE: The environment that these screen captures were taken from uses HCL Domino as the LDAP platform.  The equivalent attributes for other LDAP platforms may be different.**

## Instructions

To change the user profile LDAP attribute that's displayed within the DX Impersonation portlet, update the user.displaynameattribute custom property of the WP GlobalThemeConfig resource environment provider.

**Procedure:**

1. As an administrator, log in to the WebSphere Integrated Solutions Console (ISC) of the Portal application server in a stand-alone environment or the deployment manager (DMGR) in a clustered environment.
2. Go to Resources > Resource environment providers > WP GlobalThemeConfig > Custom properties.
3. Click on the user.displaynameattribute custom property.
4. Populate the "Value" field with the LDAP attribute that you want to use.
5. Click on the "Apply" button.
6. Click on "Save".
7. If in a clustered environment, synchronize the nodes.



**DISCLAIMER: Changing the value of the user.displaynameattribute custom property will change how the user profile name is displayed throughout the theme, not just in the Impersonation portlet.  This change will NOT affect how the user profile name is displayed in areas of the product where it is not rendered via the theme.**
