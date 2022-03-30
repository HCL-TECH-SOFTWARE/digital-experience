# Deploying the initial release 

After you create and prepare your initial staging and production servers, you must install and deploy the contents of the staging server to the production server. If you have a cluster, install and deploy on the primary and secondary nodes of the cluster. After you stage the initial release to production servers, you can install and deploy your differential release to the production servers.

1.  Run the following command from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory of the production server to install and deploy the initial PAA file on the production server:

    -   AIX® HP-UX Linux™ Solaris:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/WebSpherePortal.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM® i:

        ```
        ConfigEngine.sh install-paa -DPAALocation=/WebSpherePortal.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows™:

        ```
        ConfigEngine.bat install-paa -DPAALocation=/WebSpherePortal.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.bat deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS®:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/WebSpherePortal.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

2.  Run the following commands to install and deploy the virtual portal PAA file on the production server:

    -   AIX HP-UX Linux Solaris:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/object\_id.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=object\_id -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    -   IBM i:

        ```
        ConfigEngine.sh install-paa -DPAALocation=/object\_id.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.sh deploy-paa -DappName=object\_id -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    -   Windows:

        ```
        ConfigEngine.bat install-paa -DPAALocation=/object\_id.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.bat deploy-paa -DappName=object\_id -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    -   z/OS:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/object\_id.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=object\_id -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    **Tip:** Where VirtualPortalParameter is one of the following options:

    -   **-DVirtualPortalHostName=myvirtualportal.mycompany.com**

        Use this parameter if you know the host name of the virtual portal.

    -   **-DVirtualPortalContext=VirtualPortal1**

        Use this parameter if you know the context root of the virtual portal.

    If you are deploying multiple Virtual Portals, run list-all-virtual-portals on the source environment, to correctly associate the VirtualPortalParameter value with the same Virtual Portal. For more information, see *Portal configuration tasks for administering virtual portals*.

    **Note:** Anything included in the PAA file is included when you run this command, including Web Content Manager and EAR files. If you created the PAA by setting the `exportWcmData` parameter to `true`, then the Web Content Manager libraries are imported during the deployment step.

3.  If you cloned your JCR database, extra steps are necessary. You must attach the clone JCR after you do the deployment for the base and virtual portals. The JCR database has objectIDs for the virtual portal that must match the source environment. The deploy-paa for the virtual portal does that task, but the deploy-paa for the virtual portals must be done before you attach to the cloned database. Run the following task on the target server to synchronize your vanity URL data. The release database and JCR databases share some vanity URLs. If you clone the JCR database, the sharing is broken. This task fixes those errors.

    -   AIX HP-UX Linux Solaris:

        ```
        ./ConfigEngine.sh sync-vanityurl-data -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM i:

        ```
        ConfigEngine.sh sync-vanityurl-data -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows:

        ```
        ConfigEngine.bat sync-vanityurl-data -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS:

        ```
        ./ConfigEngine.sh sync-vanityurl-data -DWasPassword=password -DPortalAdminPwd=password
        ```

4.  Review the checklist. Export or manually re-create any items that cannot be packaged with the PAA file such as Resource Environment Providers and custom content.

5.  If you use WSRP, review the configuration of the WSRP web services.

    -   If you use your portal as a WSRP producer, manually re-create the web service security configuration of the WSRP service providers. For more information, see the *WSRP services* section.
    -   If you use your portal as a WSRP Consumer, verify the web service security configuration and manually re-create the web service security configuration if needed.
        1.  If you configured WSRP Producer ports for web service security, for example, by using the Web Services admin portlet or XMLAccess, review the web service security configuration.
        2.  If you configured WSRP web service clients, for example, by configuring WSRP service clients through policy sets in the administrative console or by adding service references, you must manually re-create the configuration of the WSRP web service clients. For more information, see the *WSRP services* section.
        3.  If you configured web service security by using an LTPA version 1 token, you can enable those tokens. For more information, see the *WSRP services* section.
        4.  If you configured HTTP-cookie-based single sign-on, for example, by configuring corresponding client cookie forwarding rules, you must review and re-create the resource environment properties for the cookie forwarding rules. For more information, see the *WSRP services* section.
6.  Export search collections from the staging server and import them into the production server. For more information, see *Exporting and importing search collections*. If you are using alternative context root URLs, go to **Manage Search** portlet. To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**. Update the search collection URL links on the staging server to point to the alternative root.

    For example, http://yourdomain.com:port/your\_root/seedlist/myserver?SeedlistId=&Source=com.ibm.workplace.wcm.plugins.seedlist.retriever.WCMRetrieverFactory&Action=GetDocuments

    **Note:** If you installed any additional PAA files on the staging server, they are not included in the initial release PAA. Each additional PAA that was installed and deployed on the staging server must be manually installed and deployed on the production server after the initial release PAA is installed.

7.   If you have a clustered environment, enable automatic synchronization for the nodes and synchronize the nodes.

8.  Restart the server.


**Parent topic:**[Creating and deploying the initial release ](../deploy/dep_initial.md)

**Previous topic:**[Preparing the servers for initial staging ](../deploy/dep_prep.md)

**Next topic:**[Deploying the initial release in a multiple cluster ](../deploy/dep_deploy_clus.md)

**Related information**  


[WSRP services ](../admin-system/wsrpc.md)

[Exporting and importing a web content library](../wcm/wcm_config_wcmlibrary_export.md)

[Portal configuration tasks for administering virtual portals ](../admin-system/advp_cfgtsk.md)

