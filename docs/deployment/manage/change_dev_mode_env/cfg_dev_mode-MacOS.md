# MacOS: Configuring a developer mode environment

WebSphere is not supported to run natively on MacOS. Therefore, you also cannot run DX natively on this operating system. However, you can run DX in Docker on MacOS. To enable developer mode, follow the instructions in [Linux: Configuring a developer mode environment](cfg_dev_mode-Linux.md).

For developing portlets and other applications, IBM JDK 8 is required. This can be installed through the IBM Installation Manager. If you are running a non-intel processor such as M1 or M2, it is recommended that you use the Rosetta emulation to use the regular IBM JDK. Refer to the Apple documentation on how to enable Rosetta and pick the right version for your system.
