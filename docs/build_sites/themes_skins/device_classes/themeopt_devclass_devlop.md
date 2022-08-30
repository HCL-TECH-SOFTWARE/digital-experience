# Additional information about device classes for developers

The DeviceClass profile attribute contains only the highest priority device class on the client. Highest priority is determined as the first device class listed for the client. DeviceClassList provides access to all device classes on a client, as a string of comma-separated values.

-   **EL Bean**

    The `clientProfile` bean can be used to obtain the list of device classes that are assigned to the client. For instance:`<c:set var="deviceClasses" scope="request" value="${wp.clientProfile['DeviceClass']}" />`

-   **CC/PP Profile**

    The device class can also be directly obtained from the client profile information \(CC/PP\). For more information about the CC/PP API, see Client profile information \(CC/PP\) in portlets.

-   **JavaScript**

    An array of device classes is available on the window object named `com_ibm_device_class`. This array object includes the same set of device classes that are defined for DeviceClassList within the CC/PP profile. You can query the array to check whether the environment is available. For example:

    ```
    if(com_ibm_device_class.indexOf("smartphone") > -1){
    	// action performed for smartphone devices
    }else{
    	// action performed for all non-smartphones
    }
    ```

-   **SPI**

    Portal defines several services to obtain the list device classes that are assigned to the client. There is also a service to determine which device class matches best for a client. The package documentation for `com.ibm.portal.devicesupport` helps get you started.

-   **URI schemes**

    The Portal theme provides and uses special URI formats that work with device classes.

    -   **mv: URI scheme**

        The `multiview` URI scheme provides a way to select the best matching resource for a client from an Atom listing of available resources that are based on naming conventions.

    -   **mvc:URI**

        The `multiview choice` URI scheme provides a way to select the best matching resource for a client from a listing of available resources that is directly contained in the scheme-specific part.



**Previous topic:**[Device classes overview](../dev-theme/themeopt_devclass_overview.md)

**Next topic:**[mvc:URI scheme](../rwd/rwd_mvcuri_scheme.md)

**Related information**  


[Target MobileFirst resources](../integrate/wl_device_classes.md)

[Client profile information \(CC/PP\) in portlets](../dev-portlet/wpsccpp.md)

