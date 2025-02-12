# Redirecting the Login / Logout / Session Timeout to another URL

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

In this article, you will learn how to change the redirect URL for (Login, Logout, and Session Timeout).

**Example Scenario:**

If a user has made a successful login to your website, the user will be redirected to another page (i.e. Main Page / Welcome Page).

The example is also applicable upon logging out or when the user has triggered the session timeout.

## Instructions

**Changing the Login Redirect Page:**

1. Go to ../wp_profile_root/PortalServer/config/ConfigService.properties

2. Edit the Logout redirect parameters as following:

    ```log
    # Default: true
    #redirect.login     = true
    #
    #redirect.login.ssl =
    #
    #redirect.login.url = http://<domain>/wps/portal/Home/<url>
    ```

3. Same steps above are applicable for changing the Logout Redirect Page:

    ```log
    # Default: false
    #redirect.logout = true
    #
    #redirect.logout.ssl =
    #
    #redirect.logout.url =http://<domain>/wps/portal/Home/<url>
    ```

4. Go to wp_profile_root\ConfigEngine and locate the ConfigEngine.sh
5. Execute: ./ConfigEngine.sh update-properties -DWasPassword=password

**Changing the Session Timeout Redirect Page:**

1. Login to WAS as an Admin User
2. Navigate to Resources - >Resource environment - > Resource environment providers
3. Click on WP ConfigService
4. Click on Custom properties
5. Click on New
6. Provide "redirect.logout" to the name field
7. Provide true to value field
8. Click OK
9. Click new again to add another property
10. Provide redirect.logout.url to name field
11. Provide /wps/portal to value field (this will bring up login portlet after session time out. You can also provide custom URL to redirect users to custom screen after session time out)
12. Click Ok and
13. Save configuration
14. Restart portal.
