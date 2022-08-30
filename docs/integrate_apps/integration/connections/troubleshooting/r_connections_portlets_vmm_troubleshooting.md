# Troubleshooting the VMM configuration

Verify that VMM is configured correctly and resolve issues if it is not.

## Verifying the VMM adapter library deployment and enablement

Run the following task from wp\_profile/ConfigEngine to confirm that VMM is successfully configured: ConfigEngine.bat verify-SNPortletsVMM-setup -DWasPassword=password -DPortalAdminPwd=password -DWasUserid=userid -DPortalUserid=userid

If the VMM adapter libraries are deployed successfully, you see the following output in the console:

```
[wsadmin] AdapterClassVerification --> Success - Adapter Class Found.

```

If the VMM adapter libraries are not deployed successfully, you see the following output in the console:

```

[wsadmin] AdapterClassVerification --> Failed - Adapter class could not be found. Verify VMM Adapter jars are added at correct path.
 [wsadmin] AdapterClassVerification --> Failed - ClassNotFoundException - Verify that the path for com.ibm.ws.wim.adapter.connections.jar is correct.
```

If the VMM adapter configuration is successful, the task generates the following output:

```

  [wsadmin] AdapterClassVerification --> Success - Adapter Class Found.
  [wsadmin] PortalLoginVerification --> Success - Correct credentials found for DSX Admin and login done in Portal.
  [wsadmin] HTTPSAuthCallVerification --> Success - HTTPS Call using DSX Admin credentials returned 200 status code.
  [wsadmin] SonataCallVerification --> Success - DSX API HTTPS Call using DSX Admin credentials returned 200 status code.
```

If there is a configuration failure, you see one or more of the following messages:

```

 [wsadmin] AdapterClassVerification --> Failed - Adapter class could not be found. Verify VMM Adapter jars are added at correct path.
 [wsadmin] AdapterClassVerification --> Failed - ClassNotFoundException - Verify that the path for com.ibm.ws.wim.adapter.connections.jar is correct.
 [wsadmin] PortalLoginVerification --> Failed - Verify the DSX Admin credentials in Security and J2CAlias REP.
 [wsadmin] PortalLoginVerification --> Failed - Unable to find J2CAuthAlias REP property. Make sure it is defined.
 [wsadmin] PortalLoginVerification --> Failed - Could not initialize WSMappingCallbackHandlerFactory. This is usually because of a problem with the node agent process.
 [wsadmin] HTTPSAuthCallVerification --> Failed - 403 exception encountered while making Authenticated call. Verify that correct DSX Admin is defined.
 [wsadmin] HTTPSAuthCallVerification --> Failed - 401 exception encountered while making Authenticated call. Verify that DSX Admin is defined.
 [wsadmin] HTTPSAuthCallVerification --> Failed - SSL HANDSHAKE FAILURE : Please import Connection Server SSL certificate in Portal's local trust store - NodeDefaultSSLSettings.
 [wsadmin] HTTPSAuthCallVerification --> Failed - Error : Error occurred while executing the Get request to Connections Server.
 [wsadmin] HTTPSAuthCallVerification --> Failed - Error : Error occurred while reading document.
 [wsadmin] SonataCallVerification --> Success - DSX API HTTPS Call using DSX Admin credentials returned 200 status code.
 [wsadmin] SonataCallVerification --> Failed - Exception encountered while making Sonata call. Verify same user is used as DSX Admin on Connections as on Portal and that the SSL certificate of Portal is installed on Connections Server.
 [wsadmin] SonataCallVerification --> Failed - 401 exception encountered while making Sonata call due to empty or invalid credentials.
 [wsadmin] SonataCallVerification --> Failed - 403 exception encountered while making Sonata call. Verify that correct DSX Admin is defined.
 [wsadmin] SonataCallVerification --> Failed - Cannot read service document. Attempting retry.
```

## Additional checkpoints for VMM adapter

If the Virtual Member Manager is not working, for example, if community groups are not displaying on the Portal server, first check the timeout settings on the Portal and HCL Connections servers to make sure that they are compatible.

1.  Log in to the WebSphere® Application Server administrator console, go to **Security** \> **Global Security** \> **Authentication** \> **LTPA** and record the value of the timeout setting.
2.  Make the following changes on the Portal server:
    1.  Change to wp\_profile\_directory\\config\\cells\\cellname on a stand-alone server, or dmgr\_profile\_directory\\config\\cellscellname in a clustered environment.
    2.  Open sonata.services.xml.
    3.  Update the value of `<attribute key="CookieTimeout" value="60" />` to a timeout value that is 80 - 90% of the value that is set for the LTPA timeout setting you recorded.
3.  Make the following changes on the HCL Connections server:
    1.  Change to appsvr\_profile\_directory/config/cells/cellname/LotusConnections-config/ for a stand-alone environment and dmgr\_profile\_directory/config/cells/cellname/LotusConnections-config/ in a clustered environment.
    2.  Open LotusConnections-config.xml.
    3.  Update the `<customAuthenticator name="DefaultAuthenticator"/>` element to

        ```
        
        <customAuthenticator name="DefaultAuthenticator"> 
        <attribute key="CookieTimeout" value="24" /> 
        </customAuthenticator>
        ```

    4.  Set the value of CookieTimeout to the same value you set in sonata.services.xml on the Portal service.
4.  Restart the HCL Connections and Portal servers.
5.  Make sure that the HCL Connections server can resolve the Portal server's host name. It can be resolved either by DNS setting \(under LAN properties\) or by adding an entry in the host file on the HCL Connections server. The host file is typically at C:\\Windows\\System32\\drivers\\.
6.  Delete the Portal SSL certificate that is imported on the HCL Connections server earlier and import a new one.


