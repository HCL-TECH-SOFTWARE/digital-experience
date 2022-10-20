
# Exporting your theme from your system

## 1. Exporting the theme metadata.
1. Use the directory where you want to export as your base directory when running the commands.
2. Export your install theme xml file by running the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -xmlFile {XMLEXPORT} \
              -dxProtocol $DXPROTOCOL \
              -hostname $HOSTNAME \
              -dxPort $DXPORT;
           ```

    === "Windows"

           ```bat
           :: assumes other required parameters are already set via config file in store or via enviroment variables
           dxclient xmlaccess ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -xmlFile {XMLEXPORT} ^
              -dxProtocol %DXPROTOCOL% ^
              -hostname %HOSTNAME% ^
              -dxPort %DXPORT%;
           ```

!!!info "Notes on parameters:"
    1. xmlFile should be pointing to your theme metadata export xml during [setup](index.md#Theme-metadata-export-xml).
    2. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.

!!!success "Output"
    Find in your base directory the xml output in store/outputFiles/xmlaccess (“The xml output file should look something like this: `Output-20220926153722.xml`”). Move the exported xmlfile to a different directory to ensure it would not be lost.

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/xmlaccess.html)."

## 2. Exporting Theme source code
1. Use the same directory as before.
2. Find a undeploy request xml for your theme and then edit the uniquename to match yours or create yours like the following. Sample XML files can be found in the samples directory of DXClient or in DX server located in the following directory: `PortalServer_root/doc/xml-samples`.
!!!example "theme-export.xml"
    ```XML
    <?xml version="1.0" encoding="UTF-8"?>
    <request type="update" version="8.0.0.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd">
    <portal action="locate">
    <skin action="delete" uniquename="custom.portal.skin.Woodburn%20Insurance.Standard"/>
    <theme action="delete" uniquename="custom.portal.theme.Woodburn%20Insurance"/>
    </portal>
    </request>
    ```

   - Modify the uniquename to match yours.
   ```xml
      <portal action="locate">
      <skin action="delete" uniquename="custom.portal.skin.Woodburn%20Insurance.Standard"/>
      <theme action="delete" uniquename="custom.portal.theme.Woodburn%20Insurance"/>
      </portal>
   ```

   - You can find it by going to Theme Manager and then clicking the cog.
   ![Theme Manager](../../images/19theme_manager.png)
     - For skin uniquename.
        ![Skin Object ID](../../images/19skin_objectid.png)
     - For theme uniquename.
        ![Theme Object ID](../../images/19theme_objectid.png)

3. Undeploy your theme by running the following command.

    === "MacOS or Linux"

           ```bash
           source ./{configfile}
           dxclient undeploy-theme \
              -dxProtocol {DXPROTOCOL} \
              -hostname {HOSTNAME} \
              -dxPort {DXPORT} \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -hostname {HOSTNAME} \
              -dxConnectPort {DXCONNECTPORT} \
              -dxConnectUsername {DXUSERNAME} \
              -dxConnectPassword {DXPASSWORD} \
              -xmlFile {XMLEXPORT} \
              -themeName {THEMENAME} \
              -enableBackup true \
              -dxProfileName {DXPROFILENAME}
           ```

    === "Windows"

           ```bat
           {configFile}
           dxclient undeploy-theme ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -dxConnectUsername {DXUSERNAME} ^
              -dxConnectPassword {DXPASSWORD} ^
              -xmlFile {XMLEXPORT} ^
              -themeName {THEMENAME} ^
              -dxProtocol {DXPROTOCOL} ^
              -hostname {HOSTNAME} ^
              -dxPort {DXPORT} ^
              -hostname {HOSTNAME} ^
              -dxConnectPort {DXCONNECTPORT} ^
              -enableBackup true ^
              -dxProfileName {DXPROFILENAME}
           ```

!!!info "Notes on parameters:"
    1. `xmlFile` should be pointing to your xml in the step 2 above.
      - if you are using Woodburn Insurance Demo it should be `"Woodburn Insurance/components/Woodburn Insurance/content/xmlaccess/uninstall/uninstallTheme.xml"`.
    2. `themeName` should be `"{Theme Name}"`
      - if you are using Woodburn Insurance Demo it should be `"Woodburn Insurance"`.

!!!success "Output"
    Find in your base directory the exported theme zipped in store/outputFiles/themes/backup/webdav (“The zip output file should look something like this: `Woodburn Insurance-20220926104910.zip`”). Move the exported zip file to a different directory to ensure it would not be lost.

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/themes.html)."

## 3. Redeploying Theme
1. Use the same directory as before.
2. Deploy your theme by running the following command.

    === "MacOS or Linux"

           ```bash
           source ./{configfile}
           dxclient deploy-theme \
              -xmlFile {INSTALLTHEME} \
              -themeName "{THEMENAME}" \
              -themePath {PATH/TO/YOUR/THEME/ZIP} \
              -dxUsername {DXUSERNAME} \
              -dxPassword {DXPASSWORD} \
              -dxConnectUsername {DXUSERNAME} \
              -dxConnectPassword {DXPASSWORD} \
              -hostname $HOSTNAME \
              -dxProtocol $DXPROTOCOL \
              -dxPort $DXPORT \
              -hostname $HOSTNAME \
              -dxProfileName $DXPROFILENAME
           ```
           
    === "Windows"

           ```bat
           {configFile}
           dxclient deploy-theme ^
              -xmlFile {INSTALLTHEME} ^
              -themeName "{THEMENAME}" ^
              -themePath {PATH/TO/YOUR/THEME/ZIP} ^
              -dxUsername {DXUSERNAME} ^
              -dxPassword {DXPASSWORD} ^
              -dxConnectUsername {DXUSERNAME} ^
              -dxConnectPassword {DXPASSWORD} ^
              -hostname %HOSTNAME% ^
              -dxProtocol %DXPROTOCOL% ^
              -dxPort %DXPORT% ^
              -hostname %HOSTNAME% ^
              -dxProfileName %DXPROFILENAME%
           ```

    !!!info "Notes on parameters:"
         1. `xmlFile` should be pointing to the xml exported in this [step](#1-export-the-theme-metadata).
         2. `themeName` should be what is the theme name.
            - `"Woodburn Insurance"` if you are on Woodburn Insurance Demo
         3. `themePath` should be pointing to the zip exported in this [step](#2-undeploy-theme).
         4. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.


3. The output should look similar to this.

      ```console
      2022-09-22 14:39:10 : Start to deploy theme in WebDav.
      (node:1) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
      (Use `node --trace-warnings ...` to show where the warning was created)
      2022-09-22 14:39:10 : The theme Woodburn Insurance is available under WebDAV themes collection.
      2022-09-22 14:39:12 : WebDAV theme back up has been taken and placed in : store/outputFiles/themes/backup/webdav/Woodburn Insurance-20220922143911.zip.
      2022-09-22 14:39:15 : Files uploaded successfully to Woodburn Insurance under WebDAV themes collection.
      2022-09-22 14:39:19 : Export of the theme has been completed, Please refer this file for more details - store/outputFiles/themes/backup/xmlfile/Output-20220922143919.xml.
      2022-09-22 14:39:19 : Theme registration has been completed, Please refer this file for more details - store/outputFiles/themes/Output-20220922143919.xml.
      2022-09-22 14:39:19 : Deploy theme execution successful.
      2022-09-22 14:39:19 : 
      Theme WebDAV deployment successful.
      Theme Registration successful.
      ```

4. Verify your theme by going to the Theme Manager and your theme should still be here.
![Verify Themes](../../../../images/19themes_verify.png)

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/themes.html)."

## Related Pages
   - [Manually exporting the your DX Site Page Hierarchy](manual_export_site_page_hierarchy.md)
   - [How to deploy Theme](import_theme.md)