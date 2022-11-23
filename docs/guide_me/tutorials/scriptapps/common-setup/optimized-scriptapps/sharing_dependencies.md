---
tags:
    - React
    - Script Application
    - Deploy
    - WebPack
hide: tags
---

# Script Applications Sharing Dependencies

This guide will detail the steps on how to deploy Script Applications bundled without its dependencies. [Webpack](https://webpack.js.org/){:target="_blank"} is used to package the React Script App.


!!! note
     The full deployment of the sample DX Module described in the guide [Dependencies as Module](dependencies_as_module.md) must be first completed. The generated DLL Manifest(i.e: dx-dll-manifest.json) in the DX Module folder is going to be referenced in this guide's instructions.

## Bundle a Script Application Without Its Dependencies

### Initial Project Creation
Do the following steps for each of your React Application.

1. Create or update the React app's package.json file.

    * Set the name of the project and the main JavaScript or TypeScript file.
    
    ```json
       {
           "name": "sample-app",
           ...
           "main": "./index.js",
           ...
       }
    ```

    * Add the dxclient parameters as config. Double-check and update the config values as needed. Also, add the 2 deploy-dx-app lines as-is among the scripts. The variables in the scripts will automatically pick up the values from environment variables and config.

    ```json
       {
           ...
           "config": {
              "dxclient": {
                  "wcmContentName": "EducSampleApp",
                  "wcmSiteArea": "Script Application Library/Script Applications",
                  "mainHtmlFile": "index.html",
                  "contentRoot": "./dist-dx-scriptapp",
                  "protocol": "https",
                  "hostname": "localhost",
                  "port": "10041"
              }
           },
           "scripts": {
               ...
               "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port",
               "dx-deploy-app-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %npm_package_config_dxclient_protocol% -hostname %npm_package_config_dxclient_hostname% -dxPort %npm_package_config_dxclient_port%",
               "dx-deploy-app-use-env": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $dxProtocol -hostname $dxHostname -dxPort $dxPort",
               "dx-deploy-app-use-env-win": "dxclient deploy-scriptapplication push -dxUsername %dxUsername% -dxPassword %dxPassword% -wcmContentName \"%npm_package_config_dxclient_wcmContentName%\" -wcmSiteArea \"%npm_package_config_dxclient_wcmSiteArea%\" -mainHtmlFile %npm_package_config_dxclient_mainHtmlFile% -contentRoot \"%npm_package_config_dxclient_contentRoot%\" -dxProtocol %dxProtocol% -hostname %dxHostname% -dxPort %dxPort%"
           },
           ...
       }
    ```

    * Remove the dependencies that are redundant with the DX Module's scope(i.e: React, ReactDom). Create a dependency linking the folder of the DX Module to the current project via a relative path.

    ```json
             "dependencies": {
                 "dxmodules": "file:../../02DependenciesAsModule"
             },
    ```

    * Add all the dev dependencies for the webpack bundler and all its plugins.

    ```js
             "devDependencies": {
                 "@babel/core": "^7.18.10",
                 "@babel/preset-env": "^7.18.10",
                 "@babel/preset-react": "^7.18.6",
                 "babel-loader": "^8.2.5",
                 "clean-webpack-plugin": "^4.0.0",
                 "copy-webpack-plugin": "^10.2.4",
                 "css-loader": "^6.7.1",
                 "css-minimizer-webpack-plugin": "^4.0.0",
                 "html-loader": "^4.1.0",
                 "html-webpack-plugin": "^5.5.0",
                 "mini-css-extract-plugin": "^2.6.1",
                 "mini-svg-data-uri": "^1.4.4",
                 "style-loader": "^3.3.1",
                 "ts-loader": "^9.3.1",
                 "typescript": "^4.7.4",
                 "webpack": "^5.74.0",
                 "webpack-cli": "^4.10.0",
                 "webpack-dev-server": "^4.9.3",
                 "webpack-merge": "^5.8.0"
             },
           ...
       }
    ```
    - If a homepage value is set in package.json, replace it with "./".
    ```js
      "homepage": "./",
    ```

2. Before using the NPM commands in the succeeding steps, set the PATH environment variable to prioritize the npm executable downloaded by the gradle npm plugin of the DX Module. This is necessary to be consistent with the one used during the DX Module build.

    ```bash
      cd <app-folder>
      export PATH=../../02DependenciesAsModule/.gradle/npm/npm-v8.15.0/bin/:$PATH
      which npm
      npm -v
    ```

3. Execute the npm install command.

    ```bash
      cd <app-folder>
      npm install
    ```

4. Find all the React Apps' JS and TS files (i.e: index.jsx, App.jsx, etc.), divert all imports of the libraries that are bundled in the DX Module (i.e: React, ReactDOM) to use the dxmodules alias set in package.json.
    ```
    // From
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    ```
    for React version 16
    ```
    // To
    import { ReactV16 } from 'dxmodules';
    const { React, ReactDOM } = ReactV16;
    ```
    for React version 18
    ```
    // To
    import { ReactV18 } from 'dxmodules';
    const { React, ReactDOM } = ReactV1;
    ```
5. Assign a unique id for each of the root html tags of the ScriptApps. Make sure to use the same id in the corresponding index.jsx within the same ScriptApp.
    - SampleAppReact16/src/index.html
      ```
        <div id="sample-app-react-16-root"></div>
      ```
      SampleAppReact16/src/index.jsx
      ```
        const root = ReactDOM.createRoot(document.getElementById('sample-app-react-16-root'));
      ```
    - SampleAppReact18/public/index.html
      ```
        <div id="sample-app-react-18-root"></div>]()
      ```
      SampleAppReact18/src/index.js
      ```
        const root = ReactDOM.createRoot(document.getElementById('sample-app-react-18-root'));
      ```


### Add Webpack Files
1. Add or update the webpack.common.js file. Set the main entry JS/TS file. Make sure to replace all old webpack bundlers (i.e: url-loader and file-loader) with the latest asset bundlers.

    ```js
        const MiniCssExtractPlugin = require("mini-css-extract-plugin");
        const svgToMiniDataURI = require('mini-svg-data-uri');
        
        module.exports = {
            entry: {
                main: "./src/index.jsx",
            },
            resolve: {
                preferRelative: true,
                extensions: [".js", ".jsx", ".module.scss"]
            },
            module: {
                rules: [
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env','@babel/preset-react'],
                                cacheDirectory: true,
                            }
                        }
                    },
                    {
                        test: /\.(htm|html)$/,
                        use: ['html-loader'],
                    },
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        test: /\.svg/,
                        type: 'asset/inline',
                        generator: {
                            dataUrl: content => {
                                content = content.toString();
                                return svgToMiniDataURI(content);
                            }
                        }
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
                        type: 'asset'
                    },
                ],
        
            }
        };
    
    ```

2. Add or update a webpack.dev.js file. This configuration is intended for the development cycle only (via npm start) and will not be used for DX deployment.

    ```js
        const path = require('path');
        const common = require('./webpack.common');
        const { merge } = require('webpack-merge'); // New import based on the 5.0.3 changelog
        const HTMLWebpackPlugin = require('html-webpack-plugin');
        
        module.exports = merge (common, {
            mode: "development",
            devtool: 'eval',
            entry: {
                // Note: point this to the DX Module project
                dxmodulesstyles: path.resolve(__dirname, '../DxModule/SubModuleReact16/styles-index.css'),
            },
            output: {
                filename: "[name].bundle.js",
                path: path.resolve(__dirname, "dist-dev"),
            },
            plugins: [
                new HTMLWebpackPlugin({
                    template: "./src/index.html"
                })
            ],
            module: {
                rules: [
                ]
            }
        });
    ```

    * Add a separate build entry pointing to the styles index file of the DX Sub Module. This will simulate the styling injection that will be done by DX in the HTML header of a DX page.
    
    ```json
          entry: {
            // Note: point this to the DX Module project
            dxmodulesstyles: path.resolve(__dirname, '../DxModule/SubModuleReact16/styles-index.css'),
          },
    ```

    * Configure the temporary output folder, make sure the folder is not the same as the one for the DX deployment build.

    ```json
          output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist-dev"),
          },
    ```  

    * Configure the HTML wrapper and assets that will be used when running the Script Application via npm start:

    ```json
        plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        ],
    ```

3. Add or update the webpack.dx-scriptapp.js file. This is the main bundler configuration that will be used for building the Script Application.

    ```js
    const path = require("path");
    const common = require("./webpack.common");
    const webpack = require('webpack');
    const { merge } = require('webpack-merge');
    const {CleanWebpackPlugin} = require("clean-webpack-plugin");
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const OptimizeCssAssetsPlugin = require("css-minimizer-webpack-plugin");
    const TerserPlugin = require("terser-webpack-plugin");
    const { DllReferencePlugin } = require('webpack');
    const HTMLWebpackPlugin = require('html-webpack-plugin');
    const CopyPlugin = require("copy-webpack-plugin");
    
    module.exports = merge(common, {
        mode: "production",
        output: {
            filename: "[name].[contenthash].bundle.js",
            path: path.resolve(__dirname, "dist-dx-scriptapp")
        },
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin(),
                new HTMLWebpackPlugin({
                    template: "./src/index.html",
                    minify: {
                        removeAttributeQuotes: true,
                        removeComments: true,
                        collapseWhitespace: false,
                    }
                })
            ]
        },
        plugins: [
            // remove copying of sp-config.json if you're not using DX WebDevToolkit
            new CopyPlugin({
                patterns: [
                    './sp-config.json',
                ]
            }),
            new webpack.IgnorePlugin({
                resourceRegExp: /dxmodules\//,
            }),
            new DllReferencePlugin({
                context: path.resolve(__dirname, '../WebAppDxModule'),
                manifest: require('../DxModule/SubModuleReact16/dx-dll-manifest-react16.json'),
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
            }),
            new CleanWebpackPlugin(),
        ],
        module: {
            rules: [
            ]
        },
    });
    
    ```
    * Point the DllReferencePlugin of the app needing 1st submodule (i.e: React v16) to the correct context folder and manifest.
    ```js
            new DllReferencePlugin({
                context: path.resolve(__dirname, '../DxModule/SubModuleReact16'),
                manifest: require('../DxModule/SubModuleReact16/dx-dll-manifest-react16.json'),
            }),
    ```
   * Point the DllReferencePlugin of the app needing 2nd submodule (i.e: React v18) to the correct context folder and manifest.
    ```js
            new DllReferencePlugin({
                context: path.resolve(__dirname, '../DxModule/SubModuleReact18'),
                manifest: require('../DxModule/SubModuleReact18/dx-dll-manifest-react18.json'),
            }),
    ```
    * Set the folder path and filenames for the bundled files. Make sure the output folder is the same as the one defined as config.dxclient.contentRoot in the package.json file.
    ```js
       output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist-dx-scriptapp")
       },
    ```
    * Add a minimizer for the optimization step. Some apps may not need the manifest, favicon nor the filename portion below.
    ```js
       optimization: {
           minimizer: [
              new OptimizeCssAssetsPlugin(),
              new TerserPlugin(),
              new HTMLWebpackPlugin({
                template: "./public/index.html",
                filename: "./index.html",
                favicon: "./public/favicon.ico",
                manifest: "./public/manifest.json",
                minify: {
                    removeAttributeQuotes: true,
                    removeComments: true,
                    collapseWhitespace: false,
                }
              })
           ]
       },
    ```
4. Deployments via DXClient is recommended and is sufficient. In case that you want to add the use of [DX WebDevToolkit](https://github.com/HCL-TECH-SOFTWARE/WebDevToolkitForDx) in your development cycle, you'll need to add a sp-config.json file.
   - SampleAppReact16/sp-config.json
   ```json
   {
     "wcmContentName": "SampleAppReact16"
   }
   ```
   - SampleAppReact18/sp-config.json
   ```json
   {
     "wcmContentName": "SampleAppReact18"
   }
   ```
   - If you want to skip using the DX WebDevToolkit, please remove the following in the webpack.dx-scriptapp.js file.
   - SampleAppReact16/webpack.dx-scriptapp.jsn and SampleAppReact16/webpack.dx-scriptapp.js
   ```js
              // remove copying of sp-config.json if you're not using DX WebDevToolkit
              new CopyPlugin({
                  patterns: [
                      './src/sp-config.json',
                  ]
              }),
   ```
5. Add if not yet included in the project, a tsconfig.json file.

    ```js 
       {
          "compilerOptions": {
            "outDir": "./dist/",
            "noImplicitAny": true,
            "module": "es6",
            "target": "es5",
            "allowJs": true,
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "esModuleInterop": true
          }
       }
    ```

### Test and Bundle
1. Test the app locally.
    ```bash
       cd <app-folder>
       npm start
    ```

2. Build the Script Application using the following commands:
    ```bash
       cd <app-folder>
       npm run build
    ```

## Deploy Script Application

Execute the npm script dx-deploy-app, pre-set with the DX admin username and password.

=== "MacOS or Linux"
    ```bash
    dxUsername=<username> dxPassword=<password> npm run dx-deploy-app 
    ```
=== "Windows"
    ```bash
    dxUsername=<username> dxPassword=<password> npm run dx-deploy-app-win
    ```

```bash 
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

