# mvc:URI scheme 

The mvc:URI scheme is a special URI format that accesses different resources, depending on the device class. This scheme is used by the Portal 8001 theme in the definition of several dynamic content spots.

The syntax of its scheme-specific part allows the following options:

-   Specify the default URI to be used when no other listed URI matches.
-   Map to an empty URI by using the syntax `...,name@,...`
-   Create a comma-separated list of entries where:
    -   The individual entries of the list are key and value pairs that are separated with '@'.
    -   The keys represent one device class name or multiple device class names in equation form, where the equation can use '/' for OR, '+' for AND, '!' for NOT, and parentheses for grouping.
    -   The value is a URI that must be properly encoded to not use any of the special characters that are described here. Therefore, certain values such as the comma must be double-encoded.

You can also use URIs with query parameters, for example `mvc:uri1?foo=bar&hugo=123,tablet@uri1_tablet%252ftoken1`. Note the use of double encoding to represent a comma as part of a resource URI `, = pct %2f, % = pct %25`.

The following examples demonstrate some of the possible combinations:

-   mvc:res:/hello.jsp: Uses a single default URI.
-   mvc:res:/hello.jsp,smartphone@res:/hello\_smartphone.jsp: Uses res:/hello.jsp as the default URI and res:/hello\_smartphone.jsp as the URI for smartphones.
-   mvc:res:/hello.jsp,smartphone/tablet@res:/hello\_mobile.jsp: Uses res:/hello.jsp as the default URI and res:/hello\_mobile.jsp as the URI for smartphones and tablets.
-   mvc:res:/hello.jsp,smartphone@,tablet@res:/hello\_tablet.jsp: Uses res:/hello.jsp as the default URI and res:/hello\_tablet.jsp as the URI for tablets. No URI is assigned for smartphones.
-   mvc:res:/hello.jsp,smartphone+ios@res:/hello\_smartphone\_ios.jsp,\(smartphone/tablet\)+android@res:/hello\_mobile\_android.jsp: Uses res:/hello.jsp as the default URI, res:/hello\_smartphone\_ios.jsp as the URI for iOS smartphones, and res:/hello\_mobile\_android.jsp as the URI for Android smartphones and tablets.

**Parent topic:**[Device classes ](../dev-theme/themeopt_devclass.md)

**Previous topic:**[Additional information about device classes for developers ](../dev-theme/themeopt_devclass_devlop.md)

**Next topic:**[Creating and deleting device classes ](../dev-theme/themeopt_devclass_working.md)

**Related information**  


[Target MobileFirst resources ](../integrate/wl_device_classes.md)

