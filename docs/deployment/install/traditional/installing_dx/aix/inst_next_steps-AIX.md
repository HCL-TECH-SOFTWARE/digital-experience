# Configuring post-installation settings on AIX

Use the Configuration Wizard to set up integration prerequisites, clusters, and options.

## Verifying installation

Verify the deployment by accessing the portal URL:

```url
http://yourserver:yourport/wps/portal
```

To determine active port numbers, run the `list-server-ports` task. This task generates a text file containing port assignments for HCL Digital Experience (DX), HCL Web Content Manager (WCM), and the Configuration Wizard. Because DX, WCM, and the Configuration Wizard operate on isolated WebSphere profiles (`wp_profile` for DX and WCM, and `cw_profile` for the Configuration Wizard), port discovery must be executed separately within each profile directory.

**DX and WCM**

Change directory to `wp_profile_root/ConfigEngine` and generate the `PortMatrix.txt` file:

```bash
./ConfigEngine.sh list-server-ports -DWasPassword=password
```

**Configuration Wizard**

Change directory to `/opt/IBM/WebSphere/AppServer/profiles/cw_profile/ConfigEngine` and generate the `server1_PortMatrix.txt` file:

```bash
./ConfigEngine.sh list-server-ports -DWasPassword=password
```

## Selecting a roadmap

If you have not already selected a roadmap to guide you through the installation and deployment process, look at the available roadmaps. The roadmaps are based on typical environments, such as development environment, test environment, and more. They provide a high-level overview of the installation and deployment process. Each roadmap includes a topology diagram, usage recommendations, and instructions. Roadmaps are available for both new deployments and migrations scenarios. For more information, refer to the following topics:

- [Roadmaps for installation and deployment](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_installation.md)
- [Roadmaps for migration](../../../../../deployment/manage/migrate/planning_migration/rm_migration/index.md)

## Running the Configuration Wizard to finish the deployment

Start the Configuration Wizard and select the option defined in your selected roadmap. Use the wizard to run the configuration steps in real time or to generate scripts. The wizard generates instructions and scripts specific to your environment and the data that you entered. You can save the selection and data that you entered as an XML file. Then, you can load the XML file during a subsequent wizard session to set up a similar configuration on a different server.

If you select to run the configuration in real time, you still have the opportunity to download scripts for selected steps. For example, if only the database administrator can databases, then you can download the database creation script and give it to your database administrator to run.

## Default URLs

During the configuration process, you may need the following URLs to access different administration user interfaces.

Use the following default URLs to access HCL DX, the WebSphere Integrated Solutions Console, and the Configuration Wizard:

- **HCL DX**

    ```url
    http://localhost:10039/wps/portal
    https://localhost:10042/wps/portal
    ```

- **WebSphere Integrated Solutions Console**

    ```url
    http://localhost:10038/ibm/console
    https://localhost:10041/ibm/console
    ```

- **Configuration Wizard**

    ```url
    http://localhost:10200/ibm/wizard
    https://localhost:10202/ibm/wizard
    ```

If you had any processes from other software in the default port range when the installation started, you might have different port numbers than the defaults.

???+ info "References"
    -   [Roadmaps for V9.5 installation and deployment](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_installation.md)
    -   [Roadmaps for migration](../../../../manage/migrate/planning_migration/rm_migration/index.md)
