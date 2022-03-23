# Integrating with HCL Sametime 

Configuring the Sametime Community Server and Sametime portlets requires a set of tasks performed on both the Sametime Community Server and the portal server.

**Important:** Configuring a Sametime Community Server with secure socket layers \(SSL\) is not recommended when using a multiplexer server to manage traffic on the Sametime Community Server. If you configure SSL on the multiplexer, HCL Portal will no longer be able to communicate through the multiplexer.

This topic lists the required procedures for configuring the Sametime Web 2.0 Contact List portlet to work with both the Sametime Community Server and the portal server:

Unless otherwise noted, all the procedures are required for all portlets.

1.  [HCL Sametime server installation reference ](../collab/i_domi_r_sv_st_install.md)  
View a roadmap to instructions for installing an HCL Sametime server.
2.  [Configuring HCL Sametime Proxy ](../collab/cfg_st_single_ldap.md)  
If HCL Digital Experience and HCL Sametime are both authenticating with the same LDAP server, SSO configuration is simple.
3.  [People awareness ](../collab/i_coll_c_people_aw.md)  
People awareness makes people's names appear as hyperlinks that users can click to display information about the individual and gain access to actions for contacting and working with him or her. If the administrator has configured an HCL Sametime server to work with HCL Digital Experience, users can see each other's online presence in their person links according to the status options they have set in their Sametime client \(for example, whether the person is active, away, offline, or does not want to be disturbed\). The person's online status appears only if Sametime is enabled.

**Parent topic:**[Integrate with collaboration software](../collab/cfg_collab_intro.md)

**Related information**  


[Using Sametime with the HCL Portal 8.5 theme ](../dev-theme/themeopt_cust_sametime.md)

