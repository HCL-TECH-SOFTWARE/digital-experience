# How to create a custom login portlet with credential vault handling in HCL DX

## Applies to

> HCL Digital Experience version 8.5 and higher  

## Introduction

HCL Digital Experience allows to create custom login portlets. You may want to use that, if the base portlet is not in the format you want, or if you want to add additional checking to the login. This article provides detailed steps showing how to build such a custom login portlet and how to add user credentials to the credential vault upon login.

## Instructions

In HCL DX v8.5 and later, there is a portlet service that allows users to log into Portal. This service still takes advantage of the LoginUserAuth in the login process. It is possible to develop a own login portlet and handle any validation or processing before or after the login process.

To use this service with any IDE like Microsoft Visual Studio or Rational Application Developer (RAD), it is needed to add the following to the build path as an external jar:

```files
wp.auth.cmd.jar
wp.auth.base.jar
```

These two jar files can be found in the `<PortalServer_root>\base\wp.auth.base\shared\app` and `<PortalServer_root>\base\wp.auth.cmd\shared\app` directories of your HCL DX installation binaries.

The first portlet service is the following:

`com.ibm.portal.portlet.service.login.LoginService`

To access this service, add code similar to the following (best done in the init method of the portlet):

```java
PortletServiceHome psh;
javax.naming.Context ctx = new javax.naming.InitialContext();
psh = (PortletServiceHome) ctx.lookup(LoginHome.JNDI_NAME);
loginHome = (LoginHome) psh.getPortletService(LoginHome.class);
```

Then in the processAction method of your custom login portlet add the following code to let users logging in into the DX Portal.  

```java
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

It is also required to add a login form to the JSP page which has already been done and is included in the first portlet provided at the end of the this article. See:
[CustomLoginPortlet.war](./files/CustomLoginPortlet/CustomLoginPortlet.war){target="_blank"}  

At this point, the user would be logged in or not, depending on the response from the LoginService. Remember that once you call the login service method, the control will not return to your portlet code, if the user is logged in because Portal will do a redirect to the proper Portal page (unless there is an authentication error or a Finally block).

Next the credential vault handling can be added. Therefore, in the init method add the code as following:  

```java
javax.naming.Context ctx = new javax.naming.InitialContext();
PortletServiceHome cvsHome = (PortletServiceHome)ctx.lookup("portletservice/com.ibm.portal.portlet.service.credentialvault.CredentialVaultService");
vaultService = (CredentialVaultService)cvsHome.getPortletService (CredentialVaultService.class);
```

Then it is needed to add a finally block because a user cannot access the credential vault before authentication. After the user is in the LoginService, the service only returns to the portlet code if a failure condition occurs, or if a finally block ins present that can be executed. Otherwise, the code does a redirect to the correct portal page.

Now the processAction method looks like this:

```java
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

The setCredential method takes care of actually accessing the credential vault and setting this value. In this example, a Shared User slot is used, so that this slot is shared across all portlets the user has access to, and there is one secret per user. The full code for this is in the included samples attached below:

[CustomLoginPortlet.war](./files/CustomLoginPortlet/CustomLoginPortlet.war){target="_blank"}  
[LoginPortletWithCV.war](./files/CustomLoginPortlet/LoginPortletWithCV.war){target="_blank"}  
