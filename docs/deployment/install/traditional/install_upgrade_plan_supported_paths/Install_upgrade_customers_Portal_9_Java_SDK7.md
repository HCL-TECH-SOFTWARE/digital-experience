# Installation and upgrade for customers running on Portal 9.0 on WAS 8.5/9.0 and Java SDK 7.0

This guide shows how to upgrade your HCL Portal 9.0 environment to HCL Portal 9.5 and either staying at IBM WebSphere Application Server ND 8.5.x or migrating the WAS layer to IBM WebSphere Application Server ND Version 9.0.5.

## Preparing the environment
Before you install HCL Digital Experience, review the [hardware and software requirements](../../../../get_started/system_requirements/index.md) to ensure that you have the supported versions of prerequisite and co-requisite software and the required hardware.

Make sure to also review the [detailed requirements article](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514) to ensure that your system meets or exceeds the minimum requirements provided by HCL.

### Preparing your operating system for installation

- [Preparing your AIX operating system](../installing_dx/aix/prep_os-AIX.md)

- [Preparing your Linux operating system](../installing_dx/linux/prep_os-linux.md)

- [Preparing your Windows OS](../installing_dx/windows/prep_os-windows.md)

## Getting the software
Product software can be obtained from the [HCL Software Licensing Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do).

Additional guidance is available here: [Step-by-step guide on downloading HCL Digital Experience products](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0077878).

1. Sign in to the HCL Software Licensing Portal.

2. Identify the Portal 9.5 offering you want to install.

    !!! note 
        There are several different Portal 9.5 offerings. Your license determines which offerings you will see listed as available to download.

    Example package names for the different Portal 9.5 offerings are:

    - HCL Portal Express v9.5 Multiplatform

    - HCL Portal Server v9.5 MP

    - HCL Portal Enable v9.5 Multiplatform

    - HCL Portal Extend v9.5MP

    In this example, we will use HCL Portal Enable v9.5 Multiplatform.

3. Click on the **HCL Portal Enable v9.5 Multiplatform** package.

4. On the package page, you will see a long list of parts/components. But you only need to download the following four (4) files:

    - HCL-Portal-95_Enable_SETUP-01.zip

    - HCL-Portal-95_Enable_SETUP-02.zip

    - HCL-Portal-95_Enable_SETUP-03.zip

    - HCL-Portal-95_Enable_SETUP-04.zip

    !!! note 
        The zip files above contain all the software required to install:

        -  Portal 9.5 including Installation Manager

        - WebSphere Application Server
        
        - Portal CF17, etc.


## Preparing the files for install

Once you have the parts downloaded, create a parent folder wherein the files are to be extracted. You can name it as portal95binaries as shown in the example below: ![](../../../../images/rename_Portal_binary_file_9.png)

Extract the .zip files to the created parent folder. Once all four (4) files are extracted, you should have a folder called SETUP under your parent folder as shown below: ![](../../../../images/extract_Portal_files_setup_9.png)

Navigate to the **SETUP** folder, there should be a Product folder that holds the files and repositories for WAS 9.0.x, JDK 8.0.x, Portal 8.5.0.0, CF17 for Portal 8.5, Portal 9.5, and iFix PI59896. ![](../../../../images/Portal_95_new_user_files_installation_9.png)

## Use Installation Manager to upgrade HCL Portal 9.0 to CF17 or a later CF

Read the installation instructions and additional system consideration before applying a cumulative fix to a stand-alone, cluster, remote search and farm portal installation or to roll back the cumulative fix.

    !!! note
        There are several different methods to install the cumulative fix as stated on [Combined Cumulative Fix Strategy](../../traditional/cf_install/index.md) page. The sample procedure below is using a Graphical User Interface.

Portal now needs to be upgraded to CF17 to support the installation of HCL Portal 9.5.

We will need to stop the Portal Server and ConfigWizard to allow us to proceed with the upgrade.

1. Open a Command Prompt and navigate to `<wp_profile_root>/bin`.

2. Run:

    `stopServer.bat HCL Portal and HCL Web Content Manager`

3. Enter Portal credentials when prompted.

4. Navigate to `<AppServer_root>/profiles/cw_profile/bin`.

5. Run:

    `stopServer.bat server1`

6. Enter ConfigWizard credentials when prompted.

    Before proceeding, HCL highly recommends that you take a backup of your system. Please review the following links for further details.

    - Documentation resource: [Backup and restore](../../../manage/backup_restore/index.md)

    - Documentation resource: [How to backup HCL Portal [Video]](https://www.youtube.com/watch?v=3cjA9IUMJow)

7. Open **IBM Installation Manager (IIM)** and under File > Preferences > Repositories, add the following repository as shown in the image below: ![](../../../../images/Add_Portal_85_CF17_repository_config_9.png)

    !!! reminder
        Remove the previous repository entries.
    
    Select **OK**.

8. Within IIM, select **Update** icon, then select the Portal package. ![](../../../../images/Select_update_and_Portal_package_9.png)

    Select **Next**.

9. Select CF17 package. ![](../../../../images/Select_CF17_package_9.png)

    !!! reminder
        You must stop Portal Server/ConfigWizard to proceed.

    Select **Next**.

10. Review validation results. Select **Next**.

11. Accept terms of licensing agreement. Then select **Next**.

12. Review Features that are going to be installed. Select **Next**.

13. Select **Update**.

**At this point ONLY the Portal binaries have been updated to CF17**. The IIM only manages the binaries so we will need to run a Portal script to upgrade the profile.

### Updating the profile

1. Ensure the HCL Portal and HCL Web Content Manager server is stopped on the profile you intend to upgrade.

2. Execute the following command from within the path of the profile to configure:

    Unix/Linux: `<profile_root>/PortalServer/bin/applyCF.sh -DPortalAdminPwd=<password> -DWasPassword=<password>`

    Windows: `<profile_root>\PortalServer\bin\applyCF.bat -DPortalAdminPwd=<password> -DWasPassword=<password>`

Validate if the server has been updated to CF17. Log in and check the about HCL Portal and see if it says CF17.

## Use Installation Manager to upgrade HCL Portal 9.0 to HCL Portal 9.5

Make sure the server is stopped before doing the following steps:

1. Add the HCL Portal 9.5 repositories to IIM.
    
    In this case, we are using the Enable offering so need the following repo: Server and Enable.

    For the other offerings, this is what you need for each:

    - Enable Offering: needs Server and Enable repo

    - Express Offering: needs Express repo
    
    - Extend Offering: needs Extend and Server repo
    
    - Server Offering: needs Server repo ![](../../../../images/Add_HCL_Portal_95_repositories_IIM_9.png)

    !!! reminder
        Remove the previous repository.
    
    Select **OK**.

2. Within IIM, select **Install** option. Select both packages. ![](../../../../images/Select_Install_option_IIM_both_packages_9.png)

    Select **Next**.

3. Accept terms of licensing agreement. Then select **Next**.

4. Use existing Portal 8.5 package. ![](../../../../images/Use_existing_Portal_85_package_IIM_9.png)

    Select **Next**.

5. Enter Admin user id and password for WebSphere Application Server and Portal Server. Then select **Next**.

6. Review Summary. Select **Install**. ![](../../../../images/Review_Summary_Select_install_95_9.png)

    !!! note
        During the install, a series of ConfigEngine tasks will be run to upgrade Portal 9.0 to 9.5 so upgrading the profile after is not required.

7. When the installation is finished, you should now be able to verify that you can access your Portal in an internet browser by navigating to: 

    - http://myportal.hcl.com:10039/wps/portal.
    
    - Check the About WebSphere Portal portlet to make sure it says 9.5.

This completes the upgrade to HCL Portal 9.5 standalone.

## Optional: Migrate your IBM WebSphere Application Server to 9.0.5

WebSphere Application Server 9.0.5 is only supported on HCL Digital Experience 9.5. You should first upgrade to HCL Portal 9.5 before you migrate to IBM WebSphere Application Server 9.0.5.

Refer to [Migrating an HCL Digital Experience cluster to IBM WAS 9.0.5](https://help.hcltechsw.com/digital-experience/9.5/was/ug_wasclus95.html) to proceed with the migration process.

## Install the latest supported version of IBM WebSphere SDK Java Technology

Starting with HCL Digital Experience Combined fix pack 12, you can change your SDK Java Technology Edition to version 8.0.

- Documentation resource: For [AIX: Upgrading the SDK](../installing_dx/aix/sdk_upgrade-AIX.md)

- Documentation resource: For [Linux: Upgrading the SDK](../installing_dx/linux/sdk_upgrade-linux.md)

- Documentation resource: For [Windows: Upgrading the SDK](../installing_dx/windows/sdk_upgrade-windows.md)