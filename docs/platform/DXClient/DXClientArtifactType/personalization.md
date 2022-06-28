<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="pzn" xml:lang="en-us">
    <title>Personalization rules | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Personalization</navtitle>
    </titlealts>
    <shortdesc>This topic contains the commands that the administrators can use to export and import
        the personalization (PZN) rules from the source server to the target server as specified by
        the user. </shortdesc>
    <body>
        <section id="pznexport">
            <title>Export PZN rules</title>
            <dl id="dl_yyr_vwt_yqb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>The <codeph>pzn-export</codeph> command is used to export the rules from
                            the source server location specified by the
                            user:<codeblock id="codeblock_zyr_vwt_yqb">dxclient pzn-export</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for <codeph>pzn-export</codeph>
                            command
                            usage:<codeblock id="codeblock_azr_vwt_yqb">dxclient pzn-export -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            DX
                            server:<codeblock id="codeblock_inl_2l5_yqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_pbh_fl5_yqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the DX
                            server (e.g. for Kubernetes Environment <codeph>dxPort</codeph> is
                            443):<codeblock id="codeblock_dpx_gl5_yqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username to authenticate with the DX
                            server:<codeblock id="codeblock_z2v_hl5_yqb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password for the user in the
                                <codeph>dxUsername</codeph>
                            attribute:<codeblock id="codeblock_vvt_3l5_yqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the location in the target workspace, which
                            is the parent for the published nodes. The target path must exist before
                            publishing:
                            <codeblock id="codeblock_nbt_jl5_yqb">-targetPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the name of the workspace containing the
                            rules in DX server (default <codeph>targetWorkspace</codeph> is
                                'ROOTWORKSPACE'):<codeblock id="codeblock_ot4_kl5_yqb">-targetWorkspace &lt;value></codeblock><note
                                id="note_xw2_nl5_yqb">The <codeph>targetPath</codeph> and
                                    <codeph>targetWorkspace</codeph> parameters are optional. If the
                                user does not pass the respective parameters, then the default
                                values are taken.</note></p>
                        <p>Use this attribute to specify the path to the context root on the DX
                            server (for example,
                            <filepath>/wps</filepath>):<codeblock id="codeblock_th5_5ld_lrb">-dxContextRoot &lt;value></codeblock></p>
                        <p>Log files from command execution can be found in the logs directory of
                            the DXClient installation.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <codeblock id="codeblock_d2m_tl5_yqb">dxclient pzn-export -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword></codeblock>
                        <p>The outputfile for pzn export is generated in the following path:
                                <filepath>store/outputFiles/pznrules</filepath></p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="pznimport">
            <title>Import PZN rules</title>
            <dl id="dl_ffx_xl5_yqb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>The <codeph>pzn-import</codeph> command is used to import the rules into
                            the target
                            server.<codeblock id="codeblock_gfx_xl5_yqb">dxclient pzn-import</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required files</dt>
                    <dd>
                        <p>Rules file: This file should contain the configuration XML representation
                            of all the currently selected personalization objects.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for <codeph>pzn-import</codeph>
                            command
                            usage:<codeblock id="codeblock_hfx_xl5_yqb">dxclient pzn-import -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            DX
                            server:<codeblock id="codeblock_hbz_x45_yqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_mcy_y45_yqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the DX
                            server (e.g. for Kubernetes Environment dxPort is
                            443):<codeblock id="codeblock_ywy_z45_yqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username to authenticate with the DX
                            server:<codeblock id="codeblock_grs_1p5_yqb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password for the user in the
                            "dxUsername"
                            attribute:<codeblock id="codeblock_hqj_gp5_yqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_w4w_hp5_yqb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_py4_3p5_yqb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the cw_profile (e.g. for
                            Kubernetes Environment dxConnectPort is
                            443):<codeblock id="codeblock_m2j_jp5_yqb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the import file path that is required while
                            executing the pzn import
                            task:<codeblock id="codeblock_b5c_kp5_yqb">-rulesFilePath &lt;Absolute or relative path to import nodes file> </codeblock></p>
                        <p>Use this attribute to specify the location in the target workspace, which
                            is the parent for the published nodes. The target path must exist before
                            publishing:<codeblock id="codeblock_fxv_kp5_yqb">-targetPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the name of the workspace containing the
                            rules in DX server (default targetWorkspace is
                            'ROOTWORKSPACE'):<codeblock id="codeblock_wbp_lp5_yqb">-targetWorkspace &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the context root on the DX
                            server (for example,
                                <filepath>/wps</filepath>):<codeblock id="codeblock_vyd_xmd_lrb">-dxContextRoot &lt;value></codeblock><note
                                id="note_qxs_rp5_yqb" type="other" othertype="Notes">
                                <ul id="ul_hbv_cnd_lrb">
                                    <li>For Kubernetes environments, <codeph>dxProtocol</codeph>
                                        should be <codeph>http</codeph>, <codeph>hostname</codeph>
                                        should be <filepath>localhost</filepath>,
                                            <codeph>dxPort</codeph> should be
                                            <filepath>10039</filepath> as DXConnect doesn't support
                                            <filepath>https</filepath> due to SSL Handshake
                                        challenges at this time.</li>
                                    <li>The <codeph>dxProtocol</codeph>, <codeph>hostname</codeph>,
                                            <codeph>dxPort</codeph>,
                                            <codeph>targetWorkspace</codeph>, and
                                            <codeph>targetPath</codeph> parameters are optional. If
                                        the user does not pass the respective parameters, then the
                                        default values are taken.</li>
                                </ul>
                            </note></p>
                        <p>Log files from command execution can be found in the logs directory of
                            the DXClient installation.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_xjr_tp5_yqb">dxclient pzn-import -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -hostname &lt;dxConnectHostname> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxConnectPort &lt;dxConnectPort> -rulesFilePath &lt;rulesFilePath></codeblock>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <p>
            <note>The attribute <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                releases. It is recommended that you start using the replacement parameter
                    <codeph>-hostname</codeph> starting from CF202 wherever necessary.</note>
        </p>
    </body>
</topic>
