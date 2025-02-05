# Command line syntax to install fixes using IBM Installation Manager

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

Sample command syntax to install Digital Experience fixes using IBM Installation Manager

## Instructions

If any questions about what parameters to pass to install/uninstall a package, use " imcl.exe -c " and respond to the prompts, see below.

[Combined Cumulative Fix (CF) Installation](https://help.hcl-software.com/digital-experience/9.5/CF224/deployment/install/traditional/cf_install/ccf_95_standalone/)

**Installation Manager command line to list installed packages:**

`imcl listInstallPackages -long`

If you prefer to try icml in **console mode** review the steps below:

`/opt/HCL/InstallationManager/eclipse/tools/imcl -c`

Then enter the letter or number that corresponds with the option you want to select.

First you'll need to add the iFix as a repository. To do this, select option **(P)** for Preferences and follow the prompts in the command window.

For the repository location, **point to the ZIP file**, like this:

`/tmp/8.5.0.0-WP-IFPH06370-CF15.zip`

After adding the repository, use the Update option **(U)** in the main menu to apply the iFix.

There is a point in the installation where IM asks for credentials to connect to PassPort Advantage. If so, then hit Cancel **(C)** several times to continue.
It eventually got passed all of the prompts and proceeded with the installation.

Then an Generate **(G)** option will be prompted to generate a response file.

This can be used, if it is wanted to generate a response file for trying a silent installation later.

On the same prompt, there is also the Update **(U)** option to actually apply the fix.

This allows to install the iFix using console mode or through a response file.
