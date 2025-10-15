---
id: create-and-deploy-script-app
title: Creating and Deploying DX Script Applications
---

This guide will walk you through the process of creating a modern script application for HCL Digital Experience (DX) using the `create-dx-script-app` tool, and then building and deploying a sample Store Locator Script Application.

## Overview

`create-dx-script-app` is a modular toolkit designed to generate modern React applications that integrate seamlessly with the HCL DX platform. It provides ready-made templates and configurations to accelerate your development workflow.

This tool offers the following key features to streamline your Script Application development and deployment:

- Ready-made React templates built using JavaScript and TypeScript for optimal configuration
- Preconfigured ECMAScript Linter (ESLint), Vite, and Hot Module Replacement (HMR) for rapid development and improved developer experience
- Built-in deployment scripts and HCL DX-specific configurations for seamless integration
- Flexible configuration to support different deployment environments
- Modular architecture that separates core logic from templates for easy maintenance

## Prerequisites

Before you begin, make sure you have the following

- Installed Node.js version 20.19 or higher
- Installed Node Package Manager (npm) version 9.6 or higher
- An HCL DX server that is accessible for deployment

## Creating a new Script Application

Refer to the following steps to create a new Script Application using the `create-dx-script-app` tool.

1. Create a new Script Application project using the npm create command:

    ```bash
    npm create dx-script-app
    ```

    This will launch an interactive wizard that guides you through project creation.

2. Follow the interactive prompts and enter the following details:

    - **Project name:** Choose a name for your application
    - **Template:** Select either JavaScript or TypeScript. TypeScript is recommended for larger projects.
    - **Additional features:** Select optional features you may want for your application

3. After the Script Application is created, configure your environment.

    1. Navigate to your project directory using the following command:

        ```bash
        cd your-project-name
        ```

    2. Open the `.env.local` file in your project and configure your HCL DX connection settings:

        ```env
        # HCL DX connection settings
        DX_TARGET=http://localhost:10039/wps/portal
        DX_PROTOCOL=https
        DX_HOSTNAME=your-dx-hostname
        DX_PORT=443
        DX_USERNAME=your-username
        DX_PASSWORD=your-password
        ```

4. Install the required dependencies using the following command:

    ```bash
    npm install
    ```

5. Launch the development server with HMR using the following command:

    ```bash
    npm run dev
    ```

    Your application will be running at `http://localhost:3000`.

## Building and deploying the Nex Haven Store Locator sample

The Nex Haven Store Locator sample demonstrates best practices for DX script applications and includes the following features:

- Material UI components
- OpenStreetMap integration
- Interactive store search functionality
- Responsive layout design
- TypeScript and Vite integration

Refer to the following steps to build and deploy the Store Locator sample:

1. Clone the repository using the following command:

    ```bash
    git clone https://git.cwp.pnp-hcl.com/websphere-portal-incubator/create-dx-script-app.git
    cd create-dx-script-app/samples/nex-haven-store-locator-sample
    ```

2. Install the required dependencies using the following command:

    ```bash
    npm install
    ```

3. Configure your environment by editing the `.env.local` file with your DX server details:

    ```env
    DX_TARGET=https://your-dx-server.com/wps/portal
    DX_PROTOCOL=https
    DX_HOSTNAME=your-dx-hostname
    DX_PORT=443
    DX_USERNAME=your-username
    DX_PASSWORD=your-password
    DX_SITE_AREA=/Nex Haven/About Us  # Target site area in Nex Haven
    ```

4. (Optional) Test your application locally before deploying using the following command:

    ```bash
    npm run dev
    ```

    This will start a development server with HMR at `http://localhost:3000`.

5. Build the production-ready bundle using the following command:

    ```bash
    npm run build
    ```

    This creates optimized files in the `dist` directory.

6. Deploy the application to your HCL DX server using the following command:

    ```bash
    npm run dx-deploy
    ```

    This command authenticates DXClient's access with your DX server, uploads the built application to the Script Application Library, and places it in the site area specified in your environment configuration.

    The deployment process uses DXClient's Script Application deployment capabilities. For more detailed information about DXClient's Script Application commands, options, and requirements, refer to the [DXClient Script Application documentation](../dxclient/dxclient_artifact_types/scriptapplications.md).

## Integrating the Store Locator in the Nex Haven site

!!!note
    The Nex Haven site must be available on your DX server. Follow the guide in [Create The Sample Site](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/how-to-create-the-sample-site--documentation) to enable Nex Haven.

Refer to the following steps to integrate the Store Locator sample application in the Nex Haven site in your DX server:

1. Add the Store Locator Script Application to the **About Us** site area:

    1. In the **Nex Haven** site, navigate to the **About Us** page.
    2. Toggle **Edit Mode** to **ON**.
    3. Find an appropriate section to add the Store Locator application.
    4. Add the deployed Store Locator Script Application.

2. Enhance integration with using the Text Break component:

    1. Insert a [**Text Break** component](https://opensource.hcltechsw.com/dx-blueprint-storybook/230.0.0/?path=/story/components-general-text-break--text-break){target="_blank"} from Blueprint components above the Store Locator.
    2. Configure the following Text Break values:
        - **Title:** Find the nearest store and start exploring
        - **Subtitle:** Select a location from the list, or filter by typing in the field.
        - **Background color:** 241 242 245
        - **Text color:** 28 28 26
        - **Align:** left

3. Toggle **Edit Mode** to **OFF** see the fully integrated Store Locator application within your Nex Haven site.

## Customizing your Script Application

### Proxy Configuration

The generated projects include pre-configured proxy settings to handle API requests during development:

- `/dx`: Routes to the DX portal
- `/api/wcm`: Routes to the WCM API

You can customize these settings in your project's `vite.config.js/ts` file:

```javascript
'/your-prefix': {
  target: 'http://your-target-url.com',
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/your-prefix/, ''),
}
```

### Environment Configuration

If you want to set custom API endpoints using environment variables, run the following commands:

```bash
# In .env.local file
DX_TARGET=https://your-dx-server.com/wps/portal
WCM_API_TARGET=https://your-api-server.com/dx/api/wcm/v2/explorer

# Or at runtime
DX_TARGET=https://your-dx-server.com/wps/portal npm run dev
```

If you want to deploy the Script Application to different environments (dev, test, or prod), run the following command:

```bash
# Create environment-specific files (.env.dev, .env.uat, .env.prod)
# Then deploy using:
DX_ENV_FILE=.env.uat npm run dx-deploy
```

## Building and running the tool locally

If you need to customize the `create-dx-script-app` tool itself, run the following commands:

```bash
# Clone the repository
git clone https://git.cwp.pnp-hcl.com/websphere-portal-incubator/create-dx-script-app.git
cd create-dx-script-app/

# Install dependencies and build
npm install
npm run build
npm link

# Now you can run it locally
npm create dx-script-app
```

## Troubleshooting

If you encounter issues during deployment:

1. Verify your DX server credentials in `.env.local`.
2. Ensure your DX server is accessible from your development machine.
3. Ensure that the site area specified in `DX_SITE_AREA` exists on your DX server.
4. Review the console output for specific error messages.

If you encounter issues during development:

1. Verify if your installed Node.js and npm versions meet the requirements.
2. Clear your npm cache using the `npm cache clean --force` command.
3. Delete the `node_modules` directory and run `npm install` again.
4. Check your browser console for JavaScript errors.

???+ info "Related information"
    - [`create-dx-script-app` Repository](https://git.cwp.pnp-hcl.com/websphere-portal-incubator/create-dx-script-app){target="_blank"}
    - [DXClient Script Application Documentation](../dxclient/dxclient_artifact_types/scriptapplications.md)
    - [Nex Haven Site Documentation](../../../build_sites/nex_haven.md)
    - [DX Blueprint Storybook](https://opensource.hcltechsw.com/dx-blueprint-storybook/){target="_blank"}
    - [Script Application Security](../../script_application/script_application_security/access_to_script_app_lib_sitearea/acc_lib.md)