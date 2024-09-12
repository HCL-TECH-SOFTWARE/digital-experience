# Creating a custom Login Portlet for HCL DX

This topic provides steps on how to create a custom login portlet for HCL Digital Experience (DX). This is useful if the base portlet is not in your desired format, or if you want to add additional verification to the login. You can also find information on how to add user credentials to the credential vault.

To implement your own login portlet after capturing the required security credentials your code will need to call the public portlet service as documented here: https://help.hcl-software.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/com/ibm/portal/portlet/service/login/LoginService.html

If you only want to customize the flow of the login - like call external validation - you can also consider writing a login filter as documented here: https://help.hcl-software.com/digital-experience/8.5/admin-system/adauthflt.html

1. To implement a login portlet with Rational Application Developer (RAD) or Eclipse or another Java development tool, add the following to your build path as an external JAR file:

    ```
    wp.auth.cmd.jar
    wp.auth.base.jar
    ```

    You can find these two .jar files in the `<portalserver>\base\wp.auth.base\shared\app and <portalserver>\base\wp.auth.cmd\shared\app` directories in your HCL DX installation.

2. Access the first portlet service `com.ibm.portal.portlet.service.login.LoginService`. To access this service, add code similar to the following:

    ```
    PortletServiceHome psh;
    javax.naming.Context ctx = new javax.naming.InitialContext();
    psh = (PortletServiceHome) ctx.lookup(LoginHome.JNDI_NAME);
    loginHome = (LoginHome) psh.getPortletService(LoginHome.class);
    ```

    !!!note
        It is recommended to use the init method when adding code.

3. In processAction, log the user by using the following sample code:

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

4. Add a login form to the JSP page which is available from the first portlet provided in Step 2.

    Depending on the response from the LoginService, the user can be logged in or not. Note that once you call the LoginService method, the control will not return to your portlet code if the user is logged in. This behavior is because DX will redirect to the proper Portal page, unless there is an authentication error or a finally block.

5. Add the credential vault handling. In the init method, use the following code:

    ```
    javax.naming.Context ctx = new javax.naming.InitialContext();
    PortletServiceHome cvsHome = (PortletServiceHome)ctx.lookup("portletservice/com.ibm.portal.portlet.service.credentialvault.CredentialVaultService");
    vaultService = (CredentialVaultService)cvsHome.getPortletService (CredentialVaultService.class);
    ```

6. Add a finally block. 

    A user cannot access the credential vault before authentication. After the user is in the LoginService, the service only returns to the portlet code if a failure condition occurs or if you have a finally block. Otherwise, the code does a redirect and sends you to the correct portal page.

    To add a finally block, the processAction method should look like the following sample code:

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

    The setCredential method accesses the credential vault and sets this value. This example uses a Shared User slot. This slot is shared across all portlets this user has access to, and there is one secret per user. You can find the full code for this in the following code samples:

    - [CustomLoginPortlet.war]()
    - [LoginPortletWithCV.war]()
