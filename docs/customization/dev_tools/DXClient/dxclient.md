<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="dxclient" xml:lang="en-us">
    <title>DXClient | HCL Digital Experience</title>
    <titlealts>
        <navtitle>DXClient</navtitle>
    </titlealts>
    <abstract>
        <shortdesc>DXClient is a tool that helps developers and administrators manage tasks, such as
            uploading one or more portlets or Script Applications, from source development
            environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts
            developed locally and deploying them to DX 9.5 servers deployed to supported on-premises
            platforms in standalone, cluster, or farm-topologies and supported Kubernetes
            platforms.</shortdesc>
        <note id="note_wck_g11_nsb" type="important">DXClient version is mostly forward and backward
            compatible with the DX CF versions, however, in some cases it might not work as expected
            if the CF versions are different. Hence, ensure that the CF versions of both DXClient
            and DX Core are the same in your installation.</note>
        <note type="other" othertype="Notes" id="dockerimage_introduced">
            <p>DXClient is enabled in supported Kubernetes platforms from HCL Digital Experience 9.5
                CF192 and later releases:</p>
            <ul id="ul_kk3_ppn_cqb">
                <li>DXClient is available as a Docker image from HCL DX 9.5 CF196 and later
                    releases, See the <xref href="#dxclient/dxclient_docker" format="dita"
                        >Installation section</xref> for more details.</li>
                <li>DXClient also exists as <xref href="https://nodejs.org/en/" format="html"
                        scope="external">Node.js</xref>-based CLI tool and requires Node.js to be
                    installed as a prerequisite. However, this is deprecated in the HCL Digital
                    Experience Container CF196 release.</li>
            </ul>
        </note>
        <p><b>DXConnect</b></p>
        <p>DXConnect is a servlet-based application deployed on top of IBM WebSphere Application
            Server in the HCL DX 9.5 CF19 and later deployments, under the <xref
                href="../config/cw_overview.html" format="html" scope="peer">Configuration
                Wizard profile - <codeph>cw_profile</codeph></xref>. DXConnect enables the DXClient
            tool to connect over an HTTP or HTTPS connection from a client development machine or
            remote server to a source or target HCL DX 9.5 server to execute certain tasks requested
            via DXClient commands.</p>
    </abstract>
    <body>
        <section id="dxclidnet_architecture">
            <title>Architecture</title>
            <fig id="dxclientarchitecture">
                <image href="../assets/HCLDXClient_Architecture_Diagram.jpg" placement="inline"
                    scale="80" alt="HCL DXClient Architecture Diagram" id="image_zvk_gwm_4nb">
                    <alt>HCL DXClient Architecture diagram</alt>
                </image>
            </fig>
            <note id="note_qgm_q5t_yqb" type="other" othertype="Notes">
                <ol id="ol_m2p_gmf_4nb">
                    <li>HCL DX 9.5 CF19 or later version is installed on target servers, on <xref
                            href="https://support.hcltechsw.com/csm?id=kb_article&amp;sysparm_article=KB0013514&amp;sys_kb_id=17d6296a1b5df34077761fc58d4bcb03"
                            format="html" scope="external">supported on premises platforms</xref>
                        (Microsoft Windows, Linux or IBM AIX).</li>
                    <li>Beginning with HCL DX 9.5 Container Update CF192 and later releases, the
                        DXConnect Servlet is pre-configured and started on supported Red Hat
                        OpenShift and Kubernetes platforms that DX 9.5 containers are deployed
                        to.</li>
                    <li>For supported on premises platforms with HCL DX 9.5 CF19 and later releases,
                        the DXConnect application needs to be installed (refer to <xref
                            href="dxconnect.dita#dxconnect/dxconnectinstall">DXConnect
                            Installation</xref>) and started under the Configuration Wizard
                            (<codeph>cw_profile</codeph>) on target servers. For more information on
                        starting the Configuration Wizard, refer to <xref
                            href="../config/cw_run.dita" scope="peer">Accessing the Configuration
                            Wizard</xref><note id="note_hfz_s5t_yqb" type="remember">Configuration
                            Wizard Administrator credentials are required to access the DXConnect
                            application.</note></li>
                </ol>
            </note>
        </section>
        <section id="dxclient_docker">
            <title>Installing using the Docker image</title>
            <p><b>Prerequisites:</b> You must ensure that Docker is installed on the
                workstation.</p>
            <note>When you upgrade to use the Docker image DXClient, you should first uninstall the
                nodejs DXClient.</note>
            <p>DXClient docker image comes with a script that you can use to run the docker image.
                This script creates a store directory, and copies the input files from the absolute
                path to the shared volume location. </p>
            <p>See video: <xref href="https://www.youtube.com/watch?v=IFr_frVlojc" format="html"
                    scope="external">CI/CD – DXClient in Container</xref></p>
            <p>
                <ol id="ol_nct_lk4_cqb">
                    <li>Navigate to &lt;working-directory> folder where you wish to use DXClient
                        from. </li>
                    <li>Download the DXClient.zip file (DXClient_VX_XXXXXXXX-XXXX.zip) to a local
                        directory on the local workstation from your HCL Digital Experience 9.5
                        CF196 or higher entitlements on the HCL Software License Portal.<note
                            id="note_iv2_2rd_xrb">If you are upgrading from the node to Docker image
                            version of DXClient, you must first uninstall or unlink the current
                            version using the following command before installing the newer
                                version.<p>Syntax for Linux and Apple macOS
                                platforms:<codeblock id="codeblock_s5b_krd_xrb">make unlink</codeblock></p><p>Syntax
                                for Microsoft Windows
                                platforms:<codeblock id="codeblock_k5b_krd_xrb">make_unlink.bat</codeblock></p></note></li>
                    <li>Extract the DXClient.zip file locally.</li>
                    <li>To work with multiple versions of DXClient, update the
                            <codeph>IMAGE_TAG</codeph> reference in the scripts file under the
                            <codeph>/bin</codeph> folder. For example,
                            <codeph>IMAGE_TAG=v95_CF200_20211201-1021</codeph>. By default it will
                        be set in the executable script. </li>
                    <li>Run docker load &lt; dxclient.tar.gz.</li>
                    <li>Add the execution shell script to the bin directory to the PATH variable to
                        be able to call dxclient from any directory.
                            <codeblock id="codeblock_qtb_hl4_cqb"> export PATH=&lt;working-directory>/bin:$PATH</codeblock><p>For
                            Microsoft Windows platforms:</p><p>use <codeph>dxclient.bat</codeph>
                            script in the bin directory to the PATH variable to be able to call
                            DXClient from any directory.</p></li>
                    <li>Set appropriate
                        permission.<codeblock id="codeblock_hpc_1m4_cqb">chmod xxx &lt;working-directory>/bin</codeblock></li>
                    <li>Run 'dxclient -V' to verify that the dxclient command line is installed.
                            <p>A folder named store will be created in your working directory. This
                            is the shared volume location to your docker container.</p></li>
                    <li>Configuration, logger, output, and sample files under location -
                        &lt;working-directory>/store.</li>
                </ol>
            </p>
            <p>Common command arguments can be pre-configured inside the
                    <codeph>config.json</codeph> file available under
                    <codeph>&lt;working-directory>/store</codeph> folder. A sample configuration
                file that could be used on-premises platforms in standalone, cluster platforms is
                also available under
                    <codeph>&lt;working-directory>/store/samples/sample-configurations/default-config.json</codeph>
                for reference.</p>
        </section>
        <section id="section_y3g_s4l_xrb">
            <title>DXClient installation configuration</title>
            <p>Common command arguments can be pre-configured inside the
                    <codeph>config.json</codeph> file available under
                    <codeph>dist/src/configuration</codeph> folder. A sample configuration file that
                could be used for any of the supported Kubernetes platforms is also available under
                    <codeph>samples/sample-configurations.json</codeph> for
                reference.<codeblock id="codeblock_pqq_cpl_xrb">
{
    "enableLogger": true,
    "enableBackup": "false",
    "dxProtocol": "",
    "hostname": "",
    "dxPort": "",
    "dxContextRoot":"/wps",
    "xmlConfigPath": "/wps/config",
    "dxUsername": "",
    "dxPassword": "",
    "dxSoapPort": "10033",
    "dxProfileName": "wp_profile",
    "dxProfilePath": "",
    "dxConnectHostname": "",
    "dxConnectUsername": "",
    "dxConnectPassword": "",
    "dxConnectPort": "10202",
    "dxWASUsername": "",
    "dxWASPassword": "",
    "dxConnectProtocol": "https",
    "wcmSiteArea": "",
    "wcmContentPath": "",
    "wcmContentName": "",
    "contenthandlerPath": "/wps/mycontenthandler",
    "wcmContentId": "",
    "restoreAsPublished": false,
    "wcmLibraryId": "",
    "virtualPortalContext": "",
    "projectContext": "",
    "wcmLibraryName": "",
    "lastModifiedAfter": "",
    "damAPIPort": "",
    "ringAPIPort": "",
    "damAPIVersion": "",
    "ringAPIVersion": "",
    "wcmProjectName": "",
    "targetHostname": "",
    "targetDxConnectPort": "",
    "targetDxConnectUsername":"",
    "targetDxConnectPassword":"",
    "targetDxProfileName": ""
}
</codeblock></p>
        </section>
        <section id="dxclient_node">
            <title>Installing using the node package file (deprecated in CF196)</title>
            <p><b>Prerequisites:</b> Node.js version 12.18.3 is the minimum supported version, and
                must be installed on the local workstation or automation server.</p>
            <p>See video: <xref href="https://www.youtube.com/watch?v=OphJ8-WcLxY" format="html"
                    scope="external">Getting Started with DXClient on Red Hat OpenShift using HCL
                    Digital Experience Container Update CF194</xref></p>
            <note id="note_mwz_lqn_cqb"> DXClient node package is deprecated in the HCL Digital
                Experience Container CF196 release. It might be removed in the future releases. You
                are encouraged to use the <xref href="#dxclient/dxclient_docker" format="dita"
                    >DXClient Docker package</xref> from CF Container release CF196 and
                later.</note>
            <p>
                <ol id="ol_xqm_4wv_v4b">
                    <li>Complete the following steps to install the DXClient tool in your local
                        development workstation or automation server.<note>If you are upgrading from
                            CF19, CF191, or later releases, you should first unlink the current
                            version using the following command before installing the newer
                                version.<p>Syntax for Linux and Apple macOS
                                platforms:<codeblock id="codeblock_ky2_hh4_cqb">make unlink</codeblock></p><p>Syntax
                                for Microsoft Windows
                                platforms:<codeblock id="codeblock_cy2_hh4_cqb">make_unlink.bat</codeblock></p></note></li>
                    <li>Ensure that Node.js version 12.18.3 or later version is installed to the
                        local workstation. The DXClient tool is supported on Microsoft Windows,
                        Linux, and Apple macOS workstations and automation servers.</li>
                    <li>Download the <filepath>DXClient.zip</filepath> file
                            (<filepath>DXClient_VX_XXXXXXXX-XXXX.zip</filepath>) to a local
                        directory on the local workstation from your DX 9.5 CF19 or later
                        entitlements on the <xref
                            href="https://www.hcltech.com/software/support/release" format="html"
                            scope="external">HCL Software License Portal</xref>. Reference the <xref
                            href="../../9.5/containerization/docker.html" scope="peer" format="html"
                            >Docker</xref> topic for the latest list of HCL DX 9.5 files available
                        for download. </li>
                    <li>Extract the <filepath>DXClient.zip</filepath> file locally. </li>
                    <li>From the extracted folder, run the following command.<p>For Linux and Apple
                            macOS platforms:<codeblock>make install</codeblock></p><p>For Microsoft
                            Windows platforms:<codeblock>make_install.bat</codeblock></p><p>The
                            following commands are run:</p><fig id="fig_qrj_sd4_wnb">
                            <image href="../assets/Install_DXClient_Command.png" placement="inline"
                                scale="50" alt="Install DXClient tool" id="image_rrj_sd4_wnb"/>
                        </fig></li>
                    <li>Run the following command to link your application to the local npm module
                        in your machine. Refer to the following Notes section before you
                            proceed.<p>For Linux and Apple MacOS
                            platforms:<codeblock>make link</codeblock></p><p>For Microsoft Windows
                                platforms:<codeblock>make_link.bat</codeblock><note type="other"
                                othertype="Notes">
                                <ul id="ul_vfd_kx4_ynb">
                                    <li>Avoid using this command when scripting deployments from an
                                        automation server (for example, in pipelines) as there is a
                                        chance of picking up the wrong dependencies during tool
                                        version upgrades.</li>
                                    <li>If the <codeph>link</codeph> command is not used (such as on
                                        automation servers), then use the following command to run
                                        the application:<p>For Linux and Apple MacOS
                                            platforms:<codeblock>./bin/dxclient</codeblock></p><p>For
                                            Microsoft Windows
                                            platforms:<codeblock>node bin/dxclient</codeblock></p></li>
                                </ul>
                            </note></p></li>
                </ol>
            </p>
            <dl id="dl_std_jj4_cqb">
                <dlentry>
                    <dt>DXClient node uninstalling</dt>
                    <dd>
                        <p>
                            <ul id="ul_udd_s4x_v4b">
                                <li>To uninstall the DXClient tool, perform the following
                                        commands:<p>For Linux and Apple MacOS
                                        platforms:<codeblock id="codeblock_qyn_rj4_cqb">make clean</codeblock></p><p>For
                                        Microsoft Windows
                                        platforms:<codeblock id="codeblock_ryn_rj4_cqb">make uninstall.bat</codeblock></p></li>
                                <li>To unlink the DXClient tool, perform the following
                                        commands:<p>For Linux and Apple MacOS
                                        platforms:<codeblock id="codeblock_syn_rj4_cqb">make unlink</codeblock></p><p>For
                                        Microsoft Windows
                                        platforms:<codeblock id="codeblock_tyn_rj4_cqb">make_unlink.bat</codeblock></p></li>
                            </ul>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_i2h_x11_2qb">
            <title>Verify the DXClient installation</title>
            <p>Successful installation of the DXClient tool can be checked by using the
                    "<codeph>dxclient -V</codeph>" command, which should show the version of the
                DXClient tool installed. </p>
            <p>Once installed, commands can be executed using the DXClient tool to perform CI / CD
                actions on HCL DX 9.5 servers. <note type="other" othertype="Notes"
                    id="note_spz_kj4_cqb">Refer to the list of features that were released in the
                    following HCL DX 9.5 Container releases:<ul id="ul_qf1_q13_ppb">
                        <li>HCL DX 9.5 CF201 release:<ul id="ul_gxy_xzy_msb">
                                <li>An optional parameter <codeph>requestId</codeph> added to <xref
                                        href="themes.dita#themes/deploytheme"/>, <xref
                                        href="deployapplication.dita#deployapplication/deploydxapp"
                                        >Deploy application</xref>, <xref
                                        href="dxcoreserver.dita#dxcoreserver/deploydxapp"/>, and
                                        <xref href="virtualportals.dita">Manage virtual
                                        portals</xref>.</li>
                                <li>Retrieve feature added to the <xref
                                        href="resourceenvironments.dita">Resource environment
                                        provider</xref>.</li>
                                <li><xref href="helm_access_configwizard.dita">Accessing
                                        ConfigWizard in container environment</xref></li>
                                <li>Note that a few parameters are deprecated and replaced with new
                                    parameters in the DX Core configuration reports. For
                                    information, see <xref
                                        href="dxcoreserver.dita#dxcoreserver/dxcoreconfigreport"
                                    /></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF200 release:<ul id="ul_ug3_smc_xrb">
                                <li><xref href="wcmlibraries.dita">Exporting and Importing WCM
                                        libraries</xref></li>
                                <li><xref href="dxcoreserver.dita#dxcoreserver/dxcoreconfigreport"
                                        >DX Core server configuration report</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF199 release:<ul id="ul_hff_3kd_lrb">
                                <li><xref href="dam_subscription_staging.dita">DAM
                                    Staging</xref></li>
                                <li><xref href="credentialvaultslot.dita">Create credential vault
                                        slot</xref></li>
                                <li><xref
                                        href="syndicatorsandsubscribers.dita#syndicatorsandsubscribers/section_ndj_bcd_lrb"
                                        >Create syndication relation</xref></li>
                                <li><xref href="resourceenvironments.dita">Export and import
                                        multiple resource environment providers</xref></li>
                                <li><xref href="personalization.dita">Specify the context root for
                                        exporting and importing personalization rules</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF198 release:<ul id="ul_aqb_w1r_zqb">
                                <li><xref href="damschemas.dita#damschemas/listdamschema">List DAM
                                        schemas</xref></li>
                                <li><xref href="personalization.dita">Personalization export and
                                        import rules</xref></li>
                                <li><xref href="resourceenvironments.dita">Resource environment
                                        provider</xref></li>
                                <li><xref href="virtualportals.dita">Manage virtual
                                    portals</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF197 release:<ul id="ul_acs_fzq_zqb">
                                <li><xref href="portlets.dita#portlets/section_xjb_2hg_w4b">Undeploy
                                        portlets</xref></li>
                                <li><xref href="themes.dita">Deploy and undeploy themes</xref></li>
                                <li><xref
                                        href="deployapplication.dita#deployapplication/deploydxapp"
                                        >Deploy application</xref></li>
                                <li><xref
                                        href="syndicatorsandsubscribers.dita#syndicatorsandsubscribers/section_zfd_c1c_2qb"
                                        >manage get-syndication report</xref></li>
                                <li><xref href="dxcoreserver.dita#dxcoreserver/deploydxapp">Restart
                                        Core</xref></li>
                                <li><xref href="damschemas.dita#damschemas/deletedamschema">Delete
                                        DAM schema</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF196 release:<ul id="ul_bjf_zwh_dqb">
                                <li><xref href="sharedlibrary.dita">Shared library</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF195 release:<ul id="ul_xpw_j33_ppb">
                                <li><xref href="themes.dita#themes/section_rsy_qj3_ppb"/></li>
                                <li><xref href="../wcm/wcm_mls_export_import.dita">MLS export and
                                        import of WCM library</xref></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF193 release:<ul id="ul_prk_jb3_ppb">
                                <li><xref href="dxcoreserver.dita#dxcoreserver/deploydxapp"/></li>
                                <li><xref
                                        href="deployapplication.dita#deployapplication/deploydxapp"
                                    /></li>
                                <li><xref
                                        href="syndicatorsandsubscribers.dita#syndicatorsandsubscribers/deploydxapp"
                                    /></li>
                                <li><xref
                                        href="syndicatorsandsubscribers.dita#syndicatorsandsubscribers/section_cwj_dpf_dpb"
                                    /></li>
                            </ul></li>
                        <li>HCL DX 9.5 CF192 release:<ul id="ul_qlt_znx_v4b">
                                <li><xref
                                        href="scriptapplications.dita#scriptapplications/section_i2y_ttl_4nb"
                                    /></li>
                                <li><xref href="themes.dita#themes/deploytheme"/> (EAR and WebDAV
                                    based)</li>
                            </ul></li>
                        <li>HCL DX 9.5 CF19 release:<ul id="ul_oqs_mmx_v4b">
                                <li><xref href="portlets.dita#portlets/section_xzq_tyv_v4b"/> or
                                        <xref href="portlets.dita#portlets/section_xjb_2hg_w4b"
                                    /></li>
                                <li><xref
                                        href="scriptapplications.dita#scriptapplications/section_um4_jqg_w4b"
                                    /></li>
                                <li><xref href="xmlaccess.dita#xmlaccess/xmlaccess"/></li>
                                <li><xref
                                        href="scriptapplications.dita#scriptapplications/section_fzm_yqg_w4b"
                                    /></li>
                            </ul></li>
                    </ul></note></p>
        </section>
        <section id="section_gvt_xwv_v4b">
            <title>DXClient commands</title>
            <p>Command syntax conventions:<codeblock>dxclient [command] [options]</codeblock></p>
            <p>Use the following command to execute the deploy portlet
                action:<codeblock>dxclient deploy-portlet [options]</codeblock></p>
            <p>Use the following command to execute the undeploy portlet
                action:<codeblock>dxclient undeploy-portlet [options]</codeblock></p>
            <p>Use the following command to execute the xmlaccess
                action:<codeblock>dxclient xmlaccess [options]</codeblock></p>
            <p>Use the following command to execute the <cite>pull</cite> script application
                action:<codeblock>dxclient deploy-scriptapplication pull [options]</codeblock></p>
            <p>Use the following command to execute the <cite>push</cite> script application
                action:<codeblock>dxclient deploy-scriptapplication push [options]</codeblock></p>
            <p>Use the following command to execute the undeploy script application
                action:<codeblock>dxclient undeploy-scriptapplication [options]</codeblock></p>
            <p>Use the following command to execute the restore script application
                action:<codeblock>dxclient restore-scriptapplication [options]</codeblock></p>
            <p>Use the following command to execute the deploy application
                action:<codeblock>dxclient deploy-application [options]</codeblock></p>
            <p>Use the following command to execute the DX Core restart
                action:<codeblock>dxclient restart-dx-core</codeblock></p>
            <p>Use the following command to execute manage-subscriber
                action:<codeblock id="codeblock_kdv_bn4_cqb">dxclient manage-subscriber -h</codeblock></p>
            <p>Use the following command to execute manage-syndicator
                action:<codeblock id="codeblock_zxh_dn4_cqb">dxclient manage-syndicator -h</codeblock></p>
            <p>Use the following command to execute the deploy theme
                action:<codeblock id="codeblock_pr4_jn4_cqb">dxclient deploy-theme [options]</codeblock></p>
            <p>Use the following command to execute the undeploy theme
                action:<codeblock id="codeblock_spt_p33_ppb">dxclient undeploy-theme [options]
</codeblock></p>
            <p>Use the following command to execute the manage-syndicator get-syndication-report
                action:<codeblock id="codeblock_i2c_nn4_cqb">dxclient  manage-syndicator get-syndication-report [options]</codeblock></p>
            <p>Use the following command to execute the shared-library
                action:<codeblock id="codeblock_lzk_pn4_cqb">dxclient  shared-library [options]</codeblock></p>
            <p>Use the following command to execute the delete DAM schema
                action:<codeblock id="codeblock_zjs_lqz_mqb">dxclient delete-dam-schema [options]</codeblock></p>
            <p>Use the following command to list all DAM schemas
                present:<codeblock id="codeblock_u2m_xtt_yqb">dxclient list-dam-schemas  [options]</codeblock></p>
            <p>Use the following command to export the personalization rules from the target
                server:<codeblock id="codeblock_w52_ztt_yqb">dxclient pzn-export  [options]</codeblock></p>
            <p>Use the following command to import the personalization rules into the target
                server:<codeblock id="codeblock_ebj_15t_yqb">dxclient pzn-import  [options]</codeblock></p>
            <p>Use the following command to manage virtual portal tasks in the DX
                server:<codeblock id="codeblock_t1t_c5t_yqb">dxclient manage-virtual-portal [options]</codeblock></p>
            <p>Use the following command to register
                subscriber:<codeblock id="codeblock_p4y_3qd_lrb">dxclient manage-dam-staging register-dam-subscriber [options]</codeblock></p>
            <p>Use the following command to deregister
                subscriber:<codeblock id="codeblock_fjx_jqd_lrb">dxclient manage-dam-staging deregister-dam-subscriber  [options]</codeblock></p>
            <p>Use the following command to trigger manual
                sync:<codeblock id="codeblock_bgb_lqd_lrb">dxclient manage-dam-staging trigger-staging  [options]</codeblock></p>
            <p>Use the following command to create credential vault slot in the DX
                server:<codeblock id="codeblock_dv4_mqd_lrb">dxclient create-credential-vault  [options]</codeblock></p>
            <p>Use the following command to create the syndication relation between syndicator and
                subscriber in DX
                server:<codeblock id="codeblock_czp_nqd_lrb">dxclient create-syndication-relation  [options]</codeblock></p>
            <p>Use the following command to create, update, delete, export or import a custom
                property from an existing Resource Environment
                Provider:<codeblock id="codeblock_y2w_4qd_lrb">dxclient resource-env-provider [options]</codeblock></p>
            <p>Use this command to export WCM
                libraries<codeblock id="codeblock_x3n_h4w_wrb">dxclient wcm-library-export
</codeblock></p>
            <p>Use this command to import WCM
                libraries<codeblock id="codeblock_b21_4pw_wrb">dxclient wcm-library-import
</codeblock></p>
            <p>Use the <codeph>dx-core-configuration-reports</codeph> command to get a summary of
                the configurations of a single DX server or both source and target DX servers, which
                users can use to
                compare.<codeblock id="codeblock_pvz_nmw_wrb">dxclient dx-core-configuration-reports [OPTIONS]</codeblock></p>
        </section>
        <section id="section_bkx_bxv_v4b">
            <title>DXClient Help commands</title>
            <p>The following commands show the Help documents for DXClient command usage.</p>
            <p>Use the following commands to display the Help document for
                DXClient:<codeblock>dxclient</codeblock><codeblock>dxclient -h, --help </codeblock></p>
            <p>Use the following command to display the DXClient version
                number:<codeblock>dxclient -V, --version</codeblock></p>
            <p>Use the following command to display the detailed help for a specific
                command:<codeblock>dxclient help [command]</codeblock></p>
        </section>
        <section id="section_skh_ccz_msb">
            <title>Accessing the ConfigWizard admin console in a container environment </title>
            <p>You can access the ConfigWizard admin console in a container environment from your
                local system. For more information, refer to <xref
                    href="helm_access_configwizard.dita"/>.</p>
        </section>
    </body>
</topic>
