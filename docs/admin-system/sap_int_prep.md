# Preparing your system environment and the prerequisites for Integrator for SAP 

To prepare your HCL Portal and the prerequisites for installing Integrator for SAP, make sure that you have all the required files and configure your outbound HTTP connections.

1.  Configure your outbound HTTP connections:

    1.  Copy the following sample code and save it in a file named proxy-config.xml in a temporary directory on your HCL Portal server:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <proxy:proxy-rules 
             xmlns:proxy="http://www.ibm.com/xmlns/prod/sw/ajax/proxy-config/1.0" 
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <proxy:mapping url="*" contextpath="/proxy"/>
            <proxy:mapping url="*" contextpath="/myproxy"/>
            <proxy:mapping url="*" contextpath="/common_proxy"/>
            <proxy:policy  url="xample_sap_portal.company.com:50000/*" 
                           basic-authsupport="true" acf="none">
                <proxy:actions>
                    <proxy:method>GET</proxy:method>
                    <proxy:method>HEAD</proxy:method>
                </proxy:actions>
                <proxy:cookies>
                    <proxy:cookie>MYSAPSSO2</proxy:cookie>
                </proxy:cookies>
                <proxy:headers>
                    <proxy:header>User-Agent</proxy:header>
                    <proxy:header>Accept*</proxy:header>
                    <proxy:header>Content*</proxy:header>
                    <proxy:header>Authorization*</proxy:header>
                    <proxy:header>set-cookie</proxy:header>
                </proxy:headers>
            </proxy:policy>
            <proxy:meta-data>
                <proxy:name>socket-timeout</proxy:name>
                <proxy:value>10000</proxy:value>
            </proxy:meta-data>
            <proxy:meta-data>
                <proxy:name>retries</proxy:name>
                <proxy:value>2</proxy:value>
            </proxy:meta-data>
            <proxy:meta-data>
                <proxy:name>max-connections-per-host</proxy:name>
                <proxy:value>5</proxy:value>
            </proxy:meta-data>
            <proxy:meta-data>
                <proxy:name>max-total-connections</proxy:name>
                <proxy:value>100</proxy:value>
            </proxy:meta-data>
            <proxy:meta-data>
                <proxy:name>forward-credentials-from-vault</proxy:name>
                <proxy:value>true</proxy:value>
            </proxy:meta-data>
        </proxy:proxy-rules>
        ```

        For more information about configuring your outbound HTTP connection services, read *Configuring outbound HTTP connections*.

    2.  If you do not use Basic Authentication for single sign-on, remove the references to Basic Authentication from the file proxy-config.xml .

    3.  In the file proxy-config.xml, set the values for the parameters socket-timeout and retries according to your environment. If your SAP NetWeaver Portal is not available for some reason, these parameters determine the amount of time that the task spends on the inaccessible connection. HCL Portal tries a connection once for each user who logs in to the HCL Portal and who has access rights to the SAP navigation.

        **Note:** If the connection fails for many users, the failures can affect the performance of HCL Portal.

    4.  In the file proxy-config.xml, replace the proxy URL with your SAP NetWeaver Portal host and port. Example: `http://example_sap_portal.company.com:50000` .

    5.  In the file proxy-config.xml, make sure to add your SSO token name to the cookie section of the SAP NetWeaver Portal host. For example, the token name can be `MYSAPSSO2` .

    6.  If you want to run the configuration task in the following step without specifying passwords, add the user IDs and passwords for WebSphere® Application Server and HCL Digital Experience to the file wp\_profile/ConfigEngine/properties/wkplc.properties .

    7.  Run the HCL Portal configuration task `checkin-wp-proxy-config` as follows:

        -   If you added user IDs and passwords to the file wp\_profile/ConfigEngine/properties/wkplc.properties , enter the task as follows:

            ```
            ConfigEngine.bat|sh create-outbound-http-connection-config 
                                -DConfigFileName=/proxy-config.xml 
                                -DOutboundProfileType=global
            ```

        -   If you want to specify the user IDs and passwords when you run the configuration task, enter the task as follows:

            ```
            ConfigEngine.bat|sh create-outbound-http-connection-config 
                                -DConfigFileName=/proxy-config.xml 
                                -DOutboundProfileType=global 
                                -DWasPassword=password 
                                -DPortalAdminPwd=password
            ```

        For more information, read *Configuring outbound HTTP connections by using configuration tasks*.

2.  If you do not have a page with the unique name `ibm.portal.page.Applications` in your HCL Portal, create it before you install Integrator for SAP.

    The installation process expects to find a page with the unique name `ibm.portal.page.Applications` in HCL Portal. It adds integration artifacts to this page as child pages. If you do not have this page in your HCL Portal and run the Solution Installer install task, an XMLAccess exception occurs.


You have completed the preparation for Integrator for SAP.

**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Prerequisites and support for Integrator for SAP ](../admin-system/sap_int_prereq_supp.md)

[Installing Integrator for SAP ](../admin-system/sap_int_instal.md)

[Configuring outbound HTTP connections ](../dev-portlet/outbhttp_cfg_oh_conns.md)

[Configuring outbound HTTP connections by using configuration tasks ](../dev-portlet/outbhttp_cfg_tasks.md)

[Performance tuning for Integrator for SAP ](../admin-system/sap_int_perf_tun.md)

