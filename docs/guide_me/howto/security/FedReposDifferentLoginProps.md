# How to configure HCL DX to allow users to login with different login properties in a federated repository

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

When HCL DX is configured with a federated LDAP, DX relies on Virtual Member Manager (VMM) for authentication.  When you want to leverage more than one login property, you need to configure VMM to support multiple login properties.  

!!!note
    Login properties values should be unique across all repositories participating in a realm.  Work with your LDAP administrator to ensure this requirement is met. Additionally, this document assumes that the login property is already defined within the LDAP. If you want to extend the properties beyond the LDAP, that requires additional steps. For details please review [How to configure an extended property as a login property for the LDAP repository configuration in a federated repository setup](https://www.ibm.com/support/pages/how-configure-extended-property-login-property-ldap-repository-configuration-federated-repository-setup){target="_blank"}.

## Instructions

1. Back up the wimconfig.xml file.

    On a DX standalone server the file can be found in directory `<wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml`.

    When using a clustered environment the file need to be backup on the the Deployment Manager profile in directory `<profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml`.

2. Login into the IBM Integrated Solutions Console.

3. Navigate to **Global security > Federated repositories > Configure > Manage repositories > <Repository_ID>**.

4. In the **Login properties field**, specify **uid;mail**

5. Click **Apply** and then **Save**.

6. Restart the IBM WebSphere Application Server.  
