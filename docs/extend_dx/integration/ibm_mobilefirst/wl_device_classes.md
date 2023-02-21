# Target MobileFirst resources

You can change the way that a web page looks for any device with responsive web design. Device classes are generic groupings of form factors so client devices can view web pages for every form factor without designing the page for each device.

When a client communicates with the server, it can be profiled into one or more of the generic device classes. Then, the client can be sent only the resources it needs for rendering its form factor. If you are using device classes, often you can also use device class logic equations, which are Boolean equation of device classes. Device class logic equations help narrow down the exact situation you want resources to be loaded.

With the default theme, responsive design and device classes and logic minimize resources that are downloaded by devices. For example, when you use navigation across devices, the theme modules provide a different navigation JSP for rendering and separate style sheets for different device types. The desktop gets the normal default experience. When a tablet or smartphone is detected, it switches over to the mobile navigation JSP page. With a `tablet` device class, the mobile navigation JSP turns into a side navigation. If any smartphone is detected and given the `smartphone` device class, the mobile navigation is rendered in a list. The device classes also change the containers to allow the content to fit on the smaller screen. Some features, such as edit mode, can be disabled.

The main use of device classes is by modules, which can use them to specify when a subcontribution resource is used. Dynamic content spots can also target a device class with a multiview choice (MVC) URL. For more information, see [mvc:URI scheme](../../../build_sites/themes_skins/device_classes/rwd_mvcuri_scheme.md). The device class is available as an attribute on the Composite Capabilities/Preference Profiles and can be retrieved within a JSP. You can also use device equations, which are device classes with Boolean logic for further control of what devices receive which set of resources. For more information, see [Device class equations](../../../build_sites/themes_skins/device_classes/themeopt_devclass_equat.md). There is a global variable available on the configuration object that can help targeting code in the JavaScript editor. For more information, see [Additional information about device classes for developers](../../../build_sites/themes_skins/device_classes/themeopt_devclass_devlop.md).

There are some cases where you cannot use device classes with the device class logic equations. They cannot be used to determine layout templates, page filtering with the `supported-deviceclass` tag, and personalization. Personalization cannot use device equation logic directly as defined by the Boolean logic. But it can create its own targeting rules of Boolean logic with the visibility rules editor. For more information, see [Device classes](../../../build_sites/themes_skins/device_classes/index.md).

A global JavaScript variable is provided for further customizing the user experience.  The global variable `com_ibm_device_class` provides an array list of all currently set devices classes. If none are set, it is an empty array. For example, if you have JavaScript specific for processing smartphones, you can include the following code.

```
if (com_ibm_device_class.indexOf("smartphone") !== -1) {
//process smartphone
}
```

If you wanted to be more specific and target an iOS device that runs in a MobileFirst® container, you can include the following code.

```
if (com_ibm_device_class.indexOf("ios") !== -1 && com_ibm_device_class.indexOf("worklight") !== -1 ) {
//process ios worklight
}
```


???+ info "Related information"
    - [mvc:URI scheme](../../../build_sites/themes_skins/device_classes/rwd_mvcuri_scheme.md)
    - [Device class equations](../../../build_sites/themes_skins/device_classes/themeopt_devclass_equat.md)
    - [Device classes](../../../build_sites/themes_skins/device_classes/index.md)
    - [Additional information about device classes for developers](../../../build_sites/themes_skins/device_classes/themeopt_devclass_devlop.md)
