<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="themes" xml:lang="en-us">
    <title>Shared library | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Shared library</navtitle>
    </titlealts>
    <shortdesc>Shared libraries are jar files representing code that is shared across multiple
        components of the customer, for example, portlets, themes, preprocessors, and
        others.</shortdesc>
    <body>
        <section id="deploytheme">
            <title>Shared library</title>
            <p>The <cmdname>shared-library</cmdname> command is used to manage the jar files in the
                provided default shared library location.</p>
            <p>Default shared Library: DXCLib</p>
            <p>Default shared library location:
                    <codeph>&lt;dx-server-profile>/PortalServer/sharedLibrary</codeph><note
                    id="note_vbd_dgt_cqb">For Shared Library artifact, the DX Server needs to be at
                    HCL DX 9.5 CF196 or higher. The default shared library DXCLib is already
                    configured and associated to application server.</note></p>
            <p>The shared-library command uses two sub-commands upload and delete to manage files in
                the DX server. The sub-command upload is used to upload jar files and sub-command
                delete is used to delete the files from the default shared library location provided
                below.</p>
            <dl id="dl_bst_sqm_ppb">
                <dlentry>
                    <dt>Command Description</dt>
                    <dd>
                        <p>This command invokes the shared library upload task inside the DXClient.
                            This is used to upload jar files into the default shared library
                            location.<codeblock id="codeblock_rty_mgt_cqb">dxclient shared-library upload</codeblock></p>
                        <p>This command invokes the shared library delete task inside the DXClient.
                            This is used to delete jar files from the default shared library
                            location.<codeblock id="codeblock_hwq_4gt_cqb">dxclient shared-library delete</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for <codeph>shared-library
                                upload</codeph> command
                            usage:<codeblock id="codeblock_kcx_vqm_ppb">dxclient shared-library upload -h</codeblock></p>
                        <p>This command shows the help information for <codeph>shared-library
                                delete</codeph> command
                            usage:<codeblock id="codeblock_mf3_xgt_cqb">dxclient shared-library delete -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Common Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_yd4_cht_cqb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_qcs_dht_cqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock id="codeblock_hjw_2ht_cqb">-hostname &lt;value></codeblock></p>
                        <p> Use this attribute to specify the port number of the cw_profile(for
                            Kubernetes Environment dxConnectPort is
                            443):<codeblock id="codeblock_q15_fht_cqb">-dxConnectPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_s2v_ght_cqb">-dxConnectUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating to the
                            cw_profile:<codeblock id="codeblock_s2p_hht_cqb">-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the profile name of the DX
                            Core:<codeblock id="codeblock_b2d_jht_cqb">-dxProfileName &lt;Name of the DX server profile></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command option for upload</dt>
                    <dd>Use this attribute to specify the path to a jar/zip file or folder
                        containing jars in
                        it:<codeblock id="codeblock_zqy_sht_cqb">-libFilePath &lt;value></codeblock></dd>
                </dlentry>
                <dlentry>
                    <dt>Command option for delete</dt>
                    <dd>
                        <p>Use this attribute to specify the names of the jar files present in the
                            shared library location on the
                                server:<codeblock id="codeblock_mbz_xht_cqb">-libFileNames &lt;value></codeblock><note
                                id="note_grm_c3t_cqb"> For upload, the folder or zip file should
                                contain only jars files that are to be uploaded to the default
                                shared library location:</note></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd> Use this attribute to specify the path to a jar/zip file or folder
                        containing jars in
                        it:<codeblock id="codeblock_nhn_5ht_cqb">dxclient shared-library upload -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -hostname &lt;dxConnectHostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;Profile name of the DX Server> -libFilePath &lt;path to jar/zip/Folder> </codeblock><codeblock>dxclient shared-library delete -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -hostname &lt;dxConnectHostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -dxProfileName &lt;Profile name of the DX Server> -libFileNames &lt;file names> -libFilePath &lt;value></codeblock></dd>
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
