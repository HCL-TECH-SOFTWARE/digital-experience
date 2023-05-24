# HCL Portal Developer Mode

WebSphere Portal 6 introduced a “development mode” that greatly improves startup performance. This
can be very useful for development environments where the Portal must be stopped and started
frequently.

However, it’s important to note that this mode is only meant to be used for development or test environments, not production or performance benchmark environments. Development mode turns on lazystart for almost all applications in HCL Portal. This can cause a performance impact the first time an application is accessed under load. Development mode also changes the way the JVM is started to give
better startup speed at the cost of reducing capacity under load.

To switch to development mode, run the enable-develop-mode-startup-performance configuration task to complete the configuration and optimize the Portal startup. The changes can be reverted to the original values using the disable-develop-mode-startup-performance configuration task.

For more information, see the Developing section of the HCL Digital Experience Help Center:
https://help.hcltechsw.com/digital-experience/8.5/dev/developing_parent.html