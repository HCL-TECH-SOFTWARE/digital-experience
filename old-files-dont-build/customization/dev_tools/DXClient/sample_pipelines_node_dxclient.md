<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept id="sample_pipelines_node_dxclient">
    <title>Sample Pipelines for the DXClient node package file | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Sample Pipelines for the node package file</navtitle>
    </titlealts>
    <shortdesc>This topic describes how to install the DXClient tool in a pipeline, by providing a
        few sample pipelines such as pipelines for deploying a portlet, theme, and script
        application. It is designed to be run from a Jenkins job with the following
        parameters:</shortdesc>
    <conbody>
        <p><table frame="all" rowsep="1" colsep="1" id="table_t4b_bby_cpb">
                <title>Sample pipeline parameters</title>
                <tgroup cols="3">
                    <colspec colname="c1" colnum="1" colwidth="1*"/>
                    <colspec colname="c2" colnum="2" colwidth="1*"/>
                    <colspec colname="c3" colnum="3" colwidth="1*"/>
                    <thead>
                        <row>
                            <entry>Parameter</entry>
                            <entry>Value</entry>
                            <entry>Notes</entry>
                        </row>
                    </thead>
                    <tbody>
                        <row>
                            <entry>DEPLOY_PORTLET</entry>
                            <entry>Select this to deploy the portlet</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>DEPLOY_THEME</entry>
                            <entry>Select this to deploy the theme</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>DEPLOY_SCRIPT_APPLICATION</entry>
                            <entry>Select this to deploy the script application</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>AGENT_LABEL</entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry>TOOL_PACKAGE_URL</entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry>TOOL_CREDENTIALS_ID</entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry>ARTIFACT_PATH</entry>
                            <entry>URL (except filenames) for artifacts to be deployed</entry>
                            <entry>Artifacts fetched via curl</entry>
                        </row>
                        <row>
                            <entry>ARTIFACT_CREDENTIALS_ID</entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access artifact
                                URLs</entry>
                        </row>
                        <row>
                            <entry>DX_HOST</entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry>DX_PROTOCOL</entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>http or https</entry>
                        </row>
                        <row>
                            <entry>DX_PORT</entry>
                            <entry>Port to connect to DX serve</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry>DX_CREDENTIALS_ID</entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access DX
                                server</entry>
                        </row>
                        <row>
                            <entry>DXCONNECT_HOST</entry>
                            <entry>Host name or IP address of the DXConnect servlet (route change
                                only in case of Open Shift Kubernetes Environment. For other case,
                                this parameter should be same as DX_HOST)</entry>
                            <entry>Hostname for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry>DXCONNECT_PORT</entry>
                            <entry>Port to connect to DXConnect servlet</entry>
                            <entry>Port for the DX config wizard profile</entry>
                        </row>
                        <row>
                            <entry>DXCONNECT_CREDENTIALS_ID</entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access DX server
                                config wizard profile</entry>
                        </row>
                        <row>
                            <entry>XML_CONFIG_PATH</entry>
                            <entry>URL path to the config servlet for xmlaccess</entry>
                            <entry>Defaults to '/wps/config'</entry>
                        </row>
                        <row>
                            <entry>CONTENT_HANDLER_PATH</entry>
                            <entry>Alternate path for the portal context root or the content handler
                                servlet</entry>
                            <entry>Default to /wps/mycontenthandler/</entry>
                        </row>
                        <row>
                            <entry>DX_PROFILE_NAME</entry>
                            <entry>Profile name of the DX server</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>DX_PROFILE_PATH</entry>
                            <entry>Profile path of the DX server</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>DX_SOAP_PORT</entry>
                            <entry>Soap Port number of the DX server</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry>PORTLET_WAR_ARTIFACT_NAME</entry>
                            <entry>Filename of WAR to deploy the portlet</entry>
                            <entry>Required for deploy portlet</entry>
                        </row>
                        <row>
                            <entry>PORTLET_XML_ARTIFACT_NAME</entry>
                            <entry>Filename of xmlaccess script used to deploy the portlet</entry>
                            <entry>Required for deploy portlet</entry>
                        </row>
                        <row>
                            <entry>THEME_EAR_APPLICATION_NAME</entry>
                            <entry>Application name for the EAR file to deploy the theme</entry>
                            <entry>Required for EAR theme deployment</entry>
                        </row>
                        <row>
                            <entry>THEME_EAR_ARTIFACT_NAME</entry>
                            <entry>File name of EAR application to deploy theme</entry>
                            <entry>Required for EAR theme deployment</entry>
                        </row>
                        <row>
                            <entry>THEME_REGISTRATION_FILE</entry>
                            <entry>File name of XML file to register the theme</entry>
                            <entry>Required for theme registration</entry>
                        </row>
                        <row>
                            <entry>THEME_NAME</entry>
                            <entry>WEBDAV theme name</entry>
                            <entry>Required for WEBDAV theme deployment</entry>
                        </row>
                        <row>
                            <entry>THEME_ARTIFACT_NAME</entry>
                            <entry>WEBDAV theme zip file name</entry>
                            <entry>Required for WEBDAV theme deployment</entry>
                        </row>
                        <row>
                            <entry>SCRIPT_APP_ARTIFACT_NAME</entry>
                            <entry>Filename of zipped script application to deploy</entry>
                            <entry>Required for deploy script application</entry>
                        </row>
                        <row>
                            <entry>MAIN_HTML_FILE</entry>
                            <entry>File name of Main HTML file within the script application</entry>
                            <entry>Required for deploy script application</entry>
                        </row>
                        <row>
                            <entry>WCM_SITE_AREA</entry>
                            <entry>SiteArea of the Script Application content</entry>
                            <entry>Required for deploy script application</entry>
                        </row>
                        <row>
                            <entry>CONTENT_NAME</entry>
                            <entry>Name of the Script Application instance to be created or
                                updated</entry>
                            <entry>Required for deploy script application</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table><image href="../assets/dxclient-sample-pipeline-using-node-zip-file1.png"
                alt="Sample pipeline for the DXClient node package file" placement="break"
                scale="50" id="image_xbc_bfh_w4b"/><image
                href="../assets/dxclient-sample-pipeline-using-node-zip-file2.png"
                alt="Sample pipeline for the DXClient node package file" placement="inline"
                scale="50" id="image_abk_pbp_cqb"/><image
                href="../assets/dxclient-sample-pipeline-using-node-zip-file3.png"
                alt="Sample pipeline for the DXClient node package file" placement="inline"
                scale="50" id="image_lmf_fcp_cqb"/></p>
    </conbody>
</concept>
