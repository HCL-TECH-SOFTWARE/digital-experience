# How to create a custom Login Portlet for HCL Portal and set credential vault?

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

You may want to create a custom login portlet for HCL Portal if the base portlet is not in the format you want, or if you want to add additional checking to the login. This article will tell you how to accomplish this and how to add user credentials to the credential vault upon login.

## Instructions

In HCL Portal 8.5 and later versions, there is a new portlet service that allows you to log into Portal. This service still takes advantage of the LoginUserAuth in the login process. You can also write your own Login portlet and handle any validation or processing before or after the login process.

To use this service with Rational Application Developer (RAD), you must be sure to add the following to your build path as an external jar:
```
wp.auth.cmd.jar
wp.auth.base.jar
```
You can find these two .jar files in the <portalserver>\base\wp.auth.base\shared\app and <portalserver>\base\wp.auth.cmd\shared\app directories in your HCL Portal install.

The first portlet service is the following:

`com.ibm.portal.portlet.service.login.LoginService`

To access this service, add code similar to the following (best done in the "init" method of the portlet):
```
PortletServiceHome psh;
javax.naming.Context ctx = new javax.naming.InitialContext();
psh = (PortletServiceHome) ctx.lookup(LoginHome.JNDI_NAME);
loginHome = (LoginHome) psh.getPortletService(LoginHome.class);
```
Then, in your processAction, you can log the user in using code such as:
```
LoginService loginService = (LoginService) loginHome.getLoginService(request, response);
String userId = request.getParameter(FORM_ID);
String password = request.getParameter(FORM_PASSWORD);
Map contextMap = new HashMap();
contextMap.put(LoginService.DO_RESUME_SESSION_KEY, new Boolean(false));
try {
loginService.login(userId, password.toCharArray(), contextMap, null)
} catch (Exception ex) {
System.err.println("this login failed with = " + ex.getMessage());
}
```
You must also add a login form to the JSP page which has already been done and is in the first portlet provided.

At this point, the user would be logged in or not, depending on the response from the LoginService. Remember that once you call the login service method, the control will not return to your portlet code if the user is logged in because Portal will do a redirect to the proper Portal page (unless there is an authentication error or a Finally block).

Next, we want to add the credential vault handling. Therefore, in the init method we use this code:

```
javax.naming.Context ctx = new javax.naming.InitialContext();
PortletServiceHome cvsHome = (PortletServiceHome)ctx.lookup("portletservice/com.ibm.portal.portlet.service.credentialvault.CredentialVaultService");
vaultService = (CredentialVaultService)cvsHome.getPortletService (CredentialVaultService.class);
```

Then you need to add a finally block because a user cannot access the credential vault before authentication. After the user is in the loginservice, the service only returns to the portlet code if a failure condition occurs or if you have a finally block. Otherwise, the code does a redirect and sends you to the correct portal page.

Now the processAction method looks like this:
```
LoginService loginService = (LoginService) loginHome.getLoginService(request, response);
String userId = request.getParameter(FORM_ID);
String password = request.getParameter(FORM_PASSWORD);
Map contextMap = new HashMap();
contextMap.put(LoginService.DO_RESUME_SESSION_KEY, new Boolean(false));
try {
loginService.login(userId, password.toCharArray(), contextMap, null);
} catch (Exception ex) {
System.out.println("this login failed with = " + ex.getMessage());
ex.printStackTrace();
} finally {
setCredential(request,userId,password);
}
```
The setCredential method takes care of actually accessing the credential vault and setting this value. In this example, we are using a Shared User slot, so that this slot is shared across all portlets this user has access to, and there is one secret per user. The full code for this is in the included samples attached below:

* [CustomLoginPortlet.war](./downloads//CustomLoginPortlet.war)

* [LoginPortletWithCV.war](./downloads/LoginPortletWithCV.war)