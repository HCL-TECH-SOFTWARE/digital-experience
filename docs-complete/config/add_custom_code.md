# Add custom code to a Portal Application Archive \(PAA\) file

Solution developers can create applications that use resource types that the Solution Installer does not automatically generate. The Solution Installer handles many resource types. However, there are some resource types that have no mechanism for accurate installation procedures. Your application might require additional configuration settings for installation. Those applications require custom code for the installation.

## Where to place custom code in the Portal Application Archive \(PAA\) file

An example of a PAA file is located in the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/paa-samples/sample1.paa directory. This example contains a sample component file: sample1/components/sample1. The sample component file contains the config/include and config/templates directories. Custom code and Solution Installer generated code are stored in these two directories. The config/templates directory should contain any additional scripts that are required for installation. An example of an additional script is one that configures a .war file. The config/include directory should contain any custom ANT task. Any scripts in the config/include directory are picked up at run time.

## How to name custom code files

There are no restrictions on how to name files containing custom code. The Solution Installer adds automatically generated code to the file. It uses the portion of the component name following the / combined with the string \_cfg.xml. Using the sample\_paa/components/componentN component example, the component name is components/componentN. Therefore, the file is called componentN\_cfg.xml.

For WAR file installations from the installableApps/portlets directory, install and uninstall XML access scripts are generated with file names using the following strings:

-   -portlets-install.xml
-   -portlets-uninstall.xml
-   -portletDataGen.xml

For example, if you have a WAR file called MyWar.war, the following files are created:

-   MyWar.war-portlets-install.xml
-   MyWar.war-portlets-uninstall.xml
-   MyWar.war-portletDataGen.xml

You should name your files that contain custom ANT tasks so you avoid situations where the Solution Installer overwrites it.

## Component level sdd.xml file

The component level sdd.xml file is located in the component directory. Using the sample\_paa/components/componentN example, the sdd.xml file is located in the componentN directory. The sdd.xml file is only required if you have custom code; otherwise, the Solution Installer generates it.

Add an <scu\> element to your component level sdd.xml file to register your code with the ConfigEngine.

## Sample custom code

The following sample code uses the <scu\> element for the extension point create-ear. The code tells the Solution Installer to overwrite the create-ear functionality. The full name of the extension is create-ear-applySIFeaturePack. The create-ear part tells the ConfigEngine what type of installation functionality is used to group the tasks to run. The -applySIFeaturePack part allows the Solution Installer to invoke functionality of the ConfigEngine for components that conform to this naming scheme. Hence it reduces the likelihood that other components, for example core portal components, from being removed during uninstallation.

```
<SCU id="create-ear-applySIFeaturePack" targetRef="OS">
	<identity>
		<name>create-ear-applySIFeaturePack</name>
		<version>1.0.0</version>
		<displayName key="deploy-apps-applySIFeaturePack" default="Executes
			Configuration for this component" />
		<description key="deploy-apps-applySIFeaturePack" default="Executes
			Configuration for this component" />
	</identity>
	<unit>
		<configArtifact type="ConfigEngine">
		<parameters>
		<parameter name="targetName" value="create-ear-applySIFeaturePack" />
		</parameters>
		</configArtifact>
	</unit>
</SCU>
```

After registering the extension point with the sdd.xml file, an implementation task must be created to overwrite the default functionality. The task should reside in the config/includes directory of the component. There is a specific naming convention required for the task so that it is directly associated with the <scu\> element in the sdd.xml file. Use the following naming convention:

```
'action;' + extension point name = '-' = componentname	
```

For example: action-create-ear-applySIFeaturePack-components/componentN.

**Tip:** Use the full path of the component as the component name.

**Parent topic:**[Developing advanced PAA file applications ](../config/dev_sol_app_adv.md)

