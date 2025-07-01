# How to setup LTPA SSO between DX and Leap

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This guide shows you how to setup LTPA single sign-on between DX and Leap. These steps are based on [this community post](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4) 

## Instructions:
 
1\. Ensure both DX and Leap use an identical user registry configuration.
 
2\. Ensure both DX and Leap use the same realm name (e.g., defaultWIMFileBasedRealm).
  
   - For DX, you may check the realm name as follows: go to the WAS Console (your-domain.com/ibm/console). Go to Security > Global Security > User Account Repository > Realm Name, as shown in the following image:
![](../../../../assets/dx-leap-integration-realm.png)
  
   - For Leap, you may use the configOverrideFiles parameter in your Helm chart's values.yaml file to ensure that the realm name is the same as in DX. In this example, DX uses the realm name "defaultWIMFileBasedRealm", so we set Leap's realm name to that as well. Note where the realm name `defaultWIMFileBasedRealm` appears in the following example:

```yaml
configuration:
  leap:  
    configOverrideFiles:
      mycustomoverride: |
        <server description="leapServer">
          <federatedRepository id="leapRepo">
            <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
              <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
            </primaryRealm>
          </federatedRepository>
          <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
            <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
          </basicRegistry>
        </server>
```

!!!note
    For more information regarding Leap's configOverrideFiles parameter, refer to [this documentation](https://opensource.hcltechsw.com/leap-doc/latest/helm_open_liberty_custom.html?h=configoverridefile).
 
3\. Ensure both sides use the same DNS domain (xyz.com).
 
4\. Security best practices suggest that we ensure LTPA cookie flows only over HTTPS.
 
   - On Traditional WAS, we can limit LTPA cookies to SSL only by ticking the “Requires SSL” checkbox under Security > Global Security > Web and SIP security > Single sign-on (SSO)
   - On Liberty, we can limit LTPA cookies to SSL only by adding this line to your config override file: `<webAppSecurity ssoRequiresSSL="true"/>`
 
5\. Ensure both sides use the same LTPA keys.
 
   - To export the keys from WebSphere Application Server, follow these steps:

      i\. Log in to the WebSphere Application Server Integrated Solutions Console as an administrator.
      
      ii\. Go to Security > Global security and select Authentication mechanisms and expiration.
      
      iii\. Click LTPA.
      
      iv\. In the Cross-cell single sign-on section, enter values for the following fields:
         
       - Password – Enter and confirm a secure password. You will require this password later.
         
       - Fully qualified key file name – Specify a name for the file that holds the exported keys, e.g., `ltpa.keys`. 
      
      v\. Click Export keys.

    
   - Convert the ltpa key file exported in the last step into a Kubernetes secret by copying its contents into a file called `ltpa.keys` in your current folder and running the following: `kubectl create secret generic my-custom-ltpa-key --from-file=./ltpa.keys --namespace=<namespace>`
      
   - Update ltpa-key in the Leap custom Helm values:
```yaml
configuration: 
  leap: 
    customSecrets: 
      ltpa-key: my-custom-ltpa-key
```
   - Update the LTPA keysFileName and keysPassword by adding this line to your config override file: `<ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />`. 

!!! note    
    For more details on using custom secrets as key file, click [here](https://opensource.hcltechsw.com/leap-doc/latest/helm_admin_customsecret.html?h=ltpa#using-custom-secrets-as-key-file).


Adding the `<webAppSecurity...>` and `<ltpa...>` lines to the example config override shown previously, the result would be as follows:
```yaml
### Leap custom values file
configuration:
  leap:  
    configOverrideFiles:
      mycustomoverride: |
        <server description="leapServer">
          <webAppSecurity ssoRequiresSSL="true"/>
          <ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />
          <federatedRepository id="leapRepo">
            <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
              <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
            </primaryRealm>
          </federatedRepository>
          <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
            <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
          </basicRegistry>
        </server>
```
            
6\. Restart HCL Leap and HCL Digital Experience. You should now be able to log in to DX and open Leap without having to log in again.
