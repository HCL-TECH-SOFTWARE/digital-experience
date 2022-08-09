# HCL Portal

First, finish your HCL Digital Experience deployment with the Configuration Wizard. Then, you can configure your environment further. For example, you can tune your servers to improve performance. You can change the default context root.

-   **[Configuring portal behavior](../admin-system/adptlcfg.md)**  
Configure various options related to your portal.
-   **[Changing ports](../config/port_chg.md)**  
You can change the HCL Digital Experience ports values after installation if there are port conflicts with other cells on the system.
-   **[Changing your site URL](../config/cfg_inst_overview.md)**  
You can change your site URL during and after installation to create URLs that are more reflective of your site and easier to remember. If you entered a different value for the context root during installation, there are additional steps that must be performed to implement the new context root value in your site URL. If you decide to change your site URL after installation, you can use the Configuration Wizard to remove the context root and default home values \(/wps/portal\) from your site URL or to change these values. You can also use the Configuration Wizard to remove or add navigational state information to your URL.
-   **[Changing the portal URI after an installation](../config/cfg_intr.md)**  
You can change the default portal Uniform Resource Identifier \(URI\) any time after you install HCL Digital Experience. Some applications have a fixed context root that cannot be changed.
-   **[Configuring managed pages](../wcm/wcm_config_mngpages.md)**  
When you create a new installation of HCL Digital Experience 8.5, managed pages are enabled by default. However, you can also manually disable and enable the feature as needed.
-   **[Create an HCL Portal profile](../config/cw_create_profile.md)**  
During the installation process, the IBM Installation Manager creates the HCL Portal profile. If you are on HCL Portal Version 8.5 without a Combined Cumulative Fix applied, then you can use this option in the Configuration Wizard to create an additional profile.
-   **[Remove an HCL Portal profile](../config/cw_remove_profile.md)**  
Use the Configuration Wizard to remove a portal profile.
-   **[Managing your HCL Portal environment](../install/iim_manage_wp.md)**  
After you install HCL Digital Experience, you can use the IBM Installation Manager function to manage your environment. The Installation Manager function consists of updating and modifying the environment. You can also uninstall or roll back the modifications you made to your environment.
-   **[Setting up and maintaining a portal farm](../install/portal_farm.md)**  
The term "farm" refers to a series of identically configured, stand-alone server instances. The stand-alone servers allow the farm to be increased or decreased without having to worry about complex cluster configurations or inter-server awareness. Server farms offer a simple way to build and maintain a highly scalable, highly available server environment. Creating the farm requires an established content subscriber, two or more installed instances of HCL Digital Experience, and a configured web server for load balancing. The farm documentation covers only the HTTP server plug-in. However, you can use any supported web server.
-   **[Configuring the IBM License Metric Tool](../config/itlm.md)**  
IBM License Metric Tool monitors license compliance. It recognizes and monitors what product offerings and their versions, releases, and fix packs are installed and used on the system. It measures the processor value units \(PVU\) available to and used by these assets. The tool ensures compliance with IBM® subcapacity licensing requirements and to demonstrate good IT governance. Information about installed software is collected from monitored computers by an agent that can be deployed on a range of operating systems. It is stored on a central server in a DB2® database and can be accessed through pre-configured reports that are available from a web user interface.
-   **[Upgrading your existing product offering](../install/inst_upsell.md)**  
After your initial HCL Digital Experience installation, you can purchase a license for an upgraded product offering.

**Parent topic:**[Configuring](../config/configuring_parent2.md)

