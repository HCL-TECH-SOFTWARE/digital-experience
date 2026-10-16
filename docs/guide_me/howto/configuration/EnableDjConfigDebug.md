# How to enable Dojo debugging in the browser console

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

The Dojo toolkit used within HCL DX relies on the `djConfig` global configuration object to manage runtime behavior and logging levels. Enabling `djConfig.isDebug` instructs the framework to route diagnostic messages, module loading details, and execution traces directly to the browser console. This article explains how to enable `djConfig.isDebug` output to the browser console.

## Instructions

To enable `djConfig.isDebug` output to the browser console, perform the following steps:

1. Open the custom JavaScript file or theme layout template where Dojo is loaded.
2. Insert the `djConfig` definition before loading the core Dojo loader script (typically `dojo/dojo.js` or the equivalent script that loads Dojo in your theme):

    ```javascript
        window.djConfig = {
        isDebug: true
    };
    ```

    !!!note
        Declare the `djConfig` object prior to the execution of `dojo.js`. Defining `djConfig` after Dojo initializes prevents debug logs from outputting to the console.

3. Save the file changes and refresh the page in the browser.
4. Open your browser's **Developer Tools** and select the **Console** tab.
5. Confirm that Dojo initialization statements and log outputs appear in the console.
