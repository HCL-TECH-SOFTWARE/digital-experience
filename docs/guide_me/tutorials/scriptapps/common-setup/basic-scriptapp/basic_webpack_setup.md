---
tags:
    - React
    - Script Application
    - WebPack
hide: tags
---

# Build and Deploy using WebPack

## Overview

This guide describes the steps on how to deploy a built React app into DX to become a Script Application.

!!!tip "Ensure your system is set up properly. Please read the system pre-requisites [here](../../pre_requisites.md)."

!!! note
    Migration to [Webpack](https://webpack.js.org/) is optional and is intended as a preparation for advanced deployments. The sample WebPack configuration that is included below is intended for quick deployments, which combines all dependencies along with actual application files.
    
    For optimal loading of multiple Script Applications in a single page, custom Webpack bundling is needed. For more information, see [Optimized Script Applications](../optimized-scriptapps/index.md).

## How To Migrate Apps to use Webpack and Deploy as Script Application

Here are the steps on how to migrate React applications to use [Webpack](https://webpack.js.org/) as a bundler and then prepare it for deployments to DX to become a Script Application.

1. Create a webpack.common.js file. Update the main entry section to point to the correct index js/ts file .
   ```js
   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
   const svgToMiniDataURI = require('mini-svg-data-uri');
   
   module.exports = {
       entry: {
           main: "./src/index.js",
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
                   test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|ico)$/,
                   type: 'asset'
               },
           ],
   
       }
   };      
   ```

2. Create a webpack.dev.js file. Update the template, filename, favicon and manifest in the HTMLWebPackPlugin section (you may remove filename, favicon and manifest if your project does not have them).
   ```js
   const path = require('path');
   const common = require('./webpack.common');
   const { merge } = require('webpack-merge'); // New import based on the 5.0.3 changelog
   const HTMLWebpackPlugin = require('html-webpack-plugin');
   
   module.exports = merge (common, {
       mode: "development",
       devtool: 'eval',
       output: {
           filename: "[name].bundle.js",
           path: path.resolve(__dirname, "dist-dev"),
       },
       plugins: [
           new HTMLWebpackPlugin({
               template: "./public/index.html",
               filename: "./index.html",
               favicon: "./public/favicon.ico",
               manifest: "./public/manifest.json"
           })
       ],
       module: {
           rules: [
           ]
       }
   });
   ```

3. Create a webpack.dx-scriptapp.js file. Update the template in the HTMLWebPackPlugin section.
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
                   template: "./public/index.html",
                   minify: {
                       removeAttributeQuotes: true,
                       removeComments: true,
                       collapseWhitespace: false,
                   }
               })
           ]
       },
       plugins: [
           new CopyPlugin({
               patterns: [
                   './src/sp-config.json',
               ]
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

4. Update your project's package.json file.
    - If a homepage value is set in package.json, replace it with "./".
    ```js
      "homepage": "./",
    ```
    - Add the dxclient parameters as config. Double-check and update the config values as needed.
    ```json
    {
        ...
        "config": {
           "dxclient": {
               "wcmContentName": "EducSampleScriptApp01",
               "wcmSiteArea": "Script Application Library/Script Applications",
               "mainHtmlFile": "index.html",
               "contentRoot": "./dist-dx-scriptapp",
               "protocol": "https",
               "hostname": "localhost",
               "port": "10041"
           }
        },

        ...
    }
    ```
    - Modify the start and build scripts to use the webpack config files. Also, add the two(2) deploy-dx-app lines as-is among the scripts. The variables in the scripts will automatically pick up the values from environment variables and config.
    ```json
    {
        ...
        "scripts": {
            "start": "webpack-dev-server --config  webpack.dev.js --open",
            "build": "webpack --config  webpack.dx-scriptapp.js",
            ...
            "dx-deploy-app": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port",
            "dx-deploy-app-use-env": "dxclient deploy-scriptapplication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName \"$npm_package_config_dxclient_wcmContentName\" -wcmSiteArea \"$npm_package_config_dxclient_wcmSiteArea\" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot \"$npm_package_config_dxclient_contentRoot\" -dxProtocol $dxProtocol -hostname $dxHostname -dxPort $dxPort"
        },
        ...
    }
    ```
    - Add devDependencies required for the WebPack library and its plugins.
    ```json
    {
        ...
       "devDependencies": {
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

6. Test your React App in local browser:
    ```bash
        cd <app-folder>
        npm install
        npm start
    ```

7. Build your application as-usual:
    ```bash
        cd <app-folder>
        npm install
        npm run build
    ```

8. Execute the npm script dx-deploy-app, pre-set with the DX admin username and password.
    ```bash
        dxUsername=<username> dxPassword=<password> npm run dx-deploy-app 
    ``` 
    ```bash 
        > sample-app@0.1.0 dx-deploy-app
        > dxclient deploy-Script Applicationlication push -dxUsername $dxUsername -dxPassword $dxPassword -wcmContentName "$npm_package_config_dxclient_wcmContentName" -wcmSiteArea "$npm_package_config_dxclient_wcmSiteArea" -mainHtmlFile $npm_package_config_dxclient_mainHtmlFile -contentRoot "$npm_package_config_dxclient_contentRoot" -dxProtocol $npm_package_config_dxclient_protocol -hostname $npm_package_config_dxclient_hostname -dxPort $npm_package_config_dxclient_port
        2022-08-08 21:13:36 : Begin content push to Portal.
        2022-08-08 21:13:36 : WCM content ID: .
        2022-08-08 21:13:36 : WCM Content Path: .
        2022-08-08 21:13:36 : WCM Content Title: .
        2022-08-08 21:13:36 : Main HTML file: index.html.
        2022-08-08 21:13:36 : PrebuiltZip path does not exist.
        2022-08-08 21:13:36 : Archive file: 
        /var/folders/mp/bcmnxk3s0rbbj1cbbl0875bw0000gn/T/tmp--14373-oFwJoCUJU4yG-.zip
        (51965 bytes in 5 files) 
        131.d190506afae2cd09f1fd.bundle.js
        index.html
        main.269f6c0111b67c725c63.bundle.js
        main.269f6c0111b67c725c63.bundle.js.LICENSE.txt
        main.9a71fbc56a658baede15.css.
        2022-08-08 21:13:39 : Content push was successful.
        2022-08-08 21:13:39 : End content push to Portal.
        2022-08-08 21:13:39 : Body content: {"results":{"status":"success","importedFiles":{"file":[{"filename":"HTML/index.html"},{"filename":"JavaScript/main.269f6c0111b67c725c63.bundle.js"},{"filename":"JavaScript/131.d190506afae2cd09f1fd.bundle.js"},{"filename":"CSS/main.9a71fbc56a658baede15.css"}]},"skippedFiles":"","message":"The file that you selected was imported successfully.","contentId":"6fa0b659-7b18-499d-a8de-090a0e9f8987"}}.    
    ```

9. Check the DXClient logs in store/logs/logger.log file within your workspace.
10. Prepare your target DX page that will host the Script Application. Follow this [link](../post-deployment/prepare_dx_page.md).
11. Add the Script Application (note the wcmContentName in the package.json config) into the target DX test page. Follow this [link](../post-deployment/add_scriptapp_to_page.md).
