# Importing a Site Builder template from a file by using Solution Installer

If you export a Site Builder template file, use the Solution Installer to make the template available to HCL Portal administrators and website creators.

Before you can import a Site Builder template, the target server must have HCL Portal, Web Content Manager, Content Template, and the Site Builder page and library that is installed and visible.

!!! note
    Do not import a Site Builder template that uses embedded page templates that are stored in the Portal Site library. Conflicts between duplicate page templates cause the imported Site Builder template to break on the destination server.

The Site Builder template can be installed by using the Solution Installer by running the normal install-paa, update-paa-components, and deploy-paa commands. If the Site Builder template or page templates exist on the server, they are overwritten. If a required library named in the Site Builder template file exists on the server, you cannot import the Site Builder template.Site Builder prevents custom libraries from being overwritten accidentally.

Further information on using the Solution Installer can be found here: [Installing add-ons](../../../../deployment/install/traditional/install_addons/index.md).

1.  Go to the [wp\_profile\_root](../../../../guide_me/wpsdirstr.md) directory.

2.  Run the ConfigEngine batch or script file with the install-paa parameter. For example:

    -   **Windows™**

        ```
        ConfigEngine.bat install-paa update-paa-components  -DPAALocation=site\_template.paa -DappName=site\_template -Dcomponents/site\_template.unique=true 
        ```

    -   **AIX and Linux™**

        ```
        ./ConfigEngine.sh install-paa update-paa-components  -DPAALocation=site\_template.paa -DappName=site\_template -Dcomponents/site\_template.unique=true 
        ```

    Where:

    -   site\_template.paa is the name of the paa file that is created when you exported the Site Builder template.
    -   site\_template is the name of the component inside the application.
    
3.  Run the ConfigEngine batch or script file with the deploy-paa parameter. For example:

    -   **Windows™**

        ```
        ConfigEngine.bat -DappName=site\_template -Dcomponents/site\_template.unique=true 
        ```

    -   **AIX and Linux™**

        ```
        ./ConfigEngine.sh -DappName=site\_template -Dcomponents/site\_template.unique=true 
        ```

    Where:

    -   site\_template is the name of the component inside the application.


