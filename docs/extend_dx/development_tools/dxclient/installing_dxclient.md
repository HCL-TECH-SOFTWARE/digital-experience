# Installing DXClient

This topic describes how to install, upgrade, verify, and uninstall DXClient.

## Installation options

DXClient offers three installation options, each with different benefits depending on your use case:

### Free Public Repositories (recommended)

- **NpmJS Registry**: Simplest option for local developers and administrators
- **Harbor Container Repository**: Best for CI/CD automation pipelines

Both options are free to use and available starting from CF221. For more information, refer to [Public and free installation options](#public-and-free-installation-options).

### My HCLSoftware (MHS) portal

The [MHS portal](https://my.hcltechsw.com/) offers two installation methods: Container Package and Native JavaScript Package.

**Container Package**

- Fully packaged container with all dependencies included
- Works with Docker or Podman (OCI-compliant runtimes)
- Available since HCL DX 9.5 CF196
- To install the Container Package, refer to [Installing using the container package from MHS portal](#installing-using-the-container-package-from-the-mhs-portal)

!!! warning
    Recent changes to Podman introduced by RedHat have caused compatibility issues with DXClient container implementation. Docker is currently recommended until this is resolved.

**Native JavaScript Package**

- Requires manual installation of Node.js and npm dependencies
- More flexible but requires more setup
- To install the Native JavaScript Package, refer to [Installing using the Native JavaScript Package from MHS portal](#installing-using-the-native-javascript-package-from-the-mhs-portal)

!!!important "Version Numbering and Licensing"
    Since CF221, DXClient uses a new versioning format that matches CF numbers (for example, "221.0.0" instead of "1.29.0").

    All versions now require accepting a license agreement, which can be done using the `accept-license` command. For more information, refer to [DXClient information commands](./dxclient_commands.md#information-commands).

## Comparing installation methods

Choose the installation method that best suits your needs from the following:

| Method | Source | Best For | Prerequisites | Ease of Use | Recommended For |
|--------|--------|----------|--------------|-------------|-----------------|
| **NPM Registry** | Free Public Repository | Local development | Node.js | ★★★★★ | Developers and admins who need quick setup |
| **Harbor Container** | Free Public Repository | CI/CD pipelines | Docker or Podman | ★★★★☆ | Automation environments and DevOps |
| **MHS Container Package** | MHS Portal | Enterprise use | Docker or Podman | ★★★★☆ | Production environments with license |
| **MHS Native JavaScript** | MHS Portal | Custom setups | Node.js | ★★★☆☆ | Legacy or specialized environments |

!!!tip "Quick Decision Guide"
    - **For personal development**: Use NPM Registry installation
    - **For CI/CD pipelines**: Use Harbor Container Repository
    - **For enterprise deployments**: Use MHS Container Package
    - **For specialized needs**: Use MHS Native JavaScript Package

## Public and free installation options

Starting from CF221, you can install DXClient without requiring [MHS portal](https://my.hcltechsw.com/) access. You can install it using the NpmJS registry or the container image in the Harbor repository.

### Installing from the NpmJS registry

This method is recommended for local developers and administrators due to its simplicity.

**Prerequisites**

- Node.js LTS or newer

**Installation**

To install DXClient from the NpmJS registry, run the following command:

```bash
# Install locally in current project
npm install @hcl-software/dxclient

# OR install globally for system-wide access
npm install -g @hcl-software/dxclient
```

**Verification**

To verify the installation, run the following command:

```bash
# For local installation
npx dxclient -V

# For global installation
dxclient -V
```

**Uninstallation**

To uninstall DXClient, run the following command:

```bash
npm uninstall @hcl-software/dxclient
```

### Installing using the container image in the Harbor repository

This method is preferred for CI/CD automation scenarios.

**Prerequisites**

- Docker or another OCI-compliant container runtime

**Installation**

1. Pull the Docker image using the following command:

    ```bash
    docker pull hclcr.io/dx-public/dxclient:IMAGE_TAG
    ```

2. Download and configure the DXClient scripts from the [HCL-TECH-SOFTWARE GitHub repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"}. 
3. Follow the instructions in the repository to set up and use DXClient.

For more information, refer to the following repositories:

- [HCL DX Open Harbor Repository](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab){target="_blank"}
- [DXClient Scripts GitHub Repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"}

### Installing using the Container Package from the MHS portal

The container package provides a fully packaged OCI-compliant container with all dependencies included.

**Prerequisites**

- Docker or Podman (any OCI-compliant container runtime)
- HCL DX 9.5 CF196 or higher entitlement
- MHS portal access

!!! warning
    Recent changes to Podman introduced by RedHat have caused compatibility issues with DXClient container implementation. Docker is currently recommended until this is resolved.

**Installation**

1. Prepare your environment.

    - Navigate to your desired working directory.
    - If you are upgrading from the Node.js version, uninstall it first using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```

    === "Microsoft Windows"
        ```batch
        make_unlink.bat
        ```

2. Download and extract the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
3. (Optional) Configure container runtime. The default container runtime is Docker.

    To use another runtime, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
        # Example: export CONTAINER_RUNTIME=podman
        ```

    === "Microsoft Windows"
        ```batch
        set CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
        # Example: set CONTAINER_RUNTIME=podman
        ```

4. Load the container image using the following command:

    === "Linux and Apple macOS"
        ```bash
        docker load < dxclient.tar.gz
        ```

    === "Microsoft Windows"
        ```batch
        docker load -i dxclient.tar.gz
        ```

5. Add the DXClient `bin` directory to your system's `PATH` environment variable.

    === "Linux and Apple macOS"
        ```bash
        export PATH=<working-directory>/bin:$PATH
        ```

    === "Microsoft Windows"
        ```batch
        set PATH=<working-directory>\bin;%PATH%
        ```

    !!! note
        These `PATH` changes are temporary. For permanent changes, update your system's environment variables.

6. Set file permissions using the following command:

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/bin
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

7. Verify the installation using the following command:

    ```bash
    dxclient -V
    ```

8. Configure storage volume.

    A `store` folder is automatically created as shared volume. To use a different volume directory, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export VOLUME_DIR=myCustomStore
        ```

    === "Microsoft Windows"
        ```batch
        set VOLUME_DIR=myCustomStore
        ```

    !!! warning
        Do not enclose the `VOLUME_DIR` value in quotes on Windows systems.

9. Set volume permissions.

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/<VOLUME_DIR>
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

10. (Optional) Configure the timezone using the following command:

    === "Linux and Apple macOS"
        ```bash
        export Timezone=Asia/Kolkata
        ```

    === "Microsoft Windows"
        ```batch
        SET Timezone=Asia/Kolkata
        ```

**Post-installation**

After installing DXClient, confirm the following:

- Configuration files are located in `<working-directory>/<VOLUME_DIR>`.
- Sample configurations available in `<working-directory>/samples/sample-configurations`.
- For automation server integration, refer to the included sample pipeline.

### Installing using the Native JavaScript Package from the MHS portal

!!! note
    This is a legacy method. The container package is recommended from CF196 onwards.

**Prerequisites**

- Node.js LTS or newer
- HCL DX 9.5 CF19 or higher entitlement
- MHS portal access

**Installation**

1. Prepare your environment. If you are upgrading from previous version, uninstall it first using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```
    === "Microsoft Windows"
        ```batch
        make_unlink.bat
        ```

2. Download and extract the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
3. Install DXClient dependencies using the following command:

    === "Linux and Apple macOS"
        ```bash
        make install
        ```

    === "Microsoft Windows"
        ```bash
        make_install.bat
        ```

4. (Optional) Link the application using the following command:

    === "Linux and Apple macOS"
        ```bash
        make link
        ```

    === "Microsoft Windows"
        ```bash
        make_link.bat
        ```

    !!! note
        - Skip linking on automation servers to avoid dependency conflicts.

    If you choose not to link the application, run the following command instead:

    === "Linux and Apple macOS"
        ```bash
        ./bin/dxclient
        ```
    === "Microsoft Windows"
        ```bash
        node bin/dxclient
        ```

5. (Optional) Configure storage volume.

    A `store` folder is automatically created. To use a different volume directory, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export VOLUME_DIR=myCustomStore
        ```

    === "Microsoft Windows"
        ```batch
        set VOLUME_DIR=myCustomStore
        ```

    !!! warning
        Do not enclose the `VOLUME_DIR` value in quotes on Windows systems.

6. Set volume permissions using the following command:

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/<VOLUME_DIR>
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

## Upgrading DXClient

DXClient can be upgraded to newer versions without uninstalling the previous version. This simplifies the upgrade process and ensures minimal disruption to your development or CI/CD workflows.

### Upgrading from the NPM registry

Upgrade from the NPM registry using the following command:

```bash
# For local installation
npm update @hcl-software/dxclient

# For global installation
npm update -g @hcl-software/dxclient
```

### Upgrading the Container Package from Harbor Repository

Upgrade the Container Package from the Harbor repository using the following command:

```bash
# Pull the latest version
docker pull hclcr.io/dx-public/dxclient:LATEST_TAG
```

### Upgrading the MHS Container Package

1. Download the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
2. Extract the files to your working directory (can be the same as your existing installation).
3. Load the new container image:

=== "Linux and Apple macOS"
    ```bash
    docker load < dxclient.tar.gz
    ```

=== "Microsoft Windows"
    ```batch
    docker load -i dxclient.tar.gz
    ```

### Upgrading the MHS JavaScript package

1. Download the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
2. Extract the files to your working directory (can be the same as your existing installation).
3. Update the DXClient dependencies using the following command:

    === "Linux and Apple macOS"
        ```bash
        make install
        ```

    === "Microsoft Windows"
        ```batch
        make_install.bat
        ```

!!!note
    - When upgrading, your existing configurations in the `store` directory (or custom `VOLUME_DIR`) are preserved. You do not need to reconfigure DXClient after upgrading.
    - After upgrading, verify the new version using the `dxclient -V` command to verify that the upgrade was successful.

## Uninstalling DXClient

Uninstall DXClient using the following methods.

### Uninstalling from NPM registry

Uninstall DXClient from the NPM registry using the following command:

```bash
npm uninstall [-g] @hcl-software/dxclient
```

### Uninstalling MHS Container Package

1. Remove the container image using your container runtime.
2. Delete the extracted files and directories.

### Uninstalling MHS JavaScript Package

1. Run the following uninstall command:

    === "Linux and Apple macOS"
        ```bash
        make clean
        ```

    === "Microsoft Windows"
        ```bash
        make_uninstall.bat
        ```

2. (Optional) Unlink the package using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```

    === "Microsoft Windows"
        ```bash
        make_unlink.bat
        ```

## Verifying Your DXClient Installation

After installation, verify that DXClient is properly installed.

1. Run the following command:

    ```bash
    dxclient -V
    ```

    This command shows the version of DXClient that you installed.

2. Accept the license agreement using the following command (required once per installation):

    ```bash
    dxclient accept-license
    ```

3. Check the version compatibility with your DX Core installation using the following command:

    ```bash
    dxclient version-compat
    ```

!!! important
    For optimal compatibility, ensure the CF versions of both DXClient and DX Core match in your installation. While generally compatible across versions, some features may require specific version alignment.
