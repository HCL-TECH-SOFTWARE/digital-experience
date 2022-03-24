# Portlets

This topic provides information about the deployment and undeployment of portlets.

## Deploy Portlets

The `deploy-portlet` command is used to deploy one or more new or updated portlets from a source client or server environment to target HCL DX 9.5 CF19 or later server using a provided input XMLAccess file and deployable Portlet WAR file.

**Note:** The synchronization mode of all nodes in a clustered DX environment must be consistently set for a newly deployed portlet to be automatically started; otherwise redeployment or a manual start is required.

**Required files**

-   **XMLAccess file**

    This xml file should contain the definition of the web application along with the details of the portlet\(s\) to be deployed. The web archive file path referred to in this file inside the URL element is ignored, but the URL element itself must exist as it is dynamically replaced when the command is executed. A sample XML file for deploying portlet\(s\) can be found in the samples directory of DXClient \(samples/DeployPortlet.xml\) or in DX server located in the following directory: PortalServer\_root/doc/xml-samples/DeployPortlet.xml.


-   **Portlet Application web archive file**

    This web archive .war file should contain the necessary portlet artifacts for deployment, as per the JSR 286 portlet standard. Refer to [Importing WAR files](../admin-system/adxmlref_import_war.md)


**Command**

```
dxclient deploy-portlet -xmlFile <path> -warFile <path>
```

**Help command**

This command shows the help document on the `deploy-portlet` command usage:

```
dxclient deploy-portlet -h
```

**Command options**

Use this attribute to specify the protocol with which to connect to the DX server \(`wp_profile`\):

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server \(`wp_profile`\):

```
-dxPort <value>
```

Use this attribute to specify the path to DX configuration endpoint \(e.g. /wps/config\):

```
-xmlConfigPath <value>
```

Use this attribute to specify the username to authenticate with the DX server \(`wp_profile`\):

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the local path to the XMLAccess file:

```
-xmlFile <Absolute or relative path to XMLAccess input file>
```

Use this attribute to specify the local path to the WAR file to be deployed:

```
-warFile <Absolute or relative path to deployable war file>
```

Use this attribute to specify the Configuration Wizard Console port number:

```
-dxConnectPort <value>
```

Use this attribute to specify the config wizard home \(change to the appropriate route in the case of an OpenShift Kubernetes Environment, otherwise the value will typically be the same as the hostname\) that is required for authenticating with the DXConnect application:

```
-dxConnectHostname <value>
```

Use this attribute to specify the Configuration Wizard Administrator username that is required for authenticating with the DXConnect application:

```
-dxConnectUsername <value>
```

Use this attribute to specify the Configuration Wizard Administrator password that is required for authenticating with the DXConnect application:

```
-dxConnectPassword <value>
```

Log files from command execution can be found in the logs directory of the DXClient installation.

## Undeploy portlets

The `undeploy-portlet` command is used to undeploy the portlets in the target DX servers.

**Note:** Undeploy-portlet command takes a backup of the XML file of the deployed portlet application and application \(EAR\) if user has given enableBackup as true. By default, enableBackup is set to true and placed in the `store/outputFiles/portlets/backup/undeploy-portlet/`. In case, if the undeployed portlet is required again, then the user can restore the portlet WAR file from the downloaded portlet application EAR file along with the exported deployable portlet application XML file.

-   **Command description**

    This command invokes the undeploy-portlet tool inside the DXClient. The undeploy-portlet dxtool uses the provided files and executes the undeploy portlet task.

    ```
    dxclient undeploy-portlet
    ```

-   **Help command**

    This command shows the help information for `undeploy-portlet` command usage:

    ```
    dxclient undeploy-portlet -h
    ```

-   **Required files**

    This file should contain the definition of the web application along with the undeploy portlet.

    ```
    dxclient undeploy-portlet -xmlFile <path>
    ```

-   **Command options**

    Use this attribute to specify the hostname of the target DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the DX server \(wp\_profile\):

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server \(`wp_profile`\):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the path to DX configuration endpoint \(e.g. /wps/configwps/config\):

    ```
    -xmlConfigPath <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server \(`wp_profile`\):

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the local path to the XMLAccess file:

    ```
    -xmlFile <xml file name with absolute path of the xmlaccess input file>
    ```

    Use this attribute to take the backup of portlet application before undeploying it:

    ```
    -enableBackup <value>
    ```

-   **Commands required when enableBackup is set to true**

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server

    ```
    -dxSoapPort <Soap port of the DX server>
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ```
        -dxProfileName <Profile name of the DX core server>
        ```

    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ```
        -dxProfilePath <Path of the DX core server profile> 
        ```


The values that are passed through the command line override the default values.

**Example:**

```
 
dxclient undeploy-portlet -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -xmlFile <xml-file-with-path> 

```

**Example usage when enableBackup is set to true:**

```
 
dxclient undeploy-portlet -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -xmlFile <xml-file-with-path> -enableBackup true -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX core server profile>
```

**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

