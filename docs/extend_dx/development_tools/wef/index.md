# Web Experience Factory (WEF)
## Web Experience Factory Designer - Overview

[HCL Web Experience Factory (WEF)](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory) creates applications with rich, interactive digital experiences for delivery on desktop browsers, smartphones, tablets, and other channels. This application development tool enables developers to build custom web portlets, widgets, and applications for [HCL Digital Experience](https://www.hcltechsw.com/dx/features), and IBM WebSphere Application Server environments.

## Using HCL Web Experience Factory 8.5.1

Along with the release of HCL Digital Experience CF205, HCL has released an updated version of HCL Web Experience Factory, which is version 8.5.1. This release includes support for Java 1.8 and Eclipse 4.2.2 as outlined below.

## Updates from HCL Web Experience Factory 8.5 to HCL Web Experience Factory v8.5.1

1. Previous releases of IBM Web Experience Factory and HCL Web Experience Factory v8.5 were available with an Installer package. The HCL Web Experience Factory 8.5.1 is available as a zip file which contains the Web Experience Factory 8.5.1 (WEF) plugin pre-installed in Eclipse version 4.4.

2. Previous releases of Web Experience Factory compiled the applications with Java 1.6/1.7 SDKs. HCL Web Experience Factory 8.5.1 is compiled using a Java 1.8 SDK.

3. Previous releases of Web Experience Factory contained a default IBM WebSphere Liberty Version 6 server and IBM JDK 6. HCL Web Experience Factory 8.5.1 does not contain a default application server or JDK. HCL Web Experience Factory 8.5.1 is compatible with any Version 8 JDK or Java server to deploy applications locally. **It is compatible with HCL DX 8.5, 9.0 and 9.5 (CF205 or later) running servers.**.

4. HCL Web Experience Factory 8.5.1 is pre-installed in an Eclipse IDE. Use of the IBM Rational Application Developer IDE is not supported with this HCL WEF 8.5.1 release.

5. **Upgrading to HCL Web Experience Factory v8.5.1**: We recommend developers install HCL Web Experience Factory v8.5.1 as a fresh installation and migrate existing portlets developed using previous releases of Web Experience Factory following the steps below.

For more information abou the latest HCL Web Experience Factory updates, refer to the following documentation:
- [HCL Web Experience Factory Knowledge Base articles and technotes](https://support.hcltechsw.com/csm?id=kb_search&spa=1&language=en,ja&query=web%20experience%20factory)
- [HCL Web Experience Factory Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013647)

## Install HCL Web Experience Factory v8.5.1 in Windows and Linux Platforms

!!!pre-requisite
      Review the HCL Web Experience Factory 8.5.1 supported system requirements: [HCL Web Experience Factory Support Statements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013647)

!!!note
    HCL WEF 8.5.1 cannot be installed on Mac OS.

1. Obtain HCL Web Experience Factory v8.5.1 from your HCL Software License Portal entitlements. HCL WEF 8.5.1 is included in all HCL Digital Experience 8.5 offering entitlements. See the [Getting the Software](../../../get_started/download/software_licensing_portal/index.md#getting-the-software) Help Center topic for more information.

2. Unzip the downloaded `hcl-dx-wef-v8.5.1_2022XXXX.zip` file. The extracted file components contains:

    -   A `win` folder for Windows platform
    -   A `linux` folder for Linux platform
    -   A ReadMe Textfile for instructions to run the software once installed.

3. Download or use any JDK or JRE v8 installed to your local machine.

4. Navigate to the installed path:

    -   For Windows platforms: From a command prompt, navigate to your `WEF-8.5.1/win` folder.
    -   For Linux Platforms: From a terminal, navigate to your `WEF-8.5.1/linux` folder.

5. Run the script to replace `Variables` in `link` and `ini` files with Path strings.

    -   For Windows platforms: From the command prompt, run the `run.bat` command.

    -   For Linux Platforms: From the terminal run the `sh run.sh` command. 
    
        If successful, it prints the following message: 
        
        ```
        The above tasks are completed.
        ```

6. (Optional) Update the `eclipse.ini` file.

    -   For Windows platforms: Navigate to `WEF-8.5.1/win/eclipse`. Add the following as shown below:

        ```
        -vm jre8-path\bin\javaw.exe
        ```

        ![Update eclipse.ini file](../wef/_img/Update_eclipse.ini.png)

    -   For Linux Platforms: Navigate to `WEF-8.5.1/linux/eclipse`. Add the following as shown below:

        ```
        Copied to clipboard-vm jre8-path/bin
        ```

        ![Update eclipse.ini file - Linux](../wef/_img/update_eclipse.ini_linux.png)

    !!!note
        In case you face any issues, refer to this topic for debugging guidance: [https://wiki.eclipse.org/Eclipse.ini](https://wiki.eclipse.org/Eclipse.ini)

7. Launch the eclipse executable file under the Eclipse folder in the respective platforms. Navigate to **Window > Preferences > Java > Installed JREs Add** and set the JRE path if it is not mapped already. This should allow Linked Java Objects to compile and work correctly.

8. After initial deployment, go to **Window > Open Perspective > Web Experience Factory** to change the IDE perspective.

9.  Select **File > New Project > Web Experience Factory Project** to create a new Web Experience Factory project. Add tutorials as desired.

10. Deploy/Publish it to HCL Digital Experience server directly or by using DXClient.

## Getting Started with HCL Web Experience Factory

1. Go to **Help > Dynamic Help > Contents** and search for Web Experience Factory Designer.

2. Expand the + sign at HCL Web Experience Factory Designer. You can find a list of documents starting from Overview of HCL Web Experience Factory Designer through the Glossary listings.

3. Go to **Help > Show Read me** information topic to learn how to publish models.

4. Go to **Help > Show Builder guide** to learn more about Builders.

    !!!note
        Eclipse Kepler's online help (available through **Help > Help Contents**) has known compatibility issues with Java 8. To access Eclipse Kepler's online help, follow the search content steps as described in Step 1.

## Migrate portlets from IBM Web Experience Factory to HCL Web Experience Factory

To work with portlets created with Web Experience Factory releases prior to V8.5.1 in your workspace:

1. Create a backup of your existing WEF applications workspace.

2. Open the eclipse using executable file under the eclipse folder in respective platforms.

3. Enter the existing workspace path. It displays throw an alert message:

    ```
    "Workspace '<old-workspace-path>' was written with an older version of the product and will be updated. Updating the workspace can make it incompatiable with older versions of the product. Are you sure you want to continue with this workspace?"
    ```

  The alert message is displayed because the Eclipse version is upgraded during the HCL Web Experience Factory 8.5.1 installation. It does not corrupt your workspace. Click OK to continue. This opens all the applications in the latest WEF v8.5.1 perspective but with errors thrown for the project version.

4. Go to **Window > Preferences > Java > Installed JREs**.

5. Add the JRE 8 path and check it to default if it does not exist, otherwise verify JRE path you have defined is accurate.

6. Right-click on each project and select **Upgrade project Version**.

7. If you have set up IBM WebSphere Liberty v6 in the previous workspace, do note that it will also be migrated and it will run as if it runs on its own JRE 6. You may upgrade it to JRE 8 or delete it.

    !!!note
        To publish the WEF 8.5.1 project from the WEF 8.5.1 Designer directly into a target Digital Experience (DX) Server, the JRE used for running the Designer should be updated with the target DX Server SSL certificates. Please refer to the steps below.

## Import the SSL Certificate into the Java keystore

1. Navigate to `Installed-JRE-path'/lib/security` from the workstation terminal or via command prompt.

2. Execute the keytool to import the certificates into the Java keystore of the current JRE that runs the HCL WEF v8.5.1 Designer (The keytool is pre-installed with Java. If unavailable, install it separately).

    -   For Windows platforms:

        ```
        keytool.exe -import -trustcacerts -alias <alias-name> -file <path-to-the-certificate-file> -keystore <keystore> -storepass <password>
        ```

        Example:
        ```
        keytool.exe -import -trustcacerts -alias default -file C:\Downloads\mylocal.der -keystore cacerts -storepass changeit
        ```

    -   For Linux platforms:

        ```
        keytool -import -trustcacerts -alias <alias-name> -file <path-to-the-certificate-file> -keystore <keystore> -storepass <password>
        ```

        Example:
        ```
        keytool -import -trustcacerts -alias default -file /home/centos/Downloads/mylocal.der -keystore cacerts -storepass changeit
        ```

3. A success message displays after the certificates are imported into the Java keystore.

## Deploy a portlet into target HCL DX servers

There are three options to deploy a portlet into a target HCL DX server.

### Direct publish of the Portlet from Eclipse

!!!note
    Import the SSL certificate into the Java keystore before attempting to publish the portlet directly.

1. Right-click on the Web Experience Factory 8.5.1 project in Eclipse you want to export.

2. Click Create a server configuration.

3. Select the target HCL DX server to publish the application into.

4. Test the server connection to verify the connection to the server. Click OK to continue.

5. Click Finish to create the project according to the details and features you have specified. 

    The following message displays: 
    ```
    Would you like to publish your project now? 
    ```
    
    Click **Yes** to continue.

### Export and import through the DX Administration interface

1. Right-click on the Web Experience Factory 8.5.1 project you want to export.

2. Select **Export > Web Experience Factory Portlet WAR**.

3. Select **Target DX Portal Server > WebSphere Application Server Portlet Container**.

4. Choose **Export Path > Finish**.

5. Login to the target DX server.

6. Click on the **Applications** menu (Home icon) on the **Administration** header bar.

7. Select the **Administration > Web Modules** option.

8. Install the WAR file exported in Steps 2 – 4.

9. Navigate to the side toolbar and enable **Edit Mode**.

10. Create a DX page and add the portlets deployed using the WAR file.

### Import the exported WAR file using DXClient

The HCL DXClient tool can also be used to import portlet WAR files to target Digital Experience Servers. Refer to the [DX Portlet Deploy](../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/portlets.md#deploy-portlets) Help Center topic to import the portlet WAR file using DXClient tool.