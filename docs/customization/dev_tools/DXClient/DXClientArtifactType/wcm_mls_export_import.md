<?xml version="1.0" encoding="UTF-8"?><?Pub Sty _display FontColor="red"?><?Pub Inc?>
<!DOCTYPE concept PUBLIC "-//OASIS//DTD DITA Concept//EN" "concept.dtd">
<concept id="wcm_mls_export_import" xml:lang="en-us">
    <title>How to translate WCM library content using export and import WCM with DXClient | HCL
        Digital Experience</title>
    <titlealts>
        <navtitle>Translate WCM library content using export and import</navtitle>
    </titlealts>
    <shortdesc>The HCL Multilingual Solution (MLS) export and import capability allows you to
        support translation of the content of a library by exporting it into a format supported by a
        translation service and importing the translated content back into HCL Digital Experience
        using the DXClient tool.</shortdesc>
    <conbody>
        <section id="wcm_mls_export_import_prerequisites">
            <title>Prerequisites</title>
            <ul id="ul_hwz_vf3_npb">
                <li>The libraries for the other languages for translated are already existing
                    and are filled with the content from the main language library, like with the
                    MLS copy portlet.</li>
                <li>The DXClient tool is used to manage the library export and import functions by
                    providing an integrated solution to export and import CSV files for translation.
                    The DXClient export and import process works on HCL Digital Experience 9.5 only.
                    See the <xref href="../../9.5/containerization/dxclient.dita">DXClient Help
                        Center</xref> topic for more information.</li>
            </ul>
        </section>
        <section id="about_wcm_mls_export_import">
            <title>About this task</title>
            <p>There are two separate command for handling bulk translations,
                    <codeph>export</codeph> and <codeph>import</codeph>. These commands deal with
                the translation of all the WCM library contents. Note, however, that only the
                following WCM content elements are translated: <b>short text</b>, <b>rich text</b>,
                and <b>HTML</b>.<ul id="ul_ljj_q33_npb">
                    <li>The <codeph><b>export</b></codeph> command exports the source contents from
                        a library into a CSV file with an auto generated file name at the location
                        specified by the user. This command creates a new CSV file every time the
                        command is run. The following table shows how the output of the Woodburn
                        studio CSV file looks after MLS translation. The entries which contains the
                        heading and then the text/html elements of two content items is translated
                        into any language (the following example shows French and Spanish language).
                        For each 'text' element a row is created for each target language (French
                        and Spanish). Column "Target", is the translate language and all other
                        information is provided to help doing the import automatically. In this
                        table only one element is shown:<table frame="all" rowsep="1" colsep="1"
                            id="table_bmw_1d2_htb">
                            <title>Example of Woodburn studio CVS file look before MLS
                                Translation</title>
                            <tgroup cols="10">
                                <colspec colname="c1" colnum="1" colwidth="1.01*"/>
                                <colspec colname="c2" colnum="2" colwidth="1.01*"/>
                                <colspec colname="c3" colnum="3" colwidth="1.01*"/>
                                <colspec colname="c4" colnum="4" colwidth="1.36*"/>
                                <colspec colname="c5" colnum="5" colwidth="1*"/>
                                <colspec colname="c6" colnum="6" colwidth="1.01*"/>
                                <colspec colname="c7" colnum="7" colwidth="1.01*"/>
                                <colspec colname="c8" colnum="8" colwidth="1.01*"/>
                                <colspec colname="c9" colnum="9" colwidth="1.01*"/>
                                <colspec colname="c10" colnum="10" colwidth="1.2*"/>
                                <thead>
                                    <row>
                                        <entry>Source</entry>
                                        <entry>Target</entry>
                                        <entry>Source UUID</entry>
                                        <entry>Target UUID</entry>
                                        <entry>Source Language</entry>
                                        <entry>Target Language</entry>
                                        <entry>Field</entry>
                                        <entry>Type</entry>
                                        <entry>WCM Type</entry>
                                        <entry>Component Type</entry>
                                    </row>
                                </thead>
                                <tbody>
                                    <row>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>4233a655-2e24-4a1f-8f5d-fcc58386b0eb</entry>
                                        <entry>c66a0135-e35c-454f-b679-e16affa8fa48</entry>
                                        <entry>en</entry>
                                        <entry>es</entry>
                                        <entry>Review-Text</entry>
                                        <entry>Element</entry>
                                        <entry>Content</entry>
                                        <entry>Text Component</entry>
                                    </row>
                                    <row>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>4233a655-2e24-4a1f-8f5d-fcc58386b0eb</entry>
                                        <entry>0e5d4f50-c8ba-4575-bff3-8b98b6729270</entry>
                                        <entry>en</entry>
                                        <entry>fr</entry>
                                        <entry>Review-Text</entry>
                                        <entry>Element</entry>
                                        <entry>Content</entry>
                                        <entry>Text Component</entry>
                                    </row>
                                </tbody>
                            </tgroup>
                        </table></li>
                    <li>The <codeph><b>import</b></codeph> command overwrites any existing
                        translations in the content of the environment. It expects the Target column
                        to be translated to each languages as indicated in the Target Language
                        column. The following table shows a translated example of the previous
                            export.<table frame="all" rowsep="1" colsep="1" id="table_tdj_hd2_htb">
                            <title>Example of Woodburn studio CVS file look after MLS Translation </title>
                            <tgroup cols="10">
                                <colspec colname="c1" colnum="1" colwidth="1.01*"/>
                                <colspec colname="c2" colnum="2" colwidth="1.01*"/>
                                <colspec colname="c3" colnum="3" colwidth="1.01*"/>
                                <colspec colname="c4" colnum="4" colwidth="1.36*"/>
                                <colspec colname="c5" colnum="5" colwidth="1*"/>
                                <colspec colname="c6" colnum="6" colwidth="1.01*"/>
                                <colspec colname="c7" colnum="7" colwidth="1.01*"/>
                                <colspec colname="c8" colnum="8" colwidth="1.01*"/>
                                <colspec colname="c9" colnum="9" colwidth="1.01*"/>
                                <colspec colname="c10" colnum="10" colwidth="1.2*"/>
                                <thead>
                                    <row>
                                        <entry>Source</entry>
                                        <entry>Target</entry>
                                        <entry>Source UUID</entry>
                                        <entry>Target UUID</entry>
                                        <entry>Source Language</entry>
                                        <entry>Target Language</entry>
                                        <entry>Field</entry>
                                        <entry>Type</entry>
                                        <entry>WCM Type</entry>
                                        <entry>Component Type</entry>
                                    </row>
                                </thead>
                                <tbody>
                                    <row>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>Estoy en proceso de rediseñar mi casa y visité
                                            Woodburn Studio. ¡Qué recurso! Diseñadores serviciales y
                                            talentosos en todas partes con muebles y decoración para
                                            el hogar absolutamente impresionantes.</entry>
                                        <entry>4233a655-2e24-4a1f-8f5d-fcc58386b0eb</entry>
                                        <entry>c66a0135-e35c-454f-b679-e16affa8fa48</entry>
                                        <entry>en</entry>
                                        <entry>es</entry>
                                        <entry>Review-Text</entry>
                                        <entry>Element</entry>
                                        <entry>Content</entry>
                                        <entry>Text Component</entry>
                                    </row>
                                    <row>
                                        <entry>I'm in the process of redesigning my home and visited
                                            Woodburn Studio. What a resource! Helpful, talented
                                            designers throughout with absolutely stunning home
                                            furnishings and decor.</entry>
                                        <entry>Je suis en train de réaménager ma maison et j'ai
                                            visité Woodburn Studio. Quelle ressource ! Des designers
                                            serviables et talentueux avec un mobilier et une
                                            décoration absolument époustouflants.</entry>
                                        <entry>4233a655-2e24-4a1f-8f5d-fcc58386b0eb</entry>
                                        <entry>0e5d4f50-c8ba-4575-bff3-8b98b6729270</entry>
                                        <entry>en</entry>
                                        <entry>fr</entry>
                                        <entry>Review-Text</entry>
                                        <entry>Element</entry>
                                        <entry>Content</entry>
                                        <entry>Text Component</entry>
                                    </row>
                                </tbody>
                            </tgroup>
                        </table></li>
                    <li>All the default command options in this section are configured inside the
                            <filepath>- dist/src/configuration/config.json</filepath> file of the
                        tool. The options passed through command line overrides these default
                        values.</li>
                </ul><note> Only the <codeph>ShortTextComponent</codeph> element type has an
                    explicit maximum data length set at 250 characters. The
                        <codeph><b>import</b></codeph> command validates the length of the data for
                    this element type before importing. Errors due to custom configuration of limits
                    are caught by the <codeph><b>import</b></codeph> and
                        <codeph><b>export</b></codeph> during the cycle and are reported in an error
                    log.</note></p>
        </section>
        <section id="wcm_mls_export">
            <title>Export command</title>
            <p>The <codeph><b>export</b></codeph> command is used to export the content of a WCM
                library for translation into a CSV file at the location specified by the user. </p>
            <p><b>Export command</b>:<codeblock>dxclient mls-export</codeblock></p>
            <p><b>Export help command</b>:<codeblock>dxclient mls-export -h</codeblock></p>
            <p><b>Export command options</b>:<ul id="ul_dg5_dm3_npb">
                    <li><codeph>-dxProtocol &lt;value></codeph> - use this attribute to specify the
                        protocol to use to connect to the DX server.</li>
                    <li><codeph>-hostname &lt;value></codeph> - use this attribute to specify the
                        host name of the DX server.</li>
                    <li><codeph>-dxPort &lt;value></codeph> - use this attribute to specify the port
                        on which to connect to the DX server.</li>
                    <li><codeph>-contenthandlerPath &lt;value></codeph> - use this attribute to
                        specify the path to the <filepath>contenthandler</filepath> servlet on the
                        DX server (for example,  <filepath>/wps/mycontenthandler</filepath>).</li>
                    <li><codeph>-dxUsername &lt;value></codeph> - use this attribute to specify the
                        user name required for authenticating with the server.</li>
                    <li><codeph>-dxPassword &lt;value></codeph> - use this attribute to specify the
                        password required for authenticating with the server.</li>
                    <li><codeph>-wcmLibraryId &lt;value></codeph> - the WCM library ID to export the
                        contents of the library.</li>
                    <li><codeph>-exportPath &lt;value></codeph> - the path to export the WCM
                        contents of a library.</li>
                    <li><codeph>-virtualPortalContext &lt;value></codeph> - the context of the
                        virtual portal that contains the Script Application instance you want to
                        create or update.</li>
                </ul></p>
            <p><b>Usage
                sample</b>:<codeblock>dxclient mls-export -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> 
-contenthandlerPath &lt;contenthandlerPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -wcmLibraryId &lt;wcmLibraryId> -exportPath &lt;exportPath> -virtualPortalContext &lt;virtualPortalContext></codeblock></p>
        </section>
        <section id="wcm_mls_import">
            <title>Import command</title>
            <p>The <codeph><b>import</b></codeph> command is used to import the translated content
                into DX and overwrites any existing translations in the content of the
                environment.</p>
            <p><b>Import command</b>:<codeblock>dxclient mls-import</codeblock></p>
            <p><b>Import help command</b>:<codeblock>dxclient mls-import -h</codeblock></p>
            <p><b>Export command options</b>:<ul id="ul_ldg_g43_npb">
                    <li><codeph>-dxProtocol &lt;value></codeph> - use this attribute to specify the
                        protocol to use to connect to the DX server.</li>
                    <li><codeph>-hostname &lt;value></codeph> - use this attribute to specify the
                        host name of the DX server.</li>
                    <li><codeph>-dxPort &lt;value></codeph> - use this attribute to specify the port
                        on which to connect to the DX server.</li>
                    <li><codeph>-contenthandlerPath &lt;value></codeph> - use this attribute to
                        specify the path to the <filepath>contenthandler</filepath> servlet on the
                        DX server (for example,  <filepath>/wps/mycontenthandler</filepath>).</li>
                    <li><codeph>-dxUsername &lt;value></codeph> - use this attribute to specify the
                        user name required for authenticating with the server.</li>
                    <li><codeph>-dxPassword &lt;value></codeph> - use this attribute to specify the
                        password required for authenticating with the server.</li>
                    <li><codeph>-importPath &lt;value></codeph> - the path to import the translated
                        contents into DX.</li>
                    <li><codeph>-virtualPortalContext &lt;value></codeph> - the context of the
                        virtual portal that contains the Script Application instance you want to
                        create or update.</li>
                </ul></p>
            <p><b>Usage
                sample</b>:<codeblock>dxclient mls-import -dxProtocol &lt;dxProtocol> -hostname &lt;hostname> -dxPort &lt;dxPort> 
-contenthandlerPath &lt;contenthandlerPath> -dxUsername &lt;dxUsername> -dxPassword &lt;dxPassword> -importPath &lt;importPath> -virtualPortalContext &lt;virtualPortalContext></codeblock></p>
        </section>
        <section id="wcm_mls_sample_pipelines">
            <title>Sample pipelines</title>
            <p>You can use the sample pipelines in this section to run MLS export and import. The
                sample pipelines (available under the samples folder in the DXClient root folder)
                can be used by developers and administrators as a basis for Jenkins automation
                server jobs.</p>
            <p>These samples show how to install the DXClient tool in a pipeline and then export and
                import the MLS. These are designed to run from a Jenkins job with the parameters
                indicated.</p>
            <p>
                <div><wintitle>MLS Export</wintitle></div>
                <table frame="all" rowsep="1" colsep="1" id="table_wcm_mls_dxclient_export_pipeline">
                    <title>MLS Export</title>
                    <tgroup cols="3">
                        <colspec colname="c1" colnum="1" colwidth="1*"/>
                        <colspec colname="c2" colnum="2" colwidth="1*"/>
                        <colspec colname="c3" colnum="3" colwidth="1*"/>
                        <thead>
                            <row>
                                <entry>Parameter</entry>
                                <entry>Value</entry>
                                <entry>Notes</entry>
                            </row>
                        </thead>
                        <tbody>
                            <row>
                                <entry>AGENT_LABEL</entry>
                                <entry>Jenkins agent label</entry>
                                <entry>Determines the agents the pipeline can run</entry>
                            </row>
                            <row>
                                <entry>TOOL_PACKAGE_URL</entry>
                                <entry>URL to DXClient zip</entry>
                                <entry>Fetched via curl</entry>
                            </row>
                            <row>
                                <entry>TOOL_CREDENTIALS_ID</entry>
                                <entry>Credentials ID in Jenkins store</entry>
                                <entry>The user name and password needed to access the tool package
                                    URL</entry>
                            </row>
                            <row>
                                <entry>DX_CREDENTIALS_ID</entry>
                                <entry>Credentials ID in Jenkins store</entry>
                                <entry>The user name and password needed to access DX server</entry>
                            </row>
                            <row>
                                <entry>DX_PROTOCOL</entry>
                                <entry>Protocol to connect to the DX server</entry>
                                <entry>HTTP or HTTPS</entry>
                            </row>
                            <row>
                                <entry>DX_HOST</entry>
                                <entry>Host name or IP address of the DX server</entry>
                                <entry>Artifacts are deployed to this server</entry>
                            </row>
                            <row>
                                <entry>DX_PORT</entry>
                                <entry>Port to connect to the DX server</entry>
                                <entry>Port for the DX main profile</entry>
                            </row>
                            <row>
                                <entry>CONTENT_HANDLER_PATH</entry>
                                <entry>Alternate path for the portal context root or the content
                                    handler servlet</entry>
                                <entry>Default path:
                                    <filepath>/wps/mycontenthandler/</filepath></entry>
                            </row>
                            <row>
                                <entry>WCM_LIBRARY_ID</entry>
                                <entry>WCM library ID to export the contents of the library</entry>
                                <entry>Exports the available content from this library ID</entry>
                            </row>
                            <row>
                                <entry>EXPORT_PATH</entry>
                                <entry>The path to export the WCM contents of a library</entry>
                                <entry>The path where the content is exported</entry>
                            </row>
                        </tbody>
                    </tgroup>
                </table>
                <fig id="wcm_mls_dxclient_export_pipeline" scale="50">
                    <title>DXClient MLS export pipeline sample</title>
                    <image href="../images/wcm_mls_exim_export_pipeline.png" id="image_hnk_nbj_npb"
                    />
                </fig>
            </p>
            <p>
                <div><wintitle>MLS Import</wintitle></div>
                <table frame="all" rowsep="1" colsep="1" id="table_wcm_mls_dxclient_import_pipeline">
                    <title>MLS Import</title>
                    <tgroup cols="3">
                        <colspec colname="c1" colnum="1" colwidth="1*"/>
                        <colspec colname="c2" colnum="2" colwidth="1*"/>
                        <colspec colname="c3" colnum="3" colwidth="1*"/>
                        <thead>
                            <row>
                                <entry>Parameter</entry>
                                <entry>Value</entry>
                                <entry>Notes</entry>
                            </row>
                        </thead>
                        <tbody>
                            <row>
                                <entry>AGENT_LABEL</entry>
                                <entry>Jenkins agent label</entry>
                                <entry>Determines the agents the pipeline can run</entry>
                            </row>
                            <row>
                                <entry>TOOL_PACKAGE_URL</entry>
                                <entry>URL to DXClient zip</entry>
                                <entry>Fetched via curl</entry>
                            </row>
                            <row>
                                <entry>TOOL_CREDENTIALS_ID</entry>
                                <entry>Credentials ID in Jenkins store</entry>
                                <entry>The user name and password needed to access the tool package
                                    URL</entry>
                            </row>
                            <row>
                                <entry>DX_CREDENTIALS_ID</entry>
                                <entry>Credentials ID in Jenkins store</entry>
                                <entry>The user name and password needed to access DX server</entry>
                            </row>
                            <row>
                                <entry>ARTIFACT_CREDENTIALS_ID</entry>
                                <entry>Credentials ID in Jenkins store</entry>
                                <entry>The user name and password needed to access artifact
                                    URLs</entry>
                            </row>
                            <row>
                                <entry>ARTIFACT_PATH</entry>
                                <entry>URL (except file names) for artifacts to be deployed</entry>
                                <entry>Artifacts fetched via curl</entry>
                            </row>
                            <row>
                                <entry>DX_PROTOCOL</entry>
                                <entry>Protocol to connect to the DX server</entry>
                                <entry>HTTP or HTTPS</entry>
                            </row>
                            <row>
                                <entry>DX_HOST</entry>
                                <entry>Host name or IP address of the DX server</entry>
                                <entry>Artifacts are deployed to this server</entry>
                            </row>
                            <row>
                                <entry>DX_PORT</entry>
                                <entry>Port to connect to the DX server</entry>
                                <entry>Port for the DX main profile</entry>
                            </row>
                            <row>
                                <entry>CONTENT_HANDLER_PATH</entry>
                                <entry>Alternate path for the portal context root or the content
                                    handler servlet</entry>
                                <entry>Default path:
                                    <filepath>/wps/mycontenthandler/</filepath></entry>
                            </row>
                            <row>
                                <entry>IMPORT_FILE_NAME</entry>
                                <entry>File name to import the translated content into DX</entry>
                                <entry>Imports the content from this file</entry>
                            </row>
                        </tbody>
                    </tgroup>
                </table>
                <fig id="wcm_mls_dxclient_import_pipeline">
                    <title>DXClient MLS import pipeline sample</title>
                    <image href="../images/wcm_mls_exim_import_pipeline.png" id="image_mvf_tbj_npb"
                        scale="50"/>
                </fig>
            </p>
        </section>
    </conbody>
</concept><?Pub *0000005452?>
