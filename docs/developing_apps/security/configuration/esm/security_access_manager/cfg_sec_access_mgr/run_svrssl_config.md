# Creating the PdPerm.properties file

The PdPerm.properties file configures the Access Manager Java Run Time Environment \(AMJRTE\). You must create the PdPerm.properties file before you configure IBM Security Access Manager for authentication, authorization, Credential Vault, or user provisioning. Run the run-svrssl-config task to create the files. This task also creates the keystore file that is used to encrypt communication with Security Access Manager.

**Cluster note:** Complete these steps on every node in the cluster.

**Additional notes:**

-   Prerequisites must be followed prior to executing the following steps. Refer to the Help Center topic [Security Access Manager prerequisites](tam_prereq.md) for more information.
-   The updated PD.jar file must also be in place prior to executing the following steps.

1.  Use a text editor to open the wkplc\_comp.properties file in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Enter the following parameters in the wkplc\_comp.properties file; go to the AMJRTE connection parameters heading:

    **Cluster note:** Complete this step on all nodes in the cluster. The following parameters must match on all nodes in the clustered environment. The one exception is the wp.ac.impl.PDServerName parameter.

    1.  For wp.ac.impl.PDAdminId, type the user ID for the administrative Security Access Manager user.

    2.  For wp.ac.impl.PDPermPath, type the fully qualified path and file name where the PdPerm.properties file is created.

    3.  For wp.ac.impl.PDServerName, type the unique application name that is used to create a server in the Security Access Manager Policy server. The application name is an arbitrary name but must be unique for this server instance. You might want to use the node name for this HCL Portal server instance.

        **Cluster note:** The wp.ac.impl.PDServerName parameter represents an individually configured AMJRTE connection to Security Access Manager. Therefore, each node in the cluster must specify a unique value for the wp.ac.impl.PDServerName parameter before you run the run-svrssl-config task. If the cluster has four nodes, set this parameter differently on each node; for example, amwp81, amwp82, amwp83, and amwp84.

    4.  For wp.ac.impl.SvrSslCfgPort, type the configuration port for the application name. The property is ignored by the SvrSslCfgPort.

    5.  For wp.ac.impl.SvrSslCfgMode, type the configuration mode of the SvrSslCfg command. The only valid value is remote.

    6.  For wp.ac.impl.TamHost, type the host name of the Security Access Manager Policy server that is used when you run PDJrteCfg.

    7.  For wp.ac.impl.PDPolicyServerList, type the host name, port, and priority combinations for your Security Access Manager Policy servers that are used when you run SvrSslCfg.

    8.  For wp.ac.impl.PDAuthzServerList, type the host name, port, and priority combination for your Security Access Manager authorization servers.

    9.  For wp.ac.impl.PDKeyPath, type the fully qualified path and file name of the location for the keystore file. This file is created when you run the run-svrssl-config task. The keystore file holds the keys that are used to encrypt communication between the Portal node and the Security Access Manager server.

    10. For wp.ac.impl.JavaHome, type the directory name of your environment where IBM Java for WebSphere Application Server by located. By default, this value is the $\{WasHome\}/AppServer/java/jre directory. However, the value may vary by environment \(e.g. It may be $\{WasHome\}/AppServer/java/8.0/jre in your environment.\).

3.  Save your changes to the properties file.

4.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

5.  Run the following task to create the PdPerm.properties file:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh run-svrssl-config -Dwp.ac.impl.PDAdminPwd=password -DWasPassword=password
    -   IBM® i: ConfigEngine.sh run-svrssl-config -Dwp.ac.impl.PDAdminPwd=password -DWasPassword=password
    -   Windows™: ConfigEngine.bat run-svrssl-config -Dwp.ac.impl.PDAdminPwd=password -DWasPassword=password
    **Note:** If the configuration task fails, validate the values in the wkplc\_comp.properties file.

    The following files are created:

    -   PdPerm.properties

        **Note:** This file is in the directory path you specified for the wp.ac.impl.PDPermPath parameter.

    -   pdperm.ks

        **Note:** This file is in the directory path you specified for the wp.ac.impl.PDKeyPath parameter.


**Parent topic:**[Configuring Security Access Manager](../security/tam.md)

**Related information**  


[Configuring Security Access Manager for authentication only](../security/cfg_tam_auth.md)

[Configuring Security Access Manager for authorization](../security/tam_setup_esm.md)

[Configuring the Credential Vault adapter for Security Access Manager](../security/tam_vault.md)

[Configuring Security Access Manager for authentication, authorization, and the Credential Vault](../security/tam_prov_usrs.md)

[Enabling user provisioning](../security/usr_prov.md)

