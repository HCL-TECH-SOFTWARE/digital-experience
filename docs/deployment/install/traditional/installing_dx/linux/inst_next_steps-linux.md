# Configuring post-installation settings on Linux

Use the Configuration Wizard to set up integration prerequisites, clusters, and options.

## Verifying installation

Verify the deployment by accessing the portal URL:

```url
http://yourserver:yourport/wps/portal
```

To determine active port numbers, run the `list-server-ports` task. This task generates the `PortMatrix.txt` file containing port assignments for HCL Digital Experience (DX) and HCL Web Content Manager (WCM).

Change to the `{installation path}/AppServer/profiles/cw_profile/ConfigEngine/log` and run the `list-server-ports` task:

```bash
./ConfigEngine.sh list-server-ports -DWasPassword=password.
```

## Selecting a roadmap

If you have not already selected a roadmap to guide you through the installation and deployment process, review the available roadmaps documentation. The roadmaps are based on typical environments, such as development environment, test environment, and more. They provide a high-level overview of the installation and deployment process. Each roadmap includes a topology diagram, usage recommendations, and instructions. Roadmaps are available for both new deployments and migrations scenarios. For more information, refer to the following topics:

- [Roadmaps for installation and deployment](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_installation.md)
- [Roadmaps for migration](../../../../../deployment/manage/migrate/planning_migration/rm_migration/index.md)

## Running the Configuration Wizard to finish the deployment

Start the Configuration Wizard and select the option defined in your selected roadmap. Use the wizard to run the configuration steps in real time or to generate scripts. The wizard generates instructions and scripts specific to your environment and the data that you entered. You can save the selection and data that you entered as an XML file. Then, you can load the XML file during a subsequent wizard session to set up a similar configuration on a different server.

If you select to run the configuration in real time, you still have the opportunity to download scripts for selected steps. For example, if only the database administrator can databases, then you can download the database creation script and give it to your database administrator to run. For more information, refer to [Configuration Wizard](../../../../manage/portal_admin_tools/cfg_wizard/index.md).

## Default URLs

During the configuration process, you may need the following URLs to access different administration user interfaces.

Use the following default URLs to access HCL DX, the WebSphere® Integrated Solutions Console, and the Configuration Wizard:

- **HCL DX**

    ```url
    http://yourserver:10039/wps/portal
    http://yourserver:10042/wps/portal
    ```

- **WebSphere® Integrated Solutions Console**

    ```url
    http://yourserver:10038/ibm/console
    http://yourserver:10041/ibm/console
    ```

- **Configuration Wizard**

    ```url
    http://yourserver:10200/ibm/wizard
    http://yourserver:10202/ibm/wizard
    ```

If you had any processes from other software in the default port range when the installation started, you might have different port numbers than the defaults.

???+ info "Related information"
    -   [WebSphere® Integrated Solutions Console](../../../../manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)