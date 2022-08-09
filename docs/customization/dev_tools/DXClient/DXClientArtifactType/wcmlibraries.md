<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="wcmlibraries" xml:lang="en-us">
    <title>Exporting and importing WCM libraries | HCL Digital Experience</title>
    <titlealts>
        <navtitle>WCM libraries</navtitle>
    </titlealts>
    <shortdesc>This section provides information about how to export and import WCM libraries using
        DXClient.</shortdesc>
    <body>
        <note id="note_tr5_xpl_xrb">WCM export and import supports the WCM JCR nodes format.</note>
        <section id="section_gfs_d4w_wrb">
            <title>Export WCM libraries </title>
            <p>The <codeph>wcm-library-export</codeph> command is used to export the WCM libraries
                from the source server to an output location in the
                    <filepath>&lt;working-directory>/store/</filepath> folder.</p>
            <dl id="dl_hfs_d4w_wrb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_x3n_h4w_wrb">dxclient wcm-library-export
</codeblock>
                        </p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help document about the
                                <codeph>wcm-library-export</codeph>
                            command:<codeblock id="codeblock_vkx_j4w_wrb">dxclient wcm-library-export -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the user name that is required to
                            authenticate to the
                            server:<codeblock id="codeblock_jjz_m4w_wrb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required to
                            authenticate to the
                            server:<codeblock id="codeblock_ac1_44w_wrb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_w3w_44w_wrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the
                                <codeph>cw_profile</codeph> (for Kubernetes Environment,
                                <codeph>dxConnectPort</codeph> is
                            443):<codeblock id="codeblock_pwy_p4w_wrb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name that is required for
                            authenticating to the
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_ptq_q4w_wrb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_dhg_r4w_wrb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name of the DX WAS
                            server:<codeblock id="codeblock_bhv_r4w_wrb">-dxWASUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password of the DX WAS
                            server:<codeblock id="codeblock_o2n_s4w_wrb">-dxWASPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the DX core
                            server:<codeblock id="codeblock_nhf_t4w_wrb">-dxProfileName &lt;Profile name of the DX core server> </codeblock></p>
                        <p>Use this attribute to specify the names of the WCM  libraries of the DX
                            core server (for example,
                                <userinput>"hello_library,demo_library"</userinput>):<codeblock id="codeblock_hn1_54w_wrb">-librariesName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the export libraries. This value can be
                            either <varname>true</varname> or <varname>false</varname>. If the value
                            is <varname>true</varname>, then export the all
                            libraries:<codeblock id="codeblock_b4r_54w_wrb">-exportAllLibraries &lt;value></codeblock></p>
                        <p>Log files from running the command can be found in the logs directory of
                            the DXClient installation.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <codeblock id="codeblock_p3y_2pw_wrb"> dxclient wcm-library-export -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword>  -hostname &lt;dxConnectHostname> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxWASUsername &lt;dxWASUsername> -dxProfileName &lt;dxProfileName> -librariesName &lt;librariesName> </codeblock>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_frz_gpw_wrb">
            <title>Import WCM libraries </title>
            <p>The <codeph>wcm-library-import</codeph> command is used to import the WCM libraries
                from the source server to the target server.<note id="note_ggz_lwr_xrb" type="other"
                    othertype="Limitation">Ensure that the WCM <filepath>import.zip</filepath> file
                    size is not more than 256MB. This limitation will be addressed in the future
                    release.</note><note type="important">In the Kubernetes environment, timeout
                    will happen after 60 seconds.</note></p>
            <dl id="dl_grz_gpw_wrb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <codeblock id="codeblock_b21_4pw_wrb">dxclient wcm-library-import</codeblock>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>Use this attribute to specify the user name that is required to
                            authenticate to the
                            server:<codeblock id="codeblock_nfj_spw_wrb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required to
                            authenticate to the
                            server:<codeblock id="codeblock_m4w_spw_wrb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_s3m_tpw_wrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the
                                <codeph>cw_profile</codeph> (for Kubernetes Environment,
                                <codeph>dxConnectPort</codeph> is
                            443):<codeblock id="codeblock_nqb_5pw_wrb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name that is required for
                            authenticating to the
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_ibq_5pw_wrb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to
                            <codeph>cw_profile</codeph>:<codeblock id="codeblock_z2c_vpw_wrb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the user name of the DX WAS
                            server:<codeblock id="codeblock_yx4_vpw_wrb">-dxWASUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password of the DX WAS
                            server:<codeblock id="codeblock_d2g_wpw_wrb">-dxWASPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the DX core
                            server:<codeblock id="codeblock_d3v_wpw_wrb">-dxProfileName &lt;Profile name of the DX core server> </codeblock></p>
                        <p>Use this attribute to specify the path to a zip file or folder that
                            contains the WCM
                            libraries:<codeblock id="codeblock_ewn_ypw_wrb">-libFilePath &lt;value></codeblock></p>
                        <p>Log files from running the command can be found in the logs directory of
                            the DXClient installation.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <codeblock id="codeblock_mwp_lqw_wrb">dxclient wcm-library-import -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword>  -hostname &lt;dxConnectHostname> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxWASUsername &lt;dxWASUsername> -dxProfileName &lt;dxProfileName> -libFilePath &lt;libFilePath> </codeblock>
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
