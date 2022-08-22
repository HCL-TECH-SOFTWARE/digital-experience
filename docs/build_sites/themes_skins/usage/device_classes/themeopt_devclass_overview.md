# Device classes overview

Device classes can be implemented to organize Clients in to groups. After you defined a device class, you can then assign it to clients. You can assign multiple device classes to a client to help scope your environment.

The following device classes are defined.

-   `smartphone`
-   `tablet`
-   `android`
-   `blackberry`
-   `iemobile`
-   `ios`
-   `worklight`

**Note:** You can create extra device classes, or you can remove any of these device classes.

These are the device classes and Portal resources.

-   **Clients**

    A client can be assigned a device class by assigning a capability. The name of the capability must start with `com.ibm.portal.devicesupport.deviceclass=` and continue with the administrative name of a device class, as provided with their definition.

-   **Pages**

    Device classes can be used to filter pages from the content model. For more information, see [Filtering the content model](../dev/dgn_modelfilter.md#).

-   **Layout templates**

    A layout template for a static portal page can specify variants for device classes that use a naming convention. The layout template that matches the client's device class can then be used to render the page. For more information about how to define static pages and layout templates, see [Creating a static page](../dev/spa_define_page.md#).

-   **Theme modules**

    A contribution in a theme module can define subcontributions for a specific device class. For more information, see [Defining theme modules](themeopt_mod_register.md#).



**Next topic:**[Additional information about device classes for developers](../dev-theme/themeopt_devclass_devlop.md)

