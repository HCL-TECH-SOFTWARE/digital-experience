# Configure Single Sign-On \(SSO\) for \(DAM\)

This section provides the steps on how to configure SSO for Digital Asset Management.

## Configure single sign-on \(SSO\) across the HCL Digital Experience 9.5 container deployments to share Digital Asset Management media assets

HTTP single sign-on preserves user and session authentication on different web applications. By using HTTP single sign-on \(SSO\), the HCL Digital Asset Management application is not prompted for security credentials when communicating with HCL Digital Experience container services within a trust domain.

The trust domain in an HCL Digital Experience 9.5 container deployment includes the following applications and servers:

-   Cooperating applications such as HCL Digital Experience 9.5 core platform containers:

HCL Digital Experience

```
https://dx-deployment-service-comm-stage-comm-stage.apps.hcl-dxdev.hcl-dx-dev.net/wps/portal
```

-   Cooperating but disparate WebSphere Application Server Network Deployment servers:

IBM WebSphere Application Server:

```
https://dx-deployment-service-was-home-comm-stage.apps.hcl-dxdev.hcl-dx-dev.net/ibm/console/logon.jsp
```

In an SSO scenario, an HTTP cookie is used to propagate a service authentication information to disparate web servers. This propagation relieves the server or user from having to enter authentication information for every new client/server session \(assuming basic authentication\).

HCL Digital Experience can read and generate the Lightweight Third Party Authentication \(LTPA\) cookie, which is used to pass SSO credentials between WebSphere Application Server applications. The default mechanism to support SSO requires HCL Digital Experience to be used as the common user repository that is shared by all of the applications that require SSO.

To configure single sign-on between HCL Digital Experience staging and production environments to promote Digital Asset Management assets to the production server, complete the following steps:

-   HCL Digital Experience 9.5 staging services:

    -   HCL Digital Experience container core services:
            ```
            https://dx-deployment-service-comm-stage-comm-stage.apps.hcl-dxdev.hcl-dx-dev.net/wps/portal
            ```

    -   IBM WebSphere Application Server:
            ```
            https://dx-deployment-service-was-home-comm-stage.apps.hcl-dxdev.hcl-dx-dev.net/ibm/console/logon.jsp
            ```


-   HCL Digital Experience 9.5 target production services:

    -   HCL Digital Experience core services:

        ```
        https://dx-deployment-service-comm-target-comm-target.apps.hcl-dxdev.hcl-dx-dev.net/wps/portal
        ```

    -   IBM WebSphere Application Server:

        ```
        https://dx-deployment-service-was-home-comm-target.apps.hcl-dxdev.hcl-dx-dev.net/ibm/console/logon.jsp
        ```


1.  In the HCL Digital Experience 9.5 container staging server, access the WebSphere Application Server console to generate an LTPA token and define a domain. See the following:
    -   Generate the LTPA.

        ![Global security > Single sign-on (SSO) screen](../../images/dam_sso_01.png)

    -   Set the domain.

        ![Enter a domain name](../../images/dam_sso_02.png)

    -   Export the LTPA token.

        ![Export the LTPA key](../../images/dam_sso_03.png)

2.  Use a command line interface to copy the LTPA key file from the staging server to the production server.
3.  Use a command line interface to access the copy of the LTPA file stored on the staging server \(from the previous step\). Copy that file to the production server. **home/dx\_user/ltpa\_stage.key**
4.  Open the WebSphere Application Server console on the target HCL Digital Experience 9.5 container deployment.
5.  Using the WebSphere Application Server console on the target staging HCL Digital Experience 9.5 container deployment server, import the LTPA key, as in the following:

    ![Import the LTPA key](../../images/dam_sso_04.png)

6.  On the target production HCL Digital Experience 9.5 container server, set the domain.

    ![Set the domain](../../images/dam_sso_05.png)

7.  Once the steps are completed, stop and start both the source and the target HCL Digital Experience 9.5 container servers.

## Validate the single sign-on across the source staging and target production HCL Digital Experience 9.5 container deployments

1.  Log in to the HCL Digital Experience 9.5 staging container deployment.
2.  Using the same browser session, change the URL to log into the target production HCL Digital Experience 9.5 container deployment.
3.  Verify that access is operational without being prompted for re-authentication.

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

<!-- ???Info Related Information
   - [Digital Experience on containerized platforms](containerization/deployment.md) -->