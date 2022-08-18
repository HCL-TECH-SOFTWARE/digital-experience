<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="portlets" xml:lang="en-us">
    <title>Portlets | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Portlets </navtitle>
    </titlealts>
    <shortdesc>This topic provides information about the deployment and undeployment of
        portlets.</shortdesc>
    <body>
        <section id="section_xzq_tyv_v4b">
            <title>Deploy Portlets</title>
            <p>The <codeph>deploy-portlet</codeph> command is used to deploy one or more new or
                updated portlets from a source client or server environment to target HCL DX 9.5
                CF19 or later server using a provided input <filepath>XMLAccess</filepath> file and
                deployable <filepath>Portlet WAR</filepath> file.<note>The synchronization mode of
                    all nodes in a clustered DX environment must be consistently set for a newly
                    deployed portlet to be automatically started; otherwise redeployment or a manual
                    start is required.</note></p>
            <p><b>Required files</b></p>
            <dl>
                <dlentry>
                    <dt>XMLAccess file</dt>
                    <dd>This xml file should contain the definition of the web application along
                        with the details of the portlet(s) to be deployed. The web archive file path
                        referred to in this file inside the URL element is ignored, but the URL
                        element itself must exist as it is dynamically replaced when the command is
                        executed. A sample XML file for deploying portlet(s) can be found in the
                        samples directory of DXClient
                            (<filepath>samples/DeployPortlet.xml</filepath>) or in DX server located
                        in the following
                            directory: <filepath>PortalServer_root/doc/xml-samples/DeployPortlet.xml</filepath>.</dd>
                </dlentry>
            </dl>
            <dl>
                <dlentry>
                    <dt>Portlet Application web archive file</dt>
                    <dd>This web archive <filepath>.war</filepath> file should contain the necessary
                        portlet artifacts for deployment, as per the JSR 286 portlet standard. Refer
                        to <xref href="../admin-system/adxmlref_import_war.dita"
                            format="dita"/></dd>
                </dlentry>
            </dl>
            <p><b>Command</b></p>
            <p>
                <codeblock>dxclient deploy-portlet -xmlFile &lt;path> -warFile &lt;path></codeblock>
            </p>
            <p><b>Help command</b></p>
            <p>This command shows the help document on the <codeph>deploy-portlet</codeph> command
                usage:<codeblock>dxclient deploy-portlet -h</codeblock></p>
            <p><b>Command options</b></p>
            <p>Use this attribute to specify the protocol with which to connect to the DX server
                    (<codeph>wp_profile</codeph>):<codeblock>-dxProtocol &lt;value></codeblock></p>
            <p>Use this attribute to specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p>
            <p>Use this attribute to specify the port on which to connect to the DX server
                    (<codeph>wp_profile</codeph>):<codeblock>-dxPort &lt;value></codeblock></p>
            <p>Use this attribute to specify the path to DX configuration endpoint (e.g.
                    <filepath>/wps/config</filepath>):<codeblock>-xmlConfigPath &lt;value></codeblock></p>
            <p>Use this attribute to specify the username to authenticate with the DX server
                    (<codeph>wp_profile</codeph>):<codeblock>-dxUsername &lt;value></codeblock></p>
            <p>Use this attribute to specify the password for the user in the
                    <codeph>dxUsername</codeph>
                attribute:<codeblock>-dxPassword &lt;value></codeblock></p>
            <p>Use this attribute to specify the local path to the XMLAccess
                file:<codeblock>-xmlFile &lt;Absolute or relative path to XMLAccess input file></codeblock></p>
            <p>Use this attribute to specify the local path to the WAR file to be
                deployed:<codeblock>-warFile &lt;Absolute or relative path to deployable war file></codeblock></p>
            <p>Use this attribute to specify the Configuration Wizard Console port
                number:<codeblock>-dxConnectPort &lt;value></codeblock></p>
            <p>Use this attribute to specify the Configuration Wizard Administrator username that is
                required for authenticating with the DXConnect
                application:<codeblock>-dxConnectUsername &lt;value></codeblock></p>
            <p>Use this attribute to specify the Configuration Wizard Administrator password that is
                required for authenticating with the DXConnect
                application:<codeblock>-dxConnectPassword &lt;value></codeblock></p>
            <p>Log files from command execution can be found in the logs directory of the DXClient
                installation.</p>
        </section>
        <section id="section_xjb_2hg_w4b">
            <title>Undeploy portlets</title>
            <p>The <codeph>undeploy-portlet</codeph> command is used to undeploy the portlets in the
                target DX servers.<note id="note_hnp_lt4_cqb">Undeploy-portlet command takes a
                    backup of the XML file of the deployed portlet application and application (EAR)
                    if user has given <cmdname>enableBackup</cmdname> as true. By default,
                    enableBackup is set to true and placed in the
                        <codeph>store/outputFiles/portlets/backup/undeploy-portlet/</codeph>. In
                    case, if the undeployed portlet is required again, then the user can restore the
                    portlet WAR file from the downloaded portlet application EAR file along with the
                    exported deployable portlet application XML file.</note></p>
            <dl>
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the undeploy-portlet tool inside the DXClient. The
                            undeploy-portlet dxtool uses the provided files and executes the
                            undeploy portlet
                            task.<codeblock id="codeblock_v53_f54_cqb">dxclient undeploy-portlet</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>undeploy-portlet</codeph> command
                            usage:<codeblock id="codeblock_jhd_crz_mqb">dxclient undeploy-portlet -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required files</dt>
                    <dd>
                        <p>This file should contain the definition of the web application along with
                            the undeploy portlet.
                            <codeblock id="codeblock_rpq_454_cqb">dxclient undeploy-portlet -xmlFile &lt;path></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_xlc_v54_cqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            DX server
                            (<filepath>wp_profile</filepath>):<codeblock id="codeblock_kyx_grz_mqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the DX
                            server
                            (<codeph>wp_profile</codeph>):<codeblock id="codeblock_lyx_grz_mqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to DX configuration endpoint (e.g.
                                /<filepath>wps/config</filepath>wps/config):<codeblock id="codeblock_myx_grz_mqb">-xmlConfigPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username to authenticate with the DX
                            server
                            (<codeph>wp_profile</codeph>):<codeblock id="codeblock_nyx_grz_mqb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password for the user in the
                                <codeph>dxUsername</codeph>
                            attribute:<codeblock id="codeblock_oyx_grz_mqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the local path to the XMLAccess
                            file:<codeblock id="codeblock_pyx_grz_mqb">-xmlFile &lt;xml file name with absolute path of the xmlaccess input file></codeblock></p>
                        <p>Use this attribute to take the backup of portlet application before
                            undeploying
                            it:<codeblock id="codeblock_wqp_dv4_cqb">-enableBackup &lt;value></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Commands required when enableBackup is set to true</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_wfq_3v4_cqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the cw_profile(for
                            Kubernetes Environment dxConnectPort is
                            443):<codeblock id="codeblock_zhb_kv4_cqb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_cqy_kv4_cqb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_vys_lv4_cqb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify Soap port of the DX
                            server:<codeblock id="codeblock_vn1_nv4_cqb">-dxSoapPort &lt;Soap port of the DX server></codeblock></p>
                        <p id="dxprofilepathorname">Specify either the
                                <codeph>dxProfileName</codeph> or <codeph>dxProfilePath</codeph> of
                            the DX core server: <ul id="ul_cdk_h2w_nqb">
                                <li>Use this attribute to specify the profile name of the DX core
                                    server (for example:
                                    <codeph>wp_profile</codeph>):<codeblock id="codeblock_vkp_bvz_mqb">-dxProfileName &lt;Profile name of the DX core server></codeblock></li>
                            </ul><b>OR</b><ul id="ul_jnm_k2w_nqb">
                                <li>Use this attribute to specify the profile path of the DX server
                                    (for example:
                                    <codeph>/opt/HCL/wp_profile</codeph>):<codeblock id="codeblock_zjx_nv4_cqb">-dxProfilePath &lt;Path of the DX core server profile> </codeblock></li>
                            </ul></p>
                    </dd>
                </dlentry>
            </dl>
            <p>The values that are passed through the command line override the default values.</p>
            <p><b>Example:</b><codeblock>dxclient undeploy-portlet -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -xmlConfigPath &lt;xmlConfigPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -xmlFile &lt;xml-file-with-path> </codeblock></p>
            <p><b>Example usage when <cmdname>enableBackup </cmdname> is set to
                        <option>true</option>:</b><codeblock id="codeblock_ck3_3w4_cqb">dxclient undeploy-portlet -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -xmlConfigPath &lt;xmlConfigPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -xmlFile &lt;xml-file-with-path> -enableBackup true -dxSoapPort &lt;dxSoapPort> -hostname &lt;hostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;Profile name of the DX core server profile></codeblock></p>
        </section>
        <p>
            <note>The attribute <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                releases. It is recommended that you start using the replacement parameter
                    <codeph>-hostname</codeph> starting from CF202 wherever necessary.</note>
        </p>
    </body>
</topic>
