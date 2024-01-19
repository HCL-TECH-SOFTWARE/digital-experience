# HCL Digital Experience roadmap: Multiple clusters

Add an HCL Portal cluster to an existing cluster.

Before you start to create multiple clusters, see [Planning for multiple clusters](../../../../../../get_started/plan_deployment/traditional_deployment/cluster_consideration/multiple_cluster/index.md).

!!!remember
    Ensure that you configure the web server plug-in after you transfer your database.


## Who should use this roadmap

Use this roadmap if you are part of an organization with the following requirements:

-   An organization that has an existing cluster and has to add more clusters to the existing one.
-   An organization that wants to manage many application servers and clusters within a single administrative domain or cell.
-   An organization that wants to manage multiple portals and portal-based products in the same managed cell.

## Topology diagram

The multiple cluster topology depicts two portal clusters that share a cell. One deployment manager manages the cell. Each cluster has an individual database for the JCR and Release portal database domains. The clusters share a common database server that has the Community, Customization, LikeMinds, and Feedback portal database domains. The clusters also share an LDAP server and a remote search server. A search collection exists for each cluster, but the collections are co-located on a single server.

!!!note
    The release and JCR databases are separate. Therefore, apply maintenance and application updates, including updates to portlet preferences, separately to each cluster.

A network load balance directs incoming traffic between the two web servers. Each cluster has a web server. However, a single on-demand router might be used instead.

![Topology diagram depicts a single cell with two portal clusters.](../rm_advanced_cfg/_img/multipleCluster.jpeg)

## Preparing for the installation process

Gather information and software before you install HCL Digital Experience.

1.  Check product system requirements.

2.  Log in to [HCL Software Support](https://www.hcltechsw.com/wps/portal/about/welcome.html) and get the software.


## Installing prerequisites

You can use current prerequisite software installations. Verify that your current version is supported. If it is not supported, upgrade to the appropriate version. Otherwise, install a web server, database server, and user registry server. Typically, the database and user registry servers are already installed and configured. However, you might have to complete specific configuration steps that are required to integrate the servers with the portal server. Visit *Installing and preparing the prerequisite software* for more topic information.

1.  Install a web server.

2.  Prepare a database server.

3.  Prepare a user registry.


## Installing the HCL Digital Experience

Installing HCL Digital Experience involves preparing your operating system, installing or upgrading the installation manager, and running the installation program. For more information, visit *Installing the HCL Digital Experience software*.

## Applying the latest cumulative fix

Portal maintenance is delivered through individual Fixes and Combined Cumulative Fixes (CFs), which are suggested according to your environment. See [Roadmap: applying maintenance](../../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_cf.md).

## Creating cluster A

Create your first cluster, including the database transfer, augmenting the Deployment Manager, creating a cluster node, enabling security, and creating additional horizontal cluster nodes. These instructions are for a horizontal cluster only. For information about setting up a vertical cluster, see [Setting up a cluster](../../../../../../deployment/manage/config_cluster/index.md).

Log in to HCL Digital Experience to verify that your portal works:

```
http://<hostname.example.com>:<10039>/wps/portal
```
where:
- *hostname.example.com* is the fully qualified host name of the server. 
- The portal is running and *10039* is the default transport port that the DX® Application Server created. The port number might be different
for your environment.

1.  To get the latest updates for the wizard, apply the most recent CF. For more information about applying the latest fix pack, see [Apply Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

If you have the most recent fix pack applied, skip the following step,.

2.  Access the Configuration wizard. Go to http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!!restriction
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    !!!note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../../deployment/manage/portal_admin_tools/language_support/index.md).

4.  Select **Set Up a Cluster > Database Transfer**.

    !!!note
        The **Database Transfer** configuration option in the Configuration Wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database.

5.  Provide information about your environment.

    !!!attention
        Record your database settings so that you can use the same information when you create Portal B. If cluster A exists, upgrade it to match Portal B.

    !!!important
        Maintain the same number of data sources with identical names to the Cluster A data sources. Then, the data source bindings in the applications can be resolved on every cluster. If you share databases across the clusters, this statement refers to both the shared and non-shared domains. All domains must use the same names. For example, if Cluster A uses relDS comDS custDS jcrDS fbkDS lmDS, then Cluster B must also use six data sources with the same names. Cluster B cannot be configured to use a single data source. An enterprise application that is shared between cluster contains only a single binding to a single data source name. An application cannot contain a binding to multiple data source names. If the data source names are the same and the user ID and password are the same, then the extra aliases are not required. The binding in the application resolves to the data source for both clusters because the name is the same and the user ID and password is the same.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

8.  Log in to HCL Portal to verify that you have a working portal server.

9.  Select **Set Up a Cluster > Create a Deployment Manager**.

10. Provide information about your environment.

11. Save your configuration settings.

12. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

13. If you changed the context root during the installation or configuration of HCL Digital Experience, then you must complete the optional next step from the Configuration Wizard to update parameters with the new context path after you complete the Create a Deployment Manager configuration option.

14. Log in to HCL Digital Experience to verify that you have a working portal server.

15. Select **Set Up a Cluster > Create a Cluster**.

16. Provide information about your environment.

17. Save your configuration settings.

18. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

19. Log in to HCL Portal to verify that you have a working portal server.

20. **Set Up a Cluster > Enable Federated Security**.

    !!!note
        If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere® Application Server and HCL Digital Experience user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

21. Provide information about your environment.

22. Save your configuration settings.

23. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

24. Log in to HCL Digital Experience to verify that you have a working portal server.

25. Install HCL Portal on the additional node.

    !!!tip
        For additional nodes, you only need to install the HCL Portal product binary files. Therefore, on the Features screen of the IBM® Installation Manager, ensure that **Portal Server Profile** is not selected.

26. If you want to shorten your site URL for search engine optimization benefits, you can modify your context root and remove navigational state information from your URL by using the **Modify Site URLs for Search Engine Optimization** configuration option.

27. **Set Up a Cluster > Create an Additional Cluster Node**.

    !!!note
        If you are setting up a vertical cluster, manual instructions are available for dynamic and static cluster configurations.

28. Provide information about your environment.

29. Save your configuration settings.

30. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

31. Log in to HCL Digital Experience to verify that you have a working portal server.


## Configuring portal B
Install HCL Digital Experience. Then, use the Configuration Wizard to deploy a stand-alone portal.

Log in to HCL Digital Experience to verify that you have a working portal:

```
http://hostname.example.com:10039/wps/portal,
where hostname.example.com is the fully qualified host name of the server where
Portal is running and 10039 is the default transport port that is created by DX Application Server. The port number might be different
for your environment.
```

1.  Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!notes
- If you are working with HCL Digital Experience V8.5 or 9 at a software level prior to CF18, the wizard address is: http://your_server:10200/ibm/wizard. After you install CF18, the configuration wizard automatically is adjusted to http://your_server:10200/hcl/wizard.
- A known issue exists with Chrome version 45 and later and the Configuration wizard. If you experience difficulties, use a different browser when you access the wizard.

2.  Log in to the Configuration wizard with the administrative ID for the configuration wizard profile, cw\_profile.

If the language is not currently supported for the user interface, you might see the English version. For details about supported languages and the language codes for all the HCL Digital Experience user interfaces, see [Language support](../../../../../../deployment/manage/portal_admin_tools/language_support/index.md).

3.  Select **Set Up a Stand-alone Server > Database Transfer**.

4.  Provide information about your environment.

Maintain the same number of data sources with identical names to the Cluster A data sources. Thereby, the data source bindings in the applications can be resolved on every cluster. If you share databases among the clusters, this statement refers to both the shared and non-shared domains. All domains must use the same names.

5.  Save your configuration settings.

6.  Complete one of the following steps:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

7.  Log in to HCL Digital Experience to verify that the portal server works.

8.  Select **Set Up a Stand-alone Server > Enable Federated Security**.

If you set **Use Administrator IDs stored in your LDAP user registry** to ``yes``, WebSphere Application Server and HCL Digital Experience user IDs and passwords are changed to the LDAP user ID and password. To prevent changing both user IDs and passwords to match the LDAP user ID and password, set this value to ``no``. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

9.  Provide information about your environment.

10. Save your configuration settings.

11. Complete one of the following steps:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

12. Log in to HCL Digital Experience to verify portal server works.


## Configuring the multiple cluster

After you create cluster A and portal B, run various tasks to create multiple clusters.

1.  Complete the following steps on the primary node of Cluster A:

Use the same database user ID and password for each identically named domain or data source. By using the same IDs and passwords, the existing JAAS Authentication Aliases remain functional. If a unique database user ID and password are required, more manual configuration is required to create and map JAAS Authentication Aliases for each data source.

    1.  Open a command prompt.

    2.  Change to the ``wp_profile_root/ConfigEngine`` directory.

    3.  Depending on your operating system, run one of the following commands to create the JAAS Authentication Aliases:

        -   AIX® and Linux™: `./ConfigEngine.sh create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr_password`
        -   Windows™: `ConfigEngine.bat create-alias-multiple-cluster -DauthDomainList=release,jcr -DWasPassword=dmgr_password`

where,
*DauthDomainList* is set to a list of domains that use unique database user IDs and passwords. The domain properties are set correctly in the ``wkplc_dbdomain.properties`` file, including user IDs and passwords.

2.  If required, upgrade Portal B to the current fix pack.

3.  Complete the following steps to create an inventory list of Portal B enterprise applications and portlets:

    1.  Open a command prompt on Portal B.

    2.  Change to the ``wp_profile_root/ConfigEngine`` directory.

    3.  Depedning on your operating system, run one of the following commands to create the list:

        -   AIX® and Linux™: `./ConfigEngine.sh mapped-app-list-create -DWasPassword=password`
        -   Windows: `ConfigEngine.bat mapped-app-list-create -DWasPassword=password`

4.  Run the following command from the ``wp_profile_root/bin`` directory to federate Portal B:

    ```
    ./addNode.sh dmgr_hostname dmgr_port -includeapps
    	-username was_admin_user
    	-password was_admin_password
    ```

    ```
    addNode.bat dmgr_hostname dmgr_port -includeapps
    	-username was_admin_user
    	-password was_admin_password
    ```

Where:

-   *dmgr_hostname* is the TCP/IP host name of the Deployment Manager server
-   *dmgr_port* is the SOAP port number of the Deployment Manager server
-   *was_admin_user* and <was_admin_password> are the user ID and password for the Deployment Manager administrator
    
    If the WebSphere Application Server administrator user ID and password are different from the Deployment Manager values, add the following parameters to the addNode task:

- ``localusername local_was_admin_user``
- ``localpassword local_was_admin_password``

For information about the addNode command and other optional parameters, see [addNode command](http://publib.boulder.ibm.com/infocenter/wasinfo/v8r0/index.jsp?topic=/com.ibm.websphere.nd.multiplatform.doc/info/ae/ae/rxml_addnode.html).

    !!!Important
        If the addNode task fails for any reason, you must complete the following steps before you rerun the task:

    1.  If the AddNode task created the node, remove the node.
    2.  If the items exist, log on to the deployment manager and complete the following steps:

        1.  Remove the HCL Portal server definition.
        2.  Remove the HCL Portal JDBC Provider.

5.  Stop the HCL Portal server on the primary node of Cluster B and ensure that the following parameters are set correctly in the ``wkplc.properties`` file:

You can add these parameters (particularly passwords) directly to any task. However, consider adding them temporarily to the properties file. You can then remove them when you are finished to keep your environment secure.

    1.  Set the ``WasSoapPort`` address to the port used to connect remotely to the deployment manager.

    2.  Set the ``WasRemoteHostName`` name to the full host name of the server that is used to remotely connect to the deployment manager.

    3.  Verify that the ``WasUserid`` ID is set to your Deployment Manager administrator user ID.

    4.  Verify that the ``WasPassword`` password is set to your Deployment Manager administrator password.

    5.  Verify that the ``PortalAdminPwd`` password is set to your HCL Portal administrator password.

    6.  Verify that ``ClusterName`` value is set.

    7.  Verify that the ``PrimaryNode`` value is set to ``true``.

6.  Run one of the following commands to determine which applications from the inventory list are no longer mapped to Portal B. The command uses the application profiles in the cell to restore the mappings. Wait 30 minutes after you run this command to allow all EAR files to expand before you proceed to the next step.

    -   AIX and Linux: `./ConfigEngine.sh map-apps-to-server -DWasPassword=password`
    -   Windows: `ConfigEngine.bat map-apps-to-server -DWasPassword=password`

7.  Ensure that all database parameters are correctly set, including passwords, in the ``wkplc_comp.properties`` and ``wkplc_dbtype.properties`` files on Portal B.

8.  Run one of the following commands on Portal B:

    -   AIX and Linux: `./ConfigEngine.sh cluster-node-config-post-federation -DWasPassword=password`
    -   Windows: `ConfigEngine.bat cluster-node-config-post-federation -DWasPassword=password`

9.  The HCL Portal node is federated. It uses the Deployment Manager cell and its user registry. If the administrative user ID and group name are different between HCL Portal and Deployment Manager, complete one of the following options:

    -   Add the existing administrative user ID and group to the Deployment Manager security configuration.
    -   Complete the following steps to change the values in the HCL Portal configuration to match the Deployment Manager values:
        1.  If necessary, start the HCL Portal server.

        2.  Verify that the required HCL Digital Experience administrative user ID and group ID are defined in the Deployment Manager user registry that provides security.

        3.  Run one of the following commands:

            -   AIX and Linux: `./ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid`
            -   Windows: `ConfigEngine.bat wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid`
            
            Where:

            -   *WasPassword* is set to the administrative password for the Deployment Manager cell
            -   *newAdminId* is set to the fully qualified distinguished name (DN) of the HCL Portal administrative user ID in the cell
            -   *newAdminGroupId* is set to the fully qualified DN of the group for the HCL Portal administrative user ID in the cell

                !!!important
                    If the value for newAdminGroupId contains a space; for example, Software Group, open the wkplc.properties file. Add values for the `newAdminId`, `newAdminPw`, and `newAdminGroupId` parameters. Save your changes, and then run the `wp-change-portal-admin-user` command.

        4.  After the command finishes, stop the HCL Portal server.

10. Complete the following steps from the WebSphere Integrated Solutions Console on Portal B:

    1.  Log on to WebSphere Integrated Solutions Console.

    2.  Click **System Administration > Node Agents**.

    3.  Select the checkbox next to the required node agent, and then click **Restart**.

11. Stop and restart the deployment manager.

12. Stop and restart the HCL Portal server on Portal B.

13. Restart the HCL Portal server on Cluster A. Verify that Cluster A works as expected. That is, check pages and portlets. Verify that Portal B is works as expected. Check the pages and portlets that you deployed into Portal B before it was federated. Correct discrepancies or errors before you continue.

    !!!note
        If Portal B has an administrative ID other than wpsadmin, the server is not functional. It functions after the cluster is complete and the administrative ID is configured to match the security settings.

14. Complete one of the following options to define a cluster with Portal B as the basis:

    -   Complete the following steps to define a static cluster:

        -   Run one of the following commands:

            -   AIX and Linux: `./ConfigEngine.sh cluster-node-config-cluster-setup -DWasPassword=dmgr_password`
            -   Windows: `ConfigEngine.bat cluster-node-config-cluster-setup -DWasPassword=dmgr_password`

        -   Configure the cluster to use an external web server to take advantage of features such as workload management. Go to [Configuring a web server and an application server on separate machines (remote)](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/tins_webplugins_remotesa.html) for information.

            !!!note
                Start with the step about starting the plug-ins installation wizard.

    -   Complete the following steps to define a dynamic cluster:

        -   Log on to the deployment manager WebSphere Integrated Solutions Console.
        -   Complete the following steps to create a node group:

            -   Click **System administration > Node groups**.
            -   Click **New**.
            -   Type the node group **Name**.
            -   Type any information about the node group in the **Description** text box.
            -   Click **OK**.
            -   Click the **Save** link to save your changes to the master configuration.

        -   Complete the following steps to add members to the node group:

            -   Click **System administration > Node groups**.
            -   Click the name of the node group to add members to.
            -   Click **Node group members** under Additional Properties.
            -   Click **Add**.
            -   Select the primary node and then click **Add**.
            -   Click the **Save** link to save your changes to the master configuration.

        -   Complete the following steps to create a dynamic cluster in the node group:

            -   Click **Servers > Clusters > Dynamic clusters**.
            -   Click **New**.
            -   Select WebSphere Application Server from the **Server Type** menu and then click **Next**.
            -   Select **Automatically define cluster members with rules**.
            -   Type the cluster name in the **Dynamic cluster name** text box. Then, click **Next**. Type the same value that you provided for the cluster name parameter in the ``wkplc.properties`` file of your primary node.
            -   Remove all default membership policies and then click **Subexpression builder**.
            -   Enter the following information in the Subexpression builder window:

                -   Select **and** from the **Logical operator** menu.
                -   Select **Nodegroup** from the **Select operand** menu.
                -   Select **Equals (=)** from the **Operator** menu.
                -   Type the node group name that you created in the previous step in the **Value** text box.
                -   Click **Generate subexpression**.
                -   Click **Append**.

            -   Click **Preview membership** to verify that all nodes included in the node group display and then click **Next**.
            -   Click **Create the cluster member using an existing server as a template** and then select the primary node HCL Digital Experience server.
            -   Click **Next**.
            -   Specify the dynamic cluster properties for the minimum and maximum number of server instances.
            -   Review the summary page to verify your actions and then click **Finish**.
            -   Run one of the following commands to create the dynamic cluster:

                -   AIX and Linux: `./ConfigEngine.sh cluster-node-config-dynamic-cluster-setup -DWasPassword=dmgr_password`
                -   Windows: `ConfigEngine.bat cluster-node-config-dynamic-cluster-setup -DWasPassword=dmgr_password`
                
15. Complete the following steps to access the Web Content Manager content through an external web server:

    1.  Log on to the deployment manager WebSphere Integrated Solutions Console.

    2.  Select **Environment > WebSphere Variables**.

    3.  From the **Scope** menu, select the **Node=nodename, Server=servername** option to narrow the scope of the listed variables. Node=nodename is the node that contains the HCL Portal application server.

    4.  Update the ``WCM_HOST`` variable with the fully qualified host name that is used to access the HCL Portal server through the web server or On Demand Router.

    5.  Update the ``WCM_PORT`` variable with the port number used to access the HCL Portal server through the web server or On Demand Router.

    6.  Update the ``WCM_HOST`` and ``WCM_PORT`` variables for each additional HCL Portal application server that exists in the cluster.

    7.  Synchronize the node with the deployment manager.

    8.  Save your changes and then restart the deployment manager, the node agents, and the HCL Portal servers.

16. Install additional nodes for Cluster B. Then, federate them as secondary nodes and define them as cluster members on these nodes. You can add more nodes to a static or dynamic cluster. You can also add more vertical cluster members to an existing node in a static or dynamic cluster to provide vertical scaling.

17. Restart the HCL Portal server on Cluster A and Cluster B.

18. After you set the multiple clusters, complete the following extra tasks to ensure a balanced workload and failover support:

    -   Update the web server configuration to enable user requests to be routed to the new cluster. Refer to your web server documentation for information about using a web server with multiple clusters in a cell.
    -   Update your database configuration to share database domains between clusters.
19. If you entered passwords in any of the properties files when you created your cluster, remove them for security purposes.


Cluster B deployment is complete. It is an independent cluster from Cluster A, which means that Cluster B can have its own configuration, set of user portlets, and target community. Applications that are common between Cluster A and Cluster B are most likely infrastructure or related to administration. Take special care to preserve cluster commonality and correct maintenance levels.

## Configuring the web server

Move the web server plug-in from the WebSphere Application Server to the web server.


## Tuning the servers in your environment

Tuning the servers is important to the performance of your portal environment. After installation and deployment, HCL Digital Experience is not tuned for a production environment. Your database requires tuning for improved performance. You can organize your database now or soon after you finish configuration. You must tune and maintain your database regularly.

1.  Run the performance tuning tool to complete an initial tuning of your servers.

2.  Check the tuning guide for more instructions. If the tuning guide for the current release is unavailable, use the tuning guide for the previous product version.


## Configuring a remote search service

Configure the remote search service to offload and balance system load.

1.  Use the IBM Installation Manager to install the remote search service.

2.  If you use single-sign on, prepare the security for the remote search service.

3.  Configure the security between the portal and the remote search server.

4.  Set the search user ID.

5.  Configure the remote search service.

6.  Configure the seedlist servlet.


