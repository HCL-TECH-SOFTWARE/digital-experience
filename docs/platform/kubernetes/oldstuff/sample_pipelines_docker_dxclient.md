# Sample Pipelines for the DXClient Docker image file

This sample shows how to pull DXClient docker image from the given artifactory, run the DXClient tool in the docker and then deploy a portlet, theme, and script application. It is designed to be run from a Jenkins job that provides the following parameters:

|Parameter|Value|Notes|
|---------|-----|-----|
|DEPLOY\_PORTLET|Select this to deploy the portlet| |
|DEPLOY\_THEME|Select this to deploy the theme| |
|DEPLOY\_SCRIPT\_APPLICATION|Select this to deploy the script application| |
|AGENT\_LABEL|Jenkins agent label|Determines on which agents the pipeline can run|
|ARTIFACTORY\_URL|URL to DXClient docker image file|Docker image will be pulled out from this URL|
|REPO\_PATH|Repository path of the DXClient docker image|Docker image will be pulled out from this folder|
|IMAGE\_TAG|docker image tag|Docker image will be pulled out using this image tag|
|ARTIFACT\_PATH|URL \(except filenames\) for artifacts to be deployed|Artifacts fetched via curl|
|ARTIFACT\_CREDENTIALS\_ID|Credentials ID in Jenkins store|User name / password credentials needed to access artifact URLs|
|DX\_HOST|Host name or IP address of DX server|Artifacts will be deployed to this server|
|DX\_PROTOCOL|Protocol to connect to DX server|http or https|
|DX\_PORT|Port to connect to DX serve|Port for the DX main profile|
|DX\_CREDENTIALS\_ID|Credentials ID in Jenkins store|User name / password credentials needed to access DX server|
|DXCONNECT\_HOST|Host name or IP address of the DXConnect servlet \(route change only in case of Open Shift Kubernetes Environment. For other case, this parameter should be same as DX\_HOST\)|Hostname for the DX Configuration Wizard profile|
|DXCONNECT\_PORT|Port to connect to DXConnect servlet|Port for the DX config wizard profile|
|DXCONNECT\_CREDENTIALS\_ID|Credentials ID in Jenkins store|User name / password credentials needed to access DX server config wizard profile|
|XML\_CONFIG\_PATH|URL path to the config servlet for xmlaccess|Defaults to '/wps/config'|
|CONTENT\_HANDLER\_PATH|Alternate path for the portal context root or the content handler servlet|Default to /wps/mycontenthandler/|
|DX\_PROFILE\_NAME|Profile name of the DX server| |
|DX\_PROFILE\_PATH|Profile path of the DX server| |
|DX\_SOAP\_PORT|Soap Port number of the DX server| |
|PORTLET\_WAR\_ARTIFACT\_NAME|Filename of WAR to deploy the portlet|Required for deploy portlet|
|PORTLET\_XML\_ARTIFACT\_NAME|Filename of xmlaccess script used to deploy the portlet|Required for deploy portlet|
|THEME\_EAR\_APPLICATION\_NAME|Application name for the EAR file to deploy the theme|Required for EAR theme deployment|
|THEME\_EAR\_ARTIFACT\_NAME|File name of EAR application to deploy theme|Required for EAR theme deployment|
|THEME\_REGISTRATION\_FILE|File name of XML file to register the theme|Required for theme registration|
|THEME\_NAME|WEBDAV theme name|Required for WEBDAV theme deployment|
|THEME\_ARTIFACT\_NAME|WEBDAV theme zip file name|Required for WEBDAV theme deployment|
|SCRIPT\_APP\_ARTIFACT\_NAME|Filename of compressed script application to deploy|Required for deploy script application|
|MAIN\_HTML\_FILE|File name of Main HTML file within the script application|Required for deploy script application|
|WCM\_SITE\_AREA|SiteArea of the Script Application content|Required for deploy script application|
|CONTENT\_NAME|Name of the Script Application instance to be created or updated|Required for deploy script application|

![Sample pipeline for the DXClient Docker image file](../assets/dxclient-sample-pipeline-using-docker-zip-file1.png)

![Sample pipeline for the DXClient Docker image file](../assets/dxclient-sample-pipeline-using-docker-zip-file2.png)![Sample pipeline for the DXClient Docker image file](../assets/dxclient-sample-pipeline-using-docker-zip-file3.png)

**Parent topic:**[Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)

