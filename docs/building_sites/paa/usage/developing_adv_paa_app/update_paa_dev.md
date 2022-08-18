# Updating a Portal Application Archive \(PAA\) file

Before Version 8.5, updating the PAA file content in the portal server was not a simple task. It usually involved removing and uninstalling the previous version, then installing or deploying an updated version of the PAA file. This work can lead to a number of problems because it might break existing links between pages or portlets that were created outside of the PAA file deployment. Since Version 8.5, the Solution Installer can handle this type of function. Only some of the PAA file resources might change. Therefore, it does not make sense to overwrite the full set of resources on the system, but only those resources that changed since the new PAA file was released.

In addition, some resource types are difficult to update without removing the existing version and redeploying the new resource. For example, HCL Web Content Manager libraries. The developer must decide whether the library needs to be replaced or whether the existing version is good. A number of new Solution Installer tasks handle the update of a PAA file. Read *Managing your existing Portal Application Archive \(PAA\) file* for information on the tasks.

The install-paa-update task verifies that an existing PAA file is installed to the ConfigEngine and creates a backup of the current set of files that are placed in the profile\_dir/paa/backup directory. The existing PAA file is removed from the ConfigEngine registry and most of the files from the expanded PAA file directory are deleted. The auto-generated code files are not replaced during this step because the PAA files might be different. Therefore, the removal tasks are still available to the Solution Installer and called by the custom code.

After this step completes, the Solution Installer continues with the regular install-paa task. However, it registers that the new PAA file is an update and records the location of the previous backed up version. It is this information that allows the deploy-paa task to run only the update-related tasks and not all the Ant tasks that are registered for the PAA file.

It would be difficult for the Solution Installer to establish what pieces of the PAA file are deployed as part of the update. Therefore, as the developer is in the best position to provide this input, the Solution Installer does not attempt to generate any default installation code for the update tasks. Instead, when the deploy-paa task detects that a PAA file is an update, it runs only extension point implementation tasks that meet certain naming criteria. For deploying an update, the extension point uses the updateSIFeaturePack suffix instead of the applySIFeaturePack suffix. For example, the deploy-apps-applySIFeaturePack in terms of an update would be deploy-apps-updateSIFeaturePack.

The content of these tasks is up to the developer of the PAA file. However, the existing Solution Installer generated tasks are present. The developer can start this code as part of any tasks they add. The Solution Installer does not overwrite any extension point implementation tasks during the install-paa-update task. If more resources are added, for example another ear file is created in the components/componentName/installableApps/ear directory, it must be deployed with custom code.

Although these update tasks are not automatically generated, the Solution Installer can automatically register them with the sdd.xml file for the component. Read *The component level sdd.xml file* for information on how to register the extension points. After an extension point implementation task is provided, read *Add custom code to a Portal Application Archive \(PAA\) file*. The Solution Installer automatically registers the task. The following is an example task for the 'componentN' component and the deploy-apps-updateSIFeaturePack task:

```
<target name="action-deploy-apps-updateSIFeaturePack-components/componentN">
</target>
```

In a similar fashion, the rollback of the update with the remove-paa-update task runs the extension points with the rollbackSIFeaturePack suffix. This task removes all the update PAA resources and restore the artifacts from the backup. When complete, the Solution Installer runs any extension point with the rollbackSIFeaturePack suffix. It is the developers responsibility to generate the tasks that can remove the resources and then deploy the previous versions. The original Ant tasks both custom and auto-generated are available and can be called from the custom Ant tasks. The following is an example of a rollback task:

```
<target name="action-remove-apps-rollbackSIFeaturePack-components/componentN">
</target>
```

Tasks with the updateSiFeaturePack and rollbackSIFeaturePack suffix are run only when the PAA file is registered as an update during the install-paa-update task. If the installation is on a fresh system, only the applySIFeaturePack and removeSIFeaturePack extension points are run.

**Parent topic:**[Developing advanced PAA file applications](../config/dev_sol_app_adv.md)

