<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept id="dxconnect" xml:lang="en-us">
    <title>DXConnect | HCL Digital Experience</title>
    <titlealts>
        <navtitle>DXConnect </navtitle>
    </titlealts>
    <shortdesc>DXConnect is a servlet-based internal application deployed on top of IBM WebSphere
        Application Server in the HCL DX 9.5 CF19 and later releases, under the <xref
            href="../config/cw_overview.html" format="html" scope="peer">Configuration Wizard
            profile - <codeph>cw_profile</codeph></xref>. DXConnect enables the DXClient tool to
        connect over an HTTP or HTTPS connection from a client development machine or remote server
        to a source or target HCL DX 9.5 server to execute certain tasks requested via DXClient
        commands. This topic covers the DXConnect installation and configuration
        instructions.</shortdesc>
    <conbody>
        <section id="section_i5g_3bw_v4b">
            <title>Authentication</title>
            <p>DXConnect is a servlet-based application deployed on top of IBM WebSphere Application
                Server in an HCL DX 9.5 CF19 and later deployment, under the Configuration Wizard
                profile - <codeph>cw_profile</codeph>. DXConnect enables the DXClient tool to
                connect over an HTTPS connection from a client development workstation or automation
                server to a target HCL DX 9.5 server to execute certain tasks requested via DXClient
                commands.</p>
            <p><b>Authentication</b></p>
            <p>DXConnect requires the <codeph>cw_profile</codeph> Administrator security role to
                access the application servlet APIs.</p>
            <p id="dxconnectinstall"><b>DXConnect Installation </b>
            </p>
            <p>To install DXConnect use the command
                below:<codeblock>./ConfigEngine.sh install-dxconnect-application
</codeblock></p>
            <p>This task will not only install the DxConnect application, but it will create the
                "DXC_ConfigSettings" WAS Resource Environment Provider and will create two custom
                properties in that
                REP:<codeblock>DXCONNECT_MAX_MEMORY_SIZE_MB
DXCONNECT_MAX_FILE_SIZE_MB
</codeblock></p>
            <p>To remove DXConnect use the command
                below:<codeblock>./ConfigEngine.sh remove-dxconnect-application
</codeblock></p>
            <p>To re-install DXConnect use the command
                below:<codeblock>./ConfigEngine.sh reinstall-dxconnect-application
</codeblock></p>
            <p>
                <note othertype="Notes" type="other">
                    <ol id="ol_uhw_ntg_w4b">
                        <li>In Standalone and Cluster setups, the <codeph>ConfigEngine</codeph> task
                            should be run under the <codeph>wp_profile</codeph> to have DXConnect
                            installed in the correct location, and a restart of the
                                <codeph>cw_profile</codeph> server may be required.<p>To verify it
                                is installed on a given HCL DX Server 9.5 with CF19 or later,
                                navigate to the <b>Configuration Wizard</b> Admin console and then
                                under <b>Enterprise Applications</b>. The <codeph>dxconnect</codeph>
                                application will appear on the console as shown in the example
                                below. For more information on accessing and working with the
                                Configuration Wizard, refer to <xref
                                    href="../config/cw_run.html" format="html" scope="peer"
                                    >Accessing the Configuration Wizard</xref> topics.<image
                                    placement="break"
                                    href="../assets/HCL_DXConnect_installation.png" align="left"
                                    id="image_hts_j5g_w4b"/></p></li>
                        <li>In Red Hat OpenShift, the route for DXConnect is available under the
                            name <filepath>dx-deployment-service-dxconnect</filepath>. For the other
                            supported platforms, there is only one route path as usual.</li>
                    </ol>
                </note>
            </p>
        </section>
        <section id="section_skh_ccz_msb">
            <title>Accessing the ConfigWizard admin console in a container environment </title>
            <p>You can access the ConfigWizard admin console in a container environment from your
                local system. For more information, refer to <xref
                    href="helm_access_configwizard.dita"/>.</p>
        </section>
    </conbody>
</concept>
