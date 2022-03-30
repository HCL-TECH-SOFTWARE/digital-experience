# Component level sdd.xml file overview

For most installation scenarios, generation of the component level sdd.xml file is automated. However, there are still occasions where it might be necessary to create it manually. The component level sdd.xml file contains the information on how to install the artifacts of the component. It lists the extension points that need to be processed. The extension points ensure that the resources can be installed and configured on the server. Ant tasks complete the deployment and configuration work.

## Sample sdd.xml file

```
<iudd:iudd
	xmlns:iudd="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:OSRT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/OS/resourcetypes"
	xmlns:OSAT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/OS/artifacttypes"
	xmlns:J2EERT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/J2EE/resourcetypes"
	xsi:schemaLocation="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD 

../iudd/iudd.xsd"
	schemaVersion="2.0.0" buildID="112220" buildDate="2006-01-19T12:00:00">
 
	<packageIdentity contentType="Component">
		<name>components/componentN</name>
		<version>8.0.0.0</version>
		<displayName key="d0001" default="components/componentN" />
		<manufacturer>
			<displayName key="AC_01" default="IBM" />
		</manufacturer>
	</packageIdentity>
 
	<topology>
		<resource type="OSRT:OperatingSystem" id="OS" />
	</topology>
 
	<content xsi:type="iudd:RootIUContent">
		<rootIU id="components/componentN">
			<variables>
				<parameters>
					<parameter name="installLocation" 

defaultValue="/usr/dummy.offr.1" />
			<parameter name="FunctionalArea" defaultValue="featurepackSI" />
				</parameters>
			</variables>
 
			<SCU id="deploy-portlets-applySIFeaturePack" targetRef="OS">
				<identity>
					<name>Do Configuration Task</name>
					<version>8.0.0.0</version>
					<displayName key="keyInBundle"
						default="Executes Configuration for this component" />
					<description key="keyInBundle"
						default="This section runs configuration for this component" />
				</identity>
				<unit>
					<configArtifact type="ConfigEngine">
						<parameters>
							<parameter name="targetName" value="deploy-portlets-applySIFeaturePack" />
						</parameters>
					</configArtifact>
				</unit>
			</SCU>
			<SCU id="remove-portlets-applySIFeaturePack" targetRef="OS">
				<identity>
					<name>Do Configuration Task</name>
					<version>1.0.0.0</version>
					<displayName key="keyInBundle"
						default="Executes Configuration for this component" />
					<description key="keyInBundle"
						default="This section runs configuration for this component" />
				</identity>
				<unit>
					<configArtifact type="ConfigEngine">
						<parameters>
							<parameter name="targetName" value="remove-portlets-applySIFeaturePack" />
						</parameters>
					</configArtifact>
				</unit>
			</SCU>
		</rootIU>
	</content>
 
</iudd:iudd>
```

See [The component level sdd.xml file](si_component_sdd.md) for information about editing the sdd.xml file.

## Syntax information for component names

The syntax for naming the component is important. There are dependencies within the PAA file that determine part of the component name that is registered in the sdd.xml file. You are free to name your components as you like; however, the component names must be unique. The ConfigEngine and by extension Solution Installer impose a restriction that a component name not clash with an existing component in the ConfigEngine registry. This restriction is not limited to an assembly, but is registry wide. Therefore, if a component has the same name as an existing component, it is not automatically installed. If the user wants to install this new component, they can use the update-paa-components task. This task removes the existing version and installs the new component as part of the new assembly.

When you register the names in the sdd.xml files, you must adhere to the following syntax: components/componentName. This syntax is necessary for the Solution Installer to resolve the component name. It must contain the full path from the directory that contains the assembly level sdd.xml file, usually the root directory, to the component level sdd.xml file.

Looking at the [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/paa-samples/sample1.paa file, it contains one component in the components directory called 'Sample1'. Therefore, The component name would appear in the sdd.xml file as follows: components/Sample1. It is the full path relative to the directory that contains the assembly level sdd.xml file.

The Solution Installer follows the feature pack approach that is provided by the ConfigEngine to install the individual components. The advantage of this approach is that the ConfigEngine manages the installation order of the individual components. Using the feature pack approach ensures a distinction between portal core extension points and those points that are used to install the PAA content. This approach reduces the risk of a user accidentally removing portal core components when you run a remove extension point.

The ConfigEngine runs the installation of the set of components by extension point and controls the order in which they are run. For example, all EAR files are installed together; all portlet deployments are done at the same time. If there is a need to have an artifact of a component that is installed before another, then you need to create a dependency in the sdd.xml file. The dependency works on an extension point basis in that you can specify that artifacts covered by that extension point can have an order. For example, you can specify that the EAR file in component1 is installed before the EAR file in component2.

**Note:** The value of the FunctionalArea parameter is set to featurepackSI. This value is important so the Solution Installer can determine that the components are to be installed with the Solution Installer specific feature pack. See the sdd.xml file example at the beginning of this file for how to implement the feature pack approach.

In the sample sdd.xml file, there are two `SCU` elements. The first one shows how to register the extension point to deploy a portlet and the second one demonstrates how to remove the portlets.

```
<SCU id="deploy-portlets-applySIFeaturePack" targetRef="OS">
	<identity>
	<name>Do Configuration Task</name>
	<version>1.0.0.0</version>
		<displayName key="keyInBundle" default="Executes Configuration for this component" />
		<description key="keyInBundle" default="This section runs configuration for this
			component" />
	</identity>
	<unit>
	<configArtifact type="ConfigEngine">
	<parameters>
		<parameter name="targetName" value="deploy-portlets-applySIFeaturePack" />
		</parameters>
		</configArtifact>
	</unit>
		<register a dependency on a previous component-->
		<requirements>
			<requirement name=" deploy-portlets-applySIFeaturePack">
			<alternative name="dependentComponent"/>
		</requirement>
		</requirements>
</SCU>
```

The `SCU` element example notifies the Solution Installer about the task you want to run. The extension point in this case is called deploy-portlets-applySIFeaturePack. It deviates from the core extension points for portal by adding applySIFeaturePack’ to the end of the extension point. With an uninstall task, ‘removeSIFeaturePack’ is appended instead. It allows the Solution Installer to distinguish between installation and uninstall tasks. Append these strings to the extension point names to create a definite distinction between core extension points and those points included for the Solution Installer to handle a PAA distribution. The Solution Installer expects and runs only extension points that conform to this format.

To provide an implementation task for an extension point, read [Installation tasks](si_paa_spec_inst.md) for information.

**Parent topic:**[The sdd.xml file](../config/si_paa_spec_sdd.md)

