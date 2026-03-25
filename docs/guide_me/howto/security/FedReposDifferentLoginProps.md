# How to configure multiple login properties in a federated repository in HCL DX

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

When HCL DX is configured with a federated LDAP, it relies on Virtual Member Manager (VMM) for authentication.  If you want to use more than one login property, you need to configure VMM to support multiple login properties.  

!!!note
    Login properties values should be unique across all repositories participating in a realm. Work with your LDAP administrator to ensure this requirement is met. Additionally, this article assumes that the login property is already defined within the LDAP. For more information on how to extend the properties beyond the LDAP, refer to [How to configure an extended property as a login property for the LDAP repository configuration in a federated repository setup](https://www.ibm.com/support/pages/how-configure-extended-property-login-property-ldap-repository-configuration-federated-repository-setup){target="_blank"}.

## Instructions

1. Back up the `wimconfig.xml` file.

    - In a DX standalone server, the file is located at `<wp_profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml`.

    - In a clustered DX environment, the file is located in the Deployment Manager profile at `<profile_root>/config/cells/<cellname>/wim/config/wimconfig.xml`.

2. Log in to the IBM Integrated Solutions Console.
3. Navigate to **Security > Global security**.
4. Under **Available realm definitions**, select **Configure** for **Federated repositories**.
5. Under **Related items**, select **Manage repositories**, and then select your specific LDAP repository identifier.
6. In the **Login properties** field, specify `uid;mail`.
7. Click **Apply**.
8. Click **Save** at the top of the console messages. and then **Save**.
