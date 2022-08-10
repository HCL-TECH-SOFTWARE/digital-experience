<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE topic PUBLIC "-//OASIS//DTD DITA Topic//EN" "topic.dtd">
<topic id="dxclientartifacts" xml:lang="en-us">
    <title>DXClient Artifact Types | HCL Digital Experience</title>
    <titlealts>
        <navtitle>DXClient Artifact Types </navtitle>
    </titlealts>
    <abstract>
        <shortdesc>This section provides information about the artifact types that are currently
            supported by the DXClient tool. </shortdesc>
        <note id="note_d3s_xg1_nqb" type="other" othertype="Limitations">
            <ul>
                <li>If deploying CICD artifacts using DXClient to the Red Hat OpenShift environment,
                    you might receive failure messages while you run the
                        <cmdname>deploy-theme</cmdname>, <cmdname>deploy-application</cmdname>, or
                        <cmdname>restart-dx-core</cmdname> commands. This might happen because of a
                    connection getting closed due to timeout before the response is ready. In such
                    situations, before re-triggering the request, we advise you to check your target
                    server to verify if the application has been deployed or the server is up, as
                    the request was already triggered from the client-side.</li>
            </ul>
        </note>
        <note type="other" othertype="Notes">The following list shows some of the deprecated
            parameters and the new parameters that replace them in CF201 and later releases. It is
            recommended that you start using the new parameters below because the old parameters
            might be removed in later releases:<ul id="ul_zzp_ltz_msb">
                <li><codeph>-dxConnectHostname</codeph> replaced by
                        <codeph>-hostname</codeph><note>The attribute
                            <codeph>-dxConnectHostname</codeph> is deprecated in CF202 and later
                        releases. It is recommended that you start using the replacement parameter
                            <codeph>-hostname</codeph> starting from CF202 wherever
                        necessary.</note></li>
                <li><codeph>-targetServerHostname</codeph> replaced by
                        <codeph>-targetHostname</codeph></li>
                <li><codeph>-targetServerPort -></codeph> replaced by
                        <codeph>-targetDxConnectPort</codeph></li>
                <li><codeph>-targetServerUsername</codeph> replaced by
                        <codeph>-targetDxConnectUsername</codeph></li>
                <li><codeph>-targetServerPassword</codeph> replaced by
                        <codeph>-targetDxConnectPassword</codeph></li>
                <li><codeph>-targetServerProfileName</codeph> replaced by
                        <codeph>-targetDxProfileName</codeph></li>
            </ul></note>
    </abstract>
</topic>
