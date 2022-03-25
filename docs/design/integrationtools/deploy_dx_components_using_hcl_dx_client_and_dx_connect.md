# Deploy DX components using HCL DXClient and DXConnect

HCL Digital Experience \(DX\) 9.5 CF19 and later releases include a DXClient toolset, and DXConnect servlet that provides developers and administrators with an approach to deploy changes or improvements to the DX platform, and partially automate the development and delivery process.

**Important:** DXClient version is mostly forward and backward compatible with the DX CF versions, however, in some cases it might not work as expected if the CF versions are different. Hence, ensure that the CF versions of both DXClient and DX Core are the same in your installation.

-   **[DXClient](../containerization/dxclient.md)**  
DXClient is a tool that helps developers and administrators manage tasks, such as uploading one or more portlets or Script Applications, from source development environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts developed locally and deploying them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster, or farm-topologies and supported Kubernetes platforms.
-   **[DXClient Artifact Types](../containerization/dxclientartifacts.md)**  
This section provides information about the artifact types that are currently supported by the DXClient tool.
-   **[Troubleshooting DXClient](../containerization/troubleshooting_dxclient.md)**  
Logs can be enabled and disabled as desired by DX developers and administrators through configuration options in the config.json file of DXClient. The log files can be viewed inside the logs folder within the DXClient installation folder.
-   **[DXConnect](../containerization/dxconnect.md)**  
DXConnect is a servlet-based internal application deployed on top of IBM WebSphere Application Server in the HCL DX 9.5 CF19 and later releases, under the [Configuration Wizard profile - `cw_profile`](../config/cw_overview.html). DXConnect enables the DXClient tool to connect over an HTTP or HTTPS connection from a client development machine or remote server to a source or target HCL DX 9.5 server to execute certain tasks requested via DXClient commands. This topic covers the DXConnect installation and configuration instructions.
-   **[Sample Pipelines for use with HCL DXClient and Automation servers](../containerization/sample_pipelines_for_use_with_dx_client_and_automation_servers.md)**  
A CI/CD pipeline can help automate processes in the development and test cycle, including deploying code to test and production environments. HCL DX 9.5 provides sample pipelines for use with the DXClient tooling to demonstrate how the deployment of portlets, Script Applications, Themes, DX Application, export and import of WCM libraries, etc., can be automated.
-   **[Sample Pipelines for the DXClient Docker image file](../containerization/sample_pipelines_docker_dxclient.md)**  
This sample shows how to pull DXClient docker image from the given artifactory, run the DXClient tool in the docker and then deploy a portlet, theme, and script application. It is designed to be run from a Jenkins job that provides the following parameters:
-   **[Sample Pipelines for the DXClient node package file](../containerization/sample_pipelines_node_dxclient.md)**  
This topic describes how to install the DXClient tool in a pipeline, by providing a few sample pipelines such as pipelines for deploying a portlet, theme, and script application. It is designed to be run from a Jenkins job with the following parameters:

**Parent topic:**[Digital Experience Application deployment](../containerization/ci_cd.md)

