# Installing the Social Media Publisher

Follow these steps to install the Social Media Publisher on your authoring server, and then on any servers that subscribe from your authoring server.

!!!note
    If you migrated from a HCL Portal version 7.0 or Web Content Manager version 7.0 server that was already using the Social Media Publisher, you also need to run these steps on the migrated system to enable the Social Media Publisher. All your data from your version 7.0 system is maintained.

1.  Ensure that you enable the following options correctly:

    1.  That the WasPassword and PortalAdminPwd passwords are set in the wkplc.properties file.

    2.  That the jcr.DbPassword password is set in wkplc_dbdomain.properties file.

    3.  That a proxy server is configured if your server is behind a proxy.

2.  Edit wp_profile_root/PortalServer/wcm/social/smp.properties` file and to ensure that the configuration is correct for the current server or cluster node.

    !!! note
        The parameter settings in smp.properties are case-sensitive.

3.  Run the following registration command from the wp_profile_root/ConfigEngine directory:

    -   **Windows™**

        `ConfigEngine.bat register-wcm-social`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh register-wcm-social`

4.  Run the following deployment command from the wp_profile_root/ConfigEngine` directory:

    -   **Windows™**

        `ConfigEngine.bat deploy-wcm-social`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh deploy-wcm-social`

5.  If you are publishing to an HCL Connections server, then import the SSL certificate from the HCL Connections server into the HCL Portal server. See the WebSphere® Application Server documentation for [instructions on importing certificates](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tsec_ssladdsignercert.html).

    !!!note
        If your server is located behind a firewall, you might also need to import certificates for Facebook, LinkedIn, and Twitter. For more information, see [Social media certificates](wcm_sm_certs.md) for further information.

6.  Restart the server.

7.  Add the **Social Configuration** library to all syndication relationships.

    Repeat these steps for each subscriber server in your environment. The settings that are defined for **Shared Social database properties** in the smp.properties file must be the same as the settings defined on the syndicator server.

    !!!note
        When you install on a server other than the authoring server, if your JCR database user name or password is different from the authoring server, then run the following command from the wp_profile_root/ConfigEngine directory:

    -   **Windows™**

        `ConfigEngine.bat action-set-wcm-social-datasource-credentials -DWcmSocialDSNewUserName=AUTH_DB_USERNAME -DWcmSocialDSNewPassword=AUTH_DB_PASSWORD`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh action-set-wcm-social-datasource-credentials -DWcmSocialDSNewUserName=AUTH_DB_USERNAME -DWcmSocialDSNewPassword=AUTH_DB_PASSWORD`

8.  If your server contains virtual portals, you must also run the following task for each virtual portal on your server:

    -   **Windows™**

        `ConfigEngine.bat import-wcm-social-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=VirtualPortalContext`

    -   **AIX® and Linux™**

        `./ConfigEngine.sh import-wcm-social-data -DVirtualPortalHostName=VirtualPortalHostName -DVirtualPortalContext=VirtualPortalContext`

9.  Restart HCL Portal.

10. Repeat these steps on every server and cluster node.


## Additional installation and configuration

-   When you import or migrate a Social Media Publisher library, you must also migrate credential vault data by using the XML configuration interface. See the HCL Portal product documentation for further details.
-   Two credential vault slots are required for Social Media Publisher configuration:

    -   A credential vault slot that is called **socialPostUser** is required for post workflow actions. See [Social Media Workflow Actions](wcm_sm_workflow.md). The **socialPostUser** slot is not displayed in the list of available vault slots when you create a Social Network Configuration document.
    -   You must also set up a credential vault for each social network. This action is selected when you create a social network configuration document. See [Creating a social network configuration document](../socialmedia_publisher/socialmedia_publisher_cfg/creating_sm_doc/index.md).
    Both of these credential vault slots must be shared credential vault slots and store the admin user login information of your social network.

-   Anonymous access to web content libraries, content items, and images are required for posting to external social networks. Single sign on can also be enabled for HCL Connections.
-   The Social Media Publisher uses the built-in JMS function of Web Content Manager to monitor and respond to events that are occurring within a system. When the Social Media Publisher is running within a cluster, each server needs to be configured to match the WebSphere Application Server JMS policy type in effect. The jms.processRemoteMsgs global setting must be set to either true or false depending on the WebSphere Application Server JMS policy type. For more information, see [Global configuration settings](../socialmedia_publisher/socialmedia_publisher_cfg/wcm_sm_config_doc_global.md) for further information.
-   When you install the Social Media Publisher into a cluster that has a web-server in front of it, add the following Web Content Manager configuration setting. The settings allow the Social Media Publisher to make loop back requests to the current server:

    ```
     wcm.local.host.port=LOCAL_PORTAL_PORT
    ```

    Use the WebSphere Integrated Solutions Console to add this setting to the **WCM WCMConfigService** service. `LOCAL_PORTAL_PORT` is the local WebSphere Application Server port for HCL Portal. The default port is 10039.



