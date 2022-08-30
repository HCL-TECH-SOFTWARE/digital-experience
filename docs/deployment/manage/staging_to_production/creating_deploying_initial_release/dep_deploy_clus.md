# Deploying the initial release in a multiple cluster

If you are using a multiple cluster in single cell topology, you must run the empty-portal task before you deploy the initial release and before you deploy the PAA file. Use the -DemptyPortalDuringDeployPAA=false parameter during the deployment.

If you have a single cell with a cluster A and a cluster B, use the following steps after you installed the PAA file on both clusters.

1.  On cluster B, run the following commands.

    -   AIX® HP-UX Linux™ Solaris:

        ```
        ./ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM® i:

        ```
        ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows™:

        ```
        ConfigEngine.bat empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS®:

        ```
        ./ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

2.  On cluster A, do a full resynchronization with the WebSphere® Integrated Solutions Console.

3.  On cluster A, run the following commands:

    -   AIX HP-UX Linux Solaris:

        ```
        ./ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM i:

        ```
        ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows:

        ```
        ConfigEngine.bat empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS:

        ```
        ./ConfigEngine.sh empty-portal -DWasPassword=password -DPortalAdminPwd=password
        ```

4.  On cluster B, do a full resynchronization with the WebSphere Integrated Solutions Console.

5.  On cluster A, run the following commands:

    -   AIX HP-UX Linux Solaris:

        ```
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   IBM i:

        ```
        ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   Windows:

        ```
        ConfigEngine.bat deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   z/OS:

        ```
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

6.  On cluster B, run the following commands:

    -   AIX HP-UX Linux Solaris:

        ```
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   IBM i:

        ```
        ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   Windows:

        ```
        ./ConfigEngine.bat deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```

    -   z/OS:

        ```
        ./ConfigEngine.sh deploy-paa -DappName=WebSpherePortal -DforceDeploy=true -DWasPassword=password -DPortalAdminPwd=password -DemptyPortalDuringDeployPAA=false
        ```



**Previous topic:**[Deploying the initial release](../deploy/dep_deploy.md)

