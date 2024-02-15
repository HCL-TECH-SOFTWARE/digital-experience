# Post-requisite steps

This topic outlines the post-requisite steps after running the HCL Digital Experience installation program.

## Verify that the installation was successful

Unless you selected to install only the binary files, you can log in to the portal and verify that your installation was successful. Access HCL Portal with the http://yourserver:yourport/wps/portal format.

If you are not sure what your port number is, use the list-server-ports command to determine the port number. Change to the [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)\ConfigEngine\log\. Run the list-server-ports task to generate the HCL Portal and HCL Web Content Manager_PortMatrix.txt file. For example:

ConfigEngine.bat list-server-ports -DWasPassword=password.

## Select a roadmap

If you have not already selected a roadmap to guide you through the installation and deployment process, review the available roadmaps documentation. The roadmaps are based on typical environments, such as development environment, test environment, and more. They provide a high-level overview of the installation and deployment process. Each roadmap includes a topology diagram, usage recommendations, and instructions. Roadmaps are available for both new deployments and migrations scenarios.

-   Documentation resource: [Roadmaps for installation and deployment](../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_installation.md)
-   Documentation resource: [Roadmaps for migration](../../../../manage/migrate/planning_migration/rm_migration/index.md)

## Run the Configuration Wizard to finish the deployment

Then, start the Configuration Wizard and select the option that is defined in your selected roadmap. Use the wizard to run the configuration steps in real time or to generate scripts. The wizard generates instructions and scripts specific to your environment and the data that you entered. You can save the selection and data that you entered as an XML file. Then, you can load the XML file during a subsequent wizard session to set up a similar configuration on a different server.

If you select to run the configuration in real time, you still have the opportunity to download scripts for selected steps. For example, if only the database administrator can databases, then you can download the database creation script and give it to your database administrator to run. Read more about Configuration Wizard in the HCL Digital Experience Version 8.5 documentation below.

-   Documentation resource: [Configuration Wizard](../../../../manage/portal_admin_tools/cfg_wizard/index.md)

## Default URLs

During the configuration process, you might need to following URLs to access different administration user interfaces.

Use the following default URLs to access HCL Portal, the WebSphere® Integrated Solutions Console, and the Configuration Wizard:

-   **HCL Portal**

    http://yourserver:10039/wps/portal

    https://yourserver:10042/wps/portal

-   **WebSphere® Integrated Solutions Console**

    http://yourserver:10038/ibm/console

    https://yourserver:10041/ibm/console

-   **Configuration Wizard**

    http://yourserver:10200/ibm/wizard

    https://yourserver:10202/ibm/wizard


If you had any processes from other software in the default port range when the installation started, you might have different port numbers than the defaults.


