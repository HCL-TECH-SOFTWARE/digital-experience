# Setting up single sign-on with MobileFirst 

You can set up single sign-on with MobileFirst so users can share a session between an HCL Portal and MobileFirst server.

SSO is no longer supported on Android with Worklight 6.2.

Both HCL Portal and MobileFirst® servers must be configured to use the same user registry, LTPA keys, and be set with a specified domain for SSO. For more information, see *Configuring Portal to use a user registry* and *Managing your user registry*. Or, if you are using the WebSphere® Application Server, see the WebSphere Application Server documentation.

For more information about system support requirements, see [System requirements](http://www-01.ibm.com/support/knowledgecenter/SSHS8R_7.0.0/com.ibm.worklight.getstart.doc/start/r_supported_operating_systems_an.html).

1.  Run the following configEngine tasks. These configEngine tasks are available only on the HCL Portal server. If the MobileFirst server is on WebSphere Application Server, run the following commands from the WebSphere Integrated Solutions Console. You can use steps B and C if MobileFirst is on the same instance as HCL Portal.

    1.  ConfigEngine.bat configure-single-signon -Ddomain=<domain name\> -DWasRemoteHostName=<hostname\> -DWasSoapPort=<port\> -DWasPassword=<password\> -Dinteroperable=true -DattributePropagation=true -DrequiresSSL=false

    2.  ConfigEngine.bat export-ltpakeys-single-signon -DkeyFile=c:\\ltpa.txt -DkeyPass=<testpass\> -DdmgrFlag=false -DWasRemoteHostName=<hostname\> -DWasSoapPort=<port\> -DWasPassword=<password\>

    3.  ConfigEngine.bat import-ltpakeys-single-signon -DkeyFile=c:\\ltpa\_demo.txt -DkeyPass=<somepassword\> -DdmgrFlag=false -DWasRemoteHostName=<hostname\> -DWasSoapPort=<port\> -DWasPassword=<password\>

2.  To prepare the MobileFirst server, you must update the MobileFirst WAR to enable applications to authenticate with the user registry. Update authenticationConfig.xml in your MobileFirst project. IT is in MobileFirst Project/server/conf/authenticationConfig.xml. Find the `<securityTests>` element and add the mobile and web security tests.

    1.  Find the `<securityTests>` element and add the mobile and web security tests from the following example.

        ```
        <mobileSecurityTest name="mobileTests"> 
            <testDeviceId provisioningType="none" /> 
            <testUser realm="WASLTPARealm" /> 
        </mobileSecurityTest> 
        <webSecurityTest name="WASLTPARealmTests"> 
            <testUser realm="WASLTPARealm"/> 
        </webSecurityTest> 
        ```

    2.  Uncomment the security realm.

        ```
        <!-- For websphere --> 
        <realm name="WASLTPARealm" loginModule="WASLTPAModule">
           <className>com.worklight.core.auth.ext.WebSphereFormBasedAuthenticator
               </className> 
           <parameter name="login-page" value="/login.html"/> 
           <parameter name="error-page" value="/loginError.html"/> 
        </realm>
        ```

    3.  Uncomment the login module for WebSphere.

        ```
        <!-- For websphere --> 
        <loginModule name="WASLTPAModule"> 
            <className>com.worklight.core.auth.ext.WebSphereLoginModule</className> 
        </loginModule>
        ```

3.  Modify the MobileFirst project WAR by adding two new HTML files to the WAR. The project WAR is in /MobileFirst Project/bin. Copy this WAR to another location for editing.

    1.  Create an login.html file with the following contents.

        ```
        <html> 
            <head> 
                <title>Login</title> 
            </head> 
            <body> 
                <form method="post" action="j_security_check"> 
                    <label for="j_username">User name:</label> 
                    <input type="text" id="j_username" name="j_username" /> 
                    <br /> 
                    <label for="j_password">Password:</label> 
                    <input type="password" id="j_password" name="j_password" /> 
                    <br /> 
                    <input type="submit" id="login" name="login" value="Log In" /> 
                </form> 
            </body> 
        </html>
        ```

    2.  Create a loginError.html file with the following contents.

        ```
        <html> 
            <head></head> 
            <body> 
                Login Error 
            </body> 
        </html>
        ```

    3.  Add the login.html and loginError.html files to the highest level directory of the WAR.

4.  Modify the MobileFirst project WAR that was updated in the previous step by editing the web.xml file in the WEB-INF directory.

    ```
    <login-config> 
        <auth-method>FORM</auth-method> 
        <form-login-config> 
            <form-login-page>/login.html</form-login-page> 
            <form-error-page>/loginError.html</form-error-page> 
        </form-login-config> 
    </login-config>
    ```

5.  Add a security constraint to protect the web resource by modifying web.xml in the updated MobileFirst project WAR

    ```
    <security-constraint id="SecurityConstraint_1">
    	<web-resource-collection id="WebResourceCollection_1">
    		<web-resource-name>mobilefirst</web-resource-name>
    		<description>Protecting mobilefirst application</description>
    		<url-pattern>/*</url-pattern>
    		<http-method>GET</http-method>
    		<http-method>POST</http-method>
    	</web-resource-collection>
    	<auth-constraint id="AuthConstraint_1">
    		<description>MobileFirst applications</description>
    		<role-name>Administrator</role-name>
    	</auth-constraint>
    	<user-data-constraint id="UserDataConstraint_1">
    		<transport-guarantee>NONE</transport-guarantee>
    	</user-data-constraint>
    </security-constraint>
    
    <security-role id="SecurityRole_1">
    	<description>Only specific users</description>
    	<role-name>Administrator</role-name>
    </security-role>
    ```

6.  When the MobileFirst project WAR is updated, deploy it to the MobileFirst server.

7.  Restart the server where MobileFirst is installed. If you added the security constraint, map the group or user to the EAR file.

8.  Update the application-descriptor.xml file to add the security tests you configured. Open MobileFirst Project/apps/mobilefirst app/application-descriptor.xml in the design view and update it to have the correct realms and security tests.

9.  In the main application, add a security test that is called **WASLTPARealmTests** in the Common \(optional\) section.

10. In **Android phones and tablets** \> **Details**, add the Security test called **mobileTests**.

11. Open MobileFirst Project/apps/mobilefirst app/application-descriptor.xml and add the `<securityTests>` element.

    ```
    <securityTests>
        <mobileSecurityTest name="mobileTests"> 
            <testDeviceId provisioningType="none" /> 
            <testUser realm="WASLTPARealm" /> 
        </mobileSecurityTest> 
        <customSecurityTest name="WASLTPARealmTests"> 
            <test realm="WASLTPARealm" isInternalUserID="true"/> 
        </customSecurityTest> 
    </securityTests>
    ```

12. Add the example `<realm>` for `WASLTPARealm`.

    ```
    <realm loginModule="WASLTPAModule" name="WASLTPARealm">
        		<className>com.worklight.core.auth.ext.FormBasedAuthenticator</className>
    		</realm>
    	</realms>
    ```

13. Add the example `<loginModule>` for `WASLTPAModule`.

    ```
    <loginModule name="WASLTPAModule">
    	<className>com.worklight.core.auth.ext.NonValidatingLoginModule</className>
    </loginModule>
    ```

14. After you create the server-side WAR, change the client side to allow authentication between the two servers. In an SSO demonstration application, modify the HTML of MobileFirst Project/apps/mobilefirst app/common/index.html to include a login form and JavaScript to handle the response. In a demonstration, index.html includes the code in the following example.

    ```
    <!DOCTYPE HTML>
    <html>
        	<head>
        		<meta charset="UTF-8">
        		<title>index</title>
        		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
        		<link rel="shortcut icon" href="images/favicon.png">
        		<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
        		<link rel="stylesheet" href="css/main.css">
        		<script>window.$ = window.jQuery = WLJQ;</script>
        	</head>
        	<body id="content" style="display: none"> 
    		    <div id="AppBody">
    		        <div class="wrapper"> 
    		        </div>
    		    </div>
    		    <div id="AuthBody" style="display: none"> 
    		        <div id="loginForm"> 
    		            Username:<br/> 
    		            <input type="text" id="usernameInputField" autocorrect="off" autocapitalize="off" /><br /> 
    		            Password:<br/> 
    		            <input type="password" id="passwordInputField" autocorrect="off" autocapitalize="off"/><br/>		 
    		            <input type="button" id="loginButton" value="Login" /> 
    		            <input type="button" id="cancelButton" value="Cancel" /> 
    		        </div> 
    		    </div>
        		<!--application UI goes here-->
        		Hello Worklight
        		<script src="js/initOptions.js"></script>
        		<script src="js/main.js"></script>
        		<script src="js/messages.js"></script>
        		<script src="js/challengeResponse.js"></script>
        	</body>
    </html>
    ```

15. Update the initialization options for MobileFirst to force the application to connect to the MobileFirst server on start by changing `connectOnStartup` from false to true in MobileFirst Project/apps/mobilefirst app/common/js/initOptions.js.

16. Add JavaScript to handle the response from the MobileFirst and HCL Portal servers. In this SSO demonstration application, create a file that is called challengeResponse.js, in MobileFirst Project/apps/mobilefirst app/common/js. Add the following example to the contents of the file. Update the line `<code>location.href= "http://server:port/wps/myportal"</code>` to point to your HCL Portal server.

    ```
    /*
    *  Licensed Materials - Property of IBM
    *  5725-G92 (C) Copyright HCL Technologies Limited 2006, 2012, 2019. All Rights Reserved.
    *  US Government Users Restricted Rights - Use, duplication or
    *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
    */
    
    var sampleAppRealmChallengeHandler = WL.Client.createChallengeHandler("WASLTPARealm");
    var busyIndicator = new WL.BusyIndicator('content', {text: "Loading..."});
    
    sampleAppRealmChallengeHandler.isCustomResponse = function(response) {
        if (!response || response.responseText === null) {
            return false;
        }
        var indicatorIdx = response.responseText.search('j_security_check');
        
        if (indicatorIdx >= 0){
    		return true;
    	}  
    	return false;
    };
    
    sampleAppRealmChallengeHandler.handleChallenge = function(response) {
    	busyIndicator.show();
    	$('#AppBody').hide();
    	WL.EncryptedCache.open("wpsadmin", true, onReadOpen, onOpenError);
    };
    
    sampleAppRealmChallengeHandler.submitLoginFormCallback = function(response) {
        var isLoginFormResponse = sampleAppRealmChallengeHandler.isCustomResponse(response);
        if (isLoginFormResponse){
        	sampleAppRealmChallengeHandler.handleChallenge(response);
        } else {
    		$('#AppBody').show();
    		$('#AuthBody').hide();
    		sampleAppRealmChallengeHandler.submitSuccess();
    		setTimeout(function(){
    	    	busyIndicator.hide();
    			location.href= "http://server:port/wps/myportal";
    		}, 1000);
        }
    };
    
    $('#loginButton').bind('click', function () {
    	busyIndicator.show();
    	WL.EncryptedCache.write("username", $('#usernameInputField').val(), onWriteSuccess, onWriteFailure);
    	function onWriteSuccess(status){
    		WL.EncryptedCache.write("password", $('#passwordInputField').val(), onWriteSuccess2, onWriteFailure);
    		function onWriteSuccess2(status2){
    			WL.EncryptedCache.close(onCloseCompleteHandler, onCloseFailureHandler);
    			
    		}
    	}
    	function onWriteFailure(status){
    		alert("Encrypted cache closed, writing failed");
    	}
    });
    
    
    function onCloseCompleteHandler(status){
    	var reqURL = '/j_security_check';
        var options = {};
        options.parameters = {
            j_username : $('#usernameInputField').val(),
            j_password : $('#passwordInputField').val()
        };
        options.headers = {};
        sampleAppRealmChallengeHandler.submitLoginForm(reqURL, options, sampleAppRealmChallengeHandler.submitLoginFormCallback);
    }
    
    
    function onCloseFailureHandler(status){
    	alert("close faiure");
    }
    
    
    $('#cancelButton').bind('click', function () {
    	sampleAppRealmChallengeHandler.submitFailure();
    	$('#AppBody').show();
    	$('#AuthBody').hide();
    });
    
    function onReadOpen(status){
    	WL.EncryptedCache.read("username", onDecryptReadSuccess, onDecryptReadFailure);
    	function onDecryptReadSuccess(value){
    		WL.EncryptedCache.read("password", onDecryptReadSuccess2, onDecryptReadFailure);
    		function onDecryptReadSuccess2(value2){
    			if (value && value2){
    				// submit 1 & 2
    				var reqURL = '/j_security_check';
    			    var options = {};
    			    options.parameters = {
    			        j_username : value,
    			        j_password : value2
    			    };
    			    options.headers = {};
    			    sampleAppRealmChallengeHandler.submitLoginForm(reqURL, options, sampleAppRealmChallengeHandler.submitLoginFormCallback);
    			} else {
    				// Didn't find any cached info, ask for login.
    				busyIndicator.hide();
    				$('#AuthBody').show();
    				$('#passwordInputField').val('');
    			}
    		}
    	}
    	function onDecryptReadFailure(status){
    		alert("Encrypted cache closed, reading failed");
    	}
    }
    
     function onOpenError(status){
    	switch(status){
    		case WL.EncryptedCache.ERROR_KEY_CREATION_IN_PROGRESS:
    			alert("ERROR: KEY CREATION IN PROGRESS");
    			break;
    		case WL.EncryptedCache.ERROR_LOCAL_STORAGE_NOT_SUPPORTED:
    			alert("ERROR: LOCAL STORAGE NOT SUPPORTED");
    			break;
    		case WL.EncryptedCache.ERROR_NO_EOC:
    			alert("ERROR: NO EOC");
    			break;
    		case WL.EncryptedCache.ERROR_COULD_NOT_GENERATE_KEY:
    			alert("ERROR: COULD NOT GENERATE KEY");
    			break;
    		case WL.EncryptedCache.ERROR_CREDENTIALS_MISMATCH:
    			alert("ERROR: CREDENTIALS MISMATCH");
    			break;
    		default:
    			alert("AN ERROR HAS OCCURED. STATUS :: " + status);
    	}
    }
    ```

    yes

17. Build your MobileFirst application for your MobileFirst server by right-clicking the MobileFirst application and selecting **Run As** \> **Build Settings and Deploy Target**.

18. Select **Build the application to work with a different MobileFirst server**.

19. Add the information for your MobileFirst server to the **Server** and **Context path** fields.

20. Build your application by right-clicking the MobileFirst application and selecting **Run As** \> **Build All Environments**.

21. Install the MobileFirst application to your MobileFirst server. Open the MobileFirst console at http://server:port/worklight/console and upload the MobileFirst application by adding it to the **Deploy application or adapter** field. Your MobileFirst application file can be found in your Eclipse workspace in the bin folder. The MobileFirst application file has the .wlapp extension.


**Parent topic:**[Setting up single sign-on with MobileFirst 7.0 ](../integrate/wl_sso_cf07.md)

