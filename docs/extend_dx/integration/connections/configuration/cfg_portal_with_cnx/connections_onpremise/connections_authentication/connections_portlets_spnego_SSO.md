# Configuring single sign-on for portlets with SPNEGO

Configure HCL Connections portlets to use single sign-on with SPNEGO.

Single sign-on \(SSO\) enables users to log in to an HCL Connections application and switch to other applications within the product without having to authenticate again.

There are several different ways to configure SSO. This procedure describes an approach that uses the Kerberos authentication protocol. This authentication method allows users web browsers to prove their identities to one another in a secure manner. After users sign in to their Active DirectoryWindows™ client systems, they are automatically signed into HCL Connections.

Configuring HCL Connections and HCL Portal to share a single deployment manager saves on administration time by combining administration tasks for the two applications. Establishing a single-sign on environment benefits the users by creating a more seamless environment between the two applications.

1.  Before federating Portal as a managed node of the deployment manager of HCL Connections, make sure the realms match between Connections deployment manager and Portal. If you must change the realm names so they match, follow the steps in changing the realm name.

2.  Complete the following steps to collect files from the primary node and copy them to the deployment manager:

    1.  From the wp\_profile\_root/ConfigEngine directory of the primary node, run this task ConfigEngine.bat collect-files-for-dmgr -DWasPassword=password. This task creates a compressed file that contains all the files, which must be copied to the deployment manager. The compressed file, named filesForDmgr.zip, are placed in the wp\_profile\_root/filesForDmgr directory.

    2.  Stop the deployment manager.

    3.  Expand each of the files in the filesForDmgr.zip file into the proper location on the deployment manager based on the directory names within the compressed file. The directory names in the compressed file are based on the typical default directory names. The directory AppServer/profiles/Dmgr01 is used to identify the deployment manager profile root, and the AppServer directory is used to identify the deployment manager installation root directory. If the deployment manager was installed into the default directory \(AppServer\) and the profile was created in the default directory \(AppServer/profiles/Dmgr01\), then the compressed file can be expanded directly into the directory above the AppServer directory.

        For example, /IBM/WebSphere.

    4.  Start the deployment manager.

3.  To augment a deployment manager profile, run the following command from the AppServer\_root/bin directory:

    ```
    manageprofiles.bat -augment -templatePath  c:/IBM/WebSphere/AppServer/profileTemplates/management.portal.augment -profileName Dmgr01
    ```

4.  Restart the deployment manager.

5.  Add the same Portal administration group as an administrators group on the HCL Connections deployment manager.

6.  Run the following command from the wp\_profile\_root/bin directory to federate the primary node:

    ```
    addNode.bat dmgr_hostname dmgr_port -includeapps -includebuses
    -username was_admin_user
    -password was_admin_password
    ```

    For example:

    ```
    addNode.bat DMhost.cn.ibm.com 8879 -includeapps -includebuses -username adminuser -password adminpwd
    ```

7.  On the Portal server, run syncNode.bat and then restart the Deployment manager and all node agents.

8.  To configure the IBM® HTTP Server with single sign-on, delete and readd the webserver on the WebSphere® Application Server Integrated Solutions Console. This configuration remaps all applications including Portal, and imports the Portal certificate into IBM HTTP Server.

9.  To configure the same SPNEGO single sign-on for Portal and Connections.

    1.  Create user for Portal host server on AD.

    2.  Create keytab file for Portal server on AD:

        ```
        ktpass -out path_to_keytab –princ SPN
        
        -mapuser account_name -mapOp set –pass account_password
        ```

        Where:

        -   path\_to\_keytab is the file path where you want to store the generated keytab file.
        -   SPN is the Kerberos service principal name.
        -   account\_name is the service account name.
        -   account\_password is the password that is associated with the service account.
        For example:

        ```
        ktpass -princ HTTP/portal.cn.ibm.com@cn.ibm.com -out c:\portal.keytab -mapuser portaluser -mapOp set -pass Passw0rd
        ```

    3.  Merge the portal keytab into the merged Connections keytab by running the ktab command with the following switch:

        ```
        -m source_keytab_name destination_keytab_name
        ```

        Where:

        -   source\_keytab\_name is the name of the keytab file on the source system.
        -   destination\_keytab\_name is the name of the keytab file on the destination system.
        For example:

        ```
        c:\IBM\WebSphere\AppServer\java\jre\bin>ktab.exe -m y:\SPNEGO\portal.keytab y:\SPNEGO\merged.keytab
        ```

    4.  Re-create the krb5.conf file by using the new merged keytab file:

        ```
        $AdminTask createKrbConfigFile
        
        {
        
        -krbPath appserver\java\jre\lib\security\krb5.conf
        
        -realm REALM
        
        -kdcHost kdc_hostname
        
        -dns dns_hostname
        
        -keytabPath path_to_keytab
        }
        ```

        For example:

        ```
        wsadmin.bat -user adminuser -password adminpwd
        $AdminTask createKrbConfigFile {-krbPath y:\SPNEGO\krb5.conf -realm CN.IBM.COM -kdcHost AD.cn.ibm.com -dns cn.ibm.com -keytabPath y:\SPNEGO\merged.keytab}
        ```

    5.  Enable SPNEGO single sign-on by configuring Kerberos in the WebSphere Application Server Integrated Solutions Console, following the steps in the [Enabling single sign-on for the Windows desktop](https://help.hcltechsw.com/connections/v65/admin/secure/t_install_kerb_setup_spnego.html) topic.

    6.  Synchronize the node and restart the deployment manager node. If you cannot manage the Portal node on the WebSphere Application Server Integrated Solutions Console, manually synchronize the node and restart the deployment manager node.

???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)

