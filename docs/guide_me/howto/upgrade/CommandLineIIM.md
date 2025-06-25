# Command line syntax to install fixes using IBM Installation Manager

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

This article provides sample command syntax for installing Digital Experience fixes using IBM Installation Manager.
## Instructions

If you have any questions about which parameters to pass when installing or uninstalling a package, use `imcl.exe -c` and respond to the prompts. See the example below.

For detailed information on Combined Cumulative Fix (CF) installation, refer to the [HCL Digital Experience documentation](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/install/traditional/cf_install/ccf_95_standalone/).

**Installation Manager command line to list installed packages:**

```
imcl listInstallPackages -long`
```

If you prefer to use `imcl` in **console mode**, review the steps below:

1.  **Execute the Console Command:**
```
    `/opt/HCL/InstallationManager/eclipse/tools/imcl -c`
```

2.  **Navigate Options:**
    Enter the letter or number that corresponds with the option you want to select.

3.  **Add iFix Repository:**
    First, add the iFix as a repository. To do this:
    * Select option **(P)** for Preferences.
    * Follow the prompts in the command window.

    For the repository location, **point to the ZIP file**, for example:
    `/tmp/8.5.0.0-WP-IFPH06370-CF15.zip`

4.  **Apply the iFix:**
    After adding the repository, use the Update option **(U)** in the main menu to apply the iFix.

    * **Note on Passport Advantage Credentials:** There is a point in the installation where IM asks for credentials to connect to Passport Advantage. If this occurs, hit Cancel **(C)** several times to continue. The installer should eventually bypass these prompts and proceed with the installation.

5.  **Generate a Response File (Optional):**
    After the installation, a **Generate (G)** option will be prompted to generate a response file. This option can be used if you wish to create a response file for a silent installation later.

6.  **Apply the Fix (Alternative/Confirmation):**
    On the same prompt, there is also the Update **(U)** option to actually apply the fix. This allows you to install the iFix using console mode or through a response file.