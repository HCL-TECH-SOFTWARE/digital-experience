# Improving Portal Startup Performance

HCL Portal 8.5 has two options for reducing the time required to start the application server. These two
options are:

- Development mode: development mode is intended for software development and testing environments. It is not intended for use in high-load or production environments, as runtime performance may be negatively impacted in such environments.

- Portal light mode: light mode is usable in production or test environments. Startup performance is improved. In addition, most deployments will see some reduction in memory consumption.

## HCL Portal Developer Mode

WebSphere Portal 6 introduced a “development mode” that greatly improves startup performance. This
can be very useful for development environments where the Portal must be stopped and started
frequently.

However, it’s important to note that this mode is only meant to be used for development or test environments, not production or performance benchmark environments. Development mode turns on lazystart for almost all applications in HCL Portal. This can cause a performance impact the first time an application is accessed under load. Development mode also changes the way the JVM is started to give
better startup speed at the cost of reducing capacity under load.

To switch to development mode, run the enable-develop-mode-startup-performance configuration task to complete the configuration and optimize the Portal startup. The changes can be reverted to the original values using the disable-develop-mode-startup-performance configuration task.

For more information, see the Developing section of the HCL Digital Experience Help Center:
https://help.hcltechsw.com/digital-experience/8.5/dev/developing_parent.html

## HCL Portal Light Mode

WebSphere Portal 8.0 and above provides a new Portal light mode which can improve Portal startup time and reduce memory consumption in production environments.

For more information, please visit the following HCL DX Help Center Administering topic URL:
https://help.hcltechsw.com/digital-experience/8.5/admin-system/portal_light_nbl.html