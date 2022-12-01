# Create a Portal Application Archive \(PAA\) file

Use the Portal Application Archive \(PAA\) file format to install applications with the Solution Installer. The PAA file is a customized compressed file that contains an application. This application is installed on HCL Digital Experience with the ConfigEngine.

Many steps might be required to install and configure the individual resources of an application to HCL Digital Experience. This fact is especially true when you deploy applications with many resource types. The Solution Installer automates many of these deployment tasks. The Solution Installer uses resources that are contained in a Portal Application Archive \(PAA\) file. The PAA file is a ZIP compression file that has a specific directory structure. The PAA format informs Solution Installer how to install the application and provides the installable artifacts.

Currently, the Solution Installer focus is on installing applications to HCL Portal. Potentially in the future, IBM® WebSphere® Application Server solutions might be supported. The Solution Installer relies on the ConfigEngine, which is not specific to HCL Portal.

The PAA format can be employed to handle deployments that range from applications with only a few configuration steps to large-scale enterprise portal solutions. The directory structure of the PAA file is important to Solution Installer when you determine how to install a specific artifact, for example, how to handle shared library files. In addition, the software definition descriptor \(sdd.xml\) files also play a significant role in determining the installation steps. All required extension points for installation must be specified in an sdd.xml file local to the component. The component level sdd.xml file can now be generated automatically during the installation phase.

The PAA format can reduce the work that is required to create a deployable solution. Many deployment tasks can use a default configuration that is found in the Solution Installer. For complex applications, extra work is required to provide custom installation features. Using the PAA format with the Solution Installer reduces the production time for creating a deployable solution for your application.

A number of sample files that demonstrate the overall structure and usage of the PAA file format are included in the [PortalServer\_root](../../../../guide_me/wpsdirstr.md)/doc/paa-samples directory. These examples act as reference material for the remainder of the file specification documentation.

-   **[PAA file structure overview](../creating_paa_file/paa_file_structure/index.md)**  
Each PAA file is a structured ZIP compression file. Because the Solution installer uses Ant tasks to expand or parse the PAA file, it needs to be a ZIP compression file that can be decoded by the java.util.zip class.
-   **[Installation tasks](si_paa_spec_inst.md)**  
Solution installer supports the auto generation of deployment tasks for specific resource types. The creation of these tasks occurs during the installation or registration phase for the PAA file with the Solution Installer and the ConfigEngine.
-   **[Order of installation of scripts and artifacts](si_paa_spec_order.md)**  
Often the order that scripts are run or artifacts that are deployed is important for the success of the installation. This information is both true for artifacts or scripts in a single component and the order in which scripts contained in multiple components are installed.
-   **[The sdd.xml file](../creating_paa_file/sdd.xml_file/index.md)**  
The sdd.xml files perform a number of different roles in the PAA file structure. They allow the developer to control, with ConfigEngine extension points, how an application is installed. They also inform the ConfigEngine of the type of installation to be processed. It also determines, in terms of the ConfigEngine, where the deployable files are stored after registration with the ConfigEngine.
-   **[Property files](si_paa_spec_prop.md)**  
Two different types of properties are contained within a PAA distribution. They can be classified as being either user editable that is requiring user input, for example a database URL, or as developer-provided settings required for a component to function. However, for user convenience, a separation between user properties from those settings that are supplied by the developer is advised.
-   **[Database properties for the Solution Installer](dbprops_si.md)**  
Some Portal Application Archive \(PAA\) files require access to an external database. The database properties are stored in either the assemblyName.properties file for the assembly or in the componentName.properties file of the component requiring database support.
-   **[Virtual portals in the PAA file](si_paa_spec_vp.md)**  
There are many situations where a user might want to install the applications that are contained in a Portal Application Archive \(PAA\) file directly to a virtual portal.


