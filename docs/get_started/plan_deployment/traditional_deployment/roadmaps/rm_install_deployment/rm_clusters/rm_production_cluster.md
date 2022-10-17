# HCL Digital Experience roadmap: Production and delivery environment

The production environment are the servers that incoming web traffic accesses to experience your HCL Digital Experience. This roadmap is based on a cluster topology.

The Configuration Wizard prompts you to select the cluster type, static, or dynamic. By default, the cluster type is static. A static cluster is a group of application servers in a IBM® WebSphere® Application Server Network Deployment environment that participates in workload management. A dynamic cluster monitors performance and load information and is able to dynamically create and remove cluster members that are based on the workload. You can add extra nodes to expand the capacity of the dynamic cluster.

Before HCL Digital Experience 8.5, you were required to install and configure WebSphere Virtual Enterprise to set up a dynamic cluster. Now, the virtual enterprise component is integrated with the application server. Therefore, you do not need to install and configure WebSphere Virtual Enterprise before you set up a dynamic cluster.

**Remember:** Ensure that you configure the web server plug-in after you transfer your database.


# Who should use this roadmap

Use this roadmap if you are an organization with the following requirements:

-   An organization whose production site requires improved availability and failover
-   An organization whose site experiences random high load situations that might benefit from dynamic load balancing
-   An organization whose website can benefit from other features such as prioritization, health monitoring, and dynamic operations
-   An organization that needs to manage deployments and synchronize various cluster nodes with a single administrative interface, the deployment manager

# Topology diagram

A cluster topology is versatile. You can use it to set up a production environment, a test environment, and more. The clustered topology diagram includes two horizontal nodes that are managed in the same cell. The nodes in the cluster use a common LDAP and database server. A remote search server is depicted too. In a cluster environment, you must use a remote search server.

![Single cluster cell with two nodes. The managed cell connects to a remote database and LDAP server](../images/Cluster.jpg)

# Preparing for the installation process

Gather information and software before you install HCL Digital Experience.

1.  Check product system requirements.

2.  Log in to [HCL Software Support](https://www.hcltechsw.com/wps/portal/about/welcome.html) and get the software.


# Installing prerequisites

You can use existing prerequisite software installations. Verify that your existing version is supported. If it is not, upgrade to the appropriate version. Otherwise, install a web server, database server, and user registry server. Typically the database and user registry servers are already installed and configured. However, there might be specific configuration steps that are required to integrate them with the portal server. Visit *Installing and preparing the prerequisite software* for more topic information.

1.  Install a web server.

2.  Prepare a database server.

3.  Prepare a user registry.


# Installing the HCL Digital Experience

Installing HCL Digital Experience involves preparing your operating system, installing or upgrading the installation manager, and running the installation program. Visit *Installing the HCL Digital Experience software* for more topic information.

# Applying the latest cumulative fix

Portal maintenance is delivered through individual fixes \(Fixes\) and Combined Cumulative Fixes \(CFs\), which is recommended to your environment.

# Setting up a cluster environment

Start the configuration wizard to set up your clustered environment. First, transfer your database. Then, create the deployment manager and create a cluster node. Then, enable your federated LDAP user registry. Finally, create your additional horizontal cluster nodes using the Configuration Wizard. These instructions are for a horizontal cluster only. For information on setting up a vertical cluster, see Setting up a Cluster in the Configuring section of the documentation.

Log in to HCL Digital Experience to verify that you have a working portal:

```
http://hostname.example.com:10039/wps/portal,
where hostname.example.com is the fully qualified host name of the server where
Portal is running and 10039 is the default transport port that is created by DX® Application Server. The port number might be different
for your environment.
```

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, visit [Apply Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

    **Note:** Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Supported languages](../config/../reference/supportedlanguages.html).

4.  Complete the following steps to transfer your database:
5.  Select **Set Up a Cluster** \> **Database Transfer**.

    **Note:** The **Database Transfer** configuration option in the Configuration Wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database.

6.  Provide information about your environment.

7.  Save your configuration settings.

8.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
9.  Log in to HCL Portal to verify that you have a working portal server.

10. Complete the following steps to create your deployment manager:
11. Select **Set Up a Cluster** \> **Create a Deployment Manager**.

12. Provide information about your environment.

13. Save your configuration settings.

14. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
15. If you changed the context root during the installation or configuration of HCL Digital Experience, then you must complete the optional next step from the Configuration Wizard to update parameters with the new context path after you complete the Create a Deployment Manager configuration option.

16. Log in to HCL Portal to verify that you have a working portal server.

17. Complete the following steps to create a cluster node:
18. Select **Set Up a Cluster** \> **Create a Cluster**.

19. Provide information about your environment.

20. Save your configuration settings.

21. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
22. Log in to HCL Portal to verify that you have a working portal server.

23. Complete the following steps to enable federated security:
24. **Set Up a Cluster** \> **Enable Federated Security**.

    **Note:** If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere Application Server and HCL Portal user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

25. Provide information about your environment.

26. Save your configuration settings.

27. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
28. Log in to HCL Portal to verify that you have a working portal server.

29. Complete the following steps to create extra cluster nodes:
30. Install HCL Digital Portal on the additional node.

    **Tip:** For additional nodes, you only need to install the HCL Portal product binary files. Therefore, on the Features screen of the IBM Installation Manager, ensure that **Portal Server Profile** is not selected.

31. **Set Up a Cluster** \> **Create an Additional Cluster Node**.

    **Note:** If you are setting up a vertical cluster, manual instructions are available for dynamic and static cluster configurations.

32. Provide information about your environment.

33. Save your configuration settings.

34. Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
35. Log in to HCL Portal to verify that you have a working portal server.


# Configuring the web server

-   Move the web server plug-in from the WebSphere Application Server to the web server.


# Tuning the servers in your environment

Tuning the servers is important to the performance of your portal environment. HCL Digital Experience is not tuned for a production environment after installation and deployment. Your database needs tuning for improved performance. You can organize your database now or soon after you finish your configuration. You need to tune and maintain your database on a regular basis.

1.  Run the performance tuning tool to complete an initial tuning of your servers.

2.  Check the tuning guide for more instructions. Use the tuning guide for the previous product version when the tuning guide for the current release is unavailable.


# Configuring a remote search service

Configure the remote search service to offload and balance system load.

1.  Use the IBM Installation Manager to install the remote search service using the IBM Installation Manager.

2.  If you use single-sign on, prepare the security for the remote search service.

3.  Configure the security between portal and the remote search server.

4.  Set the search user ID.

5.  Configure the remote search service.

6.  Configure the seedlist servlet.


# Next steps

Depending on the choices that you made during the installation and set up, there are additional tasks to configure your environment.

The following options are available to continue configuring your environment:

-   **Configure global settings**

    Configure portal behavior.

-   **Change the default portal Uniform Resource Identifier \(URI\)**

    Complete the context root change on the Configuration for HCL Portal: Profile configuration details: Advanced panel during installation.

    If you want to change the context root after installation, change the portal URI.

-   **Adapt the attribute configuration to match the LDAP server**

    Add more attributes via the Virtual Machine Manager.

-   **Configure syndication**

    Configure syndication settings.

-   **Add vertical cluster members**

    Add vertical cluster members.

-   **Configure search**

    Configure search settings.

-   **Update your user registry**

    Update your user registry to capture preferences.


