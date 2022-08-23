# Configuring eTrust SiteMinder

HCL Digital Experience supports the use of Computer Associates eTrust SiteMinder for authentication and authorization.

Before you configure eTrust SiteMinder for authentication or authorization, you must complete the following tasks:

1.  Install and configure HCL Digital Experience, including databases and LDAP user registry.

2.  Install Computer Associate's Policy Server.

3.  Install the eTrust SiteMinder Software Development Kit on the same server as HCL Digital Experience if you plan to use eTrust SiteMinder for both authentication and authorization. Refer to the eTrust SiteMinder documentation for more information.

4.  Install the eTrust SiteMinder Application Server Agent. Configure the eTrust SiteMinder Trust Association Interceptor \(TAI\). Follow the instructions in the eTrust SiteMinder documentation

    **Note:** Copy the smagent.properties file from the eTrust SiteMinder application server agent installation directory to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory. By default, the Application Server Agent installation enables agents other than the one used for authentication. These agents are not tested with HCL Digital Experience and should be disabled. Modify the following files in the eTrust SiteMinder installation directory to set EnableWebAgent=no:

    By default, the Application Server Agent installation enables agents other than the one used for authentication. These agents are not tested with HCL Digital Experience and must be disabled. Modify the following files in the eTrust SiteMinder installation directory to set EnableWebAgent=no:

    -   AsaAgent-az.conf
    -   AsaAgent-auth.conf
5.  If you plan to use eTrust SiteMinder for both authentication and authorization, ensure that the following two files are in the WebSphere® Application Server lib/ext directory.

    -   smjavasdk2.jar
    -   cryptoj.jar
    If the directory is missing the JAR files, copy them from the eTrust SiteMinder SDK CA/sdk/java directory.

6.  Configure the security provider. Go to [Configure the JVM to Use the JSafeJCE Security Provider](https://knowledge.broadcom.com/external/article/31084/jsafejce-is-not-installed-as-a-security.html) for instructions.

7.  Create and specify the following eTrust SiteMinder Domain objects if you plan to use eTrust SiteMinder for both authentication and authorization. Refer to the eTrust SiteMinder Policy Design documentation for information about how to create these objects:

    -   **User Directory**: The LDAP server and suffix
    -   **Authentication Scheme**: Associates with the eTrust SiteMinder realms that HCL Portal creates.

        **Note:** An eTrust SiteMinder realm is different from an LDAP realm or a basic authentication realm. Within the eTrust SiteMinder administrative console, a realm is an administrative object that represents a protected URL root. An example is `/wps/myportal`. eTrust SiteMinder realms in combination with eTrust SiteMinder policies determine which users and groups are allowed to go to the protected URL root and its child URL.

    -   **Agent**: An eTrust SiteMinder WebAgent that is configured to support 4.x agents or a custom eTrust SiteMinder agent. The agent must have a static shared secret to allow communication with the eTrust SiteMinder Policy Server.

Choose the appropriate task to configure eTrust SiteMinder:

-   **[Configuring eTrust SiteMinder for authentication and authorization](../security/conf_sit.md)**  
You can configure Computer Associates eTrust SiteMinder to perform both authentication and authorization for HCL Digital Experience. Using eTrust SiteMinder to perform only authorization is not supported at this time.
-   **[Configuring eTrust SiteMinder to perform authentication](../security/sit_setup_auth.md)**  
HCL Digital Experience includes a configuration task called enable-sm-tai. This task interacts with IBM WebSphere Application Server security configuration to enable the eTrust SiteMinder TAI and to create it as one of the interceptors. You can configure eTrust SiteMinder to provide authentication independently from configuring it to provide authorization. Using it to perform authorization only is not supported at this time.
-   **[Configuring eTrust SiteMinder to perform authorization](../security/sit_setup_esm.md)**  
You can configure Computer Associates eTrust SiteMinder to perform authorization independently from configuring it to perform authentication. However, if you use eTrust SiteMinder to perform authorization for HCL Digital Experience, you should also use it to perform authentication. Using eTrust SiteMinder to perform only authorization is not supported at this time.
-   **[Removing eTrust SiteMinder](../security/sit_deconfig.md)**  
After you have installed and used Computer Associates eTrust SiteMinder, you may find that you no longer require its use. You can then remove it from the HCL Digital Experience environment and restore authentication capabilities to IBM WebSphere Application Server and authorization capabilities to HCL Digital Experience.


