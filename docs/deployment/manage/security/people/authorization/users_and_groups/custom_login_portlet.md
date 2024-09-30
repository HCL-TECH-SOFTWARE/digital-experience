# Creating a custom login portlet

This topic provides steps on how to create a custom login portlet for HCL Digital Experience (DX). This is useful if the base portlet is not in your desired format, or if you want to add additional verification to the login. You can also find information on how to add user credentials to the credential vault.

To implement your own login portlet after capturing the required security credentials, your code must call the public portlet service as documented in [Interface LoginService](https://help.hcl-software.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/com/ibm/portal/portlet/service/login/LoginService.html){target="_blank"}.

If you only want to customize the flow of the login (for example, calling external validation), you can also consider writing a login filter. For more information, see [Configuring authentication filters](../../../../config_portal_behavior/auth_filters/index.md).

Another approach to create a custom login user interface is to use [Script Applications](../../../../../../extend_dx/script_application/index.md). However, note that Script Applications cannot execute any server-side validation.

## Details for development of a java based custom login portlet

To implement a login portlet with Rational Application Developer (RAD), Eclipse, or another Java development tool, refer to the following steps. 

1. Add the following to your build path as an external JAR file:

    ```
    wp.auth.cmd.jar
    wp.auth.base.jar
    ```

    You can find these two .jar files in the `<portalserver>\base\wp.auth.base\shared\app` and `<portalserver>\base\wp.auth.cmd\shared\app` directories in your HCL DX installation.

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

    Depending on the response from the LoginService, the user can be logged in or not. Note that after you call the LoginService method, the control will not return to your portlet code if the user is logged in. This behavior is because DX will redirect to the proper Portal page, unless there is an authentication error or a [finally block](https://docs.oracle.com/javase/tutorial/essential/exceptions/finally.html){target="_blank"}.

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

    The setCredential method stores the user credentials in the credential vault. The code in the sample below uses a Shared User slot. This slot is shared across all portlets this user has access to, and there is one secret per user. 
    
    ## Sample code
    
    You can find the full code for a custom login portlet in the following code samples:

    <!-->
    ```
    /*
    * Copyright 2024 HCL America, Inc.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use these files except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * 
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
    ```-->

    !!!note "DISCLAIMER OF WARRANTIES"
        The files in the [CustomLoginPortlet.war](downloads/CustomLoginPortlet.war) and [LoginPortletWithCV.war](downloads/LoginPortletWithCV.war) files are sample codes. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if you have been advised of the possibility of such damages.

    - Sample code for a custom login portlet: [CustomLoginPortlet.war](downloads/CustomLoginPortlet.war)
    - Sample code for a custom login portlet using a credential vault: [LoginPortletWithCV.war](downloads/LoginPortletWithCV.war)

    ### Using the sample

    The two war files contain the java source code and the typical development steps would involve reusing the war in a development tool like RAD or unjarring the war files and leveraging the code to create your own war project with maven or another build tool. 
