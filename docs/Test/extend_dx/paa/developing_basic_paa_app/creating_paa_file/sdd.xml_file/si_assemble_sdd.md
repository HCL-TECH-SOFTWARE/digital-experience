# The assembly level sdd.xml file

When you create a Portal Application Archive \(PAA\) file, it might be necessary to add an assembly level sdd.xml file. This file registers the PAA content with the ConfigEngine.

The information in the sdd.xml file informs the Solution Installer about the name and type of the application to install. It also includes information about the versions of HCL Digital Experience to which installation of the PAA content is compatible. In addition, the sdd.xml tells Solution Installer the names and locations of the components to be installed. The different elements of the assembly level sdd.xml file are described in terms of how they are required for the Solution Installer. You can edit a sample sdd.xml file with the required information to ensure that the sdd.xml file is complete and accurate.

Starting with Version 8.5, a basic version of the assembly level sdd.xml file can be automatically generated. Solution installer uses the name of the root directory in the PAA file as the assembly name and can add any components that are found in the /components/ directory. Each component is added based on the names of the sub-directories that are found in the /components directory. Each components/ sub-directory is recognized as a separate component. However, there might be cases where a developer does not want to have a component included in the assembly level sdd.xml file. For example, an extra component that contains files that should not be deployed is included. Then, the developer might need a mechanism to restrict the list of components. You can place a limitation on the components that you want to include. Create an order.properties file in the components directory. Populate it with a comma-separated list of the components in the order in which they should be installed. If there is a components/order.properties file, the Solution Installer restricts the list of components added to the sdd.xml file to only those components that are listed in the order.properties file. This order has other meanings for automatically creating dependencies between the components so it is important to ensure that the components can be successfully installed following this order. See the section 'Order of installation of scripts and artifacts' for more details on how the ordering of artifacts is handled. The mechanism in which the dependencies are created is described in *The component level sdd.xml file* section in the advanced development documentation.

Although the assembly level sdd.xml file can be auto-generated, there are many circumstances where this option is not a viable solution. For example, there are restrictions on server versions on which the PAA file can be installed. It is necessary to include a `<ServerVersionDependencies>` element to illustrate the versions. This information is not handled automatically by the Solution Installer so you must generate the file manually. If you added a /components/order.properties file and do not want to limit the list to only those components in the order.properties file, add the additional `<containedPackage>` elements for each component to the file.

!!! note 
	In the PortalServer\_root/doc/paa-samples directory, some sample files illustrate the PAA directory structure. You can use the assembly level sdd.xml file of the sample1.paa file as an example. This file can be used as a starting point for developers to create their own working sdd.xml files. This sample PAA file is an installable application. It can be registered with the ConfigEngine. However, it is not a working PAA file because there are no installable resources. The structure is provided so that a developer can use it to create their own PAA files.

The following is an example of an assembly level sdd.xml file:

```
<?xml version="1.0" encoding="UTF-8"?>
 
h<iudd:iudd
	xmlns:iudd="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD"
	xmlns:iurtype="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/IU/resourcetypes"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:OSRT="http://www.ibm.com/xmlns/prod/autonomic/resourcemodel/OS/resourcetypes"
	xsi:schemaLocation="http://www.ibm.com/xmlns/prod/autonomic/solutioninstall/IUDD ../iudd/iudd.xsd "
	schemaVersion="2.0.0" buildID="MySoln-IUDD-1.0" buildDate="2006-01-19T12:00:00">
 
	<packageIdentity contentType="Assembly">
		<name>sample_paa</name>
		<version>8.5.0.0</version>
		<displayName key="d0001" default="sample_paa" />
		<manufacturer>
			<displayName key="DU_01" default="IBM" />
		</manufacturer>
	</packageIdentity>
 
	<topology>
		<resource type="OSRT:OperatingSystem" id="OS" />
	</topology>
 
	<content xsi:type="iudd:RootIUContent">
		<rootIU id="sample_paa" targetRef="OS">
			<identity>
				<name>sample_paa</name>
			</identity>
 
			<containedPackage id="components/componentN" pathname="components/componentN/sdd.xml" />
 
 
			<serverVersionDependency name="PortalServer" lowerVersion="6.0.0.0" higherVersion="8.5.0.0" versions="" />
 
		</rootIU>
	</content>
</iudd:iudd>
```

Inside the root `<iudd:iudd>` element, the following three subelements are required for installation with the Solution Installer:

-   **The `<packageIdentity>` element**

    The first element is the `<packageIdentity>` element; for example:

    ```
    <packageIdentity contentType="Assembly">
    		<name>sample_paa</name>
    		<version>8.5.0.0</version>
    		<displayName key="d0001" default="sample_paa" />
    		<manufacturer>
    			<displayName key="DU_01" default="IBM" />
    		</manufacturer>
    	</packageIdentity>
    ```

    The `<packageIdentity>` element informs the Solution Installer and the ConfigEngine of the type of application to be installed. In this case, the contentType attribute equals Assembly. An assembly is a grouping of one or more components. The Solution Installer considers each PAA file as an assembly, even though it might contain only one component. Do not edit this attribute.

    The `<packageIdentity>` element contains a number of subelements that provide information about the content. The name and version elements need to be altered to suit the application you are installing. The `<displayName>` element can also be edited to include the assembly name, but is not required.

    **Important:** The name element that is provided for an assembly must match the name of the PAA file root directory. For example, a name of sample\_paa requires the root directory to also be called sample\_paa.

-   **The `<topology>` element**

    The next subelement is the `<topology>` element. This element does not require any alterations. For example:

    ```
    <topology>
    		<resource type="OSRT:OperatingSystem" id="OS" />
    	</topology>
    ```

-   **The `<content>` element**

    The final element block is the `<content>` element. This element provides the Solution Installer and the ConfigEngine with the information about what to install and on which servers. The `<rootIU>` element is where the actual information is included. Set the ID attribute of the `<rootIU>` element to the name of the application as used in the `<name>` element of the `<packageIdentity>` element.

    ```
    <content xsi:type="iudd:RootIUContent">
    		<rootIU id="sample_paa" targetRef="OS">
    		<identity>
    				<name>sample_paa</name>
    			</identity>
     
    			<containedPackage id="components/componentN" pathname="components/componentN/sdd.xml" />
     
     
    			<serverVersionDependency name="PortalServer" lowerVersion="6.0.0.0" higherVersion="8.5.0.0" versions="" />
     
    		</rootIU>
    	</content>
    ```

    The `<identity>` element contains the `<name>` subelement. Set this element to the name of the assembly found in the `<packageIdentity>` name element.


Although there is only one `<containedPackage>` element in this example, there can be a number of these elements. One for each component included in the PAA file. This element allows for ConfigEngine to register the components and informs it on where to find the component level sdd.xml file. The Solution Installer can auto-generate the component level sdd.xml file during the install-paa command. The developer does not need to add this file for a basic PAA file. However, when the developer needs to provide specific component dependencies outside of an order.properties file, then the component level sdd.xml file must be provided.

There are two attributes for the `<containedPackage>` element. The ID must equal the path of the component relative to the assembly level sdd.xml file. For example, as the PAA file puts all components in the components directory, a component name needs to also include the components/. For example, a component that is called component would have the `id=components/component`. The path name contains the path from the assembly sdd.xml file to the component level sdd.xml file. Continuing with the previous example, the `pathname` element is `pathname="components/componentN/sdd.xml"`.

The final element is the `<serverVersionDependency>` element. This element informs the Solution Installer of the HCL Portal versions on which the content can be installed. Not all the attributes that are shown are required. Go to the *Checking server dependency* section for more details.


