# Manual EAR File Upload
## Prepare for Manual Upload

=== "MacOS or Linux"

    ```bash
    ./gradlew ear
    ```
=== "Windows"

    ```bash
    gradlew.bat ear
    ```

Sample successful gradle _ear_ task log:

   ```bash
   > Task :npmSetup
   added 1 package, and audited 202 packages in 3s
   11 packages are looking for funding
     run `npm fund` for details
   found 0 vulnerabilities
   > Task :npmInstallSubModule01
   added 167 packages, and audited 168 packages in 20s
   24 packages are looking for funding
     run `npm fund` for details
   found 0 vulnerabilities
   > Task :npmBuildSubModule01
   > webapp-dx-module@1.0.0 build-dxsubmodule
   > webpack --config  webpack.dxmodules.js
   assets by info 209 KiB [immutable]
     asset 007b2705c0a8f69dfdf6.png 69.2 KiB [emitted] [immutable] [from: node_modules/smart-webcomponents-react/source/styles/images/flags.png]
     asset 75a2e72c473f568f06e0.eot 46.4 KiB [emitted] [immutable] [from: node_modules/smart-webcomponents-react/source/styles/font/smart-icons.eot]
     asset 998692c57524bcfca735.ttf 46.2 KiB [emitted] [immutable] [from: node_modules/smart-webcomponents-react/source/styles/font/smart-icons.ttf]
     asset 561238502ed7d8ebb9bf.woff 25.8 KiB [emitted] [immutable] [from: node_modules/smart-webcomponents-react/source/styles/font/smart-icons.woff]
     asset ff14b8dae29e19ca9a56.woff2 21.4 KiB [emitted] [immutable] [from: node_modules/smart-webcomponents-react/source/styles/font/smart-icons.woff2]
   assets by chunk 2.7 MiB (name: dxmodules)
     asset dxmodules.bundle.css 1.56 MiB [emitted] (name: dxmodules)
     asset dxmodules.bundle.js 1.14 MiB [emitted] [minimized] (name: dxmodules) 1 related asset
   Entrypoint dxmodules 2.7 MiB = dxmodules.bundle.css 1.56 MiB dxmodules.bundle.js 1.14 MiB
   orphan modules 1.65 MiB (javascript) 209 KiB (asset) 1.01 KiB (runtime) [orphan] 27 modules
   runtime modules 670 bytes 3 modules
   built modules 1.23 MiB (javascript) 1.56 MiB (css/mini-extract) [built]
     javascript modules 1.23 MiB
       modules by path ./node_modules/ 1.13 MiB 9 modules
       dll dxmodules 12 bytes [built] [code generated]
       ./modules-index.js + 2 modules 85.3 KiB [built] [code generated]
       ./common/data/data.js 14.7 KiB [built] [code generated]
     css modules 1.56 MiB
       modules by path ./node_modules/smart-webcomponents-react/source/styles/components/*.css 310 KiB
         css ./node_modules/css-loader/dist/cjs.js!./node_modules/smart-webcomponents-react/source/styles/components/smart.table.css 300 KiB [built] [code generated]
         css ./node_modules/css-loader/dist/cjs.js!./node_modules/smart-webcomponents-react/source/styles/components/smart.accordion.css 10.4 KiB [built] [code generated]
       css ./node_modules/css-loader/dist/cjs.js!./node_modules/smart-webcomponents-react/source/styles/smart.default.css 1.26 MiB [built] [code generated]
       css ./node_modules/css-loader/dist/cjs.js!./styles-index.css 1 bytes [built] [code generated]
   webpack 5.74.0 compiled successfully in 11919 ms
   > Task :buildAllSubModules
    Task buildAllSubModules Done
   BUILD SUCCESSFUL in 1m 42s
   10 actionable tasks: 10 executed
           
   ```

## Manually upload the EAR file to WebSphere

1. Check the EAR file generated in the build/libs folder.
2. Login to your WebSphere console.
3. Navigate to the new application window by opening the **Application** tab in the left-hand side and then click the **New Application** link.
   ![Upload to WAS](../../images/17WASUpload1.png)
4. Click the **New Enterprise Application** link.
5. Click the **Browse** button to select the newly generated EAR file in the new directory 'build/libs'.
   ![Upload to WAS](../../images/17WASUpload2.png)
6. For now, you can click the next buttons as you go through the Install New Application process.
7. Click the **Finish** button when you arrive in the last step.
   ![Upload to WAS](../../images/17WASUpload3.png)
8. The upload progress will be shown next.
   ![Upload to WAS](../../images/17WASUpload4.png)
9. When it is done, click the **Save** link near the bottom.
   ![Upload to WAS](../../images/17WASUpload5.png)
