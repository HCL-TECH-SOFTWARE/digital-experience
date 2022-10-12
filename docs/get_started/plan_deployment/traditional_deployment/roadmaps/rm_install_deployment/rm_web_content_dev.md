# HCL Digital Experience roadmap: Web content servers

In this roadmap, the web server, database, and user registry software are distributed to different physical servers.


# Who should use this roadmap

Use this roadmap if you are an organization with the following requirements:

-   An organization that needs an environment to create and test your web content before they publish to other staging or production servers
-   An organization that needs to create presentation templates \(Authoring or Presentation\) for content authors and content rendering
-   An organization that needs to create the site structure and entitlements
-   An organization that needs to develop content with HTML, CSS, JavaScript, JSP, or Java.
-   An organization needs a staging server to perform final quality tests before publishing.
-   An organization needs a server to publish content to end users.

**Important:** Developing or publishing web content requires a supported database other than Apache Server. An Apache Server database is available after installation. Therefore, you must transfer to a supported database; for example DB2® or Oracle.

## Topology diagram

The topology for a web content server includes a remote database and LDAP server. The topology depicts an HCL Web Content Manager server, instead of a portal server. When you install HCL Digital Experience, it includes the HCL Web Content Manager. The configuration steps for the web content development server are different from a basic stand-alone server. The web content server configuration includes syndication with the rendering or test server.

![HCL Web Content Manager server with a remote database and LDAP server](../images/WebContentDevelopment.jpg)

# Preparing for the installation process

Gather information and software before you install HCL Digital Experience.

1.  Check requirements.

    -   Documentation resource: [Detailed system requirements](../overview/inst_req.md)
2.  Get the software. New and existing users need to [sign up or register at HCL Software](https://www.hcltechsw.com/wps/portal/about/welcome) and download their preferred HCL Digital Experience package.


# Installing prerequisites

Before you install HCL Digital Experience, install any prerequisites that are necessary for your environment. You can use existing prerequisite software installations. Verify that your existing version is supported. If it does not, upgrade to the appropriate version.

1.  Prepare a database server.

2.  Prepare a user registry.


# Installing the HCL Digital Experience

Installing HCL Portal involves preparing your operating system, installing or upgrading the installation manager, and running the installation program.

-   Documentation resource: [Installing the HCL Digital Experience software](inst_web_experience.md)

# Applying the latest cumulative fix

Portal maintenance is delivered through individual fixes \(Fixes\) and Combined Cumulative Fixes \(CFs\), which is recommended to your environment.

# Transferring your database

After you install your web experience, Apache Server is your available database. Depending on your requirements, you might need to transfer to a different database. The **Database Transfer** configuration option in the Configuration Wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database. See [Database Transfer in Configuration Wizard](../eua-workflows/kc-db-parent.md) for more information about this topic.

Log in to HCL Portal to verify that you have a working portal:

```
http://hostname.example.com:10039/wps/portal,
where hostname.example.com is the fully qualified host name of the server where
Portal is running and 10039 is the default transport port that is created by DX® Application Server. The port number might be different
for your environment.
```

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, visit [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

    **Note:** Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Supported languages](../config/../reference/supportedlanguages.html) in the HCL Digital Experience Version 8.5 documentation.

4.  Select **Set Up a Stand-alone Server** \> **Database Transfer**.

5.  Provide information about your environment.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
8.  If you want to shorten your site URL for search engine optimization benefits, you can modify your context root and remove navigational state information from your URL by using the **Modify Site URLs for Search Engine Optimization** configuration option.

9.  Log in to HCL Portal to verify that you have a working portal server.


# Enabling federated security

After you install your web experience, a default file-based repository is your available user registry. Depending on your requirements, you might need to enable a federated LDAP user registry.

**Note:** If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere® Application Server and HCL Portal user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, visit [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md)for more topic information.

    **Note:** Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Supported languages](../config/../reference/supportedlanguages.html) in the HCL Digital Experience Version 8.5 documentation.

4.  Select **Set Up a Stand-alone Server** \> **Enable Federated Security**.

    **Note:** If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere Application Server and HCL Portal user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

5.  Provide information about your environment.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
8.  Log in to HCL Portal to verify that you have a working portal server.


# Tuning the servers in your environment

Tuning the servers is important to the performance of your portal environment. HCL Portal is not tuned for a production environment after installation and deployment. Your database needs tuning for improved performance. You can organize your database now or soon after you finish your configuration. You need to tune and maintain your database on a regular basis.

-   Run the performance tuning tool to complete an initial tuning of your servers.


# Configuring the Authoring portlet

Configure your Authoring portlet on your HCL Portal server.

1.  Configure extra Authoring portlet parameters.

2.  Configure the workflow, profiling, and version control settings.

3.  Configure the Authoring portlet search.

4.  Configure your server to import large files and images.

5.  Configure your server to avoid timeout issues.

6.  Configure remote server access so you can link to files and documents on remote content management systems.

7.  Set up support for federated documents.


# Syndication

Use syndication to synchronize content between authoring, staging, and publishing environments.

1.  Plan your syndication strategies.

    -   Documentation resource: [Syndication relationships](../wcm/wcm_syndication_overview.md)
2.  Define syndication properties.

    -   Documentation resource: [Syndication properties](../wcm/wcm_config_prop_syndication.md)
3.  Tune your syndication strategy to improve performance.

    -   Documentation resource: [Syndication tuning](../wcm/wcm_syndication_tuning.md)
4.  Create your syndication relationships.

    -   Documentation resource: [Creating a syndication relationship by using the Administration Portlet](../panel_help/wcm_syndication_settingup.md)

# Deploying the delivery environment

The delivery environment is used to deliver your website to your website viewers. The delivery environment is deployed based on the requirements that are defined in the project design document.

1.  Based on the database architecture that is defined in the project design document, the database administrator does the following:

    1.  Deploys a database server for the delivery environment.

    2.  Clones the data that is stored on the authoring database onto the delivery database.

2.  Based on the server architecture that is defined in the project design document, the HCL Portal administrator does the following:

    1.  Installs a HCL Portal server or cluster of servers.

    2.  Configures the HCL Portal server or cluster to use the database server setup by the database administrator.

    3.  Configures various WebSphere Application Server, HCL Portal and Web Content Manager configuration properties to ensure that the system is correctly set up for web content delivery and is tuned for optimal performance.

3.  Based on the information architecture and security architecture that is defined in the project design document, the HCL Portal administrator:

    1.  Create all pages that are required by the web content system.

    2.  Adds all required web content viewer portlets to the appropriate pages.

4.  The HCL Portal administrator configures and enables syndication.

5.  Final testing and tuning of the delivery environment is undertaken by all administrators.


The delivery environment is now ready to use.

# Going live with your website

When your environments are installed, the authoring system is completed, your default content is created, and fully tested the system, you are ready to go live.

1.  Ensure that your stakeholders are ready to use your website and authoring system:

    1.  Ensure that your content authors are trained on how to use the new web content authoring system.

    2.  Ensure that any legacy authoring or delivery systems are redirected to the new system.

    3.  Start marketing campaigns to bring visitors to the new website.

2.  Based on the maintenance architecture that is defined in the project design document, you run regular monitoring and maintenance tasks to ensure that your system is operating efficiently.


