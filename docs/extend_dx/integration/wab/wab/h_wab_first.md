# Getting started with the Web Application Bridge

The portal administrator collects information about the content provider and its applications and then follows basic configuration steps to enable the Web Application Bridge.

1.  The steps that are needed to enable the Web Application Bridge depends on whether the portal context root is removed or not. For information about how to remove the portal context root, go to [Configuration Wizard instructions: Modify site URLs for search engine optimization](https://hclpnpsupport.hcltech.com/csm?id=kb_category&kb_category=c0ef98b71bb0778083cb86e9cd4bcbf2).

    -   If the portal context root is removed, complete the following steps:
        1.  Run the following task to create a virtual host for the Web Application Bridge. This task automatically deploys the Reverse Proxy servlet (RPS) on the newly created virtual host and sets the RPS context root to /.

            -   AIX® and Linux™:

                ```
                ./ConfigEngine.sh deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DPortalAdminPwd=password
                -DPortalAdminId=PortalAdminId -DWasUserid=WasUserid -DWasPassword=password
                ```

            -   Windows™:

                ```
                ConfigEngine.bat deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias -DPortalAdminPwd=password
                -DPortalAdminId=PortalAdminId -DWasUserid=WasUserid -DWasPassword=password
                ```

            virtualHostName is the name of the virtual host; for example, wab_host. virtualHostAlias is the DNS alias name that is used to access the applications on the virtual host; for example, wab.portal.com. If the virtualHostName and virtualHostAlias exist, the existing values are used. The task maps the virtualHostAlias on the same URI scheme (http or https) and port that the portal is deployed on.

            Alternatively, use a text editor to open the wkplc.properties file in the wp_profile_root/configEngine/properties directory. Then, ensure that the following parameters have the correct values:

            -   WasUserID
            -   WasPassword
            -   PortalAdminId
            -   PortalAdminPwd

            Now you can run the command as follows:

            -   AIX and Linux: `./ConfigEngine.sh deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias`

            -   Windows: `ConfigEngine.bat deploy-wab-virtual-host -DVirtualHostName=virtualHostName -DVirtualHostAlias=virtualHostAlias`
               

        2.  Complete the following steps to configure single sign-on between portal and the virtual host alias that was created in the previous step.

            -   Log in to WebSphere® Integrated Solutions Console.
            -   Go to **Security > Global Security > Web and SIP security > Single sign-on (SSO)**.
            -   Enter the domain name. For example, if the portal host is portal.domain.ibm.com and the VHA is wab.domain.ibm.com then the domain value is domain.ibm.com.
            -   Restart the WebSphere_Portal server.

        3.  Enter the virtual host alias to configure the DNS server to make sure that the VHA is reachable from the user's workstation. The VHA must be accessible from all the workstations from where the portal server is accessed. If portal is accessed with the https scheme, make sure that valid SSL certificates for host myhost1.servername.domain.ibm.com and myhost2.servername.domain.ibm.com are installed. To install the SSL certificates, log in to the WebSphere Integrated Solutions Console. Then, go to **SSL certificate and key management > Key stores and certificates > NodeDefaultKeyStore > Personal certificates**. For information, read [Personal certificates collection](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/usec_sslperscerts.html). If the certificates are not available for these hosts, then you must accept the security exception in the browser. Open the web dock iFrame URL in a separate browser window. Then, refresh the portal page to make it work and render the integrated application. Otherwise, the application might not work.

    -   If portal context root is not removed, complete the following steps:

        1.  Set the context root for the **wp.vwat.servlet.ear** application:
            1.  Log on to the WebSphere Integrated Solutions Console.
            2.  Go to **Applications > Application Types > WebSphere enterprise applications**.
            3.  Find and click the **wp.vwat.servlet.ear** application link.
            4.  Under the **Web Module Properties** heading, click **Context Root For Web Modules**.
            5.  Change the context root to /. This step can create name conflicts. Add a rewrite rule to avoid these conflicts. For more information read [Apache Module mod_rewrite](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html) and [Providing short vanity URLs](../../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/van_url_short.md).
            6.  Click **OK**.
            7.  Click **Save** to save your changes to the master configuration.
            8.  Stop and restart the **wp.vwat.servlet.ear** application.

        2.  Complete the following steps if you configured a web server:
            1.  Log in to the WebSphere Integrated Solutions Console.
            2.  Go to **Applications > Application Types > WebSphere enterprise applications > wp.vwat.servlet.ear > Manage Modules**.
            3.  Complete the following steps to map the **wp.vwat.servlet.ear** application to the web server: For more information, go to the *More information about this page* link in the WebSphere Integrated Solutions Console.
                1.  Check the **Select** check box for the **Virtual Web Application Servlet** application.
                2.  Select the web server in the **Clusters and servers** box.
                3.  Click **Apply**.

            4.  Choose one of the following options to update the plug-in configuration:
                1.  Complete the following steps to update the plug-in configuration for all applications in WebSphere Application Server:
                    -   Go to **Servers > Server Types > Web servers > webserver1 > Plug-in properties**.
                    -   Ensure that the following two check boxes are checked:
                        -   **Automatically generate the plug-in configuration file**
                        -   **Automatically propagate plug-in configuration file**
                    -   Click **Apply** to save your changes.

                2.  Complete the following steps to update the plug-in configuration just for the **wp.vwat.servlet.ear** application:
                    -   Go to wp_profile_root/config/cells/cell_name /nodes/node_name/servers/web_server_name directory in the deployment manager profile.
                    -   Make a backup copy of the plugin-cfg.xml file.
                    -   Open the plugin-cfg.xml file.
                    -   Add a line that is similar to the following example to the `UriGroup` for the cluster:

                        ```
                        <Uri AffinityCookie="JSESSIONID" AffinityURLIdentifier="jsessionid" Name="/*"/>
                        ```

                    -   Copy the updated plugin-cfg.xml file to the web server in the web server home directory.

        3.  Restart all the servers.

2.  The system administrator logs in to HCL Digital Experience.

3.  The system administrator clicks the **Administration menu** icon from the toolbar. Then, clicks **Portlet Management > Virtual Web Application Manager**.

    !!!warning
        Do not enter < or > into any of the text boxes.

4.  The system administrator clicks **Content Provider Profiles** and then selects **Create Content Provider Profiles**.

5.  The system administrator creates the content provider profiles.

6.  The system administrator goes to the profile that was created and clicks **Add policy** to create a policy.

    !!!tip
        The system administrator must create at least one policy for the content provider profile.

7.  The system administrator clicks **Web Dock Applications** and then selects **Create Web Dock Applications**.

8.  The system administrator creates the web dock applications.

9.  The system administrator goes to the application that was created.

10. The system administrator selects one of the following tabs and then click **Edit** to configure the web dock settings:

    !!!note
        If the system administrator changes the host or port information in the content provider profile, you must edit the web dock application and reselect the profile. Otherwise, the web dock application does not pick up the changes.

    -   **Web Dock Display Settings**
    -   **Client Side IPC for Web Dock**
    -   **Server Side IPC for Web Dock**
    -   **Plugins**

11. The content author logs in to HCL Portal.

12. The content author accesses the site toolbar and takes one of the following actions:

    -   Creates a page and adds the web dock application portlet to the page.
    -   Edits an existing page and adds the web dock application portlet to the page.
    
    !!!note "Tip"
        To get the web dock application to render on a page, the page must either have the **Web Dock** profile or a profile that includes the wp_webdock module. Edit the page properties and change the profile or add the wp_webdock module to the profile applied to the page:

    Starting with CF03, the Web Dock profile no longer exists. If you are using the Resource Aggregator for Portlets, no additional steps are necessary. If you are not using the Resource Aggregator for Portlets, add the **wp_webdock** module to an existing profile on your page.

    1.  Connect to the theme repository with the fs-type1 connection.
    2.  Go to your theme.
    3.  Open the profile file in the /profiles directory.
    4.  Make a copy of the profile file and give it a unique name.
    5.  Edit the .json file and add the **wp_webdock** module ID.
    6.  Copy the profile that you created to the /profiles directory.
    7.  Invalidate the resource aggregator cache to integrate your changes. Click the **Administration menu** icon in the toolbar. Then, click **Theme Analyzer > Utilities > Control Center > Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/utilities/index.md).
    
13. If a content author experiences issues with viewing the web dock applications, complete the following steps to update the user role:

    1.  Log on to HCL Portal as the administrator.

    2.  Click the **Administration menu** icon in the toolbar. Then, click **Access > Resource Permissions**.

    3.  Search for the page that contains the web dock application.

    4.  Give the content author the correct permissions to the page.

    5.  If the content provider policy is set to use basic or form-based authentication, complete the following steps:

        -   Go to the web dock application and give the content user the correct permissions.
        -   Go to the credential vault used for the authentication. Give the content user the correct permissions to the credential vault.

???+ info "Related information"  
    -   [Providing short vanity URLs](../../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/van_url_short.md)
    -   [Apache Module mod_rewrite](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html)

