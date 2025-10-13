---
id: create-and-deploy-script-app
title: Creating and Deploying DX Script Applications
---

# Creating and Deploying DX Script Applications

This guide will walk you through the process of creating a modern script application for HCL DX using the create-dx-script-app tool, and then building and deploying a sample Store Locator application.

## Introduction to create-dx-script-app

create-dx-script-app is a modular toolkit designed to scaffold modern React applications that integrate seamlessly with the HCL Digital Experience platform. It provides ready-made templates and configurations to accelerate your development workflow.

### Key Features

- **Ready-made Templates:** JavaScript and TypeScript React templates with optimal configurations
- **Developer Experience:** Preconfigured ESLint, Vite, and HMR for rapid development
- **DX Integration:** Built-in deployment scripts and HCL DX-specific configurations
- **Environment Management:** Flexible configuration for different deployment environments
- **Modular Architecture:** Core logic separated from templates for easy maintenance

## Prerequisites

Before you begin, make sure you have:

- **Node.js ≥ 20.19**
- **npm ≥ 9.6**
- **HCL DX Server** (accessible for deployment)

## Part 1: Creating a New Script Application

### 1. Initialize a New Project

The recommended way to create a new script application is using the npm create command:

```bash
npm create dx-script-app
```

This will launch an interactive wizard that guides you through project creation.

### 2. Follow the Interactive Prompts

The wizard will ask you several questions:

- **Project name:** Choose a name for your application
- **Template:** Select either JavaScript or TypeScript (TypeScript is recommended for larger projects)
- **Additional features:** You may be prompted to select optional features

### 3. Configure Your Environment

After scaffolding, navigate to your project directory:

```bash
cd your-project-name
```

Open the `.env.local` file in your project and configure your HCL DX connection settings:

```env
# HCL DX connection settings
DX_TARGET=http://localhost:10039/wps/portal
DX_PROTOCOL=https
DX_HOSTNAME=your-dx-hostname
DX_PORT=443
DX_USERNAME=your-username
DX_PASSWORD=your-password
```

### 4. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 5. Start Development Server

Launch the development server with hot module replacement:

```bash
npm run dev
```

Your application will be running at http://localhost:3000.

## Part 2: Building and Deploying the Nex Haven Store Locator Sample

The Store Locator sample demonstrates best practices for DX script applications, featuring:

- Material UI components
- OpenStreetMap integration
- Interactive store search functionality
- Responsive layout design
- TypeScript and Vite integration

### 1. Clone the Repository

```bash
git clone https://git.cwp.pnp-hcl.com/websphere-portal-incubator/create-dx-script-app.git
cd create-dx-script-app/samples/nex-haven-store-locator-sample
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Edit the `.env.local` file with your DX server details:

```env
DX_TARGET=https://your-dx-server.com/wps/portal
DX_PROTOCOL=https
DX_HOSTNAME=your-dx-hostname
DX_PORT=443
DX_USERNAME=your-username
DX_PASSWORD=your-password
DX_SITE_AREA=/Nex Haven/About Us  # Target site area in Nex Haven
```

### 4. Local Development (Optional)

To test the application locally before deploying:

```bash
npm run dev
```

This will start a development server with hot module replacement at http://localhost:3000.

### 5. Build the Application

Build the production-ready bundle:

```bash
npm run build
```

This creates optimized files in the `dist` directory.

### 6. Deploy to DX Server

Deploy the application to your HCL DX server:

```bash
npm run dx-deploy
```

This command will:
1. Authenticate with your DX server
2. Upload the built application to the Script Application Library
3. Place it in the site area specified in your environment configuration

Under the hood, the deployment process uses DXClient's Script Application deployment capabilities. For more detailed information about DXClient's Script Application commands, options, and requirements, refer to the [DXClient Script Application documentation](../../dxclient/dxclient_artifact_types/scriptapplications.md).

## Part 3: Integrating the Store Locator in the Nex Haven Site

**Prerequisite:** The Nex Haven Site must be available on your DX Server. If not, follow the [guide to create the sample site](https://opensource.hcltechsw.com/dx-blueprint-storybook/latest/?path=/docs/how-to-create-the-sample-site--documentation).

### 1. Add the Store Locator to the About Us Page

After deployment, add the Store Locator script application to the `About Us` site area:

1. Navigate to the `About Us` page in the Nex Haven site
2. Enter edit mode
3. Find an appropriate section to add the script application
4. Add the deployed Store Locator script application

### 2. Enhance Integration with Text Break Component

For better visual integration:

1. Insert a [`Text Break` Component](https://opensource.hcltechsw.com/dx-blueprint-storybook/230.0.0/?path=/story/components-general-text-break--text-break) from Blueprint Components above the Store Locator
2. Configure the Text Break with:
   - **Title:** Find the nearest store and start exploring
   - **Subtitle:** Select a location from the list, or filter by typing in the field.
   - **Background color:** 241 242 245
   - **Text color:** 28 28 26
   - **Align:** left

### 3. Review the Final Result

Exit edit mode to see the fully integrated Store Locator application within your Nex Haven site.

## Customizing Your Script Application

### Proxy Configuration

The generated projects include pre-configured proxy settings to handle API requests during development:

- `/dx` → Routes to the DX Portal
- `/api/wcm` → Routes to the WCM API

You can customize these in your project's `vite.config.js/ts` file:

```javascript
'/your-prefix': {
  target: 'http://your-target-url.com',
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/your-prefix/, ''),
}
```

### Environment Configuration

Set custom API endpoints using environment variables:

```bash
# In .env.local file
DX_TARGET=https://your-dx-server.com/wps/portal
WCM_API_TARGET=https://your-api-server.com/dx/api/wcm/v2/explorer

# Or at runtime
DX_TARGET=https://your-dx-server.com/wps/portal npm run dev
```

To deploy to different environments (dev, test, prod):

```bash
# Create environment-specific files (.env.dev, .env.uat, .env.prod)
# Then deploy using:
DX_ENV_FILE=.env.uat npm run dx-deploy
```

## Advanced Usage

### Building and Using Locally

If you need to customize the create-dx-script-app tool itself:

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

### Deployment Issues

If you encounter issues during deployment:

1. Verify your DX server credentials in `.env.local`
2. Check that your DX server is accessible from your development machine
3. Ensure the site area specified in `DX_SITE_AREA` exists on your DX server
4. Review the console output for specific error messages

### Development Issues

If you encounter issues during development:

1. Verify Node.js and npm versions meet the requirements
2. Clear your npm cache: `npm cache clean --force`
3. Delete the `node_modules` directory and run `npm install` again
4. Check browser console for JavaScript errors

## Resources

- [create-dx-script-app Repository](https://git.cwp.pnp-hcl.com/websphere-portal-incubator/create-dx-script-app)
- [DXClient Script Application Documentation](../../dxclient/dxclient_artifact_types/scriptapplications.md)
- [Nex Haven Site Documentation](https://help.hcl-software.com/digital-experience/9.5/latest/build_sites/nex_haven/)
- [DX Blueprint Storybook](https://opensource.hcltechsw.com/dx-blueprint-storybook/)
- [Script Application Security](../../script_application/script_application_security/access_to_script_app_lib_sitearea/acc_lib.md)