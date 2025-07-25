# How to use command-line syntax for installing Fixes with IBM Installation Manager

## Applies to

> HCL Digital Experience version 8.5 and higher  

## Introduction

This article provides commands for installing HCL Digital Experience Fixes using IBM Installation Manager.  

## Instructions

If there are any questions about which parameters to pass when installing or uninstalling a package, use the command `imcl.exe -c` and respond to the prompts. An detailed example is described below. The parameter `-c` stands for console mode, which opens an interaction menu in text form. For detailed information on Combined Cumulative Fix (CF) installation, refer to the [Managing Interim Fixes for HCL Portal](../../../deployment/manage/manage_portal_using_iim/index.md){target="_blank"}.  

### Installation Manager command line to list installed packages

Use the following command to list installed packages:

```cmd
imcl listInstallPackages -long
```

### Work with the text based console mode (non GUI mode)

The IBM Installation Manager console mode can be opened with command

```bash
/opt/HCL/InstallationManager/eclipse/tools/imcl -c
```

As soon as the command is executed a text based menu will be displayed in the command line, showing possible options that can be selected by entering the letter or number that corresponds with the option that should be select.

#### Sample to add an iFix Repository in console mode

A repository of an iFix can be added with the following steps:  

1. Select option **(P)** for Preferences.  
2. Follow the prompts in the command window.  
3. For the repository location, point to the full qualified path and ZIP file name. For example:  

    ```input
    /tmp/8.5.0.0-WP-IFPH06370-CF15.zip
    ```

4. Apply the iFix:  
    After adding the repository, use the Update option **(U)** in the main menu to apply the iFix.

    * **Note on Passport Advantage Credentials:** During installation, IM might prompt for credentials to connect to Passport Advantage. If this occurs, repeatedly select Cancel **(C)** to continue. The installer should eventually bypass these prompts and proceed with the installation.

#### Generate a Response File in console mode (Optional)

After the installation, a **Generate (G)** option prompts you to generate a response file. Use this option to create a response file for a silent installation later.

#### Apply an iFix in console mode (Alternative/Confirmation)

The same prompt also offers the Update **(U)** option to apply the fix. Use this option to install the iFix using the console mode or through a response file.  
