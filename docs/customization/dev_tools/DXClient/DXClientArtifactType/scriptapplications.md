<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic
  PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="scriptapplications" xml:lang="en-us">
    <title>Script applications | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Script applications</navtitle>
    </titlealts>
    <shortdesc>This topic provides information about the deployment, undeployment, and restoration
        of script applications.</shortdesc>
    <body>
        <section id="section_um4_jqg_w4b"><title>Deploy script applications</title>The
                <codeph>deploy-scriptapplication</codeph> command is used with the DXClient tool to
            push or pull Script Applications between a local development workstation or automation
            server and DX 9.5 CF19 or later servers. The command will push or pull the files that
            make up a script application to or from a Script Application instance stored in a Web
            Content Manager library on the server.<p><b>Required Files</b>:</p><p>The script
                application push command in the DXClient tool requires a Script Application zip file
                or an extracted folder of the same (identified by the <codeph>prebuiltZip</codeph>
                or <codeph>contentRoot</codeph> attributes respectively). For more information on
                Script Applications, refer to the <xref href="../script-portlet/build_apps.html"
                    scope="peer" format="html">Script Application</xref> topics in the HCL DX Help
                Center.</p><p><b>Command</b></p><p>This command invokes the
                    <codeph>deploy-scriptapplication</codeph> command inside the DXClient tool to
                either push or pull a script
                application:<codeblock>dxclient deploy-scriptapplication</codeblock></p><p><b>Subcommands</b></p><p>Use
                this command to create or update the content of a Script Application on the HCL DX
                server: <codeblock>push [options]</codeblock></p><p>Use this command to download the
                content of a Script Application from the HCL DX
                server:<codeblock>pull [options]</codeblock></p><p><b>Help command</b></p><p>This
                command shows the help document on
                the <codeph>deploy-scriptapplication</codeph> command:<codeblock>dxclient deploy-scriptapplication pull -h

dxclient deploy-scriptapplication push -h</codeblock></p><p><b>Options
                    for the <codeph>pull</codeph> subcommand</b></p><p>Use this attribute to specify
                the protocol with which to connect to the DX
                server:<codeblock>-dxProtocol &lt;value></codeblock></p><p>Use this attribute to
                specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p><p>Use this attribute to
                specify the port on which to connect to the DX
                server:<codeblock>-dxPort &lt;value></codeblock></p><p>Use this attribute to specify
                the path to the content handler servlet on DX server (example:
                    <codeph>/wps/mycontenthandler</codeph>):<codeblock>-contenthandlerPath &lt;value></codeblock></p><p>Use
                this attribute to specify the context of the virtual portal that contains the Script
                Application instance that you want to retrieve, if
                any:<codeblock>-virtualPortalContext &lt;value></codeblock></p><p>Use this attribute
                to specify the context of the portal project that manages the publication of changes
                to the Script Application instance, if
                any:<codeblock>-projectContext &lt;value></codeblock></p><p>Use this attribute to
                specify the username to authenticate with the DX
                server:<codeblock>-dxUsername &lt;value></codeblock></p><p>Use this attribute to
                specify the password for the user in the <codeph>dxUsername</codeph>
                attribute:<codeblock>-dxPassword &lt;value></codeblock></p><p>Use this attribute to
                specify the WCM content ID of the Script Application content
                item:<codeblock>-wcmContentId &lt;value></codeblock></p><p><b>Options for the
                        <codeph>push</codeph> subcommand</b></p><p>Use this attribute to specify the
                protocol with which to connect to the DX
                server:<codeblock>-dxProtocol &lt;value></codeblock></p><p>Use this attribute to
                specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p><p>Use this attribute to
                specify the port on which to connect to the DX
                server:<codeblock>-dxPort &lt;value></codeblock></p><p>Use this attribute to specify
                the path to the content handler servlet on the DX server (e.g.
                    <filepath>/wps/mycontenthandler</filepath>):<codeblock>-contenthandlerPath &lt;value></codeblock></p><p>Use
                this attribute to specify the context of the virtual portal that should receive the
                Script Application instance being pushed, if
                any:<codeblock>-virtualPortalContext &lt;value></codeblock></p><p>Use this attribute
                to specify the context of the portal project that manages the publication of changes
                to the Script Application instance, if
                any:<codeblock>-projectContext &lt;value></codeblock></p><p>Use this attribute to
                specify the username to authenticate with the DX
                server:<codeblock>-dxUsername &lt;value></codeblock></p><p>Use this attribute to
                specify the password for the user in the <codeph>dxUsername</codeph> attribute:
                <codeblock>-dxPassword &lt;value></codeblock></p><p>Use this attribute to specify
                the WCM ID of the Script Application content
                item:<codeblock>-wcmContentId &lt;value></codeblock></p><p>Use this attribute to
                specify the <codeph>SiteArea</codeph> containing the Script Application content
                item:<codeblock>-wcmSiteArea &lt;value></codeblock></p><p>Use this attribute to
                specify the name of the Script Application content item to be created or
                updated:<codeblock>-wcmContentName &lt;value></codeblock></p><p>Use this attribute
                to specify the full WCM path of the Script Application content item to be created or
                updated:<codeblock>-wcmContentPath &lt;value></codeblock></p><p>Use this attribute
                to set or update the title of the Script Application content
                item:<codeblock>-wcmContentTitle &lt;value></codeblock></p><p>Use this attribute to
                specify the main HTML file name that is present within the Script
                Application:<codeblock>-mainHtmlFile &lt;value></codeblock></p><p>Use this attribute
                to specify the absolute or relative path to the Script Application's content as a
                ZIP file:<codeblock>-prebuiltZip &lt;value></codeblock></p><p>Use this attribute to
                specify the absolute or relative path to the Script Application's content in a
                directory:<codeblock>contentRoot &lt;value></codeblock></p><note type="other"
                othertype="Notes">
                <ul id="ul_vm4_jqg_w4b">
                    <li>At least one of (a) <codeph>wcmContentId</codeph>, (b)
                            <codeph>wcmContentPath</codeph> or (c) both
                            <codeph>wcmContentName</codeph> and <codeph>wcmSiteArea</codeph> must be
                        specified. If multiple options are provided, then the priority order goes as
                        follows: (a), then (b), and then (c).</li>
                    <li>Use <codeph>wcmContentId</codeph> only if you are updating an existing
                        Script Application instance - for new Script Applications specify either (a)
                            <codeph>wcmContentPath</codeph> or (b) both
                            <codeph>wcmContentName</codeph> and <codeph>wcmSiteArea</codeph>.</li>
                    <li><codeph>mainHtmlFile</codeph> is mandatory.</li>
                    <li>The outputfile for <cmdname>pull</cmdname> will be generated inside
                            <filepath>store/outputFiles/sp-pull-output</filepath>.</li>
                    <li>When <filepath>prebuiltZip</filepath> is specified, the main HTML file path
                        must be relative to the top-level directory in the compressed file.</li>
                </ul>
            </note><p>Command options passed through the command line will override values set in
                the <filepath>config.json</filepath> file.</p><p><b>Example:</b></p><p>For Script
                Application
                Pull:<codeblock>dxclient deploy-scriptapplication pull -wcmContentId &lt;wcmContentId></codeblock></p><p>If
                all required options are configured in <filepath>config.json</filepath> of the DX
                Client tool, then execute:
                <codeblock>dxclient deploy-scriptapplication pull</codeblock></p><p>For Script
                Application Push, if the Script Application is extracted to a folder named
                    <filepath>temp</filepath> at the root of the DXClient machine:
                <codeblock>dxclient deploy-scriptapplication push -contentRoot /temp -wcmSiteArea "Script Application Library/Script Applications/" -wcmContentName DemoScriptApplication</codeblock></p><p>If
                the Script Application is available as a <filepath>.zip</filepath> file in a folder
                named temp on the DXClient tool location,
                execute:<codeblock>dxclient deploy-scriptapplication push -prebuiltZip /temp/DemoScriptApplication.zip -wcmSiteArea "Script Application Library/Script Applications/" -wcmContentName DemoScriptApplication</codeblock></p><p>If
                all required options are configured in the <filepath>config.json</filepath> at
                    the <filepath>/dist/src/configuration</filepath> path of the DXClient tool, then
                execute:<codeblock>dxclient deploy-scriptapplication push</codeblock></p></section>
        <section id="section_i2y_ttl_4nb">
            <title>Undeploy script applications</title>
            <p>The <codeph>undeploy-scriptapplication</codeph> command is used to remove a script
                application from a target HCL DX 9.5 CF192 or later servers.</p>
            <p><b>Required file</b></p>
            <p>This command invokes the undeploy-scriptapplication tool inside the DXClient. The
                undeploy-scriptapplication dxtool uses the provided files and execute the undeploy
                scriptapplication task.</p>
            <p><b>Command</b><codeblock>dxclient undeploy-scriptapplication -wcmContentId &lt;value></codeblock></p>
            <p><b>Help command</b></p>
            <p>This command shows the help information for
                    <codeph>undeploy-scriptapplication</codeph> command
                usage:<codeblock>dxclient undeploy-scriptapplication -h</codeblock></p>
            <p><b>Command options</b></p>
            <p>Use this attribute to specify the protocol with which to connect to the DX
                server:<codeblock>-dxProtocol &lt;value></codeblock></p>
            <p>Use this attribute to specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p>
            <p>Use this attribute to specify the port on which to connect to the DX
                server:<codeblock>-dxPort &lt;value></codeblock></p>
            <p>Use this attribute to specify the path to the content handler servlet on DX server
                (example,
                <codeph>/wps/mycontenthandler</codeph>):<codeblock>-contenthandlerPath &lt;value></codeblock></p>
            <p>Use this attribute to specify the context of the virtual portal that contains the
                Script Application instance that you want to retrieve, if
                any:<codeblock>-virtualPortalContext &lt;value></codeblock></p>
            <p>Use this attribute to specify the context of the portal project that manages the
                publication of changes to the Script Application instance, if
                any:<codeblock>-projectContext &lt;value></codeblock></p>
            <p>Use this attribute to specify the username to authenticate with the DX
                server:<codeblock>-dxUsername &lt;value></codeblock></p>
            <p>Use this attribute to specify the password for the user in the
                    <codeph>dxUsername</codeph>
                attribute:<codeblock>-dxPassword &lt;value></codeblock></p>
            <p>Use this attribute to specify the WCM content ID of the Script Application content
                item:<codeblock>-wcmContentId &lt;value></codeblock></p>
            <p>Use this tag to forcefully delete the Script
                Application:<codeblock>-f</codeblock></p>
            <p>Command options passed through the command line will override values set in the
                    <filepath>config.json</filepath> file.</p>
            <p>Log files from command execution can be found in the logs directory of the DXClient
                installation.</p>
            <p><b>Example:</b><codeblock>dxclient undeploy-scriptapplication -wcmContentId &lt;wcm-content-id>
dxclient undeploy-scriptapplication -wcmContentId &lt;wcm-content-id> -f</codeblock></p>
        </section>
        <section id="section_fzm_yqg_w4b">
            <title>Restore Script Application</title>
            <p>The <codeph>restore-scriptapplication</codeph> command is used to restore a script
                application into one of its previous versions present in the target HCL DX 9.5 CF 19
                or later servers.</p>
            <p><b>Required file</b></p>
            <p>This command invokes the restore-scriptapplication tool inside the DXClient. The
                restore-scriptapplication dxtool uses the provided files and execute the restore
                scriptapplication task.</p>
            <p><b>Command</b><codeblock>dxclient restore-scriptapplication -wcmContentId &lt;value> -versionName &lt;version-name></codeblock></p>
            <p><b>Help command</b></p>
            <p>This command shows the help information for
                    <codeph>restore-scriptapplication</codeph> command
                usage:<codeblock>dxclient restore-scriptapplication -h</codeblock></p>
            <p><b>Command options</b></p>
            <p>Use this attribute to specify the protocol with which to connect to the DX
                server:<codeblock>-dxProtocol &lt;value></codeblock></p>
            <p>Use this attribute to specify the hostname of the target DX
                server:<codeblock>-hostname &lt;value></codeblock></p>
            <p>Use this attribute to specify the port on which to connect to the DX
                server:<codeblock>-dxPort &lt;value></codeblock></p>
            <p>Use this attribute to specify the path to the content handler servlet on DX server
                (example,
                <codeph>/wps/mycontenthandler</codeph>):<codeblock>-contenthandlerPath &lt;value></codeblock></p>
            <p>Use this attribute to specify the context of the virtual portal that contains the
                Script Application instance that you want to retrieve, if
                any:<codeblock>-virtualPortalContext &lt;value></codeblock></p>
            <p>Use this attribute to specify the context of the portal project that manages the
                publication of changes to the Script Application instance, if
                any:<codeblock>-projectContext &lt;value></codeblock></p>
            <p>Use this attribute to specify the username to authenticate with the DX
                server:<codeblock>-dxUsername &lt;value></codeblock></p>
            <p>Use this attribute to specify the password for the user in the
                    <codeph>dxUsername</codeph>
                attribute:<codeblock>-dxPassword &lt;value></codeblock></p>
            <p>Use this attribute to specify the WCM content ID of the Script Application content
                item:<codeblock>-wcmContentId &lt;value></codeblock></p>
            <p>Use this attribute to specify the versionName for the Script
                Application:<codeblock>-versionName &lt;value></codeblock></p>
            <p>Use this attribute to specify the restore as a draft or replace the published version
                of Script Application:<codeblock>-restoreAsPublished &lt;value></codeblock></p>
            <p>Command options passed through the command line will override values set in the
                    <filepath>config.json</filepath> file.</p>
            <p>Log files from command execution can be found in the logs directory of the DXClient
                installation.</p>
            <p><b>Example:</b><codeblock>dxclient restore-scriptapplication -wcmContentID &lt;wcm-content-id> -versionName &lt;version-name> -restoreAsPublished &lt;restore-as-published></codeblock></p>
        </section>
        <p>
            <note>The attribute <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                releases. It is recommended that you start using the replacement parameter
                    <codeph>-hostname</codeph> starting from CF202 wherever necessary.</note>
        </p>
    </body>
</topic>
