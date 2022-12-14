# Deploying the differential release

After you create the differential release PAA file, you can install and deploy your differential release to the production servers. If you have a cluster, install and deploy on the primary and secondary nodes of the cluster.

1.  Run the following command from the wp_profile_root/ConfigEngine directory of the production server to uninstall and delete any existing differential PAA files:

    -   AIX® and Linux™:

        ```
        ./ConfigEngine.sh uninstall-paa -DappName=WebSpherePortalUpdate -DWasPassword=password -DPortalAdminPwd=password
        
        ./ConfigEngine.sh delete-paa -DdeleteAll=true
        ```

    -   Windows™:

        ```
        ConfigEngine.bat uninstall-paa -DappName=WebSpherePortalUpdate -DWasPassword=password -DPortalAdminPwd=password
        
        ConfigEngine.bat delete-paa -DdeleteAll=true
        ```

2.  Run the following command to install and deploy the differential PAA file:

    -   AIX and Linux:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/WebSpherePortalUpdate.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortalUpdate -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows:

        ```
        ConfigEngine.bat install-paa -DPAALocation=/WebSpherePortalUpdate.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.bat deploy-paa -DappName=WebSpherePortalUpdate -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password
        ```

3.  Run the following command from the wp_profile_root/ConfigEngine directory of the production server to uninstall virtual portal updated PAA files:

    -   AIX and Linux:

        ```
        ./ConfigEngine.sh uninstall-paa -DappName=object\_idUpdated.paa -DWasPassword=password -DPortalAdminPwd=password
        
        ./ConfigEngine.sh delete-paa -DdeleteAll=true
        ```

    -   Windows:

        ```
        ConfigEngine.bat uninstall-paa -DappName=object\_idUpdated.paa -DWasPassword=password -DPortalAdminPwd=password
        
        ConfigEngine.bat delete-paa -DdeleteAll=true
        ```

4.  Run the following commands to install and deploy the virtual portal PAA file:

    -   AIX and Linux:

        ```
        ./ConfigEngine.sh install-paa -DPAALocation=/object\_idUpdated.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ./ConfigEngine.sh deploy-paa -DappName=object\_idUpdated -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    -   Windows:

        ```
        ConfigEngine.bat install-paa -DPAALocation=/object\_idUpdated.paa -DWasPassword=password -DPortalAdminPwd=password -Dwp.si.offlineMode=true
        
        ConfigEngine.bat deploy-paa -DappName=object\_idUpdated -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalParameter=value
        ```

    !!!note "Tip"
        Where VirtualPortalParameter is one of the following options:

        -   **-DVirtualPortalHostName=myvirtualportal.mycompany.com**

        Use this parameter if you know the host name of the virtual portal.

        -   **-DVirtualPortalContext=VirtualPortal1**

        Use this parameter if you know the context root of the virtual portal.

        If you are deploying multiple Virtual Portals, run list-all-virtual-portals on the source environment, to correctly associate the VirtualPortalParameter value with the same Virtual Portal. For more information, see *Portal configuration tasks for administering virtual portals*.

    !!!note
        Run syndication for Web Content Manager differential content.

5.  If you have a clustered environment, enable automatic synchronization for the nodes and synchronize the nodes.

6.  Complete this step if PAA files include shared libraries. If you included -DsharedAppResourcesRootDir and -DsharedExtResourcesRootDir when the differential and initial release was created, remove the shared library that was created during deployment of the initial release. For example, if you included the sample.jar file in the initial release PAA, and updated the sample.jar file in the differential release PAA, there is a class path conflict with this JAR file that is included in two locations. Find and remove the following JAR files from initial deployment:

    -   wp_profile_root/paa/WebSpherePortal/components/WebSpherePortal.shared/shared/ext/sample.jar
    -   wp_profile_root/paa/WebSpherePortal/components/WebSpherePortal.shared/shared/app/sample.jar

7.  Restart the server.

???+ info "Related information"  
    -   [WSRP services](../../../../extend_dx/development_tools/wsrp/index.md)<br>
    -   [Exporting and importing a web content library](../../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export.md)<br>
    -   [Portal configuration tasks for administering virtual portals](../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/portal_cfg_adm_vp/index.md)