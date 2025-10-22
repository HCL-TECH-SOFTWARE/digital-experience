# How to create a custom login or logout filter in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Currently, HCL Digital Experience (DX) does not offer a feature to determine the number of concurrent user sessions and prevent users from logging into HCL DX through different web browser at the same time.

There is already a feature request open for this topic. For details, please check: [Create setting to block user multisession.](https://dx-ideas.hcltechsw.com/ideas/DX-I-140){target="_blank"} <!--do customers need to know this-->

This article provides the sample code that you can use to determine the number of concurrent user sessions in HCL DX. You can also use it to see how you can filter users and prevent the same user from logging in more than once to HCL DX.

## Instructions

Refer to the following steps to download and use the sample code to create a login or logout filter:

1. Download the [currentUserFilters.zip](./files/custom_login_filter_sample/concurrentUserFilters.zip){target="_blank"} file containing the filter code and the binary JAR file.

    The sample code includes the following classes:

    - Custom login filter class: `com.hcl.portal.CustomPortalLoginFilter.java`
    - Custom logout filter class: `com.hcl.portal.CustomPortalLogoutFilter.java`
    - User filter class: `com.hcl.portal.Userlist.java` (This Java singleton class stores user data to track concurrent sessions)

    !!!note
        This code sample demonstrates using custom filters to find the number of concurrent user sessions. For more information, refer to [Configuring authentication filters](../../../deployment/manage/config_portal_behavior/auth_filters/index.md){target="_blank"}.

2. Copy the `concurrentUserFilters.jar` file into the portal classpath:

    1. Locate the downloaded `concurrentUserFilters.jar` file.
    2. Copy the file into the directory `<PortalServer_root>\shared\app`.

3. Register the authentication filter in the WebSphere Integrated Solutions Console.

    1. Open a web browser and go to `https://<hostname>:<port>/ibm/console`.  
    2. Navigate to **Resources > Resource Environment > Resource Environment Providers**.  
    3. Click **WP AuthenticationService > Custom properties**.  
    4. Select **logout.explicit.filterchain**.  
    5. Change the property's value to `com.ibm.wps.auth.impersonation.impl.ImpersonationLogoutFilter;com.hcl.portal.CustomPortalLogoutFilter`, then click **Apply**.
    6. Go back to **Custom properties**, then click **New...**.
    7. Add the following property then click **Apply**:  
        - **Name:** `login.explicit.filterchain`  
        - **Value:** `com.hcl.portal.CustomPortalLoginFilter`  
        ![Custom Filters](./files/custom_login_filter_sample/admin_console_custom_filters.png)  
    8. Click **Save** at the top of the console messages.

4. Restart the HCL DX server.

5. Test the filter by logging in to HCL DX as the same user in two different web browsers.

### Filtering concurrent users sample

The custom login and logout filters enable concurrent user filtering. If a user is already signed in to the portal, the system redirects the user to the logout page upon a second sign-in attempt. The following scenario details the expected behavior after the filters are enabled.

1. The wpsadmin user signs in to HCL DX using Google Chrome for the first time. The `SystemOut.log` displays the following information:

    ```text
    Custom Portal Login Filter at login called!
    Login-User is: wpsadmin
    Added user wpsadmin to the list.
    The following users are already logged in (UserList):
    <UserList>
    wpsadmin
    </UserList>
    ```

2. The wpsadmin user attempts to sign in using a second web browser (for example, Microsoft Edge). Because wpsadmin is already signed in using Google Chrome, the login filter rejects the second attempt and redirects the user to the logout page.

    ```text
    Custom Portal Login Filter at login called!
    Login-User is: wpsadmin
    User is already logged in! Redirecting to logout page.
    ```

3. The wpsadmin user signs out in Google Chrome. The user can now sign in using Microsoft Edge. During the logout process, the following messages print:

    ```text
    The following user logs out: wpsadmin
    Remove user from userlist: wpsadmin
    ```

### Sample codes

This section contains the sample code for the following custom filter classes:

- [`CustomPortalLoginFilter`](#customportalloginfilter)
- [`CustomPortalLogoutFilter`](#customportallogoutfilter)
- [`Userlist`](#userlist)

???+ info "DISCLAIMER OF WARRANTIES"
    The following code is sample code created by HCL Corp.  
    This sample code is provided to you solely for the purpose of assisting you in the development of your applications.  
    The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

#### `CustomPortalLoginFilter`

The following code snippet contains the source code for the `CustomPortalLoginFilter` class.

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

#### `CustomPortalLogoutFilter`

The following code snippet contains the source code for the `CustomPortalLogoutFilter` class.

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

#### `Userlist`

The following code snippet contains the source code for the `Userlist` class.

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
