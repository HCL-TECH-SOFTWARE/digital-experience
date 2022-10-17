# How to Deploy Theme

## Deploy Theme

   1. Deploy your theme by running the following command.

    === "MacOS or Linux"

           ```bash
           # assumes other required parameters are already set via config file in store or via enviroment variables
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
           :: assumes other required parameters are already set via config file in store or via enviroment variables
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
         1. `xmlFile` should be pointing to your installTheme.xml which can be the one exported from [here](export_theme.md) or the one mentioned in [manual export](manual_export_theme.md).
            - `"Woodburn Insurance/components/Woodburn Insurance/content/xmlaccess/install/installTheme.xml"` if you are on Woodburn Insurance Demo
         2. `themeName` should be what is the theme name.
            - `"Woodburn Insurance"` if you are on Woodburn Insurance Demo
         3. `themePath` should be pointing to your exported theme zip which can be the one exported from [here](export_theme.md) or the one mentioned in [manual export](manual_export_theme.md).
            - This could be a uncompressed folder just like in the Woodburn Insurance Demo.
            - `"Woodburn Insurance/components/Woodburn Insurance/content/webdav/themes/Woodburn Insurance"` if you are on Woodburn Insurance Demo
         4. Ensure to place your correct credentials in the `{DXUSERNAME}` and `{DXPASSWORD}`.


   2. The output should look similar to this.
   
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

   3. Verify your theme by going to the Theme Manager and your theme should appear here.
![Verify Themes](../../../../images/19themes_verify.png)

!!!tip "See more detailed information [here](https://help.hcltechsw.com/digital-experience/9.5/containerization/themes.html)."

## Related Pages
   - [Exporting your theme from your system](export_theme.md)
   - [Manually exporting your Theme via Practitioner Studio](manual_export_theme.md)
