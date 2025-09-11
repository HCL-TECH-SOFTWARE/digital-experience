# How to create a custom Login/Logout filter in HCL Digital Experience

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

HCL Digital Experience does not offer a feature yet to determine the number of concurrent user sessions and to prevent users from loging into HCL Digital Experience more than using different Web-Browser sessions. There is already a feature request open for this topic. For details, please check:

[Create setting to block user multisession.](https://dx-ideas.hcltechsw.com/ideas/DX-I-140){target="_blank"}

This document describes sample code that can be used to determine the number of concurrent user sessions in HCL Digital Experience. It can also be used to see how you can filter users and prevent the same user from loging in more than once to HCL Digital Experience.

## Instructions

???+ info "DISCLAIMER OF WARRANTIES"
    The following code is sample code created by HCL Corp.  
    This sample code is provided to you solely for the purpose of assisting you in the development of your applications.  
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.  

### Download the sample code

Download the following sample code (jar-file): [currentUserFilters.zip](./files/custom_login_filter_sample/concurrentUserFilters.zip){target="_blank"}  

The sample code includes java source-code and their binaries as following:  

1. A HCL DX custom login filter class (**com.hcl.portal.CustomPortalLoginFilter.java**)  

2. A HCL DX custom logout filter class (**com.hcl.portal.CustomPortalLogoutFilter.java**)  

3. A user filter java class (**com.hcl.portal.Userlist.java**) which is developed using the java singleton pattern to ensure that just one java object instance exit to store the user data.  

The code sample demonstrates how to use custom login and logout filters in HCL Digital Experience to find the number of concurrent user sessions. For details, please also check [Configuring authentication filters](../../../deployment/manage/config_portal_behavior/auth_filters/index.md){target="_blank"}  

### Process flow of this sample-code

Once the custom login and logout filter is in place, concurrent users can be filtered. A user that is already logged in to the portal, will be redirected to the logout page.  

**Sample process flow:**  

1. The wpsadmin user is logging in into HCL Digital Experience for the first time using Google Chrome web-browser. The SystemOut.log should show messages like:

    ```text
    Custom Portal Login Filter at login called!
    Login-User is: wpsadmin
    Added user wpsadmin to the list.
    The followig users are already logged in (UserList):
    <UserList>
    wpsadmin
    </UserList>
    ```

2. A second web-browser (for example Microsoft Edge) is opened and then the wpsadmin user tries to login with that web-browser as well. Because the wpsadmin user is already logged in using the Google Chrome web-browser, the login will be rejected by the Login-Filter and the user will be redirected to the login-page, again.  

    ```text
    Custom Portal Login Filter at login called!
    Login-User is: wpsadmin
    User is already logged in! Redirecting to logout page.
    ```

3. Once the wspadmin user is logged out in Google Chrome, it is then possible for the wpsadmin user to login using Microsoft Edge. During logout the following messages will be printed out:  

    ```text
    The following user logs out: wpsadmin
    Remove user from userlist: wpsadmin
    ```

### Installation Procedure

1. Add the **concurrentUserFilters.jar** file to the portal classpath. Copy the jar-file into the directory `<PortalServer_root>\shared\app`.  

2. Register the Authentication Filter in the IBM Integrated Solutions Console (Admin-Console).  
    a. Open the Web-Browser and access URL: `https://<hostname>:<port>/ibm/console`  
    b. In the IBM Integrated Solutions Console navigate to **Resources > Resource Environment > Resource Environment Providers**.  
    c. Click to **WP AuthenticationService**  
    d. Click to **Custom Properties**.  
    e. Click to the **New...** button.  
    f. Change the following existing property:  
        **Name:** `logout.explicit.filterchain`  
        **Value:** `com.ibm.wps.auth.impersonation.impl.ImpersonationLogoutFilter;com.hcl.portal.CustomPortalLogoutFilter`  

    g. Add the following property:  
        **Name:** `login.explicit.filterchain`  
        **Value:** `com.hcl.portal.CustomPortalLoginFilter`  
        ![Custom Filters](./files/custom_login_filter_sample/admin_console_custom_filters.png)  
    h. Click the **OK** button and save the changes to the Master Configuration.

3. Restart the Portal Server  

4. Run tests by using two different web-browsers to login to HCL Digital Experience using the same user in both web-browsers.  

### Sample Code

**Source-Code of class CustomPortalLoginFilter:**  

```java
package com.hcl.portal;
import com.ibm.portal.security.SecurityFilterConfig;
import com.ibm.portal.security.exceptions.SecurityFilterInitException;
import com.ibm.websphere.security.WSSecurityException;
import com.ibm.portal.auth.ExplicitLoginFilter;
import com.ibm.portal.auth.ExplicitLoginFilterChain;
import com.ibm.portal.auth.FilterChainContext;
import com.ibm.portal.auth.exceptions.AuthenticationException;
import com.ibm.portal.auth.exceptions.AuthenticationFailedException;
import com.ibm.portal.auth.exceptions.PasswordInvalidException;
import com.ibm.portal.auth.exceptions.SystemLoginException;
import com.ibm.portal.auth.exceptions.UserIDInvalidException;
import javax.security.auth.Subject;
import javax.security.auth.login.LoginException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CustomPortalLoginFilter implements ExplicitLoginFilter {

    private Userlist userlist= Userlist.getInstance();

    @Override
    public void destroy() {
    // TODO Auto-generated method stub
    }

    @Override
    public void init(SecurityFilterConfig arg0) throws SecurityFilterInitException {
        // TODO Auto-generated method stub
        System.out.println("Custom Portal Login Filter initialized!");
    }

    public void login(HttpServletRequest req, HttpServletResponse resp,
            String userID, char[] password,
            FilterChainContext portalLoginContext, Subject subject,
            String realm, ExplicitLoginFilterChain chain)
            throws LoginException, WSSecurityException,
            PasswordInvalidException, UserIDInvalidException,
            AuthenticationFailedException, AuthenticationException,
            SystemLoginException, com.ibm.portal.auth.exceptions.LoginException 
    {

        System.out.println("Custom Portal Login Filter at login called!");
        System.out.println("Login-User is: "+userID);
        if(userlist.isUserInList(userID))
        {
            System.out.println("User is already logged in! Redirecting to logout page.");
            try {
                    req.getSession().invalidate();
                    req.logout();
                } catch (ServletException e) {
                e.printStackTrace();
        }
        }
        else 
        {
            System.out.println("Added user "+userID+" to the list.");
            userlist.add(userID);
            userlist.printLoggedInUserList();
            // call the next element in the filter chain to trigger the default login
            chain.login(req, resp, userID, password, portalLoginContext, subject, realm);
        }
    }
 }
```

**Source-Code of class CustomPortalLogoutFilter:**  

```java
package com.hcl.portal;
import com.ibm.portal.security.SecurityFilterConfig;
import com.ibm.portal.security.exceptions.SecurityFilterInitException;
import com.ibm.websphere.servlet.session.IBMSession;
import com.ibm.portal.auth.ExplicitLogoutFilter;
import com.ibm.portal.auth.FilterChainContext;
import com.ibm.portal.auth.LogoutFilterChain;
import com.ibm.portal.auth.exceptions.LogoutException;
import javax.security.auth.login.LoginException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CustomPortalLogoutFilter implements ExplicitLogoutFilter{

    private Userlist userlist= Userlist.getInstance();

    @Override
    public void destroy() {
    // TODO Automatisch erstellter Methoden-Stub
    }

    @Override
    public void init(SecurityFilterConfig arg0) throws SecurityFilterInitException {
    // TODO Automatisch erstellter Methoden-Stub
        System.out.println("Custom Portal Logout Filter initialized!");
    }

    @Override
    public void logout(HttpServletRequest req, HttpServletResponse resp, FilterChainContext filterchainContext, LogoutFilterChain chain) throws LogoutException, LoginException {
        // TODO Automatisch erstellter Methoden-Stub
        IBMSession ibmsession = (IBMSession)req.getSession();
        //the IBMSessin object return the username in the following format:
        //user:defaultWIMFileBasedRealm/uid=wpsadmin,o=defaultWIMFileBasedRealm
        String userID=ibmsession.getUserName();
        //extracting the short userID to just get back "wpsadmin", because in the login-filter also just the short username will be stored
        userID=userID.substring(userID.indexOf("=")+1, userID.indexOf(","));
        System.out.println("The following user log out: "+userID);
        if(userlist.isUserInList(userID))
        {
            System.out.println("Remove user from userlist: "+userID);
            userlist.remove(userID);
        }

        chain.logout(req, resp, filterchainContext);
    }

}
```

**Source-Code of class Userlist:**  

```java
package com.hcl.portal;

import java.util.LinkedList;

public final class Userlist {

    private static Userlist userlist;
    private LinkedList<String> loggedinUserList = new LinkedList<String>();

    private Userlist()
    {

    }

    public static Userlist getInstance() 
    {
        if(userlist == null)
        {
            userlist = new Userlist();
        }

        return userlist;
    }

    public boolean isUserInList(String userID)
    {
        for(int i=0; i < loggedinUserList.size(); i++)
        {
            if(userID.equals(loggedinUserList.get(i)))
            return true;
        }
        return false;
    }

    public void printLoggedInUserList()
    {
        System.out.println("The following users are already logged in (UserList):");
        System.out.println("<UserList>");
        for(int i=0; i < loggedinUserList.size(); i++)
        {
            System.out.println(loggedinUserList.get(i));
        }
        System.out.println("</UserList>");
    }

    public void add(String userID)
    {
        loggedinUserList.add(userID);
    }

    public void remove(String userID)
    {
        for(int i=0; i < loggedinUserList.size(); i++)
        {
            if(loggedinUserList.get(i).equals(userID))
            {
                loggedinUserList.remove(i);
            }
        }
    }
}
```
