# The component level sdd.xml file

When you run the install-paa task, the Solution Installer examines each component to verify whether an sdd.xml file is included for that component. If an sdd.xml file is not found, one is generated with the information gathered from the directory parsing step.

The type of data that is gathered from the components directory structure includes information on the different resource types. For example, the list of resources that are included in the individual sub-directories and any custom extension point implementation tasks. It also uses the name of the directory when it generates the component name. After it gathers the information, it can generate the sdd.xml file. The file includes the information on the extension points for registration with the Solution Installer or ConfigEngine. The Solution Installer can add any information about extension points whether auto-generated or custom implementations to the sdd.xml file. There is no longer a need to manually register any custom tasks with `<SCU>` elements.

The ability to automatically generate dependencies between components was added. Include an order.properties file in the /components directory of the Portal Application Archive \(PAA\) file. Read *Order of installation of scripts and artifacts* for more information.

For most situations, the SDD automation is enough to allow the PAA files to be deployed successfully. However, there are still some situations where the developer needs to overwrite the function of the sdd.xml file. One example might be in the ordering of components where the order.properties file does not meet the requirements for the PAA file. For example, a component contains extension points that have dependencies on 2 or more different components.

This information outlines the different pieces of the component level sdd.xml file in terms of their use. In addition, steps on how to create your own custom sdd.xml file and where to include relevant information on the component for successful deployment are also covered.

**Note:** If you are providing a component level sdd.xml file, you do not need to provide information for all the resources included in the PAA file. Provide information only where you are overwriting the function of the Solution Installer.

The following is an example component level sdd.xml file:

```
<?xml version="1.0" encoding="UTF-8"?>

<iudd:iudd
	xmlns:iudd="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:OSRT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/OS/resourcetypes"
	xmlns:OSAT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/OS/artifacttypes"
	xmlns:J2EERT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/J2EE/resourcetypes"
	xsi:schemaLocation="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD ../iudd/iudd.xsd"
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
					<parameter name="installLocation" defaultValue="/usr/dummy.offr.1" />
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
				<unit>ts-applySIFeaturePack" />
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

Inside the root `<iudd:iudd>` element the following important subelements are required for installation by the Solution Installer:

-   **The `<packageIdentity>` element**

    The first element is the `<packageIdentity>` element; for example:

    ```
    <packageIdentity contentType="Component">
    		<name>components/componentN</name>
    		<version>8.5.0.0</version>
    		<displayName key="d0001" default="components/componentN" />
    		<manufacturer>
    			<displayName key="AC_01" default="IBM" />
    		</manufacturer>
    	</packageIdentity>
    ```

    The `<packageIdentity>` element informs Solution Installer and the ConfigEngine of the type of application to be installed. In this case, the contentType attribute equals "component". A component is the lowest level of granularity that is used by the ConfigEngine and thus Solution Installer for grouping application resources. One or more components are grouped in an assembly. This grouping is the next level of granularity for grouping resources that are recognized by the ConfigEngine or the Solution Installer. Each PAA file is considered by Solution Installer as an assembly, even though it might contain only one component. With the PAA file, a component must have a higher-level assembly that is associated with it. Read *The assembly level sdd.xml file* for information.

    If you look at the `<packageIdentity>` element, a number of the subelements provide information on the content that is being installed. The `<name>` and `<version>` element need to be altered to suit the application that is being installed. The `<displayName>` element can also be edited to include the component name but is not required.

    The `<name>` element must equal the path of the component relative to the assembly level sdd.xml file. For example, as the PAA file puts all components in the components directory, a component name needs to also include the components/. For example, a component that is called ‘componentN’ would have a component name of ‘components/componentN’.

-   **The `<topology>` element**

    The next sub element is the `<topology>` element. This element does not require any alterations. For example:

    ```
    <topology>
    		<resource type="OSRT:OperatingSystem" id="OS" />
    	</topology>
    ```

-   **The `<content>` element**

    The final element block is the `<content>` element. This element provides the Solution Installer and the ConfigEngine with the information on what is being installed and on which servers the package can be installed on. The `<rootIU>` element is where the actual information is included. Set the id attribute of the `<rootIU>` element to the name of the component as used in the `<name>` element of the `<packageIdentity>` element. For example:

    ```
    <content xsi:type="iudd:RootIUContent">
    		<rootIU id="components/componentN">
    			<variables>
    				<parameters>
    					<parameter name="installLocation" defaultValue="/usr/dummy.offr.1" />
    				</parameters>
    			</variables>
    
    			<SCU id="deploy-portlets-applySIFeaturePack" targetRef="OS">
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
    							<parameter name="targetName" value="deploy-portlets-applySIFeaturePack" />
    						</parameters>
    					</configArtifact>
    				</unit>
    			</SCU>
    		</rootIU>
    	</content>
    ```

    The ConfigEngine requires the `<variables>` element for processing the content. You do not need to edit this code section. Include it in the component level sdd.xml file per the previous example.


The `<SCU>` element is the element of the file that is of most relevant to adding custom code to your PAA file. Each `<SCU>` element represents a ConfigEngine extension point. These extension points govern how and when resources are installed or uninstalled on the server during the deploy-paa task. Each extension point has an equivalent implementation task that needs to be added to an XML file in the components/componentN/config/includes directory. Read *ConfigEngine extension points for the Solution Installer* for a list of exported extensions and how they map to directories. For details on extension points and how they are used, read *Component level sdd.xml file overview*.

The Solution Installer automatically adds the correct `<SCU>` element to the sdd.xml file after it detects an extension point implementation task. The Solution Installer first examines the components/componentName/config/includes directory for xml files that contain any custom Ant tasks. Any tasks that meet the extension point implementation criteria are then registered in the sdd.xml file where an existing `<SCU>` element for the extension point does not exist. However, you can register the `<SCU>` elements manually, especially where you need to set dependencies between multiple components on different extension points.

In the previous example, there are two places to changes. The first place is the id attribute of the `<SCU>` element. Set the ID to the name of the required extension point with applySIFeaturePack appended to the end. For example: deploy-apps-applySIFeaturePack. The second to change is the nested `<parameter>` element. Set the value attribute of this element to the extension point string. For example, set it to deploy-apps-applySIFeaturePack.

For each extension point, a separate `<SCU>` element is required by the Solution Installer or ConfigEngine. Therefore, an extra `<SCU>` element is required to provide an equivalent remove-apps-removeSIFeaturePack extension.

A second and rather important role is assigned to the `<SCU>` element. These elements also influence the order in which components are installed. You might have a PAA file with two components, where the second component is installed before the first component. A mechanism is necessary to ensure that the correct order is imposed on the deployment. This action can be done by adding a `<requirements>` element to the `<SCU>` element as shown in the following example:

```
<SCU id="deploy-portlets-applySIFeaturePack" targetRef="OS">
  <identity>
    <name>Do Configuration Task</name>
    <version>1.0.0.0</version>
    <displayName key="keyInBundle" default="Executes Configuration for this component" />
    <description key="keyInBundle" default="This section runs configuration for this component" />
  </identity>
  <unit>
    <configArtifact type="ConfigEngine">
      <parameters>
        <parameter name="targetName" value="deploy-portlets-applySIFeaturePack" />
      </parameters>
    </configArtifact>
  </unit>
<!—register a dependency on a previous component-->
<requirements>
<requirement name=" deploy-portlets-applySIFeaturePack">
<alternative name="dependentComponent"/>
</requirement>
</requirements>
</SCU>
```

The `<requirements>` element can contain one or more `<requirement>` elements, each one representing a component on which the current component depends on being previously installed. The name attribute of the `<requirement>` element can be set to whatever value the developer chooses. The name attribute of the `<alternative>` element must equal the full name of the component on which the current extension point depends. The dependency link is between extension points. If you add the `<requirements>` element to the `<SCU>` element for the deploy-apps-applySIFeaturePack, register an equivalent deploy-apps-applySIFeaturePack extension point for the dependent component.

Not all extension points allow for a component dependency to be set. The extension points that are called as part of the deploy-apps-applySIFeaturePack, such as install-content-xmlaccess, apply the `<requirements>` element to the deploy-apps-applySIFeaturePack extension point. Read *ConfigEngine extension points for the Solution Installer* for the full list of extension points that are supported by the Solution Installer and whether they can handle component dependencies.


