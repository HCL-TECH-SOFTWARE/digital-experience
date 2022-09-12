# Build and Deploy Script Applications

Execute the npm script dx-deploy-app, pre-set with the DX admin username and password.

## Uploads via DXClient
   ```bash
   dxUsername=<username> dxPassword=<password> npm run dx-deploy-app 
   ```

   Sample successful _deployDxModule_ log:

   ```bash
        dxUsername=<username> dxPassword=<password> npm run dx-deploy-app 
            > sample-app@1.0.0 dx-deploy-app
            > dxclient deploy-Script Applicationlication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port
        
            2022-08-19 22:57:36 : Begin content push to Portal.
            2022-08-19 22:57:36 : WCM content ID: .
            2022-08-19 22:57:36 : WCM Content Path: .
            2022-08-19 22:57:36 : WCM Content Title: .
            2022-08-19 22:57:36 : Main HTML file: index.html.
            2022-08-19 22:57:36 : PrebuiltZip path does not exist.
            2022-08-19 22:57:36 : Archive file:
        
                    /var/folders/8x/4zt3nlmn6sg1574fb4pdz56w0000gp/T/tmp--31802-W4L6zoRtZi5a-.zip
                    (13834 bytes in 4 files) 
        
                    4fe75d5f9adb18067b85.ico
                    index.html
                    main.bfc69d9380a37f7c3db2.bundle.js
                    sp-config.json.
            (node:31802) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
            (Use `node --trace-warnings ...` to show where the warning was created)
            2022-08-19 22:57:39 : Content push was successful.
            2022-08-19 22:57:39 : End content push to Portal.
            2022-08-19 22:57:39 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/main.bfc69d9380a37f7c3db2.bundle.js"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"8ce2958e-86b0-4700-b6f1-ef7542c10f86"}}. 
   ```

If there's a deployment error, check the DXClient logs in the &lt;app-folder&gt;/store/logs/logger.log file.

## Add Application to a Page

1. Prepare your target DX page that will host the Script Application. Follow this [guide](../post-deployment/prepare_dx_page.md).
2. Add the Script Application (matching the wcmContentName in the package.json config) into the target DX page. Follow this [guide](../post-deployment/add_scriptapp_to_page.md).
