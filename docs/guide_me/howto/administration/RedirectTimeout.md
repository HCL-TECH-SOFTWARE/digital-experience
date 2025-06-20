# How to change the redirect URL for Login, Logout, and Session Timeout

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

If a user successfully logged in to your website, they will be redirected to another page (for example, the main landing page or welcome page). This redirection also applies when a user logs out or when their session times out.

In this article, you will learn how to change the redirect URL for Login, Logout, and Session Timeout.

## Instructions

Refer to the following steps to change the redirect pages for Login, Logout, and Session Timeout.

### Changing the Login and Logout redirect page

1. Go to `../wp_profile_root/PortalServer/config/ConfigService.properties`.
2. Edit the Login redirect parameters to the following:

    ```log
    # Default: true
    #redirect.login     = true
    #
    #redirect.login.ssl =
    #
    #redirect.login.url = http://<domain>/wps/portal/Home/<url>
    ```

3. Edit the Logout redirect parameters to the following:

    ```log
    # Default: false
    #redirect.logout = true
    #
    #redirect.logout.ssl =
    #
    #redirect.logout.url =http://<domain>/wps/portal/Home/<url>
    ```

4. Go to `wp_profile_root\ConfigEngine` and locate `ConfigEngine.sh`.
5. Run the following command:

    ```
    ./ConfigEngine.sh update-properties -DWasPassword=password
    ```

### Changing the Session Timeout redirect page

1. Log in to the WebSphere Integrated Solutions Console as an admin user.
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom properties**.
3. Click **New...**.
4. Under **Name**, enter **redirect.logout**.
5. Under **Value**, enter **true**.
6. Click **OK**.
7. Click **New...**.
8. Under **Name**, enter **redirect.logout.url**.
9. Under **Value**, enter **/wps/portal**. This will redirect the user to login portlet after a session timeout. You can also provide custom URL to redirect users to a custom screen instead.
10. Click **Ok**.
11. Click **Save** at the top of the console messages.
12. Restart your HCL DX server.
