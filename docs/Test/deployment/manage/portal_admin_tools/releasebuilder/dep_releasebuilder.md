# Making updates with ReleaseBuilder

You can use ReleaseBuilder to compare the XML configuration files that describe your staging server (REV1) and your updated staging server (REV2). You can also use it to create an XML configuration file that contains the differences between the two servers. You can then use this output file to import only the differences from your staging server (REV2) onto the production server. Features that are unchanged from (REV1) on the staging server (REV2) are not affected by the import.

Ensure that your development, test, and production environments are configured to allow all of the required artifacts and the configuration to be moved.

ReleaseBuilder is preferably run on an integration or staging server. Running ReleaseBuilder on the production server is not advised because ReleaseBuilder uses resources and affects portal services to users.

ReleaseBuilder uses XML configuration files to create an XML configuration file of the differences between the two servers. This XML configuration file is used to transfer the new portal configuration from your staging server to your production server. To export the configurations of the servers, use the XML configuration interface.

The XML files from your staging server (REV1) and from your updated staging server (REV2) refer to two exports that are taken from the SAME portal server. Building a release means to generate an XML file that contains the same modifications that are made to the staging server between REV1 and REV2. ReleaseBuilder is not designed to determine the differences between or changes that are made to two separate Portal servers.

!!!note
    The following instructions describe the building of a release in installations, which do not use virtual portals. For instructions for staging virtual portals, refer to the topic about Building a Release for virtual portal installations.

1.  Complete the following steps to export the staging server configuration REV1:

    !!!note "Remember"
        Export the entire portal configuration REV1 of the staging server; do not include users, users' access control, or any other user configurations.

    1.  On the staging server change to the wp_profile_root/PortalServer/bin directory. This directory contains the portal tools.

    2.  Use the XML configuration interface to export the staging server REV1 configuration. A sample file is available, ExportRelease.xml.

        -   AIX® and Linux™: `./xmlaccess.sh -in ExportRelease.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://stagingserver.example.com:port/wps/config" -out stagingserverREV1_config.xml`
        -   Windows™: xmlaccess.bat -in ExportRelease.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://stagingserver.example.com:port/wps/config" -out stagingserverREV1_config.xml

        The exported configuration is stored in the `stagingserverREV1_config.xml` file.

2.  Develop and test new functions and portlets on the staging server. This phase is where you add or delete functions. This phase can last for a long time. Ensure that the staging server is fully tested and the portal is ready.

3.  Complete the following steps to export the staging server configuration REV2:

    !!!note "Remember"
        Export the entire portal configuration REV2 of the staging server; do not include users, users' access control, or any other user configurations.

    1.  On the staging server change to the wp_profile_root/PortalServer/bin directory. This directory contains the portal tools.

    2.  Run the following task to export the staging server configuration REV2:

        !!!note
            Use the XML configuration interface and the provided sample file that is called [ExportRelease.xml](../../portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md).

        -   AIX and Linux: `./xmlaccess.sh -in ExportRelease.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://stagingserver.example.com:port/wps/config" -out stagingserverREV2_config.xml`
        -   Windows: `xmlaccess.bat -in ExportRelease.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://stagingserver.example.com:port/wps/config" -out stagingserverREV2_config.xml`

        The exported configuration is stored in the `stagingserverREV2_config.xml` file.

4.  If you installed extra portlets or applications, copy the necessary WAR files from the staging server to the wp_profile_root]/PortalServer/deployed/archive installation directory on the production server.

    !!!note
        The deployed/archive directory is always in the original wp_profile_root installation path, even if the production server is using an extra profile that is created after installation.

    !!!note
        As Windows limits the maximum path length to 260 characters, the name of the WAR file must be 25 characters or less. Installing a WAR file with a name that is more than 25 characters results in an error.

5.  Complete the following steps to generate the differences between staging server configurations REV1 and REV2:

    !!!note
        Complete these steps on the staging server and not on the production server. Computing a release difference produces a high load on the system and uses much memory for large releases. Therefore, do not complete them on the production system.

    1.  Stop the portal server on the staging system.

        This option frees resources for computing the release difference.

    2.  On the server where you just stopped the portal server, change to the wp_profile_root/PortalServer/bin directory.

    3.  To generate the differences file containing the additions and deletions configuration file, enter one of the following commands:

        |Operating system|Command|
        |----------------|-------|
        |AIX and Linux |`./releasebuilder.sh -inOld stagingserverREV1_config.xml -inNew stagingserverREV2_config.xml -out outputfile.xml`|
        |Windows:|releasebuilder.bat -inOld stagingserverREV1\_config.xml -inNew stagingserverREV2\_config.xml -out outputfile.xml|

        The resulting output configuration file contains the additions and deletions to be imported onto your production server.

    4.  Restart the portal server on the staging system, if you stopped it before.

6.  Use the `outputfile.xml`, which contains the differences between REV1 and REV2 portal server to import these differences onto the production server.

    |Operating system|Command|
    |----------------|-------|
    |AIX and Linux|`./xmlaccess.sh -in outputfile.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://productionserver.example.com:port/wps/config"`|
    |Windows:|xmlaccess.bat -in outputfile.xml -user wpsadmin_user_ID -password wpsadmin_pwd -url "http://productionserver.example.com:port/wps/config"|

    !!!note "Notes"
            1.  If portlet parameters are deleted from a configuration, the output script that is generated by ReleaseBuilder does not remove those parameters on the target system.
            2.  XML files that are generated by ReleaseBuilder do not have any transaction levels set. To set a transaction level, edit the XML file that is generated by ReleaseBuilder and add the transaction level to the XML file.


