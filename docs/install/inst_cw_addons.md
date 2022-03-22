# Install and uninstall add-ons using the Configuration Wizard

You can install add-on functionality to your HCL Portal with the solution installer through the Configuration Wizard. The add-ons that are accepted by the configuration options are .paa files. For more information, see the solution installer documentation.

Complete the following steps to use the Configuration Wizard to install or uninstall the add-ons:

1.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.
2.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.
3.  Click **Add On New Capability**
4.  To interact with the solution installer through the configuration wizard, select **Install Add-ons** or **Uninstall Add-ons**.
5.  Provide information about your environment.
6.  Save your wizard selections to use the same values that you entered later.
7.  Choose one of the following options:
    -   Click **Download Files** to run the steps remotely.
    -   Click **Run All Steps** to run the steps locally.

## Typical versus advanced installation scenarios

Two different installation scenarios are supported through the **Add On New Capability** options in the Configuration Wizard. These scenarios are the typical and advanced installation scenarios.

-   **Typical**

    The typical scenario is for simple paa files that often contain only one component, but is not limited to it, and can be installed directly without any additional configuration. The typical scenario installs/registers the paa file with the configEngine and then automatically deploys the content to HCL Portal.

-   **Advanced**

    The advanced scenario provides you with much greater flexibility in how to install the paa file. If you select **Advanced Install** on the Install type screen, when the workflow completes, the paa file is installed to the ConfigEngine, but it is not deployed to portal. Instead, a new configuration option specific to that paa file is generated. Use the generated instructions to configure the deployment settings. Finally, a **Launch configuration** button displays so that you can continue with the deployment. After you click **Launch configuration**, follow the steps to ensure that the paa file is deployed.

    You can select the components that you want to install, if there is more than one component from the information that is presented in this additional configuration option. This step is useful where demonstration content is included in the paa file. Or, if one of the components is designated as virtual portal content only.

    In addition, if there are HCL Web Content Manager libraries that are found in the paa file that exist on the server, you can select to replace them from the libraries in the paa file. A list of virtual portals that are available at the time of the creation of the configuration option are also presented so that you can choose where the selected content is deployed.

    In the advanced scenario, the additional configuration that is called **Deploy-Remove-PAA-assemblyName** is also the mechanism in which content is removed from the portal. Depending on what is required, you can select the type of function from the configuration option.

    The **Deploy-Remove\_PAA-\*.\*** option is added to the **Add-on new capability** section of the configuration wizard. After the configuration option is added to the configuration wizard, you can add modifications to thepaa file. When you uninstall by using the **Uninstall Add-ons** with the **Advanced** setting the **Deploy-Remove-PAA-\*.\*** option is removed from the configuration wizard repository. However, the option still displays in the list of active configuration options under the **Add On New Capability section** of the wizard. To remove these items, you need to restart server1 in the cw\_profile. Restarting refreshes the repository and ensures that the items no longer show up.

    **Note:** If you install and deploy a paa file by using the advanced scenario, you must also remove the content that uses the paa-specific option before you uninstall. You can remove this content by using the advanced selection during the **Uninstall add-ons** option.


