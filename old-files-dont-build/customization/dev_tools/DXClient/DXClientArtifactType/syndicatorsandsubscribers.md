<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="syndicatorsandsubscribers" xml:lang="en-us">
    <title>Managing Web Content Syndicators and Subscribers using DXClient | HCL Digital
        Experience</title>
    <titlealts>
        <navtitle>Web Content Syndicators and Subscribers</navtitle>
    </titlealts>
    <shortdesc>The section provides information about using the DXClient process to automate the
        management of Web Content Manager Syndicators, Subscribers, and get-syndication reports. For
        more information on the process and settings of the Web Content Manager Syndicators and
        Subscribers, see <xref href="../panel_help/wcm_syndication.dita"/>.</shortdesc>
    <body>
        <section id="deploydxapp">
            <title>Managing syndicators</title>
            <p>The <cmdname>manage-syndicator</cmdname> command is used to enable or disable the
                syndicator using the provided input.</p>
            <dl>
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the manage-syndicator tool inside the DXClient. It
                            is used to enable or disable the
                            syndicator.<codeblock>dxclient manage-syndicator</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help document on the manage-syndicator command
                            usage:<codeblock>dxclient manage-syndicator -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target
                            server.<codeblock>-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            server.<codeblock>-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the
                            server(for Kubernetes Environment dxPort is
                            443)<codeblock>-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server.<codeblock>-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server.<codeblock>-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the contenthandler servlet on
                            the DX server (example:
                            <filepath>/wps/mycontenthandler</filepath>).<codeblock>-contenthandlerPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the UUID of the syndicator
                            instance.<codeblock>-UUID &lt;value></codeblock></p>
                        <p>Use true or false to enable or disable the
                            syndicator.<codeblock>-enable &lt;value></codeblock></p>
                        <p>The options that are passed through the command line override the default
                            values.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock>dxclient manage-syndicator -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -contenthandlerPath &lt;contenthandlerPath> -UUID &lt;UUID> -enable &lt;enable></codeblock>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_zfd_c1c_2qb">
            <title>Manage-syndicator get-syndication-report</title>
            <p>The <cmdname>manage-syndicator get-syndication-report</cmdname> command is used to
                fetch the failed reports of the syndicator.</p>
            <dl id="dl_agd_c1c_2qb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the <codeph>syndicator-faileditems</codeph> tool
                            inside the DXClient, which is used to fetch the failed
                            reports.<codeblock id="codeblock_bgd_c1c_2qb">dxclient manage-syndicator get-syndication-report</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help document on the <cmdname>manage-syndicator
                                get-syndication-report</cmdname> command
                            usage:<codeblock id="codeblock_cgd_c1c_2qb">dxclient  manage-syndicator get-syndication-report -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target
                            server<codeblock id="codeblock_lnt_cbc_2qb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            server<codeblock id="codeblock_ns3_dbc_2qb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the server
                            (for Kubernetes Environment, dxPort is
                            443)<codeblock id="codeblock_c5c_2bc_2qb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server<codeblock id="codeblock_ofy_2bc_2qb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server<codeblock id="codeblock_ihq_fbc_2qb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the contenthandler servlet on
                            the DX server (for example,
                            <filepath>/wps/mycontenthandler</filepath>)<codeblock id="codeblock_akb_hbc_2qb">-contenthandlerPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the UUID of the syndicator
                            instance<codeblock id="codeblock_nkv_hbc_2qb">-UUID &lt;value></codeblock></p>
                        <p>The options that are passed through the command line override the default
                            values.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example usage with UUID:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_wkx_pbc_2qb">dxclient manage-syndicator get-syndication-report -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -contenthandlerPath &lt;contenthandlerPath> -UUID &lt;UUID> </codeblock>
                        </p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example usage without UUID:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_kyb_kry_mqb">dxclient manage-syndicator get-syndication-report -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -contenthandlerPath &lt;contenthandlerPath>  </codeblock>
                            <note id="note_alg_4wv_nqb">If UUID of a syndicator is specified, then
                                the command provides the report for only the particular syndicator
                                that is present in the target DX Server; otherwise, it provides the
                                failure report for all syndicators.</note>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_cwj_dpf_dpb">
            <title>Managing subscribers</title>
            <p>The <cmdname>manage-subscriber</cmdname> command is used to enable or disable the
                subscriber using the provided input.</p>
            <dl>
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the manage-subscriber tool inside the DXClient. It
                            is used to enable/disable the
                            subscriber.<codeblock>dxclient manage-subscriber</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help document on the manage-syndicator command
                            usage:<codeblock>dxclient manage-subscriber -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p> Use this attribute to specify the hostname of the target
                            server.<codeblock>-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            server.<codeblock>-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the
                            server(for Kubernetes Environment dxPort is
                            443).<codeblock>-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server.<codeblock>-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server.<codeblock>-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the contenthandler servlet on
                            the DX server (for example,
                            <filepath>/wps/mycontenthandler</filepath>).<codeblock>-contenthandlerPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the UUID of the subscriber
                            instance.<codeblock>-UUID &lt;value></codeblock></p>
                        <p>Use this attribute to specify the enable or disable the subscriber
                            instance. Use true or false to enable or disable the
                            subscriber.<codeblock>-enable &lt;value></codeblock></p>
                        <p>The options passed through command line overrides the default values.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock>dxclient manage-subscriber -dxProtocol &lt;dxProtocol> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -contenthandlerPath &lt;contenthandlerPath> -UUID &lt;UUID> -enable &lt;enable></codeblock>
                        </p>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_ndj_bcd_lrb">
            <title>Create Syndication Relation</title>
            <p>The <codeph>create-syndication-relation</codeph> command is used to create the
                syndication relation between syndicator and subscriber in the DX server.</p>
            <dl id="dl_mvj_3cd_lrb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>Use the <codeph>create-syndication-relation</codeph> to create
                            syndication
                            relation:<codeblock id="codeblock_fdl_mcd_lrb">dxclient create-syndication-relation</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>create-syndication-relation</codeph> command
                            usage:<codeblock id="codeblock_egk_gdd_lrb">dxclient create-syndication-relation -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            DX
                            server:<codeblock id="codeblock_k1t_jdd_lrb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_o4s_kdd_lrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the DX
                            server (for Kubernetes Environment, dxPort is
                            443):<codeblock id="codeblock_hxh_mdd_lrb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username to authenticate with the DX
                            server<codeblock id="codeblock_cwx_pdd_lrb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password for the user in the
                            "dxUsername"
                            attribute<codeblock id="codeblock_e5x_qdd_lrb">-dxPassword &lt;value></codeblock></p>
                        <p>The path to the contenthandler servlet on the Script Application
                            server:<codeblock id="codeblock_ist_sdd_lrb">-contenthandlerPath &lt;value></codeblock></p>
                        <p>Syndicator URL of target server, for example,
                                <filepath>http(s)://host:port/wps/wcm</filepath>:<codeblock id="codeblock_xhf_5dd_lrb">-syndicatorUrl &lt;value></codeblock></p>
                        <p>Use this attribute to specify the new syndicator
                            name:<codeblock id="codeblock_srt_xdd_lrb">-syndicatorName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the new subscriber
                            name:<codeblock id="codeblock_pz5_ydd_lrb">-subscriberName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Credential Vault Name of source
                            server:<codeblock id="codeblock_z45_zdd_lrb">-vaultSlotName &lt;value></codeblock></p>
                        <p> Whether the syndicator/subscriber pair is enabled on creation: isEnabled
                            (default is
                            true):<codeblock id="codeblock_oxx_12d_lrb">-isEnabled &lt;value></codeblock></p>
                        <p>Whether the syndicator/subscriber pair is updateAfterCreation :
                            updateAfterCreation (default is
                            true):<codeblock id="codeblock_chs_b2d_lrb">-updateAfterCreation &lt;value></codeblock></p>
                        <p>The libraries to syndicate eg.
                            all-items,liveItems,liveProjectsItem,all-items,published-items and
                            all-items-and-versions:<codeblock id="codeblock_yk1_d2d_lrb">-syndicationType &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Libraries Name of target
                            Server:<codeblock id="codeblock_cvw_d2d_lrb">-webContentLibraries &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the Subscriber URL, for example,
                                <filepath>http(s)://host:port/wps/wcm</filepath>:<codeblock id="codeblock_itr_22d_lrb">-subscriberURL &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Syndicator/subscriber
                            mode:<codeblock id="codeblock_gvs_h2d_lrb">-mode &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Credential Vault
                            Name:<codeblock id="codeblock_lpn_32d_lrb">-syndicatorVaultSlotName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the context root on the DX
                            server (for example,
                            <filepath>/wps</filepath>):<codeblock id="codeblock_mff_j2d_lrb">-dxContextRoot &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the Virtual portal
                            Context:<codeblock id="codeblock_ppk_l2d_lrb">-virtualPortalContext &lt;value></codeblock></p>
                        <p>Log files from command execution can be found in the logs directory of
                            the DXClient installation.</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <codeblock id="codeblock_erz_s2d_lrb">dxclient create-syndication-relation -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -contenthandlerPath &lt;contenthandlerPath> -dxUsername &lt;dxUsername> 
-dxPassword &lt;dxPassword> -syndicatorUrl &lt;syndicatorUrl> -syndicatorName &lt;syndicatorName> -subscriberName &lt;subscriberName> -vaultSlotName &lt;vaultSlotName>
-isEnabled &lt;isEnabled> -updateAfterCreation &lt;updateAfterCreation> -syndicationType &lt;syndicationType> -webContentLibraries &lt;webContentLibraries> -subscriberURL &lt;subscriberURL>
-mode &lt;mode> -syndicatorVaultSlotName &lt;syndicatorVaultSlotName> -dxContextRoot &lt;dxContextRoot> -virtualPortalContext &lt;virtualPortalContext></codeblock>
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
