# How to verify an HCL DX CF upgrade

## Applies to

> HCL Digital Experience version 9.5 and higher  

## Introduction

After upgrading your HCL Digital Experience (DX) environment to the latest Cumulative Fix (CF), you must verify if the upgrade was successful. This article describes how to verify your HCL DX CF upgrade.

## Instructions

Refer to the following steps to verify your CF upgrade:

1. Review the `ConfigTrace.log` file for fatal errors in the `applyCF` task. This file is typically located in the `<wp_profile_root>/ConfigEngine/log` directory.

2. Ensure the `wps.properties` versions match in both the PortalServer binaries (`<portalHome>\wps.properties`) and the profile (`<wp_profile>\PortalServer\wps.properties`). Both files must display the upgraded CF level.

3. Open the Installation Manager `installed.xml` file in a web browser to verify the upgraded level. Ensure the `installed.xsl` file is in the same directory. The file is located in one of the following directories:

    - Linux or AIX (root): `/var/ibm/InstallationManager`
    - Linux or AIX (non-root): `/home/var/ibm/InstallationManager`
    - Windows: `C:\ProgramData\IBM\InstallationManagerProgram`

        !!!note
            In Windows, the `ProgramData` folder is hidden by default. Configure Windows to show hidden files and folders to view this directory.
