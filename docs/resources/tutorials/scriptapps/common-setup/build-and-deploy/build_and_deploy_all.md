# Build and Deploy the DX Module and All ScriptApps

1. Build and deploy the DX Module and All ScriptApps with the following command. Change the `{username}` and `{password}` with the proper admin credentials.

## Uploads via DXClient

=== "On MacOS or Linux"

    ```bash
    ./gradlew deployAll -DdxUsername={username} -DdxPassword={password}
    ```

=== "On Windows "

    ```bash
    gradlew.bat deployAll -DdxUsername={username} -DdxPassword={password}
    ```

   Sample successful _deployAll_ log:

   ```bash
    ...
    > Task :deployDxModule
    cd build/libs/
    dxclient deploy-application --dxUsername **** --dxPassword **** --dxConnectUsername **** --dxConnectPassword **** --applicationFile ReactNReactDOMv18r2.ear --applicationName ReactNReactDOMv18r2 --dxProtocol https --hostname localhost --dxPort 10041 --dxProfileName wp_profile
    ...
    ...
    > Task :deployAllScriptApps
     Task deployAllScriptApps Done
    
    > Task :deployAll
     Task deployAll Done
    
    BUILD SUCCESSFUL in 2m 17s
   ```
2. In case of errors, check the details in the DXClient logs in the
    - DX Module: DxModule/build/libs/store/logs/logger.log
    - 1st ScriptApp: <ScriptApp01>/store/logs/logger.log
    - 2nd ScriptApp: <ScriptApp02>/store/logs/logger.log

3. Please read the [Important Things to Note](../post-deployment/important_things_to_note.md).

4. Verify and link the DX Module to a DX Theme. Follow this [guide](../post-deployment/verify_link_module_to_theme.md).

5. Prepare your target DX page that will host the Script Application. Follow this [guide](../post-deployment/prepare_dx_page.md).

6. Add the Script Application into the target DX page. Follow this [guide](../post-deployment/add_scriptapp_to_page.md).
    - EducSampleScriptApp4A (from wcmContentName in <ScriptApp01>/package.json)
    - EducSampleScriptApp4B (from wcmContentName in <ScriptApp02>/package.json)
