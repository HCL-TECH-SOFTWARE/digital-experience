# Preparing an Active Directory server

If you plan to use Active Directory as an LDAP user registry, you must install and set up the server so that it can communicate with HCL Digital Experience.

1.  Complete the following steps to install and configure Active Directory:

    1.  Install Windows Server version 2008 or 2012, which includes Active Directory. Refer to the following product documentation for more information: [Windows Server installation and upgrade](https://docs.microsoft.com/en-us/windows-server/get-started/installation-and-upgrade).

    2.  Install the necessary Service Packs.

    3.  Use the Windows Server documentation to install Internet Information Services \(IIS\). Use IIS to export server certificates. It must be installed before you install Certificate Services.

    4.  Use the Windows Server documentation to install Certificate Services if you plan on using Active Directory over SSL.

2.  Complete the following steps as a guide to create the HCL Portal administrative user:

    1.  Create a user with the Windows™ administrative tools.

        **Note:** There is a 20 character limitation for the user account name.

    2.  Set the password for the new user.

    3.  Activate the new user with the Windows administrative tools. Set the msDS-UserAccountDisabled attribute to false.

3.  Complete the following steps to enable SSL for Active Directory; this step sets passwords during sign-up and user creation:

    1.  Install an Enterprise certificate authority on a Windows Domain Controller. It installs a certificate on a server or a third-party certificate on the Domain Controller.

    2.  Click **Start** \> **All Programs** \> **Administrative Tools** \> **Active Directory Users and Computer**.

    3.  In the Active Directory Users and Computers window, right-click on your domain name and select **Properties**.

    4.  In the Domain Properties dialog box, select the **Group Policy** tab.

    5.  Select the **Default Domain Policy** group policy and then click **Edit**.

    6.  Select **Windows Settings** under Computer Configuration.

    7.  Select **Security Settings** and then select **Public Key Policies**.

    8.  Select **Automatic Certificate Request Settings**.

    9.  Use the wizard to add a policy for Domain Controllers.

        **Note:** When these requirements are complete, all domain controllers request a certificate and support LDAP over SSL with port 636.



