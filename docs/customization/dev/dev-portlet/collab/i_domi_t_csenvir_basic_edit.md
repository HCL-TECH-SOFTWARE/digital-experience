# Editing the CSEnvironment.properties file

To modify any Lotus Collaborative Services environment properties, you must stop the portal server, locate the file in a location specific to your platform, back up the file before editing it, use a text editor to open and modify it, and then restart the server.

1.  Stop the HCL Portal server.

2.  Open the CSEnvironment.properties file in a text editor. The file is located in the following directory:

    -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\PortalServer\\config\\config
    -   AIX®SolarisLinux™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config
    -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config
    -   z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config
3.  Before making any changes, make a back up copy of the CSEnvironment.properties file.

4.  Edit the CSEnvironment.properties file to include the appropriate values.

5.  Remove the comment tag \(\#\) from the beginning of each edited line.

6.  Save the changes.

7.  Start the HCL Portal server.


**Parent topic:**[Collaborative Services environment properties](../collab/i_domi_c_csenvironment_props_intro.md)

**Related information**  


[Mapping VMM attributes to LDAP user attributes](../collab/i_domi_t_sv_domldap_mapvmm.md)

