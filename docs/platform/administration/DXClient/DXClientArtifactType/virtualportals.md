<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="virtualportals" xml:lang="en-us">
    <title>Managing virtual portals | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Virtual portals</navtitle>
    </titlealts>
    <shortdesc>This topic describes the commands that are used in managing the virtual portal
        activities such as creating, listing, importing, or exporting virtual portals. </shortdesc>
    <body>
        <section id="listdamschema">
            <title>Virtual Portal commands</title>
            <dl id="dl_yyr_vwt_yqb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>The <codeph>manage-virtual-portal</codeph> command is used to manage
                            virtual portal tasks such as create, list, export, and import in the DX
                            server.<codeblock id="codeblock_zyr_vwt_yqb">dxclient manage-virtual-portal
</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>The following commands shows the help document on the
                                <codeph>manage-virtual-portal</codeph> command:<ul
                                id="ul_owy_h55_yqb">
                                <li>Help command for creating virtual
                                    portals:<codeblock id="codeblock_q3r_j55_yqb">dxclient manage-virtual-portal create -h</codeblock></li>
                                <li>Help command for listing virtual
                                    portals:<codeblock id="codeblock_lpw_m55_yqb">dxclient manage-virtual-portal list -h</codeblock></li>
                                <li>Help command for importing virtual
                                    portals:<codeblock id="codeblock_jm2_455_yqb">dxclient manage-virtual-portal import -h</codeblock></li>
                                <li>Help command for exporting virtual
                                    portals:<codeblock id="codeblock_zwg_yx5_yqb">dxclient manage-virtual-portal export -h </codeblock></li>
                            </ul></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Subcommands</dt>
                    <dd>
                        <ul id="ul_qwc_2y5_yqb">
                            <li>Create virtual portal task in the DX
                                server:<codeblock id="codeblock_rwc_2y5_yqb">manage-virtual-portal create [OPTIONS]</codeblock></li>
                            <li>List virtual portal task in the DX
                                server:<codeblock id="codeblock_swc_2y5_yqb">manage-virtual-portal list [OPTIONS]</codeblock></li>
                            <li>Import virtual portal task in the DX
                                server:<codeblock id="codeblock_twc_2y5_yqb">manage-virtual-portal import [OPTIONS]</codeblock></li>
                            <li>Export virtual portal task in the DX
                                server:<codeblock id="codeblock_uwc_2y5_yqb">manage-virtual-portal export [OPTIONS]</codeblock></li>
                            <li>Use this attribute and retrigger the command to check the status of
                                any previous request that was
                                incomplete.<codeblock id="codeblock_l2b_x1y_lsb">-requestId &lt;Unique ID of a previously triggered create virtual portal request></codeblock></li>
                        </ul>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required Commands </dt>
                    <dd>
                        <ul id="ul_bvn_3gv_yqb">
                            <li><b><codeph>manage-virtual-portal create</codeph> command:</b><p>Use
                                    this parameter to specify the username that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_mll_tgv_yqb">-dxUsername &lt;value> </codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_xdd_vgv_yqb">-dxPassword &lt;value></codeblock></p><p>Use
                                    this attribute to specify the hostname of the target DX
                                    server:<codeblock id="codeblock_iyt_zgv_yqb">-hostname &lt;value></codeblock></p><p>Use
                                    this parameter to specify the port number of the cw_profile
                                    (e.g. for Kubernetes Environment dxConnectPort is
                                    443):<codeblock id="codeblock_mjv_bhv_yqb">-dxConnectPort &lt;value></codeblock></p><p>Use
                                    this parameter to specify the username that is required for
                                    authenticating to the
                                    cw_profile:<codeblock id="codeblock_zbr_chv_yqb">-dxConnectUsername &lt;value></codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating to the
                                    cw_profile:<codeblock id="codeblock_m14_dhv_yqb">-dxConnectPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the profile name of the DX core
                                    server:<codeblock id="codeblock_hgt_2hv_yqb">-dxProfileName &lt;Profile name of the DX core server> </codeblock></p><p>Use
                                    this parameter to specify the username of the DX WAS
                                    server:<codeblock id="codeblock_fv4_fhv_yqb">-dxWASUsername &lt;value></codeblock></p><p>Use
                                    this parameter to specify the password of the DX WAS
                                    server:<codeblock id="codeblock_gy4_ghv_yqb">-dxWASPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    Title:<codeblock id="codeblock_upk_hhv_yqb">-vpTitle &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    Realm:<codeblock id="codeblock_mpq_3hv_yqb">-vpRealm &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    AdminGroup:<codeblock id="codeblock_z5m_jhv_yqb">-vpAdminGroup &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    HostName:<codeblock id="codeblock_chg_khv_yqb">-vpHostname &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                        Context:<codeblock id="codeblock_wrc_lhv_yqb">-vpContext &lt;value></codeblock><note
                                        id="note_zvh_4lv_yqb">Create virtual portal task creates an
                                        empty virtual portal in the DX
                                        server.</note></p><p><b>Example
                                    usage:</b><codeblock id="codeblock_ow1_qlv_yqb"> dxclient manage-virtual-portal create -hostname &lt;dxConnectHostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;Profile name of the DX Server> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -dxWASUsername &lt; Username of the DX WAS server> -dxWASPassword &lt;Password of the DX WAS server> -vpTitle &lt;virtual-portal-Title> -vpRealm &lt;virtual-portal-realm>  -vpAdminGroup &lt;virtual-portal-adminGroup> -vpHostname &lt;virtual-portal-hostname> -vpContext&lt;virtual-portal-context></codeblock></p></li>
                            <li><b><codeph>manage-virtual-portal list</codeph> command</b><p>Use
                                    this parameter to specify the username that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_bvs_whv_yqb">-dxUsername &lt;value> </codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_ozn_xhv_yqb">-dxPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the port number of the cw_profile
                                    (e.g. for Kubernetes Environment dxConnectPort is
                                    443):<codeblock id="codeblock_wj2_zhv_yqb">-dxConnectPort &lt;value></codeblock></p><p>Use
                                    this parameter to specify the username that is required for
                                    authenticating to the
                                    cw_profile:<codeblock id="codeblock_gzn_13v_yqb">-dxConnectUsername &lt;value></codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating to the
                                    cw_profile:<codeblock id="codeblock_lsd_b3v_yqb">-dxConnectPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the profile name of the DX core
                                    server:<codeblock id="codeblock_wbc_c3v_yqb">-dxProfileName &lt;Profile name of the DX core server> </codeblock></p><p>Use
                                    this parameter to specify the username of the DX WAS
                                    server:<codeblock id="codeblock_v3d_d3v_yqb">-dxWASUsername &lt;value></codeblock></p><p>Use
                                    this parameter to specify the password of the DX WAS
                                    server:<codeblock id="codeblock_fqg_23v_yqb">-dxWASPassword &lt;value></codeblock></p><p><b>Example
                                        usage:</b><codeblock id="codeblock_ifg_bmv_yqb">dxclient manage-virtual-portal list -hostname &lt;dxConnectHostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;profile-name-of-the-DX-server> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -dxWASUsername &lt;username-of-the-DX-WAS-server> -dxWASPassword &lt;password-of-the-DX-WAS-server> </codeblock></p></li>
                            <li><b><codeph>manage-virtual-portal import</codeph> command:</b><p>Use
                                    this parameter to specify the protocol with which to connect to
                                    the
                                    server:<codeblock id="codeblock_ntp_v3v_yqb">-dxProtocol &lt;value></codeblock></p><p>Use
                                    this parameter to specify the username that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_tfc_y3v_yqb">-dxUsername &lt;value> </codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_rtz_y3v_yqb">-dxPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the port on which to connect to the
                                    server (e.g. for Kubernetes Environment dxPort is
                                    443):<codeblock id="codeblock_frt_1jv_yqb">-dxPort &lt;value></codeblock></p><p>Use
                                    this parameter to specify the path to DX configuration endpoint
                                    (for example:
                                    <filepath>/wps/config</filepath>):<codeblock id="codeblock_dxp_bjv_yqb">-xmlConfigPath &lt;value></codeblock></p><p>Use
                                    this parameter to specify the XML file name with absolute path
                                    of the input
                                    file:<codeblock id="codeblock_abd_jjv_yqb">-xmlFile &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                        Context:<codeblock id="codeblock_iyv_jjv_yqb">-vpContext &lt;value></codeblock><note
                                        id="note_lvr_ljv_yqb" type="other" othertype="Limitation"
                                        >Currently, import virtual portal feature supports only
                                            <codeph>vpContext</codeph> and does not support
                                            <codeph>vpHostname</codeph>. Support for Virtual portal
                                        with host name might be added in the future
                                    release.</note></p><p><b>Example
                                    Usage:</b><codeblock id="codeblock_qrc_4jv_yqb">dxclient manage-virtual-portal import -dxProtocol &lt;http/https> -hostname &lt;host-name> -dxPort &lt;dxPort> -xmlConfigPath &lt;xmlConfigPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword>  -xmlFile &lt;xml-file-with-path> -vpContext &lt;virtual-portal-context></codeblock></p></li>
                            <li><b><codeph>manage-virtual-portal export</codeph> command:</b><p>Use
                                    this parameter to specify the protocol with which to connect to
                                    the
                                    server:<codeblock id="codeblock_idw_5jv_yqb">-dxProtocol &lt;value></codeblock></p><p>Use
                                    this parameter to specify the user name that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_yv5_vjv_yqb">-dxUsername &lt;value> </codeblock></p><p>Use
                                    this parameter to specify the password that is required for
                                    authenticating with the
                                    server:<codeblock id="codeblock_ccs_wjv_yqb">-dxPassword &lt;value></codeblock></p><p>Use
                                    this parameter to specify the port on which to connect to the
                                    server (e.g. for Kubernetes Environment dxPort is
                                    443):<codeblock id="codeblock_izf_zjv_yqb">-dxPort &lt;value></codeblock></p><p>Use
                                    this parameter to specify the path to DX configuration endpoint
                                    (for example:
                                    <filepath>/wps/config</filepath>):<codeblock id="codeblock_u1r_1kv_yqb">-xmlConfigPath &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    Context:<codeblock id="codeblock_mr4_fkv_yqb">-vpContext &lt;value></codeblock></p><p>Use
                                    this parameter to specify the virtual portal
                                    Title:<codeblock id="codeblock_lz5_3kv_yqb">-vpTitle &lt;value></codeblock></p><p>Use
                                    this parameter to specify the XML file name with absolute path
                                    of the input file to export the virtual portal
                                        content:<codeblock id="codeblock_z1x_jkv_yqb">-xmlFile &lt;value></codeblock><note
                                        type="other" othertype="Limitation" id="note_smd_pfh_zqb"
                                        >Currently, exporting virtual portal feature supports only
                                            <codeph>vpContext</codeph> and does not support
                                            <codeph>vpHostname</codeph>. Support for Virtual portal
                                        with hostname might be added in the future
                                    release.</note></p><p><b>Example:</b><codeblock id="codeblock_ec4_tmv_yqb">dxclient manage-virtual-portal export -hostname &lt;hostname> -dxProtocol &lt;dxProtocol> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -vpTitle &lt;vpTitle> -vpContext &lt;vpContext> -xmlFile &lt;xml-file-with-path></codeblock></p></li>
                        </ul>
                        <p>Log files from running the command can be found in the logs directory of
                            the DXClient installation.</p>
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
