<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="deployapplication" xml:lang="en-us">
    <title>Digital Experience applications | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Digital Experience applications</navtitle>
    </titlealts>
    <shortdesc>This section provides information about the deployment of DX application artifacts by
        using the DXClient tool.</shortdesc>
    <body>
        <section id="deploydxapp">
            <title>Deploy Application</title>
            <p>The <cmdname>deploy-application</cmdname> command is used to deploy the EAR file into
                the WebSphere Application Server.</p>
            <dl>
                <dlentry>
                    <dt>Command description</dt>
                    <dd>
                        <p>This command invokes the deploy-application tool inside DXClient. This
                            command uses the provided files and execute the deploy application
                            task.<codeblock>dxclient deploy-application</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required files</dt>
                    <dd>The following EAR file will be deployed into the WebSphere Application
                        Server: <filepath>Deployable EAR </filepath></dd>
                </dlentry>
                <dlentry>
                    <dt>Help command</dt>
                    <dd>
                        <p>This command shows the help information for
                                <codeph>deploy-application</codeph> command
                            usage:<codeblock>dxclient deploy-application -h</codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Command options</dt>
                    <dd>
                        <p> Use this attribute to specify the hostname of the target
                            server:<codeblock id="codeblock_y4p_3g1_nqb">-hostname &lt;value></codeblock></p>
                        <p> Use this attribute to specify the protocol with which to connect to the
                            server:<codeblock id="codeblock_z4p_3g1_nqb">-dxProtocol &lt;value></codeblock></p>
                        <p> Use this attribute to specify the port on which to connect to the
                            server(for Kubernetes Environment dxPort is
                            443):<codeblock id="codeblock_app_3g1_nqb">-dxPort &lt;value></codeblock></p>
                        <p> Use this attribute to specify the username that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_bpp_3g1_nqb">-dxUsername &lt;value> </codeblock></p>
                        <p>Use this attribute to specify the password that is required for
                            authenticating with the
                            server:<codeblock id="codeblock_cpp_3g1_nqb">-dxPassword &lt;value></codeblock></p>
                        <p>Use this attribute and retrigger the command to check the status of any
                            previous request that was
                            incomplete:<codeblock id="codeblock_anp_h1y_lsb">-requestId &lt;Unique ID of a previously triggered deploy application request></codeblock></p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Required options for application deployment</dt>
                    <dd>
                        <p>Use this attribute to specify the hostname of the target DX
                            server:<codeblock>-hostname &lt;value></codeblock></p>
                        <p> Use this attribute to specify the port number of the cw_profile (e.g.
                            for Kubernetes Environment, dxConnectPort is
                            443):<codeblock>-dxConnectPort &lt;value></codeblock></p>
                        <p> Use this attribute to specify the username that is required for
                            authenticating to the
                            cw_profile:<codeblock>-dxConnectUsername &lt;value></codeblock></p>
                        <p> Use this attribute to specify the password that is required for
                            authenticating to the
                            cw_profile:<codeblock>-dxConnectPassword &lt;value></codeblock></p>
                        <p>Use this attribute to specify Soap port of the DX
                            server:<codeblock>-dxSoapPort &lt;Soap port of the DX server></codeblock></p>
                        <p conref="portlets.dita#portlets/dxprofilepathorname"/>
                        <p>Use this attribute to specify the EAR file path that is required while
                            executing the deploy application
                            task:<codeblock>–applicationFile &lt;Absolute or relative path to deployable ear file></codeblock></p>
                        <p>Use this attribute to specify the application
                            name:<codeblock>-applicationName &lt;value></codeblock></p>
                        <p>Use this attribute to specify the path to the contenthandler servlet on
                            the DX server (e.g.
                            <filepath>/wps/mycontenthandler</filepath>):<codeblock>-contenthandlerPath &lt;value></codeblock></p>
                        <p>The values passed through the command line command override the default
                            values:</p>
                    </dd>
                </dlentry>
                <dlentry>
                    <dt>Example:</dt>
                    <dd>
                        <p>
                            <codeblock>dxclient deploy-application -dxProtocol &lt;http/https> -hostname &lt;host-name> -dxPort &lt;dxPort> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -dxSoapPort &lt;dxSoapPort> -hostname &lt;hostname> -dxConnectPort &lt;dxConnectPort> -dxConnectUsername &lt;dxConnectUsername> -dxConnectPassword &lt;dxConnectPassword> -applicationFile &lt;application-file-with-path> -applicationName &lt;application name> -dxProfileName &lt;Profile name of the DX core server></codeblock>
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
