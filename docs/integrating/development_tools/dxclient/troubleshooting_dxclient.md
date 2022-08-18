<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept id="troubleshooting_dxclient" xml:lang="en-us">
    <title>Troubleshooting DXClient | HCL Digital Experience</title>
    <titlealts>
        <navtitle>Troubleshooting DXClient</navtitle>
    </titlealts>
    <shortdesc>Logs can be enabled and disabled as desired by DX developers and administrators
        through configuration options in the <filepath>config.json</filepath> file of DXClient. The
        log files can be viewed inside the <filepath>logs</filepath> folder within the DXClient
        installation folder.</shortdesc>
    <conbody>
        <section id="section_snk_t1y_v4b">
            <title>Enable or disable logs</title>
            <p>
                <!--<note>The Logs enabling/disabling is limited to <codeph>deploy-portlet</codeph> command only.</note>-->
                <dl>
                    <dlentry>
                        <dt>Enable logger</dt>
                        <dd>The DXClient tool Logs can be enabled by setting the parameter
                                <codeph>enableLogger: true</codeph> in the
                                <filepath>config.json</filepath> file.</dd>
                    </dlentry>
                    <dlentry>
                        <dt>Disable logger</dt>
                        <dd>The DXClient tool Logs can be disabled by setting the parameter
                                <codeph>enableLogger: false</codeph> in the
                                <filepath>config.json</filepath> file.</dd>
                    </dlentry>
                </dl>
            </p>
        </section>
    </conbody>
</concept>
