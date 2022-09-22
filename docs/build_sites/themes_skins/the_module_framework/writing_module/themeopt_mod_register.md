# Defining theme modules

You can define theme modules in XML or JSON.

The following samples are a breakdown of the previous examples and cover all available syntax for the plugin.xml extension point and JSON module definitions.

1.  Define the module. An ID is required and version is an optional decimal value.

    ```
    <module id="testModule1" version="1.0" >
    ```

    ```
           "modules":[
            // ...  The ellipses indicate place holders for syntax explained in other steps
            {
                "id":"testModule1",
                "version":"1.0",
                // ...
            },
            // ...
            ]
    ```

2.  Define any number of capabilities in the module with a required ID string and value in dot notation, for example, `1.2.3.4`. This information is added to the overall theme client capabilities map that is carried in the com.ibm.portal.theme.client.capabilities request attribute. Portlets can query from the server-side, which client-side capabilities are present, such as JavaScript libraries and CSS style catalogs. Client-side JavaScript code can query the global JSON object `com_ibm_theme_capabilities` for all available capabilities within the scope of the currently rendered page.

    ```
    <capability id="capabilityA" value="1.0.0"/>
            <capability id="capabilityB" value="1.5"/>
    ```

    ```
    "capabilities":[{
                    "id":"capabilityA",
                    "value":"1.0.0"
                },
                {
                    "id":"capabilityB",
                    "value":"1.5"
                }
            ],
    ```

    In addition to the explicit capabilities defined here, an implicitly defined capability per module was also introduced. This implicitly defined capability has the name and version of the module. If the same name is defined explicitly, the explicit one is used.

3.  Define any number of prereqs inside the module, with a required ID string and optional type string or minVersion in dot notation. If type `optional` is used, no errors are output if the prereq cannot be found on the system.

    ```
    <prereq id="testModuleA"/>
            <prereq id="testModuleB" minVersion="1.2.3.4"/>
            <prereq id="testModuleC" type="optional"/>
    ```

    ```
    "prereqs":[{
                    "id":"testModuleA"
                },
                {
                    "id":"testModuleB",
                    "minVersion":"1.2.3.4"
                },
                {
                    "id":"testModuleC",
                    "type":"optional"
                }
            ],
    ```

4.  Add a title or titles for the module in different languages.

    ```
    <title lang="en" value="en Module"/>
            <title lang="de" value="de Module"/>
            <title lang="es" value="es Module"/>
    ```

    ```
    								 "titles":[{
                    "lang":"en",
                    "value":"en Module"
                },
                {
                    "lang":"de",
                    "value":"de Module"
                },
                {
                    "lang":"es",
                    "value":"es Module"
                }
            ],
    ```

5.  Add a description or descriptions in different languages.

    ```
    <description lang="en" value="one two three"/>
            <description lang="de" value="ein zwei drei"/>
            <description lang="es" value="uno dos tres"/>
    ```

    ```
            				"descriptions":[{
                    "lang":"en",
                    "value":"one two three"
                },
                {
                    "lang":"de",
                    "value":"ein zwei drei"
                },
                {
                    "lang":"es",
                    "value":"uno dos tres"
                }
            ],
    ```

6.  Require at least one: Add contributions each with at least one child subcontribution to the module. A contribution must be one of four types, which determines where its subcontributions are returned to the HTML page:

    -   **head**

        These contributions are linked into the head section of the theme at the `co:head` dynamic content spot.

    -   **config**

        These contributions are added to the end of the body section in the theme at the co:config dynamic content spot.

    -   **menu**

        These contributions are available to be called by the theme menu framework.

    -   **dyn-cs**

        The outputs of these contributions are added to the theme at the specified dynamic content spot.

    See *Working with dynamic content spots*. Each contribution has at least one subcontribution. Each subcontribution has at least one URI to a resource, and exactly one of the URIs is returned from each subcontribution. Subcontributions each has a required type:

    -   **css**

        Cascading style sheet files can be added to head contributions only.

    -   **js**

        JavaScript files can be linked to head or config contributions.

    -   **json**

        JavaScript Object Notation output is used by menu contributions only.

    -   **markup**

        HTML can be served by head, config, or dyn-cs dynamic spots.

    -   **config\_static**

        This type is a JavaScript configuration object that is static, global and publicly cacheable, made available in head or config contributions.

    -   **config\_dynamic**

        This type is a JavaScript configuration object that can change based on the current page or user, made available in head or config contributions.

    See Contribution types. Given these contribution and subcontribution types, one can implement the following use cases in a module. See the sample code at the beginning of this topic to see all the following snippets put together.

    1.  Add a CSS file. If you add more than one CSS file of the same type, use a separate subcontribution for each one.

        ```
        <contribution type="head">
                        <sub-contribution type="css">
                            <uri value="res:/HelloWorld/css/helloWorld.css" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"head",
                        "sub-contributions":[{
                            "type":"css",
                            "uris":[{
                                "value":"/css/helloWorld.css"
                            }
                        }
                    }],
        ```

    2.  Define an alternative CSS file for bidirectional styles. These styles are only served up when using a `rtl` language.

        ```
        <contribution type="head">
                        <sub-contribution type="css">
                            <uri value="res:/HelloWorld/css/helloWorld.css" />
                            <!-- define alternate styles for right to left -->
                            <uri type="rtl" value="res:/HelloWorld/css/helloWorld_rtl.css" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"head",
                        "sub-contributions":[{
                            "type":"css",
                            "uris":[{
                                "value":"/css/helloWorld.css"
                            },
                            // define alternate styles for right to left
                            {
                                "value":"/css/helloWorld_rtl.css",
                                "type":"rtl"
                            }]
                        }
                    }],
        ```

    3.  Define a resource for a specific device class. Within the same subcontribution, add URIs with the appropriate device class string or equation identifier. See *Device class equations*.

        ```
        <contribution type="head">
                        <sub-contribution type="css">
                            <uri value="res:/HelloWorld/css/helloWorld.css" />
                            <!-- define alternate styles for an iPad -->
                            <uri deviceClass="tablet+iOS" value="res:/HelloWorld/css/helloWorld_iPad.css" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"head",
                        "sub-contributions":[{
                            "type":"css",
                            "uris":[{
                                "value":"/css/helloWorld.css"
                            },
                            // define alternate styles for an iPad
                            {
                                "value":"/css/helloWorld_iPad.css",
                                "deviceClass":"tablet+iOS"
                            }]
                        }
                    }],
        ```

    4.  Add a piece of markup to the head section, ensuring that the HTML validates within the head, such as a meta tag. Subcontributions of type markup can also be added to config or dyn-cs contributions.

        ```
        <contribution type="head">
                        <sub-contribution type="markup">
                            <uri value="res:/HelloWorld/markup/helloWorldHead.html" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"head",
                        "sub-contributions":[{
                            "type":"markup",
                            "uris":[{
                                "value":"/markup/helloWorldHead.html"
                            }]
                        }]
                    }],
        ```

    5.  Add a JavaScript file to the head section of the theme because it must be available for portlets to use, for example, a js library such as Dojo or jQuery\). If you add more than one JavaScript file of the same type, use a separate subcontribution for each one.

        ```
        <contribution type="head">
                        <sub-contribution type="js">
                            <uri value="res:/HelloWorld/js/helloWorldHead.js" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"head",
                        "sub-contributions":[{
                            "type":"js",
                            "uris":[{
                                "value":"/js/helloWorldHead.js"
                            }]
                        }]
                    }]
        ```

    6.  Define a JavaScript file in the config area. It performs better than adding it to the head, but the js is not available until after the portlets have loaded. If you add more than one JavaScript file of the same type, use a separate subcontribution for each one.

        ```
        <contribution type="config">
                        <sub-contribution type="js">
                            <uri value="res:/HelloWorld/js/helloWorldBody_root.js" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"config",
                        "sub-contributions":[{
                            "type":"js",
                            "uris":[{
                                "value":"/js/helloWorldBody_root.js"
                            }]
                        }]
                    }]
        ```

    7.  Define an alternative JavaScript file for other locales. Within the same subcontribution, add a second URI with the appropriate locale attribute.

        ```
        <contribution type="config">
                        <sub-contribution type="js">
                            <uri value="res:/HelloWorld/js/helloWorldBody_root.js" />
                            <!-- define alternate js for when the Portal is using different languages -->
                            <uri lang="en" value="res:/HelloWorld/js/helloWorldBody_en.js" />
                            <uri lang="de" value="res:/HelloWorld/js/helloWorldBody_de.js" />
                            <uri lang="es" value="res:/HelloWorld/js/helloWorldBody_es.js" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"config",
                        "sub-contributions":[{
                            "type":"js",
                            "uris":[{
                                "value":"/js/helloWorldBody_root.js"
                            },
                            // define alternate js for when the Portal is using different languages
                            {
                                "value":"/js/helloWorldBody_en.js",
                                "lang":"en"
                            },
                            {
                                "value":"/js/helloWorldBody_de.js",
                                "lang":"de"
                            },
                            {
                                "value":"/js/helloWorldBody_es.js",
                                "lang":"es"
                            }]
                        }]
                    }],
        ```

    8.  Define an alternative JavaScript file for debugging purposes. To debug the client-side code of a theme, supply a second entry for a debug subcontribution type debug to provide a more readable version of the JavaScript file. For more information, see *Enabling module tracing*.

        ```
        <contribution type="config">
                        <sub-contribution type="js">
                            <uri value="res:/HelloWorld/js/helloWorldBody_root.js" />
                            <!-- define alternate js for debugging purposes in LTR and RTL environments -->
                            <uri type="debug" value="res:/HelloWorld/js/helloWorldBody_debug.js" />
                            <uri type="debug,rtl" value="res:/HelloWorld/js/helloWorldBody_debug_rtl.js" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"config",
                        "sub-contributions":[{
                            "type":"js",
                            "uris":[{
                                "value":"/js/helloWorldBody_root.js"
                            },
                            // define alternate js for debugging purposes in LTR and RTL environments
                            {
                                "value":"/js/helloWorldBody_debug.js",
                                "type":"debug"
                            },
                            {
                                "value":"/js/helloWorldBody_debug_rtl.js",
                                "type":"debug,rtl"
                            }]
                        }]
                    }],
        ```

    9.  Add a dynamic JavaScript config object.

        ```
        <contribution type="config">
                        <sub-contribution type="config_dynamic">
                            <uri value="res:/HelloWorld/jsp/helloWorldBodyConfig.jsp" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"config",
                        "sub-contributions":[
                        {
                            "type":"config_dynamic",
                            "uris":[{
                                "value":"/config/helloWorldBodyConfig.js"
                            }]
                        }
                    }]
        ```

    10. Add a static JavaScript config object.

        ```
        <contribution type="config">
                        <sub-contribution type="config_static">
                            <uri value="res:/HelloWorld/jsp/helloWorldBodyStatic.jsp" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"config",
                        "sub-contributions":[
                        {
                            "type":"config_static",
                            "uris":[{
                                "value":"/config/helloWorldBodyStatic.js"
                            }]
                        }]
                    }]
        ```

    11. Define a menu contribution. Create a contribution of type menu with a subcontribution of type json. The subcontribution references a JSON file that defines the individual menu entries. See *Menu framework*.

        ```
        <contribution type="menu">
                        <sub-contribution type="json">
                            <uri value="res:/HelloWorld/js/helloWorld.json" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"menu",
                        "sub-contribution":[{
                            "type":"json",
                            "uris":[{
                                "value":"/js/helloWorld.json"
                            }]
                        }]
                    }]
        ```

    12. Define a dynamic spot. When the module is turned on, the output of this subcontribution replaces the default contents of the dynamic spot that is identified by the ref-id attribute. See *Dynamic contents spots*.

        ```
        <contribution type="dyn-cs">
                        <sub-contribution type="markup" ref-id="some_dynamic_spot_id">
                            <uri value="res:/HelloWorld/jsp/helloWorldDynamicSpot.jsp" />
                        </sub-contribution>
                    </contribution>
        ```

        ```
        "contributions":[{
                        "type":"dyn-cs",
                         "sub-contribution":[{
                            "type":"markup",
                            "ref-id":"some_dynamic_spot_id",
                            "uris":[{
                                "value":"/html/helloWorldDynamicSpot.html"
                            }]
                        }]
                    }]
        ```

7.  Give the module an activation handler. Use either the extensionID, used in these examples, or class attribute to indicate the ModuleActiveChecker implementation; both are supported. By default, all modules that are defined are active. An inactive module is treated the same as a module that is not defined. Therefore, inactive modules are not started during portal run time. Specify a key for activation or deactivation of the module with an entry in a resource environment provider in the application server. See *Adding resource environment provider properties*. Substitute the `RESOURCE_ENV_PROVIDER_NAME` with the name of the resource environment provider, and *KEY\_IN\_RESOURCE\_ENV\_PROVIDER* with the key within the resource environment provider. Valid key values are true if the module is active, or false if the module is inactive. For example, if you want to specify the `my.module.is.active` key for module activation in the resource environment provider ConfigService, the entry is:

    ```
    <repentry rep="ConfigService" key="my.module.is.active"/>
    ```

    ```
    <moduleActivation extensionID="com.ibm.portal.resourceaggregator.util.ResourceEnvironmentProviderModuleActivationHandler">
                <parameter name="rep" value="RESOURCE_ENV_PROVIDER_NAME" />
                <parameter name="key" value="KEY_IN_RESOURCE_ENV_PROVIDER"/> 
            </moduleActivation>
    ```

    ```
    "moduleActivation":{
                "extensionID":"com.ibm.portal.resourceaggregator.util.ResourceEnvironmentProviderModuleActivationHandler",
                "parameters":[{
                    "name":"rep",
                    "value":"RESOURCE_ENV_PROVIDER_NAME"
                },
                {
                    "name":"key",
                    "value":"KEY_IN_RESOURCE_ENV_PROVIDER"
                }]
            },
    ```

8.  Give the module a runtime activation handler with a condition. This allows a module to be turned on or off on a per page basis, which is based on the state of the current page. Currently, the runtime activation handler supports checking device class, which can be a string or an equation. See Device class equations.

    ```
    <runtimeActivation>
                <condition deviceClass="tablet"/> 
            </runtimeActivation>{code}
    
    ```

    ```
    "runtimeActivation":[{
                "condition":{
                    "deviceClass":"tablet"
                }
            }]
    ```



???+ info "Related information:"
    - [Providing custom styles for social lists](../../../social_rendering/customizing_view_definitions/customizing_visualdesign/customizing_css_social_list/soc_rendr_provide_custom_styles.md)
    - [Server-side framework](../../customizing_theme/menus/simple_menu_framework/themeopt_cust_serverframe.md)
    - [Adding jQuery to a theme](../../customizing_theme/add_jquery_to_theme/index.md)
    - [Resource bundles to support a Portal based custom theme](../../../../extend_dx/development_tools/portal_admin_tools/language_support/supporting_new_language/adding_resource_bundles_for_new_lang/adsuplang_add_rsrc_bndl_cstm.md)

