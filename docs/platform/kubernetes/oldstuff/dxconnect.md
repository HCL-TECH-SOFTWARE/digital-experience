# DXConnect

DXConnect is a servlet-based internal application deployed on top of IBM WebSphere Application Server in the HCL DX 9.5 CF19 and later releases, under the [Configuration Wizard profile - `cw_profile`](../config/cw_overview.md). DXConnect enables the DXClient tool to connect over an HTTP or HTTPS connection from a client development machine or remote server to a source or target HCL DX 9.5 server to execute certain tasks requested via DXClient commands. This topic covers the DXConnect installation and configuration instructions.

## Authentication

DXConnect is a servlet-based application deployed on top of IBM WebSphere Application Server in an HCL DX 9.5 CF19 and later deployment, under the Configuration Wizard profile - `cw_profile`. DXConnect enables the DXClient tool to connect over an HTTPS connection from a client development workstation or automation server to a target HCL DX 9.5 server to execute certain tasks requested via DXClient commands.

**Authentication**

DXConnect requires the `cw_profile` Administrator security role to access the application servlet APIs.

**DXConnect Installation**

To install DXConnect use the command below:

```
./ConfigEngine.sh install-dxconnect-application

```

This task will not only install the DxConnect application, but it will create the "DXC\_ConfigSettings" WAS Resource Environment Provider and will create two custom properties in that REP:

```
DXCONNECT_MAX_MEMORY_SIZE_MB
DXCONNECT_MAX_FILE_SIZE_MB

```

To remove DXConnect use the command below:

```
./ConfigEngine.sh remove-dxconnect-application

```

To re-install DXConnect use the command below:

```
./ConfigEngine.sh reinstall-dxconnect-application

```

**Notes:**

1.  In Standalone and Cluster setups, the `ConfigEngine` task should be run under the `wp_profile` to have DXConnect installed in the correct location, and a restart of the `cw_profile` server may be required.

    To verify it is installed on a given HCL DX Server 9.5 with CF19 or later, navigate to the **Configuration Wizard** Admin console and then under **Enterprise Applications**. The `dxconnect` application will appear on the console as shown in the example below. For more information on accessing and working with the Configuration Wizard, refer to [Accessing the Configuration Wizard](../config/cw_run.md) topics.

    ![](../assets/HCL_DXConnect_installation.png)

2.  In Red Hat OpenShift, the route for DXConnect is available under the name dx-deployment-service-dxconnect. For the other supported platforms, there is only one route path as usual.

## Accessing the ConfigWizard admin console in a container environment

You can access the ConfigWizard admin console in a container environment from your local system. For more information, refer to [Accessing the ConfigWizard admin console in a container environment](helm_access_configwizard.md).

**Parent topic:**[Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)

