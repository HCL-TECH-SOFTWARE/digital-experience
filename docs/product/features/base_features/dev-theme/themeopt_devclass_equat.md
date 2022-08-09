# Device class equations

Device class equations are expressions that involve a mixture of device class operands and Boolean logic operators.

Valid syntax includes the following operators:

-   Parentheses

-   The `NOT` operator that is represented by "`!`"

-   The `AND` operator that is represented by "`+`"

-   The `OR` operator that is represented by "`/`"


The order of operations when you parse an equation follows the normal boolean logic order of operations: parentheses, `NOT`, `AND`, `OR`.

For example:

-   `android+smartphone`
-   `worklight+(ios/android)`
-   `(android/ios)+smartphone+!blackberry`

This dynamic content spot only displays for android smartphones.

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
         "deviceClass": "android+smartphone"      
        }]     
      }]   
    }]
  }] 
}
```

## Where to use device equations

Clients can have multiple device classes that are assigned in a comma separated list. These device classes on a client are then used in the device equations to determine what resources to provide or logic to run.

Device class equations are currently used with the Resource Aggregator. Subcontributions that use the device class attribute can now use equations to target resources to the device classes of the client that is accessing the resources.

MVC architecture for use in JSPs for loading dynamic spots that are based on client device classes.

Portal-if tag has a device class attribute that allows checking the client for a device equation.

**Parent topic:**[Device classes](../dev-theme/themeopt_devclass.md)

**Previous topic:**[Assigning device classes](../dev-theme/themeopt_devclass_assign.md)

**Related information**  


[Target MobileFirst resources](../integrate/wl_device_classes.md)

