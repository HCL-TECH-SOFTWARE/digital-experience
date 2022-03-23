# Creating a dynamic content spot with a module 

In most situations, use the modularized approach to define dynamic content spots. This approach is more flexible than defining them through Resource Environment Providers. You can also switch the dynamic content spot per page and override existing content spot when you define them with a module.

A dynamic content spot is defined in theme.html. You must create a module with the ID `85theme_topNav` and then add that module to a profile. The following example renders the top navigation.

```
<a rel="dynamic-content" href="dyn-cs:id:85theme_topNav"></a>
```

For more information, see *Modules and dynamic content spots*.

1.  Define the module as a JSON file or as part of a plugin.xml file. The dynamic content spot ID is defined within the `ref-id` attribute on the sub contribution.

    -   The following example shows the definition of a module by using the JSON format. To define the override module as a JSON file. Add the file in WebDAV at fs-type1/themes/YourTheme/contributions/.

        ```
        { 
          "modules": [{   
            "id" : "topnavoverlay",
            "prereqs": [{    
              "id":"wp_dynamicContentSpots_85"  
            }],   
             "contributions": [{     
              "type":"dyn-cs",    
              "sub-contributions": [{       
                "type":"markup",       
                "ref-id":"85theme_topNav",       
                "uris": [{         
                  "value":"res:/your/sample.html"       
                }]     
              }]   
            }]
          }] 
        }
        ```

        -   **`id`**

            This value can be any meaningful ID that is unique to the system.

        -   **`ref-id`**

            The ID of the dynamic spot to override. In this example, it is `85theme_topNav`.

        -   **value**

            A pointer to the markup for the dynamic spot. In this example, it points to an HTML file relative to the theme location in WebDAV.

            **Note:** If you want to point to a .JSP file, you must define this module within a plugin.xml .

        -   **prereqs**

            The name of the module that is required or overridden by this module.

    -   You can also define the override module in a plugin.xml file.

        ```
        <extension point="com.ibm.portal.resourceaggregator.module" id="topnavoverlay" >
           <module id="topnavoverlay">
            <preqreq id="wp_dynamicContentSpots_85"/>
            <contribution type="dyn-cs">
              <sub-contribution type="markup" ref-id="85theme_topNav">
                 <uri value="res:/your/sample.jsp" />
               </sub-contribution>
             </contribution>
           </module>
         </extension>
        ```

        -   **`extension id`**

            This value can be any meaningful ID that is unique to the system.

        -   **`module id`**

            This value can be any meaningful ID that is unique to the system.

        -   **`sub-contribution ref-id`**

            The ID of the dynamic spot to override. In this example, it is `85theme_search`.

        -   **`uri value`**

            A pointer to the markup for the dynamic spot.

        -   **prereqs**

            The name of the module that is required or overridden by this module.

2.  Include the module in a profile.

    For example, in newtopnav\_profile.json.

    ```
    {{
      {
    	  "moduleIDs": [
    	  "topnavoverlay",
    	  ...
    }}
    
    ```

    The newtopnav\_profile.json file must be copied to WebDAV at fs-type1/themes/YourTheme/profiles/. For more information, see *Create a module profile*.

3.  Apply the profile to a page hierarchy.

    You can change the profile for the theme or a specific page to define the modules that are loaded. For more information, see *Changing the theme profile*.


**Parent topic:**[Creating dynamic content spots ](../dev-theme/themeopt_cust_creat_dyn_con_spot_parent.md)

**Related information**  


[Create a module profile](../dev-theme/themeopt_update_modprof.md)

[Changing the theme profile](../dev-theme/themeopt_cust_changepro.md)

