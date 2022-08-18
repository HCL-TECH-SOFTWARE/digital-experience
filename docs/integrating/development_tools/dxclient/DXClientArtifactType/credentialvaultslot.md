<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="credentialvaultslot" xml:lang="en-us">
    <title>Create or update credential vault slot | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Credential vault slot</navtitle>
    </titlealts>
    <shortdesc>This topic describes the commands that are used to create or update credential vault
        slot in the DX server.</shortdesc>
    <body>
        <section id="listdamschema">
            <title>Credential vault slot</title>
            <dl id="dl_yyr_vwt_yqb">
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>Use the <codeph>create-credential-vault</codeph> command to create or
                            update a credential vault
                            slot.<codeblock id="codeblock_zyr_vwt_yqb">dxclient create-credential-vault</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>create-credential-vault</codeph> command
                            usage:<codeblock id="codeblock_azr_vwt_yqb">dxclient create-credential-vault -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p>Use this attribute to specify the protocol to connect to the
                            server:<codeblock id="codeblock_tpj_yzc_lrb">-dxProtocol &lt;value></codeblock></p>
                        <p>Use this attribute to specify the hostname of the target
                            server:<codeblock id="codeblock_dzp_c1d_lrb">-hostname &lt;value></codeblock></p>
                        <p>Use this attribute to specify the port on which to connect to the server
                            (for Kubernetes Environment, dxPort is
                            443):<codeblock id="codeblock_itk_d1d_lrb">-dxPort &lt;value></codeblock></p>
                        <p>Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_iqk_21d_lrb">-dxUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_gjh_f1d_lrb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to DX configuration
                            endpoint:<codeblock id="codeblock_ejg_g1d_lrb">-xmlConfigPath &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault segment slot
                            name:<codeblock id="codeblock_thb_h1d_lrb">-credentialSlotName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault
                            Username:<codeblock id="codeblock_bb3_k1d_lrb">-vaultUsername &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault
                            UserGroup:<codeblock id="codeblock_ekw_l1d_lrb">-vaultUserGroup &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault shared userid
                            password:<codeblock id="codeblock_iwz_m1d_lrb">-vaultPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault segment name and the
                            default is set to
                            <codeph>DefaultAdminSegment</codeph>:<codeblock id="codeblock_oq4_41d_lrb">-vaultSegmentName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the credential vault segment
                            description:<codeblock id="codeblock_pcq_p1d_lrb">-vaultDescription &lt;value></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock id="codeblock_jhy_r1d_lrb">dxclient create-credential-vault -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword>  -xmlConfigPath &lt;xmlConfigPath> -credentialSlotName &lt;credentialSlotName> -vaultUsername &lt;vaultUsername> -vaultPassword &lt;vaultPassword></codeblock>
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
