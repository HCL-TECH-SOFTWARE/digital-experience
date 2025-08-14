# Build and Deploy DX Modules

1. Build and deploy the DX module with the following command. Change the `{username}` and `{password}` with the proper admin credentials.

## Uploads via DXClient

=== "On MacOS or Linux"

    ```bash
    ./gradlew deployDxModule -DdxUsername={username} -DdxPassword={password}
    ```

=== "On Windows "

    ```bash
    gradlew.bat deployDxModule -DdxUsername={username} -DdxPassword={password}
    ```

   Sample successful _deployDxModule_ log:

   ```bash
        > Task :npmInstallDXModule
        up to date, audited 167 packages in 932ms
        24 packages are looking for funding
          run `npm fund` for details
        found 0 vulnerabilities
        > Task :npmBuildDxModule
        > webapp-dx-module@1.0.0 build-dxmodules
        > webpack --config  webpack.dxmodules.js
        asset dxmodules.bundle.js 137 KiB [compared for emit] [minimized] (name: dxmodules) 1 related asset
        asset dxmodules.bundle.css 97 bytes [compared for emit] (name: dxmodules)
        Entrypoint dxmodules 137 KiB = dxmodules.bundle.css 97 bytes dxmodules.bundle.js 137 KiB
        orphan modules 2.89 KiB (javascript) 937 bytes (runtime) [orphan] 8 modules
        runtime modules 670 bytes 3 modules
        built modules 143 KiB (javascript) 96 bytes (css/mini-extract) [built]
          modules by path ./node_modules/ 142 KiB
            modules by path ./node_modules/react-dom/ 131 KiB 3 modules
            modules by path ./node_modules/react/ 6.94 KiB
              ./node_modules/react/index.js 190 bytes [built] [code generated]
              ./node_modules/react/cjs/react.production.min.js 6.75 KiB [built] [code generated]
            modules by path ./node_modules/scheduler/ 4.33 KiB
              ./node_modules/scheduler/index.js 198 bytes [built] [code generated]
              ./node_modules/scheduler/cjs/scheduler.production.min.js 4.14 KiB [built] [code generated]
          dll dxmodules 12 bytes [built] [code generated]
          ./modules-index.js 764 bytes [built] [code generated]
          css ./node_modules/css-loader/dist/cjs.js!./styles-index.css 96 bytes [built] [code generated]
        webpack 5.74.0 compiled successfully in 9087 ms
        > Task :deployDxModule
        cd build/libs/
        dxclient deploy-application --dxUsername **** --dxPassword **** --dxConnectUsername **** --dxConnectPassword **** --applicationFile Reactv18r2.ear --applicationName Reactv18r2 --dxProtocol https --hostname localhost --dxPort 10041 --dxProfileName wp_profile
        BUILD SUCCESSFUL in 1m 41s
        10 actionable tasks: 6 executed, 4 up-to-date
   ```

2. If you intend to manually upload the EAR file, follow this [guide](manual_ear_upload.md) and skip the next step below.
3. In case the _deployDxModule_ task returned an error, check the dxclient logs in build/libs/store/logs/ folder.
4. Please read the [Important Things to Note](../post-deployment/important_things_to_note.md).
5. Verify and link the DX Module to a DX Theme. Follow this [guide](../post-deployment/verify_link_module_to_theme.md).
