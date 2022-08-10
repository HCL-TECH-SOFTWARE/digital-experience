<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="themes" xml:lang="en-us">
    <title>Themes | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Themes</navtitle>
    </titlealts>
    <shortdesc>This topic provides information about the deployment and undeployment of themes
        artifacts.</shortdesc>
    <body>
        <section id="deploytheme">
            <title>Deploy theme</title>
            <p>The <codeph>deploy-theme</codeph> command is used to deploy a theme (EAR and WebDAV
                based) from a source client or server environment to a target HCL DX 9.5 CF192 or
                later server using the provided theme registration <filepath>XML</filepath> file,
                deployable <filepath>EAR</filepath> file, and <filepath>WebDAV</filepath> theme
                collection.</p>
            <dl>
                <dlentry>
                    <dt>Required files</dt>
                    <dd>
                        <p>Theme Registration <filepath>XML</filepath> file: This XML file is
                            required to register the theme into DX Server.</p>
                        <p>Theme deployable <filepath>EAR</filepath> file: This EAR file containing
                            theme data is used for deploying into the WebSphere Application
                            Server.</p>
                        <p><filepath>WebDAV</filepath> theme collection: The theme collection
                                <filepath>folder/zip</filepath> is used to create or update the
                            collection in WebDAV file store of the DX Server.<note type="other"
                                othertype="Notes" id="note_kkb_2wz_mqb">This command can execute
                                below one or more tasks together:<ol id="ol_w3l_ddy_v4b">
                                    <li>Theme Registration</li>
                                    <li>Theme EAR deployment</li>
                                    <li>WebDAV theme collection</li>
                                </ol></note></p>
                    </dd>
                </dlentry>
            </dl>
            <dl id="dl_bst_sqm_ppb">
                <dlentry>
                    <dt>Command</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_uhq_5qm_ppb">dxclient deploy-theme -xmlFile &lt;path> -applicationFile &lt;path> -applicationName &lt;application name> 
-themeName &lt;theme collection name> -themePath &lt;folder/zip path of theme collection></codeblock>
                        </p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help document on the <codeph>deploy-theme</codeph>
                            command
                            usage:<codeblock id="codeblock_kcx_vqm_ppb">dxclient deploy-theme -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Common Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol with which to connect to the
                            DX server
                            (<codeph>wp_profile</codeph>):<codeblock id="codeblock_qqw_xqm_ppb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_rqw_xqm_ppb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the DX
                            server
                            (<codeph>wp_profile</codeph>):<codeblock id="codeblock_sqw_xqm_ppb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username to authenticate with the DX
                            server
                            (<codeph>wp_profile</codeph>):<codeblock id="codeblock_tqw_xqm_ppb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password for the user in the
                                <codeph>dxUsername</codeph>
                            attribute:<codeblock id="codeblock_uqw_xqm_ppb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute and re-trigger the command to check the status of any
                            previous request that was
                            incomplete.<codeblock id="codeblock_kq3_kzx_lsb">-requestId &lt;Unique ID of a previously triggered deploy theme request></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required options for Theme Registration</dt>
                    <dd>
                        <p>Use this attribute to specify the local path to the theme registration
                            XML
                            file:<codeblock id="codeblock_ypz_zqm_ppb">-xmlFile &lt;Absolute or relative path to theme registration xml input file></codeblock></p>
                        <p>Use this attribute to specify the path to DX configuration endpoint (for
                            example, <filepath>
                                /wps/config</filepath>):<codeblock id="codeblock_zpz_zqm_ppb">-xmlConfigPath &lt;value></codeblock><note
                                id="note_bqz_zqm_ppb">For theme registration, a backup of the
                                complete DX configuration export (not including users) is taken and
                                placed in
                                    <codeph>store/outputFiles/themes/backup/foldername</codeph>
                                folder.</note></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required options for Theme EAR deployment</dt>
                    <dd>
                        <p>Use this attribute to specify the Configuration Wizard Console port
                            number:<codeblock id="codeblock_el5_drm_ppb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_fl5_drm_ppb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Configuration Wizard Administrator
                            username that is required for authenticating with the DXConnect
                            application:<codeblock id="codeblock_gl5_drm_ppb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the Configuration Wizard Administrator
                            password that is required for authenticating with the DXConnect
                            application:<codeblock id="codeblock_hl5_drm_ppb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify Soap port of the DX
                            server:<codeblock id="codeblock_il5_drm_ppb">-dxSoapPort &lt;Soap port of the DX server> </codeblock></p>
                        <p conref="portlets.dita#portlets/dxprofilepathorname"/>
                        <p>Use this attribute to specify the theme EAR file path that is required
                            while executing the deploy theme
                            task:<codeblock id="codeblock_kl5_drm_ppb">–applicationFile &lt;Absolute or relative path to deployable theme ear file> </codeblock></p>
                        <p>Use this attribute to specify the theme application
                            name:<codeblock id="codeblock_ll5_drm_ppb">-applicationName &lt;value> </codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required options for creating/updating WebDAV theme collection</dt>
                    <dd>
                        <p>Use this attribute to specify the theme name of the collection created
                            under WebDAV server in
                            DX:<codeblock id="codeblock_z4s_hrm_ppb">-themeName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the theme file path that contains all
                            static files to be pushed into DX theme, it accepts either folder or zip
                            file path of the WebDAV theme
                            collection:<codeblock id="codeblock_aps_hrm_ppb">-themePath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the contenthandler servlet on
                            the DX server (e.g.
                            /wps/mycontenthandler):<codeblock id="codeblock_bps_hrm_ppb">-contenthandlerPath &lt;value></codeblock></p>
                        <note type="other" othertype="Notes" id="note_cps_hrm_ppb">
                            <ul id="ul_kf2_sfy_v4b">
                                <li>For new WebDAV theme collection, DXClient tool adds the provided
                                    collection (<filepath>folder/zip</filepath>) to the
                                        <filepath>WebDAV</filepath> file store.</li>
                                <li>For existing WebDAV theme collection, the existing theme
                                    collection is replaced by the provided theme collection during
                                    the update. To get the latest theme collection from the DX
                                    server, see <xref
                                        href="../dev-theme/themeopt_move_expfilestore.dita"
                                        format="dita">Exporting content from the filestore</xref>
                                    and make modifications on the same folder to get it updated in
                                    the DX Server WebDAV file store.</li>
                                <li>For WebDAV theme collection update, a backup of the existing
                                    theme collection is taken and placed in
                                        <codeph>store/outputFiles/themes/backup/foldername</codeph>
                                    folder.</li>
                            </ul>
                        </note>
                        <p>Log files from command execution can be found in the logs directory of
                            the DXClient installation.</p>
                        <p><b>Example:</b></p>
                        <codeblock id="codeblock_dps_hrm_ppb">dxclient deploy-theme -dxProtocol &lt;http/https> -hostname &lt;host-name> -dxPort &lt;dxPort> -xmlConfigPath &lt;xmlConfigPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -dxSoapPort &lt;dxSoapPort> -hostname &lt;hostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -xmlFile &lt;xml-file-with-path> -applicationFile &lt;application-file-with-path> -applicationName &lt;application name> -themeName &lt;theme-name> -themePath &lt;theme-path> -dxProfileName &lt;Profile name of the DX core server> </codeblock>
                    </dd>
                </dlentry>
            </dl>
        </section>
        <section id="section_rsy_qj3_ppb">
            <title>Undeploy theme</title>
            <p>The undeploy-theme command can be used to undeploy a theme, including the EAR
                application and WebDAV files, and it also unregisters the registered theme from the
                target DX server.<note id="note_xcp_fk3_ppb">If <parmname>enableBackup</parmname> is
                    set to <varname>true</varname>, then undeploy-theme takes a backup of the
                    deployed EAR theme, WebDAV theme collection, and completes DX configuration
                    export (without users) and place it in the backup folder. When the user is
                    downloading EAR, WeDAV, and XML to backup, we must separate it by the folder
                    names <codeph>store/outputFiles/themes/backup/foldername</codeph>. </note></p>
            <p>The backup of EAR is placed in
                    <codeph>store/outputFiles/themes/backup/application</codeph>.</p>
            <p>Users can restore the theme by using the backup files.<note id="note_pk3_tk3_ppb"
                    >Pages might lose the applied theme references in the restored
                themes.</note></p>
            <p>
                <dl>
                    <dlentry>
                        <dt>Command description</dt>
                        <dd>
                            <p>This command invokes the undeploy-theme tool inside the DXClient. </p>
                            <p>This command uses the unregistered theme XML file, theme EAR
                                application name and WebDAV theme collection name, and executes the
                                undeploy theme
                                task.<codeblock id="codeblock_bkp_fl3_ppb">dxclient undeploy-theme
</codeblock></p>
                        </dd>
                    </dlentry>
                    <dlentry>
                        <dt>Help command</dt>
                        <dd>This command shows the help document on the
                                <codeph>undeploy-theme</codeph> command
                            usage:<codeblock id="codeblock_wzx_kl3_ppb">dxclient undeploy-theme -h</codeblock></dd>
                    </dlentry>
                    <dlentry>
                        <dt>Required files</dt>
                        <dd>Theme Unregistration XML file: This XML file is required to unregister
                            the theme from target DX Server and must contain the details of the
                            theme. The XML file must be provided when executing the undeploy theme
                                task.<p>This command can execute one or more of the following tasks
                                at the same time:<ul id="ul_vpx_gm3_ppb">
                                    <li>Theme unregistration</li>
                                    <li>Undeploy theme EAR application</li>
                                    <li>Undeploy WebDAV theme collection</li>
                                </ul></p></dd>
                    </dlentry>
                    <dlentry>
                        <dt>Common commands</dt>
                        <dd>
                            <p> Use this attribute to specify the hostname of the target
                                server:<codeblock id="codeblock_m55_mm3_ppb">-hostname &lt;value></codeblock></p>
                            <p> Use this attribute to specify the protocol with which to connect to
                                the
                                server:<codeblock id="codeblock_cpj_qm3_ppb">-dxProtocol &lt;value></codeblock></p>
                            <p> Use this attribute to specify the port on which to connect to the
                                server (for Kubernetes Environment, <varname>dxPort</varname> is
                                    <codeph>443</codeph>):<codeblock id="codeblock_p1d_rm3_ppb">-dxPort &lt;value></codeblock></p>
                            <p> Use this attribute to specify the username that is required for
                                server
                                authentication:<codeblock id="codeblock_ngb_sm3_ppb">-dxUsername &lt;value></codeblock></p>
                            <p> Use this attribute to specify the password that is required for
                                server
                                authentication:<codeblock id="codeblock_t2j_tm3_ppb">-dxPassword &lt;value></codeblock></p>
                            <p> Use this attribute to specify the path to the contenthandler servlet
                                on the DX server (e.g.
                                <filepath>/wps/mycontenthandler</filepath>):<codeblock id="codeblock_fc2_5m3_ppb">-contenthandlerPath &lt;value></codeblock></p>
                            <p> Use this attribute to take the backup before undeploying
                                    theme:<codeblock id="codeblock_apw_v43_ppb">-enableBackup &lt;value></codeblock><note
                                    id="note_yn4_vp3_ppb">User can set the
                                        <parmname>enableBackup</parmname> parameter as
                                        <varname>true</varname> to take backup before undeploying
                                    theme. The value is set to <varname>false</varname> by
                                    default.</note>The options passed through command line override
                                the default values.</p>
                        </dd>
                    </dlentry>
                    <dlentry>
                        <dt>Required options for Theme Unregistration:</dt>
                        <dd>
                            <p> Use this attribute to specify the theme registration
                                    <filepath>xml</filepath> file that is used while executing the
                                undeploy theme task. For example, see the
                                    <filepath>Theme-registration.xml</filepath> file in the
                                directory
                                <filepath>dxclient/samples/</filepath>:<codeblock id="codeblock_jjn_yp3_ppb">-xmlFile &lt;xml file name with absolute path of the xmlaccess input file></codeblock></p>
                            <p>Use this attribute to specify the path to DX configuration
                                endpoint:<codeblock id="codeblock_yz2_cq3_ppb">-xmlConfigPath &lt;value></codeblock></p>
                        </dd>
                    </dlentry>
                    <dlentry>
                        <dt>Required options for undeploying theme EAR application</dt>
                        <dd>
                            <p>Use this attribute to specify the hostname of the target DX
                                server:<codeblock id="codeblock_flt_gq3_ppb">-hostname &lt;value></codeblock></p>
                            <p>Use this attribute to specify the port number of the
                                    <varname>cw_profile</varname> (for Kubernetes Environment
                                dxConnectPort is
                                443):<codeblock id="codeblock_sj3_hq3_ppb">-dxConnectPort &lt;value></codeblock></p>
                            <p>Use this attribute to specify the username that is required for
                                authenticating to the
                                <varname>cw_profile</varname>:<codeblock id="codeblock_ppb_3q3_ppb">-dxConnectUsername &lt;value></codeblock></p>
                            <p>Use this attribute to specify the password that is required for
                                authenticating to the
                                <varname>cw_profile</varname>:<codeblock id="codeblock_vyq_jq3_ppb">-dxConnectPassword &lt;value></codeblock></p>
                            <p>Use this attribute to specify Soap port of the DX
                                server:<codeblock id="codeblock_kxt_lq3_ppb">-dxSoapPort &lt;Soap port of the DX server> </codeblock></p>
                            <p conref="portlets.dita#portlets/dxprofilepathorname"/>
                            <p>Use this attribute to specify the EAR application
                                name:<codeblock id="codeblock_lzz_nq3_ppb">-applicationName &lt;value> </codeblock></p>
                        </dd>
                    </dlentry>
                    <dlentry>
                        <dt>Required options for undeploying WebDAV theme collection</dt>
                        <dd>
                            <p>Use this attribute to specify the theme name of the collection
                                created under
                                WebDAV:<codeblock id="codeblock_bsr_qq3_ppb">-themeName &lt;value></codeblock></p>
                        </dd>
                    </dlentry>
                </dl>
            </p>
            <p><b>Example:</b><codeblock id="codeblock_zgx_xf1_nqb">dxclient undeploy-theme -dxProtocol &lt;http/https> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -dxSoapPort &lt;dxSoapPort> -hostname &lt;hostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -xmlFile &lt;xml-file-with-path> -applicationName &lt;application name> -themeName &lt;theme-name> -enableBackup &lt;enable-backup> -dxProfileName &lt;Profile name of the DX core server profile> </codeblock></p>
        </section>
        <p>
            <note>The attribute <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                releases. It is recommended that you start using the replacement parameter
                    <codeph>-hostname</codeph> starting from CF202 wherever necessary.</note>
        </p>
    </body>
</topic>
