# Styling (CSS and SCSS)

## Overview

### What You Will Learn In This Tutorial
 - Adding styles to DX Themes
 - Adding third-party library CSS styles and custom styles in DX Modules
 - Adding styles in DX Script Applications

!!!tip "Recommended"
    Learn how to setup your own Script Applications, Themes, and DX Modules by following the [`WoodBurnInsuranceCompact` sample](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps).

---

<!-- ### How To Build and Deploy Script Applications
!!!tip "Build and Deploy Script Applications"
    Follow the steps [here](../../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).

### How to Build and Deploy DX Modules
!!!tip "Build and Deploy DX Modules"
    Follow the steps [here](../../common-setup//build-and-deploy/build_and_deploy_dx_modules.md).

### How to Build and Deploy Themes
!!!tip "Build and Deploy Themes"
    Follow the steps [here](./import_export_site/export_theme.md).


--- -->

## Adding styles to DX Themes

!!!note "Before we continue"
    We need to have a Theme already setup. Follow the steps here to [setup your own Theme](import_export_site/manual_export_theme.md).

1. Go to the `css/` folder of the Theme. In our case, it's `WoodBurnInsuranceCompact/DemoDxSite/Woodburn Insurance/components/Woodburn Insurance/content/webdav/themes/Woodburn Insurance/css`.

2. Create **two (2) separate .css files**. Let's name it `custom.css` and `custom.css.uncompressed.css`.

    ```txt
    📦css
    ┣ ...
    ┣ 📜custom.css                  // This should be minified. You can use a minifier online.
    ┣ 📜custom.css.uncompressed.css // This is for debug mode. This should not be compressed.
    ┣ 📜master.css
    ┣ 📜master.css.uncompressed.css
    ┗ ...
    ```

    Let's define some classes that we will use later on a Script Application.

    === "custom.css.uncompressed.css"

        ```css
        .error-btn {
            border: 1px solid red;
            background-color: red;    
        }

        .error-text {
            color: #fff;
        }
        ```

    === "custom.css"
        
        ```css
        .error-btn{border:1px solid red;background-color:red}.error-text{color:#fff}
        ```

    !!! warning "Recommended"
        **Avoid adding styles directly on HTML Element** to prevent conflicts with the styles in Themes and on other Script Apps. Instead, use classes and ids selectors that is unique for the current Script Application you are on.

        ```scss
        button {
            background-color: red;  /* ❌ Bad */
        }

        .error-btn {
            background-color: red;  /* ✅ Good */
        }

        button.error-btn {
            background-color: red;  /* ✅ Still good */
        }
        ```

3. Import your `custom.css` and `custom.css.uncompressed.css` to `master.css` and `master.uncompressed.css` respectively.
   
    !!! example "master.css"
        ```css
        @import url("custom.css");
        ```

    !!! example "master.uncompressed.css"
        ```css
        @import url("custom.uncompressed.css");
        ```

4. To make your changes reflect on DX, [redeploy your Theme](import_export_site/import_theme.md).

5. On your Script Application, you can now use the custom classes from Themes on your script application/s.

    === "SomeComponent.jsx"
        ```js
        function SomeComponent() {
            return (
                <div>
                    {/* "error-btn" and "error-text" classes came from the Themes */}
                    <button class="error-btn">Error-y button</button>
                    <span class="error-text">Error!</span>
                </div>
            );
        }

        export default SomeComponent;
        ```



## Adding third-party library CSS styles and custom styles in DX Modules

!!!note "Before we continue"
    We need to have a DX Module already up and running. Follow the steps here to [setup your own DX Modules](../common-setup/optimized-scriptapps/dependencies_as_module.md).

Sometimes, we want to add styles on DX Modules if we want share styles among our script applications, or a third-party library on DX Modules requires you to import its styles on your script application/s. The following step guides us on how to add third-party library CSS styles and custom styles in our DX Module.

1. Open `styles-index.css` on one of your sub-modules. In our case, it'll be `WoodBurnInsuranceCompact/DxModule/SubModuleReact/styles-index.css`

2. Import styles that you need in your script applications in `styles-index.css`.

    For example, [smart-webcomponents-react](https://www.npmjs.com/package/smart-webcomponents-react) requires us to import its style to be able to use its components properly

    !!! example "styles-index.css"
        ```css
        @import 'smart-webcomponents-react/source/styles/smart.default.css';
        
        /* or in url format */
        @import url('smart-webcomponents-react/source/styles/smart.default.css');
        ```
    
    We can also add custom stylesheets on `styles-index.css`.

    !!! example "styles-index.css"
        ```css
        @import 'path/to/custom-style.css';
        
        /* or in url format */
        @import url('path/to/custom-style.css');
        ```

3. In your Script Application, add an additional entry on your dev server webpack configuration. In our case, it's `WoodBurnInsuranceCompact/WBILogin/webpack.dev.js`. Add an "entry" object. Its value is the path to the `styles-index.css`.

    !!! example "webpack.dev.js"
        ```js
        ...
        module.exports = {
            entry: {
                // Note: point this to the DX Module project
                dxmodulesstyles: path.resolve(__dirname, '../DxModule/SubModuleReact/styles-index.css'),
            },
            ...
        };
        ```

    !!! note "Tips:"
        For more information on why we need to do this, visit [Code Splitting](code_splitting.md).

4. To make your changes reflect on DX, redeploy your DX Modules either [manually](../common-setup/build-and-deploy/manual_ear_upload.md) or via [`dxclient`](../common-setup/build-and-deploy/build_and_deploy_dx_modules.md) *(recommended)*. Make sure to [re-deploy all dependent script applications](../common-setup/build-and-deploy/build_and_deploy_scriptapps.md) as well.

## Setting styles in DX Script Applications

!!!note "Before we continue"
    We need to have a Script Application already setup. Follow the steps here to [setup your own Script Application](../common-setup/optimized-scriptapps/sharing_dependencies.md), preferrably with DX Modules.

Setting styles in a Script Application is the same way you add styles to a React Application. In [Woodburn Insurance](../samples/woodburn_insurance_demo/index.md) Script Applications, we use SCSS Modules to style our components.

!!! example "Button.jsx" 
    ```js
    import styles from './Button.module.scss';

    class Button extends Component {
      render() {
        return <button className={styles.error}>Error Button</button>;
      }
    }
    ```

!!! example "button.module.scss" 
    ```scss
    .error {
        background-color: red;
    }
    ```

!!! warning "Recommended"
    **Avoid adding styles directly on HTML Element** to prevent conflicts with the styles in Themes and on other Script Apps. Instead, use classes and ids selectors that is unique for the current Script Application you are on.

    ```scss
    button {
        background-color: red;  /* ❌ Bad */
    }

    .error {
        background-color: red;  /* ✅ Good */
    }

    button.error {
        background-color: red;  /* ✅ Still good */
    }
    ```

!!!tip "Redeploy Script Application"
    To make your changes reflect on the DX, you need to [redeploy your Script Application](../common-setup/build-and-deploy/build_and_deploy_scriptapps.md).