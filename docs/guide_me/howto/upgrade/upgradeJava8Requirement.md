# How to avoid Java Runtime failures during CF upgrade on older DX systems

## Applies to

> HCL Digital Experience version 8.5 and higher

## Introduction

Starting from Cumulative Fix (CF) 238, CF packages include Java 8 binaries. Your HCL DX environment must run Java 8 before you apply new CFs. Environments that run on Java 7 fail during upgrade with class version incompatibility errors.

!!! important
    This requirement is a permanent baseline for future CF upgrades. All new CF packages require Java 8. No fallback path exists for Java 7 environments.

## Instructions

To avoid Java Runtime failures during CF upgrades, perform the following steps:

### Installing Java 8 using the IBM IIM

The IBM Java 8 Software Development Kit (SDK) for the WebSphere Application Server (WAS) is distributed as a fix pack through IBM Fix Central and installed using IBM Installation Manager (IIM). Do not replace the Java Development Kit (JDK) manually. Install it through IIM to ensure proper package tracking.

Before using IBM Installation Manager for this upgrade path, ensure the IBM IIM runtime is running on Java 8 or newer. For more information, refer to [Installing a Java SDK using Installation Manager](https://www.ibm.com/docs/en/was/8.5.5?topic=iusjtev8dos-installing-websphere-sdk-java-technology-edition-version-80-using-gui){target="_blank"}.

1. Download the IBM Java 8 SDK package:

    1. Go to [IBM Fix Central](https://www.ibm.com/support/fixcentral){target="_blank"}.
    2. Under **Find product**, in the **Product selector** box, search for and select **WebSphere Application Server**.
    3. In the **Installed Version** box, select your version (for example, **8.5.5.0**).
    4. In the **Platform** box, select your platform (for example, AIX), and then select **Continue**.
    5. Search for **Individual fix IDs** matching the pattern `8.5.5.*-WS-IBMWASJAVA*` (for example, `8.5.5.24-WS-IBMWASJAVA-LinuxX64`), and then select **Continue**.
    6. Download the appropriate SDK package for your OS and architecture.

2. Install the IBM Java 8 SDK using the IBM IIM in silent mode:

    ```bash
    ${IIM_INSTALL_ROOT}/eclipse/tools/imcl install \
    com.ibm.java.jdk.v8 \
    -repositories /path/to/sdk/repo \
    -installationDirectory ${WAS_INSTALL_ROOT}/AppServer \
    -acceptLicense
    ```

    - `/path/to/sdk/repo`: The directory containing the extracted SDK package. 
    - `com.ibm.java.jdk.v8`: The offering ID that installs the IBM Java 8 SDK into the WAS installation directory.

        To confirm the exact offering ID in your downloaded package:

        ```bash
        imcl listAvailablePackages -repositories /path/to/sdk/repo
        ```

3. Verify that WAS recognizes the new SDK:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh -listAvailable
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat -listAvailable
        ```

    You should see an entry for `1.8` in the output.

### Switching WAS profiles to Java 8

Installing the SDK does not automatically switch profiles to use it. Each profile must be explicitly updated using the `managesdk` command. For more information, refer to [managesdk command](https://www.ibm.com/docs/en/was/8.5.5?topic=tools-managesdk-command){target="_blank"} and [Upgrading to Java 8](https://www.ibm.com/docs/en/tnpm/1.4.5?topic=management-upgrading-java){target="_blank"}.

- To switch to a specific profile:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh \
        -enableProfile \
        -profileName <ProfileName> \
        -sdkname 1.8_64
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat \
        -enableProfile \
        -profileName <ProfileName> \
        -sdkname 1.8_64
        ```

    - `<ProfileName>`: The profile name (For example, `wp_profile`)
    - `1.8_64`: The exact SDK name. To check the SDK name, run `-listAvailable`.

- To switch all profiles at once:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh \
        -enableProfileAll \
        -sdkname 1.8_64
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat \
        -enableProfileAll \
        -sdkname 1.8_64
        ```

    This command updates every profile registered under the WAS installation to use Java 8.

- To set Java 8 as the default SDK for WAS:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh \
        -setNewProfileDefault \
        -sdkname 1.8_64
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat \
        -setNewProfileDefault \
        -sdkname 1.8_64
        ```

    This ensures future profile creations default to Java 8.

- To set Java 8 as the command-line default:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh \
        -setCommandDefault \
        -sdkname 1.8_64
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat \
        -setCommandDefault \
        -sdkname 1.8_64
        ```

    This command configures administrative scripts to use Java 8 by default.

- To verify that all profiles run Java 8:

    === "Linux or AIX"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh -listEnabledProfileAll
        ```

    === "Windows"
        ```bash
        ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat -listEnabledProfileAll
        ```

    All profiles used during the CF application process must show `1.8` (Java 8).

### Verifying end-to-end resolution

Confirm that ConfigEngine, the profile JVM, and any launch scripts all resolve to Java 8, not Java 7.

### Ensuring IBM IIM is on Java 8 or newer

If Installation Manager is still running on an older Java level, update or reconfigure it before using it to install or maintain the required WAS Java 8 content. See [Installation Manager installs a Java Runtime Environment (JRE)](https://www.ibm.com/docs/en/installation-manager/1.9.2?topic=installations-java-runtime-environment).

### Applying CF packages to your environment

`applyCF.sh` or `applyCF.bat`

There is no supported path to apply a new CF while remaining on Java 7. This requirement applies to all future CFs.

### Troubleshooting

| Scenario | Symptom | Resolution |
|----------|---------|------------|
| Java 8 is installed on the machine but the profile still points to Java 7. | Class version errors during `applyCF.sh` | Run `managesdk` to switch the profile to Java 8. |
| WAS SDK and profiles are on Java 8, but the IBM IIM JRE is still running on Java 7. | Class version errors | Update IBM IIM to use Java 8. |
| Multiple nodes in the topology use inconsistent SDK versions. | Runtime class and method resolution failures (for example, `NoSuchMethodError`) on non-upgraded nodes.| Update all nodes to Java 8 SDK. |

???+ info "Related information"
    Java installation instructions:

    - [Installing a Java SDK using Installation Manager](https://www.ibm.com/docs/en/was/8.5.5?topic=iusjtev8dos-installing-websphere-sdk-java-technology-edition-version-80-using-gui){target="_blank"}
    - [Migrating to Java Platform, Standard Edition 7 or 8](https://www.ibm.com/docs/en/was/8.5.5?topic=applications-migrating-java-se-7-8){target="_blank"}
    - [managesdk command](https://www.ibm.com/docs/en/was/8.5.5?topic=tools-managesdk-command){target="_blank"}
    - [IBM Installation Manager Java Runtime Environment](https://www.ibm.com/docs/en/installation-manager/1.9.2?topic=installations-java-runtime-environment){target="_blank"}
    - [IBM Fix Central (SDK downloads)](https://www.ibm.com/support/fixcentral){target="_blank"}
    - [WAS 8.5.5 system requirements](https://www.ibm.com/docs/en/was/8.5.5?topic=environment-installing-websphere-application-server-distributed-operating-systems){target="_blank"}
    - [Switching Java of WebSphere Profiles](https://www.ibm.com/docs/en/tnpm/1.4.5?topic=management-upgrading-java){target="_blank"}
    - [Switching Java for all Nodes in Cluster](https://www.ibm.com/docs/en/bpm/8.6.0?topic=installation-switching-edition-java-used-in-bpm){target="_blank"}

    Operating system-specific SDK upgrade procedure:

    - [Upgrading the SDK for AIX](../../../deployment/install/traditional/installing_dx/aix/sdk_upgrade-AIX.md)
    - [Upgrading the SDK for Linux](../../../deployment/install/traditional/installing_dx/linux/sdk_upgrade-linux.md)
    - [Upgrading the SDK for Windows](../../../deployment/install/traditional/installing_dx/windows/sdk_upgrade-windows.md)

    Other related topics:

    - [Supported installation and upgrade paths](../../../deployment/install/traditional/install_upgrade_plan_supported_paths/index.md)
    - [Cumulative Fix instructions: Stand-alone | HCL Digital Experience 8.5](https://help.hcl-software.com/digital-experience/8.5/overview/ccf_85_standalone.html){target="_blank"}
