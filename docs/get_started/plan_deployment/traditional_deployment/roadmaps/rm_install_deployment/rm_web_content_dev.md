# HCL Digital Experience roadmap: Web content servers

In this roadmap, the web server, database, and user registry software are distributed to different physical servers.


## Who should use this roadmap

Use this roadmap if you are an organization with the following requirements:

-   An organization that requires an environment to create and test web content before publication to other staging or production servers
-   An organization that must create presentation templates (authoring or presentation) for content authors and content rendering
-   An organization that must create the site structure and entitlements
-   An organization that must develop content with HTML, CSS, JavaScript, JSP, or Java
-   An organization that requires a staging server to perform final quality tests before publishing
-   An organization that requires a server to publish content to users

!!!important
    Developing or publishing web content requires a supported database other than Apache Server. An Apache Server database is available after installation. Therefore, you must switch to a supported database, for example, DB2® or Oracle.

## Topology diagram

The topology for a web content server includes a remote database and LDAP server. The topology depicts an HCL Web Content Manager server, instead of a portal server. When you install HCL Digital Experience, it includes the HCL Web Content Manager. The configuration steps for the web content development server are different from a basic stand-alone server. The web content server configuration includes syndication with the rendering or test server.

![HCL Web Content Manager server with a remote database and LDAP server](../../../../../images/WebContentDevelopment.jpg)

## Preparing for the installation process

Gather information and software before you install HCL Digital Experience.

1.  Check requirements: [Detailed system requirements](../../../../system_requirements/index.md)

2.  Get the software. New and current users must [sign up or register at HCL Software](https://www.hcltechsw.com/wps/portal/about/welcome) and download their preferred HCL Digital Experience package.


## Installing prerequisites

Before you install HCL Digital Experience, install all prerequisites for your environment. You can use current installations for prerequisite software. Verify that your installed versions are supported. If they are not, upgrade to a supported version.

1.  Prepare a database server.

2.  Prepare a user registry.


## Installing HCL Digital Experience

Installing HCL Portal involves preparing your operating system, installing or upgrading the installation manager, and running the installation program. See [Installing the HCL Digital Experience software](../../../../../deployment/install/traditional/installing_dx/index.md).

## Applying the latest cumulative fix

You maintain portals by installing individual Fixes and Combined Cumulative Fixes (CFs), which are suggested for your environment.

## Transferring your database

After you install your web experience, Apache Server is the available database. Depending on your requirements, you might have to transfer to a different database. The Database Transfer configuration option in the Configuration wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database. See [Database Transfer in Configuration Wizard](../../../../../deployment/manage/db_mgmt_sys/dbtransfer_manual/index.md) for more information about this topic.

1. Log in to HCL Portal to verify that your portal workshave a working portal:

```
http://<hostname.example.com>:<10039>/wps/portal
```

where: 
- *hostname.example.com* is the fully qualified host name of the server where
Portal is running
- *10039* is the default transport port that the DX Application server creates. The port number might be different
in your environment.

2.  To get the latest updates for the wizard, apply the most recent CF. For more information about applying the latest fix pack, see [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

Skip the following step, if you have the most recent fix pack applied.

3.  Open the Configuration wizard. Go to http://your_server:10200/hcl/wizard.

    !!! tip 
        If you are working with HCL Digital Experience V8.5 or 9 software at a level prior to CF18, the wizard address is as follows: http://*your_server*:10200/ibm/wizard. After you install CF18, the configuration wizard automatically  adjusts to http://*your_server*:10200/hcl/wizard.

There is a known issue with Chrome version 45.x and the Configuration wizard. If you experience difficulties, use a different browser when you access the wizard.

4.  Log in to the Configuration wizard with the administrative ID for the Configuration wizard profile, cw_profile.

If the language is not currently supported for the user interface, you might see the English version. For details about supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../deployment/manage/portal_admin_tools/language_support/index.md) in the HCL Digital Experience Version 8.5 documentation.

5.  Select **Set Up a Stand-alone Server** \> **Database Transfer**.

6.  Provide the requested information about your environment.

7.  Save your configuration settings.

8.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

9.  To shorten your site URL for search engine optimization, modify your context root and remove navigational state information from your URL by using the **Modify Site URLs for Search Engine Optimization** configuration option.

10.  Log in to HCL Portal to verify that your portal server works.


## Enabling federated security

After you install your web experience, a default file-based repository is the available user registry. Depending on your requirements, you might have to enable a federated LDAP user registry.

!!! note 
    If you set **Use Administrator IDs stored in your LDAP user registry** to ``yes``, the WebSphere® Application Server and HCL Portal user IDs and passwords are changed to the LDAP user IDs and passwords. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to ``no``. After you configure the LDAP user registry, you can manually change the user IDs and passwords.

To enable federated security:
1.  Get the latest updates for the wizard, and apply the most recent CF. For more information about applying the latest fix pack, see [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md)for more topic information.

Skip the next step, if you applied the most recent fix pack.

2.  Open the Configuration wizard. Go to http://your_server:10200/hcl/wizard.

If you are working with HCL Digital Experience V8.5 or 9 software at a level prior to CF18, the wizard address is http://*your_server*:10200/ibm/wizard. After installing CF18, the configuration wizard  automatically adjusts to http://*your_server*:10200/hcl/wizard.

There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration wizard with the administrative ID for the configuration wizard profile, cw_profile.


If your specified language is not supported for the user interface, you might see the English version. For details about supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../deployment/manage/portal_admin_tools/language_support/index.md) in the HCL Digital Experience Version 8.5 documentation.

4.  Select **Set Up a Stand-alone Server** \> **Enable Federated Security**.


If you set **Use Administrator IDs stored in your LDAP user registry** to ``yes``, the WebSphere Application Server and HCL Portal user IDs and passwords are changed to the LDAP user IDs and passwords. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to ``no``. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

5.  Provide the requested information about your environment.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
    
8.  Log in to HCL Portal to verify that your portal server works.


## Tuning the servers in your environment

Tuning the servers is essential for the performance of your portal environment. HCL Portal is not tuned for a production environment after installation and deployment. You must tune the database to improve performance. You can organize your database now or soon after you configure it. You must tune and maintain your database regularly.

Run the performance tuning tool to complete an initial tuning of your servers.


## Configuring the Authoring portlet

Configure the Authoring portlet on your HCL Portal server.

1.  Configure extra Authoring portlet parameters. <!-- How? Can you link to a topic that covers this? This question pertains to all the steps in this procedure -->

2.  Configure the workflow, profiling, and version-control settings.

3.  Configure the Authoring portlet search.

4.  Configure your server to import large files and images.

5.  Configure your server to avoid timeout issues.

6.  Configure remote server access so you can link to files and documents on remote content management systems.

7.  Set up support for federated documents.


## Syndication

Use syndication to synchronize content between authoring, staging, and publishing environments.

1.  Plan your syndication strategies. See [Syndication relationships](../../../../../manage_content/wcm_delivery/syndication/wcm_syndication_overview.md).

2.  Define syndication properties. See [Syndication properties](../../../../../manage_content/wcm_delivery/syndication/wcm_config_prop_syndication.md).

3.  Tune your syndication strategy to improve performance. See [Syndication tuning](../../../../../manage_content/wcm_delivery/syndication/wcm_syndication_tuning.md)

4.  Create your syndication relationships. See [Creating a syndication relationship by using the Administration Portlet](../../../../../manage_content/wcm_delivery/syndication/manage_synd_subs/wcm_syndication_settingup.md)

## Deploying the delivery environment

The delivery environment is used to deliver your website to website viewers. The delivery environment is deployed based on the requirements that you define in the project design document.

1.  Based on the database architecture that is defined in the project design document, the database administrator completes the following steps:

    1.  Deploys a database server for the delivery environment.

    2.  Clones the data that is stored on the authoring database onto the delivery database.

2.  Based on the server architecture that is defined in the project design document, the HCL Portal administrator completes the following steps:

    1.  Installs an HCL Portal server or cluster of servers.

    2.  Configures the HCL Portal server or cluster to use the database server the database administrator set up.

    3.  Configures various WebSphere Application Server, HCL Portal and Web Content Manager configuration properties to ensure that the system is correctly set up for web content delivery and is tuned for optimal performance.

3.  Based on the information architecture and security architecture that is defined in the project design document, the HCL Portal administrator completes the following steps:

    1.  Creates all pages that are required by the web content system.

    2.  Adds all required web content viewer portlets to the appropriate pages.

4.  The HCL Portal administrator configures and enables syndication.

5.  All administrators complete final testing and tuning of the delivery environment.


The delivery environment is ready to use.

## Going live with your website

After your environments are installed, the authoring system is complete, your default content is created, and the system is fully, you are ready to go live.

1.  Ensure that your stakeholders are ready to use your website and authoring system:

    1.  Ensure that your content authors are trained on how to use the new web content authoring system.

    2.  Ensure that legacy authoring or delivery systems are redirected to the new system.

    3.  Start marketing campaigns to bring visitors to the new website.

2.  Based on the maintenance architecture that is defined in the project design document, run regular monitoring and maintenance tasks to ensure that your system operates efficiently.


