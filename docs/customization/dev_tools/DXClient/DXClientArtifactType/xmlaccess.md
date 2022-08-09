<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="xmlaccess" xml:lang="en-us">
    <title>XML Access | HCL Digital Experience</title>
    <titlealts>
        <navtitle>XML Access</navtitle>
    </titlealts>
    <shortdesc>This topic provides information about the <cmdname>xmlaccess</cmdname> command that
        is used to export or import portlet configurations.</shortdesc>
    <body>
        <section id="xmlaccess">
            <title>XML Access</title>
            <p>The <codeph>xmlaccess</codeph> command is used to export or import pages or portlet
                configurations from a target HCL DX 9.5 CF19 or later server using the input
                    <filepath>XMLAccess</filepath> file.</p>
            <p><b>Required file</b></p>
            <p><filepath>XMLAccess</filepath> file : This XML file must contain the configuration
                update or export operation for the web application.</p>
            <p><b>Command</b><codeblock>dxclient xmlaccess -xmlFile &lt;path></codeblock></p>
            <p><b>Help command</b></p>
            <p>This command shows the help information for <codeph>xmlaccess</codeph> command
                usage:<codeblock>dxclient xmlaccess -h</codeblock></p>
            <p><b>Command options</b></p>
            <p>Use this attribute to specify the protocol with which to connect to the DX server
                    (<filepath>wp_profile</filepath>):<codeblock>-dxProtocol &lt;value></codeblock></p>
            <p>Use this attribute to specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p>
            <p>Use this attribute to specify the port on which to connect to the DX server
                    (<codeph>wp_profile</codeph>):<codeblock>-dxPort &lt;value></codeblock></p>
            <p>Use this attribute to specify the path to DX configuration endpoint (e.g.
                    <filepath>/wps/config</filepath>):<codeblock>-xmlConfigPath &lt;value></codeblock></p>
            <p>Use this attribute to specify the username to authenticate with the DX server
                    (<codeph>wp_profile</codeph>):<codeblock>-dxUsername &lt;value></codeblock></p>
            <p>Use this attribute to specify the password for the user in the
                    <codeph>dxUsername</codeph>
                attribute:<codeblock>-dxPassword &lt;value></codeblock></p>
            <p>Use this attribute to specify the local path to the XMLAccess
                file:<codeblock>-xmlFile &lt;Absolute or relative path to xmlaccess input file></codeblock></p>
            <p> Command options passed through the command line overrides values set in the
                    <filepath>config.json</filepath> file.</p>
            <p>Log files from command execution can be found in the logs directory of the DXClient
                installation.</p>
            <p><b>Example:</b><codeblock>dxclient xmlaccess -xmlFile &lt;xml-file-with-path></codeblock></p>
        </section>
        <p>
            <note>The attribute <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                releases. It is recommended that you start using the replacement parameter
                    <codeph>-hostname</codeph> starting from CF202 wherever necessary.</note>
        </p>
    </body>
</topic>
