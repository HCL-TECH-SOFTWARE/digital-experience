# Module schema definition 

You can use these elements to define theme modules.

## Defining a module

You can also define a schema for modules that are independent of their XML or JSON format. For the JSON format, there is a JSON schema definition available at WebDAV Theme\\themes\\Portal8.5\\contributions\\schema.

In the following examples, use the following syntax.

-   1 means only one is required
-   0..1 means one or zero
-   0..\* means that any number is allowed
-   1..\* means at least one is required

-   **Element: module**

    The module that provides contributions.

    Attributes:

    -   ID \(1\): The system-wide identifier for this module. The ID value is a String that must be unique in the system.
    -   version \(0..1\): The version of the module that is provided with this contribution. The version value uses the format major.minor.revision.
    Parent

    -   extension
    Child-elements

    -   0..\* capability
    -   0..\* prereq
    -   0..\* title
    -   0..\* description
    -   0..\* contribution
    -   0..1 moduleActivation
    -   0..1 runtimeActivation
-   **Element: capability**

    The declaration of a capability that this module delivers.

    Attributes:

    -   ID \(1\): The unique name to be used for this capability.
    -   value \(1\): the version of the capability that is provided by this module. The capability value uses a dotted decimal string.
    Parent

    -   module
-   **Element: prereq**

    A module that is required by another module that defines the requirement.

    Attributes:

    -   ID \(1\): The ID of the required module.
    -   minversion \(0..1\): The minimum version of the prereq module that is required by the module that defines the requirement. The minversion value uses a dotted decimal string.
    -   type \(0..1\): Setting the `type="optional"` stops error logging when there is a missing prereq.
    Parent

    -   module
-   **Element: title**

    A title for the defining module.

    Attributes:

    -   value \(1\): A title for the module.
    -   lang \(1\): The language string for the title, for example, en\_US, de\_de, or es\_es.
    Parent

    -   module
-   **Element: description**

    A description of the defining module.

    Attributes:

    -   value \(1\): A string that describes the module.
    -   lang \(1\): The language string for the description, for example, en\_us, de\_de, or es\_es.
    Parent

    -   module
-   **Element: contribution**

    Defines a theme contribution of the module.

    Attributes:

    -   type \(1\): The type of content spot that this module contributes to. The value is either head, config, menu, or dyn-cs. The valid values for type are:
        -   **head**

            These contributions are added to the head section of the theme. This contribution type can have multiple subcontributions.

        -   **config**

            These contributions are added to the end of the body section of the theme. This contribution type can have multiple subcontributions.

        -   **dyn-cs**

            This contribution outputs a theme dynamic spot. See *Dynamic content spots*. This contribution type can have one subcontribution.

        -   **menu**

            This contribution defines a JSON theme menu. See *Menu framework*. This contribution type can have one subcontribution.

    Parent

    -   module
    Child-elements

    -   0..\* subcontribution
-   **Element: subcontribution**

    Part of the overall contribution. For example, in the head contribution, subcontributions can add CSS, JavaScript, or head-specific markup.

    Attributes

    -   uri \(0..1 or 1..\* if there is no URI child\): The URI to the subcontribution resource. The URI can also be provided as a child element of the subcontribution node. Use an attribute, or a child, but not both to specify the URI. More than one URI can be supplied, but only one is selected and returned.
    -   ref-id \(0..1\): The ID of the dynamic spot to override. Use it only for dyn-cs subcontributions.
    -   type \(1\): Declares what type of contribution is provided. The valid values for type are:
        -   markup: HTML markup for head, config, or dyn-cs contributions.
        -   css: Cascading style sheet files for head contributions only.
        -   js: JavaScript libraries, functions, and objects for head and config contributions. These contributions are loaded after contributions with a config\_\* value.
        -   config\_static: JavaScript configuration for head and config contributions that are not request-dependent variable definitions. These contributions are collected in a separate file.
        -   config\_dynamic: JavaScript configuration for head and config contributions that are request-dependent variable definitions. These contributions are injected into the markup.
        -   json: JSON definitions for menu contributions only.
    -   deviceClass \(0..1\): Controls when the defined subcontribution is aggregated on the page that is based on active device classes. It can be a single device class or logical equation.
    -   values:
        -   markup: HTML markup
        -   css: Cascading style sheet statements.
        -   js: JavaScript libraries, functions, and objects. These contributions are loaded after contributions with a config\_\* value.
        -   config\_static: JavaScript configuration contributions that are not request-dependent variable definitions. These contributions are collected in a separate file.
        -   config\_dynamic: JavaScript configuration contributions that are request-dependent variable definitions. These contributions are injected into the markup.
    Parent

    -   contribution
    Child-elements

    -   0..1 uri
-   **Element: uri**

    A URI pointing to a theme module resource. `{war:context-root}` can be used here. For more information, see *Writing modules*.

    Attributes:

    -   value \(1\): The URI of the resource to be used.
    -   lang \(0..1\): The language to which the defined URI applies, for example, en\_US.
    -   type \(0..1\): The type to which this URI applies. For the subcontribution type of CSS the URI type can be rtl, triggered when the Portal is rendering in a right to left language. Or debug, triggered when the Portal is in debug mode. For JavaScript, the URI type can be debug.
    -   deviceClass \(0..1\): The type of device to which the URI applies, such as `smartphone`, `tablet`, or a device class equation.
    Parent

    -   subcontribution
    Different schemes can be used within the value attribute.

    Use this scheme with caution because it can severely affect performance. The remote file is included on the server and not on the browser. When this scheme is used, remote requests are sent from the virtual machine of the portal during portal page rendering to the remote system in a synchronous manner. Therefore, the response time of the remote system affects portal page rendering time and the number of available threads available for other requests. Use HTTP only for static sources that can be cached in a proxy or HTTP server in front of portal.

    The Ajax proxy is used to perform the remote call so that the configuration must be updated for the remote request to occur.

    -   http: Use HTTP to reference files that are accessible using HTTP.
    -   res: Use the res scheme to access an arbitrary resource, such as a JSP, a servlet, or a static file, in a web module that is installed on the server.
    -   dav: Use the dav scheme to access resources in the portal file store. You can also use replacement tokens for the URI value, for example:

        ```
        res:{rep=WP
        
        CommonComponentConfigService;key=cc.theme.context}/themes/html/PageBuilder2/modules/css/markup/head_m.jsp
        ```

        The code

        ```
        {rep=WP CommonComponentConfigService;key=cc.theme.context}
        ```

        is replaced with the value of the custom property cc.theme.context in the resource environment provider WP CommonComponentConfigService.

-   **Element: moduleActivation**

    Declaration of a class that controls whether the module is active. Use either the extensionID or class attribute to indicate the activation implementation; both are supported.

    Attributes:

    -   extensionID \(0..1 or 0 if class is used\): The class name that implements the ModuleActiveChecker interface.
    -   class \(0..1\): The class name that implements the ModuleActiveChecker interface.
    Parent

    -   module
    Child-elements

    -   0..\* parameters
-   **Element: parameter**

    Declaration of a resource environment entry that specifies whether the module is active or not whose values are true or false. The default value is true.

    Attributes:

    -   name \(1\): The name of the parameter.
    -   value \(1\): The value of the parameter.
    Parent

    -   moduleActivation
-   **Element: runtimeActivation**

    A switch that is triggered during run time to enable or disable a module and its capabilities, depending on a condition of the current page state.

    Attributes:

    -   none
    Parent

    -   module
    Child-elements:

    -   condition \(1..\*\)
    Example:

    ```
    <runtimeActivation>
             <condition deviceClass="worklight"/>
    </runtimeActivation>"
    ```

-   **Element: condition**

    A condition for which the runtimeActivation must be activated.

    Attributes:

    -   deviceClass \(1\): The type of device to which the URI applies, such as `smartphone`, `tablet`, or a device class equation.
    Parent

    -   runtimeActivation

**Parent topic:**[Writing modules ](../dev-theme/themeopt_mod_plugin_xml.md)

**Related information**  


[Simple menu framework ](../dev-theme/themeopt_cust_menu.md)

[Syntax in modules and profile definitions ](../dev-theme/themeopt_json_syntax_profiles.md)

