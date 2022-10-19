# Important Things To Note

## Generated DLL manifest

Take note of the location of the generated DLL manifest as configured in the DllPlugin section of submodule's webpack.<dxmodules>.js. The location and content of the manifest are critical as it is required to optimize and correctly build the dependent Script Applications.

   ```js
    entry: {
        dxmodules: './modules-index.js'
    },
    mode: "production",
    target: 'web',
    node: { global: true },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist-dx-module"),
        library: "[name]_[fullhash]"
    },
    plugins: [
        new DllPlugin({
            name: "[name]_[fullhash]",
            path: path.resolve(__dirname, "./dx-dll-manifest.json"),
            format: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
        })
    ],
   ```

## Generated Library Name

Take note of the generated library name (with the added fullhash) and the exported component aliases in the generated DLL manifest (dx-dll-manifest.json). Please keep in mind that even minor edits in the DX module will result to a modified fullhash in the library name that will then require the dependent Script Applications to be rebuilt and redeployed. It is recommended to keep the fullhash suffix in the webpack library name config mentioned in previous step.

   ```js
    {
      "name": "dxmodules_2a35376eb9d458555803",
      "content": {
        "./modules-index.js": {
          "id": 239,
          "buildMeta": {
            "tsLoaderDefinitionFileVersions": [
              "node_modules/terser-webpack-plugin/types/index.d.ts@0",
              "node_modules/terser-webpack-plugin/types/utils.d.ts@0",
              ...
              "node_modules/react/index.js@?",
              "node_modules/react-dom/client.js@?"
            ],
            "tsLoaderFileVersion": 0,
            "exportsType": "namespace"
          },
          "exports": [
            "ReactV18"
          ]
        }
      }
    }
   ```

## Deployment Descriptors

Any change in the aliases in both the entry config or in the output filenames in any of the SubModules Webpack config, will require corresponding changes to DX Module's deployment descriptor file src/main/config/war/WEB-INF/plugin.xml. The Javascript and styling files in the output folder dist-dx-module must correspond to the files listed in the  deployment descriptor. All @@auto-replaced-with-rootProject.name@@ tokens are dynamically replaced by the rootProject.name value set in settings.gradle.

   - webpack.react18.js or webpack.react16.js or webpack.dxmodules.js
   ```js
    module.exports = {
        entry: {
            react18: './modules-index.js'
        },
        ...
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "../dist-dx-module"),
            library: "[name]_[fullhash]"
        },
        ...
    } 
   ```
   - DxModule/src/main/config/war/WEB-INF/plugin.xml
   ```xml
    ...
    <module id="@@auto-replaced-with-rootProject.name@@">
        <contribution type="head">
            <sub-contribution type="js">
                <uri value="res:{war:context-root}/dxmodules.bundle.js"/>
                <uri type="debug" value="res:{war:context-root}/dxmodules.bundle.js"/>
            </sub-contribution>
        </contribution>
        <contribution type="head">
            <sub-contribution type="css">
                <uri value="res:{war:context-root}/dxmodules.bundle.css"/>
                <uri type="debug" value="res:{war:context-root}/dxmodules.bundle.css"/>
            </sub-contribution>
        </contribution>
    </module>
    ...
   ```
