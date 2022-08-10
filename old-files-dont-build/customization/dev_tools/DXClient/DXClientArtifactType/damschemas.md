<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="damschemas" xml:lang="en-us">
    <title>DAM schemas | HCL Digital Experience</title>
    <titlealts>
        <navtitle>DAM schemas</navtitle>
    </titlealts>
    <shortdesc>This topic contains the commands that administrators can use to get a list of all DAM
        schemas or delete inactive <xref
            href="../digital_asset_mgmt/digital_asset_mgmt_overview.dita">Digital Asset
            Management</xref> (DAM) schemas from persistence.</shortdesc>
    <body>
        <section id="listdamschema">
            <title>Listing DAM schemas</title>
            <p>The <cmdname>list-dam-schemas</cmdname> command is used to list all the DAM
                schemas.</p>
            <dl id="dl_yyr_vwt_yqb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes <option>list-dam-schemas</option> inside DXClient
                            and provides a list DAM
                            schemas.<codeblock id="codeblock_zyr_vwt_yqb">dxclient list-dam-schemas</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>list-dam-schemas</codeph> command
                            usage:<codeblock id="codeblock_azr_vwt_yqb">dxclient list-dam-schemas -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            server:<codeblock id="codeblock_aqx_gyt_yqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target
                            server:<codeblock id="codeblock_avh_hyt_yqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the server
                            (e.g. for Kubernetes Environment dxPort is
                            443):<codeblock id="codeblock_j44_hyt_yqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_pq5_hyt_yqb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_tgb_3yt_yqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the DAM server (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_zhh_3yt_yqb">-damAPIPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the DX Core API server
                            (e.g. for Kubernetes Environment default port is
                            443):<codeblock id="codeblock_mnn_3yt_yqb">-ringAPIPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the API Version number of DAM (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_yt1_syt_yqb">-damAPIVersion &lt;value></codeblock></p>
                        <p>Use this attribute to specify the API Version number of DX Core (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_frn_tyt_yqb">-ringAPIVersion &lt;value></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <codeblock id="codeblock_ifb_czt_yqb">dxclient list-dam-schemas -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -damAPIPort &lt;damAPIPort> -ringAPIPort &lt;ringAPIPort> -ringAPIVersion &lt;ringAPIVersion> -damAPIVersion &lt;damAPIVersion></codeblock>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="deletedamschema">
            <title>Deleting DAM schemas</title>
            <p>Deleting DAM schema is a recommended step when the configuration of the DAM database
                schema has been changed, due to a release update such as from Container Update CF196
                to Container Update CF197. When a DAM database is migrated, a new schema gets
                generated and the old schema is rendered inactive. To avoid the accumulation of
                inactive schemas, you can use the <cmdname>delete-dam-schema</cmdname> command to
                delete them.</p>
            <p>Use the <cmdname>delete-dam-schema</cmdname> command to delete the inactive DAM
                schema.</p>
            <dl>
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes <option>delete-dam-schema</option> inside DXClient
                            and deletes the DAM
                            schema:<codeblock>dxclient delete-dam-schema</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>delete-dam-schema</codeph> command
                            usage:<codeblock>dxclient delete-dam-schema -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol that is used to connect to the
                            server:<codeblock id="codeblock_kmd_ppx_mqb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target
                            server:<codeblock id="codeblock_vpg_qpx_mqb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the server
                            (e.g. for Kubernetes Environment dxPort is
                            443):<codeblock id="codeblock_ks1_rpx_mqb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_ajb_spx_mqb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_avw_spx_mqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the DAM server (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_hdp_5px_mqb">-damAPIPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port number of the DX Core API server
                            (e.g. for Kubernetes Environment default port is
                            443):<codeblock id="codeblock_tkq_1qx_mqb">-ringAPIPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the API Version number of DAM (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_t5s_cqx_mqb">-damAPIVersion &lt;value></codeblock></p>
                        <p>Use this attribute to specify the API Version number of DX Core (e.g. for
                            Kubernetes Environment default port is
                            443):<codeblock id="codeblock_ds5_dqx_mqb">-ringAPIVersion &lt;value></codeblock></p>
                        <p>Use this attribute to specify the DAM Schema Version (e.g. for Kubernetes
                            Environment default port is
                                443):<codeblock id="codeblock_wbs_fqx_mqb">-schemaVersion &lt;value></codeblock><note
                                id="note_my4_gqx_mqb">In case the user does not enter the
                                    <codeph>schemaVersion</codeph>, user is prompted with a list of
                                inactive schemas to choose from.</note></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock>dxclient delete-dam-schema -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -damAPIPort &lt;damAPIPort> -ringAPIPort &lt;ringAPIPort> -ringAPIVersion &lt;ringAPIVersion> -damAPIVersion &lt;damAPIVersion> -schemaVersion &lt;schemaVersion></codeblock>
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
