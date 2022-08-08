# Order of installation of scripts and artifacts

Often the order that scripts are run or artifacts that are deployed is important for the success of the installation. This information is both true for artifacts or scripts in a single component and the order in which scripts contained in multiple components are installed.

At the component level all the scripts or artifacts in a directory are installed or deployed by a single task with one of the extension points. Therefore, if there are multiple scripts or resources, the Solution installer needs a mechanism to determine the correct order to run the scripts. If a custom task is provided, then there is no problem as it is assumed that the task runs all the scripts in the expected order. However, an issue arises when the Solution Installer auto-generated code is used to handle the deployment of the resources.

To solve this issue, a properties file called order.properties can be added to any of the directories within the component hierarchy that contain artifacts that must be run or installed. For example, an order.properties file can be added to the components/componentN/content/xmlaccess/install directory to handle the order of two or more XMLAccess scripts. This file contains a comma-separated list of the file names in the correct order that they are to be deployed.

When the install-paa task is run for the Portal Application Archive \(PAA\) file, a new Ant task is created. It runs the scripts in the order that is outlined in the order.properties file. If no order.properties file exists, the Solution Installer works on the assumption that the order of installation is not important.

The previous solution covers multiple artifacts for an extension point in a component. However, multiple components might require the same extension point and might have a dependency on the resources of one of these components to be deployed or configured before deployment. The strategy that is used by ConfigEngine and therefore Solution Installer is to collect all the different implementations of an extension point in the PAA file and run them consecutively. For example, all implementations of the `create-ear-applySIFeaturePack` extension point are run before you move on to the next extension point type. The Solution Installer determines the order in which the extension points are run. Each extension point is run in a preset order that is based on the type of function required. Where there are multiple implementations for an extension point across components, it might be necessary to have an order that is placed on when they are started.

These dependencies between the component extension points are set in the component level sdd.xml file. Add a `requirements` element to the `SCU` element for the extension point. This `requirements` element must point to the component on which it depends. Read [Component level sdd.xml file overview](si_paa_spec_comp.md) for information.

Starting with version 8.5, the dependencies can be automatically created between extension points of different components with the install-paa task. Add an order.properties file to the /components directory of a PAA file. This file contains a comma-separated list of components in the order in which they are to be installed. The components that can be run outside of this order do not need to be added to the list. After the Solution Installer creates default code and adds the `SCU` elements for the extension points, it analyses the components in the order.properties file. It sets the `requirements` elements on the relevant `SCU` elements to add dependencies between the shared extension points of these components.

**Note:** The full component name must be used in the order.properties file, Take for example a PAA file with two components components/component1 and components/component2. The line in the order.properties file is components/component1,components/component2.

**Important:** The Solution Installer adds only a `requirements` element where one does not exist. Therefore, it does not overwrite any developer-provided settings.

For the removal of the resources from the portal with the remove-paa task, the order that the Solution Installer uses is the reverse of what is found in the order.properties file.

**Parent topic:**[Create a Portal Application Archive \(PAA\) file](../config/si_paa_spec.md)

