# How to create a custom login portlet with credential vault handling in HCL DX

## Applies to

> HCL Digital Experience version 8.5 and higher  

## Introduction

HCL Digital Experience lets you create custom login portlets. You can use this option if the default login portlet doesn’t meet your requirements or if you want to add extra validation during the login process.  

This article provides step-by-step guidance on how to build a custom login portlet and add user credentials to the credential vault after a successful login.

## Instructions

### Using the login service

In HCL Digital Experience version 8.5 and later, a portlet service is available that lets users log in to the portal. This service continues to use the `LoginUserAuth` class during the login process. You can develop a custom login portlet to include additional validation or processing before or after the login operation.

```text
wp.auth.cmd.jar  
wp.auth.base.jar
```

These JAR files are located in the following directories of your HCL DX installation:

- `<PortalServer_root>\base\wp.auth.base\shared\app`
- `<PortalServer_root>\base\wp.auth.cmd\shared\app`

The first portlet service you need to access is:

`com.ibm.portal.portlet.service.login.LoginService`

To access this service, add code similar to the following example. It’s best to include this in the `init` method of your portlet:

```java
PortletServiceHome psh;
javax.naming.Context ctx = new javax.naming.InitialContext();
psh = (PortletServiceHome) ctx.lookup(LoginHome.JNDI_NAME);
loginHome = (LoginHome) psh.getPortletService(LoginHome.class);
```
It is also required to add a login form to the JSP page which has already been done and is included in the first portlet provided at the end of the this article. See:
[CustomLoginPortlet.war](./files/CustomLoginPortlet/CustomLoginPortlet.war){target="_blank"}  

At this point, the user is either logged in or not, depending on the response from the `LoginService`. After you call the login service method, control doesn’t return to your portlet code if the user is logged in. The portal automatically redirects the user to the appropriate page unless an authentication error occurs or a `finally` block is defined.

### Adding credential vault handling
Next, you can add credential vault handling. In the `init` method, add the following code:  

```java
javax.naming.Context ctx = new javax.naming.InitialContext();
PortletServiceHome cvsHome = (PortletServiceHome)ctx.lookup("portletservice/com.ibm.portal.portlet.service.credentialvault.CredentialVaultService");
vaultService = (CredentialVaultService)cvsHome.getPortletService (CredentialVaultService.class);
```

Next, add a `finally` block because a user can’t access the credential vault before authentication.  After the user is in the `LoginService`, the service returns to the portlet code only if a failure occurs or if a `finally` block is present and can be executed. Otherwise, the code redirects the user to the appropriate portal page.

The `processAction` method now looks like this:

```java
LoginService loginService = (LoginService) loginHome.getLoginService(request, response);  
String userId = request.getParameter(FORM_ID);  
String password = request.getParameter(FORM_PASSWORD);  
Map contextMap = new HashMap();  
contextMap.put(LoginService.DO_RESUME_SESSION_KEY, new Boolean(false));  

try {  
    loginService.login(userId, password.toCharArray(), contextMap, null);
} catch (Exception ex) {  
    System.out.println("This login failed with: " + ex.getMessage());
    ex.printStackTrace();
} finally {  
    setCredential(request, userId, password);
} 
```
The `setCredential` method handles accessing the credential vault and setting the user credentials.  
In this example, a Shared User slot is used, meaning the slot is shared across all portlets that the user can access, with one secret per user.

### Download sample code
You can download the complete sample code below:

- [CustomLoginPortlet.war](./files/CustomLoginPortlet/CustomLoginPortlet.war){target="_blank"}  
- [LoginPortletWithCV.war](./files/CustomLoginPortlet/LoginPortletWithCV.war){target="_blank"}