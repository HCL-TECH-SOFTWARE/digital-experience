# Configuring a Local FlexNet Entitlement Server
With HCL Digital Experience Cloud Native 9.5 Kubernetes production environments, you can optionally configure a local FlexNet entitlement server to more strictly control the environment in which your entitlement checks are made.

By using this process, you can remain in entitlement compliance without requiring outbound connections to the HCL-hosted FlexNet entitlement service from your HCL Digital Experience Cloud Native 9.5 Kubernetes production installations.

By having the offline version of the HCL FlexNet Embedded License Server, a local FlexNet entitlement server can itself also be configured to function without requiring outbound connections. 

!!!important
    With outbound connections disabled, however, a member of the development team must manually update the local entitlement server periodically with the HCL Software License Portal to verify entitlements with HCL.

## Before You Begin

- Obtain the FlexNet Embedded License Server software from HCL and the installation readme files from the [HCL License and Delivery Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do). You can find the download package, “HCL Common Local License Server 2.0,” under “Uncategorized Products.”

    !!!important
        Do not attempt to download the software by searching for the package name. The resulting package, “HCL_CLLS_Beta,” is not the correct package.

-   Review the following documentation about how to configure a server-based (online) or local license (offline) server: 

    - For Linux Server, see [How to install HCL Local License Server on Linux](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0090792).
    - For Windows Server, see [How to install HCL Local License Server on Windows Operating System](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0082090).

    You can use these guides as the primary information for installing and configuring the FlexNet Embedded License Server for HCL.

-   Review the readme documents or the FlexNet Embedded License Server for the HCL installation guide, and the specific requirements for using the Embedded License Server with HCL Digital Experience Cloud Native 9.5 production environments as highlighted in the following steps. 

    With a solid understanding of the requirements, configurations, and limitations of this software, create a plan for entitlement checks for your organization. You can also choose to combine the use of both the local FlexNet Embedded License Server for HCL and the remote HCL-hosted FlexNet Entitlement Server in all your production environments, depending on the requirements of your organization.

-   Ensure that you have a local computer that meets the requirements for the FlexNet Embedded License Server software for HCL. 

    These requirements are highlighted in detail on pages 22-24 of the installation guide.

## Procedure

1. Install, configure, and start the FlexNet Embedded License Server for HCL software.

    Use the `Windows ReadMe.docx` or `Linux ReadMe.docx` files for instructions that are included with the package. 

    Optionally, the [FlexNet Embedded License Server for HCL installation guide](https://help.hcltechsw.com/commerce/9.1.0/install/pdf/FlexNet%20Embedded%20License%20Server%20Administration%20Guide.pdf) is available for more detailed steps and information about this process.

    !!!important
        -   Before you install and run the FlexNet Embedded License Server service on your host operating system, ensure that you review [Configuring SSL certificates for use with a local HCL Flexnet entitlement server](https://help.hcltechsw.com/commerce/9.1.0/install/tasks/tentitlementcheckconfigurelocalcerts.html) for the required SSL certificates to be generated and included for use on the dependent HCL Digital Experience Cloud Native 9.5 production environments and on the local license server itself.

        -   After configuration and registration on the [HCL License and Delivery Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do), your local license server cannot be migrated to or duplicated on another server. Changes to the network configuration of the host computer can also invalidate the local license server. If you make changes to the local license server that is in use for your organization, ensure that it is correctly registered with HCL.

    Confirm that the service is running.

    -   On a Windows-based server, run the following command:

        -   At a command prompt, run `services.msc`.

        -   Confirm the service, `FNLS-HCL`, is listed and running.

    -   On a Linux-based server, run the following command:

        -   At a command prompt, run `sudo systemctl -l status flexnetls-HCL`.

            The response should look similar to the following example, which contains all information on the running service:

            ```
            flexnetls-HCL.service - FlexnetLS Local License Server for HCL.
            Loaded: loaded (/etc/systemd/system/flexnetls-HCL.service; enabled; vendor preset: disabled)
            Drop-In: /etc/systemd/system/flexnetls-HCL.service.d
            └─flexnetls.conf
            Active: active (running) since Tue 2018-04-10 14:58:55 EDT; 2min 23s ago
            Main PID: 7342 (java)
            CGroup: /system.slice/flexnetls-HCL.service
            └─7342 /bin/java -server -Xms2g -Xmx2g -XX:CompressedClassSpaceSize=64m -XX:MetaspaceSize=256m -XX:+UseG1GC -XX:NewRatio=3 -XX:MaxGCPauseMillis=75 -XX:G1HeapWastePercent=10 -XX:InitiatingHeapOccupancyPercent=75 -XX:+CMSScavengeBeforeRemark - XX:+ScavengeBeforeFullGC -Djava.security.egd=file:/dev/./urandom -Dbase.dir=/var/opt/flexnetls/HCL -jar flexnetls.jar --service
            Apr 10 14:58:54 Linux7.3 systemd[1]: Starting FlexnetLS Local License Server for HCL....
            Apr 10 14:58:55 Linux7.3 systemd[1]: Started FlexnetLS Local License Server for HCL..
            ```

    Additionally, you can view the logs for the local license service. The default log locations are as follows:

    -   Windows: `C:\Windows\ServiceProfiles\NetworkService\flexnetls\producer_name\logs\`

    -   Linux: /var/opt/flexnetls/producer_name/logs/

2. Obtain the information required to register the local license server with the [HCL License and Delivery Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do).

    1.  Using the default user name and password, request a bearer token from the local license server.

        ```
        curl -k --header "Content-Type: application/json" --request POST --data "{\"user\":\"admin\",\"password\":\"HCLDefault@\"}" https://<license server hostname>:<port>/api/1.0/instances/~/authorize
        ```

        Where:

        -   `<license server hostname>` is the host name of the local license server.

        -   `<port>` is the configured port number for the local license service.

    2.  Extract the **hostids** value from the local license server.
        
        Using the token value obtained in the previous step, obtain the **hostids**.

        ```
        curl -k -H "Authorization: Bearer <token value>" https://<license server hostname>:<port>/api/1.0/hostids
        ```
        Where:

        -   `<token value>` is the token.
        -   `<license server hostname>` is the host name of the local license server.
        -   `<port>` is the configured port number for the local license service.

        The value that you are looking for is the 12-character **hostids** value. For example,

        ```
        ...
        {
        "hostids" : [ {
            "type" : "ETHERNET",
            "value" : "DE32822D0EA"
        }, {
        ...
        ```

3. Register your local license server on the [HCL License and Delivery Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/logon.do), associate it with your licenses, and download the capability response file to configure your local license server with your entitlement information.

    1. Create the local license server on the HCL License and Delivery Portal.

        1.  Log in to the HCL License and Delivery Portal.
        
        2.  Under the top tab menu, select **Devices > Create Device**. The New Device page opens.
        
        3. Complete the required fields.
            
            1. Name the license server.
            
            2. Select the **Runs license server?** checkbox.
            
            3. Leave the **ID Type** as `ETHERNET`.
            
            4. Under the **ID** field, enter the **hostids** value that you obtained earlier.
        
        4. Click **Save**. The device is created.

    2. Map your HCL Digital Experience Cloud Native 9.5 entitlements to the local license server. Refer to the following table: [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7 parts and FlexNet License Server Feature Name](index.md) for details.
        
        1. On the device page, select **Action > Map Entitlements**.
        
        2. Associate the HCL Digital Experience Cloud Native 9.5 licenses with your local license server by adding values to the **Qty to add** column.
        
        3. Click **Save**. The licenses are associated with the license server.

    3. Download the capability response (`.bin`) file to update the entitlements on your local license server.

        On the device page, select **Action > Download Capability Response**. A download `.bin` file is produced. The file name will match the **hostid** value for your local license server.

4. Upload the capability response (`.bin`) file to your local license server to configure your local license entitlements.
    
    1. Copy the downloaded file into the FlexNet Embedded License Server for the HCL installation configuration directory. Typically, these paths are similar to the following examples:
    
    -   Windows: `C:\HCL_CLLS-x64-windows-2018.02-online\server\`
    
    -   Linux: `/opt/flexnetls/HCL/`
    
    2. Upload the capability response (`.bin`) file into the server.

        ```
        curl -k -X POST -H "Authorization: Bearer <token value>" -H "Cache-Control: no-cache" --data-binary "@<Bin File Name.bin>" https://<license server hostname>:<port>/api/1.0/capability_response
        ```

        Where:
        -   `<token value>` is the token.
        -   `<Bin File Name.bin>` is the capability response file.
        -   `<license server hostname>` is the host name of the local license server.
        -   `<port>` is the configured port number for the local license service.

        The expected HTTP response is as follows:
        
        ```
        "confirmationRequestNeeded" : false
        ```

        You can also observe the update directly in your local license server logs.
    
    3. Change the default administrator password to secure your local license server.

        See page 64 of the FlexNet Embedded License Server for the HCL installation guide.

5. After the local FlexNet license server is verified as running, obtain the following server details:

    -   User name (by default this is set to 'admin' and, according to step 6 earlier, should be changed)

    -   Password

    -   SSL certificate (This certificate was generated during setup. This will be imported to the HCL Digital Experience 9.5 License manager deployment to enable the SSL connection). Refer to the **Architecture** figure below.

## Architecture

The License Manager component communicates with the local license server to validate license entitlement periods for HCL Digital Experience Cloud Native V9.5 Tier 1 – 7 software configured for production use. The local license server stores user session consumption from the customer’s production DX Cloud Native 9.5 deployments and synchronizes that data from the local license server copy to the FlexNet License Portal Server for HCL when those connections are periodically established. 

![Architecture](../_img/architecture_logical_deployment_kube.png)

## Procedure

1. To configure the optional use of a local FlexNet license server, you add a property to the DX 9.5 Kubernetes Helm configuration to map the local license server SSL certificate (stored in a Kubernetes secret) to an environment variable. This property is optional and the DX 9.5 license manager instance will then automatically run an import to the `cacerts truststore` script if the variable contains any value.

    ```
    # License Certificate secret used for Local license server
    licenseCertSecret: "license-secret"
    ```

2. As detailed in [HCL Digital Experience Cloud Native 9.5 entitlement checks](index.md), you must configure the following items in your DX 9.5 Container Update CF207 or later Helm chart according to the DX Cloud Native 9.5 entitlements (Tier 1 – 7) you are entitled to and have mapped to your Local License Server instance:

    1. `productionEnvironment:true` – Configure this variable to `true` if this deployment will be used to support a production deployment. See the [HCL Digital Experience Cloud Native v9.5 license document](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad) for the definitions of production and non-production deployments.

    2. `licenseServer ID` – configure on your Local License Server ID. Note that the Server ID is not the Host ID that you have provided in FlexNet Portal but the Server ID of the local license server. To check, run a **curl** command to the license server health, and server details are shown:

    ```
    curl -k https://yourhostname:port/api/1.0/health
    Sample server response:

    "LLS" : {
        "version" : "2021.05.0",
        "buildDate" : "2021-04-21T09:39:52Z",
        "buildVersion" : "266216",
        "branch" : "master",
        "gitHash" : "7967ed0b40e07ef5c28eda34da21f5a20b91f04e",
        "patch" : "0",
        "fneBuildVersion" : "266165",
        "serverInstanceID" : "V2YPFFXBK91E",
        "database" : {
        "connectionCheck" : "success"
        },
        "security" : "enabled",
        "httpAuth" : "disabled",
        "licensingSecurityJSON" : "enabled",
        "diskspace" : "ok"
    }
    ```

    3. `licenseServer URL` – verify your connection to the Local License Server URL.

    4. `licenseFeatureNameWithVersion` – Configure this variable according to the [HCL DX Cloud Native 9.5 Tier 1 – 7](../../../product_overview/offerings.md#hcl-digital-experience-cloud-native) offering part that your organization has acquired and is mapped to your FlexNet server for HCL instances. See Table [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7 parts and FlexNet License Server Feature Name](../configure_entitlement_checks/index.md#procedure).

    5. `licenseManagerUser` – Configure this variable with the user name of the administrator authenticated to manage your Local License Server. (By default, this user name is set to 'admin'.)

    6. `licenseManagerPassword` – Configure this variable with the password associated with the user name of the administrator to manage your Local License Server, defined in the previous step.

3. Manually import the generated SSL certificate for the local license server to the Kubernetes secret. As mentioned in Step 1, use the default secret name 'license-secret' or change the `licenseCertSecret` in the custom values according to your secret name. The key name in the secret must be set to `license-secret`:

    ```
    kubectl -n <namespace> create secret generic license-secret --from-file=license-secret=hostname.certs 
    ```

4.  Run a Helm upgrade and restart the DX license manager pod.

    To run helm upgrade:
    ```
    helm upgrade -n <namespace> -f current.yaml <deployment-name> install-hcl-dx-deployment
    ```

    To restart the DX license manager pod:
    ```
    kubectl -n <namespace> rollout restart sts <deployment-name>-license-manager
    ```

Ensure that your connection to the local FlexNet license server is successful by viewing your HCL DX 9.5 Container Update Server License Manager pod logs.

Use `kubectl` logs for the license manager pod. For example:

```
kubectl logs pod/dx-deployment-license-manager-0 -n <namespace>
```

Additional references from the HCL Software Support Knowledge Article resources are available: [How to check the license usage on FlexNet using the FlexNet Admin tool included with the local license server download](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0084616).
