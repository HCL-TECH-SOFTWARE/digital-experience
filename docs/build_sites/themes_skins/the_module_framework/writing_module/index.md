# Writing modules

You can define global or theme-specific contributions that contain a theme module, which applies to different scopes through theme profiles. A module defines its contributions by using a plugin.xml or JSON file.

-   **System modules**

    Available to all themes in the system by using a plugin.xml file as part of a compressed file in the portal class path, web module, or as a single file in the WEB-INF directory of a web module. The theme module must be declared within its extension point: com.ibm.portal.resourceaggregator.module.

-   **Theme-specific modules**

    Can be referenced only by the theme that defines them in a JSON file within its contributions folder. The contributions folder is the default folder, but the location can be changed by setting the resourceaggregation.contributions.folder metadata on the theme, as in the case of profiles. These files are automatically scanned by the system and the contributions that are defined are registered for the theme.

-   **XML schema**

    The following figure depicts the XML schema for this extension point:

    ![A contribution contains a contribution type.](../../../../images/themeopt-module-contribution-xsd.jpg)


The following code is an example of a plugin.xml file where the module is deployed within a web application with the context root res:\{war:context-root\}/.

```
<extension point="com.ibm.portal.resourceaggregator.module" id="testModuleExtension1"> 
        <module id="testModule1" version="1.0">

            <capability id="capabilityA" value="1.0.0"/>
            <capability id="capabilityB" value="1.5"/>

            <prereq id="testModuleA"/>
            <prereq id="testModuleB" minVersion="1.2.3.4"/>
            <prereq id="testModuleC" type="optional"/>

            <title lang="en" value="en Module"/>
            <title lang="de" value="de Module"/>
            <title lang="es" value="es Module"/>

            <description lang="en" value="one two three"/>
            <description lang="de" value="ein zwei drei"/>
            <description lang="es" value="uno dos tres"/>

            <contribution type="head">
                <sub-contribution type="css">
                    <uri value="res:{war:context-root}/css/helloWorld.css" />
                    <!-- define alternate styles for right to left -->
                    <uri type="rtl" value="res:{war:context-root}/css/helloWorld_rtl.css" />
                    <!-- define alternate styles for an iPad -->
                    <uri deviceClass="tablet+iOS" value="res:{war:context-root}/css/helloWorld_iPad.css" />
                </sub-contribution>
                <sub-contribution type="js">
                    <uri value="res:{war:context-root}/js/helloWorldHead.js" />
                </sub-contribution>
                <sub-contribution type="markup">
                    <uri value="res:{war:context-root}/markup/helloWorldHead.html" />
                </sub-contribution>
            </contribution>

            <contribution type="config">
                <sub-contribution type="js">
                    <uri value="res:{war:context-root}/js/helloWorldBody_root.js" />
                    <!-- define alternate js for when the Portal is using different languages -->
                    <uri lang="en" value="res:{war:context-root}/js/helloWorldBody_en.js" />
                    <uri lang="de" value="res:{war:context-root}/js/helloWorldBody_de.js" />
                    <uri lang="es" value="res:{war:context-root}/js/helloWorldBody_es.js" />
                    <!-- define alternate js for debugging purposes in LTR and RTL environments -->
                    <uri type="debug" value="res:{war:context-root}/js/helloWorldBody_debug.js" />
                    <uri type="debug,rtl" value="res:{war:context-root}/js/helloWorldBody_debug_rtl.js" />
                </sub-contribution>
                <sub-contribution type="config_dynamic">
                    <uri value="res:{war:context-root}/jsp/helloWorldBodyConfig.jsp" />
                </sub-contribution>
                <sub-contribution type="config_static">
                    <uri value="res:{war:context-root}/jsp/helloWorldBodyStatic.jsp" />
                </sub-contribution>
            </contribution>

            <contribution type="menu">
                <sub-contribution type="json">
                    <uri value="res:{war:context-root}/js/helloWorld.json" />
                </sub-contribution>
            </contribution>

            <contribution type="dyn-cs">
                <sub-contribution type="markup" ref-id="some_dynamic_spot_id">
                    <uri value="res:{war:context-root}/jsp/helloWorldDynamicSpot.jsp" />
                </sub-contribution>
            </contribution>

            <moduleActivation extensionID="com.ibm.portal.resourceaggregator.util.ResourceEnvironmentProviderModuleActivationHandler">
                <parameter name="rep" value="RESOURCE_ENV_PROVIDER_NAME" />
                <parameter name="key" value="KEY_IN_RESOURCE_ENV_PROVIDER"/> 
            </moduleActivation>

            <runtimeActivation>
                <condition deviceClass="tablet"/> 
            </runtimeActivation>

        </module> 
    </extension>

    <extension point="com.ibm.portal.resourceaggregator.module" id="testModuleExtension2"> 
        <module id="testModule2" version="1.0">
            <!-- Some other module... -->
        </module> 
    </extension>

    <extension point="com.ibm.portal.resourceaggregator.module" id="testModuleExtension3"> 
        <module id="testModule3" version="1.0">
            <!-- One last module... -->
        </module> 
    </extension>
```

The following code is an example of a myModules.json file that is stored in the contributions folder of a theme. The structure, keys, and values that are used in the plugin.xml file are adapted to a JSON format with these rules:

-   Keys that allow for multiple child entries on the same level are used in the plural form. For example, prereq becomes prereqs and capability becomes capabilities.
-   File paths must start with a forward slash and are resolved relative to the theme root folder.
-   JSP files cannot be served out of WebDAV. All resources relative to the theme root must be of a static type, for example, js, CSS, or HTML.

```
{
        "modules":[{
            "id":"testModule1",
            "version":"1.0",

            "capabilities":[{
                    "id":"capabilityA",
                    "value":"1.0.0"
                },
                {
                    "id":"capabilityB",
                    "value":"1.5"
                }
            ],

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
                    },
                    // define alternate styles for an iPad
                    {
                        "value":"/css/helloWorld_iPad.css",
                        "deviceClass":"tablet+iOS"
                    }]
                },
                {
                    "type":"js",
                    "uris":[{
                        "value":"/js/helloWorldHead.js"
                    }]
                },
                {
                    "type":"markup",
                    "uris":[{
                        "value":"/markup/helloWorldHead.html"
                    }]
                }]
            },{
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
                },
                {
                    "type":"config_dynamic",
                    "uris":[{
                        "value":"/config/helloWorldBodyConfig.js"
                    }]
                },
                {
                    "type":"config_static",
                    "uris":[{
                        "value":"/config/helloWorldBodyStatic.js"
                    }]
                }]
            },{
                "type":"menu",
                "sub-contribution":[{
                    "type":"json",
                    "uris":[{
                        "value":"/js/helloWorld.json"
                    }]
                }]
            },{
                "type":"dyn-cs",
                 "sub-contribution":[{
                    "type":"markup",
                    "ref-id":"some_dynamic_spot_id",
                    "uris":[{
                        "value":"/html/helloWorldDynamicSpot.html"
                    }]
                }]
            }],

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

            "runtimeActivation":[{
                "condition":{
                    "deviceClass":"tablet"
                }
            }]

        },{
            "id":"testModule2",
            "version":"1.0"
            // Some other module...
        },{
            "id":"testModule3",
            "version":"1.0"
            // One last module...
        }]
    }
```

## Contribution URIs for Web Modules

-   **\{war:context-root\}**

    This variable fetches the context root of the containing WAR file and inserts it in place. It only works for modules defined as part of a WAR file. This does not work for modules defined in WebDAV or somewhere else in the classloading hierarchy, for example, a shared application.


-   **[Defining theme modules](themeopt_mod_register.md)**  
You can define theme modules in XML or JSON.
-   **[Module schema definition](themeopt_mod_global.md)**  
You can use these elements to define theme modules.
-   **[Profile schema definition](themeopt_mod_pro_def.md)**  
You can write a profile schema with valid JSON.
-   **[Simple modules](../writing_module/simple_modules/index.md)**  
Simple modules for the resource aggregator framework are provided in the WebDAV folder. You can define modules quickly with a limited set of features with these simple modules.
-   **[Dynamically extending an existing menu item from a module](../writing_module/rwd_add_menu_module.md)**  
You can use a module to add menu items to a menu where the menu item displays only on certain pages.


???+ info "Related information:"
[Resource Aggregator overview](../themeopt_reso_agg.md)
[Modules and dynamic content spots](../../customizing_theme/dynamic_content_spots/working_with_dcs/themeopt_modules_dyn_cnt_spts.md)

<!--
[Components installed with Content Template](../ctc/ctc_inst_components.md) -->

