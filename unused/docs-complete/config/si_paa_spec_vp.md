# Virtual portals in the PAA file

There are many situations where a user might want to install the applications that are contained in a Portal Application Archive \(PAA\) file directly to a virtual portal.

No additional configuration steps are needed when you create the PAA file. The Solution Installer takes advantage of the virtual portal-related properties that are available in the wkplc.properties file when it connects to the portal server. The Solution Installer checks the value of the VirtualPortalHostName and VirtualPortalContext properties. If one or more of these properties are set, then their values are used when it creates a connection. However, if neither of these properties are set, it is assumed that the PAA file content is installed to the base HCL Portal. These properties can be set in the wkplc.properties file or included on the command line with a prefix of -D when you run the deployment. For example, -DVirtualPortalContext=testVP. In addition, when you remove resources from a virtual portal, these properties must also be set.

**Note:** The properties and parameters must be set before you run the installer to deploy the PAA application. There is no facility to install individual components of the PAA file to different virtual portals during a single run of the deploy-paa task. Therefore, run the deployment for the specific components that are required for each virtual portal separately. All components that are listed for deployment are installed to the same location.

If you deploy a PAA file to more than one Virtual Portal, some components are not deployed on the other Virtual Portals. Therefore, items such as Libraries are not created on the second Virtual Portal. Choose one of the following options to deploy a PAA file:

-   Open the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/paa/paaName/components.properties file. Set the components that you want to deploy to true. Then, run the deploy-paa task.
-   Run the deploy-paa task with the -DforceDeploy=true option. This parameter tells the Solution Installer to ignore the components.properties file.

**Parent topic:**[Create a Portal Application Archive \(PAA\) file](../config/si_paa_spec.md)

