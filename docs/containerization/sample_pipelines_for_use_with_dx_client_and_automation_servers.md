# Sample Pipelines for use with HCL DXClient and Automation servers

A CI/CD pipeline can help automate processes in the development and test cycle, including deploying code to test and production environments. HCL DX 9.5 provides sample pipelines for use with the DXClient tooling to demonstrate how the deployment of portlets, Script Applications, Themes, DX Application, export and import of WCM libraries, etc., can be automated.

**Note:** The sample pipelines referred in this topic are supported only until the HCL Digital Experience Container update version CF195. We recommend that you refer to the following sample pipelines for releases CF196 and later.

-   [Sample Pipelines for the DXClient Docker image file](sample_pipelines_docker_dxclient.md)
-   [Sample Pipelines for the DXClient node package file](sample_pipelines_node_dxclient.md)

## Sample Pipeline details

Sample Pipelines are provided for deploying or updating a portlet application, Script Application, or Themes. The sample pipelines are made available under the samples folder in the DXClient root folder. Developers and administrators can use these pipelines as a basis for Jenkins automation server jobs.

## Deploy portlet

This sample shows how to install the DXClient tool in a pipeline and then deploy or update a portlet. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`ARTEFACT_PATH`|URL \(except filenames\) for artifacts to be deployed|Artifacts fetched via curl|
|`WAR_ARTEFACT_NAME`|Filename of WAR to deploy| |
|`XMLACCESS_ARTEFACT_NAME`|Filename of XMLAccess script used to deploy| |
|`ARTEFACT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access artifact URLs|
|`DX_HOST`|Hostname or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`XML_CONFIG_PATH`|URL path to the Configuration servlet for XMLAccess|Defaults to /wps/config'|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|`DXCONNECT_HOST`|Host name or IP address of the DXConnect servlet \(route change only in case of Open Shift Kubernetes Environment. For other case, this parameter should be same as DX\_HOST\)|Hostname for the DX Configuration Wizard profile|
|`DXCONNECT_PORT`|Port to connect to DXConnect servlet|Port for the DX Configuration Wizard profile|
|`DXCONNECT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name / password credentials needed to access DX server Configuration Wizard profile|

![Install DXClient tool and deploy portlet](../assets/pipeline_deploy_portlet_sample.png)

## Deploy script application

This sample shows how to install the DXClient tool in a pipeline and then deploy a Script Application. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`ARTIFACT_PATH`|URL \(except filenames\) for artifacts to be deployed|Artifacts fetched via curl|
|`ARTIFACT_NAME`|Filename of zipped script application to deploy| |
|`ARTIFACT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access artifact URLs|
|`DX_HOST`|Host name or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|``WCMSITEAREA``|SiteArea of the Script Application content| |
|``CONTENTNAME``|Name of the Script Application instance to be created or updated| |

![Pipeline DXClient deploy script application sample](../assets/pipeline_deploy_script_app_sample.png)

## Restore script application

This sample shows how to install the DXClient tool in a pipeline and then restore an existing script application to any of its specified previous version. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`DX_HOST`|Host name or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|`CONTENT_ID`|WCM content item unique ID|Script application will be stored in this content item|
|`VERSION_NAME`|Version name of script application|Name of the version that should store the script application|
|`RESTORE_AS_PUBLISHED`|Selected version to restore or draft|Restore as a draft or replace the published version|

![Pipeline DXClient deploy script application sample](../assets/pipeline_deploy_script_restore_sample.png)

## Deploy DX application

This sample shows how to install the DXClient tool in a pipeline and then deploy or update a DX application. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`ARTIFACT_PATH`|URL \(except filenames\) for artifacts to be deployed|Artifacts fetched via curl|
|`ARTIFACT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access artifact URLs|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|`DXCONNECT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX Server Configuration Wizard profile|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_HOST`|Host name or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`DXCONNECT_HOST`|Host name or IP address of the DXConnect servlet \(route change only in case of Open Shift Kubernetes Environment. For other case, this parameter should be same as DX\_HOST\)|Hostname for the DX Configuration Wizard profile|
|`DXCONNECT_PORT`|Port to connect to DXConnect servlet|Port for the DX Configuration Wizard profile. Default to 10202|
|`APPLICATION_FILE`|File name of EAR application to deploy|Required for EAR deployment|
|`APPLICATION_NAME`|Application name for the EAR file to deploy|Required for EAR deployment|
|`DX_SOAP_PORT`|Soap Port number of the DX server|Required for EAR deployment|
|`DX_PROFILE_PATH`|Profile path of the DX server|Required for EAR deployment|

![Pipeline DXClient deploy application sample](../assets/pipeline_deploy_application_sample.png)

## Restart DX Core server

This sample shows how to restart the DX Core server using the DXClient tool in a pipeline. It is designed to be run from a Jenkins job that requires the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX Core server|
|`DXCONNECT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX Core Server Configuration Wizard profile|
|`DXCONNECT_HOST`|Host name or IP address of the DXConnect servlet \(route change only in case of Open Shift Kubernetes Environment. For other case, this parameter should be same as DX\_HOST\)|Hostname for the DX Configuration Wizard profile|
|`DXCONNECT_PORT`|Port to connect to DXConnect servlet|Port for the DX Configuration Wizard profile. Default to 10202|
|`DX_PROFILE_PATH`|Profile path of the DX Core server|Required for restarting the DX Core server|

![Pipeline DXClient Restart DX Core Server sample](../assets/pipeline_dxclient_restart_dxcore_server_DONOTDELETE.png)

## Manage syndication

This sample shows how to install the DXClient tool in a pipeline and then enable or disable the syndicator or subscriber. It is designed to be run from a Jenkins job that requires the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_HOST`|Host name or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`CONTENT_HANDLER_PATH`|Alternate path for the portal context root or the content handler servlet|Default to /wps/mycontenthandler/|
|`SYNDICATOR_OR_SUBSCRIBER`|This can be syndicator or subscriber| |
|`UUID_FOR_SYNDICATION`|UUID of the syndicator/subscriber instance| |
|`ENABLE`|Use true or false to enable or disable the syndicator/subscriber| |

![Pipeline DXClient manage syndication](../assets/pipeline_dxclient_deploy_manage_syndication_sample.png)

## Deploy theme

This sample shows how to install the DXClient tool in a pipeline and then deploy or update a theme. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|`AGENT_LABEL`|Jenkins agent label|Determines on which agents the pipeline can run|
|`TOOL_PACKAGE_URL`|URL to DXClient zip|Fetched via curl|
|`TOOL_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access tool package URL|
|`ARTEFACT_PATH`|URL \(except filenames\) for artifacts to be deployed|Artifacts fetched via curl|
|`ARTEFACT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access artifact URLs|
|`DX_HOST`|Host name or IP address of DX server|Artifacts will be deployed to this server|
|`DX_PROTOCOL`|Protocol to connect to DX server|HTTP or HTTPS|
|`DX_PORT`|Port to connect to DX server|Port for the DX main profile|
|`DX_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name/password credentials needed to access DX server|
|`DXCONNECT_CREDENTIALS_ID`|Credentials ID in Jenkins store|User name / password credentials needed to access DX server Configuration Wizard profile|
|`DXCONNECT_HOST`|Host name or IP address of the DXConnect servlet \(route change only in case of Open Shift Kubernetes Environment. For other case, this parameter should be same as DX\_HOST\)|Hostname for the DX Configuration Wizard profile|
|`DXCONNECT_PORT`|Port to connect to DXConnect servlet|Port for the DX Configuration Wizard profile. Default to 10202|
|`APPLICATION_FILE`|File name of EAR application to deploy|Required for EAR deployment|
|`APPLICATION_NAME`|Application name for the EAR file to deploy|Required for EAR deployment|
|`DX_SOAP_PORT`|Soap Port number of the DX server|Required for EAR deployment|
|`DX_PROFILE_PATH`|Profile path of the DX server|Required for EAR deployment|
|`XML_FILE`|File name of XML file to register the theme|Required for theme registration|
|`XML_CONFIG_PATH`|URL path to the Configuration endpoint|Defaults to /wps/config'|
|`THEME_NAME`|WebDAV theme name|Required for WebDAV deployment|
|`THEME_PATH`|WebDAV theme zip file|Required for WebDAV deployment|
|`CONTENT_HANDLER_PATH`|Alternate path for the portal context root or the content handler servlet|Default to /wps/mycontenthandler/|

![Pipeline DXClient deploy script application sample](../assets/pipeline_deploy_theme_sample.png)

**Parent topic:**[Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)

