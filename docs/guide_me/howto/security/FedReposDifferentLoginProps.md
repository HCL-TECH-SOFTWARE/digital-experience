# How To Configure HCL Portal to Allow Users to Log in With Different Login Properties in a Federated Repository

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction
When HCL Portal is configured with a federated LDAP, Portal relies on Virtual Member Manager (VMM) for authentication.  When you want to leverage more than one login property, you need to configure VMM to support multiple login properties.  

!!!note
    Login properties values should be unique across all repositories participating in a realm.  Work with your LDAP administrator to ensure this requirement is met.  Additionally, this document assumes that the login property is already defined within the LDAP.  If you want to extend the properties beyond the LDAP, that requires additional steps.  Click [here](https://www.ibm.com/support/pages/how-configure-extended-property-login-property-ldap-repository-configuration-federated-repository-setup){target="_blank"}.

## Instructions
1. Back up the wimconfig.xml file.

    If stand alone, `<WP_profile_root>`/config/cells/`<cellname>`/wim/config/wimconfig.xml

    If clustered, `<DMGR_profile_root>`/config/cells/`<cellname>`/wim/config/wimconfig.xml

2. Log on to WebSphere Application Server Administrative console.

3. Go to **Global security > Federated repositories > Configure > Manage repositories > <Repository_ID>**.

4. In the **Login properties field**, specify **uid;mail**

5. Click **Apply** and then **Save**.

6. Log off WebSphere Application Server Administrative console.

7. Restart the application server.