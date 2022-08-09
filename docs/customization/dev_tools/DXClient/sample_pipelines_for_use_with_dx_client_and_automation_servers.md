<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept id="sample_pipelines_for_use_with_dx_client_and_automation_servers">
    <title>Sample Pipelines for use with HCL DXClient and Automation servers | HCL Digital
        Experience</title>
    <titlealts>
        <navtitle>Sample Pipelines for use with DXClient and Automation servers</navtitle>
    </titlealts>
    <shortdesc>A CI/CD pipeline can help automate processes in the development and test cycle,
        including deploying code to test and production environments. HCL DX 9.5 provides sample
        pipelines for use with the DXClient tooling to demonstrate how the deployment of portlets,
        Script Applications, Themes, DX Application, export and import of WCM libraries, etc., can
        be automated.</shortdesc>
    <conbody>
        <note id="note_dvt_ndb_nqb">The sample pipelines referred in this topic are supported only
            until the HCL Digital Experience Container update version CF195. We recommend that you
            refer to the following sample pipelines for releases CF196 and later.<ul
                id="ul_ybn_d2b_nqb">
                <li><xref href="sample_pipelines_docker_dxclient.dita"/></li>
                <li><xref href="sample_pipelines_node_dxclient.dita"/></li>
            </ul></note>
        <section id="section_lrd_sgh_w4b">
            <title>Sample Pipeline details</title>
            <p>Sample Pipelines are provided for deploying or updating a portlet application, Script
                Application, or Themes. The sample pipelines are made available under the
                    <filepath>samples</filepath> folder in the DXClient root folder. Developers and
                administrators can use these pipelines as a basis for Jenkins automation server
                jobs.</p>
        </section>
        <section id="section_w5b_y2h_w4b">
            <title>Deploy portlet</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then deploy or
                update a portlet. It is designed to be run from a Jenkins job that provides the
                following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_fjq_3mm_4nb">
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTEFACT_PATH</codeph></entry>
                            <entry>URL (except filenames) for artifacts to be deployed</entry>
                            <entry>Artifacts fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>WAR_ARTEFACT_NAME</codeph></entry>
                            <entry>Filename of WAR to deploy</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph>XMLACCESS_ARTEFACT_NAME</codeph></entry>
                            <entry>Filename of XMLAccess script used to deploy</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph>ARTEFACT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access artifact
                                URLs</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Hostname or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>XML_CONFIG_PATH</codeph></entry>
                            <entry>URL path to the Configuration servlet for XMLAccess</entry>
                            <entry>Defaults to <filepath>/wps/config'</filepath></entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_HOST</codeph></entry>
                            <entry>Host name or IP address of the DXConnect servlet (route change
                                only in case of Open Shift Kubernetes Environment. For other case,
                                this parameter should be same as DX_HOST)</entry>
                            <entry>Hostname for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_PORT</codeph></entry>
                            <entry>Port to connect to DXConnect servlet</entry>
                            <entry>Port for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access DX server
                                Configuration Wizard profile</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_wbc_bfh_w4b">
                <image href="../assets/pipeline_deploy_portlet_sample.png"
                    alt="Install DXClient tool and deploy portlet" placement="inline" scale="50"
                    id="image_xbc_bfh_w4b"/>
            </fig>
        </section>
        <section id="section_hkp_y2h_w4b">
            <title>Deploy script application</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then deploy a
                Script Application. It is designed to be run from a Jenkins job that provides the
                following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_w25_b4m_4nb">
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTIFACT_PATH</codeph></entry>
                            <entry>URL (except filenames) for artifacts to be deployed</entry>
                            <entry>Artifacts fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTIFACT_NAME</codeph></entry>
                            <entry>Filename of zipped script application to deploy</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph>ARTIFACT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access artifact
                                URLs</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph><codeph>WCMSITEAREA</codeph></codeph></entry>
                            <entry>SiteArea of the Script Application content</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph><codeph>CONTENTNAME</codeph></codeph></entry>
                            <entry>Name of the Script Application instance to be created or
                                updated</entry>
                            <entry/>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_wjm_dfh_w4b">
                <image href="../assets/pipeline_deploy_script_app_sample.png"
                    alt="Pipeline DXClient deploy script application sample" placement="inline"
                    scale="50" id="image_xjm_dfh_w4b"/>
            </fig>
        </section>
        <section id="section_k2q_qfh_w4b">
            <title>Restore script application</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then restore an
                existing script application to any of its specified previous version. It is designed
                to be run from a Jenkins job that provides the following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_l2q_qfh_w4b">
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph>CONTENT_ID</codeph></entry>
                            <entry>WCM content item unique ID</entry>
                            <entry>Script application will be stored in this content item</entry>
                        </row>
                        <row>
                            <entry><codeph>VERSION_NAME</codeph></entry>
                            <entry>Version name of script application</entry>
                            <entry>Name of the version that should store the script
                                application</entry>
                        </row>
                        <row>
                            <entry><codeph>RESTORE_AS_PUBLISHED</codeph></entry>
                            <entry>Selected version to restore or draft</entry>
                            <entry>Restore as a draft or replace the published version</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_m2q_qfh_w4b">
                <image href="../assets/pipeline_deploy_script_restore_sample.png"
                    alt="Pipeline DXClient deploy script application sample" placement="inline"
                    scale="50" id="image_n2q_qfh_w4b"/>
            </fig>
        </section>
        <section id="section_kr3_ryx_cpb">
            <title>Deploy DX application</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then deploy or
                update a DX application. It is designed to be run from a Jenkins job that provides
                the following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_lr3_ryx_cpb">
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTIFACT_PATH</codeph></entry>
                            <entry>URL (except filenames) for artifacts to be deployed</entry>
                            <entry>Artifacts fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTIFACT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access artifact
                                URLs</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX Server
                                Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_HOST</codeph></entry>
                            <entry>Host name or IP address of the DXConnect servlet (route change
                                only in case of Open Shift Kubernetes Environment. For other case,
                                this parameter should be same as DX_HOST)</entry>
                            <entry>Hostname for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_PORT</codeph></entry>
                            <entry>Port to connect to DXConnect servlet</entry>
                            <entry>Port for the DX Configuration Wizard profile. Default to
                                10202</entry>
                        </row>
                        <row>
                            <entry><codeph>APPLICATION_FILE</codeph></entry>
                            <entry>File name of EAR application to deploy</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>APPLICATION_NAME</codeph></entry>
                            <entry>Application name for the EAR file to deploy</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_SOAP_PORT</codeph></entry>
                            <entry>Soap Port number of the DX server</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROFILE_PATH</codeph></entry>
                            <entry>Profile path of the DX server</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_mr3_ryx_cpb">
                <image href="../assets/pipeline_deploy_application_sample.png"
                    alt="Pipeline DXClient deploy application sample" placement="inline" scale="50"
                    id="image_nr3_ryx_cpb"/>
            </fig>
        </section>
        <section id="section_kyt_y1y_cpb">
            <title>Restart DX Core server</title>
            <p>This sample shows how to restart the DX Core server using the DXClient tool in a
                pipeline. It is designed to be run from a Jenkins job that requires the following
                parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_lyt_y1y_cpb">
                <title>Jenkins job parameters to Restart DX Core Server </title>
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX Core
                                server</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX Core Server
                                Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_HOST</codeph></entry>
                            <entry>Host name or IP address of the DXConnect servlet (route change
                                only in case of Open Shift Kubernetes Environment. For other case,
                                this parameter should be same as DX_HOST)</entry>
                            <entry>Hostname for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_PORT</codeph></entry>
                            <entry>Port to connect to DXConnect servlet</entry>
                            <entry>Port for the DX Configuration Wizard profile. Default to
                                10202</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROFILE_PATH</codeph></entry>
                            <entry>Profile path of the DX Core server</entry>
                            <entry>Required for restarting the DX Core server</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_myt_y1y_cpb">
                <image href="../assets/pipeline_dxclient_restart_dxcore_server_DONOTDELETE.png"
                    alt="Pipeline DXClient Restart DX Core Server sample" placement="inline"
                    scale="50" id="image_nyt_y1y_cpb"/>
            </fig>
        </section>
        <section id="section_s4b_bby_cpb">
            <title>Manage syndication</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then enable or
                disable the syndicator or subscriber. It is designed to be run from a Jenkins job
                that requires the following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_t4b_bby_cpb">
                <title>Pipeline DXClient manage syndication</title>
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>CONTENT_HANDLER_PATH</codeph></entry>
                            <entry>Alternate path for the portal context root or the content handler
                                servlet</entry>
                            <entry>Default to <filepath>/wps/mycontenthandler/</filepath></entry>
                        </row>
                        <row>
                            <entry><codeph>SYNDICATOR_OR_SUBSCRIBER</codeph></entry>
                            <entry>This can be syndicator or subscriber</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph>UUID_FOR_SYNDICATION</codeph></entry>
                            <entry>UUID of the syndicator/subscriber instance</entry>
                            <entry/>
                        </row>
                        <row>
                            <entry><codeph>ENABLE</codeph></entry>
                            <entry>Use true or false to enable or disable the
                                syndicator/subscriber</entry>
                            <entry/>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_u4b_bby_cpb">
                <image href="../assets/pipeline_dxclient_deploy_manage_syndication_sample.png"
                    alt="Pipeline DXClient manage syndication" placement="inline" scale="50"
                    id="image_v4b_bby_cpb"/>
            </fig>
        </section>
        <section id="section_rtg_xgh_w4b">
            <title>Deploy theme</title>
            <p>This sample shows how to install the DXClient tool in a pipeline and then deploy or
                update a theme. It is designed to be run from a Jenkins job that provides the
                following parameters:</p>
            <table frame="all" rowsep="1" colsep="1" id="table_ywr_2hh_w4b">
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
                            <entry><codeph>AGENT_LABEL</codeph></entry>
                            <entry>Jenkins agent label</entry>
                            <entry>Determines on which agents the pipeline can run</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_PACKAGE_URL</codeph></entry>
                            <entry>URL to DXClient zip</entry>
                            <entry>Fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>TOOL_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access tool package
                                URL</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTEFACT_PATH</codeph></entry>
                            <entry>URL (except filenames) for artifacts to be deployed</entry>
                            <entry>Artifacts fetched via curl</entry>
                        </row>
                        <row>
                            <entry><codeph>ARTEFACT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access artifact
                                URLs</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_HOST</codeph></entry>
                            <entry>Host name or IP address of DX server</entry>
                            <entry>Artifacts will be deployed to this server</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROTOCOL</codeph></entry>
                            <entry>Protocol to connect to DX server</entry>
                            <entry>HTTP or HTTPS</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PORT</codeph></entry>
                            <entry>Port to connect to DX server</entry>
                            <entry>Port for the DX main profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name/password credentials needed to access DX server</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_CREDENTIALS_ID</codeph></entry>
                            <entry>Credentials ID in Jenkins store</entry>
                            <entry>User name / password credentials needed to access DX server
                                Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_HOST</codeph></entry>
                            <entry>Host name or IP address of the DXConnect servlet (route change
                                only in case of Open Shift Kubernetes Environment. For other case,
                                this parameter should be same as DX_HOST)</entry>
                            <entry>Hostname for the DX Configuration Wizard profile</entry>
                        </row>
                        <row>
                            <entry><codeph>DXCONNECT_PORT</codeph></entry>
                            <entry>Port to connect to DXConnect servlet</entry>
                            <entry>Port for the DX Configuration Wizard profile. Default to
                                10202</entry>
                        </row>
                        <row>
                            <entry><codeph>APPLICATION_FILE</codeph></entry>
                            <entry>File name of EAR application to deploy</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>APPLICATION_NAME</codeph></entry>
                            <entry>Application name for the EAR file to deploy</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_SOAP_PORT</codeph></entry>
                            <entry>Soap Port number of the DX server</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>DX_PROFILE_PATH</codeph></entry>
                            <entry>Profile path of the DX server</entry>
                            <entry>Required for EAR deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>XML_FILE</codeph></entry>
                            <entry>File name of XML file to register the theme</entry>
                            <entry>Required for theme registration</entry>
                        </row>
                        <row>
                            <entry><codeph>XML_CONFIG_PATH</codeph></entry>
                            <entry>URL path to the Configuration endpoint</entry>
                            <entry>Defaults to /wps/config'</entry>
                        </row>
                        <row>
                            <entry><codeph>THEME_NAME</codeph></entry>
                            <entry>WebDAV theme name</entry>
                            <entry>Required for WebDAV deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>THEME_PATH</codeph></entry>
                            <entry>WebDAV theme zip file</entry>
                            <entry>Required for WebDAV deployment</entry>
                        </row>
                        <row>
                            <entry><codeph>CONTENT_HANDLER_PATH</codeph></entry>
                            <entry>Alternate path for the portal context root or the content handler
                                servlet</entry>
                            <entry>Default to /wps/mycontenthandler/</entry>
                        </row>
                    </tbody>
                </tgroup>
            </table>
            <fig id="fig_ttg_xgh_w4b">
                <image href="../assets/pipeline_deploy_theme_sample.png"
                    alt="Pipeline DXClient deploy script application sample" placement="inline"
                    scale="50" id="image_utg_xgh_w4b"/>
            </fig>
        </section>
    </conbody>
</concept>
