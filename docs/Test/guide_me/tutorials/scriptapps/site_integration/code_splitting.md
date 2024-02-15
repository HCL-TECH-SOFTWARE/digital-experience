# Code-Splitting

## Overview

### What You Will Learn In This Tutorial
- What is Code Splitting
- How to Split Code bundle 
- When or when not to split the code bundle

---

## What is Code Splitting
!!!tip "What is code splitting"
    See the detailed information from WebPack site [here](https://webpack.js.org/guides/code-splitting/).

---

## How to Split Code Bundle

Below is a sample code for javascript and stylesheet to be used as an entry point file for splitting a code bundle.

=== "javascript.js"

    ```js
    console.log("Hello World!");
    ```

=== "stylesheet.scss"

    ```scss
    body {
      min-height: 100vh;
      width: 100vw;
    }
    ```

  - Firstly, add an additional entry file to the webpack configuration that will be bundled separately from the main code bundle. 
  
    !!!tip "Recommended"
        Create a common file configuration for both development and production build to share entries and other common configurations.

    === "webpack.common.js"

        ```js
        ...
        module.exports = {
            entry: {
                /* Main File Entry */
                main: "./src/index.js",

                /*  Css File Entry */
                stylesheetEntry: path.resolve(__dirname, 'path/to/stylesheet.scss')

                /* Javascript File Entry */
                javascriptEntry: path.resolve(__dirname, 'path/to/javascript.js')

            },
            ...
        };

        ```

    === "webpack.dev.js"

        ```js
        /* Import common.js */        
        const common = require('./webpack.common'); 
        /* Import webpack merge plugin */
        const { merge } = require('webpack-merge');

        /* This will merge configurations from common to dev */
        module.exports = merge (common, {
            mode: "development",
            devtool: 'eval',
            output: {
                filename: "[name].bundle.js",
                path: path.resolve(__dirname, "dist-dev"),
            }
            ...
        });
        ```

    === "webpack.dx-scriptapp.js"

        ```js
        /* Import common.js */        
        const common = require('./webpack.common'); 
        /* Import webpack merge plugin */
        const { merge } = require('webpack-merge');

        /* This will merge configurations from common to prod */
        module.exports = merge(common, {
          mode: "production",
          output: {
              filename: "[name].[contenthash].bundle.js",
              path: path.resolve(__dirname, "dist-dx-scriptapp")
          },
          ...
        });
        ```

  - Remove all javascript or stylesheet import code from the Script Application to ensure that codes are not duplicated upon bundling. 

    !!!note     
        The new entrypoints (ie. stylesheetEntry and javascriptEntry) will be automatically added when running `npm start` or `npm run build` in the index.html of the build output.

      ```
      import { ReactV18 } from 'dxmodule';
      import App from './App';
  
      /* Remove the lines below */
      /* stylsheet */
      import 'path/to/stylesheet.scss';
      /* javascript */
      import js from 'path/to/javascript.js';
  
      const { ReactDOM, React } = ReactV18;
  
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      ```

---

## When or when not to split the css code bundle
!!!tip "When or when not to split the css code bundle"
    Only split the css code when it is not directly coupled with a react component.

    When to split the code bundle: The css selectors from global.scss is not directly integrated to a specific component.

    ``` 
    import { ReactV18 } from 'dxmodule';
    import App from './App';

    const { ReactDOM, React } = ReactV18;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
        <App />
        </React.StrictMode>
    );
    ```

    When not to split the code bundle: The css selectors are being used as className for the React component.

    ```
    /* Imported css file */
    import InsuranceClaimSummaryItem from './_InsuranceClaimSummaryItem.css';

    function InsuranceClaimSummary(props) {
      ...
      /* InsuranceClaimSummaryItem's css selector */
      const className = styles['insurance-claim-summary'] +
        (props.className ? ` ${props.className}` : '');

      return (
        <section className={className}>
          <h2 className={styles['section-header']}>
            { intl.get('MY_BENEFITS_CLAIMS_SECTION_HEADER') }
          </h2>

          <div className={styles['claims-list']}>
            {props.claims.map(claim => (
              <InsuranceClaimSummaryItem
                key={claim.id}
                claim={claim}
              />
            ))
            }
          </div>
        </section>
      );
    }
    ```

    