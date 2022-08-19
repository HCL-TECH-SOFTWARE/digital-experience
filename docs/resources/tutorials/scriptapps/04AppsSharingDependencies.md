# How To Deploy Multiple Apps with Shared Dependencies

## Overview
This shows how to deploy multiple React Script Apps with common dependencies. [Webpack](https://webpack.js.org/) is used to package the React Script Apps and node dependencies.


## Setup

1. Refer to the guide below on how to create/setup a react script to exclude its dependencies:

   a. [How to deploy a React Script App excluding its dependencies](../03AppsExcludingDependencies/README.MD).

   b. [How to create and deploy a React Script App using Create React App excluding its dependencies](../01WebpackWithDependencies/README.md)

2. To deploy the app scripts: Execute the npm script dx-deploy-app, pre-set with the DX admin username and password.

   npm install
   npm run build
   dxUsername=<username> dxPassword=<password> npm run dx-deploy-app

3. Refer to this [guide](../02DependenciesAsModule/README.MD) on how to deploy the common dependencies to DX Module for the script apps to work properly.

## Important note:
### Use a different ReactDOM render container for each script apps.

✅ Update sample-app-1's [index.html](./sample-app-1/src/index.html) and [index.jsx](./sample-app-1/src/index.jsx) different from sample-app-2.

❌ Using the same react entry point will cause a conflict to other script apps on the same page.

