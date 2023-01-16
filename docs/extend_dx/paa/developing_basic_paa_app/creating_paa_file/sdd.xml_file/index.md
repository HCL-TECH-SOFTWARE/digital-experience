# The sdd.xml file

The sdd.xml files perform a number of different roles in the PAA file structure. They allow the developer to control, with ConfigEngine extension points, how an application is installed. They also inform the ConfigEngine of the type of installation to be processed. It also determines, in terms of the ConfigEngine, where the deployable files are stored after registration with the ConfigEngine.

The ConfigEngine takes a granular approach to the installation and deployment of an application. The sdd.xml file controls the granularity to the ConfigEngine. There are three different levels of installation:

-   Offering level: Large applications such as HCL Portal are offering level deployments.
-   Assembly level: An assembly is usually a group of applications that can be stand-alone or form the basis of a much larger application. An example of an assembly is the ap or base directories under HCL Portal.
-   Component level: The component level is the finest level of granularity. A component can be an application or can be one of many small applications that make up a much larger application.

An assembly is made up of one or more components and an offering is made up of one or more assemblies.

The Solution Installer includes all the PAA files in a higher-level PAA offering. The directory structure for the Solution Installer and any offering setup details that are applied to the ConfigEngine are processed automatically. It is easier to manage the installation of the different components when they are installed under one hierarchy.

Each PAA file is treated as a separate assembly. The top-level sdd.xml contains installation information for the ConfigEngine relating to the assembly and its components. A PAA file that contains an update has the same assembly name in its sdd.xml file. The Solution Installer checks that the assembly exists before it adds each new component or update to the current assembly.

The assembly can be made up of one or more components, each requiring a component level sdd.xml file that can be automatically generated. The number of components depends on how the developer structures the application to be installed. Every artifact can potentially be included in a single component, although it might not be the most practical approach. However, you might want to separate larger applications into multiple components that contain related artifacts to facilitate reuse. Because a component might be required by multiple PAA distributions, this approach allows it to be reused with little extra work for the developer.

-   **[The assembly level sdd.xml file](si_assemble_sdd.md)**  
When you create a Portal Application Archive \(PAA\) file, it might be necessary to add an assembly level sdd.xml file. This file registers the PAA content with the ConfigEngine.
-   **[Component level sdd.xml file overview](si_paa_spec_comp.md)**  
For most installation scenarios, generation of the component level sdd.xml file is automated. However, there are still occasions where it might be necessary to create it manually. The component level sdd.xml file contains the information on how to install the artifacts of the component. It lists the extension points that need to be processed. The extension points ensure that the resources can be installed and configured on the server. Ant tasks complete the deployment and configuration work.


