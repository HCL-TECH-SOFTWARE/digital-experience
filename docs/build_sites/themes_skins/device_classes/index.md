# Device classes

Device classes are used in HCL Digital Experience as an abstraction for common properties for the device of a client. For instance, tablet computers can be grouped into a device class tablets, since they share a form factor and possibly other traits such as touch interface, or additional hardware sensors.


!!! note 
    The abstraction provided by device classes does not make the defining properties explicit, but is rather indirectly done by the assignment of device classes to clients.

<!--
1.  [Device classes overview](../dev-theme/themeopt_devclass_overview.md)  
Device classes can be implemented to organize Clients in to groups. After you defined a device class, you can then assign it to clients. You can assign multiple device classes to a client to help scope your environment.
2.  [Additional information about device classes for developers](../dev-theme/themeopt_devclass_devlop.md)  
The DeviceClass profile attribute contains only the highest priority device class on the client. Highest priority is determined as the first device class listed for the client. DeviceClassList provides access to all device classes on a client, as a string of comma-separated values.
3.  [mvc:URI scheme](../rwd/rwd_mvcuri_scheme.md)  
The mvc:URI scheme is a special URI format that accesses different resources, depending on the device class. This scheme is used by the Portal 8001 theme in the definition of several dynamic content spots.
4.  [Creating and deleting device classes](../dev-theme/themeopt_devclass_working.md)  
You can create and delete device classes using the XML configuration interface.
5.  [Assigning device classes](../dev-theme/themeopt_devclass_assign.md)  
The process of assigning a device class to one of the supported clients in HCL Portal. Usually, when a certain device class needs to be supported, the first step is to create client definitions for each of the devices that belong to this class. Then, you create a device class and assign the device class to the clients. The assignment of device classes on clients is done in the Supported Clients administration section, using a specific capability on the client.
6.  [Device class equations](../dev-theme/themeopt_devclass_equat.md)  
Device class equations are expressions that involve a mixture of device class operands and Boolean logic operators. -->


???+ info "Related information"
    - [Target MobileFirst resources](../../../extend_dx/integration/ibm_mobilefirst/wl_device_classes.md)

