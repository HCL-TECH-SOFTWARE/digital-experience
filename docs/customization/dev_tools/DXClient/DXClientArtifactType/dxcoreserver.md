<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="dxcoreserver" xml:lang="en-us">
    <title>DX Core server | HCL Digital Experience</title>
    <titlealts>
        <navtitle>DX Core server</navtitle>
    </titlealts>
    <shortdesc>This topic provides information about restarting the DX Core server and on creating
        core server configuration report using the DXClient tool. The
            <codeph>dx-core-configuration-reports</codeph>command is used to generate the
        differential reports on various core configurations between two DX server nodes.</shortdesc>
    <body>
        <section id="deploydxapp">
            <title>Restart DX Core server </title>
            <note id="note_mbm_bs3_nsb" type="important">Running the
                    <cmdname>restart-dx-core</cmdname> command in the Kubernetes-based deployments
                might not restart all pods as expected, but this limitation will be addressed in the
                future releases. For now, if you want to restart all pods, use the Kubernetes
                interfaces such as <codeph>kubectl</codeph>.</note>
            <p>The <cmdname>restart-dx-core</cmdname> command is used to restart the DX Core
                server.</p>
            <dl id="dl_kts_lxd_xrb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the <option>restart-dx-core</option> tool inside the
                            DXClient and runs the DX Core restart
                            action.<codeblock id="codeblock_lts_lxd_xrb">dxclient restart-dx-core</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>restart-dx-core</codeph> command
                            usage:<codeblock id="codeblock_mts_lxd_xrb">dxclient restart-dx-core -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p> Use this attribute to specify the username that is required for
                            authenticating with the DX
                            Core:<codeblock id="codeblock_nts_lxd_xrb">-dxUsername &lt;value> </codeblock></p>
                        <p> Use this attribute to specify the password that is required for
                            authenticating with the DX
                            Core:<codeblock id="codeblock_ots_lxd_xrb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX server:</p>
                        <p>
                            <codeblock id="codeblock_pts_lxd_xrb">-hostname &lt;value></codeblock>
                        </p>
                        <p> Use this attribute to specify the port number of the
                                <codeph>cw_profile</codeph>:<codeblock id="codeblock_qts_lxd_xrb">-dxConnectPort &lt;value></codeblock></p>
                        <p> Use this attribute to specify the username that is required for
                            authenticating to the
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_rts_lxd_xrb">-dxConnectUsername &lt;value></codeblock></p>
                        <p> Use this attribute to specify the password that is required for
                            authenticating to the
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_sts_lxd_xrb">-dxConnectPassword &lt;value></codeblock></p>
                        <p conref="portlets.dita#portlets/dxprofilepathorname"/>
                        <p>The values that are passed through the command line override the default
                            values.</p>
                        <p>Use this attribute and retrigger the command to check the status of any
                            previous request that was
                            incomplete.<codeblock id="codeblock_t11_r1y_lsb">-requestId &lt;Unique ID of a previously triggered restart request></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_tts_lxd_xrb">dxclient restart-dx-core -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -hostname &lt;hostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;Profile name of the DX core server></codeblock>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="dxcoreconfigreport">
            <title>DX Core server configuration report</title>
            <dl id="dl_k3f_45c_xrb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>The <codeph>dx-core-configuration-reports</codeph> command shows the
                            summary of the configurations of a single DX server or both source and
                            target DX servers, which users can use to
                            compare.<codeblock id="codeblock_pvz_nmw_wrb">dxclient dx-core-configuration-reports [OPTIONS]</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>dx-core-configuration-reports</codeph> command
                            usage:<codeblock id="codeblock_l3f_45c_xrb">dxclient dx-core-configuration-reports summary-report -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_ydw_ymw_wrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of
                                <codeph>cw_profile</codeph>:<codeblock id="codeblock_ynr_zmw_wrb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name that is required for
                            authenticating to
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_pv3_1nw_wrb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_r5y_1nw_wrb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the DX core
                            server:<codeblock id="codeblock_nyk_cnw_wrb">-dxProfileName &lt;Profile name of the DX core server></codeblock></p>
                        <p>Use this attribute to specify the host name of the target DX core
                            server:<codeblock id="codeblock_brd_dnw_wrb">-targetHostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the target cw_profile
                            server:<codeblock id="codeblock_d3j_2nw_wrb">-targetDxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name of the target
                            server:<codeblock id="codeblock_ffg_fnw_wrb">-targetDxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password of the target
                            server:<codeblock id="codeblock_lsw_fnw_wrb">-targetDxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the target
                                server:<codeblock id="codeblock_e4s_gnw_wrb">-targetDxProfileName &lt;Profile name of the DX core server></codeblock><note
                                id="note_sl1_3nw_wrb" type="other" othertype="Note">
                                <ul id="ul_a2p_mrz_msb">
                                    <li>The target server details are needed only when the user
                                        needs to generate the summary of the configurations of both
                                        source and target servers.</li>
                                </ul>
                            </note></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_xs2_4nw_wrb">dxclient dx-core-configuration-reports summary-report -hostname &lt;hostname> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxConnectPort &lt;dxConnectPort> -targetHostname &lt;targetHostname> -targetDxConnectUsername &lt;targetDxConnectUsername> -targetDxConnectPassword &lt;targetDxConnectPassword> -targetDxConnectPort &lt;targetDxConnectPort></codeblock>
                        </p>
                        <!--<p>For more information about how to access the ConfigWizard admin console, refer to <xref href="helm_access_configwizard.dita"/>.</p>-->
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
