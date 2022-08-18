<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="resourceenvironments" xml:lang="en-us">
    <title>Resource environment provider | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Resource environment provider</navtitle>
    </titlealts>
    <shortdesc>This topic describes the commands that are used to create, update, delete, and
        retrieve custom properties from an existing resource environment provider. It also provides
        the commands to export or import multiple resource environment providers.</shortdesc>
    <body>
        <section id="listdamschema">
            <title>Resource environment commands</title>
            <dl id="dl_yyr_vwt_yqb">
                <dlentry>
                    <dt>Command description:</dt>
                    <dd>
                        <p>The <codeph>resource-env-provider</codeph> command is used to create,
                            update or delete a custom property from an existing Resource Environment
                            Provider, and to export or import multiple resource environment
                            providers.<codeblock id="codeblock_zyr_vwt_yqb">dxclient resource-env-provider</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command:</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>resource-env-provider</codeph> command
                                usage:<codeblock id="codeblock_azr_vwt_yqb">dxclient resource-env-provider -h</codeblock><ul
                                id="ul_owy_h55_yqb">
                                <li>Help command for creating the resource environment
                                    property:<codeblock id="codeblock_q3r_j55_yqb">dxclient resource-env-provider create-property -h
</codeblock></li>
                                <li>Help command for updating the resource environment
                                    property:<codeblock id="codeblock_lpw_m55_yqb">dxclient resource-env-provider update-property -h</codeblock></li>
                                <li>Help command for deleting the resource environment
                                    property:<codeblock id="codeblock_jm2_455_yqb">dxclient resource-env-provider delete-property -h</codeblock></li>
                                <li>Help command for retrieving the resource environment
                                    property:<codeblock id="codeblock_ivt_rby_lsb">dxclient resource-env-provider retrieve-property -h</codeblock></li>
                                <li>Help command for exporting the resource environment
                                    property:<codeblock id="codeblock_ety_nfd_lrb">dxclient resource-env-provider export-properties -h</codeblock></li>
                                <li>Help command for importing the resource environment
                                    property:<codeblock id="codeblock_c35_qfd_lrb">dxclient resource-env-provider import-properties -h</codeblock></li>
                            </ul></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Commands:</dt>
                    <dd>
                        <ul id="ul_qkz_x55_yqb">
                            <li>Create a custom property from an existing resource
                                environment:<codeblock id="codeblock_rkz_x55_yqb">resource-env-provider create-property [OPTIONS]
</codeblock></li>
                            <li>Update a custom property from an existing resource
                                environment:<codeblock id="codeblock_skz_x55_yqb">resource-env-provider update-property [OPTIONS]</codeblock></li>
                            <li>Delete a custom property from an existing resource
                                environment:<codeblock id="codeblock_tkz_x55_yqb">resource-env-provider delete-property[OPTIONS]</codeblock></li>
                            <li>Retrieve a custom property from an existing resource environment
                                provider:<codeblock id="codeblock_wwj_vby_lsb">resource-env-provider retrieve-property [OPTIONS]</codeblock></li>
                            <li>Export all the existing resource environment
                                providers:<codeblock id="codeblock_ofx_wfd_lrb">resource-env-provider export-properties [OPTIONS]</codeblock></li>
                            <li>Import all the existing resource environment providers provided in
                                the input file containing the resource environment
                                providers:<codeblock id="codeblock_h11_cgd_lrb">resource-env-provider import-properties [OPTIONS]</codeblock></li>
                        </ul>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options required to create, update, delete, and retrieve resource
                        environment providers:</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            server:<codeblock id="codeblock_ydw_qv5_yqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target
                            server:<codeblock id="codeblock_nqv_rv5_yqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the server
                            (e.g. for Kubernetes Environment, dxPort is 443):
                            <codeblock id="codeblock_wfx_sv5_yqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_kjy_tv5_yqb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_ncy_5v5_yqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the
                                <filepath>cw_profile</filepath> (e.g. for Kubernetes Environment,
                            dxConnectPort is
                            443):<codeblock id="codeblock_gvv_wv5_yqb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating to the
                            <filepath>cw_profile</filepath>:<codeblock id="codeblock_svt_xv5_yqb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            <filepath>cw_profile</filepath>:<codeblock id="codeblock_chb_zv5_yqb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the name of the Resource Environment
                            Provider:<codeblock id="codeblock_lzc_1w5_yqb">-providerName &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the name of the Custom
                            Property:<codeblock id="codeblock_gh2_bw5_yqb">-propertyName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the value of the Custom
                            Property:<codeblock id="codeblock_p52_cw5_yqb">-propertyValue &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the description of the Custom
                            Property:<codeblock id="codeblock_x25_dw5_yqb">-propertyDesc &lt;value> </codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options required to export and import resource environment
                        providers:</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_szq_jhd_lrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the cw_profile(for
                            Kubernetes Environment, dxConnectPort is
                            443):<codeblock id="codeblock_l5v_mhd_lrb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating to the
                            <filepath>cw_profile</filepath>:<codeblock id="codeblock_ocs_4hd_lrb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_nvw_phd_lrb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username of the DX WAS
                            server:<codeblock id="codeblock_ib4_qhd_lrb">-dxWASUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password of the DX WAS
                            server:<codeblock id="codeblock_nnq_rhd_lrb">-dxWASPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the DX core
                            server:<codeblock id="codeblock_a54_shd_lrb">-dxProfileName &lt;Profile name of the DX core server> </codeblock></p>
                        <p>For importing resource environment properties, use this attribute to
                            specify the File
                            path:<codeblock id="codeblock_fxs_z3d_lrb">-filePath &lt;value></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <ul id="ul_qbv_jw5_yqb">
                            <li>For creating
                                property:<codeblock id="codeblock_mhj_kw5_yqb">dxclient resource-env-provider create-property -providerName &lt;providerName> -propertyName &lt;propertyName> -propertyValue &lt;propertyValue></codeblock></li>
                            <li>For updating
                                property:<codeblock id="codeblock_i2s_mw5_yqb">dxclient resource-env-provider update-property -providerName &lt;providerName> -propertyName &lt;propertyName> -propertyValue &lt;modifiedpropertyValue></codeblock></li>
                            <li>For deleting
                                property:<codeblock id="codeblock_pgt_nw5_yqb">dxclient resource-env-provider delete-property -providerName &lt;providerName> -propertyName &lt;propertyName> -propertyValue &lt;modifiedpropertyValue></codeblock></li>
                            <li>For retrieving
                                property:<codeblock id="codeblock_u1x_dcy_lsb"> dxclient resource-env-provider retrieve-property -providerName &lt;providerName> -propertyName &lt;propertyName></codeblock></li>
                            <li>For exporting
                                property:<codeblock id="codeblock_ifj_ljd_lrb">dxclient resource-env-provider export-properties -dxProfileName &lt;dxProfileName></codeblock></li>
                            <li>For importing
                                property:<codeblock id="codeblock_vmq_ljd_lrb">dxclient resource-env-provider import-properties -dxProfileName &lt;dxProfileName> -filePath &lt;filePath></codeblock></li>
                        </ul>
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
