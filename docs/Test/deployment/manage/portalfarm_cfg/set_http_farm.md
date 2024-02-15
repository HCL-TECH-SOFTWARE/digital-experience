# Setting up the HTTP server plug-in on a portal farm

You can use a Web server to handle load balancing across your portal farm. This documentation is specific to the HTTP server but you can use any supported Web server.

Your Web server must already be configured to use the IBM® WebSphere® Application Server plug-in for load balancing.

Complete the following steps to set up the HTTP server plug-in on the portal farm:

1.  Generate the plug-in configuration from one of the application servers in the farm using the GenPluginCfg script provided by WebSphere Application Server in the [wp\_profile\_root](../../../guide_me/wpsdirstr.md#wp_profile_root)/bin directory.

2.  Modify the plugin\_cfg.xml file, that was generated in the previous step, to have a server entry for every server in the farm:

    **Note:** For the purposes of this example, it is assumed every server in the farm uses the same set of ports. This example has only two servers listed; if you have more than two servers, please add the additional servers to this example. The CloneID attribute must be added to each Server element with a value that uniquely identifies this server instance. This value should be a string with no special characters or spaces and must coincide with the value set for the **HttpSessionCloneId Web Container** custom property on each farm server instance. Locate the CloneID in the variable\_map.properties file, located in the directory specified when you ran the enable-farm-mode task. In the following example, replace farm-client-server-1.xyz.com and farm-client-server-2.xyz.com with the CloneID values for each server in your farm.

    ```
     <ServerCluster CloneSeparatorChange="false" GetDWLMTable="false" IgnoreAffinityRequests="true"  
    		Name="PortalCluster" PostBufferSize="64" PostSizeLimit="-1" RemoveSpecialHeaders="true" 
    			RetryInterval="60">
          <Server CloneID="farm-client-server-1.xyz.com" ConnectTimeout="5" ExtendedHandshake="false" 
                           LoadBalanceWeight="2" MaxConnections="-1" Name="svtvm2_HCL Portal and HCL Web Content Manager" 
                           ServerIOTimeout="60" WaitForContinue="false">
             <Transport Hostname="farm-client-server-1.xyz.com.mycompany.com" Port="10039" Protocol="http"/>
             <Transport Hostname="farm-client-server-1.xyz.com.mycompany.com" Port="10029" Protocol="https">
                <Property Name="keyring" Value="/usr/IBM/HTTPServer/Plugins/config/webserver1/plugin-key.kdb"/>
                <Property Name="stashfile" Value="/usr/IBM/HTTPServer/Plugins/config/webserver1/plugin-key.sth"/>
             </Transport>
          </Server>
          <Server CloneID="farm-client-server-2.xyz.com" ConnectTimeout="5" ExtendedHandshake="false" 
                           LoadBalanceWeight="2" MaxConnections="-1" Name="svtvm3_HCL Portal and HCL Web Content Manager" 
                           ServerIOTimeout="60" WaitForContinue="false">
             <Transport Hostname="farm-client-server-2.xyz.com.mycompany.com" Port="10039" Protocol="http"/>
             <Transport Hostname="farm-client-server-2.xyz.com.mycompany.com" Port="10029" Protocol="https">
                <Property Name="keyring" Value="/usr/IBM/HTTPServer/Plugins/config/webserver1/plugin-key.kdb"/>
                <Property Name="stashfile" Value="/usr/IBM/HTTPServer/Plugins/config/webserver1/plugin-key.sth"/>
             </Transport>
          </Server>
      </ServerCluster>
    ```

3.  Replace the plugin-cfg.xml file currently used by the HTTP Server plugin with this newly edited version.

4.  Restart the HTTP Server to ensure the changes are picked up, and watch for any startup errors that might indicate a syntax issue within the plugin-cfg.xml file.

5.  Stop and restart all the HCL Portal servers on the portal farm; see "Starting and stopping servers, deployment managers, and node agents" for information.



