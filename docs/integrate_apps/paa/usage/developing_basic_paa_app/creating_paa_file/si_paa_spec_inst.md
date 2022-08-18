# Installation tasks

Solution installer supports the auto generation of deployment tasks for specific resource types. The creation of these tasks occurs during the installation or registration phase for the PAA file with the Solution Installer and the ConfigEngine.

At this stage, analysis is done on the PAA content after expansion to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/paa directory to determine which resources are included. When complete, the Solution Installer generates the code to deploy the artifacts. The developer might decide that the default code is not robust enough to handle the deployment of their artifacts. Or the developer might decide that extra configuration that is not covered by the Solution Installer is required. The developer can overwrite the code generation step for the specific resources. The developer must provide an implementation task for the extension point that is mapped to that resource directory. For information, read [Developing advanced PAA file applications](dev_sol_app_adv.md).

The Solution installer determines what resources are available and looks up the mapping between individual resource types and their assigned extension point. Then, it checks the config/includes directory of the current component to determine whether a task exists for the extension point that is related to the resource type. If one is found, then it is assumed that all resources in the directory are covered by the task. No attempt is made to auto-generate code to deploy those resources. No code inspection is done on the implementation task to establish if all resources are covered.

The naming scheme for tasks is important for recognizing which tasks implement extension points. The naming scheme is 'action-' + '%extension point' + '-componentname'.

The extension points that are started by the Solution Installer differ from the portal core extension points. They have the suffix 'applySIFeaturePack' or 'removeSIFeaturePack' appended to the end of the core extension point name.

Take for example two ear files that are provided in the components/sample1/installableApps/ear directory. The Solution Installer checks if a task called action-create-ear-applySIFeaturePack-components/sample1 exists. The 'action-' extension point name + componentName' is the pattern that is used to determine that a task implements an extension point. If such a task is found, then the Solution Installer adds the task name to the list of implemented extension points and moves on to the next resource type. Otherwise, it implements a task to cover the deployment of both ear files.

The ConfigEngine runs the installation of the set of components by extension point and controls the order in which they are run. For example, all component tasks that implement the create-ear-applySIFeaturePack extension point are run together. Portlet deployments are done at the same time. If you need an artifact of a component that is installed before you install another, then you must create a dependency in the sdd.xml file. The dependency works on an extension point basis because you can specify that artifacts covered by that extension point can have an order. For example, you can specify that the EAR file in component1 is installed before the EAR file in component2. Read [Component level sdd.xml file overview](si_paa_spec_comp.md) for information.

Any extra Ant tasks that are found in the config/includes directory that do not comply with the naming scheme for extension point tasks are not run. Instead, these tasks must be called directly by extension point tasks or they are not run.

In earlier versions of the Solution Installer, it was necessary to add an `SCU` element to the component level sdd.xml file to register any developer-provided extension point implementation tasks. However, it is no longer necessary because `SCU` elements are now added for all recognized extension point tasks.

Developers can also implement extra configuration extension points that are not directly related to deploying resources in the PAA file. An example is a task to create a resource environment custom property. Read the [Developing advanced PAA file applications](dev_sol_app_adv.md) for information. Tasks to implement these extension points can also be added to an XML file in the config/includes directory. When they follow the naming scheme pattern, they are registered in the component level sdd.xml file with the `SCU` elements and automatically run at run time. In this way, the Solution Installer can handle both auto-generated and developer-provided code.

**Parent topic:**[Create a Portal Application Archive \(PAA\) file](../config/si_paa_spec.md)

