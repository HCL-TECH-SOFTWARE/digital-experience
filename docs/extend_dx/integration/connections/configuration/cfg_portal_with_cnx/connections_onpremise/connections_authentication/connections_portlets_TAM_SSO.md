# Configuring single sign-on with Security Access Manager

Configure HCL Connections portlets to use single sign-on with IBM Security Access Manager.

Single sign-on \(SSO\) enables users to log in to an HCL Connections application and switch to other applications within the product without having to authenticate again.

There are several different ways to configure SSO. This authentication method allows Security Access Manager and users web browsers to prove their identities to one another in a secure manner.

Configuring HCL Connections and HCL Portal to share a single deployment manager saves on administration time by combining administration tasks for the two applications. Establishing a single-sign on environment benefits the users by creating a more seamless environment between the two applications.

Follow these steps to configure single sign-on.

1.  Before federating Portal as a managed node of the deployment manager of HCL Connections, make sure the realms match between Connections deployment manager and Portal.

    If you must change the realm names so they match, follow the steps in *Changing the realm name*.

2.  Perform the following steps to collect files from the primary node and copy them to the deployment manager:

    1.  From the wp\_profile\_root/ConfigEngine directory of the primary node, run this task `ConfigEngine.bat collect-files-for-dmgr -DWasPassword=password`.

        This task creates a compressed file that contains all the files, which must be copied to the deployment manager. The compressed file, named filesForDmgr.zip, are placed in the wp\_profile\_root/filesForDmgr directory.

    2.  Stop the deployment manager.

    3.  Expand each of the files in the filesForDmgr.zip file into the proper location on the deployment manager based on the directory names within the compressed file. The directory names in the compressed file are based on the typical default directory names. The directory that is called AppServer/profiles/Dmgr01 is used to identify the deployment manager profile root, and the AppServerdirectory is used to identify the deployment manager installation root directory. If the deployment manager was installed into the default directory \(AppServer\) and the profile was created in the default directory \(AppServer/profiles/Dmgr01\), then the compressed file can be expanded directly into the directory above the AppServer directory.

        For example, /IBM/WebSphere

    4.  Start the deployment manager.

3.  To augment a deployment manager profile, run the following command from the AppServer\_root/bin directory:

    ```
    manageprofiles.bat -augment -templatePath  c:/IBM/WebSphere/AppServer/profileTemplates/management.portal.augment -profileName Dmgr01
    ```

4.  Restart the deployment manager.

5.  Add the same Portal administration group as an administrators group on the HCL Connections deployment manager.

6.  Run the following command from the wp\_profile\_root/bin directory to federate the primary node:

    ```
    addNode.bat dmgr\_hostname dmgr\_port -includeapps -includebuses
    -username was\_admin\_user
    -password was\_admin\_password
    
    ```

    For example:

    ```
    addNode.bat DMhost.cn.ibm.com 8879 -includeapps -includebuses -username adminuser -password adminpwd
    ```

7.  On the Portal server, run `syncNode.bat` and then restart the deployment manager and all node agents.

8.  To configure the IBM® HTTP Server with single sign-on, delete and read the web server on the WebSphere® Application Server Integrated Solutions Console. This configuration remaps all applications, including Portal, and imports the Portal certificate into IBM HTTP Server.

9.  Configure Security Access Manager on the Portal server, following the directions in the [Configuring Security Access Manager](../security/tam.md) article that corresponds to your Portal server:

    **Note:** For the connections integration with the portlets, it is important that WebSEAL session cookies are sent to the junction server. This action can be defined by adding the -k option to the commands that create a junction.

10. Configure the ACL for WebSEAL to allow HTTP PUT requests by adding an ACL to the Portal junction.

    1.  Create a default HCL Connections ACL to override the default WebSEAL ACL by running the following commands:

        ```
        acl create lc3-default-acl 
        acl modify lc3-default-acl set user sec_master TcmdbsvaBRlrx
        acl modify lc3-default-acl set any-other Tmdrx
        acl modify lc3-default-acl set unauthenticated T
        acl modify lc3-default-acl set group iv-admin TcmdbsvaBRrxl
        acl modify lc3-default-acl set group webseal-servers Tgmdbsrxl
        ```

    2.  Attach the default ACL to application root URLs:

        ```
        acl attach /WebSEAL/tam_server-WebSEAL_instance/app_root lc3-default-acl
        ```

        where:

        -   tam\_server is the host name of the Security Access Manager server
        -   WebSEAL\_instance is the name of the instance of the WebSEAL server that is configured to manage HCL Connections. For example: default
        -   app\_root is the root path to the HCL Connections applications, including /activities, /blogs, /cognos,/communities,/dogear, /files, /forums, /homepage, /news,/metrics, /mobile, /moderation, /profiles, /search, and /wikis.
        -   lc3-default-acl is the access control list \(ACL\) that you defined. For example, `acl attach /WebSEAL/tam.example.com-default/activities example-default-acl`. In this case, the command is `acl attach /WebSEAL/tam.example.com-default/PORTAL_VHOST_JCT example-default-acl`.


