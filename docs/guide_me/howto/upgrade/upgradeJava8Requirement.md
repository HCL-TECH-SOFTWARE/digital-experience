# How to Avoid Java Runtime Failures During CF Upgrade on Older DX Systems

## Applies to

> HCL Digital Experience version 8.5 and higher

## Introduction

Starting from the CFs that include Java 8 binaries (CF238), **customers must be running Java 8 before applying any new Cumulative Fix (CF)**. Environments still on Java 7 will fail during upgrade with class version incompatibility errors.

This is a permanent baseline requirement for future CF upgrades. All new CF packages are compiled for Java 8 and will continue to be. There is no fallback path for Java 7 environments.

---

> This page provides a summarized guide for updating profile Java levels before applying a CF. For full operating system-specific installation and upgrade procedures, see **[Full Documentation References](#full-documentation-references)**.

---

## Required Customer Action Before Applying Any New CF

Customers must complete all of the following **before running `applyCF.sh` or `applyCF.bat`**:

1. **Install Java 8 for WAS** — Java 8 must be available as a WAS SDK on the system. See [Installing a Java SDK using Installation Manager](#installing-java-8-via-ibm-installation-manager) below.
2. **Switch all relevant profiles to Java 8** — Use the WAS `managesdk` utility to point every profile to the Java 8 SDK. See [Switching profiles to Java 8](#switching-was-profiles-to-java-8-managesdk) below.
3. **Verify end-to-end resolution** — Confirm that ConfigEngine, the profile JVM, and any launch scripts all resolve to Java 8, not Java 7.
4. **Ensure IBM Installation Manager is also on Java 8 or newer** — If Installation Manager is still running on an older Java level, update or reconfigure it before using it to install or maintain the required WAS Java 8 content. See [Installation Manager installs a Java Runtime Environment (JRE)](https://www.ibm.com/docs/en/installation-manager/1.9.2?topic=installations-java-runtime-environment).
5. **Only then run `applyCF.sh` or `applyCF.bat`.**

There is no supported path to apply a new CF while remaining on Java 7. This requirement applies to all future CFs.

---

## Installing Java 8 via IBM Installation Manager

> **IBM Documentation:** [Installing a Java SDK using Installation Manager](https://www.ibm.com/docs/en/was/8.5.5?topic=iusjtev8dos-installing-websphere-sdk-java-technology-edition-version-80-using-gui)

The IBM Java 8 SDK for WAS is distributed as a fix pack through IBM Fix Central and installed using IBM Installation Manager (IIM). Customers should not replace the JDK manually — it must go through IIM to ensure proper package tracking.

Before using IBM Installation Manager for this upgrade path, **ensure the IBM Installation Manager runtime itself is on Java 8 or newer**.

### Step 1 — Download the Java 8 SDK Package

1. Go to [IBM Fix Central](https://www.ibm.com/support/fixcentral).
2. Select **WebSphere Application Server** as the product, version **8.5.5**, and your platform.
3. Search for fix IDs matching the pattern `8.5.5.*-WS-IBMWASJAVA*` (e.g., `8.5.5.24-WS-IBMWASJAVA-LinuxX64`).
4. Download the appropriate SDK package for your OS and architecture.

### Step 2 — Install via IBM Installation Manager (Console/Silent)

Using IBM Installation Manager command line (silent install):

```bash
${IIM_INSTALL_ROOT}/eclipse/tools/imcl install \
  com.ibm.java.jdk.v8 \
  -repositories /path/to/sdk/repo \
  -installationDirectory ${WAS_INSTALL_ROOT}/AppServer \
  -acceptLicense
```

Replace `/path/to/sdk/repo` with the directory containing the extracted SDK package. The `com.ibm.java.jdk.v8` offering ID installs the IBM Java 8 SDK into the WAS installation directory.

> **Tip:** Run `imcl listAvailablePackages -repositories /path/to/sdk/repo` to confirm the exact offering ID in your downloaded package before installing.

### Step 3 — Verify the SDK is Registered with WAS

After installation, confirm that WAS recognizes the new SDK:

=== "Linux/AIX"
    ```bash
    ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh -listAvailable
    ```

=== "Windows"
    ```bash
    ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat -listAvailable
    ```

You should see an entry for `1.8` in the output.

---

## Switching WAS Profiles to Java 8 (`managesdk`)

> **IBM Documentation:** [managesdk command reference](https://www.ibm.com/docs/en/was/8.5.5?topic=tools-managesdk-command)

> **IBM Documentation:** [Switching Java of WebSphere Profiles](https://www.ibm.com/docs/en/tnpm/1.4.5?topic=management-upgrading-java)

Installing the SDK does not automatically switch profiles to use it. Each profile must be explicitly updated using the `managesdk` utility.

### Switch a Specific Profile

=== "Linux/AIX"
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

Replace `<ProfileName>` with the actual profile name (e.g., `wp_profile`) and `1.8_64` with the exact SDK name as shown by `-listAvailable`.

### Switch All Profiles at Once

=== "Linux/AIX"
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

This updates every profile registered under the WAS installation to use Java 8.

### Set Java 8 as the WAS Default SDK

=== "Linux/AIX"
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

This ensures any future profile creation will default to Java 8.

### Set Java 8 as the Command-Line Default

=== "Linux/AIX"
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

This tells administrative scripts to use Java 8 by default.

### Verify All Profiles Are Now on Java 8

=== "Linux/AIX"
    ```bash
    ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.sh -listEnabledProfileAll
    ```

=== "Windows"
    ```bash
    ${WAS_INSTALL_ROOT}/AppServer/bin/managesdk.bat -listEnabledProfileAll
    ```

All profiles used during the CF apply must show `1.8` (Java 8).

---

## Common Misconfiguration Scenarios

| Scenario | Symptom | Resolution |
|---|---|---|
| Java 8 installed on machine but profile still points to Java 7 | Class version errors during `applyCF.sh` | Run `managesdk` to switch the profile to Java 8 |
| WAS SDK and profiles are on Java 8, but the IBM Installation Manager JRE is still on Java 7 | Class version errors | Update IBM Installation Manager to use Java 8 |
| Multiple nodes in topology with inconsistent SDK | Linkage errors (`NoSuchMethodError`, etc.) on specific nodes | Update all nodes to Java 8 SDK |

---

## Scope of Change

- **Applies to:** All CFs released after the Java 8 binary shift (CF238)
- **Affected environments:** WebSphere Portal 8.5.0.0 on WAS 8.5.5.x
- **Permanent:** All future CFs will continue to be Java 8 compiled. This is not a temporary condition.

---

## Full Documentation References

See the following IBM documentation for full Java installation instructions:

- [Installing a Java SDK using Installation Manager](https://www.ibm.com/docs/en/was/8.5.5?topic=iusjtev8dos-installing-websphere-sdk-java-technology-edition-version-80-using-gui)
- [Migrating to Java Platform, Standard Edition 7 or 8](https://www.ibm.com/docs/en/was/8.5.5?topic=applications-migrating-java-se-7-8)
- [managesdk command reference](https://www.ibm.com/docs/en/was/8.5.5?topic=tools-managesdk-command)
- [IBM Installation Manager Java Runtime Environment](https://www.ibm.com/docs/en/installation-manager/1.9.2?topic=installations-java-runtime-environment)
- [IBM Fix Central (SDK downloads)](https://www.ibm.com/support/fixcentral)
- [WAS 8.5.5 system requirements](https://www.ibm.com/docs/en/was/8.5.5?topic=environment-installing-websphere-application-server-distributed-operating-systems)
- [Switching Java of WebSphere Profiles](https://www.ibm.com/docs/en/tnpm/1.4.5?topic=management-upgrading-java)

For the full operating system-specific SDK upgrade procedures, see the following references:

- [Upgrading the SDK for AIX](../../../deployment/install/traditional/installing_dx/aix/sdk_upgrade-AIX.md)
- [Upgrading the SDK for Linux](../../../deployment/install/traditional/installing_dx/linux/sdk_upgrade-linux.md)
- [Upgrading the SDK for Windows](../../../deployment/install/traditional/installing_dx/windows/sdk_upgrade-windows.md)

Other related topics:

- [Supported installation and upgrade paths](../../../deployment/install/traditional/install_upgrade_plan_supported_paths/index.md)
- [Cumulative Fix instructions: Stand-alone | HCL Digital Experience 8.5](https://help.hcl-software.com/digital-experience/8.5/overview/ccf_85_standalone.html)