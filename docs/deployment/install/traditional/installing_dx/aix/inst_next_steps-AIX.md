# Next steps \| Installing HCL Digital Experience

The configuration process has changed. Use the Configuration Wizard to set up your integration with prerequisites, clusters, and more.

## Verify that the installation was successful

Unless you selected to install only the binary files, you can log in to the portal and verify that your installation was successful. Access HCL Portal with the http://yourserver:yourport/wps/portal format.

If you are not sure what your port number is, use the list-server-ports command to determine the port number. Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/log. Run the list-server-ports task to generate the HCL Portal and HCL Web Content Manager\_PortMatrix.txt file. For example: ./ConfigEngine.sh list-server-ports -DWasPassword=password.

Change to the /opt/IBM/WebSphere/AppServer/profiles/cw\_profile/ConfigEngine. Run the list-server-ports task to generate the server1\_PortMatrix.txt file. For example: ./ConfigEngine.sh list-server-ports -DWasPassword=password.

## Select a roadmap

If you have not already selected a roadmap to guide you through the installation and deployment process, look at the available roadmaps. The roadmaps are based on typical environments, such as development environment, test environment, and more. They provide a high-level overview of the installation and deployment process. Each roadmap includes a topology diagram, usage recommendations, and instructions. Roadmaps are available for both new deployments and migrations scenarios.

-   [Roadmaps for V9.5 installation and deployment](rm_installationv95.md)
-   [HCL Portal Roadmaps for migration](rm_migration.md)

## Run the Configuration Wizard to finish the deployment

Then, start the Configuration Wizard and select the option that is defined in your selected roadmap. Use the wizard to run the configuration steps in real time or to generate scripts. The wizard generates instructions and scripts specific to your environment and the data that you entered. You can save the selection and data that you entered as an XML file. Then, you can load the XML file during a subsequent wizard session to set up a similar configuration on a different server.

If you select to run the configuration in real time, you still have the opportunity to download scripts for selected steps. For example, if only the database administrator can databases, then you can download the database creation script and give it to your database administrator to run.

## Default URLs

During the configuration process, you might need to following URLs to access different administration user interfaces.

Use the following default URLs to access HCL Digital Experience, the WebSphere® Integrated Solutions Console, and the Configuration Wizard:

-   **HCL Digital Experience**

    http://localhost:10039/wps/portal

    https://localhost:10042/wps/portal

-   **WebSphere® Integrated Solutions Console**

    http://localhost:10038/ibm/console

    https://localhost:10041/ibm/console

-   **Configuration Wizard**

    http://localhost:10200/ibm/wizard

    https://localhost:10202/ibm/wizard


If you had any processes from other software in the default port range when the installation started, you might have different port numbers than the defaults.


