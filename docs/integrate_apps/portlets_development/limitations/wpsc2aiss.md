# Known issues and restrictions related to standard portlets publish and subscribe mechanisms

Review this information for a list of known issues and restrictions with portlet communication.

The following known issues and restrictions exist with portlet communication.

-   The pop-up menu functionality requires browsers with JavaScript on the client.
-   Complex Java types can only be transferred between portlets if they are deployed in a shared class loader. Use basic Java types, such as `java.lang.String` or `java.util.HashMap` for compound data. Custom classes must be installed in a IBM® WebSphere® Application Server shared library available to both portlets or must be directly installed into the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config`.

    **Note:** JSR 286 events with XML bindings allow you to transfer complex data types between portlets in different class loaders. However, to avoid the performance penalty incurred by XML serialization, follow the previous recommendations.

-   When you import sample Struts WAR files including the file `pbstrutsExample.war` into Rational® Application Developer Version 6, it reports broken links. You can ignore this warning message.
-   Rational Application Developer lists WS-I warnings for wsdl:binding errors. WS-I compliance warning messages will be displayed in the Problems view for Click-to-Action enabled portlets. You can ignore them in the Click-to-Action WSDL resources. To prevent these warning messages from being displayed, follow these steps:

    1.  Select **Window**, then **Preferences**, then **Workbench**, and then **Capabilities**.
    2.  Expand **Web Service Developer** and ensure that **Web Services Development** is selected.
    3.  Click **Apply**.
    4.  Select **Window**, then **Preferences**, then **Web Services**, and then **WS-I Compliance**.
    5.  Set the compliance levels to **Ignore** compliance.
    6.  Click **Apply**.
    **Important:** To remove the compliance warnings from the Problems view open the project's pop-up menu in the Project Explorer and select Run Validation.

-   If multiple cross-page wires marked with the `switch page` flag are triggered at the same time, all wire targets are invoked. However, the target page to which a user gets directed cannot be predicted unambiguously.
-   Cross-page wires for standard portlets are executed before redirecting to the target page. Therefore cross-page target portlets must not assume that they are executed on the target page.
-   Wires created on a root page do not apply to derived pages that you create by referencing the root page. While such pages do inherit the content of the original page, this inheritance does not apply to wires; you have to explicitly create the wires for the derived page.
-   Cooperative Java Server Faces \(JSF\) portlets that you developed by using older versions of Rational Application Developer Version 6 can contain code that does not work with HCL Digital Experience Version 8.5. If this occurs, replace the file `jsf-portlet.jar` in the failing WAR file with the version in the latest fix pack level.
-   Cooperative portlet action declarations with multiple input parameters configured in the WSDL file are not supported.


