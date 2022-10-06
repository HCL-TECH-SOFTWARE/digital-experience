# Roadmap: Portlet and theme development environment

This HCL Digital Experience roadmap is ideal for running a portlet and theme development server, which is used to develop and test portlets and themes.


## Who should use this roadmap

Use this roadmap if you are an organization that needs an environment to develop and test your portlets and themes before you go live to the server. Do not use this roadmap to develop web content.

## Topology diagram

The topology for a portlet and theme environment is the same as the demonstration environment. It includes a portal server with a local database. However, the software configuration is different. The topology diagram depicts a portal server that is connected to a code repository for group development. While the topology diagram depicts a server, the portlet and theme environment might be configured on a notebook.

![Portal server with a local database and a code repository.](../rm_standalone_servers/_img/WebContentDevelopment.jpeg)

## Preparing for the installation process

Gather information and software before you install HCL Digital Experience.

1.  Check product system requirements.

2.  Log in to [HCL Software Support](https://www.hcltechsw.com/wps/portal/about/welcome.html) and get the software.


## Installing prerequisites

Before you install HCL Digital Experience, install any prerequisites that are necessary for your environment. You can use existing prerequisite software installations. Verify that your existing version is supported. If it does not, upgrade to the appropriate version.

1.  Prepare a database server.

2.  Prepare a user registry.


## Installing the HCL Digital Experience

Installing HCL Digital Experience involves preparing your operating system, installing or upgrading the installation manager, and running the installation program. Visit *Installing the HCL Digital Experience software* for more topic information.

## Applying the latest cumulative fix

Portal maintenance is delivered through individual fixes (Fixes) and Combined Cumulative Fixes (CFs), which is recommended to your environment.

## Transferring your database

After you install your web experience, Apache Server is your available database. Depending on your requirements, you might need to transfer to a different database. The **Database Transfer** configuration option in the Configuration Wizard assigns users and permissions, creates databases, obtains support for database collation, and transfers your database.

Log in to HCL Digital Experience to verify that you have a working portal:

```
http://hostname.example.com:10039/wps/portal,
where hostname.example.com is the fully qualified host name of the server where
Portal is running and 10039 is the default transport port that is created by DX® Application Server. The port number might be different
for your environment.
```

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, visit [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

    !!!note
        Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!!note "Restriction"
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw_profile.

    !!!note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md).

4.  Select **Set Up a Stand-alone Server > Database Transfer**.

5.  Provide information about your environment.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally

8.  If you want to shorten your site URL for search engine optimization benefits, you can modify your context root and remove navigational state information from your URL by using the **Modify Site URLs for Search Engine Optimization** configuration option.

9.  Log in to HCL Digital Experience to verify that you have a working portal server.


## Enabling federated security

After you install your web experience, a default file-based repository is your available user registry. Depending on your requirements, you might need to enable a federated LDAP user registry.

!!!note
    If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere® Application Server and HCL Portal user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, visit [Apply Combined Cumulative Fix](../../../../../../deployment/install/traditional/cf_install/index.md) for more topic information.

    !!!note
        Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard. Go to http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

    !!!note "Restriction"
        There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw_profile.

    !!!note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md).

4.  Select **Set Up a Stand-alone Server> Enable Federated Security**.

    !!!note
        If you set **Use Administrator IDs stored in your LDAP user registry** to yes, the WebSphere Application Server and HCL Digital Experience user IDs and passwords are changed to the LDAP user ID and password. If you do not want to change both user IDs and passwords to match the LDAP user ID and password, set this value to no. After you configure your LDAP user registry, you can manually change the user IDs and passwords.

5.  Provide information about your environment.

6.  Save your configuration settings.

7.  Choose one of the following options:

    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.
    
8.  Log in to HCL Digital Experience to verify that you have a working portal server.


## Tuning the servers in your environment

Tuning the servers is important to the performance of your portal environment. HCL Digital Experience is not tuned for a production environment after installation and deployment. Your database needs tuning for improved performance. You can organize your database now or soon after you finish your configuration. You need to tune and maintain your database on a regular basis.

-   Run the performance tuning tool to complete an initial tuning of your servers.


## Change to developer mode

Change your stand-alone server to developer mode to improve startup performance.

