# Loader Service

The portal Loader Service is responsible for dynamically loading class files. The service does so by looking up a given class name in different packages. Upon loading the respective class file, an instance of that class is returned.

In the WebSphere® Integrated Solutions Console, the portal Loader Service is listed as **WP LoaderService**.

The Loader Service loads class files in four categories: commands, and supporting classes for screen templates, skin templates, and theme templates. To optimize the efficiency, the implementation of the service is free to cache loaded class files or instances and return a cached instance. That means that the implementation of such classes must be thread safe.

In cases where additional or alternative commands are required, the following configuration property can be modified:

-   **command.path**

    Use this property to specify the package prefix or prefixes in which commands are searched.


**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

